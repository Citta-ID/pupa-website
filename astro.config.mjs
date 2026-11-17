import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pupaPostBuild from './integrations/pupa-post-build.mjs';

export default defineConfig({
  site: 'https://www.pupacenter.org',
  integrations: [sitemap({
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date(),
  }), pupaPostBuild()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id', 'ko'],
    routing: { prefixDefaultLocale: false },
  },
});
