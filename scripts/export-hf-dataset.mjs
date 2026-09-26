/**
 * Export the knowledge corpus as a Hugging Face dataset (open data).
 *
 * Mission: "let AI know about Malaysia." The corpus is already AI-friendly
 * Markdown, so this puts it directly into training + RAG pipelines. One export,
 * refreshable by a scheduled job (.github/workflows/huggingface-dataset.yml).
 *
 * Output (all under ./dataset, git-ignored — it is published to the HF dataset
 * repo, not committed to this site repo):
 *   dataset/data/<lang>.jsonl   one JSON object per published article-language
 *   dataset/README.md           the HF dataset card (YAML metadata + docs)
 *
 * Scope: status === 'published' && !hidden. License: CC BY-SA 4.0 (same as site).
 *
 * Run: node scripts/export-hf-dataset.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, rmSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const KNOWLEDGE = join(ROOT, 'knowledge');
const OUT = join(ROOT, 'dataset');
const DATA = join(OUT, 'data');

const SITE = 'https://negaraku.md';
const LICENSE = 'CC-BY-SA-4.0';
const LICENSE_URL = 'https://creativecommons.org/licenses/by-sa/4.0/';
const LANGS = ['ms', 'en', 'zh', 'ta', 'ja', 'ko'];
// The Hugging Face dataset repo id. Override with HF_REPO when publishing.
const HF_REPO = process.env.HF_REPO || 'negaraku-md/negaraku-md';

/** Recursively list every .md file under knowledge/. */
function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

/** Canonical URL for an article-language (matches the site's routing). */
function urlFor(lang, category, slug) {
  const prefix = lang === 'ms' ? '' : `/${lang}`;
  return `${SITE}${prefix}/${category}/${slug}/`;
}

const rows = { ms: [], en: [], zh: [], ta: [], ja: [] };
let scanned = 0, skipped = 0;

for (const file of walk(KNOWLEDGE)) {
  scanned++;
  const raw = readFileSync(file, 'utf8');
  const { data: d, content } = matter(raw);
  if (d.status !== 'published' || d.hidden === true) { skipped++; continue; }
  const lang = d.lang || 'ms';
  if (!LANGS.includes(lang)) { skipped++; continue; }

  const body = content.trim();
  const sources = Array.isArray(d.sources)
    ? d.sources.map((s) => ({
        title: s.title ?? '',
        url: s.url ?? '',
        publisher: s.publisher ?? '',
        date: s.date ? String(s.date) : '',
      }))
    : [];

  rows[lang].push({
    id: `${d.topicId}.${lang}`,
    topic_id: d.topicId,
    title: d.title ?? '',
    summary: d.summary ?? '',
    answer: d.answer ?? '',
    key_takeaways: Array.isArray(d.keyTakeaways) ? d.keyTakeaways : [],
    category: d.category ?? '',
    subcategory: Array.isArray(d.subcategory) ? d.subcategory : [],
    tier: String(d.tier ?? ''),
    content_type: d.contentType ?? '',
    language: lang,
    url: urlFor(lang, d.category, d.slug),
    entity: d.entity ?? '',
    wikidata: d.wikidata ?? '',
    sources,
    license: LICENSE,
    updated: d.updated ? new Date(d.updated).toISOString().slice(0, 10) : '',
    content: body,
  });
}

// Write per-language JSONL (deterministic order: by topic_id).
rmSync(DATA, { recursive: true, force: true });
mkdirSync(DATA, { recursive: true });
let total = 0, withQid = 0;
for (const lang of LANGS) {
  rows[lang].sort((a, b) => a.topic_id.localeCompare(b.topic_id));
  const jsonl = rows[lang].map((r) => JSON.stringify(r)).join('\n') + '\n';
  writeFileSync(join(DATA, `${lang}.jsonl`), jsonl);
  total += rows[lang].length;
  withQid += rows[lang].filter((r) => r.wikidata).length;
}

// The Hugging Face dataset card.
const perLangConfigs = LANGS.map(
  (l) => `- config_name: ${l}\n  data_files:\n  - split: train\n    path: data/${l}.jsonl`
).join('\n');

const counts = LANGS.map((l) => `\`${l}\`: ${rows[l].length}`).join(' · ');

const card = `---
license: cc-by-sa-4.0
language:
- ms
- en
- zh
- ta
- ja
multilinguality:
- multilingual
pretty_name: NegaraKu.md — Malaysia Knowledge Base
tags:
- malaysia
- knowledge-base
- multilingual
- rag
- question-answering
task_categories:
- text-generation
- question-answering
- text-retrieval
size_categories:
- 1K<n<10K
source_datasets:
- original
configs:
- config_name: default
  data_files:
  - split: train
    path: data/*.jsonl
${perLangConfigs}
---

# NegaraKu.md — an open, AI-friendly knowledge base about Malaysia

**${total.toLocaleString()} articles** across five languages (${counts}), covering
government, law, taxation, business, companies, culture, geography, history,
healthcare, education, and daily life in Malaysia. Every article is
human-reviewable, cited, and released under a permissive licence so it can be
used freely for training, retrieval-augmented generation, and research.

This dataset is the open-data mirror of the website
[negaraku.md](${SITE}). The mission is simple: **let the world — and AI — know
about Malaysia**, from primary and authoritative sources.

## Fields

| field | description |
|---|---|
| \`id\` | stable id — \`<topic_id>.<language>\` |
| \`topic_id\` | topic id shared across an article's language versions |
| \`title\` | article title |
| \`summary\` | one-paragraph summary |
| \`answer\` | the concise, liftable direct answer (may be empty) |
| \`key_takeaways\` | list of the key points |
| \`category\` / \`subcategory\` | taxonomy |
| \`tier\` | editorial importance tier |
| \`content_type\` | e.g. guide, place, concept |
| \`language\` | \`ms\` · \`en\` · \`zh\` · \`ta\` · \`ja\` |
| \`url\` | canonical URL on negaraku.md |
| \`entity\` | the primary entity the article is about |
| \`wikidata\` | the entity's Wikidata QID, when known (${withQid} rows) — links each article to the global knowledge graph |
| \`sources\` | list of \`{title, url, publisher, date}\` citations |
| \`updated\` | last-updated date (\`YYYY-MM-DD\`) |
| \`content\` | the full article body in Markdown |
| \`license\` | \`${LICENSE}\` |

## Usage

\`\`\`python
from datasets import load_dataset

# all languages
ds = load_dataset("${HF_REPO}", split="train")

# a single language
en = load_dataset("${HF_REPO}", "en", split="train")
\`\`\`

## Languages

\`ms\` Bahasa Melayu (default) · \`en\` English · \`zh\` 中文 · \`ta\` தமிழ் · \`ja\` 日本語.
Language versions of the same article share a \`topic_id\`.

## Licence & attribution

Released under [Creative Commons Attribution-ShareAlike 4.0](${LICENSE_URL}).
You may share and adapt for any purpose, including commercially, with
attribution and share-alike. Please credit **NegaraKu.md** and link back to the
source \`url\`.

## Provenance

Content is AI-drafted from authoritative Malaysian sources (government
agencies, statutes, regulators) and organisation-published, with per-article
citations in the \`sources\` field. It corresponds to the
[Wikidata item Q141449495](https://www.wikidata.org/wiki/Q141449495).

## Citation

\`\`\`bibtex
@misc{negarakumd,
  title  = {NegaraKu.md — an open, AI-friendly knowledge base about Malaysia},
  author = {NegaraKu.md},
  url    = {${SITE}},
  note   = {Licensed under CC BY-SA 4.0}
}
\`\`\`
`;

writeFileSync(join(OUT, 'README.md'), card);

console.log(`[hf-export] scanned ${scanned} files, wrote ${total} rows (${skipped} skipped: archived/hidden/non-published)`);
for (const l of LANGS) console.log(`  ${l}: ${rows[l].length}`);
console.log(`  with wikidata QID: ${withQid}`);
console.log(`  output: ${relative(ROOT, OUT)}/  (data/*.jsonl + README.md)`);
console.log(`  HF repo (override with HF_REPO env): ${HF_REPO}`);
