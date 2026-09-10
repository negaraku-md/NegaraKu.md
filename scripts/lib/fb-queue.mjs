// fb-queue.mjs — backlog queue, priority ranking, and the posted-manifest.
//
// The backlog poster (post-backlog-to-facebook.mjs, queue mode) uses this to
// decide WHICH articles to post next and to remember what it has already posted,
// so the ~1,000-article corpus drains in priority order without ever double-posting.
//
// The manifest (analytics/posted.json) is committed like the other analytics
// snapshots (deploy.yml ignores analytics/**), so state survives across runs.

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { LANGS, pillarOf } from './facebook.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const MANIFEST = path.join(ROOT, 'analytics', 'posted.json');
const GSC = path.join(ROOT, 'analytics', 'gsc.json');

// --- corpus ----------------------------------------------------------------

// Every published master "base" (knowledge/<cat>/<slug>), i.e. a .md that is NOT
// a .<lang>.md translation and whose status is published (+ not hidden). Returns
// { base, category, slug, pillar, updated } for ranking.
export function listPublishedBases() {
  const out = [];
  let files;
  try {
    files = readdirSync(KNOWLEDGE, { recursive: true });
  } catch {
    return out;
  }
  for (const f of files) {
    const rel = `knowledge/${String(f).replace(/\\/g, '/')}`;
    if (!rel.endsWith('.md')) continue;
    if (/\.(ms|en|zh)\.md$/.test(rel)) continue; // translation, not a master
    if (rel.startsWith('knowledge/about/')) continue;
    const base = rel.replace(/\.md$/, '');
    let data;
    try {
      data = matter(readFileSync(path.join(ROOT, rel), 'utf8')).data;
    } catch {
      continue;
    }
    if (data.status !== 'published' || data.hidden) continue;
    if (!data.slug || !data.category) continue;
    out.push({
      base,
      category: data.category,
      slug: data.slug,
      pillar: pillarOf(data.category),
      updated: data.updated || data.published || '',
    });
  }
  return out;
}

// --- ranking ---------------------------------------------------------------

// Per-category search demand from the committed GSC snapshot (impressions over
// the trailing window). Used to front-load articles in categories people are
// already finding on Google — proven demand, no live call needed.
function categoryDemand() {
  const demand = {};
  try {
    const gsc = JSON.parse(readFileSync(GSC, 'utf8'));
    const byCat = gsc?.latest?.byCategory ?? {};
    for (const [cat, v] of Object.entries(byCat)) demand[cat] = Number(v?.impressions) || 0;
  } catch { /* no snapshot yet → all zero, falls back to recency + rotation */ }
  return demand;
}

// Order the backlog: within each pillar, sort by category search-demand then by
// recency (newest first); then interleave the three pillars round-robin so no
// single pillar floods the feed. Seasonal/timely injection can prepend later.
export function rankBases(bases) {
  const demand = categoryDemand();
  const score = (b) => demand[b.category] ?? 0;
  const byPillar = { 'doing-business': [], living: [], understand: [] };
  for (const b of bases) (byPillar[b.pillar] ??= []).push(b);
  for (const list of Object.values(byPillar)) {
    list.sort((x, y) => (score(y) - score(x)) || (String(y.updated).localeCompare(String(x.updated))));
  }
  // Round-robin the pillars (business, living, understand) so the feed rotates.
  const order = ['doing-business', 'living', 'understand'];
  const ranked = [];
  for (let i = 0; ; i++) {
    let added = false;
    for (const p of order) {
      const list = byPillar[p];
      if (list && i < list.length) { ranked.push(list[i]); added = true; }
    }
    if (!added) break;
  }
  return ranked;
}

// --- manifest --------------------------------------------------------------

// The posted-manifest records every (base, lang) already posted, plus a meta
// block with the rollout start (drives the warm-up ramp).
export function loadManifest() {
  if (!existsSync(MANIFEST)) return { meta: { startedAt: null }, posted: {} };
  try {
    const m = JSON.parse(readFileSync(MANIFEST, 'utf8'));
    m.meta ??= { startedAt: null };
    m.posted ??= {};
    return m;
  } catch {
    return { meta: { startedAt: null }, posted: {} };
  }
}

export function saveManifest(m) {
  mkdirSync(path.dirname(MANIFEST), { recursive: true });
  writeFileSync(MANIFEST, JSON.stringify(m, null, 2) + '\n', 'utf8');
}

const key = (base, lang) => `${base}#${lang}`;
export const isPosted = (m, base, lang) => Boolean(m.posted[key(base, lang)]);
export function markPosted(m, base, lang, story) {
  m.posted[key(base, lang)] = { at: new Date().toISOString(), story: story ?? null };
}

// --- warm-up ramp ----------------------------------------------------------

// Articles to post per run, ramping as the rollout ages: 1/day for the first
// two weeks (warm the young Pages), then 3, then 5. Each article posts once to
// each language Page. Override with FB_BACKLOG_PER_DAY.
export function perRunArticles(manifest, now = Date.now()) {
  const override = Number(process.env.FB_BACKLOG_PER_DAY);
  if (Number.isFinite(override) && override > 0) return override;
  const started = manifest.meta?.startedAt ? Date.parse(manifest.meta.startedAt) : now;
  const days = Math.max(0, Math.floor((now - started) / 86400000));
  if (days < 14) return 1;
  if (days < 28) return 3;
  return 5;
}

// The next batch of article bases to post: ranked order, dropping any base whose
// every language is already posted, capped at `count`. A base with a partially
// failed set (some langs missing) is included so the missing langs are retried;
// the poster skips the langs already in the manifest.
export function nextBatch(manifest, count) {
  const ranked = rankBases(listPublishedBases());
  const batch = [];
  for (const b of ranked) {
    if (LANGS.every((lang) => isPosted(manifest, b.base, lang))) continue;
    batch.push(b);
    if (batch.length >= count) break;
  }
  return batch;
}
