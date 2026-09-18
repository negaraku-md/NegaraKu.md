// li-queue.mjs — LinkedIn backlog queue, ranking and posted-manifest.
//
// LinkedIn drains the SAME published corpus as Facebook to a SINGLE Company Page,
// but in three languages (en/ms/zh) rotated into the one feed, each leading with
// the business/compliance pillar. So this reuses the corpus lister + per-language
// demand ranking from fb-queue.mjs, then reorders to put doing-business first. Its
// own manifest (analytics/posted-linkedin.json) keeps LinkedIn state independent of
// Facebook's; entries are keyed base#lang so each article posts once per language.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { listPublishedBases, rankBasesForLang } from './fb-queue.mjs';
import { LANGS } from './linkedin.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const MANIFEST = path.join(ROOT, 'analytics', 'posted-linkedin.json');

// The LinkedIn Company Page launched 2026-09-18 with 0 followers, so it warm-ups
// from 1/day like the FB Pages did — protect early per-post reach, climb later.
const SINCE = process.env.LINKEDIN_SINCE || '2026-09-18';

export { listPublishedBases };

// --- ranking ---------------------------------------------------------------

// Business-first order for a language. rankBasesForLang(lang, …) already sorts each
// pillar by THAT language's search demand (then recency) and round-robins them; a
// STABLE sort by pillar priority then groups all doing-business articles to the
// front while preserving within-pillar demand order (Node's sort is stable).
const PILLAR_PRIORITY = { 'doing-business': 0, living: 1, understand: 2 };
export function rankForLinkedIn(lang, bases = listPublishedBases()) {
  const ranked = rankBasesForLang(lang, bases);
  return [...ranked].sort(
    (a, b) => (PILLAR_PRIORITY[a.pillar] ?? 9) - (PILLAR_PRIORITY[b.pillar] ?? 9),
  );
}

// --- manifest --------------------------------------------------------------

// Entry per (base, lang): { post_urn, at }. One Page, three languages → key base#lang.
const key = (base, lang) => `${base}#${lang}`;

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

export const isDone = (m, base, lang) => Boolean(m.posted[key(base, lang)]?.post_urn);

export function markPost(m, base, lang, postUrn) {
  m.posted[key(base, lang)] = { post_urn: postUrn, at: new Date().toISOString() };
}

// Total posts recorded — drives the language ROTATION offset so the trilingual
// feed stays balanced over time and each run starts on a different language.
export const totalPosted = (m) => Object.keys(m.posted || {}).length;

// --- warm-up ramp ----------------------------------------------------------

// TOTAL articles to post per DAY across all languages (one Page → one feed), ramping
// by Page age: 1/day weeks 1-2, 3/day weeks 3-4, then 5/day. Conservative while the
// Page is young. Override with LINKEDIN_PER_DAY for tests/acceleration.
export function perDay(now = Date.now()) {
  const override = Number(process.env.LINKEDIN_PER_DAY);
  if (Number.isFinite(override) && override > 0) return override;
  const days = Math.max(0, Math.floor((now - Date.parse(SINCE)) / 86400000));
  if (days < 14) return 1;
  if (days < 28) return 3;
  return 5;
}

// Distinct posts already made "today" in Malaysia time (UTC+8), across all languages.
// Lets the cron fire several times a day yet post only up to the daily target.
export function postedTodayCountMYT(m, now = Date.now()) {
  const MYT = 8 * 3600000;
  const day = (ms) => new Date(ms + MYT).toISOString().slice(0, 10);
  const today = day(now);
  let n = 0;
  for (const e of Object.values(m.posted || {})) {
    if (e?.at && day(Date.parse(e.at)) === today) n += 1;
  }
  return n;
}

// The next unposted article base for ONE language, in business-first ranked order.
// Null when that language's queue is fully drained.
export function nextForLang(m, lang, bases = listPublishedBases()) {
  for (const b of rankForLinkedIn(lang, bases)) {
    if (!isDone(m, b.base, lang)) return b;
  }
  return null;
}

// The next `count` targets for the single feed, ROTATING languages so the mix stays
// balanced: build each language's business-first queue of unposted articles, then
// round-robin across them starting on an offset by total posts so far (so each run
// leads with a different language and the long run stays balanced), skipping a
// language whose queue is drained. Returns [{ base, lang }].
export function nextBatch(m, count, bases = listPublishedBases()) {
  const start = totalPosted(m) % LANGS.length;
  const queues = {}, idx = {};
  for (const lang of LANGS) {
    queues[lang] = rankForLinkedIn(lang, bases).filter((b) => !isDone(m, b.base, lang));
    idx[lang] = 0;
  }
  const out = [];
  let progress = true;
  while (out.length < count && progress) {
    progress = false;
    for (let i = 0; i < LANGS.length && out.length < count; i++) {
      const lang = LANGS[(start + i) % LANGS.length];
      if (idx[lang] < queues[lang].length) {
        out.push({ base: queues[lang][idx[lang]++].base, lang });
        progress = true;
      }
    }
  }
  return out;
}
