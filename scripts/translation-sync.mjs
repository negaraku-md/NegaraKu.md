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
import yaml from 'js-yaml';

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

// The TRANSLATED sub-fields of the structured media/review blocks (food standard).
// Only these — the reader-facing authored text — belong in the freshness hash;
// the shared metadata (src, credit, license, sourceRef, kind, origin, branch,
// permissionRef) is deliberately excluded so swapping an image or relabelling its
// kind does NOT churn translations. This is extracted APPEND-ONLY and empty-guarded
// (see bodyHash): an article without images[]/review[] hashes byte-identically to
// before this field existed, so adding the block caused ZERO re-stamp of the corpus.
// (heroAlt is intentionally NOT folded in here: it is already live on ~240 articles
// with freshness-neutral semantics, so folding it would force a ~2,900-file re-stamp
// of unchanged content; the health scan's image-alt check covers the stale-caption
// risk instead. New images[] alt/caption DO cascade.)
const mediaSignal = (fm) => {
  let data;
  try { data = yaml.load(fm) || {}; } catch { return ''; }
  const parts = [];
  for (const im of Array.isArray(data.images) ? data.images : []) {
    parts.push(`img|${im?.alt ?? ''}|${im?.caption ?? ''}|${im?.subject ?? ''}`);
  }
  for (const rv of Array.isArray(data.review) ? data.review : []) {
    const flavor = Array.isArray(rv?.flavor) ? rv.flavor.join('¶') : '';
    const trade = Array.isArray(rv?.tradeoffs) ? rv.tradeoffs.join('¶') : '';
    parts.push(`rev|${rv?.subject ?? ''}|${flavor}|${trade}`);
  }
  return parts.join('\n');
};

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
  // APPEND-ONLY: only articles that actually carry images[]/review[] get the extra
  // block, so every existing article's hash is unchanged (no false "stale" sweep).
  const extra = mediaSignal(fm);
  const full = extra ? `${material}\n===MEDIA===\n${extra}` : material;
  return createHash('sha256').update(full).digest('hex').slice(0, 16);
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
  const m = base.match(/^(.*)\.(en|zh|ms|ta|ja|ko|th|vi|id|ar|hi|es|fr)$/);
  const key = `${path.basename(path.dirname(file))}/${m ? m[1] : base}`;
  if (!topics.has(key)) topics.set(key, { master: null, translations: [] });
  if (m) topics.get(key).translations.push({ file, lang: m[2] });
  else topics.get(key).master = file;
}

let stamped = 0;
let stale = 0;
let orphan = 0;
const report = [];
const debtByTopic = new Map(); // key -> Set(langs) that are stale — the re-translate worklist
const orphanFiles = [];

for (const [key, { master, translations }] of topics) {
  if (!master) {
    for (const t of translations) { report.push(`[orphan]  ${path.relative(ROOT, t.file)} — no master`); orphanFiles.push(`${key}.${t.lang}`); }
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
      if (!debtByTopic.has(key)) debtByTopic.set(key, new Set());
      debtByTopic.get(key).add(t.lang);
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

// Report mode also emits the re-translation worklist as data: when a master is
// updated & republished, its translations fall stale here, and this is how the
// contributor cockpit (/worklist) and any tool sees that debt. Stamp mode never
// writes it — stamping clears debt, and the report-mode truth should survive.
if (!STAMP) {
  const out = {
    generatedAt: new Date().toISOString(),
    counts: { topics: topics.size, staleTopics: debtByTopic.size, staleTranslations: stale, orphans: orphan },
    topics: [...debtByTopic.entries()].map(([key, langs]) => ({ key, staleLangs: [...langs].sort() })).sort((a, b) => b.staleLangs.length - a.staleLangs.length),
    orphans: orphanFiles.sort(),
  };
  const outDir = path.join(ROOT, 'public', 'api');
  await writeFile(path.join(outDir, 'translation-debt.json'), JSON.stringify(out, null, 2) + '\n', 'utf8');
}
if (!STAMP && (stale || orphan)) process.exitCode = 0; // reporting only; scan.py gates
