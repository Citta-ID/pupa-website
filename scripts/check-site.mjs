// Site check — run after `npm run build` (the GitHub "Build check" runs it on
// every push). It fails, listing the problems, if the built site has:
//   - a link, image, srcset entry or stylesheet pointing to a file that doesn't exist
//   - a page without exactly one <h1>, or without a meta description
//   - an inline script the security policy (dist/_headers) doesn't allow
//   - 'unsafe-inline' left in the script policy
import { readdir, readFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const root = path.resolve('dist');
const problems = [];
const exists = async (p) => access(p).then(() => true, () => false);

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

async function resolves(url) {
  const clean = decodeURI(url.split('#')[0].split('?')[0]);
  if (!clean) return true;
  const p = path.join(root, clean);
  return (await exists(p)) || (await exists(path.join(p, 'index.html'))) || (await exists(p + '.html'));
}

const headers = await readFile(path.join(root, '_headers'), 'utf8');
const scriptPolicy = (headers.match(/script-src ([^;]+)/) || [])[1] || '';
if (scriptPolicy.includes("'unsafe-inline'")) problems.push("_headers: script-src still allows 'unsafe-inline'");

const files = await walk(root);
const pages = files.filter((f) => f.endsWith('.html'));
for (const file of pages) {
  const rel = '/' + path.relative(root, file);
  const html = await readFile(file, 'utf8');
  const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const m of html.matchAll(/\ssrcset="([^"]+)"/g)) refs.push(...m[1].split(',').map((s) => s.trim().split(/\s+/)[0]));
  for (const ref of refs) {
    const u = ref.replaceAll('&amp;', '&');
    if (!u.startsWith('/') || u.startsWith('//')) continue;
    if (!(await resolves(u))) problems.push(`${rel}: missing ${u}`);
  }
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) problems.push(`${rel}: ${h1} <h1> headings (expected 1)`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) problems.push(`${rel}: no meta description`);
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    const [, attrs, body] = m;
    if (/\ssrc=/.test(attrs) || /application\/ld\+json/.test(attrs) || !body.trim()) continue;
    const hash = `'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`;
    if (!scriptPolicy.includes(hash)) problems.push(`${rel}: inline script not allowed by the security policy`);
  }
  if (/\son[a-z]+="/i.test(html.replace(/<script[\s\S]*?<\/script>/g, ''))) problems.push(`${rel}: inline event handler (e.g. onclick=) — blocked by the security policy`);
}

const unique = [...new Set(problems)];
if (unique.length) {
  console.error(`Site check found ${unique.length} problem(s):\n` + unique.slice(0, 60).map((p) => '  - ' + p).join('\n'));
  process.exit(1);
}
console.log(`Site check passed: ${pages.length} pages, no missing files, headings and descriptions OK, all inline scripts allowed.`);
