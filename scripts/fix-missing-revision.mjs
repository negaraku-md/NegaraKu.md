// fix-missing-revision.mjs — one-off: add the required numeric `revision` field to
// revision-history items authored without it (schema: revisionSchema.revision).
// revisions[] is stored newest-first; the revision index is oldest-first (oldest = 0),
// matching scripts/fix-revision-numbering.mjs. `revisions` is excluded from the
// translation hash, so this is freshness-neutral. DRY-RUN unless --apply.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KN = path.join(ROOT, 'knowledge');
const APPLY = process.argv.includes('--apply');

async function walk(d) {
  const o = [];
  for (const e of await readdir(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) o.push(...(await walk(f)));
    else if (e.name.endsWith('.md')) o.push(f);
  }
  return o;
}
const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');

const files = await walk(KN);
let touched = 0, items = 0;
const samples = [];

for (const f of files) {
  const raw = await readFile(f, 'utf8');
  let data;
  try { data = matter(raw).data; } catch { continue; }
  if (!Array.isArray(data.revisions) || !data.revisions.length) continue;
  if (!data.revisions.some((r) => r && typeof r === 'object' && typeof r.revision !== 'number')) continue;

  const fm = raw.match(/^(---\r?\n)([\s\S]*?)(\r?\n---)/);
  if (!fm) continue;
  const nl = raw.includes('\r\n') ? '\r\n' : '\n';
  const lines = fm[2].split(/\r?\n/);

  const ri = lines.findIndex((l) => /^revisions:\s*$/.test(l));
  if (ri < 0) continue;

  // item-start lines (2-space "- ") under revisions:, until a top-level key
  const starts = [];
  for (let i = ri + 1; i < lines.length; i++) {
    if (/^\S/.test(lines[i])) break;
    if (/^  -\s/.test(lines[i])) starts.push(i);
  }
  const n = starts.length;
  let added = 0;
  for (let s = 0; s < n; s++) {
    const startIdx = starts[s];
    let endIdx = lines.length;
    for (let i = startIdx + 1; i < lines.length; i++) {
      if (/^\S/.test(lines[i]) || /^  -\s/.test(lines[i])) { endIdx = i; break; }
    }
    const block = lines.slice(startIdx, endIdx);
    if (block.some((l) => /^    revision:\s/.test(l))) continue;
    const revIdx = n - 1 - s; // oldest-first (array is newest-first)
    lines.splice(startIdx + 1, 0, `    revision: ${revIdx}`);
    for (let k = s + 1; k < n; k++) starts[k]++;
    added++; items++;
  }
  if (added) {
    const out = raw.replace(fm[0], fm[1] + lines.join(nl) + fm[3]);
    touched++;
    if (samples.length < 5) samples.push(rel(f));
    if (APPLY) await writeFile(f, out);
  }
}

console.log(`[fix-revision] ${APPLY ? 'APPLIED' : 'DRY-RUN'} — ${touched} files, ${items} items got a revision field`);
console.log('samples:', samples.join(', '));
if (!APPLY) console.log('[fix-revision] dry-run only. Re-run with --apply to write.');
