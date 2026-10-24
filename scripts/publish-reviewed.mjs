// Publish reviewed articles: flip every `status: "reviewed"` file (masters AND
// translations) to `status: "published"`. A reviewed file already carries its
// sign-off (reviewer/reviewed) and the corpus convention leaves `published: null`
// (that date is derived from git, not hand-set).
//
// One more thing is set here: if a file has NO `reviewDue`, we stamp the policy
// date (scripts/lib/review-cadence.mjs) from its reviewed/updated/today baseline,
// so a freshly published page cannot escape the freshness queue by lacking a
// due-date. A reviewDue already on the file is authoritative and left untouched.
// reviewDue is not in the translation hash, so stamping it is freshness-neutral.
//
// HARD GATE: only files whose status is exactly "reviewed" are flipped, so this
// can never revert a published page or promote an unreviewed draft. Idempotent.
//
// Usage:
//   node scripts/publish-reviewed.mjs                       # dry-run, all reviewed
//   node scripts/publish-reviewed.mjs --apply               # publish all reviewed
//   node scripts/publish-reviewed.mjs --apply <cat/slug>... # only these bases (+langs)
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { computeReviewDue } from './lib/review-cadence.mjs';

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const bases = args.filter((a) => !a.startsWith('--')); // optional cat/slug allow-list

function walk(d) {
  let o = [];
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) o = o.concat(walk(p));
    else if (e.name.endsWith('.md')) o.push(p);
  }
  return o;
}

// Does this file belong to one of the allow-listed bases (any language)?
function inScope(f) {
  if (!bases.length) return true;
  const rel = f.replace(/\\/g, '/').replace(/^knowledge\//, '').replace(/\.(en|ms|zh)\.md$/, '.md').replace(/\.md$/, '');
  return bases.some((b) => b.replace(/\.md$/, '') === rel);
}

let flipped = 0;
const byCat = {};
for (const f of walk('knowledge')) {
  if (!inScope(f)) continue;
  let raw = readFileSync(f, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) continue;
  const fm = m[1];
  // HARD GATE — only advance a reviewed file. Never touch draft/in-review/
  // published/archived/update states.
  if (!/^status:\s*"?reviewed"?\s*$/m.test(fm)) continue;
  let next = fm.replace(/^status:\s*"?reviewed"?\s*$/m, 'status: "published"');
  // Stamp a policy reviewDue if the file has none — a published page must be in
  // the freshness queue. An existing reviewDue is authoritative; leave it.
  if (!/^reviewDue:/m.test(fm)) {
    const val = (k) => (fm.match(new RegExp(`^${k}:[ \\t]*"?([^"\\n]*)"?`, 'm')) ?? [])[1]?.trim();
    const baseline = val('reviewed') || val('updated') || new Date().toISOString().slice(0, 10);
    const due = computeReviewDue(baseline, val('tier') ?? '3', val('sensitivity') ?? 'none');
    next = /^reviewed:.*$/m.test(next)
      ? next.replace(/^reviewed:.*$/m, (ln) => `${ln}\nreviewDue: ${due}`)
      : next.replace(/^status:.*$/m, (ln) => `${ln}\nreviewDue: ${due}`);
  }
  if (next === fm) continue;
  if (APPLY) writeFileSync(f, raw.replace(fm, next), 'utf8');
  flipped++;
  const cat = f.replace(/\\/g, '/').split('/')[1];
  byCat[cat] = (byCat[cat] || 0) + 1;
}

console.log(`${APPLY ? '[published]' : '[dry-run]'} reviewed -> published: ${flipped} file(s)`);
console.log(JSON.stringify(byCat));
if (!APPLY) console.log('(pass --apply to write)');
