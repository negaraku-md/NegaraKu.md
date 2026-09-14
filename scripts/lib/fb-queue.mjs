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
import { LANGS, LANG_POLICY, pillarOf } from './facebook.mjs';

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
    if (/\.(ms|en|zh|ta|ja|ko)\.md$/.test(rel)) continue; // translation, not a master (ta was missing → miscounted + phantom queue entries)
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

// Minimum per-language impressions before a language's OWN search demand is
// trusted to rank its queue. Below this a newly-launched language (ta/ja/ko has
// ~0 GSC history at first) COLD-STARTS on the aggregate demand as a proxy, then
// switches to its own signal automatically once it has accumulated enough.
const COLD_START_MIN = 30;

// Per-category search demand from the committed GSC snapshot (impressions over
// the trailing window). Used to front-load articles in categories people are
// already finding on Google — proven demand, no live call needed.
//   categoryDemand()      → aggregate across all languages (back-compat / proxy)
//   categoryDemand(lang)  → THAT language's own demand (latest.byLang[lang]),
//                           falling back to the aggregate when the language has
//                           too little history (cold-start).
function categoryDemand(lang) {
  try {
    const gsc = JSON.parse(readFileSync(GSC, 'utf8'));
    const latest = gsc?.latest ?? {};
    const agg = {};
    for (const [cat, v] of Object.entries(latest.byCategory ?? {})) agg[cat] = Number(v?.impressions) || 0;
    if (!lang) return agg;
    const lc = latest.byLang?.[lang]?.byCategory;
    if (!lc) return agg; // no per-language data captured yet → aggregate proxy
    const own = {};
    let total = 0;
    for (const [cat, v] of Object.entries(lc)) {
      const imp = Number(v?.impressions) || 0;
      own[cat] = imp;
      total += imp;
    }
    return total >= COLD_START_MIN ? own : agg; // cold-start until the language has real signal
  } catch {
    return {}; // no snapshot → all zero, falls back to recency + rotation
  }
}

// Order the backlog: within each pillar, sort by category search-demand then by
// recency (newest first); then interleave the three pillars round-robin so no
// single pillar floods the feed. `demand` is the (possibly language-specific)
// category→impressions map; the ranking shape is identical either way.
function rankWith(bases, demand) {
  const score = (b) => demand[b.category] ?? 0;
  const byPillar = { 'doing-business': [], living: [], understand: [] };
  for (const b of bases) (byPillar[b.pillar] ??= []).push(b);
  for (const list of Object.values(byPillar)) {
    list.sort((x, y) => (score(y) - score(x)) || (String(y.updated).localeCompare(String(x.updated))));
  }
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

// Aggregate ranking (all languages share one order) — kept for back-compat.
export function rankBases(bases) {
  return rankWith(bases, categoryDemand());
}

// PER-LANGUAGE ranking: order a language's queue by ITS OWN search demand, so the
// Tamil feed and the English feed front-load different articles for their
// different audiences (the whole point). Cold-starts on aggregate demand until
// the language has its own GSC history.
export function rankBasesForLang(lang, bases) {
  return rankWith(bases, categoryDemand(lang));
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

// Articles to post per DAY, ramping as the rollout ages so the young Pages warm
// up before volume climbs: 1/day weeks 1-2, 3/day weeks 3-4, then 5/day. Each
// article posts once to each language Page, and the daily total is split across
// the day's cron ticks (see the poster) so it drips rather than flooding the feed.
// Deliberately conservative to protect per-post reach while the Pages are young —
// raise the tail rate here (e.g. 10) or set FB_BACKLOG_PER_DAY once they warm up.
export function perRunArticles(manifest, now = Date.now()) {
  const override = Number(process.env.FB_BACKLOG_PER_DAY);
  if (Number.isFinite(override) && override > 0) return override;
  const started = manifest.meta?.startedAt ? Date.parse(manifest.meta.startedAt) : now;
  const days = Math.max(0, Math.floor((now - started) / 86400000));
  if (days < 14) return 1;
  if (days < 28) return 3;
  return 5;
}

// Whether a language is currently posting at all (LANG_POLICY.enabled, default on
// for anything in LANGS). A disabled language is skipped without touching others.
export const isLangEnabled = (lang) => LANG_POLICY?.[lang]?.enabled !== false;

// A language's DAILY article target, ramped by HOW NEW its Page is: young Pages
// post fewer to protect per-post reach, climbing to the steady-state `perDay` cap.
//   Page age (from LANG_POLICY.since):  < 2 wks → 1/day,  wks 3-4 → 3/day,  then 5,
//   all capped by the language's own `perDay`. FB_BACKLOG_PER_DAY overrides for tests.
export function perLangPerDay(lang, manifest, now = Date.now()) {
  const override = Number(process.env.FB_BACKLOG_PER_DAY);
  if (Number.isFinite(override) && override > 0) return override;
  const pol = LANG_POLICY?.[lang] ?? {};
  const cap = Number.isFinite(pol.perDay) ? pol.perDay : 5;
  const startMs = pol.since ? Date.parse(pol.since)
    : manifest.meta?.startedAt ? Date.parse(manifest.meta.startedAt) : now;
  const days = Math.max(0, Math.floor((now - startMs) / 86400000));
  const ramp = days < 14 ? 1 : days < 28 ? 3 : 5; // warm-up by Page age
  return Math.min(cap, ramp);
}

// How many DISTINCT articles the backlog already posted "today" in Malaysia time
// (UTC+8). Each article posts to 3 language Pages in one run (3 manifest entries
// sharing a base), so we count distinct bases, not entries. This is what lets the
// cron fire several times a day yet post only up to the daily target: each
// scheduled tick tops up toward the target, so a GitHub-skipped 13:00 tick is
// self-healed by 16:00/19:00 AND the day's allotment is spread across the ticks
// (not dumped in one feed-flooding burst).
export function postedTodayCountMYT(manifest, now = Date.now()) {
  const MYT_OFFSET = 8 * 3600000; // UTC+8, no DST in Malaysia
  const mytDay = (ms) => new Date(ms + MYT_OFFSET).toISOString().slice(0, 10); // YYYY-MM-DD in MYT
  const today = mytDay(now);
  const bases = new Set();
  for (const [k, e] of Object.entries(manifest.posted || {})) {
    if (e?.at && mytDay(Date.parse(e.at)) === today) bases.add(k.split('#')[0]);
  }
  return bases.size;
}
// True if any article already posted today (MYT) — the boolean form.
export const postedTodayMYT = (manifest, now = Date.now()) => postedTodayCountMYT(manifest, now) > 0;

// Distinct articles posted TODAY (MYT) in ONE language — the per-language form,
// so each language's daily target and cron-tick drip are tracked independently.
export function postedTodayCountMYTForLang(manifest, lang, now = Date.now()) {
  const MYT_OFFSET = 8 * 3600000;
  const mytDay = (ms) => new Date(ms + MYT_OFFSET).toISOString().slice(0, 10);
  const today = mytDay(now);
  const bases = new Set();
  for (const [k, e] of Object.entries(manifest.posted || {})) {
    const [base, l] = [k.slice(0, k.lastIndexOf('#')), k.slice(k.lastIndexOf('#') + 1)];
    if (l === lang && e?.at && mytDay(Date.parse(e.at)) === today) bases.add(base);
  }
  return bases.size;
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

// The next `count` article bases to post IN ONE LANGUAGE: that language's own
// demand-ranked order (rankBasesForLang), dropping any base already done in this
// language. This is the per-language queue — each language drains independently,
// so on a given day different Pages post different articles for their audiences.
export function nextForLang(manifest, lang, count, bases = listPublishedBases()) {
  const ranked = rankBasesForLang(lang, bases);
  const out = [];
  for (const b of ranked) {
    if (isDone(manifest, b.base, lang)) continue;
    out.push(b);
    if (out.length >= count) break;
  }
  return out;
}
