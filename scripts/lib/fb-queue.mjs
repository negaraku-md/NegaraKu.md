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

// Manifest entry per (base, lang): { post_id, at, comment_status }.
//   post_id       — the Facebook story id once the PHOTO is posted (persisted
//                   immediately, before the comment is attempted).
//   comment_status— 'pending' | 'posted' | 'failed' for the first comment.
// This decouples the post from its comment: a comment failure never causes the
// post to be recreated — a later run retries ONLY the comment on the saved id.
const key = (base, lang) => `${base}#${lang}`;
export const entryFor = (m, base, lang) => m.posted[key(base, lang)];
// Fully done: the post is up AND the link is placed — comment_status 'posted'
// (comment mode) or 'na' (caption mode, link is in the caption so no comment).
export const isDone = (m, base, lang) => {
  const e = m.posted[key(base, lang)];
  return Boolean(e && e.post_id && (e.comment_status === 'posted' || e.comment_status === 'na'));
};
// The photo post already exists (so retry must comment on it, never recreate it).
export const hasPost = (m, base, lang) => Boolean(m.posted[key(base, lang)]?.post_id);
// Record a successful photo post — call the instant the post returns, before the
// comment, so the id is never lost.
export function markPost(m, base, lang, postId) {
  const k = key(base, lang);
  m.posted[k] = {
    ...(m.posted[k] || {}),
    post_id: postId,
    at: new Date().toISOString(),
    comment_status: m.posted[k]?.comment_status ?? 'pending',
  };
}
// Record the first-comment outcome ('posted' | 'failed').
export function markComment(m, base, lang, status) {
  const k = key(base, lang);
  (m.posted[k] ||= {}).comment_status = status;
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

// True if the backlog already posted a batch "today" in Malaysia time (UTC+8).
// This makes the daily cron idempotent: the schedule fires several times a day so
// a skipped GitHub-scheduled tick is caught by a later one, but the poster guards
// on this so no more than ONE batch posts per MYT day. (A run posts a whole batch
// back-to-back, so the newest `at` marks the day the last batch went out.)
export function postedTodayMYT(manifest, now = Date.now()) {
  const MYT_OFFSET = 8 * 3600000; // UTC+8, no DST in Malaysia
  const mytDay = (ms) => new Date(ms + MYT_OFFSET).toISOString().slice(0, 10); // YYYY-MM-DD in MYT
  const today = mytDay(now);
  for (const e of Object.values(manifest.posted || {})) {
    if (e?.at && mytDay(Date.parse(e.at)) === today) return true;
  }
  return false;
}

// The next batch of article bases to act on: ranked order, dropping any base
// that is fully done in every language (post + comment), capped at `count`. A
// base with a failed/pending comment is still included so the poster retries the
// comment on the existing post — it never recreates a post that has an id.
export function nextBatch(manifest, count) {
  const ranked = rankBases(listPublishedBases());
  const batch = [];
  for (const b of ranked) {
    if (LANGS.every((lang) => isDone(manifest, b.base, lang))) continue;
    batch.push(b);
    if (batch.length >= count) break;
  }
  return batch;
}
