// Publish reviewed Phase-2 masters: flips every `status: "in-review"` file to
// "published", stamps reviewer + reviewed/reviewDue dates to match the existing
// published corpus. Keeps `aiAssisted: true` (AI-provenance disclosure).
// Idempotent. Usage: node scripts/phase2-publish.mjs [--apply]
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const APPLY = process.argv.includes('--apply');
const REVIEWER = 'ashton-tan';
const REVIEWED = '2026-08-03';
const REVIEW_DUE = '2027-08-03';

function walk(d){let o=[];for(const e of readdirSync(d,{withFileTypes:true})){const p=join(d,e.name);if(e.isDirectory())o=o.concat(walk(p));else if(e.name.endsWith('.md'))o.push(p);}return o;}

let n = 0; const byCat = {};
for (const f of walk('knowledge')) {
  let raw = readFileSync(f, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) continue;
  let fm = m[1];
  if (!/^status:\s*"?in-review"?\s*$/m.test(fm)) continue;
  const before = fm;
  // status -> published
  fm = fm.replace(/^status:\s*"?in-review"?\s*$/m, 'status: "published"');
  // reviewer -> named human
  fm = fm.replace(/^reviewer:\s*(null|"?[a-z0-9-]+"?)\s*$/m, `reviewer: "${REVIEWER}"`);
  // ensure reviewed + reviewDue exist (insert right after the reviewer line)
  if (!/^reviewed:/m.test(fm)) {
    fm = fm.replace(/^(reviewer:.*)$/m, `$1\nreviewed: ${REVIEWED}\nreviewDue: ${REVIEW_DUE}`);
  }
  if (fm === before) continue;
  raw = raw.replace(before, fm);
  if (APPLY) writeFileSync(f, raw, 'utf8');
  n++;
  const cat = f.split(/[\\/]/)[1];
  byCat[cat] = (byCat[cat] || 0) + 1;
}
console.log(`${APPLY ? '[published]' : '[dry-run]'} in-review -> published: ${n} file(s)`);
console.log(JSON.stringify(byCat));
if (!APPLY) console.log('(pass --apply to write)');
