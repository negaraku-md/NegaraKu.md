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
const res = spawnSync(process.execPath, [script], { stdio: 'inherit' });

if (res.status === 0) {
  process.exit(0);
}

const how = res.signal ? `signal ${res.signal}` : `exit ${res.status}`;
console.warn(
  `[og] build-og.mjs failed (${how}) — continuing the build with degraded/stale ` +
    `social-preview cards. This is intentionally non-fatal; the site still deploys.`,
);
process.exit(0);
