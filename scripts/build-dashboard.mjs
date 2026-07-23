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
  const total = base.length;

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
      score: Math.min(100, Math.round((total / HEART_TARGET) * 100)),
      detail: { ms: `${total} artikel`, en: `${total} articles`, zh: `${total} 篇文章` },
    },
    immunity: {
      label: { ms: 'Imuniti', en: 'Immunity', zh: '免疫力' },
      score: pct(reviewed, total),
      detail: { ms: `${reviewed}/${total} disemak`, en: `${reviewed}/${total} reviewed`, zh: `${reviewed}/${total} 已审阅` },
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

  const dashboard = {
    totals: {
      articles: total,
      files: articles.length,
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
