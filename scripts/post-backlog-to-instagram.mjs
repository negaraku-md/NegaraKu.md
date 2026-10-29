// post-backlog-to-instagram.mjs — drip the published corpus to the per-language
// Instagram Business accounts as native feed posts (each article's OG card image
// + a value-first caption). The article link lives in the account bio (IG captions
// can't carry a clickable link), so the caption shows the readable URL as text.
//
// Mirrors post-backlog-to-facebook.mjs: each language drains its OWN demand-ranked
// queue (scripts/lib/ig-queue.mjs → fb-queue ranking) up to its own daily target,
// ramped by how new the account is, dripped across the day's cron windows. IG uses
// the 2-step Content Publishing flow (create container → publish) and the IG id is
// resolved from each language's connected Facebook Page.
//
// Env:
//   FB_PAGE_ACCESS_TOKEN  — system-user token (mints each Page token; must carry
//                           instagram_basic + instagram_content_publish scopes).
//   SITE_URL              — default https://negaraku.md
//   IG_DRY_RUN=1          — log what would be posted, don't call the API.
//   IG_BACKLOG_QUEUE=1    — drain the ranked backlog (the daily cron path).
//   IG_SCHEDULED=1        — set on cron runs (drip across windows).
//   IG_WINDOW             — morning|lunch|evening (forced by the Worker cron).
//   IG_ONLY_LANGS         — comma-separated allow-list (e.g. a smoke test: ms).
//   IG_IMAGE_URL_TEMPLATE — JPEG OG-card URL template (see instagram.mjs).

import { readFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import matter from 'gray-matter';
import {
  LANGS, PAGES, localePrefix, gfetch,
  igUserIdFor, ogCardUrl, buildCaption,
  createMediaContainer, publishMedia, pageTokenFor,
} from './lib/instagram.mjs';
import {
  loadManifest, saveManifest, isDone, entryFor, markPost,
  listPublishedBases, nextForLang, perLangPerDay,
  postedTodayCountMYTForLang, isLangEnabled,
} from './lib/ig-queue.mjs';

const SITE_URL = process.env.SITE_URL ?? 'https://negaraku.md';
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const DRY_RUN = process.env.IG_DRY_RUN === '1';
const QUEUE = process.env.IG_BACKLOG_QUEUE === '1';
const SCHEDULED = process.env.IG_SCHEDULED === '1';
const ONLY_LANGS = (process.env.IG_ONLY_LANGS || '').split(',').map((s) => s.trim()).filter(Boolean);
const langAllowed = (lang) => ONLY_LANGS.length === 0 || ONLY_LANGS.includes(lang);
const WINDOWS = ['morning', 'lunch', 'evening'];

function fileList() {
  const args = process.argv.slice(2);
  if (args.length) return args;
  return (process.env.CHANGED_FILES ?? '').split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
}

function currentWindow(now = Date.now()) {
  const forced = process.env.IG_WINDOW;
  if (forced === 'morning' || forced === 'lunch' || forced === 'evening') return forced;
  const mytHour = new Date(now + 8 * 3600000).getUTCHours();
  if (mytHour < 11) return 'morning';
  if (mytHour < 17) return 'lunch';
  return 'evening';
}

// Allocate the day's target PEAK-FIRST (evening > lunch > morning), returning the
// cumulative allocation up to the current window minus what already went out today.
// Identical shape to the FB poster so the two can't drift.
const WINDOW_PEAK_RANK = { evening: 0, lunch: 1, morning: 2 };
function windowBudget(target, already, win) {
  const active = WINDOWS;
  const base = Math.floor(target / active.length);
  const rem = target % active.length;
  const byPeak = [...active].sort((a, b) => WINDOW_PEAK_RANK[a] - WINDOW_PEAK_RANK[b]);
  const alloc = {};
  for (const w of active) alloc[w] = base;
  for (let i = 0; i < rem; i++) alloc[byPeak[i]] += 1;
  let cum = 0;
  for (const w of active) { cum += alloc[w]; if (w === win) break; }
  if (win === 'evening') cum = target;
  return Math.max(0, cum - already);
}

// The targets for this run: files named → post exactly those; else queue mode →
// each language drains its own demand-ranked queue up to its daily (windowed) target.
function resolveTargets(files, manifest, { scheduled }) {
  if (files.length) {
    const bases = new Set();
    for (const f of files) {
      const p = f.replace(/\\/g, '/');
      if (!p.startsWith('knowledge/') || !p.endsWith('.md') || p.startsWith('knowledge/about/')) continue;
      bases.add(p.replace(new RegExp('\\.(' + LANGS.join('|') + ')\\.md$'), '').replace(/\.md$/, ''));
    }
    const out = [];
    const seen = new Set();
    for (const base of bases) {
      if (!isPublishedBase(base)) continue;
      for (const lang of LANGS) {
        if (!PAGES[lang] || !langAllowed(lang)) continue;
        if (isDone(manifest, base, lang)) continue;
        const file = langFile(base, lang);
        const k = `${base}#${lang}`;
        if (existsSync(file) && !seen.has(k)) { seen.add(k); out.push({ base, file, lang, prefix: localePrefix(lang) }); }
      }
    }
    return out;
  }

  const bases = listPublishedBases();
  const out = [];
  const seen = new Set();
  for (const lang of LANGS) {
    if (!isLangEnabled(lang) || !PAGES[lang] || !langAllowed(lang)) continue;
    const dayTarget = perLangPerDay(lang, manifest);
    let budget = dayTarget;
    if (scheduled) {
      const win = currentWindow();
      const already = postedTodayCountMYTForLang(manifest, lang);
      const remaining = dayTarget - already;
      if (remaining <= 0) { console.log(`[ig-backlog] [${lang}] daily target met (${already}/${dayTarget}) — skip.`); continue; }
      budget = windowBudget(dayTarget, already, win);
      if (budget <= 0 && already === 0) { budget = 1; console.log(`[ig-backlog] [${lang}] cron-drift floor — posting 1.`); }
      if (budget <= 0) { console.log(`[ig-backlog] [${lang}] nothing due this window (${win}) — waits.`); continue; }
    }
    const picks = nextForLang(manifest, lang, budget, bases);
    for (const b of picks) {
      const file = langFile(b.base, lang);
      const k = `${b.base}#${lang}`;
      if (existsSync(file) && !isDone(manifest, b.base, lang) && !seen.has(k)) { seen.add(k); out.push({ base: b.base, file, lang, prefix: localePrefix(lang) }); }
    }
    if (picks.length) console.log(`[ig-backlog] queue [${lang}]: ${picks.length} article(s) (target ${dayTarget}/day).`);
  }
  return out;
}

// --- article helpers (local; IG keeps its own so it can't drift on a published check) ---
function isPublishedBase(base) {
  try {
    const data = matter(readFileSync(`${base}.md`, 'utf8')).data;
    return data.status === 'published' && !data.hidden;
  } catch { return false; }
}
function langFile(base, lang) {
  const f = `${base}.${lang}.md`;
  return existsSync(f) ? f : `${base}.md`;
}

function buildPost(file, data, lang, prefix) {
  if (!data.slug || !data.category) { console.warn(`[ig-backlog] skip ${file}: missing slug/category`); return null; }
  const image = ogCardUrl(SITE_URL, lang, data.category, data.slug);
  const url = `${SITE_URL}${prefix}/${data.category}/${data.slug}/`;
  const caption = buildCaption(data, lang, url);
  return { image, caption, url };
}

async function readPost(t) {
  return buildPost(t.file, matter(await readFile(t.file, 'utf8')).data, t.lang, t.prefix);
}

async function isLive(url) {
  try {
    const res = await gfetch(url, { redirect: 'follow' }, { timeout: 10000, retries: 1, label: 'liveness' });
    return res.ok;
  } catch { return false; }
}

async function preview(t) {
  const p = await readPost(t);
  if (!p) return;
  const igId = TOKEN ? await igUserIdFor(t.lang, TOKEN).catch(() => null) : (t.lang === 'ms' ? '(ms IG id)' : '(resolve from Page)');
  const live = await isLive(p.url);
  console.log(
    `[ig-backlog] ${DRY_RUN ? 'DRY_RUN' : 'no credentials'} — would post [${t.lang}] → IG ${igId || '(no IG connected — SKIP)'}` +
    `${live ? '' : '  ⚠️ URL NOT LIVE — would be SKIPPED'}\n` +
    `  image:   ${p.image}\n` +
    `  caption:\n${p.caption.split('\n').map((l) => '    | ' + l).join('\n')}\n`,
  );
}

async function handle(t, manifest) {
  const p = await readPost(t);
  if (!p) return 'skip';
  const igId = await igUserIdFor(t.lang, TOKEN);
  if (!igId) { console.log(`[ig-backlog] [${t.lang}] no IG account connected to its Page — skip.`); return 'skip'; }
  if (entryFor(manifest, t.base, t.lang)?.media_id) return 'done';
  if (!(await isLive(p.url))) { console.error(`[ig-backlog] SKIP [${t.lang}] page not live: ${p.url}`); return 'error'; }
  const pageToken = await pageTokenFor(PAGES[t.lang], TOKEN);
  const creationId = await createMediaContainer(igId, p.image, p.caption, pageToken);
  const mediaId = await publishMedia(igId, creationId, pageToken);
  markPost(manifest, t.base, t.lang, mediaId);
  manifest.meta.startedAt ??= new Date().toISOString();
  saveManifest(manifest);
  console.log(`[ig-backlog] posted [${t.lang}] ${p.image} → media ${mediaId}`);
  return 'ok';
}

async function main() {
  const files = fileList();
  if (!files.length && !QUEUE) {
    console.log('[ig-backlog] no files and not queue mode (set IG_BACKLOG_QUEUE=1) — nothing to do.');
    return;
  }
  const manifest = loadManifest();
  const ts = resolveTargets(files, manifest, { scheduled: SCHEDULED && !files.length });
  if (!ts.length) { console.log('[ig-backlog] nothing to do (all caught up).'); return; }

  if (DRY_RUN || !TOKEN) { for (const t of ts) await preview(t); return; }

  const tally = { ok: 0, done: 0, error: 0, skip: 0 };
  for (const t of ts) {
    try { tally[await handle(t, manifest)] += 1; }
    catch (err) { console.error(`[ig-backlog] FAILED [${t.lang}] ${t.base}:`, err.message); tally.error += 1; }
  }
  console.log(`[ig-backlog] done — posted ${tally.ok}, already ${tally.done}, skip ${tally.skip}, error ${tally.error}; ${Object.keys(manifest.posted).length} in manifest.`);
  if (tally.error > 0) { console.error(`[ig-backlog] FAILED — ${tally.error} error(s).`); process.exit(1); }
}

main().catch((err) => { console.error('[ig-backlog] error:', err); process.exit(1); });
