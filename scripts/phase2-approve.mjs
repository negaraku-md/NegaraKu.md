// Owner bulk-approval: flip AI-draft masters from draft -> published.
// Keeps aiAssisted: true (honest provenance stays visible) and verificationNeeded
// lists intact. Usage: node scripts/phase2-approve.mjs
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TODAY = '2026-08-01';
const DUE = '2027-08-01';
const WHO = 'ashton-tan';

function walk(d) {
  return readdirSync(d).flatMap((e) => {
    const p = join(d, e);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
  });
}

let n = 0;
const byCat = {};
for (const f of walk('knowledge')) {
  let raw = readFileSync(f, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) continue;
  const fm = m[1];
  if (!/^status:\s*"?draft"?\s*$/m.test(fm)) continue; // only drafts

  let nf = fm.replace(/^status:\s*"?draft"?\s*$/m, 'status: "published"');
  if (/^reviewer:\s*null\s*$/m.test(nf)) {
    let block = `reviewer: "${WHO}"`;
    if (!/^reviewed:/m.test(nf)) block += `\nreviewed: ${TODAY}`;
    if (!/^reviewDue:/m.test(nf)) block += `\nreviewDue: ${DUE}`;
    if (!/^published:/m.test(nf)) block += `\npublished: ${TODAY}`;
    if (!/^publishedBy:/m.test(nf)) block += `\npublishedBy: "${WHO}"`;
    nf = nf.replace(/^reviewer:\s*null\s*$/m, block);
  }
  raw = raw.replace(fm, nf);
  writeFileSync(f, raw, 'utf8');
  n++;
  const cat = f.split(/[\\/]/)[1];
  byCat[cat] = (byCat[cat] || 0) + 1;
}
console.log(`[approve] draft -> published: ${n} file(s)`);
console.log(JSON.stringify(byCat));
