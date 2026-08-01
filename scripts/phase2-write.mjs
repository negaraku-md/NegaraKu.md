// Write Phase 2 batch results (a workflow task .output JSON) into knowledge/.
// Usage: node scripts/phase2-write.mjs <path-to-task.output>
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const outPath = process.argv[2];
if (!outPath) { console.error('need output file path'); process.exit(1); }
const raw = JSON.parse(readFileSync(outPath, 'utf8'));
const items = Array.isArray(raw) ? raw : (raw.result ?? []);
let wrote = 0;
const written = [], skipped = [];
for (const it of items) {
  if (!it || !it.markdown) { skipped.push(`${it && it.slug}: no markdown`); continue; }
  let md = it.markdown;
  // Strip any agent preamble before the YAML frontmatter (e.g. "See corrected file…").
  if (!md.startsWith('---')) {
    const i = md.indexOf('---\n');
    if (i > 0) md = md.slice(i);
  }
  const fm = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) { skipped.push(`${it.slug}: no frontmatter`); continue; }
  const cat = (fm[1].match(/^category:\s*"?([\w-]+)"?/m) || [])[1] || it.category;
  const slug = (fm[1].match(/^slug:\s*"?([\w-]+)"?/m) || [])[1] || it.slug;
  if (!cat || !slug) { skipped.push(`${it.slug}: missing cat/slug`); continue; }
  const dir = path.join('knowledge', cat);
  mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${slug}.md`);
  const exists = existsSync(file);
  writeFileSync(file, md.endsWith('\n') ? md : md + '\n', 'utf8');
  wrote++; written.push(`${exists ? 'overwrite' : 'new'} ${file}`);
}
console.log(written.join('\n'));
if (skipped.length) console.log('SKIPPED:\n' + skipped.join('\n'));
console.log(`\n[phase2-write] wrote ${wrote} file(s)`);
