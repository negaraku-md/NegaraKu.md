// migrate-version-to-revision.mjs — one-off (spec §15).
//
// Retires the string `version` field in favour of the integer `revision` slot:
//   • top-level  version: "NN.MM"      → revision: <int|null>
//        published / live / ever-published → 0   (history rarely implies higher)
//        never-published (draft/in-review/reviewed, no `published` date) → null
//   • revisions[].version: "…"          → revisions[].revision: <0-based index>
//
// Surgical line edits (not a gray-matter round-trip) keep the diff to just the
// touched lines. DRY-RUN by default — reports what it would do and flags
// anomalies; pass --apply to write. Run on CLEAN frontmatter (i.e. AFTER the
// all-hidden experiment is reverted) so this rewrite doesn't tangle with that.
//
// NOTE: this pass numbered revisions[] by array position and pinned the
// top-level slot to 0. Because the array is stored newest-first, that inverted
// the numbering and hid the current revision. scripts/fix-revision-numbering.mjs
// corrected it (oldest = 0; top-level = latest published revision). Any re-use of
// THIS script should adopt that corrected numbering.

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
  let touched = 0, toZero = 0, toNull = 0, revEntries = 0;
  const noVersionLine = [], samples = [];

  for (const f of files) {
    const raw = await readFile(f, 'utf8');
    const { data } = matter(raw);
    const status = data.status ?? 'draft';
    const everPublished = LIVE.has(status) || Boolean(data.published);
    const rev = everPublished ? 0 : null;

    let text = raw;

    // revisions[].version → - revision: <index> (index resets per file)
    let idx = 0;
    text = text.replace(/^(\s*)-\s+version:.*$/gm, (_m, indent) => {
      revEntries++;
      return `${indent}- revision: ${idx++}`;
    });

    // top-level version: "…"  → revision: <int|null>
    const revLine = `revision: ${rev === null ? 'null' : rev}`;
    if (/^version:.*$/m.test(text)) {
      text = text.replace(/^version:.*$/m, revLine);
    } else {
      // No explicit top-level version — insert revision after status:, else after lang:.
      noVersionLine.push(rel(f));
      if (/^status:.*$/m.test(text)) text = text.replace(/^(status:.*)$/m, `$1\n${revLine}`);
      else if (/^lang:.*$/m.test(text)) text = text.replace(/^(lang:.*)$/m, `$1\n${revLine}`);
    }

    if (text !== raw) {
      touched++;
      if (rev === 0) toZero++; else toNull++;
      if (samples.length < 4) samples.push({ file: rel(f), rev, entries: idx });
      if (APPLY) await writeFile(f, text);
    }
  }

  console.log(`[migrate] ${APPLY ? 'APPLIED' : 'DRY-RUN'} — ${touched}/${files.length} files`);
  console.log(`[migrate]   top-level revision: 0 (ever-published) = ${toZero}, null (never) = ${toNull}`);
  console.log(`[migrate]   revisions[] entries renumbered = ${revEntries}`);
  if (noVersionLine.length) console.log(`[migrate]   ${noVersionLine.length} file(s) had NO top-level version line (revision inserted)`);
  console.log('[migrate] samples:');
  for (const s of samples) console.log(`  ${s.file} → revision: ${s.rev}, ${s.entries} revision entr${s.entries === 1 ? 'y' : 'ies'}`);
  if (!APPLY) console.log('[migrate] dry-run only. Re-run with --apply to write. Then update schema + sync.mjs + ArticleView, and re-sync.');
}

main().catch((e) => { console.error('[migrate]', e); process.exit(1); });
