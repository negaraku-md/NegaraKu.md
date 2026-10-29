// ig-queue.mjs — Instagram backlog queue + posted-manifest.
//
// Reuses the Facebook queue's corpus listing, per-language demand ranking and
// warm-up ramp verbatim (scripts/lib/fb-queue.mjs) — the WHICH-article-next logic
// is identical across networks. Only the posted-manifest is separate, so Instagram
// tracks its own posted state in analytics/posted-ig.json without colliding with
// Facebook's analytics/posted.json.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export {
  listPublishedBases, rankBasesForLang, nextForLang,
  perLangPerDay, postedTodayCountMYTForLang, isLangEnabled,
} from './fb-queue.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const MANIFEST = path.join(ROOT, 'analytics', 'posted-ig.json');

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

// Manifest entry per (base, lang): { media_id, at }. One IG feed post per
// (article, language account). isDone = a media id exists.
const key = (base, lang) => `${base}#${lang}`;
export const entryFor = (m, base, lang) => m.posted[key(base, lang)];
export const isDone = (m, base, lang) => Boolean(m.posted[key(base, lang)]?.media_id);
export function markPost(m, base, lang, mediaId) {
  m.posted[key(base, lang)] = { media_id: mediaId, at: new Date().toISOString() };
}
