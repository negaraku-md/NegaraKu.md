// post-backlog-to-facebook.mjs — post the EXISTING published corpus to the
// Facebook Pages as NATIVE IMAGE posts (each article's OG card), placing the
// article link per LINK_MODE.
//
// Why this is separate from post-to-facebook.mjs:
//  • post-to-facebook.mjs announces a NEW article as a link post (its push
//    trigger is currently paused during this backlog rollout).
//  • This poster drains the ~1,000-article backlog as a native photo (FB favours
//    photos over off-site link previews). The link goes either in the CAPTION
//    (default — visible, tappable, needs only pages_manage_posts) or in the
//    FIRST COMMENT (max reach — needs pages_manage_engagement at Advanced Access).
//  • Post ids are persisted the instant the photo posts, so a comment failure
//    never recreates a post; switching modes later is just FB_LINK_MODE.
//  • Attribution is preserved: the link is UTM-tagged (utm_source=facebook).
//
// Invoked with article files/bases (the daily queue passes the day's batch), or
// via the CHANGED_FILES env var. Each PUBLISHED article yields one post per
// language Page, in that language.
//
// Env:
//   FB_PAGE_ACCESS_TOKEN  — system-user token (mints each Page's own token).
//   SITE_URL              — default https://negaraku.md
//   FB_LINK_MODE          — 'caption' (default) or 'comment'.
//   FB_DRY_RUN=1          — log what would be posted, don't call the API.

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import matter from 'gray-matter';
import {
  PAGES, LANGS, LANG_POLICY, WINDOWS, GRAPH, localePrefix,
  articleBases, langFile, isPublishedBase,
  hashtags, withUtm, articleUrl, pillarOf, pageTokenFor,
} from './lib/facebook.mjs';
import {
  loadManifest, saveManifest, isDone, hasPost, entryFor, markPost, markComment,
  listPublishedBases, nextForLang, perLangPerDay, postedTodayCountMYTForLang, isLangEnabled,
} from './lib/fb-queue.mjs';

const SITE_URL = process.env.SITE_URL ?? 'https://negaraku.md';
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const DRY_RUN = process.env.FB_DRY_RUN === '1';
// Queue mode: with no explicit files, drain the ranked backlog (the daily cron
// path). With files/CHANGED_FILES, post exactly those (manual/one-off).
const QUEUE = process.env.FB_BACKLOG_QUEUE === '1';
// Set only on GitHub `schedule` (cron) runs. The cron fires DAILY_TICKS times a
// day; each scheduled tick tops up toward the daily target (perRunArticles), so a
// skipped 13:00 tick is self-healed by a later one AND the day's articles are
// spread across the ticks instead of dumped in one feed-flooding burst. Manual
// dispatches never set it, so a manual run always posts the full day's batch.
const SCHEDULED = process.env.FB_SCHEDULED === '1';
// Optional allow-list to restrict a run to specific languages, comma-separated
// (e.g. a launch smoke-test: FB_ONLY_LANGS=ja posts only the Japanese Page).
// Empty = every enabled language (the normal behaviour).
const ONLY_LANGS = (process.env.FB_ONLY_LANGS || '')
  .split(',').map((s) => s.trim()).filter(Boolean);
const langAllowed = (lang) => ONLY_LANGS.length === 0 || ONLY_LANGS.includes(lang);
// The number of scheduled cron ticks per day (keep in sync with the `schedule:`
// cron in .github/workflows/facebook-backlog.yml). Used to size each tick's share
// of the daily target.
const DAILY_TICKS = 3;
// Where the article link goes: 'caption' (a visible, tappable link on line 2 —
// works with just pages_manage_posts, best for clicks) or 'comment' (link in the
// first comment for maximum reach — needs pages_manage_engagement at Advanced
// Access, i.e. App Review). Default caption; flip with FB_LINK_MODE=comment once
// commenting is approved.
const LINK_MODE = process.env.FB_LINK_MODE === 'comment' ? 'comment' : 'caption';

// A comment-prompt question per pillar × language — invites a reply, and
// comments are Facebook's strongest reach signal. Unknown pillar → 'understand'.
const PROMPT = {
  'understand': {
    ms: 'Ingin memahami Malaysia dengan lebih mendalam?',
    en: 'Want to understand Malaysia better?',
    zh: '想更深入了解马来西亚吗？',
    ta: 'மலேசியாவை இன்னும் ஆழமாகப் புரிந்துகொள்ள விரும்புகிறீர்களா?',
    ja: 'マレーシアをもっと深く知りたいですか？',
  },
  'living': {
    ms: 'Tinggal, bekerja atau belajar di Malaysia?',
    en: 'Living, working or studying in Malaysia?',
    zh: '在马来西亚生活、工作或求学吗？',
    ta: 'மலேசியாவில் வாழ்கிறீர்களா, வேலை செய்கிறீர்களா அல்லது படிக்கிறீர்களா?',
    ja: 'マレーシアで暮らす・働く・学んでいますか？',
  },
  'doing-business': {
    ms: 'Memulakan atau mengembangkan perniagaan di Malaysia?',
    en: 'Starting or growing a business in Malaysia?',
    zh: '在马来西亚创业或拓展业务吗？',
    ta: 'மலேசியாவில் வணிகத்தைத் தொடங்குகிறீர்களா அல்லது வளர்க்கிறீர்களா?',
    ja: 'マレーシアでビジネスを始める・成長させる予定ですか？',
  },
};
// Caption mode: precedes the tappable link on line 2. Comment mode: points to
// the first comment. Chosen by LINK_MODE.
const CTA_CAPTION = {
  ms: '🔗 Baca panduan penuh:',
  en: '🔗 Read the full guide:',
  zh: '🔗 阅读完整指南：',
  ta: '🔗 முழு வழிகாட்டியைப் படியுங்கள்:',
  ja: '🔗 完全ガイドを読む：',
};
const CTA_COMMENT = {
  ms: '🔗 Panduan penuh dalam komen pertama 👇',
  en: '🔗 Full guide in the first comment 👇',
  zh: '🔗 完整指南见首条评论 👇',
  ta: '🔗 முழு வழிகாட்டி முதல் கருத்தில் 👇',
  ja: '🔗 完全ガイドは最初のコメントへ 👇',
};
// Prefixed to the title so it stands out above the caption (FB text can't be
// bold). Matches the per-publish poster's 📌. Set to '' to drop it.
const TITLE_EMOJI = '📌 ';

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
      if (!langAllowed(lang)) continue; // FB_ONLY_LANGS allow-list (empty = all)
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

// Which Malaysia engagement window we are in now (MYT = UTC+8), matched to the
// cron ticks (08:17 / 13:17 / 20:17 MYT). Languages post in their preferred windows.
function currentWindow(now = Date.now()) {
  const mytHour = new Date(now + 8 * 3600000).getUTCHours();
  if (mytHour < 11) return 'morning';
  if (mytHour < 17) return 'lunch';
  return 'evening';
}

// How many articles to post at THIS tick, allocating the day's target PEAK-FIRST:
// evening gets filled before lunch before morning (Malaysia FB engagement peaks
// evening > lunch > morning; a Page's reach is earned by engagement, so the day's
// posts should land where the audience is). Returns the cumulative allocation up to
// the current window minus what already went out today — so a skipped tick self-
// heals (its share rolls to the next window) and the evening tick catches up all.
const WINDOW_PEAK_RANK = { evening: 0, lunch: 1, morning: 2 }; // best first
function windowBudget(target, already, win, langWindows) {
  const active = WINDOWS.filter((w) => langWindows.includes(w)); // chronological order
  if (!active.length) return Math.max(0, target - already);
  const base = Math.floor(target / active.length);
  const rem = target % active.length;
  const byPeak = [...active].sort((a, b) => WINDOW_PEAK_RANK[a] - WINDOW_PEAK_RANK[b]);
  const alloc = {};
  for (const w of active) alloc[w] = base;
  for (let i = 0; i < rem; i++) alloc[byPeak[i]] += 1; // remainder to the best windows
  let cum = 0;
  for (const w of active) { cum += alloc[w]; if (w === win) break; }
  if (win === 'evening') cum = target; // last tick of the day catches up everything left
  return Math.max(0, cum - already);
}

// The targets for this run. Two paths:
//   • files named (CLI / CHANGED_FILES): post exactly those, to every language.
//   • queue mode (cron): each language drains its OWN demand-ranked queue up to
//     its own daily target — so on a given day different Pages post different
//     articles, ordered by each audience's own search demand.
function resolveTargets(files, manifest, { scheduled }) {
  if (files.length) return targetsForBases(articleBases(files), manifest);

  const bases = listPublishedBases();
  const out = [];
  const seen = new Set();
  for (const lang of LANGS) {
    if (!isLangEnabled(lang) || !PAGES[lang]) continue;
    if (!langAllowed(lang)) continue; // FB_ONLY_LANGS allow-list (empty = all)
    const dayTarget = perLangPerDay(lang, manifest);
    let budget = dayTarget;
    if (scheduled) {
      // Post in the language's preferred WINDOWS (its audience's peak times), and
      // drip its daily target across the windows it still has left today. The
      // evening tick is a catch-up: a language behind its target posts there even
      // if evening is not its window, so a GitHub-skipped tick never loses a day.
      const win = currentWindow();
      const isEvening = win === 'evening';
      const langWindows = LANG_POLICY?.[lang]?.windows || WINDOWS;
      const already = postedTodayCountMYTForLang(manifest, lang);
      const remaining = dayTarget - already;
      if (remaining <= 0) {
        console.log(`[fb-backlog] [${lang}] daily target met (${already}/${dayTarget} today, MYT) — skip.`);
        continue;
      }
      if (!langWindows.includes(win) && !isEvening) {
        console.log(`[fb-backlog] [${lang}] not its window (${win}; wants ${langWindows.join('/')}) — waits.`);
        continue;
      }
      // Growth-first: allocate the day's target PEAK-FIRST (evening > lunch > morning),
      // because a Page's reach is earned by engagement and engagement is highest at
      // peak audience times — so a single daily post lands in the evening, not 8am.
      budget = windowBudget(dayTarget, already, win, langWindows);
      if (budget <= 0) {
        console.log(`[fb-backlog] [${lang}] nothing due this window (${win}) — waits for a later peak.`);
        continue;
      }
    }
    const picks = nextForLang(manifest, lang, budget, bases);
    for (const b of picks) {
      const file = langFile(b.base, lang);
      const k = `${b.base}#${lang}`;
      if (existsSync(file) && !isDone(manifest, b.base, lang) && !seen.has(k)) {
        seen.add(k);
        out.push({ base: b.base, file, lang, prefix: localePrefix(lang) });
      }
    }
    if (picks.length) console.log(`[fb-backlog] queue [${lang}]: ${picks.length} article(s) (target ${dayTarget}/day).`);
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
  const tags = hashtags(data, lang);
  // caption mode: the tappable link sits on line 2, above Facebook's "See more"
  // fold, so it shows without expanding. comment mode: no link in the body (it
  // goes in the first comment for max reach) — just a nudge to the comment.
  const title = `${TITLE_EMOJI}${data.title}`;
  const caption = LINK_MODE === 'caption'
    ? [title, `${CTA_CAPTION[lang]} ${link}`, '', data.summary, '', prompt, '', tags].join('\n')
    : [title, '', data.summary, '', prompt, CTA_COMMENT[lang], '', tags].join('\n');
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
  const existing = entryFor(manifest, t.base, t.lang);

  // A post already exists for this (base, lang).
  if (existing?.post_id) {
    // caption mode: the link is in the caption, so the post is already complete.
    if (LINK_MODE === 'caption') {
      markComment(manifest, t.base, t.lang, 'na');
      saveManifest(manifest);
      return 'full';
    }
    // comment mode: retry ONLY the first comment on the saved id — never recreate.
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
  // Persist the post id IMMEDIATELY — before any comment — so it can never be lost.
  markPost(manifest, t.base, t.lang, storyId);
  manifest.meta.startedAt ??= new Date().toISOString();
  saveManifest(manifest);
  console.log(`[fb-backlog] posted [${t.lang}] ${p.image} → ${storyId}`);

  // caption mode: link is in the caption — done, no comment needed.
  if (LINK_MODE === 'caption') {
    markComment(manifest, t.base, t.lang, 'na');
    saveManifest(manifest);
    return 'full';
  }
  // comment mode: post the link as the first comment.
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
  // Each language drains its own demand-ranked queue up to its own daily target;
  // on scheduled runs the target drips across the day's cron ticks (per language).
  const ts = resolveTargets(files, manifest, { scheduled: SCHEDULED && !files.length });
  if (!ts.length) { console.log('[fb-backlog] nothing to do (all caught up).'); return; }

  // Dry run / no token: log what would be posted, never call the API, exit 0.
  if (DRY_RUN || !TOKEN) { for (const t of ts) await preview(t); return; }

  if (LINK_MODE === 'comment') await reportScopes(); // scope/task diagnostic matters only for comments

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
