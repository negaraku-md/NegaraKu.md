// scaffold-draft.mjs — turn an accepted proposal into a correct draft skeleton.
//
// Writes knowledge/<category>/<slug>.md with schema-valid frontmatter (status:
// "draft", a fresh topicId, sane tier/type defaults) and section stubs, AFTER a
// dedup check against the whole corpus so nobody writes a page that already
// exists. The author then fills it in per docs/ARTICLE-TEMPLATE.md; translations
// are a separate pipeline (scripts/translate.mjs).
//
// Usage:
//   node scripts/scaffold-draft.mjs <category/slug> --title "…" [opts] [--apply]
//     --title "…"     required — the H1 / title.
//     --tier 1|2|3|4  editorial depth (default 3).
//     --type <t>      contentType (default guide): guide|faq|checklist|comparison|
//                     timeline|glossary|law|agency|place|company|industry|data|news.
//     --master ms|en|zh|ta   authoritative language (default en).
//     --by <handle>   the proposer/author (lowercase GitHub handle).
//     --summary "…"   one-line summary (else a TODO stub).
//     --force         write even if a near-duplicate is found (exact slug clash still aborts).
//     --apply         write (default: dry-run — show the dedup result + the file to be created).
//
// Dry-run by default. Exact slug-in-same-category is a HARD abort; fuzzy
// title/slug matches are surfaced as warnings (use --force to proceed anyway).

import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const MANIFEST = path.join(ROOT, 'public', 'api', 'articles.json');
const CONTENT_TYPES = ['guide', 'faq', 'checklist', 'comparison', 'timeline', 'glossary', 'law', 'agency', 'place', 'company', 'industry', 'data', 'news'];
const today = () => new Date().toISOString().slice(0, 10);
const die = (m) => { console.error(`\n[scaffold] ABORT: ${m}\n`); process.exit(1); };

// ---- args -----------------------------------------------------------------
const argv = process.argv.slice(2);
const apply = argv.includes('--apply');
const force = argv.includes('--force');
const flag = (n) => { const i = argv.indexOf(n); return i >= 0 && i + 1 < argv.length ? argv[i + 1] : null; };
const topic = argv.find((a, i) => !a.startsWith('--') && a.includes('/') && !['--title', '--tier', '--type', '--master', '--by', '--summary'].includes(argv[i - 1]));
const title = flag('--title');
const tier = flag('--tier') ?? '3';
const type = flag('--type') ?? 'guide';
const master = flag('--master') ?? 'en';
const by = flag('--by');
const summary = flag('--summary');

if (!topic) die('give the new article as <category/slug> (e.g. economy/sovereign-wealth-funds).');
if (!title) die('--title "…" is required.');
if (!['1', '2', '3', '4'].includes(tier)) die(`--tier must be 1|2|3|4 (got "${tier}").`);
if (!CONTENT_TYPES.includes(type)) die(`--type must be one of: ${CONTENT_TYPES.join(', ')}.`);
if (!['ms', 'en', 'zh', 'ta'].includes(master)) die(`--master must be ms|en|zh|ta (got "${master}").`);
if (by && !/^[a-z0-9][a-z0-9-]*$/.test(by)) die(`--by must be a lowercase GitHub handle (got "${by}").`);

const [cat, slug] = topic.split('/');
if (!cat || !slug) die(`bad topic "${topic}" — expected <category/slug>.`);
if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) die(`slug "${slug}" must be lowercase kebab-case.`);
const catDir = path.join(KNOWLEDGE, cat);
const target = path.join(catDir, `${slug}.md`); // the master always lives at the bare slug
if (existsSync(target)) die(`already exists: knowledge/${cat}/${slug}.md — nothing to scaffold.`);

// ---- load the corpus for dedup + topicId numbering ------------------------
let arts = [];
try { arts = JSON.parse(readFileSync(MANIFEST, 'utf8')).articles ?? []; } catch { console.log('[scaffold] note: public/api/articles.json not found — run `node scripts/sync.mjs` for a full dedup check. Proceeding on filesystem only.'); }
const masters = arts.filter((a) => a.lang === (a.masterLanguage ?? 'ms'));

if (!existsSync(catDir)) console.log(`[scaffold] note: category folder knowledge/${cat}/ does not exist yet — it will be created. Confirm "${cat}" is a real category in src/lib/categories.ts.`);

// Dedup: exact slug anywhere, and fuzzy title/slug overlap. Strip corpus-wide
// stopwords ("malaysia" is in almost every title/slug) or everything looks 50% alike.
const STOP = new Set(['malaysia', 'malaysian', 'what', 'your', 'the', 'and', 'for', 'how', 'who', 'why', 'with', 'from', 'that', 'this', 'are', 'you']);
const toks = (s, sep) => new Set(String(s).toLowerCase().split(sep).filter((w) => w.length > 3 && !STOP.has(w)));
const slugTokens = toks(slug, '-');
const titleWords = toks(title, /\s+/);
const sameSlug = masters.filter((a) => a.slug === slug);
const fuzzy = [];
for (const a of masters) {
  if (a.slug === slug) continue;
  const aSlugTok = toks(a.slug, '-');
  const slugOverlap = [...slugTokens].filter((t) => aSlugTok.has(t)).length / Math.max(1, slugTokens.size);
  const aTitleWords = toks(a.title, /\s+/);
  const titleOverlap = [...titleWords].filter((t) => aTitleWords.has(t)).length / Math.max(1, titleWords.size);
  const score = Math.max(slugOverlap, titleOverlap);
  if (score >= 0.5) fuzzy.push({ key: a.key, title: a.title, score: Math.round(score * 100) });
}
fuzzy.sort((a, b) => b.score - a.score);

console.log(`\n[scaffold] ${apply ? 'APPLY' : 'DRY-RUN'} — new draft knowledge/${cat}/${slug}.md`);
if (sameSlug.length) {
  console.log(`  ⚠ slug "${slug}" already used in: ${sameSlug.map((a) => a.key).join(', ')}`);
  if (sameSlug.some((a) => a.category === cat)) die(`"${slug}" already exists in category "${cat}". Pick a different slug.`);
}
if (fuzzy.length) {
  console.log(`  ⚠ ${fuzzy.length} possible duplicate(s) — make sure this is genuinely new:`);
  for (const f of fuzzy.slice(0, 6)) console.log(`      ${f.score}%  ${f.key} — ${f.title}`);
  if (!force && !sameSlug.length) console.log('  (not blocking — re-run with --force once you have confirmed it is distinct)');
}
if (fuzzy.length && !force && apply) die('possible duplicates found (above). Re-run with --force to scaffold anyway, or choose a different topic.');

// ---- topicId: reuse the category's existing prefix, next free number ------
// The manifest drops topicId, so read it from the master files themselves.
const readTopicId = (abs) => { try { return (readFileSync(abs, 'utf8').match(/^topicId:[ \t]*"?([A-Za-z0-9-]+)"?/m) ?? [])[1] ?? null; } catch { return null; } };
const bareMasters = (dir) => { const out = []; for (const e of readdirSync(dir, { withFileTypes: true })) { const p = path.join(dir, e.name); if (e.isDirectory()) out.push(...bareMasters(p)); else if (/^[^.]+\.md$/.test(e.name)) out.push(p); } return out; };
const allIds = new Set();
const catNums = [];
let prefix = null;
for (const abs of bareMasters(KNOWLEDGE)) {
  const id = readTopicId(abs);
  if (!id) continue;
  allIds.add(id);
  if (abs.includes(path.sep + cat + path.sep)) {
    const m = /^MY-([A-Z]+)-(\d+)$/.exec(id);
    if (m) { prefix ??= m[1]; if (m[1] === prefix) catNums.push(+m[2]); }
  }
}
prefix ??= cat.replace(/[^a-z]/g, '').slice(0, 3).toUpperCase() || 'GEN';
let n = (catNums.length ? Math.max(...catNums) : 0) + 1;
let topicId = `MY-${prefix}-${String(n).padStart(4, '0')}`;
while (allIds.has(topicId)) topicId = `MY-${prefix}-${String(++n).padStart(4, '0')}`; // guarantee global uniqueness
console.log(`  topicId: ${topicId}  ·  tier ${tier}  ·  ${type}  ·  master ${master}`);

// ---- compose the draft ----------------------------------------------------
const needsFaq = tier === '1' || tier === '2';
const draft = `---
topicId: ${topicId}
title: ${JSON.stringify(title)}
slug: "${slug}"
category: "${cat}"
subcategory: []
summary: ${JSON.stringify(summary ?? `TODO: one sentence — what this page answers.`)}

tier: "${tier}"
mode: "practical"
contentType: "${type}"
sensitivity: "none"

answer: "TODO: 40–100 words. The direct, self-contained answer, extractable as a snippet."
keyTakeaways:
  - "TODO: scannable, sourced fact"
appliesTo: "TODO: who this page is for."
${needsFaq ? `faq:
  - q: "TODO: a real question people search"
    a: "TODO: complete answer in 2–4 sentences."
` : ''}verificationNeeded:
  - "TODO: list every figure to confirm against an official source, or remove."

lang: "${master}"
masterLanguage: "${master}"
translationStatus: "master"

status: "draft"
aiAssisted: true
reviewer: null
revision: null
revisions:
  - revision: 0
    date: ${today()}
    change: "Initial draft scaffolded."${by ? `\n    contributor: "${by}"` : ''}

updated: ${today()}
sources: []
---

## TODO — write the article

Follow \`docs/ARTICLE-TEMPLATE.md\`. Verify every number, date, threshold, rate and
statute against an official source (WebSearch → WebFetch); a missing figure is a
gap, a wrong figure is a lie. Competitor pages are leads, never sources.

Suggested shape for a **${type}** (tier ${tier}):

### What it is

TODO.

### How it works

TODO.

### What to watch

TODO.
`;

if (!apply) {
  console.log(`\n[scaffold] dry-run only. Re-run with --apply to create the file.\n`);
  process.exit(0);
}
if (!existsSync(catDir)) await mkdir(catDir, { recursive: true });
await writeFile(target, draft);
console.log(`\n[scaffold] created knowledge/${cat}/${slug}.md (status: draft).`);
console.log(`[scaffold] next: write it, then \`node scripts/validate-frontmatter.mjs\` and \`node scripts/lifecycle.mjs submit ${cat}/${slug} --apply\`.\n`);
