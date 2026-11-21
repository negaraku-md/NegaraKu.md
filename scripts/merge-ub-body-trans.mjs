#!/usr/bin/env node
/**
 * merge-ub-body-trans.mjs — fold per-language scratchpad/ubt-<lang>.json agent outputs
 * into scripts/data/ub-body-translations.json, the input build-ub-bodies.mjs reads.
 *
 * Source shape (one file per lang): { "cat/slug": [{alt,subject}, ...], ... }
 * Merged shape:                     { "cat/slug": { "<lang>": [{alt,subject}, ...] } }
 *
 * Merge is additive: existing keys/langs are preserved; a re-run with new langs or
 * new article keys augments the store rather than replacing it. English ('en') is
 * seeded from the meta at inject time, so ubt-en.json is optional.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SCRATCH = path.join(ROOT, 'scratchpad');
const OUT = path.join(ROOT, 'scripts/data/ub-body-translations.json');
const LANGS = ['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr'];

const store = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
let merged = 0, langsSeen = [];
for (const lang of LANGS) {
  const f = path.join(SCRATCH, `ubt-${lang}.json`);
  if (!fs.existsSync(f)) continue;
  let data;
  try { data = JSON.parse(fs.readFileSync(f, 'utf8')); }
  catch (e) { console.log(`PARSE FAIL ubt-${lang}.json: ${String(e.message).split('\n')[0]}`); continue; }
  langsSeen.push(lang);
  for (const [key, arr] of Object.entries(data)) {
    if (!Array.isArray(arr)) continue;
    store[key] = store[key] || {};
    store[key][lang] = arr.map((x) => ({ alt: String(x.alt || '').trim(), subject: String(x.subject || '').trim() }));
    merged++;
  }
}
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(store, null, 2));
console.log(`merged ${merged} (key,lang) entries from langs: ${langsSeen.join(',')}`);
console.log(`store now covers ${Object.keys(store).length} article keys`);

// Completeness check: for each key, which of the 12 non-en langs are present?
for (const [key, byLang] of Object.entries(store)) {
  const have = LANGS.filter((l) => l !== 'en' && byLang[l]);
  const missing = LANGS.filter((l) => l !== 'en' && !byLang[l]);
  if (missing.length) console.log(`  ${key}: missing ${missing.join(',')}`);
}
