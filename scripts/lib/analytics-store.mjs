// Shared helpers for the Visitors analytics cumulative store.
//
// Cloudflare Analytics Engine only retains data points for ~90 days. To keep an
// all-time visitor count we fold AE data forward into a committed snapshot
// (analytics/cumulative.json) before it ages out:
//
//   cumulative.pages  — all-time totals for every hit with timestamp <= cursor
//   cumulative.cursor — the exact UTC datetime up to which pages are folded
//
// accumulate-analytics.mjs advances the cursor (adds the untallied tail to pages)
// on a schedule; build-analytics.mjs displays pages + the live tail since cursor,
// so a deploy always shows an up-to-the-minute all-time count.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const CUMULATIVE_FILE = path.join(ROOT, 'analytics', 'cumulative.json');
export const OUT_FILE = path.join(ROOT, 'public', 'api', 'analytics.json');
export const EPOCH = '1970-01-01 00:00:00';

/** Cloudflare/ClickHouse datetime literal (UTC): "YYYY-MM-DD HH:MM:SS". */
export function chDateTime(d) {
  return new Date(d).toISOString().slice(0, 19).replace('T', ' ');
}

function emptyPage() {
  return { readers: 0, search: { total: 0, byBot: {} }, ai: { total: 0, byBot: {} } };
}

/** Add one AE row {path,bucket,bot,n} into an all-time `pages` map (mutates). */
export function addRow(pages, r) {
  const key = r.path;
  const n = Math.round(Number(r.n) || 0);
  if (!key || key === 'home' || n <= 0) return;
  const e = (pages[key] ||= emptyPage());
  if (r.bucket === 'readers') e.readers += n;
  else if (r.bucket === 'search') { e.search.total += n; e.search.byBot[r.bot] = (e.search.byBot[r.bot] || 0) + n; }
  else if (r.bucket === 'ai') { e.ai.total += n; e.ai.byBot[r.bot] = (e.ai.byBot[r.bot] || 0) + n; }
}

/** Deep-ish clone of a pages map (so the live tail never mutates the snapshot). */
export function clonePages(pages) {
  const out = {};
  for (const [k, e] of Object.entries(pages || {})) {
    out[k] = {
      readers: e.readers || 0,
      search: { total: e.search?.total || 0, byBot: { ...(e.search?.byBot || {}) } },
      ai: { total: e.ai?.total || 0, byBot: { ...(e.ai?.byBot || {}) } },
    };
  }
  return out;
}

/** Drop empty buckets/pages so the card renders "—" instead of a fake 0. */
export function cleanPages(pages) {
  const clean = {};
  for (const [key, e] of Object.entries(pages)) {
    const row = {};
    if (e.readers > 0) row.readers = e.readers;
    if (e.search.total > 0) row.search = e.search;
    if (e.ai.total > 0) row.ai = e.ai;
    if (Object.keys(row).length) clean[key] = row;
  }
  return Object.fromEntries(Object.entries(clean).sort(([a], [b]) => a.localeCompare(b)));
}

/**
 * Real-article keys ("category/slug") from the manifest. Used to drop
 * non-article traffic — home/about/category pages, and the flood of
 * vulnerability-scanner probes (wp-login.php, .git/config, /admin …) that slip
 * past the User-Agent bot filter and would otherwise inflate "readers".
 * Returns null if the manifest isn't built (→ caller keeps everything).
 */
export async function loadArticleKeys() {
  const manifest = path.join(ROOT, 'public', 'api', 'articles.json');
  if (!existsSync(manifest)) return null;
  try {
    const { articles } = JSON.parse(await readFile(manifest, 'utf8'));
    return new Set(articles.filter((a) => a.category && a.slug).map((a) => `${a.category}/${a.slug}`));
  } catch {
    return null;
  }
}

/** Keep only real-article pages (when we have the manifest). */
export function filterToArticles(pages, keys) {
  if (!keys) return pages;
  const out = {};
  for (const [k, v] of Object.entries(pages)) if (keys.has(k)) out[k] = v;
  return out;
}

export async function loadCumulative() {
  if (existsSync(CUMULATIVE_FILE)) {
    try {
      const c = JSON.parse(await readFile(CUMULATIVE_FILE, 'utf8'));
      return { schema: 1, cursor: c.cursor || EPOCH, updatedAt: c.updatedAt || null, pages: c.pages || {} };
    } catch {
      /* fall through to a fresh store */
    }
  }
  return { schema: 1, cursor: EPOCH, updatedAt: null, pages: {} };
}

export async function saveCumulative(store) {
  await mkdir(path.dirname(CUMULATIVE_FILE), { recursive: true });
  await writeFile(CUMULATIVE_FILE, JSON.stringify(store, null, 2) + '\n', 'utf8');
}

/**
 * Query the Analytics Engine SQL API for hits in (afterCursor, upto]. Returns
 * rows [{path,bucket,bot,n}]. `upto` may be null for "everything after cursor".
 * Throws on HTTP error; callers decide whether that is fatal.
 */
export async function queryTail({ account, token, dataset, afterCursor, upto }) {
  const bounds =
    `WHERE timestamp > toDateTime('${afterCursor}')` +
    (upto ? ` AND timestamp <= toDateTime('${upto}')` : '');
  const sql =
    `SELECT blob1 AS path, blob2 AS bucket, blob3 AS bot, SUM(_sample_interval) AS n ` +
    `FROM ${dataset} ${bounds} GROUP BY path, bucket, bot`;
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${account}/analytics_engine/sql`,
    { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: sql },
  );
  if (!res.ok) throw new Error(`AE SQL API ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return (await res.json()).data || [];
}
