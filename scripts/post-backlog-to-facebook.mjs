// post-backlog-to-facebook.mjs — post the EXISTING published corpus to the
// Facebook Pages as NATIVE IMAGE posts (each article's OG card), with the link
// in the FIRST COMMENT for maximum reach.
//
// Why this is separate from post-to-facebook.mjs:
//  • post-to-facebook.mjs announces a NEW article as a link post (its push
//    trigger is currently paused during this backlog rollout).
//  • This poster drains the ~1,000-article backlog as a native photo (FB
//    favours photos over off-site link previews) whose post body carries NO
//    external link at all — the UTM-tagged link is posted as the first comment,
//    which needs pages_manage_engagement on the token.
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
  loadManifest, saveManifest, isDone, hasPost, entryFor, markPost, markComment,
  nextBatch, perRunArticles,
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
// Points readers to the link, which lives in the first comment (kept out of the
// post body for maximum reach).
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

// Expand a list of article bases into one target per (base, language): the file
// to read, the locale prefix, and the base (for manifest keying). Skips a
// (base, lang) that is FULLY done (post + comment); a target whose post exists
// but whose comment failed is kept so post() retries just the comment.
function targetsForBases(bases, manifest) {
  const out = [];
  const seen = new Set();
  for (const base of bases) {
    if (!isPublishedBase(base)) continue;
    for (const lang of LANGS) {
      if (!PAGES[lang]) continue;
      if (isDone(manifest, base, lang)) continue; // post + comment both up — nothing to do
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
  // MAX-REACH format: no link in the post body — just title, summary (value), a
  // comment-prompt question, a "link is in the first comment 👇" nudge, and
  // localized hashtags. The UTM-tagged link is posted as the first comment (see
  // post()), so the post carries no reach-suppressing external link at all.
  const caption = [data.title, '', data.summary, '', prompt, CTA[lang], '', hashtags(data, lang)].join('\n');
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

// Mint the Page token for a language (cached in the lib). Null on failure.
async function tokenFor(lang) {
  try {
    return await pageTokenFor(PAGES[lang], TOKEN);
  } catch (err) {
    console.error(`[fb-backlog] FAILED [${lang}] mint token:`, err.message);
    return null;
  }
}

// Post the article link as a comment on an existing story. True on success.
async function postComment(storyId, link, pageToken) {
  const res = await fetch(`${GRAPH}/${storyId}/comments`, {
    method: 'POST',
    body: new URLSearchParams({ message: link, access_token: pageToken }),
  });
  if (res.ok) return true;
  const j = await res.json().catch(() => ({}));
  console.error(`[fb-backlog] COMMENT FAILED ${storyId}:`, JSON.stringify(j));
  return false;
}

// Handle one target, persisting to the manifest after EACH successful API call
// so a failure never loses a post id or recreates a post. Returns:
//   'skip' | 'error' | 'full' | 'comment-ok' | 'comment-pending'.
async function handle(t, manifest) {
  const p = await readPost(t);
  if (!p) return 'skip';
  const pageToken = await tokenFor(t.lang);
  if (!pageToken) return 'error';

  // RETRY path — the photo already exists; comment on the SAVED id, never recreate it.
  const existing = entryFor(manifest, t.base, t.lang);
  if (existing?.post_id) {
    const ok = await postComment(existing.post_id, p.link, pageToken);
    markComment(manifest, t.base, t.lang, ok ? 'posted' : 'failed');
    saveManifest(manifest);
    console.log(`[fb-backlog] retry-comment [${t.lang}] ${existing.post_id} → ${ok ? 'posted' : 'still pending'}`);
    return ok ? 'comment-ok' : 'comment-pending';
  }

  // NEW path — create the native photo post.
  if (!(await isLive(p.link))) {
    console.error(`[fb-backlog] SKIP [${t.lang}] page not live (not HTTP 200): ${p.link}`);
    return 'error';
  }
  const photoRes = await fetch(`${GRAPH}/${PAGES[t.lang]}/photos`, {
    method: 'POST',
    body: new URLSearchParams({ url: p.image, caption: p.caption, published: 'true', access_token: pageToken }),
  });
  const photoJson = await photoRes.json().catch(() => ({}));
  if (!photoRes.ok) {
    console.error(`[fb-backlog] FAILED [${t.lang}] photo ${p.image}:`, JSON.stringify(photoJson));
    return 'error';
  }
  const storyId = photoJson.post_id || photoJson.id;
  // Persist the post id IMMEDIATELY — before the comment — so it can never be lost.
  markPost(manifest, t.base, t.lang, storyId);
  manifest.meta.startedAt ??= new Date().toISOString();
  saveManifest(manifest);
  console.log(`[fb-backlog] posted [${t.lang}] ${p.image} → ${storyId}`);

  const ok = await postComment(storyId, p.link, pageToken);
  markComment(manifest, t.base, t.lang, ok ? 'posted' : 'failed');
  saveManifest(manifest);
  if (!ok) console.error(`[fb-backlog] [${t.lang}] ${storyId} — first comment pending (needs pages_manage_engagement); a later run retries ONLY the comment.`);
  return ok ? 'full' : 'comment-pending';
}

// Preflight: log the token's scopes AND each Page's tasks. Creating a comment
// needs BOTH pages_manage_engagement (scope) AND the MODERATE task on the Page —
// posting only needs CREATE_CONTENT, which is why posts work but comments #200.
// Logs both so the exact gap is visible in the run, never a guess. Non-fatal.
async function reportScopes() {
  try {
    const pageToken = await pageTokenFor(PAGES.ms, TOKEN);
    const dbg = await (await fetch(`${GRAPH}/debug_token?input_token=${encodeURIComponent(pageToken)}&access_token=${encodeURIComponent(TOKEN)}`)).json().catch(() => ({}));
    const scopes = dbg?.data?.scopes;
    if (Array.isArray(scopes)) {
      console.log(`[fb-backlog] page-token scopes: ${scopes.join(', ') || '(none)'}`);
      console.log(`[fb-backlog] scope pages_manage_engagement: ${scopes.includes('pages_manage_engagement') ? 'YES ✅' : 'NO ❌'}`);
    }
    // Page-level tasks — MODERATE is what comment-creation requires.
    const acc = await (await fetch(`${GRAPH}/me/accounts?fields=id,name,tasks&access_token=${encodeURIComponent(TOKEN)}`)).json().catch(() => ({}));
    if (Array.isArray(acc?.data) && acc.data.length) {
      for (const pg of acc.data) {
        const tasks = pg.tasks || [];
        console.log(`[fb-backlog] page ${pg.id} (${pg.name}) tasks: ${tasks.join(', ') || '(none)'} — MODERATE: ${tasks.includes('MODERATE') ? 'YES ✅' : 'NO ❌'}`);
      }
    } else {
      console.log('[fb-backlog] /me/accounts returned no pages:', JSON.stringify(acc).slice(0, 300));
    }
  } catch (err) {
    console.warn('[fb-backlog] preflight skipped:', err.message);
  }
}

async function main() {
  const files = fileList();
  // Safety: a no-files run does nothing unless queue mode is explicitly on.
  if (!files.length && !QUEUE) {
    console.log('[fb-backlog] no files and not queue mode (set FB_BACKLOG_QUEUE=1) — nothing to do.');
    return;
  }
  const manifest = loadManifest();
  const ts = resolveTargets(files, manifest);
  if (!ts.length) { console.log('[fb-backlog] nothing to do (all caught up).'); return; }

  // Dry run / no token: log what would be posted, never call the API, exit 0.
  if (DRY_RUN || !TOKEN) { for (const t of ts) await preview(t); return; }

  await reportScopes();

  const tally = { full: 0, 'comment-ok': 0, 'comment-pending': 0, error: 0, skip: 0 };
  for (const t of ts) tally[await handle(t, manifest)] += 1;
  console.log(`[fb-backlog] done — post+comment ${tally.full}, comment-retried ${tally['comment-ok']}, comment-pending ${tally['comment-pending']}, error ${tally.error}; ${Object.keys(manifest.posted).length} in manifest.`);

  // A pending comment is SOFT: the post is saved and a later run retries only the
  // comment, so the run stays GREEN and the manifest commits (a post id is never
  // lost). A photo/token error is HARD.
  if (tally['comment-pending'] > 0) {
    console.error(`[fb-backlog] NOTE — ${tally['comment-pending']} first-comment(s) pending (needs pages_manage_engagement). Posts saved; auto-retried next run.`);
  }
  if (tally.error > 0) {
    console.error(`[fb-backlog] FAILED — ${tally.error} post/token error(s).`);
    process.exit(1);
  }
}

main().catch((err) => { console.error('[fb-backlog] error:', err); process.exit(1); });
