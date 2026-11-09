// build-bloom-svg.mjs — emit the shared Bunga Raya (hibiscus) logo shape as ONE
// cached external SVG sprite at public/brand/bloom.svg, referenced via
// <use href="/brand/bloom.svg#bloom"> from the header logo (Header.astro) and the
// article hero watermark (ArticleView.astro / AboutView.astro).
//
// WHY: the ~17 KB FLOWER_D path was inlined on EVERY page — once in the header on
// all ~25.6k pages, plus once in the hero on all ~17.3k article pages. The Pages
// artifact is a single deflate stream whose 32 KB back-reference window can't reach
// the previous page's copy, so each inlined flower cost almost its full size in the
// compressed artifact (~385 MB total — the main reason the artifact sat at 1.38 GB,
// over GitHub Pages' 1 GB limit, causing intermittent syncing_files deploy timeouts).
// One external file, fetched and cached once by the browser, removes that bloat and
// also shrinks every page ~29% (a load-perf win). The fill is `currentColor`, so the
// header renders it gold (.brand-mark { color: var(--gold) }) and the hero renders it
// a faint gold tint (.hero-bloom { color: var(--gold); opacity: .09 }) — identical to
// the inline version. SSOT for the path = scripts/logo-flower.mjs (same source the OG
// cards use), so the sprite can never drift from the in-app inline logo.

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { FLOWER_D } from './logo-flower.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, '..', 'public', 'brand');
const outFile = resolve(outDir, 'bloom.svg');

// A bare group (no viewBox): referenced by <use>, it drops the flower's native
// 0–776 geometry straight into each call site, exactly as the inline <path> did —
// so the hero's `viewBox="0 0 776 776"` and the header's translate/scale transform
// keep positioning it unchanged. `fill="currentColor"` defers color to the use site.
const svg =
  `<svg xmlns="http://www.w3.org/2000/svg">` +
  `<g id="bloom" fill="currentColor" fill-rule="evenodd"><path d="${FLOWER_D}"/></g>` +
  `</svg>\n`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, svg);
console.log(`[bloom] wrote public/brand/bloom.svg (${(svg.length / 1024).toFixed(1)} KB)`);
