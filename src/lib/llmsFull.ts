// Where the per-language full-corpus dumps (llms-full.txt) are served from.
//
// By DEFAULT this is empty, and every link resolves to a same-origin
// `/<lang>/llms-full.txt` path that ships inside the GitHub Pages artifact
// (the historical behaviour).
//
// Set the build-time env var `LLMS_FULL_BASE_URL` (e.g.
// `https://og.negaraku.md/_llms`) to serve them from Cloudflare R2 instead. The
// deploy workflow then syncs `dist/**/llms-full.txt` to the bucket under the
// `_llms/` prefix and strips them from the Pages artifact, so the ~301 MB of
// whole-corpus dumps (14 files, one per language) no longer bloat the <1 GiB
// upload. Flipping the var back to empty restores same-origin on the next deploy
// — fully reversible.
//
// Unlike the per-article `.md` endpoint (whose contract is literally "append
// `.md` to any article URL", so it MUST stay same-origin), llms-full.txt is a
// `## Optional` bulk resource in llms.txt with no same-origin contract — a CDN
// host is fine, and only the handful of links to it change.
//
// The R2 keys mirror the dist paths under the prefix, so the base already
// includes it:
//   off : /en/llms-full.txt            (same-origin, in the artifact)
//   on  : https://og.negaraku.md/_llms/en/llms-full.txt
const LLMS_FULL_BASE = (
  (typeof process !== 'undefined' && process.env && process.env.LLMS_FULL_BASE_URL) || ''
).replace(/\/+$/, '');

/** True when the full-corpus dumps are served off-origin (from R2). */
export const LLMS_FULL_OFFLOADED = LLMS_FULL_BASE !== '';

/**
 * Resolve a `/<lang>/llms-full.txt` path (as produced by `localePath`) to the
 * URL a crawler/visitor should fetch — the R2 host when `LLMS_FULL_BASE_URL` is
 * set, else the same-origin path. Pass `site` to force an absolute URL (for
 * machine indexes / JSON-LD); omit it for an on-page link where same-origin
 * relative is fine.
 */
export function llmsFullUrl(localePathValue: string, site?: URL | string): string {
  if (LLMS_FULL_BASE) return LLMS_FULL_BASE + localePathValue;
  return site ? new URL(localePathValue, site).toString() : localePathValue;
}
