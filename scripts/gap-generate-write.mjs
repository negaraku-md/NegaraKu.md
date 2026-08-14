// Write generated gap-article masters to knowledge/<category>/<slug>.md (en master).
// Usage: node scripts/gap-generate-write.mjs <task-output.json>
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const path = process.argv[2];
if (!path) { console.error('usage: gap-generate-write.mjs <output.json>'); process.exit(1); }

let data = JSON.parse(readFileSync(path, 'utf8'));
if (!Array.isArray(data)) data = data.result || data.results || data.items || [];

let n = 0; const skipped = [];
for (const it of data) {
  if (!it || !it.markdown || !it.slug || !it.category) { skipped.push(it && it.slug); continue; }
  let md = it.markdown;
  if (!md.startsWith('---')) { const i = md.indexOf('---\n'); if (i > 0) md = md.slice(i); }
  if (!md.startsWith('---')) { skipped.push(`${it.slug} (no frontmatter)`); continue; }
  const f = `knowledge/${it.category}/${it.slug}.md`;         // base = master (lang:en inside)
  const verb = existsSync(f) ? 'overwrite' : 'new';
  writeFileSync(f, md, 'utf8');
  console.log(`${verb} ${f}`);
  n++;
}
if (skipped.length) console.log('SKIPPED:', skipped.join(', '));
console.log(`[gap-write] wrote ${n} master file(s)`);
