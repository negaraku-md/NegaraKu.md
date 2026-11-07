// Where the Open Graph cards are served from.
//
// By DEFAULT this is empty, and every card resolves to a same-origin `/og/...`
// path that ships inside the GitHub Pages artifact (the historical behaviour).
//
// Set the build-time env var `OG_BASE_URL` (e.g. `https://og.negaraku.md`) to
// serve the cards from a Cloudflare R2 bucket instead. The deploy workflow then
// syncs `public/og` to R2 and strips `dist/og` from the Pages artifact, so the
// 823 MB of OG cards (14k PNG share-images + 14k WebP thumbnails, ~28k files)
// no longer bloat the upload. Flipping the var back to empty restores the
// same-origin behaviour on the next deploy — fully reversible.
//
// The R2 bucket mirrors the CONTENTS of `public/og` at its root, so the leading
// `/og` segment is dropped when a base is set:
//   off : /og/en/food-lifestyle/teksen.png
//   on  : https://og.negaraku.md/en/food-lifestyle/teksen.png
const OG_BASE = (
  (typeof process !== 'undefined' && process.env && process.env.OG_BASE_URL) || ''
).replace(/\/+$/, '');

/** True when OG cards are served off-origin (from R2). */
export const OG_OFFLOADED = OG_BASE !== '';

/**
 * Resolve an `/og/...` root path to the URL the browser/crawler should fetch —
 * the R2 host when `OG_BASE_URL` is set, else the same-origin path unchanged.
 * Used for on-page `<img>` thumbnails (relative is fine same-origin).
 */
export function ogAsset(rootPath: string): string {
  return OG_BASE ? OG_BASE + rootPath.replace(/^\/og/, '') : rootPath;
}

/**
 * Absolute URL for a social `<meta og:image>` / `twitter:image` — always
 * absolute. R2 host when configured, else the path resolved against `site`.
 */
export function ogMetaUrl(rootPath: string, site: URL | string | undefined): string {
  if (OG_BASE) return OG_BASE + rootPath.replace(/^\/og/, '');
  return new URL(rootPath, site).toString();
}
