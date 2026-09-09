// post-to-facebook.mjs — publish newly added articles to the NegaraKu.md
// Facebook Page (facebook.com/negaraku.md) via the Graph API.
//
// Invoked by the GitHub Action with the list of added knowledge files:
//   node scripts/post-to-facebook.mjs knowledge/history/kemerdekaan-1957.md ...
// or pass them newline-separated via the CHANGED_FILES env var.
//
// Each article is posted THREE times — once per language: Bahasa Malaysia (at
// "/"), English ("/en") and Chinese ("/zh") — each using that language's own
// title/summary and its locale-prefixed URL. A language's file is
// `<base>.<lang>.md`, or the master `<base>.md` when the master IS that language.
//
// Required env (store as GitHub secrets):
//   FB_PAGE_ID              — the Page's numeric id
//   FB_PAGE_ACCESS_TOKEN    — a token that can act on the Page: a Page access
//                             token, OR a System-User / long-lived User token
//                             with a role on the Page. The script mints a Page
//                             token from it before posting (see resolvePageToken).
// Optional:
//   SITE_URL                — defaults to https://negaraku.md
//   FB_DRY_RUN=1            — log what would be posted, don't call the API

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import matter from 'gray-matter';

const SITE_URL = process.env.SITE_URL ?? 'https://negaraku.md';
const PAGE_ID = process.env.FB_PAGE_ID;
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const DRY_RUN = process.env.FB_DRY_RUN === '1';
const GRAPH = 'https://graph.facebook.com/v21.0';

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

// Expand the changed files into one target per (article, language): the file to
// read + the URL locale prefix. Deduped, so each article yields exactly its
// three language posts regardless of how many of its files changed.
function targets(files) {
  const out = [];
  const seen = new Set();
  for (const base of articleBases(files)) {
    for (const lang of LANGS) {
      const file = langFile(base, lang);
      const key = `${base}|${lang}`;
      if (existsSync(file) && !seen.has(key)) {
        seen.add(key);
        out.push({ file, prefix: lang === 'ms' ? '' : `/${lang}` });
      }
    }
  }
  return out;
}

// Posting to /{page-id}/feed needs a PAGE access token. Whatever is in
// FB_PAGE_ACCESS_TOKEN — a Page token, or a System-User/User token with a role
// on the Page — can mint the Page token via this call (a Page token returns
// itself), so it works either way. Posting with a raw system-user token instead
// hit "(#200) … requires … as an admin": that token isn't a Page token.
async function resolvePageToken() {
  const url = `${GRAPH}/${PAGE_ID}?fields=access_token&access_token=${encodeURIComponent(TOKEN)}`;
  const res = await fetch(url);
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.access_token) {
    throw new Error(`could not mint a Page access token from FB_PAGE_ACCESS_TOKEN: ${JSON.stringify(json)}`);
  }
  return json.access_token;
}

// Build the {link, message} for a target, or null if the file lacks slug/category.
function buildPost(file, data, prefix) {
  if (!data.slug || !data.category) {
    console.warn(`[fb] skip ${file}: missing slug/category`);
    return null;
  }
  return {
    link: `${SITE_URL}${prefix}/${data.category}/${data.slug}`,
    message: `${data.title}\n\n${data.summary}\n\n#Malaysia #NegaraKu #${data.category}`,
  };
}

async function preview(t) {
  const p = buildPost(t.file, matter(await readFile(t.file, 'utf8')).data, t.prefix);
  if (p) console.log(`[fb] ${DRY_RUN ? 'DRY_RUN' : 'no credentials'} — would post:\n  ${p.link}\n  ${p.message}\n`);
}

async function post(t, pageToken) {
  const p = buildPost(t.file, matter(await readFile(t.file, 'utf8')).data, t.prefix);
  if (!p) return false;
  const body = new URLSearchParams({ message: p.message, link: p.link, access_token: pageToken });
  const res = await fetch(`${GRAPH}/${PAGE_ID}/feed`, { method: 'POST', body });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error(`[fb] FAILED ${p.link}:`, JSON.stringify(json));
    return false;
  }
  console.log(`[fb] posted ${p.link} → ${json.id}`);
  return true;
}

async function main() {
  const ts = targets(fileList());
  if (!ts.length) {
    console.log('[fb] no new canonical articles to post.');
    return;
  }

  // Dry run / missing creds: log what would be posted, never call the API, exit 0.
  if (DRY_RUN || !PAGE_ID || !TOKEN) {
    for (const t of ts) await preview(t);
    return;
  }

  const pageToken = await resolvePageToken(); // throws → main().catch → exit 1

  let posted = 0;
  for (const t of ts) if (await post(t, pageToken)) posted++;
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
