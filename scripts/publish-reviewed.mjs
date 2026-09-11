// Publish reviewed articles: flip every `status: "reviewed"` file (masters AND
// translations) to `status: "published"`. Nothing else is touched — a reviewed
// file already carries its sign-off (reviewer/reviewed/reviewDue) and the corpus
// convention leaves `published: null` (that date is derived from git, not hand-set).
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
  const next = fm.replace(/^status:\s*"?reviewed"?\s*$/m, 'status: "published"');
  if (next === fm) continue;
  if (APPLY) writeFileSync(f, raw.replace(fm, next), 'utf8');
  flipped++;
  const cat = f.replace(/\\/g, '/').split('/')[1];
  byCat[cat] = (byCat[cat] || 0) + 1;
}

console.log(`${APPLY ? '[published]' : '[dry-run]'} reviewed -> published: ${flipped} file(s)`);
console.log(JSON.stringify(byCat));
if (!APPLY) console.log('(pass --apply to write)');
