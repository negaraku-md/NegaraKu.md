// Where the Pagefind search bundle is served from.
//
// By DEFAULT this is empty, and the search view imports the bundle from the
// same-origin `/pagefind/pagefind.js` that ships inside the GitHub Pages
// artifact (the historical behaviour).
//
// Set the build-time env var `PAGEFIND_BASE_URL` (e.g.
// `https://og.negaraku.md/_pagefind`) to serve the bundle from a Cloudflare R2
// bucket instead. The deploy workflow then syncs `dist/pagefind` to the bucket
// under the `_pagefind/` prefix and strips it from the Pages artifact, so the
// ~188 MB search index (≈27k .pf_fragment / .pf_index shards — pagefind's
// binaries are already compressed, so they cost ~their full size in the single
// deflate-stream artifact) no longer bloats the <1 GiB upload. Flipping the var
// back to empty restores same-origin on the next deploy — fully reversible.
//
// Pagefind derives its asset base path from the URL `pagefind.js` is imported
// from (`import.meta.url`), so importing from the R2 host makes it fetch every
// shard from R2 automatically — no `basePath` option needed. Two consequences
// the search view handles explicitly:
//   • the shards are fetched cross-origin (`fetch`) and the bundle is a
//     cross-origin dynamic `import()`, so the R2 bucket needs a GET/HEAD CORS
//     policy for the site origin (the deploy step asserts one; see deploy.yml).
//   • pagefind would otherwise derive result-link URLs from the R2 origin too
//     (`getDefaultBaseUrl`), pointing every hit at og.negaraku.md. The view
//     pins `baseUrl: '/'` so links stay same-origin — the same value pagefind
//     derives in the same-origin case, so it is a no-op when not offloaded.
//
// The R2 keys mirror the dist layout under the prefix, so the base already
// includes it:
//   off : /pagefind/pagefind.js                        (same-origin, in artifact)
//   on  : https://og.negaraku.md/_pagefind/pagefind.js
const PAGEFIND_BASE = (
  (typeof process !== 'undefined' && process.env && process.env.PAGEFIND_BASE_URL) || ''
).replace(/\/+$/, '');

/** True when the search bundle is served off-origin (from R2). */
export const PAGEFIND_OFFLOADED = PAGEFIND_BASE !== '';

/**
 * URL the search view should dynamically `import()` pagefind.js from — the R2
 * host when `PAGEFIND_BASE_URL` is set, else the same-origin bundle unchanged.
 */
export function pagefindEntry(): string {
  return PAGEFIND_BASE ? `${PAGEFIND_BASE}/pagefind.js` : '/pagefind/pagefind.js';
}
