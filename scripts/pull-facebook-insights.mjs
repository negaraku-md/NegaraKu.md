// pull-facebook-insights.mjs — archive how far our Facebook posts travel.
//
// For each language Page (ms/en/zh) it reads follower count + per-post insights
// (impressions, reach, link clicks) via the Graph API and writes a committed
// snapshot, analytics/facebook.json. This is the Facebook arm of the analytics
// archive: post insights age out of Meta's UI, so we fold the current lifetime
// numbers into the repo where they persist (see docs/ANALYTICS.md).
//
// Auth reuses the poster's system-user token — the "NegaraKu Poster" user has
// Content + Insights on all three Pages, so each Page's own token is minted from
// FB_PAGE_ACCESS_TOKEN at runtime (pageTokenFor), exactly like post-to-facebook.mjs.
//
// Required env: FB_PAGE_ACCESS_TOKEN. Optional: FB_PAGE_ID_MS/EN/ZH overrides.
// Fail-safe: no token, or any Page erroring, never aborts the run — that Page is
// left out and the snapshot keeps its last good numbers.

import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'analytics', 'facebook.json');
const GRAPH = 'https://graph.facebook.com/v21.0';
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;

// Business-asset ids (the id /{id}/insights uses) — same as the poster's PAGES.
const PAGES = {
  ms: process.env.FB_PAGE_ID_MS || process.env.FB_PAGE_ID || '1227711683752433',
  en: process.env.FB_PAGE_ID_EN || '1334373156431426',
  zh: process.env.FB_PAGE_ID_ZH || '1382294921622880',
};
// Stable, non-deprecated per-post metrics.
const POST_METRICS = ['post_impressions', 'post_impressions_unique', 'post_clicks'];

const pageTokenCache = new Map();
async function pageTokenFor(pageId) {
  if (pageTokenCache.has(pageId)) return pageTokenCache.get(pageId);
  const url = `${GRAPH}/${pageId}?fields=access_token&access_token=${encodeURIComponent(TOKEN)}`;
  const res = await fetch(url);
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.access_token) {
    throw new Error(`could not mint a Page token for ${pageId}: ${JSON.stringify(json)}`);
  }
  pageTokenCache.set(pageId, json.access_token);
  return json.access_token;
}

async function get(url) {
  const res = await fetch(url);
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
  return json;
}

// Pull one Page's follower count + summed post insights.
async function pullPage(lang, pageId) {
  const token = await pageTokenFor(pageId);
  const meta = await get(`${GRAPH}/${pageId}?fields=name,followers_count,fan_count&access_token=${encodeURIComponent(token)}`);
  const postsUrl =
    `${GRAPH}/${pageId}/posts?limit=50&fields=id,created_time,` +
    `insights.metric(${POST_METRICS.join(',')})&access_token=${encodeURIComponent(token)}`;
  const posts = await get(postsUrl);

  let impressions = 0, reach = 0, clicks = 0, n = 0;
  for (const post of posts.data ?? []) {
    n++;
    for (const m of post.insights?.data ?? []) {
      const v = Math.round(Number(m.values?.[0]?.value) || 0);
      if (m.name === 'post_impressions') impressions += v;
      else if (m.name === 'post_impressions_unique') reach += v;
      else if (m.name === 'post_clicks') clicks += v;
    }
  }
  return {
    pageId,
    name: meta.name ?? null,
    followers: Math.round(Number(meta.followers_count ?? meta.fan_count) || 0),
    posts: n,
    impressions,       // Σ post_impressions
    reach,             // Σ post_impressions_unique (per-post; not de-duplicated across posts)
    clicks,            // Σ post_clicks
  };
}

async function loadPrev() {
  if (!existsSync(OUT)) return { pages: {} };
  try { return JSON.parse(await readFile(OUT, 'utf8')); } catch { return { pages: {} }; }
}

async function main() {
  if (!TOKEN) {
    console.log('[fb-insights] no FB_PAGE_ACCESS_TOKEN — nothing to pull.');
    return;
  }
  const prev = await loadPrev();
  const pages = { ...(prev.pages ?? {}) }; // keep last good numbers for a Page that errors
  for (const [lang, pageId] of Object.entries(PAGES)) {
    if (!pageId) continue;
    try {
      pages[lang] = await pullPage(lang, pageId);
      const p = pages[lang];
      console.log(`[fb-insights] ${lang}: ${p.followers} followers · ${p.posts} posts · ${p.impressions} impressions · ${p.reach} reach · ${p.clicks} clicks`);
    } catch (err) {
      console.error(`[fb-insights] ${lang} (${pageId}) failed, keeping previous:`, err.message);
    }
  }
  const sum = (k) => Object.values(pages).reduce((a, p) => a + (p[k] || 0), 0);
  const snapshot = {
    updatedAt: new Date().toISOString(),
    pages,
    totals: { followers: sum('followers'), posts: sum('posts'), impressions: sum('impressions'), reach: sum('reach'), clicks: sum('clicks') },
  };
  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(snapshot, null, 2) + '\n', 'utf8');
  console.log(`[fb-insights] wrote ${path.relative(ROOT, OUT)} — totals: ${JSON.stringify(snapshot.totals)}`);
}

main().catch((e) => { console.warn('[fb-insights] unexpected error, snapshot unchanged:', e.message); });
