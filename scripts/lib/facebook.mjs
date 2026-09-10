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
export const LANGS = ['ms', 'en', 'zh']; // ms at "/", en at "/en", zh at "/zh"

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
    bases.add(p.replace(/\.(ms|en|zh)\.md$/, '').replace(/\.md$/, ''));
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

// --- hashtags --------------------------------------------------------------

// Any string → a hyphen-safe PascalCase hashtag: "arts-culture" → "#ArtsCulture".
// (Facebook ends a tag at the first hyphen/space, so #arts-culture posts as
// "#arts".) Unicode-aware so localized tags survive: "控股公司" → "#控股公司".
export function hashtag(s) {
  const t = String(s)
    .replace(/^#/, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
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

// The hashtag line for an article. Curated `social.hashtags` (+ #NegaraKu) win;
// otherwise brand + category + subcategory + a few keyword tags.
export function hashtags(data) {
  const curated = (data.social?.hashtags ?? []).map(hashtag).filter(Boolean);
  if (curated.length) return [...new Set([...curated, '#NegaraKu'])].join(' ');

  const tags = ['#Malaysia', '#NegaraKu', hashtag(data.category)];
  for (const sc of data.subcategory ?? []) tags.push(hashtag(sc));
  let kw = 0;
  for (const k of data.keywords ?? []) {
    if (kw >= 4) break;
    const t = keywordTag(k);
    if (t && !tags.includes(t)) { tags.push(t); kw++; }
  }
  return [...new Set(tags.filter(Boolean))].join(' ');
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
