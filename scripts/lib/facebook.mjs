// facebook.mjs — shared helpers for the Facebook posters.
//
// Used by both scripts/post-to-facebook.mjs (per-publish announcer, currently
// paused) and scripts/post-backlog-to-facebook.mjs (the backlog drip). Keeps the
// Page map, token minting, hashtag/UTM builders and the article-file helpers in
// one place so the two posters can't drift apart.

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

export const GRAPH = 'https://graph.facebook.com/v21.0';
export const LANGS = ['ms', 'en', 'zh', 'ta', 'ja', 'ko']; // ms at "/", en at "/en", zh at "/zh", ta at "/ta", ja at "/ja", ko at "/ko"

// Posting WINDOWS = Malaysia's daily engagement peaks. The cron fires one tick per
// window (see .github/workflows/facebook-backlog.yml: 08:17 / 13:17 / 20:17 MYT).
export const WINDOWS = ['morning', 'lunch', 'evening'];

// Per-language posting policy. Each language:
//  • drains its OWN priority-ranked queue (ordered by that language's OWN search
//    demand — see fb-queue.mjs), because the most-wanted article differs by
//    audience: an English and a Tamil reader do not click the same things;
//  • RAMPS its daily volume by how NEW its Page is (`since` = Page launch date).
//    The AGREED ramp is 1/3/5 (perRunArticles): 1/day the first 2 weeks, 3/day
//    weeks 3-4, then 5/day — same for every language. `perDay` is just the ceiling
//    and is set to 5 so the ramp is the pure 1/3/5 schedule; raising to 10 is ON
//    HOLD (decided 2026-09-11) — monitor 1/3/5 first, then adjust if it helps growth;
//  • posts only in its preferred `windows` (its audience's peak times), EXCEPT the
//    evening tick is a catch-up: any language behind target posts there too, so a
//    GitHub-skipped tick never makes a language miss the day.
// Every Page is only days old, so all currently post ~1/day and climb over the
// coming weeks. Add a row (and to LANGS) when a new language launches.
// DECIDED 2026-09-14: all languages post at the SAME times (morning/lunch/evening),
// so the daily 1/3/5 distributes identically across every Page. Per-language
// differentiation is in QUEUE ORDER (own demand), not timing. (The `windows`
// mechanism stays per-language so a single language can be retimed later if wanted.)
const ALL_WINDOWS = ['morning', 'lunch', 'evening'];
export const LANG_POLICY = {
  ms: { enabled: true, perDay: 5, since: '2026-09-09', windows: ALL_WINDOWS },
  en: { enabled: true, perDay: 5, since: '2026-09-09', windows: ALL_WINDOWS },
  zh: { enabled: true, perDay: 5, since: '2026-09-10', windows: ALL_WINDOWS },
  ta: { enabled: true, perDay: 5, since: '2026-09-11', windows: ALL_WINDOWS },
  // ja ACTIVATED 2026-09-20 — Japanese is a full public language (1,094 published
  // articles at /ja); its Page is assigned to the system user, so it's in LANGS.
  ja: { enabled: true, perDay: 5, since: '2026-09-20', windows: ALL_WINDOWS },
  // ko ACTIVATED 2026-09-26 — Korean is a full public language (1,073 published
  // articles at /ko); its Page is assigned to the system user, so it's in LANGS.
  ko: { enabled: true, perDay: 5, since: '2026-09-26', windows: ALL_WINDOWS },
};

// One Facebook Page PER language. Page IDs are PUBLIC (they appear in each Page's
// URL), so they live here rather than in secrets; override with FB_PAGE_ID_<LANG>
// if ever needed. The one secret is FB_PAGE_ACCESS_TOKEN. A language with a blank
// id is skipped, not posted. These are the Graph/business-asset ids (what the
// Page is assigned to the system user by, and what /{id}/... acts on) — NOT the
// page-backed profile ids in the profile.php?id=… URLs.
export const PAGES = {
  ms: process.env.FB_PAGE_ID_MS || process.env.FB_PAGE_ID || '1227711683752433',
  en: process.env.FB_PAGE_ID_EN || '1334373156431426',
  zh: process.env.FB_PAGE_ID_ZH || '1382294921622880',
  // ta ACTIVATED 2026-09-13 — Tamil is a full public language (1073 published
  // articles at /ta) and its Page is assigned to the "NegaraKu Poster" system user,
  // so it's in LANGS above and posts like ms/en/zh.
  ta: process.env.FB_PAGE_ID_TA || '1317515884777917',
  // ja ACTIVATED 2026-09-20 (full public language at /ja, Page assigned to the
  // system user, in LANGS above). ko's Page exists + is assigned but is NOT in
  // LANGS: no published /ko corpus yet, so there is nothing to post — activate it
  // by adding it to LANGS + LANG_POLICY once its corpus ships.
  ja: process.env.FB_PAGE_ID_JA || '1234264816444540',
  ko: process.env.FB_PAGE_ID_KO || '1308994995630346',
};

// The URL locale prefix for a language: ms lives at "/", en at "/en", zh at "/zh".
export const localePrefix = (lang) => (lang === 'ms' ? '' : `/${lang}`);

// --- Article files ---------------------------------------------------------

// Reduce a list of changed/queued files to unique article "bases" (path minus
// any lang suffix and .md), skipping non-knowledge and about/ pages.
export function articleBases(files) {
  const bases = new Set();
  for (const f of files) {
    const p = f.replace(/\\/g, '/');
    if (!p.startsWith('knowledge/') || !p.endsWith('.md')) continue;
    if (p.startsWith('knowledge/about/')) continue;
    bases.add(p.replace(/\.(ms|en|zh|ta|ja|ko)\.md$/, '').replace(/\.md$/, ''));
  }
  return [...bases];
}

// The file holding a given language for an article base: `<base>.<lang>.md`, or
// the master `<base>.md` when the master itself is that language.
export function langFile(base, lang) {
  const f = `${base}.${lang}.md`;
  return existsSync(f) ? f : `${base}.md`;
}

// Only PUBLISHED, non-hidden masters may be posted — a draft/in-review page isn't
// built into the public site, so its link would 404. The master (<base>.md)
// carries the canonical status.
export function isPublishedBase(base) {
  try {
    const data = matter(readFileSync(`${base}.md`, 'utf8')).data;
    return data.status === 'published' && !data.hidden;
  } catch {
    return false;
  }
}

// --- category → pillar -----------------------------------------------------

// The three pillars are defined in src/lib/categories.ts (the SSOT). Rather than
// duplicate the map, read each category's `pillar` from that file once. The
// lookahead keeps each `id:`…`pillar:` pair inside one object, so the PILLARS
// defs (which have `id:` but no `pillar:`) are skipped. Unknown → 'understand'.
let _pillarMap = null;
function pillarMap() {
  if (_pillarMap) return _pillarMap;
  _pillarMap = {};
  try {
    const src = readFileSync(
      path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../src/lib/categories.ts'),
      'utf8',
    );
    const re = /id:\s*'([^']+)'(?:(?!id:\s*')[\s\S])*?pillar:\s*'([^']+)'/g;
    let m;
    while ((m = re.exec(src))) _pillarMap[m[1]] = m[2];
  } catch { /* fall back to the default below */ }
  return _pillarMap;
}
export function pillarOf(category) {
  return pillarMap()[category] || 'understand';
}

// Localized category display names from categories.ts (id → {ms,en,zh}) so
// hashtags can be written in the post's own language. Parsed once. Same
// same-object lookahead as pillarMap; the name object is a single line
// `name: { ms: '…', en: '…', zh: '…' }`.
let _catNames = null;
function catNameMap() {
  if (_catNames) return _catNames;
  _catNames = {};
  try {
    const src = readFileSync(
      path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../src/lib/categories.ts'),
      'utf8',
    );
    const re = /id:\s*'([^']+)'(?:(?!id:\s*')[\s\S])*?name:\s*\{\s*ms:\s*'([^']*)',\s*en:\s*'([^']*)',\s*zh:\s*'([^']*)'(?:\s*,\s*ta:\s*'([^']*)')?(?:\s*,\s*ja:\s*'([^']*)')?(?:\s*,\s*ko:\s*'([^']*)')?/g;
    let m;
    while ((m = re.exec(src))) _catNames[m[1]] = { ms: m[2], en: m[3], zh: m[4], ta: m[5] || '', ja: m[6] || '', ko: m[7] || '' };
  } catch { /* graceful — no localized names, category tag is skipped */ }
  return _catNames;
}
export function categoryName(cat, lang = 'en') {
  const n = catNameMap()[cat];
  return n ? (n[lang] || n.en || '') : '';
}

// --- hashtags --------------------------------------------------------------

// Any string → a hyphen-safe PascalCase hashtag: "arts-culture" → "#ArtsCulture".
// (Facebook ends a tag at the first hyphen/space, so #arts-culture posts as
// "#arts".) Unicode-aware so localized tags survive: "控股公司" → "#控股公司".
export function hashtag(s) {
  const t = String(s)
    .replace(/^#/, '')
    // Keep letters, numbers AND combining marks (\p{M}) — Tamil/Indic vowel signs
    // are marks; dropping them corrupts the word (வணிகம் → வணகம). Latin/CJK have none.
    .replace(/[^\p{L}\p{N}\p{M}]+/gu, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
  return t ? `#${t}` : '';
}

// A keyword phrase → hashtag, dropping a redundant trailing "malaysia" and
// skipping phrases that would make an ugly tag (>3 words or >24 chars).
export function keywordTag(kw) {
  const words = String(kw).trim().split(/\s+/).filter(Boolean);
  if (words.length && words[words.length - 1].toLowerCase() === 'malaysia') words.pop();
  if (!words.length || words.length > 3) return '';
  const t = hashtag(words.join(' '));
  return t.length <= 25 ? t : '';
}

const COUNTRY_TAG = { en: '#Malaysia', ms: '#Malaysia', zh: '#马来西亚', ta: '#மலேசியா', ja: '#マレーシア', ko: '#말레이시아' };
// Tamil block U+0B80–U+0BFF — used so ta posts keep only Tamil-script (or numeric) tags.
const hasTamil = (s) => /[஀-௿]/.test(String(s));
const hasCJK = (s) => /[㐀-鿿豈-﫿぀-ヿ]/.test(String(s));

// The hashtag line for an article, IN THE POST'S LANGUAGE. Leads with a
// localized country tag + the #NegaraKu brand + the localized category name
// (from categories.ts), then adds curated social.hashtags and a few keyword
// tags — but keeps only ones appropriate for the language: a numeric reference
// (e.g. "#Act777") is language-neutral and always kept; otherwise the tag must
// be in the post's script (CJK for zh, Latin for ms/en), so English generic
// tags don't leak onto a Malay or Chinese post. Capped so the line stays tidy.
export function hashtags(data, lang = 'en') {
  const hasHangul = (t) => /[가-힣]/.test(String(t)); // Korean syllables
  const okForLang = (t) =>
    /\d/.test(t) || // a numeric reference (e.g. "#Act777") is language-neutral
    (lang === 'zh' || lang === 'ja' ? hasCJK(t) // zh/ja posts: CJK/kana tags only
      : lang === 'ta' ? hasTamil(t) // ta posts: Tamil-script tags only
        : lang === 'ko' ? hasHangul(t) // ko posts: Hangul tags only
          : !hasCJK(t) && !hasTamil(t) && !hasHangul(t)); // ms/en: Latin only (no CJK/Tamil/Hangul leak)
  const out = [COUNTRY_TAG[lang] || '#Malaysia', '#NegaraKu'];
  const catName = categoryName(data.category, lang);
  if (catName) { const t = hashtag(catName); if (t && !out.includes(t)) out.push(t); }
  for (const raw of data.social?.hashtags ?? []) {
    const t = hashtag(raw);
    if (t && okForLang(t) && !out.includes(t)) out.push(t);
  }
  let kw = 0;
  for (const k of data.keywords ?? []) {
    if (kw >= 3 || out.length >= 8) break;
    const t = keywordTag(k);
    // Same rule as curated: keep numeric references in any language, otherwise
    // only tags in the post's script — so an English keyword tag never lands on
    // a Malay or Chinese post, but "#Act777" does.
    if (t && okForLang(t) && !out.includes(t)) { out.push(t); kw++; }
  }
  return [...new Set(out.filter(Boolean))].join(' ');
}

// The canonical article URL for a language: SITE_URL + locale prefix + path +
// a TRAILING SLASH. That trailing slash is the site's canonical form — the
// no-slash URL 301-redirects to it, and emitting the canonical form directly
// keeps link scrapers (Facebook's included) from having to follow a redirect.
export function articleUrl(siteUrl, prefix, category, slug) {
  return `${siteUrl}${prefix}/${category}/${slug}/`;
}

// Append campaign tags so a click stays attributable even when the referrer is
// stripped (Facebook's in-app browser/link shim often drops it). The edge
// classifier (worker/src/referrer.js) reads utm_source/utm_medium.
export function withUtm(url, source, medium) {
  const u = new URL(url);
  u.searchParams.set('utm_source', source);
  u.searchParams.set('utm_medium', medium);
  return u.toString();
}

// --- Graph token -----------------------------------------------------------

// Posting to a Page needs that Page's OWN access token. FB_PAGE_ACCESS_TOKEN (a
// System-User token with a role on the Page) mints it via this call; results are
// cached so each Page's token is fetched once per run. Posting with the raw
// system-user token instead hit "(#200) … requires … as an admin".
const _pageTokenCache = new Map();
export async function pageTokenFor(pageId, token) {
  if (_pageTokenCache.has(pageId)) return _pageTokenCache.get(pageId);
  const url = `${GRAPH}/${pageId}?fields=access_token&access_token=${encodeURIComponent(token)}`;
  const res = await fetch(url);
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.access_token) {
    throw new Error(`could not mint a Page token for page ${pageId} from FB_PAGE_ACCESS_TOKEN (is the Page assigned to the system user?): ${JSON.stringify(json)}`);
  }
  _pageTokenCache.set(pageId, json.access_token);
  return json.access_token;
}
