// fix-revision-numbering.mjs — corrects the version→revision migration.
//
// The migration numbered revisions[] by array position, but the array is stored
// NEWEST-FIRST — so the oldest ("Initial publication") wrongly became the highest
// number and the newest change became 0, and the top-level `revision` slot was
// pinned to 0 for every article. Correct semantics (spec §2):
//   • revisions[].revision counts OLDEST → NEWEST (0 = first published).
//   • top-level `revision` = the CURRENT (latest) published revision:
//        ever-published → highest revision number (N-1, or 0 if no history)
//        never-published (draft) → null
//
// Surgical line edits; DRY-RUN by default, --apply to write. Idempotent — a
// single-revision published article is already 0/0 and stays unchanged.

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const APPLY = process.argv.includes('--apply');

const LIVE = new Set([
  'published', 'needs-update', 'in-update', 'request-redraft',
  'in-redraft', 'request-archive', 'in-archive', 'archived',
]);

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else if (e.name.endsWith('.md')) out.push(full);
  }
  return out;
}
const rel = (p) => path.relative(ROOT, p).replace(/\\/g, '/');

async function main() {
  const files = await walk(KNOWLEDGE);
  let touched = 0;
  const samples = [];

  for (const f of files) {
    const raw = await readFile(f, 'utf8');
    const { data } = matter(raw);
    const N = Array.isArray(data.revisions) ? data.revisions.length : 0;
    const everPublished = LIVE.has(data.status ?? 'draft') || Boolean(data.published);
    const topRev = everPublished ? Math.max(0, N - 1) : null;

    let text = raw;
    // Renumber revision entries OLDEST→NEWEST. Array is newest-first, so the
    // i-th entry (0 = newest) gets N-1-i.
    let i = 0;
    text = text.replace(/^(\s*)-\s+revision:.*$/gm, (_m, indent) => {
      const num = N - 1 - i;
      i++;
      return `${indent}- revision: ${num}`;
    });
    // Top-level slot = current/latest published revision.
    text = text.replace(/^revision:.*$/m, `revision: ${topRev === null ? 'null' : topRev}`);

    if (text !== raw) {
      touched++;
      if (N > 1 && samples.length < 5) samples.push(`${rel(f)} (N=${N} → top ${topRev})`);
      if (APPLY) await writeFile(f, text);
    }
  }

  console.log(`[fix-rev] ${APPLY ? 'APPLIED' : 'DRY-RUN'} — ${touched} file(s) changed`);
  console.log('[fix-rev] multi-revision samples:');
  for (const s of samples) console.log('  ' + s);
  if (!APPLY) console.log('[fix-rev] dry-run only. Re-run with --apply.');
}

main().catch((e) => { console.error('[fix-rev]', e); process.exit(1); });
