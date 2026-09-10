// pull-bing.mjs — archive Bing Webmaster Tools performance.
//
// Bing's arm of the analytics archive. Matters less for direct search than
// because Microsoft Copilot and ChatGPT-search read Bing's index — so this
// doubles as partial AI-search visibility. Writes analytics/bing.json in the
// same shape as gsc.json (byMonth merged forward + a latest totals/top-queries
// block), so the dashboard can render it beside Google.
//
// Auth is a single Bing Webmaster API key (Settings → API access in Bing WMT).
// Env: BING_API_KEY. Optional BING_SITE (default https://negaraku.md).
// Fail-safe: missing key or any error → snapshot kept, run stays green.

import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'analytics', 'bing.json');
const KEY = process.env.BING_API_KEY;
const SITE = process.env.BING_SITE || 'https://negaraku.md';
const BASE = 'https://ssl.bing.com/webmaster/api.svc/json';

const num = (v) => Math.round(Number(v) || 0);
// Bing serialises dates as "/Date(1699..)/" (ms since epoch) → "YYYY-MM".
function monthOf(d) {
  const m = /\/Date\((\d+)/.exec(String(d || ''));
  const ms = m ? Number(m[1]) : Date.parse(String(d || ''));
  return Number.isFinite(ms) ? new Date(ms).toISOString().slice(0, 7) : null;
}
// Read a field by any of several candidate names (Bing's casing varies).
const pick = (o, ...names) => { for (const n of names) if (o != null && o[n] != null) return o[n]; return undefined; };

async function call(method) {
  const url = `${BASE}/${method}?apikey=${encodeURIComponent(KEY)}&siteUrl=${encodeURIComponent(SITE)}`;
  const res = await fetch(url);
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${method} ${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
  // WCF JSON wraps the payload in { d: ... }.
  const d = json.d ?? json;
  return Array.isArray(d) ? d : (Array.isArray(d?.d) ? d.d : []);
}

async function loadPrev() {
  if (!existsSync(OUT)) return { byMonth: {} };
  try { return JSON.parse(await readFile(OUT, 'utf8')); } catch { return { byMonth: {} }; }
}

async function main() {
  if (!KEY) { console.log('[bing] no BING_API_KEY — nothing to pull.'); return; }

  let traffic, queries;
  try {
    [traffic, queries] = await Promise.all([call('GetRankAndTrafficStats'), call('GetQueryStats')]);
  } catch (err) {
    console.warn(`[bing] query failed, snapshot unchanged: ${err.message}`);
    return; // fail-safe
  }
  // Log the first row's keys once, so the real field names are visible if Bing
  // differs from the candidates below (same debugging aid the FB/GSC pulls used).
  if (traffic[0]) console.log('[bing] traffic row keys:', Object.keys(traffic[0]).join(', '));
  if (queries[0]) console.log('[bing] query row keys:', Object.keys(queries[0]).join(', '));

  // Totals + byMonth from the daily traffic stats.
  const prev = await loadPrev();
  const byMonth = { ...(prev.byMonth ?? {}) };
  const fresh = {};
  let totClicks = 0, totImpr = 0;
  for (const r of traffic) {
    const clicks = num(pick(r, 'Clicks', 'clicks'));
    const impr = num(pick(r, 'Impressions', 'impressions'));
    totClicks += clicks; totImpr += impr;
    const m = monthOf(pick(r, 'Date', 'date'));
    if (m) { const e = (fresh[m] ||= { clicks: 0, impressions: 0 }); e.clicks += clicks; e.impressions += impr; }
  }
  Object.assign(byMonth, fresh);

  const topQueries = queries
    .map((r) => ({
      query: String(pick(r, 'Query', 'query') ?? ''),
      clicks: num(pick(r, 'Clicks', 'clicks')),
      impressions: num(pick(r, 'Impressions', 'impressions')),
      position: Math.round((Number(pick(r, 'AvgImpressionPosition', 'avgImpressionPosition')) || 0) * 10) / 10,
    }))
    .filter((q) => q.query)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 25);

  const snapshot = {
    updatedAt: new Date().toISOString(),
    site: SITE,
    byMonth,
    latest: { totals: { clicks: totClicks, impressions: totImpr }, topQueries },
  };
  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(snapshot, null, 2) + '\n', 'utf8');
  console.log(`[bing] wrote ${path.relative(ROOT, OUT)} — ${totClicks} clicks · ${totImpr} impressions; ${Object.keys(byMonth).length} month(s) archived.`);
}

main().catch((e) => { console.warn('[bing] unexpected error, snapshot unchanged:', e.message); });
