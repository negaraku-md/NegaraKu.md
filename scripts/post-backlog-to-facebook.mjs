// post-backlog-to-facebook.mjs — post the EXISTING published corpus to the
// Facebook Pages as NATIVE IMAGE posts (each article's OG card) with a
// value-first caption that carries a TAPPABLE article link.
//
// Why this is separate from post-to-facebook.mjs:
//  • post-to-facebook.mjs announces a NEW article as a link post (its push
//    trigger is currently paused during this backlog rollout).
//  • This poster drains the ~1,000-article backlog as a native photo (FB
//    favours photos over off-site link previews, so reach holds) whose caption
//    carries a tappable, UTM-tagged link — one tap to the article.
//  • Attribution is preserved: the link is UTM-tagged (utm_source=facebook).
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
import {
  loadManifest, saveManifest, isPosted, markPosted, nextBatch, perRunArticles,
} from './lib/fb-queue.mjs';

const SITE_URL = process.env.SITE_URL ?? 'https://negaraku.md';
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const DRY_RUN = process.env.FB_DRY_RUN === '1';
// Queue mode: with no explicit files, drain the ranked backlog (the daily cron
// path). With files/CHANGED_FILES, post exactly those (manual/one-off).
const QUEUE = process.env.FB_BACKLOG_QUEUE === '1';

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
// Precedes the tappable article link in the caption body.
const CTA = {
  ms: '🔗 Baca panduan penuh:',
  en: '🔗 Read the full guide:',
  zh: '🔗 阅读完整指南：',
};

function fileList() {
  const args = process.argv.slice(2);
  if (args.length) return args;
  return (process.env.CHANGED_FILES ?? '')
    .split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
}

// Expand a list of article bases into one target per (base, language): the file
// to read, the locale prefix, and the base (for manifest keying). Skips a
// (base, lang) already in the manifest so nothing is ever double-posted.
function targetsForBases(bases, manifest) {
  const out = [];
  const seen = new Set();
  for (const base of bases) {
    if (!isPublishedBase(base)) continue;
    for (const lang of LANGS) {
      if (!PAGES[lang]) continue;
      if (isPosted(manifest, base, lang)) continue; // already posted — never again
      const file = langFile(base, lang);
      const k = `${base}|${lang}`;
      if (existsSync(file) && !seen.has(k)) {
        seen.add(k);
        out.push({ base, file, lang, prefix: localePrefix(lang) });
      }
    }
  }
  return out;
}

// The targets for this run: the ranked queue batch (cron path), or exactly the
// files named on the CLI / CHANGED_FILES (manual path).
function resolveTargets(files, manifest) {
  if (files.length) return targetsForBases(articleBases(files), manifest);
  const count = perRunArticles(manifest);
  const batch = nextBatch(manifest, count).map((b) => b.base);
  console.log(`[fb-backlog] queue: posting ${batch.length} article(s) this run (ramp = ${count}/run).`);
  return targetsForBases(batch, manifest);
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
  // Value-first: title hook, the article's own summary, a comment-prompt
  // question, then a TAPPABLE article link (UTM-tagged, so it's attributed even
  // when FB strips the referrer), then hashtags. The link is in the caption body
  // so readers reach the article in one tap, and the post stays a native photo
  // (the photo is the attachment), so it keeps a photo's reach.
  const caption = [data.title, '', data.summary, '', prompt, '', CTA[lang], link, '', hashtags(data)].join('\n');
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
    `  link:    ${p.link}\n` +
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
  // Native photo post — FB fetches the OG card from its public URL. The caption
  // carries the tappable article link, so no separate comment is needed (and
  // commenting would require pages_manage_engagement, which the token lacks).
  const photoBody = new URLSearchParams({ url: p.image, caption: p.caption, published: 'true', access_token: pageToken });
  const photoRes = await fetch(`${GRAPH}/${pageId}/photos`, { method: 'POST', body: photoBody });
  const photoJson = await photoRes.json().catch(() => ({}));
  if (!photoRes.ok) {
    console.error(`[fb-backlog] FAILED [${t.lang}] photo ${p.image}:`, JSON.stringify(photoJson));
    return false;
  }
  // /photos returns the photo id and the feed story's post_id.
  const storyId = photoJson.post_id || photoJson.id;
  console.log(`[fb-backlog] posted [${t.lang}] ${p.image} → ${storyId}`);
  return storyId;
}

async function main() {
  const files = fileList();
  // Safety: a no-files run does nothing unless queue mode is explicitly on, so
  // the poster can't accidentally drain the backlog.
  if (!files.length && !QUEUE) {
    console.log('[fb-backlog] no files and not queue mode (set FB_BACKLOG_QUEUE=1) — nothing to do.');
    return;
  }
  const manifest = loadManifest();
  const ts = resolveTargets(files, manifest);
  if (!ts.length) { console.log('[fb-backlog] nothing to post (all caught up / already posted).'); return; }

  // Dry run / no token: log what would be posted, never call the API, exit 0.
  if (DRY_RUN || !TOKEN) { for (const t of ts) await preview(t); return; }

  let posted = 0;
  for (const t of ts) {
    const story = await post(t);
    if (story) {
      posted++;
      manifest.meta.startedAt ??= new Date().toISOString();
      markPosted(manifest, t.base, t.lang, story);
    }
  }
  saveManifest(manifest); // record successes even on a partial run
  console.log(`[fb-backlog] done — ${posted}/${ts.length} posted; ${Object.keys(manifest.posted).length} total in manifest.`);
  if (posted !== ts.length) {
    console.error(`[fb-backlog] FAILED — only ${posted}/${ts.length} post(s) succeeded.`);
    process.exit(1);
  }
}

main().catch((err) => { console.error('[fb-backlog] error:', err); process.exit(1); });
