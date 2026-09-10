// post-backlog-to-facebook.mjs — post the EXISTING published corpus to the
// Facebook Pages as NATIVE IMAGE posts (each article's OG card) with a
// value-first caption and the link in the FIRST COMMENT.
//
// Why this is separate from post-to-facebook.mjs:
//  • post-to-facebook.mjs announces a NEW article as a link post (its push
//    trigger is currently paused during this backlog rollout).
//  • This poster drains the ~1,000-article backlog in the format that actually
//    earns reach on Facebook: a native photo (FB favours photos over off-site
//    link previews) + a comment-prompt caption, with the link in the first
//    comment — so the post body carries no reach-suppressing external link.
//  • Attribution is preserved: the in-comment link is UTM-tagged.
//
// Invoked with article files/bases (the daily queue passes the day's batch), or
// via the CHANGED_FILES env var. Each PUBLISHED article yields one post per
// language Page, in that language.
//
// Env:
//   FB_PAGE_ACCESS_TOKEN  — system-user token (mints each Page's own token).
//   SITE_URL              — default https://negaraku.md
//   FB_DRY_RUN=1          — log what would be posted, don't call the API.

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import matter from 'gray-matter';
import {
  PAGES, LANGS, GRAPH, localePrefix,
  articleBases, langFile, isPublishedBase,
  hashtags, withUtm, articleUrl, pillarOf, pageTokenFor,
} from './lib/facebook.mjs';

const SITE_URL = process.env.SITE_URL ?? 'https://negaraku.md';
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const DRY_RUN = process.env.FB_DRY_RUN === '1';

// A comment-prompt question per pillar × language — invites a reply, and
// comments are Facebook's strongest reach signal. Unknown pillar → 'understand'.
const PROMPT = {
  'understand': {
    ms: 'Ingin memahami Malaysia dengan lebih mendalam?',
    en: 'Want to understand Malaysia better?',
    zh: '想更深入了解马来西亚吗？',
  },
  'living': {
    ms: 'Tinggal, bekerja atau belajar di Malaysia?',
    en: 'Living, working or studying in Malaysia?',
    zh: '在马来西亚生活、工作或求学吗？',
  },
  'doing-business': {
    ms: 'Memulakan atau mengembangkan perniagaan di Malaysia?',
    en: 'Starting or growing a business in Malaysia?',
    zh: '在马来西亚创业或拓展业务吗？',
  },
};
// Tells readers where the link is and nudges the reach-friendly in-comment link.
const CTA = {
  ms: '🔗 Panduan penuh dalam komen pertama 👇',
  en: '🔗 Full guide in the first comment 👇',
  zh: '🔗 完整指南见首条评论 👇',
};

function fileList() {
  const args = process.argv.slice(2);
  if (args.length) return args;
  return (process.env.CHANGED_FILES ?? '')
    .split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
}

// One target per (published article, language): the file to read + locale prefix.
// Deduped, so each article yields exactly its language posts. Only published
// masters qualify — a draft's page isn't built, so its link/OG card would 404.
function targets(files) {
  const out = [];
  const seen = new Set();
  for (const base of articleBases(files)) {
    if (!isPublishedBase(base)) continue;
    for (const lang of LANGS) {
      if (!PAGES[lang]) continue;
      const file = langFile(base, lang);
      const key = `${base}|${lang}`;
      if (existsSync(file) && !seen.has(key)) {
        seen.add(key);
        out.push({ file, lang, prefix: localePrefix(lang) });
      }
    }
  }
  return out;
}

// Build the native-photo post for a target: the OG-card image URL, the
// value-first caption, and the UTM link for the first comment. Null if the file
// lacks slug/category.
function buildPost(file, data, lang, prefix) {
  if (!data.slug || !data.category) {
    console.warn(`[fb-backlog] skip ${file}: missing slug/category`);
    return null;
  }
  const rel = `/${data.category}/${data.slug}`;
  // OG cards are generated per language at /og/<lang>/<category>/<slug>.png.
  const image = `${SITE_URL}/og/${lang}${rel}.png`;
  // Canonical (trailing-slash) URL so Facebook's scraper never follows a 301.
  const link = withUtm(articleUrl(SITE_URL, prefix, data.category, data.slug), 'facebook', 'social');
  const prompt = (PROMPT[pillarOf(data.category)] ?? PROMPT.understand)[lang];
  // Value-first: the title as the hook, the article's own summary (the useful
  // bit), a comment-prompt question, then the "link in comments" nudge and
  // hashtags. The external link is NOT in the caption — it goes in comment #1.
  const caption = [data.title, '', data.summary, '', prompt, CTA[lang], '', hashtags(data)].join('\n');
  return { image, caption, link };
}

async function readPost(t) {
  return buildPost(t.file, matter(await readFile(t.file, 'utf8')).data, t.lang, t.prefix);
}

// Confirm the article page is actually live (HTTP 200, following redirects)
// before posting — cheap insurance against posting a link Facebook would scrape
// as a 404 (e.g. a page not yet deployed). Any network error counts as not-live.
async function isLive(url) {
  try {
    const res = await fetch(url, { redirect: 'follow' });
    return res.ok;
  } catch {
    return false;
  }
}

async function preview(t) {
  const p = await readPost(t);
  if (!p) return;
  const live = await isLive(p.link);
  console.log(
    `[fb-backlog] ${DRY_RUN ? 'DRY_RUN' : 'no credentials'} — would post [${t.lang}] → page ${PAGES[t.lang]}` +
    `${live ? '' : '  ⚠️ URL NOT LIVE — would be SKIPPED'}\n` +
    `  photo:   ${p.image}\n` +
    `  comment: ${p.link}\n` +
    `  caption:\n${p.caption.split('\n').map((l) => '    | ' + l).join('\n')}\n`,
  );
}

async function post(t) {
  const p = await readPost(t);
  if (!p) return false;
  // Never post a link Facebook would see as a 404 — skip (fail) a target whose
  // page isn't live 200 yet, so it's retried on the next run rather than posted broken.
  if (!(await isLive(p.link))) {
    console.error(`[fb-backlog] SKIP [${t.lang}] page not live (not HTTP 200): ${p.link}`);
    return false;
  }
  const pageId = PAGES[t.lang];
  let pageToken;
  try {
    pageToken = await pageTokenFor(pageId, TOKEN);
  } catch (err) {
    console.error(`[fb-backlog] FAILED [${t.lang}] mint token for page ${pageId}:`, err.message);
    return false;
  }
  // 1) Native photo post — FB fetches the OG card from its public URL.
  const photoBody = new URLSearchParams({ url: p.image, caption: p.caption, published: 'true', access_token: pageToken });
  const photoRes = await fetch(`${GRAPH}/${pageId}/photos`, { method: 'POST', body: photoBody });
  const photoJson = await photoRes.json().catch(() => ({}));
  if (!photoRes.ok) {
    console.error(`[fb-backlog] FAILED [${t.lang}] photo ${p.image}:`, JSON.stringify(photoJson));
    return false;
  }
  // A /photos post returns both the photo id and the feed story's post_id; the
  // comment must go on the story.
  const storyId = photoJson.post_id || photoJson.id;
  // 2) Link in the first comment — keeps the external link out of the post body
  //    (reach) while still routing UTM-tagged clicks. A comment failure is not
  //    fatal: the post is already live, so log it and count the post as done.
  const cmtBody = new URLSearchParams({ message: p.link, access_token: pageToken });
  const cmtRes = await fetch(`${GRAPH}/${storyId}/comments`, { method: 'POST', body: cmtBody });
  if (!cmtRes.ok) {
    const cmtJson = await cmtRes.json().catch(() => ({}));
    console.warn(`[fb-backlog] posted photo but COMMENT failed [${t.lang}] ${storyId}:`, JSON.stringify(cmtJson));
  }
  console.log(`[fb-backlog] posted [${t.lang}] ${p.image} → ${storyId}`);
  return true;
}

async function main() {
  const ts = targets(fileList());
  if (!ts.length) { console.log('[fb-backlog] no published articles to post.'); return; }

  // Dry run / no token: log what would be posted, never call the API, exit 0.
  if (DRY_RUN || !TOKEN) { for (const t of ts) await preview(t); return; }

  let posted = 0;
  for (const t of ts) if (await post(t)) posted++;
  console.log(`[fb-backlog] done — ${posted}/${ts.length} posted.`);
  if (posted !== ts.length) {
    console.error(`[fb-backlog] FAILED — only ${posted}/${ts.length} post(s) succeeded.`);
    process.exit(1);
  }
}

main().catch((err) => { console.error('[fb-backlog] error:', err); process.exit(1); });
