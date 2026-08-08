// Write translation task-output items to knowledge/<category>/<slug>.<lang>.md.
// Usage: node scripts/phase2-translate-write.mjs <task-output.json>
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const path = process.argv[2];
if (!path) { console.error('usage: phase2-translate-write.mjs <output.json>'); process.exit(1); }

let data = JSON.parse(readFileSync(path, 'utf8'));
if (!Array.isArray(data)) data = data.result || data.results || data.items || [];

let n = 0; const skipped = [];
for (const it of data) {
  if (!it || !it.markdown || !it.slug || !it.category || !it.lang) { skipped.push(it && it.slug); continue; }
  let md = it.markdown;
  // strip any preamble before the frontmatter
  if (!md.startsWith('---')) {
    const i = md.indexOf('---\n');
    if (i > 0) md = md.slice(i);
  }
  if (!md.startsWith('---')) { skipped.push(`${it.slug}.${it.lang} (no frontmatter)`); continue; }
  const f = `knowledge/${it.category}/${it.slug}.${it.lang}.md`;
  const verb = existsSync(f) ? 'overwrite' : 'new';
  writeFileSync(f, md, 'utf8');
  console.log(`${verb} ${f}`);
  n++;
}
if (skipped.length) console.log('SKIPPED:', skipped.join(', '));
console.log(`[translate-write] wrote ${n} file(s)`);
