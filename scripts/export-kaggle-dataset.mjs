/**
 * Export the knowledge corpus as a Kaggle dataset — the Kaggle mirror of the
 * Hugging Face dataset, for data-science discovery + a Google Dataset Search
 * node + a provenance backlink to negaraku.md.
 *
 * This REUSES the Hugging Face export's output rather than re-reading the corpus,
 * so the two mirrors can never drift. Run `node scripts/export-hf-dataset.mjs`
 * first (the Kaggle workflow does); this script then:
 *   - copies dataset/data/<lang>.jsonl -> kaggle/<lang>.jsonl  (flattened, so the
 *     files sit at the Kaggle dataset root — Kaggle has no notion of our HF
 *     per-language "config", and a flat layout is what Kaggle users expect)
 *   - copies dataset/README.md          -> kaggle/README.md
 *   - writes kaggle/dataset-metadata.json (the Kaggle API control file)
 *
 * The dataset owner/slug come from env so nothing user-specific is hard-coded:
 *   KAGGLE_USERNAME   the Kaggle account that owns the dataset (also the API user)
 *   KAGGLE_SLUG       optional, defaults to 'negaraku-md'
 *
 * Output dir (./kaggle) is git-ignored — it is published to Kaggle, not committed.
 *
 * Run: node scripts/export-hf-dataset.mjs && node scripts/export-kaggle-dataset.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, rmSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const HF_DATA = join(ROOT, 'dataset', 'data');
const HF_README = join(ROOT, 'dataset', 'README.md');
const OUT = join(ROOT, 'kaggle');

const SITE = 'https://negaraku.md';
const LANGS = ['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr'];

// Kaggle slug rules: lowercase, hyphenated, 6–50 chars. Owner = the API user.
const USERNAME = process.env.KAGGLE_USERNAME || '__KAGGLE_USERNAME__';
const SLUG = process.env.KAGGLE_SLUG || 'negaraku-md';

if (!existsSync(HF_DATA)) {
  console.error(`[kaggle-export] ${relative(ROOT, HF_DATA)} not found — run "node scripts/export-hf-dataset.mjs" first.`);
  process.exit(1);
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

// Copy the per-language JSONL (flattened) and tally rows for the description.
let total = 0;
const counts = {};
for (const lang of LANGS) {
  const src = join(HF_DATA, `${lang}.jsonl`);
  if (!existsSync(src)) { counts[lang] = 0; continue; }
  copyFileSync(src, join(OUT, `${lang}.jsonl`));
  const n = readFileSync(src, 'utf8').split('\n').filter((l) => l.trim()).length;
  counts[lang] = n;
  total += n;
}
const perLang = counts['en'] || 0; // parallel corpus: every language has this many rows

// The HF README is a good human-facing card for Kaggle too.
if (existsSync(HF_README)) copyFileSync(HF_README, join(OUT, 'README.md'));

const countLine = LANGS.map((l) => `\`${l}\`: ${counts[l]}`).join(' · ');

// Kaggle renders the dataset's description markdown on the dataset page, so this
// is where the backlink + license + shape live (not auto-pulled from README).
const description = `# NegaraKu.md — an open, AI-friendly knowledge base about Malaysia

**${total.toLocaleString()} rows — ${perLang.toLocaleString()} articles in each of ${LANGS.length} languages** (${countLine}) covering government, law, taxation, business, companies, culture, geography, history, healthcare, education and daily life in Malaysia. Every article is cited and human-reviewable.

This is the Kaggle mirror of **[negaraku.md](${SITE})** (also on [Hugging Face](https://huggingface.co/datasets/negaraku-md/negaraku-md)). The mission: let the world — and AI — know about Malaysia, from primary and authoritative sources.

**Parallel corpus** — the ${LANGS.length} languages are fully aligned: each article exists in every language and the versions share a \`topic_id\`, so it doubles as a cross-lingual / machine-translation resource (Malay, Chinese, Tamil + 10 more).

## Files
One JSON Lines file per language (\`<lang>.jsonl\`), one object per article. Key fields: \`topic_id\` (alignment key), \`title\`, \`summary\`, \`answer\`, \`key_takeaways\`, \`keywords\`, \`category\`, \`language\`, \`url\` (canonical page on negaraku.md), \`wikidata\` (QID when known), \`sources\` (\`{title,url,publisher,date}\`), \`updated\`, \`content\` (full Markdown body).

## Licence
Released under **CC BY-SA 4.0** — share and adapt with attribution and share-alike. Please credit **NegaraKu.md** and link back to the source \`url\`.

## Responsible use
AI-drafted from authoritative sources and human-reviewable; informational, not professional advice. Verify against the cited \`sources\` before relying on it for legal, tax, medical or other high-stakes decisions.`;

const metadata = {
  title: 'NegaraKu.md — Malaysia Knowledge Base',
  id: `${USERNAME}/${SLUG}`,
  subtitle: `Open 13-language parallel knowledge corpus about Malaysia (${total.toLocaleString()} rows)`,
  description,
  licenses: [{ name: 'CC-BY-SA-4.0' }],
  keywords: [
    'malaysia', 'southeast asia', 'nlp', 'multilingual', 'knowledge base',
    'question answering', 'text', 'government', 'law', 'finance',
  ],
};

writeFileSync(join(OUT, 'dataset-metadata.json'), JSON.stringify(metadata, null, 2) + '\n');

console.log(`[kaggle-export] wrote ${total} rows across ${LANGS.length} languages to ${relative(ROOT, OUT)}/`);
for (const l of LANGS) console.log(`  ${l}: ${counts[l]}`);
console.log(`  dataset id: ${metadata.id}${USERNAME === '__KAGGLE_USERNAME__' ? '  (set KAGGLE_USERNAME env!)' : ''}`);
console.log(`  files: <lang>.jsonl × ${LANGS.length} + README.md + dataset-metadata.json`);
