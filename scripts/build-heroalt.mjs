// Localize the hero-image alt-text (`heroAlt`) of every hero'd article into all
// 13 site languages, writing each language's alt into that language's file.
//
// WHY THIS IS SAFE / FRESHNESS-NEUTRAL: `heroAlt` is deliberately NOT part of the
// translation hash (see scripts/translation-sync.mjs `heroAlt` exclusion), so
// changing it marks NOTHING stale and needs NO `translate:stamp`. That is what
// lets one shared hero photo carry a properly localized alt in every language.
//
// DATA: scripts/data/heroalt-i18n.json — { heroAlt: { "<cat>/<slug>": { en, ms,
// zh, ta, ja, ko, th, vi, id, ar, hi, es, fr } } }. English is canonical. When a
// new hero lands, add the article + its 13 translations there and re-run.
//
// Each article is a base `<slug>.md` (master language) plus up-to-12 `<slug>.<lang>.md`
// files; the master language is whichever suffix is absent (its alt lives in the
// base file). This writes language L's alt into L's file; a language with no file
// for that article is simply skipped (coverage is not created here). Idempotent:
// a file whose heroAlt line already matches is left untouched.
//
// Run: node scripts/build-heroalt.mjs            (dry run — reports only)
//      node scripts/build-heroalt.mjs --apply    (write the files)
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const KN = join(ROOT, 'knowledge');
const DATA = join(ROOT, 'scripts', 'data', 'heroalt-i18n.json');
const LANGS = ['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr'];
const APPLY = process.argv.includes('--apply');

const { heroAlt } = JSON.parse(readFileSync(DATA, 'utf8'));
const keys = Object.keys(heroAlt);

// YAML single-quoted scalar (double any inner apostrophe). Single-quote style
// also sidesteps the inner-double-quote astro-build trap.
const q = (s) => `'${String(s).trim().replace(/'/g, "''")}'`;
const fmBounds = (raw) => raw.match(/^(---\r?\n)([\s\S]*?)(\r?\n---)/);

let changed = 0, noop = 0, skippedNoFile = 0, missingField = 0;
const perLang = Object.fromEntries(LANGS.map((l) => [l, 0]));

for (const key of keys) {
  const slash = key.indexOf('/');
  const cat = key.slice(0, slash), slug = key.slice(slash + 1);
  const dir = join(KN, cat);
  const base = join(dir, `${slug}.md`);
  if (!existsSync(base)) { console.error(`no master: ${key}`); continue; }
  const present = new Set(LANGS.filter((L) => existsSync(join(dir, `${slug}.${L}.md`))));
  const masterLang = LANGS.find((L) => !present.has(L));
  const vals = heroAlt[key];
  for (const L of LANGS) {
    const file = present.has(L) ? join(dir, `${slug}.${L}.md`) : (L === masterLang ? base : null);
    if (!file) { skippedNoFile++; continue; }
    const val = vals[L];
    if (!val) continue;
    const raw = readFileSync(file, 'utf8');
    const m = fmBounds(raw);
    if (!m) { console.error(`no frontmatter: ${file}`); continue; }
    const curLine = m[2].match(/^heroAlt:[^\r\n]*/m);
    if (!curLine) { missingField++; continue; } // only localize an existing heroAlt
    const newLine = `heroAlt: ${q(val)}`;
    if (curLine[0] === newLine) { noop++; continue; }
    const newFmBody = m[2].replace(/^heroAlt:[^\r\n]*/m, newLine);
    if (APPLY) writeFileSync(file, raw.replace(m[2], newFmBody), 'utf8');
    changed++; perLang[L]++;
  }
}

console.log(`${APPLY ? 'APPLIED' : 'DRY-RUN'} — ${keys.length} articles`);
console.log(`files changed: ${changed} | no-op: ${noop} | lang-absent skips: ${skippedNoFile} | no heroAlt field: ${missingField}`);
console.log('per-lang:', LANGS.map((l) => `${l}:${perLang[l]}`).join(' '));
if (!APPLY) console.log('(dry run — pass --apply to write)');
