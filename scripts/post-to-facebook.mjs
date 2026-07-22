// post-to-facebook.mjs — publish newly added articles to the NegaraKu.md
// Facebook Page (facebook.com/negaraku.md) via the Graph API.
//
// Invoked by the GitHub Action with the list of added knowledge files:
//   node scripts/post-to-facebook.mjs knowledge/history/kemerdekaan-1957.md ...
// or pass them newline-separated via the CHANGED_FILES env var.
//
// Only the Bahasa Malaysia source file of each article is posted (translations
// are skipped so a new article posts once, not three times).
//
// Required env (store as GitHub secrets):
//   FB_PAGE_ID              — the Page's numeric id
//   FB_PAGE_ACCESS_TOKEN    — a long-lived Page access token
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

function isCanonicalArticle(file) {
  return (
    file.startsWith('knowledge/') &&
    file.endsWith('.md') &&
    !/\.(en|zh)\.md$/.test(file) &&
    !file.startsWith('knowledge/about/')
  );
}

async function post(file) {
  const { data } = matter(await readFile(file, 'utf8'));
  if (!data.slug || !data.category) {
    console.warn(`[fb] skip ${file}: missing slug/category`);
    return false;
  }
  const link = `${SITE_URL}/${data.category}/${data.slug}`;
  const message = `${data.title}\n\n${data.summary}\n\n#Malaysia #NegaraKu #${data.category}`;

  if (DRY_RUN || !PAGE_ID || !TOKEN) {
    console.log(`[fb] ${DRY_RUN ? 'DRY_RUN' : 'no credentials'} — would post:\n  ${link}\n  ${message}\n`);
    return false;
  }

  const body = new URLSearchParams({ message, link, access_token: TOKEN });
  const res = await fetch(`${GRAPH}/${PAGE_ID}/feed`, { method: 'POST', body });
  const json = await res.json();
  if (!res.ok) {
    console.error(`[fb] FAILED ${link}:`, JSON.stringify(json));
    return false;
  }
  console.log(`[fb] posted ${link} → ${json.id}`);
  return true;
}

async function main() {
  const files = fileList().filter(isCanonicalArticle).filter((f) => existsSync(f));
  if (!files.length) {
    console.log('[fb] no new canonical articles to post.');
    return;
  }
  let posted = 0;
  for (const f of files) if (await post(f)) posted++;
  console.log(`[fb] done — ${posted}/${files.length} posted.`);
}

main().catch((err) => {
  console.error('[fb] error:', err);
  process.exit(1);
});
