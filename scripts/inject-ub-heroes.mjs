// inject-ub-heroes.mjs — inject hero frontmatter (freshness-neutral) into every
// language file of each article in public/media/_ub-rollout-meta.json.
//
// Reads the rollout meta written by build-ub-heroes.mjs (keyed "<cat>/<slug>")
// and writes hero/heroAlt/heroCredit/heroLicense/heroSource/heroKind/heroOrigin
// just before the closing frontmatter fence of <slug>.md and every <slug>.<lang>.md.
//
// IDEMPOTENT: a file that already has a `hero:` line is left untouched, so re-running
// after adding new picks only touches the new articles. heroAlt here is the English
// baseline; scripts/build-heroalt.mjs then localizes it per language (both fields are
// excluded from the translation hash, so this whole flow is freshness-neutral).
//
// heroKind/heroOrigin are DOUBLE-quoted (validator gotcha); the rest single-quoted.
//   node scripts/inject-ub-heroes.mjs            (all keys in the meta)
//   node scripts/inject-ub-heroes.mjs arts-culture/bangsawan states/perlis   (only these)
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const META = join(ROOT, 'public', 'media', '_ub-rollout-meta.json');
const LANGS = ['', 'ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr'];
const sq = (s) => "'" + String(s).replace(/'/g, "''") + "'";
const only = new Set(process.argv.slice(2));
const meta = JSON.parse(readFileSync(META, 'utf8'));
let injected = 0, skipped = 0, miss = 0, noHero = 0;
for (const [key, set] of Object.entries(meta)) {
  if (only.size && !only.has(key)) continue;
  const h = set && set.hero;
  if (!h) { noHero++; continue; }
  const [cat, slug] = key.split('/');
  const block = [
    `hero: ${sq(h.file)}`,
    `heroAlt: ${sq(h.alt)}`,
    `heroCredit: ${sq(h.credit)}`,
    `heroLicense: ${sq(h.license)}`,
    `heroSource: ${sq(h.source)}`,
    `heroKind: "${h.kind || 'actual'}"`,
    `heroOrigin: "${h.origin || 'third-party'}"`,
  ];
  const seen = new Set();
  for (const l of LANGS) {
    const f = join(ROOT, 'knowledge', cat, `${slug}${l ? '.' + l : ''}.md`);
    if (seen.has(f) || !existsSync(f)) { if (!seen.has(f)) miss++; continue; }
    seen.add(f);
    const raw = readFileSync(f, 'utf8');
    if (/^hero:/m.test(raw)) { skipped++; continue; }
    const nl = raw.includes('\r\n') ? '\r\n' : '\n';
    const lines = raw.split(/\r?\n/);
    let fences = 0, close = -1;
    for (let i = 0; i < lines.length; i++) if (lines[i].trim() === '---') { fences++; if (fences === 2) { close = i; break; } }
    if (close < 0) { console.log('NO FENCE', f); continue; }
    lines.splice(close, 0, ...block);
    writeFileSync(f, lines.join(nl), 'utf8');
    injected++;
  }
}
console.log(`injected ${injected} files; skipped(already had hero) ${skipped}; absent ${miss}; meta rows without hero ${noHero}`);
