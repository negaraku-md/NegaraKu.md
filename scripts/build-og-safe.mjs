#!/usr/bin/env node
/**
 * Non-fatal wrapper around build-og.mjs.
 *
 * OG cards are social-preview images — a rendering failure must NEVER abort the
 * whole site deploy (the prebuild chain is joined by `&&`, so any non-zero exit
 * there kills the build before `astro build` ever runs). We learned this the
 * hard way: an embedded-font SVG segfaulted librsvg (inside sharp) on CI Linux
 * with exit 139, which took the entire Pages deploy down — the site kept serving
 * a stale build with a whole language missing.
 *
 * A segfault kills the child by SIGNAL, so no try/catch inside build-og.mjs can
 * trap it. Running it as a child and always exiting 0 here is the only robust,
 * cross-platform (Windows cmd + CI bash) way to let the build continue with
 * degraded social cards instead of no deploy at all.
 *
 * Correctness/content steps (validate-frontmatter, check-internal-links --strict)
 * stay OUTSIDE this wrapper and keep gating the build as before.
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const script = path.join(import.meta.dirname, 'build-og.mjs');

// A FULL regenerate (after a `tv` bump) renders ~14k cards in one process and can
// SIGSEGV libvips mid-run from accumulated native memory. build-og.mjs now writes
// a resume checkpoint every few batches, so re-running it continues where it left
// off (already-rendered cards are skipped by the hash check). Retry a bounded
// number of times; each pass makes progress, so the full regen completes across
// retries instead of leaving a whole corpus of stale/degraded cards.
const MAX_ATTEMPTS = 10;

let res;
for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
  res = spawnSync(process.execPath, [script], { stdio: 'inherit' });
  if (res.status === 0) process.exit(0);
  const how = res.signal ? `signal ${res.signal}` : `exit ${res.status}`;
  if (attempt < MAX_ATTEMPTS) {
    console.warn(
      `[og] build-og.mjs failed (${how}) on attempt ${attempt}/${MAX_ATTEMPTS} — ` +
        `retrying; it resumes from the last checkpoint (rendered cards are skipped).`,
    );
  }
}

const how = res.signal ? `signal ${res.signal}` : `exit ${res.status}`;
console.warn(
  `[og] build-og.mjs still failing (${how}) after ${MAX_ATTEMPTS} attempts — continuing ` +
    `the build with degraded/stale social-preview cards. This is intentionally non-fatal; ` +
    `the site still deploys.`,
);
process.exit(0);
