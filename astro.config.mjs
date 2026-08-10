// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Canonical production URL (kept in sync with src/lib/site.ts).
const SITE = 'https://negaraku.md';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  // Honor a harness/CI-assigned PORT (enables preview autoPort when 4321 is
  // busy); fall back to Astro's default 4321 for a plain `npm run dev`.
  server: { port: Number(process.env.PORT) || 4321, host: true },
  i18n: {
    defaultLocale: 'ms',
    locales: ['ms', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: false, // ms lives at "/", en at "/en", zh at "/zh"
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'ms',
        locales: { ms: 'ms-MY', en: 'en', zh: 'zh-Hans' },
      },
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
