// PUPA post-build step. Runs automatically at the end of every `astro build`
// (locally and on Cloudflare), working on the finished files in dist/.
//
// 1. Responsive photos: for every <img> that shows a JPEG from /images/, it
//    makes WebP copies at a few widths (in dist/_img/) and adds `srcset`, so
//    phones download a small file and big screens a sharp one. The original
//    JPEG stays as the fallback `src`. A component can set its own `sizes`
//    attribute; otherwise a sensible default is used.
// 2. Strict security policy: it fingerprints (SHA-256) every inline script the
//    site uses and writes those fingerprints into dist/_headers, replacing
//    'unsafe-inline'. Browsers then run only the site's own scripts.
//
// Nothing here changes the source files; it only rewrites the build output.
import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const WIDTHS = [400, 800, 1200, 1600];
const QUALITY = 78;

async function htmlFiles(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await htmlFiles(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`));
  return m ? m[1] : null;
};

export default function pupaPostBuild() {
  return {
    name: 'pupa-post-build',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const files = await htmlFiles(root);
        const srcsets = new Map(); // "/images/x.jpg" -> srcset string (or null)
        await mkdir(path.join(root, '_img'), { recursive: true });

        async function srcsetFor(src) {
          if (srcsets.has(src)) return srcsets.get(src);
          const file = path.join(root, decodeURI(src));
          let result = null;
          try {
            await stat(file);
            const { width } = await sharp(file).metadata();
            const widths = WIDTHS.filter((w) => w < width);
            widths.push(Math.min(width, WIDTHS[WIDTHS.length - 1]));
            const base = src.slice('/images/'.length).replace(/\.[^.]+$/, '').replaceAll('/', '__');
            const parts = [];
            for (const w of [...new Set(widths)]) {
              const name = `/_img/${base}-${w}.webp`;
              await sharp(file).resize({ width: w, withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(path.join(root, name));
              parts.push(`${name} ${w}w`);
            }
            result = parts.join(', ');
          } catch (err) {
            logger.warn(`responsive image skipped for ${src}: ${err.message}`);
          }
          srcsets.set(src, result);
          return result;
        }

        const scriptHashes = new Set();
        let imgCount = 0;
        for (const f of files) {
          let html = await readFile(f, 'utf8');

          // 1. responsive photos
          const tags = [...new Set(html.match(/<img\b[^>]*>/g) || [])];
          for (const tag of tags) {
            const src = attr(tag, 'src');
            if (!src || !/^\/images\/.+\.jpe?g$/i.test(src) || attr(tag, 'srcset') !== null) continue;
            const srcset = await srcsetFor(src);
            if (!srcset) continue;
            const w = Number(attr(tag, 'width')) || 760;
            const sizes = attr(tag, 'sizes') ?? (w >= 1200 ? '100vw' : `(max-width: 960px) 100vw, ${w}px`);
            const cleaned = tag.replace(/\ssizes="[^"]*"/, '');
            const updated = cleaned.replace(/^<img\b/, `<img srcset="${srcset}" sizes="${sizes}"`);
            html = html.split(tag).join(updated);
            imgCount++;
          }
          await writeFile(f, html);

          // 2. fingerprints of inline scripts (structured data is not run, so it is skipped)
          for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
            const [, attrs, body] = m;
            if (/\ssrc=/.test(attrs) || /type="application\/ld\+json"/.test(attrs) || !body.trim()) continue;
            scriptHashes.add(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`);
          }
        }

        const headersPath = path.join(root, '_headers');
        const headers = await readFile(headersPath, 'utf8');
        const strict = headers.replace("script-src 'self' 'unsafe-inline'", `script-src 'self' ${[...scriptHashes].sort().join(' ')}`);
        if (strict === headers) throw new Error("pupa-post-build: could not find \"script-src 'self' 'unsafe-inline'\" in _headers");
        await writeFile(headersPath, strict);

        logger.info(`responsive photos: ${srcsets.size} images, ${imgCount} tags; inline scripts fingerprinted: ${scriptHashes.size}`);
      },
    },
  };
}
