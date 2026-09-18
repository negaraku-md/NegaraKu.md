// post-backlog-to-linkedin.mjs — post the published corpus to the NegaraKu.md
// LinkedIn Company Page as ARTICLE shares (clickable link cards), business/
// compliance pillar first, in three languages (en/ms/zh) ROTATED into the one
// feed. The LinkedIn twin of post-backlog-to-facebook.mjs, but single-page:
// per-language demand-ranked queues drain into a shared daily target, its own
// manifest (analytics/posted-linkedin.json), a warm-up ramp.
//
// Invoked with article files/bases (post exactly those, in every language), or in
// queue mode (the cron path: drain the next rotated batch up to the day's target).
//
// Env:
//   LINKEDIN_ACCESS_TOKEN — Community-Management token (w_organization_social),
//                           minted for a member who ADMINS the org. Absent → dry run.
//   SITE_URL              — default https://negaraku.md
//   LINKEDIN_DRY_RUN=1    — log what would be posted, don't call the API.
//   LINKEDIN_BACKLOG_QUEUE=1 — with no files, drain the ranked queue (cron path).
//   LINKEDIN_SCHEDULED=1  — set only on cron runs (applies the per-MYT-day guard).

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import matter from 'gray-matter';
import { articleBases, langFile, isPublishedBase } from './lib/facebook.mjs';
import { buildPost, postArticle, ORG_URN, LANGS } from './lib/linkedin.mjs';
import {
  loadManifest, saveManifest, isDone, markPost,
  listPublishedBases, nextBatch, perDay, postedTodayCountMYT,
} from './lib/li-queue.mjs';

const SITE_URL = process.env.SITE_URL ?? 'https://negaraku.md';
const TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;
const DRY_RUN = process.env.LINKEDIN_DRY_RUN === '1';
const QUEUE = process.env.LINKEDIN_BACKLOG_QUEUE === '1';
const SCHEDULED = process.env.LINKEDIN_SCHEDULED === '1';

function fileList() {
  const args = process.argv.slice(2);
  if (args.length) return args;
  return (process.env.CHANGED_FILES ?? '')
    .split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
}

// Resolve this run's targets as { base, lang }. Files named → every language of
// each published, not-yet-posted base. Queue mode → the next rotated batch up to
// today's remaining target; on scheduled runs the per-MYT-day guard makes repeat
// cron ticks top up toward the target rather than double-post.
function resolveTargets(files, manifest, { scheduled }) {
  if (files.length) {
    const out = [];
    for (const base of articleBases(files)) {
      if (!isPublishedBase(base)) continue;
      for (const lang of LANGS) {
        if (!isDone(manifest, base, lang) && existsSync(langFile(base, lang))) {
          out.push({ base, lang });
        }
      }
    }
    return out;
  }
  const target = perDay();
  let budget = target;
  if (scheduled) {
    const already = postedTodayCountMYT(manifest);
    budget = target - already;
    if (budget <= 0) {
      console.log(`[li-backlog] daily target met (${already}/${target} today, MYT) — skip.`);
      return [];
    }
  }
  const picks = nextBatch(manifest, budget);
  if (picks.length) {
    const mix = picks.reduce((a, p) => ((a[p.lang] = (a[p.lang] || 0) + 1), a), {});
    console.log(`[li-backlog] queue: ${picks.length} post(s) (target ${target}/day) — ${Object.entries(mix).map(([l, n]) => `${l}:${n}`).join(' ')}.`);
  }
  return picks;
}

// The article frontmatter for one { base, lang }: langFile(base, lang) = base.<lang>.md,
// or the master base.md when it is that language. Null if missing/unparseable.
async function readArticle(base, lang) {
  const file = langFile(base, lang);
  if (!existsSync(file)) return null;
  try {
    return { file, data: matter(await readFile(file, 'utf8')).data };
  } catch {
    return null;
  }
}

// Confirm the page is live (HTTP 200, following redirects) before posting — a link
// LinkedIn would scrape as a 404 is worse than not posting. Network error = not live.
async function isLive(url) {
  try {
    return (await fetch(url, { redirect: 'follow' })).ok;
  } catch {
    return false;
  }
}

async function preview({ base, lang }) {
  const art = await readArticle(base, lang);
  if (!art) { console.warn(`[li-backlog] skip ${base} [${lang}]: no file`); return; }
  const body = buildPost(art.data, { siteUrl: SITE_URL, lang });
  if (!body) { console.warn(`[li-backlog] skip ${base} [${lang}]: missing slug/category`); return; }
  const link = body.content.article.source;
  const live = await isLive(link);
  console.log(
    `[li-backlog] ${DRY_RUN ? 'DRY_RUN' : 'no token'} — would post [${lang}] → ${ORG_URN}` +
    `${live ? '' : '  ⚠️ URL NOT LIVE — would be SKIPPED'}\n` +
    `  link:  ${link}\n` +
    `  card:  ${body.content.article.title}\n` +
    `  commentary:\n${body.commentary.split('\n').map((l) => '    | ' + l).join('\n')}\n`,
  );
}

// Post one { base, lang }. Persists to the manifest the instant the post returns so
// an id is never lost. Returns 'full' | 'skip' | 'error'.
async function handle({ base, lang }, manifest) {
  const art = await readArticle(base, lang);
  if (!art) return 'skip';
  const body = buildPost(art.data, { siteUrl: SITE_URL, lang });
  if (!body) return 'skip';
  const link = body.content.article.source;
  if (!(await isLive(link))) {
    console.error(`[li-backlog] SKIP [${lang}] page not live (not HTTP 200): ${link}`);
    return 'error';
  }
  try {
    const urn = await postArticle(body, TOKEN);
    markPost(manifest, base, lang, urn);
    manifest.meta.startedAt ??= new Date().toISOString();
    saveManifest(manifest);
    console.log(`[li-backlog] posted [${lang}] ${base} → ${urn}`);
    return 'full';
  } catch (err) {
    console.error(`[li-backlog] FAILED [${lang}] ${base}:`, err.message);
    return 'error';
  }
}

async function main() {
  const files = fileList();
  if (!files.length && !QUEUE) {
    console.log('[li-backlog] no files and not queue mode (set LINKEDIN_BACKLOG_QUEUE=1) — nothing to do.');
    return;
  }
  const manifest = loadManifest();
  const targets = resolveTargets(files, manifest, { scheduled: SCHEDULED && !files.length });
  if (!targets.length) { console.log('[li-backlog] nothing to do (all caught up).'); return; }

  // Dry run / no token: preview only, never call the API, exit 0.
  if (DRY_RUN || !TOKEN) { for (const t of targets) await preview(t); return; }

  const tally = { full: 0, error: 0, skip: 0 };
  for (const t of targets) tally[await handle(t, manifest)] += 1;
  console.log(`[li-backlog] done — posted ${tally.full}, error ${tally.error}, skip ${tally.skip}; ${Object.keys(manifest.posted).length} in manifest.`);
  if (tally.error > 0) {
    console.error(`[li-backlog] FAILED — ${tally.error} post error(s).`);
    process.exit(1);
  }
}

main().catch((err) => { console.error('[li-backlog] error:', err); process.exit(1); });
