// clean-cache.mjs — remove Astro's content-layer cache.
//
// Why this exists: Astro's glob content loader keeps an incremental data store
// under `.astro/` (and `node_modules/.astro/`). During heavy content churn —
// e.g. adding 1,000+ translation files across many builds — that store can hold
// stale entries and then emit `[glob-loader] Duplicate id "…" … Later items
// will overwrite earlier ones` on the next sync, even though the files on disk
// have no real duplicate ids. The warnings are a cache artifact, not a data
// problem, and a clean store makes them disappear.
//
// Run automatically before a production `build` (see package.json prebuild) so
// deploys always start from a clean store, and available as `npm run clean`
// for the dev server if the warnings ever appear.

import { rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const targets = ['.astro', path.join('node_modules', '.astro')];

for (const t of targets) {
  try {
    rmSync(path.join(ROOT, t), { recursive: true, force: true });
    console.log(`[clean-cache] removed ${t}`);
  } catch (e) {
    console.log(`[clean-cache] skip ${t} (${e.code || e.message})`);
  }
}
