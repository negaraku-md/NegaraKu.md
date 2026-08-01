// Set Phase 2 AI-draft masters to status: "in-review" (submitted for human
// review — NOT published, NOT falsely marked reviewed). Scoped to the files
// listed in scripts/phase2-rows.json. Idempotent: reverts any earlier
// draft/published stamping. reviewer stays null; aiAssisted + verificationNeeded
// are kept. Usage: node scripts/phase2-approve.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const rows = JSON.parse(readFileSync('scripts/phase2-rows.json', 'utf8'));
let n = 0;
const byCat = {};
for (const r of rows) {
  const f = `knowledge/${r.category}/${r.slug}.md`;
  if (!existsSync(f)) continue;
  let raw = readFileSync(f, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) continue;
  let fm = m[1];
  const before = fm;
  // status -> in-review
  fm = fm.replace(/^status:\s*"?[\w-]+"?\s*$/m, 'status: "in-review"');
  // reviewer -> null (top-level only; revisions' indented reviewer lines untouched)
  fm = fm.replace(/^reviewer:\s*"?[a-z0-9-]+"?\s*$/m, 'reviewer: null');
  // strip the top-level review/publish stamps that a prior approve added
  fm = fm.replace(/^(reviewed|reviewDue|published|publishedBy):.*\r?\n/gm, '');
  if (fm === before) continue;
  raw = raw.replace(before, fm);
  writeFileSync(f, raw, 'utf8');
  n++;
  byCat[r.category] = (byCat[r.category] || 0) + 1;
}
console.log(`[review] set to in-review: ${n} file(s)`);
console.log(JSON.stringify(byCat));
