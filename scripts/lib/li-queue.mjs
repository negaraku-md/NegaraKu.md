// li-queue.mjs — LinkedIn backlog queue, ranking and posted-manifest.
//
// LinkedIn drains the SAME published corpus as Facebook, but as a single
// English-led feed that leads with the business/compliance pillar (its audience's
// natural fit). So this reuses the corpus lister + the English demand ranking from
// fb-queue.mjs, then reorders to put doing-business first. Its own manifest
// (analytics/posted-linkedin.json) keeps LinkedIn state independent of Facebook's,
// so the two engines never collide and each drains at its own pace.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { listPublishedBases, rankBasesForLang } from './fb-queue.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const MANIFEST = path.join(ROOT, 'analytics', 'posted-linkedin.json');

// The LinkedIn Company Page launched 2026-09-18 with 0 followers, so it warm-ups
// from 1/day like the FB Pages did — protect early per-post reach, climb later.
const SINCE = process.env.LINKEDIN_SINCE || '2026-09-18';

export { listPublishedBases };

// --- ranking ---------------------------------------------------------------

// Business-first order. rankBasesForLang('en', …) already sorts each pillar by
// English search demand (then recency) and round-robins them; a STABLE sort by
// pillar priority then groups all doing-business articles to the front while
// preserving that within-pillar demand order (Node's sort is stable). Result:
// LinkedIn leads with company-formation / tax / compliance guides, in demand order.
const PILLAR_PRIORITY = { 'doing-business': 0, living: 1, understand: 2 };
export function rankForLinkedIn(bases = listPublishedBases()) {
  const ranked = rankBasesForLang('en', bases);
  return [...ranked].sort(
    (a, b) => (PILLAR_PRIORITY[a.pillar] ?? 9) - (PILLAR_PRIORITY[b.pillar] ?? 9),
  );
}

// --- manifest --------------------------------------------------------------

// English-only, so the key is just the article base. Entry: { post_urn, at }.
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

export const isDone = (m, base) => Boolean(m.posted[base]?.post_urn);

export function markPost(m, base, postUrn) {
  m.posted[base] = { post_urn: postUrn, at: new Date().toISOString() };
}

// --- warm-up ramp ----------------------------------------------------------

// Articles to post per DAY, ramping by Page age: 1/day weeks 1-2, 3/day weeks 3-4,
// then 5/day. Deliberately conservative while the Page is young. Override with
// LINKEDIN_PER_DAY for tests/acceleration.
export function perDay(now = Date.now()) {
  const override = Number(process.env.LINKEDIN_PER_DAY);
  if (Number.isFinite(override) && override > 0) return override;
  const days = Math.max(0, Math.floor((now - Date.parse(SINCE)) / 86400000));
  if (days < 14) return 1;
  if (days < 28) return 3;
  return 5;
}

// Distinct articles already posted "today" in Malaysia time (UTC+8). Lets the cron
// fire several times a day yet post only up to the daily target — a GitHub-skipped
// tick is self-healed by a later one, and nothing double-posts.
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

// The next `count` article bases to post: business-first ranked order, dropping any
// already posted. `bases` is passed in so the corpus is read once per run.
export function nextBatch(m, count, bases = listPublishedBases()) {
  const out = [];
  for (const b of rankForLinkedIn(bases)) {
    if (isDone(m, b.base)) continue;
    out.push(b);
    if (out.length >= count) break;
  }
  return out;
}
