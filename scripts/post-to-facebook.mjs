// post-to-facebook.mjs — publish newly added articles to the NegaraKu.md
// Facebook Page (facebook.com/negaraku.md) via the Graph API.
//
// Invoked by the GitHub Action with the list of added knowledge files:
//   node scripts/post-to-facebook.mjs knowledge/history/kemerdekaan-1957.md ...
// or pass them newline-separated via the CHANGED_FILES env var.
//
// Each article is posted ONCE, in Bahasa Malaysia. For an ms-master article the
// Malay text is the master `slug.md`; for an en-master article it is `slug.ms.md`.
// So en-master articles (e.g. ma63, new-economic-policy) post in Malay too, not
// in their English master.
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

// The Bahasa Malaysia file for an article base: en-master keeps Malay in
// `<base>.ms.md`; ms-master keeps it in the master `<base>.md`.
function malayFile(base) {
  const ms = `${base}.ms.md`;
  if (existsSync(ms)) return ms;
  const md = `${base}.md`;
  if (existsSync(md)) return md;
  return null;
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

// Build the {link, message} for an article, or null if it lacks slug/category.
function buildPost(file, data) {
  if (!data.slug || !data.category) {
    console.warn(`[fb] skip ${file}: missing slug/category`);
    return null;
  }
  return {
    link: `${SITE_URL}/${data.category}/${data.slug}`,
    message: `${data.title}\n\n${data.summary}\n\n#Malaysia #NegaraKu #${data.category}`,
  };
}

async function preview(file) {
  const p = buildPost(file, matter(await readFile(file, 'utf8')).data);
  if (p) console.log(`[fb] ${DRY_RUN ? 'DRY_RUN' : 'no credentials'} — would post:\n  ${p.link}\n  ${p.message}\n`);
}

async function post(file, pageToken) {
  const p = buildPost(file, matter(await readFile(file, 'utf8')).data);
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
  const files = [...new Set(articleBases(fileList()).map(malayFile).filter(Boolean))];
  if (!files.length) {
    console.log('[fb] no new canonical articles to post.');
    return;
  }

  // Dry run / missing creds: log what would be posted, never call the API, exit 0.
  if (DRY_RUN || !PAGE_ID || !TOKEN) {
    for (const f of files) await preview(f);
    return;
  }

  const pageToken = await resolvePageToken(); // throws → main().catch → exit 1

  let posted = 0;
  for (const f of files) if (await post(f, pageToken)) posted++;
  console.log(`[fb] done — ${posted}/${files.length} posted.`);
  // Fail the job (red ❌) if any article did not post — no more false green.
  if (posted !== files.length) {
    console.error(`[fb] FAILED — only ${posted}/${files.length} article(s) posted.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('[fb] error:', err);
  process.exit(1);
});
