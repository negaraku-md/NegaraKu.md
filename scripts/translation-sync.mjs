#!/usr/bin/env node
/**
 * Translation staleness tracking.
 *
 * A translation is only trustworthy if you can tell when its source moved on.
 * `sourceContentHash` has been in the schema since the beginning but nothing
 * ever wrote it, so every translation would have looked permanently current —
 * including the ones quietly describing a repealed rate.
 *
 * This script hashes each master article's body and:
 *   --stamp   writes that hash into every translation of it, marking in-sync
 *   (default) compares stored hashes against current masters and reports drift
 *
 * Run `--stamp` immediately after a translation lands. Run the plain form in
 * CI: a translation whose master has changed is reported stale, and the health
 * scanner turns that into a finding.
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const STAMP = process.argv.includes('--stamp');

/**
 * Hash the body PLUS the reader-facing frontmatter fields.
 *
 * Body-only was the obvious choice and it was wrong: editing just an `answer`
 * left every translation reporting in-sync while the most-read text on the page
 * had moved. `answer` is the AEO surface — it is what assistants extract and
 * what sits above the fold. These fields are content, not metadata.
 *
 * Fields that legitimately differ per language (lang, translationStatus,
 * sourceContentHash, revisions) are excluded, or the hash would never match.
 */
const TRANSLATED_FIELDS = ['title', 'summary', 'answer', 'keyTakeaways', 'faq', 'appliesTo'];

const bodyHash = (raw) => {
  const parts = raw.split(/^---\s*$/m);
  const fm = parts.length >= 3 ? parts[1] : '';
  const body = parts.length >= 3 ? parts.slice(2).join('---') : raw;

  // Crude but sufficient: capture each field's block from its key to the next
  // top-level key, so multi-line lists (keyTakeaways, faq) are included whole.
  const signal = TRANSLATED_FIELDS.map((f) => {
    const m = fm.match(new RegExp(`^${f}:[\\s\\S]*?(?=^[a-zA-Z][a-zA-Z0-9_]*:|$)`, 'm'));
    return m ? m[0].trim() : '';
  }).join('\n');

  const material = `${signal}\n---\n${body}`.trim().replace(/\r\n/g, '\n');
  return createHash('sha256').update(material).digest('hex').slice(0, 16);
};

const fmValue = (raw, key) => {
  const m = raw.match(new RegExp(`^${key}:\\s*"?([^"\\n]*)"?\\s*$`, 'm'));
  return m ? m[1].trim() : null;
};

const setFm = (raw, key, value) => {
  const line = `${key}: "${value}"`;
  if (new RegExp(`^${key}:.*$`, 'm').test(raw)) {
    return raw.replace(new RegExp(`^${key}:.*$`, 'm'), line);
  }
  // Key absent (older translations predate the field): insert it after `lang:`,
  // which every translation carries. Without this the field could never be
  // written, so the translation would read stale forever.
  return raw.replace(/^(lang:.*)$/m, `$1\n${line}`);
};

const files = [];
for (const cat of await readdir(KNOWLEDGE, { withFileTypes: true })) {
  if (!cat.isDirectory()) continue;
  for (const f of await readdir(path.join(KNOWLEDGE, cat.name))) {
    if (f.endsWith('.md')) files.push(path.join(KNOWLEDGE, cat.name, f));
  }
}

// Group by topic key: `slug.md` is the master, `slug.<lang>.md` its translations.
const topics = new Map();
for (const file of files) {
  const base = path.basename(file, '.md');
  const m = base.match(/^(.*)\.(en|zh|ms)$/);
  const key = `${path.basename(path.dirname(file))}/${m ? m[1] : base}`;
  if (!topics.has(key)) topics.set(key, { master: null, translations: [] });
  if (m) topics.get(key).translations.push({ file, lang: m[2] });
  else topics.get(key).master = file;
}

let stamped = 0;
let stale = 0;
let orphan = 0;
const report = [];

for (const [key, { master, translations }] of topics) {
  if (!master) {
    for (const t of translations) report.push(`[orphan]  ${path.relative(ROOT, t.file)} — no master`);
    orphan += translations.length;
    continue;
  }
  const hash = bodyHash(await readFile(master, 'utf8'));
  for (const t of translations) {
    let raw = await readFile(t.file, 'utf8');
    const stored = fmValue(raw, 'sourceContentHash');
    if (stored === hash) continue;
    if (STAMP) {
      raw = setFm(raw, 'sourceContentHash', hash);
      raw = setFm(raw, 'translationStatus', 'in-sync');
      await writeFile(t.file, raw, 'utf8');
      stamped++;
    } else {
      // null means never stamped; a different value means the master moved on.
      raw = setFm(raw, 'translationStatus', 'stale');
      await writeFile(t.file, raw, 'utf8');
      report.push(
        `[stale]   ${path.relative(ROOT, t.file)} — master ${key} changed since translation`,
      );
      stale++;
    }
  }
}

for (const line of report) console.log(line);
console.log(
  STAMP
    ? `[translation-sync] stamped ${stamped} translation(s) as in-sync.`
    : `[translation-sync] ${stale} stale, ${orphan} orphaned across ${topics.size} topic(s).`,
);
if (!STAMP && (stale || orphan)) process.exitCode = 0; // reporting only; scan.py gates
