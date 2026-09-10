// post-to-facebook.mjs — announce newly added articles on the NegaraKu.md
// Facebook Pages via the Graph API.
//
// Invoked by the GitHub Action with the list of added knowledge files:
//   node scripts/post-to-facebook.mjs knowledge/history/kemerdekaan-1957.md ...
// or pass them newline-separated via the CHANGED_FILES env var.
//
// Each article is posted once PER LANGUAGE, each to its OWN Page and in its own
// language: Bahasa Malaysia → facebook.com/negaraku.md ("/"), English →
// negaraku.md.en ("/en"), Chinese → negaraku.md.zh ("/zh"). See the PAGES map
// below; a language whose Page id is blank is skipped. A language's file is
// `<base>.<lang>.md`, or the master `<base>.md` when the master IS that language.
//
// Required env:
//   FB_PAGE_ACCESS_TOKEN    — a System-User token (GitHub secret) with a role on
//                             every Page; the script mints each Page's OWN token
//                             from it at runtime (see pageTokenFor). Each Page
//                             must be assigned to that system user.
// Optional:
//   FB_PAGE_ID_MS/EN/ZH     — override a Page id (defaults are in PAGES; Page ids
//                             are public, so they need not be secrets).
//                             FB_PAGE_ID is the legacy alias for the ms Page.
//   SITE_URL                — defaults to https://negaraku.md
//   FB_DRY_RUN=1            — log what would be posted, don't call the API

import { readFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import matter from 'gray-matter';

const SITE_URL = process.env.SITE_URL ?? 'https://negaraku.md';
// One Facebook Page PER language. Page IDs are PUBLIC (they appear in each Page's
// URL), so they live here rather than in secrets; override with FB_PAGE_ID_<LANG>
// if ever needed. The one secret is FB_PAGE_ACCESS_TOKEN. A language with a blank
// id (e.g. zh before its Page exists) is skipped, not posted.
// These are the Graph/business-asset ids (the id the Page is assigned to the
// system user by, and the id /{id}/feed posts to) — NOT the page-backed profile
// ids in the profile.php?id=… URLs (ms 61591716781692 / en 61593942555079).
const PAGES = {
  ms: process.env.FB_PAGE_ID_MS || process.env.FB_PAGE_ID || '1227711683752433',
  en: process.env.FB_PAGE_ID_EN || '1334373156431426',
  zh: process.env.FB_PAGE_ID_ZH || '', // set when the Chinese Page (negaraku.md.zh) exists
};
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const DRY_RUN = process.env.FB_DRY_RUN === '1';
const GRAPH = 'https://graph.facebook.com/v21.0';
// Emoji prefixed to the title line so it stands out (FB post text can't be bold).
// Set to '' to drop it, or change the emoji here.
const TITLE_EMOJI = '📌 ';

function fileList() {
  const args = process.argv.slice(2);
  if (args.length) return args;
  return (process.env.CHANGED_FILES ?? '')
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

// Reduce the added files to unique article "bases" (path minus any lang suffix
// and .md), skipping non-knowledge and about/ pages.
function articleBases(files) {
  const bases = new Set();
  for (const f of files) {
    if (!f.startsWith('knowledge/') || !f.endsWith('.md')) continue;
    if (f.startsWith('knowledge/about/')) continue;
    bases.add(f.replace(/\.(ms|en|zh)\.md$/, '').replace(/\.md$/, ''));
  }
  return [...bases];
}

const LANGS = ['ms', 'en', 'zh']; // ms at "/", en at "/en", zh at "/zh"

// The file holding a given language for an article base: `<base>.<lang>.md`, or
// the master `<base>.md` when the master itself is that language.
function langFile(base, lang) {
  const f = `${base}.${lang}.md`;
  return existsSync(f) ? f : `${base}.md`;
}

// Only announce PUBLISHED articles. A draft / in-review / needs-update master must
// not be posted — its page isn't built into the public site, so the link would 404.
// The master (<base>.md) carries the canonical status; a `hidden` article is off too.
function isPublishedBase(base) {
  try {
    const data = matter(readFileSync(`${base}.md`, 'utf8')).data;
    return data.status === 'published' && !data.hidden;
  } catch {
    return false;
  }
}

// Expand the changed files into one target per (article, language): the file to
// read + the URL locale prefix. Deduped, so each article yields exactly its
// three language posts regardless of how many of its files changed. Skips any
// article whose master isn't published (drafts are never announced).
function targets(files) {
  const out = [];
  const seen = new Set();
  for (const base of articleBases(files)) {
    if (!isPublishedBase(base)) continue; // draft/unpublished/hidden — do not post
    for (const lang of LANGS) {
      if (!PAGES[lang]) continue; // no Page for this language yet — skip it
      const file = langFile(base, lang);
      const key = `${base}|${lang}`;
      if (existsSync(file) && !seen.has(key)) {
        seen.add(key);
        out.push({ file, lang, prefix: lang === 'ms' ? '' : `/${lang}` });
      }
    }
  }
  return out;
}

// Posting to /{page-id}/feed needs that Page's OWN access token. FB_PAGE_ACCESS_TOKEN
// (a System-User token with a role on the Page) mints it via this call; results are
// cached so each Page's token is fetched once per run. Posting with the raw
// system-user token instead hit "(#200) … requires … as an admin".
const pageTokenCache = new Map();
async function pageTokenFor(pageId) {
  if (pageTokenCache.has(pageId)) return pageTokenCache.get(pageId);
  const url = `${GRAPH}/${pageId}?fields=access_token&access_token=${encodeURIComponent(TOKEN)}`;
  const res = await fetch(url);
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.access_token) {
    throw new Error(`could not mint a Page token for page ${pageId} from FB_PAGE_ACCESS_TOKEN (is the Page assigned to the system user?): ${JSON.stringify(json)}`);
  }
  pageTokenCache.set(pageId, json.access_token);
  return json.access_token;
}

// Turn any string into a hyphen-safe PascalCase hashtag: "arts-culture" →
// "#ArtsCulture", "holding company" → "#HoldingCompany". (Facebook ends a tag at
// the first hyphen/space, so #arts-culture would post as just #arts.)
function hashtag(s) {
  const t = String(s)
    .replace(/^#/, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
  return t ? `#${t}` : '';
}

// A keyword phrase → hashtag, dropping a redundant trailing "malaysia" and
// skipping phrases that would make an ugly tag (>3 words or >24 chars).
function keywordTag(kw) {
  const words = String(kw).trim().split(/\s+/).filter(Boolean);
  if (words.length && words[words.length - 1].toLowerCase() === 'malaysia') words.pop();
  if (!words.length || words.length > 3) return '';
  const t = hashtag(words.join(' '));
  return t.length <= 25 ? t : ''; // "#" + 24 chars
}

// The hashtag line for an article. Curated `social.hashtags` (+ #NegaraKu) win;
// otherwise fall back to brand + category + subcategory + a few keyword tags.
function hashtags(data) {
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

// Build the {link, message} for a target, or null if the file lacks slug/category.
function buildPost(file, data, prefix) {
  if (!data.slug || !data.category) {
    console.warn(`[fb] skip ${file}: missing slug/category`);
    return null;
  }
  return {
    link: `${SITE_URL}${prefix}/${data.category}/${data.slug}`,
    // 📌 prefixes the title so it stands out above the summary (FB post text is
    // plain — no bold). Swap TITLE_EMOJI to change or drop it.
    message: `${TITLE_EMOJI}${data.title}\n\n${data.summary}\n\n${hashtags(data)}`,
  };
}

async function preview(t) {
  const p = buildPost(t.file, matter(await readFile(t.file, 'utf8')).data, t.prefix);
  if (p) console.log(`[fb] ${DRY_RUN ? 'DRY_RUN' : 'no credentials'} — would post [${t.lang}] → page ${PAGES[t.lang]}:\n  ${p.link}\n  ${p.message}\n`);
}

async function post(t) {
  const p = buildPost(t.file, matter(await readFile(t.file, 'utf8')).data, t.prefix);
  if (!p) return false;
  const pageId = PAGES[t.lang];
  let pageToken;
  try {
    pageToken = await pageTokenFor(pageId);
  } catch (err) {
    // One Page's token failing (e.g. not yet assigned to the system user) must
    // not abort the others — fail this target, let the rest post, job goes red.
    console.error(`[fb] FAILED [${t.lang}] mint token for page ${pageId}:`, err.message);
    return false;
  }
  const body = new URLSearchParams({ message: p.message, link: p.link, access_token: pageToken });
  const res = await fetch(`${GRAPH}/${pageId}/feed`, { method: 'POST', body });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error(`[fb] FAILED [${t.lang}] ${p.link}:`, JSON.stringify(json));
    return false;
  }
  console.log(`[fb] posted [${t.lang}] ${p.link} → ${json.id}`);
  return true;
}

async function main() {
  const ts = targets(fileList());
  if (!ts.length) {
    console.log('[fb] no new canonical articles to post.');
    return;
  }

  // Dry run / no token: log what would be posted, never call the API, exit 0.
  if (DRY_RUN || !TOKEN) {
    for (const t of ts) await preview(t);
    return;
  }

  let posted = 0;
  for (const t of ts) if (await post(t)) posted++;
  console.log(`[fb] done — ${posted}/${ts.length} posted.`);
  // Fail the job (red ❌) if any post failed — no more false green.
  if (posted !== ts.length) {
    console.error(`[fb] FAILED — only ${posted}/${ts.length} post(s) succeeded.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('[fb] error:', err);
  process.exit(1);
});
