// Corpus-wide status promotion (one snapshot pass, applied per file):
//   draft      -> in-review   (reviewer stays as-is)
//   in-review  -> published   (reviewer := ashton-tan; add reviewed + reviewDue)
// Runs over every knowledge/**/*.md (masters AND translations). Idempotent.
// Usage: node scripts/phase2-status-flip.mjs [--apply]
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const APPLY = process.argv.includes('--apply');
const REVIEWER = 'ashton-tan';
const REVIEWED = '2026-08-08';
const REVIEW_DUE = '2027-08-08';

function walk(d){let o=[];for(const e of readdirSync(d,{withFileTypes:true})){const p=join(d,e.name);if(e.isDirectory())o=o.concat(walk(p));else if(e.name.endsWith('.md'))o.push(p);}return o;}

let toReview = 0, toPub = 0;
for (const f of walk('knowledge')) {
  let raw = readFileSync(f, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) continue;
  let fm = m[1];
  const status = (fm.match(/^status:\s*"?([\w-]+)"?/m) || [])[1];
  const before = fm;
  if (status === 'draft') {
    fm = fm.replace(/^status:\s*"?draft"?\s*$/m, 'status: "in-review"');
    toReview++;
  } else if (status === 'in-review') {
    fm = fm.replace(/^status:\s*"?in-review"?\s*$/m, 'status: "published"');
    fm = fm.replace(/^reviewer:\s*(null|"?[a-z0-9-]+"?)\s*$/m, `reviewer: "${REVIEWER}"`);
    if (!/^reviewed:/m.test(fm)) {
      fm = fm.replace(/^(reviewer:.*)$/m, `$1\nreviewed: ${REVIEWED}\nreviewDue: ${REVIEW_DUE}`);
    }
    toPub++;
  } else {
    continue;
  }
  if (fm === before) continue;
  raw = raw.replace(before, fm);
  if (APPLY) writeFileSync(f, raw, 'utf8');
}
console.log(`${APPLY ? '[applied]' : '[dry-run]'} draft->in-review: ${toReview} | in-review->published: ${toPub}`);
