// inline-critical-css.mjs — postbuild: kill render-blocking CSS on the LANDING
// pages (home + static pages + category/pillar hubs) by inlining their critical
// CSS and loading the full stylesheet async (Beasties, preload:'swap').
//
// Why scoped, not site-wide:
//   • Blanket inlineStylesheets:'always' OOMs the build (see astro.config note).
//   • Per-page critical on all ~21k pages inlines ~34 KB each → ~670 MB of dist
//     bloat and a very slow build — not worth it for a lab-only 480 ms when CWV
//     already passes.
//   • Articles share ONE cached stylesheet; a reader landing on an article and
//     then browsing pays the CSS cost once. The pages where a cold first paint
//     matters most AND where critical is cheap (small list DOMs) are the home,
//     static and hub pages — exactly this set (~600 pages, ~65 ms each).
//
// Article/entry pages (…/<category>/<slug>/, from the manifest) are skipped, so
// they keep the plain render-blocking <link> (no FOUC risk, no dist bloat).
//
// Runs on dist/ after `astro build`, before pagefind. Idempotent-ish: Beasties
// won't double-process a page whose <link> is already preload-swapped.

import Beasties from 'beasties';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const LOCALES = ['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr'];

// A page is a LANDING page (home / static / category or pillar hub / index) when
// it has at most ONE path segment after the optional locale prefix:
//   /            /en/              → 0 segments  (home, locale home)
//   /start  /about  /business/     → 1 segment   (static page, category hub)
//   /en/start  /en/business/       → 1 segment   (localized static / hub)
// Everything deeper is an article or glossary/entry page (…/<cat>/<slug>/,
// …/glossary/<term>/) — skipped, so the 21k content pages keep the plain cached
// stylesheet (no dist bloat, no per-page critical cost).
function isLanding(url) {
  let segs = url.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  if (LOCALES.includes(segs[0])) segs = segs.slice(1);
  return segs.length <= 1;
}

async function walk(dir, out = []) {
  for (const d of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) await walk(p, out);
    else if (d.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const urlOf = (file) => {
  let rel = path.relative(DIST, file).replace(/\\/g, '/').replace(/index\.html$/, '').replace(/\.html$/, '');
  rel = '/' + rel.replace(/^\/+/, '');
  return rel.endsWith('/') ? rel : rel + '/';
};

const files = await walk(DIST);
const beasties = new Beasties({ path: DIST, publicPath: '/', preload: 'swap', pruneSource: false, logLevel: 'silent' });

let processed = 0, skippedDeep = 0, skippedNoCss = 0, failed = 0;
const t0 = Date.now();
for (const file of files) {
  const url = urlOf(file);
  if (!isLanding(url)) { skippedDeep++; continue; } // articles + glossary/entry pages
  const html = await readFile(file, 'utf8');
  // Only pages that still have a render-blocking bundled stylesheet.
  if (!/<link[^>]+rel=["']stylesheet["'][^>]*\/_astro\//.test(html)) { skippedNoCss++; continue; }
  try {
    const out = await beasties.process(html);
    await writeFile(file, out);
    processed++;
  } catch (e) {
    failed++;
    console.warn(`[critical-css] skip ${url}: ${e.message}`);
  }
}
const secs = ((Date.now() - t0) / 1000).toFixed(1);
console.log(`[critical-css] inlined ${processed} landing pages in ${secs}s · skipped ${skippedDeep} deep (articles/entries) + ${skippedNoCss} no-css${failed ? ` · ${failed} failed` : ''}`);
