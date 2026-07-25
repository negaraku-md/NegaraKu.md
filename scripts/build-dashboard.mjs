// build-dashboard.mjs — compute "digital organism" vitals from the manifest.
// Writes public/api/dashboard.json consumed by the /dashboard page + homepage.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = path.join(ROOT, 'public', 'api');
const IN = path.join(API, 'articles.json');
const OUT = path.join(API, 'dashboard.json');
const SITE_LANGS = ['ms', 'en', 'zh']; // every locale the site serves
const HEART_TARGET = 60; // articles considered a "healthy" corpus size

async function main() {
  if (!existsSync(IN)) {
    console.warn('[dashboard] no articles.json — run sync first. Skipping.');
    return;
  }
  // Publication gate: sensitive (3R+1) content stays out of the public dashboard
  // (its registry lists titles) until reviewed + published.
  const { articles: allArticles } = JSON.parse(await readFile(IN, 'utf8'));
  const articles = allArticles.filter(
    (a) => !a.sensitivity || a.sensitivity === 'none' || (a.status === 'published' && a.reviewer),
  );

  // Master/source language is declared PER ARTICLE (a translation names its own
  // source), so we never assume one site-wide master. Each topic's master decides
  // what counts as "source" vs. a translation slot that still needs filling.
  const masterByKey = new Map();
  for (const a of articles) {
    // Prefer the master file itself (lang === masterLanguage); otherwise any
    // entry, since a topic's translations all declare the same master.
    if (!masterByKey.has(a.key) || a.lang === a.masterLanguage) {
      masterByKey.set(a.key, a.masterLanguage ?? a.lang);
    }
  }

  // One canonical article per key = the topic's MASTER (its authoritative version),
  // plus per-language titles for the registry. Corpus-level stats (status,
  // reviewed %, citations) must reflect the master, NOT a freshly-added draft
  // translation. The old rule preferred `ms`, so the whole dashboard read as
  // "mostly draft / 3% reviewed" the instant MS draft translations landed, even
  // though every English master stayed published — the figures stopped tallying
  // with the language×lifecycle matrix, which counts files as-is.
  const canonical = new Map();
  const langsByKey = new Map();
  const titlesByKey = new Map();
  for (const a of articles) {
    if (!langsByKey.has(a.key)) langsByKey.set(a.key, new Set());
    langsByKey.get(a.key).add(a.lang);
    if (!titlesByKey.has(a.key)) titlesByKey.set(a.key, {});
    titlesByKey.get(a.key)[a.lang] = a.title;
    const prev = canonical.get(a.key);
    const rank = (x) => (x.lang === (masterByKey.get(x.key) ?? 'ms') ? 2 : 1);
    if (!prev || rank(a) > rank(prev)) canonical.set(a.key, a);
  }
  const base = [...canonical.values()];
  const total = base.length; // public topics that clear the publish gate

  // The TRUE corpus size: one file per topic in its own master language, counted
  // across the WHOLE manifest (sensitive drafts included). This is what the
  // headline should show — `total` above is only the publicly-servable subset.
  const masterArticles = allArticles.filter((a) => a.lang === (a.masterLanguage ?? a.lang)).length;
  const filesByLang = {};
  const publishedByLang = {};
  for (const l of SITE_LANGS) {
    const f = allArticles.filter((a) => a.lang === l);
    filesByLang[l] = f.length;
    publishedByLang[l] = f.filter((a) => a.status === 'published').length;
  }
  const publishedTotal = SITE_LANGS.reduce((n, l) => n + publishedByLang[l], 0);

  const perCategory = {};
  let reviewed = 0;
  let citedOk = 0;
  let citedNeed = 0;
  // Buckets mirror the status enum (draft | in-review | reviewed | published).
  // "verified" was a phantom bucket — not a real status, so always 0.
  const statusDist = { draft: 0, 'in-review': 0, reviewed: 0, published: 0 };
  for (const a of base) {
    perCategory[a.category] = (perCategory[a.category] ?? 0) + 1;
    statusDist[a.status] = (statusDist[a.status] ?? 0) + 1;
    // Published content has cleared review, so it counts toward the reviewed vital.
    if (a.status === 'reviewed' || a.status === 'published') reviewed++;
    // Citation health is measured across the whole corpus, not just reviewed
    // articles. Gating it on review status made the organ read 0/0 — scoring
    // zero — while every article in the corpus was in fact fully cited.
    citedNeed++;
    if (a.sources > 0) citedOk++;
  }

  // Translation coverage: each topic needs a translation in every locale except
  // its own master. The master (source) is not a translation slot.
  let slots = 0;
  let filled = 0;
  for (const key of canonical.keys()) {
    const langs = langsByKey.get(key);
    const master = masterByKey.get(key);
    for (const l of SITE_LANGS) {
      if (l === master) continue;
      slots++;
      if (langs.has(l)) filled++;
    }
  }

  const pct = (n, d) => (d ? Math.round((n / d) * 100) : 0);
  const categoriesCovered = Object.keys(perCategory).length;

  const vitals = {
    heart: {
      label: { ms: 'Jantung', en: 'Heartbeat', zh: '心跳' },
      score: Math.min(100, Math.round((masterArticles / HEART_TARGET) * 100)),
      detail: { ms: `${masterArticles} artikel induk`, en: `${masterArticles} master articles`, zh: `${masterArticles} 篇主文章` },
    },
    // Was "Immunity — N reviewed". Nothing in the corpus has a genuine human
    // review (statuses were set in bulk), so that number asserted something it
    // could not back up. Report what actually cleared the publish gate instead.
    published: {
      label: { ms: 'Diterbitkan', en: 'Published', zh: '已发布' },
      // Honest denominator: published master topics over ALL master topics, not
      // over the publish-gated subset (which flattered the figure).
      score: pct(statusDist.published, masterArticles),
      detail: {
        ms: `${statusDist.published}/${masterArticles} diterbitkan`,
        en: `${statusDist.published}/${masterArticles} published`,
        zh: `${statusDist.published}/${masterArticles} 已发布`,
      },
    },
    dna: {
      label: { ms: 'DNA', en: 'DNA / Languages', zh: 'DNA·语言' },
      score: pct(filled, slots),
      detail: { ms: `${filled}/${slots} terjemahan`, en: `${filled}/${slots} translations`, zh: `${filled}/${slots} 翻译` },
    },
    citations: {
      label: { ms: 'Rujukan', en: 'Citations', zh: '引用' },
      score: pct(citedOk, citedNeed || 1),
      detail: { ms: `${citedOk}/${citedNeed} dipetik`, en: `${citedOk}/${citedNeed} cited`, zh: `${citedOk}/${citedNeed} 已引用` },
    },
    diversity: {
      label: { ms: 'Kepelbagaian', en: 'Diversity', zh: '多样性' },
      score: pct(categoriesCovered, 15),
      detail: { ms: `${categoriesCovered} kategori`, en: `${categoriesCovered} categories`, zh: `${categoriesCovered} 个类别` },
    },
  };

  // Per locale, split topics into: source (this locale is the topic's master),
  // translated (present but not the master) and still-needed. Coverage % is over
  // topics that actually NEED this locale as a translation — never over the whole
  // corpus, which would count source articles as free translations.
  const perLangCoverage = {};
  for (const l of SITE_LANGS) {
    let source = 0;
    let translated = 0;
    for (const key of canonical.keys()) {
      const isMaster = masterByKey.get(key) === l;
      const present = langsByKey.get(key)?.has(l);
      if (isMaster) source++;
      else if (present) translated++;
    }
    const target = total - source; // topics that need this locale as a translation
    perLangCoverage[l] = {
      have: source + translated,
      total,
      source,
      target,
      translated,
      pct: target ? pct(translated, target) : 100,
    };
  }

  // Editorial lifecycle matrix. Counts EVERY file — including drafts still gated
  // out of the public build — so pending work is visible, not hidden. Per language
  // it splits master vs. translation, tracks the review lifecycle, and reports what
  // is still outstanding (Total − Published = work not yet live). Uses allArticles
  // (ungated) on purpose: this is the ops view of the whole corpus.
  const statusByLang = {};
  for (const l of SITE_LANGS) {
    statusByLang[l] = {
      total: 0,
      master: 0,
      translate: 0,
      draftMaster: 0,
      draftTranslate: 0,
      draft: 0,
      'in-review': 0,
      reviewed: 0,
      published: 0,
      outstanding: 0,
    };
  }
  for (const a of allArticles) {
    const row = statusByLang[a.lang];
    if (!row) continue;
    row.total++;
    const isMaster = a.lang === (a.masterLanguage ?? a.lang);
    if (isMaster) row.master++;
    else row.translate++;
    const s = a.status;
    if (s === 'in-review' || s === 'reviewed' || s === 'published') {
      row[s]++;
    } else {
      // draft (or any unknown) — split by origin so we can see original vs translated
      row.draft++;
      if (isMaster) row.draftMaster++;
      else row.draftTranslate++;
    }
  }
  for (const l of SITE_LANGS) {
    const r = statusByLang[l];
    r.outstanding = r.total - r.published; // still needs to reach "published"
  }

  // Content types beyond the article. The dashboard reported "312 articles" as
  // if that were the corpus; datasets, taxonomy copy and UI strings reach readers
  // too. Counting them here means ungoverned content cannot hide by being
  // uncounted (see docs/CONTENT-MODEL.md).
  const readSrc = async (rel) => {
    const f = path.join(ROOT, rel);
    return existsSync(f) ? await readFile(f, 'utf8') : '';
  };
  const provText = await readSrc('src/lib/provenance.ts');
  // Split on the DECLARATION, not any mention — `DATASETS` also appears in
  // getProvenance() below it, and .pop() there matched an empty tail, which
  // reported "0 datasets, fully governed". A census that counts nothing must
  // never read as clean.
  const datasetVerifications = [
    ...(provText.split('export const DATASETS')[1] ?? '').matchAll(/verification:\s*'([a-z]+)'/g),
  ].map((m) => m[1]);
  const byVerification = datasetVerifications.reduce((acc, v) => {
    acc[v] = (acc[v] ?? 0) + 1;
    return acc;
  }, {});
  const uiStrings = [...(await readSrc('src/lib/i18n.ts')).matchAll(/'[\w.\-]+':\s*\{[^{}]*\}/g)].length;

  const contentTypes = [
    { id: 'article', count: total, files: allArticles.length, governance: 'full' },
    {
      id: 'dataset',
      count: datasetVerifications.length,
      files: datasetVerifications.length,
      // Only "fully governed" when there is something to govern AND all of it
      // is sourced. Zero datasets is a parse failure, not a clean bill.
      governance:
        datasetVerifications.length > 0 &&
        (byVerification.sourced ?? 0) === datasetVerifications.length
          ? 'full'
          : 'partial',
      detail: byVerification,
    },
    { id: 'taxonomy', count: categoriesCovered, files: categoriesCovered, governance: 'none' },
    { id: 'ui', count: uiStrings, files: uiStrings, governance: 'none' },
  ];

  const dashboard = {
    contentTypes,
    totals: {
      masterArticles,        // 481 — one per topic (the source articles)
      publicTopics: total,   // 386 — topics that clear the publish gate
      articles: total,       // kept for back-compat
      files: allArticles.length, // 1105 — every language file
      filesByLang,           // { en, ms, zh } file counts
      publishedByLang,       // { en, ms, zh } published file counts
      publishedTotal,        // total published files across all languages
      languages: 3,
      categories: categoriesCovered,
      reviewedPct: pct(reviewed, total),
    },
    vitals,
    statusDist,
    statusByLang,
    perCategory,
    perLangCoverage,
    // Reader-facing "what's new": the most recently updated articles, linkable.
    // Replaces a raw git-commit feed (hashes + dev messages) that meant nothing
    // to a reader.
    recentlyUpdated: [...base]
      .filter((a) => a.updated)
      .sort((x, y) => (x.updated < y.updated ? 1 : x.updated > y.updated ? -1 : 0))
      .slice(0, 8)
      .map((a) => {
        const ttl = titlesByKey.get(a.key) ?? {};
        return {
          slug: a.slug,
          category: a.category,
          title: { ms: a.title, en: ttl.en ?? a.title, zh: ttl.zh ?? a.title },
          updated: a.updated,
        };
      }),
    // The Outstanding column's worklist: files not yet published, so the number
    // links to actual work instead of being a dead statistic. Capped — the full
    // list is hundreds long; `total` reports the true size.
    needsReview: (() => {
      const drafts = allArticles
        .filter((a) => a.status !== 'published')
        .sort((x, y) =>
          x.lang === y.lang ? (x.key < y.key ? -1 : 1) : x.lang < y.lang ? -1 : 1,
        );
      return {
        total: drafts.length,
        items: drafts.slice(0, 12).map((a) => ({
          slug: a.slug,
          category: a.category,
          lang: a.lang,
          title: a.title,
        })),
      };
    })(),
    registry: base
      .map((a) => {
        const ttl = titlesByKey.get(a.key) ?? {};
        return {
          slug: a.slug,
          title: { ms: a.title, en: ttl.en ?? a.title, zh: ttl.zh ?? a.title },
          category: a.category,
          status: a.status,
          words: a.words,
          sources: a.sources,
          updated: a.updated,
          langs: [...langsByKey.get(a.key)].sort(),
        };
      })
      .sort((x, y) => (x.category < y.category ? -1 : x.category > y.category ? 1 : x.title.ms < y.title.ms ? -1 : 1)),
  };

  await mkdir(API, { recursive: true });
  await writeFile(OUT, JSON.stringify(dashboard, null, 2));
  console.log(`[dashboard] ${total} article(s) → public/api/dashboard.json`);
}

main().catch((err) => {
  console.warn('[dashboard] skipped:', err.message);
});
