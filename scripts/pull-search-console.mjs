// pull-search-console.mjs — archive Google Search Console performance.
//
// The Google arm of the analytics archive. Authenticates as the gsc-reader
// service account (GSC_SA_KEY, a JSON key), queries the Search Console API for
// the domain property, and writes analytics/gsc.json:
//   • byMonth   — clicks/impressions per calendar month, MERGED forward so the
//                 record outlives GSC's own 16-month retention (the whole point)
//   • latest    — last-90-day totals, per-category split, and top queries, for
//                 the dashboard panel (pillar grouping happens in the view)
//
// No dependency: the service-account JWT is signed with node:crypto and
// exchanged for an access token. Category is read from each result URL's path.
//
// Env: GSC_SA_KEY (the service-account JSON, verbatim). Optional GSC_SITE
// (default sc-domain:negaraku.md). Fail-safe: missing/blocked → snapshot kept.

import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'analytics', 'gsc.json');
const SITE = process.env.GSC_SITE || 'sc-domain:negaraku.md';
const API = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`;

const b64url = (buf) => Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const ymd = (d) => new Date(d).toISOString().slice(0, 10);

function signJwt(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now, exp: now + 3600,
  }));
  const data = `${header}.${claims}`;
  const sig = crypto.createSign('RSA-SHA256').update(data).sign(sa.private_key);
  return `${data}.${b64url(sig)}`;
}

async function accessToken(sa) {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: signJwt(sa) }),
  });
  const j = await res.json().catch(() => ({}));
  if (!res.ok || !j.access_token) throw new Error(`token exchange failed: ${JSON.stringify(j).slice(0, 300)}`);
  return j.access_token;
}

async function query(token, body) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`query ${res.status}: ${JSON.stringify(j).slice(0, 300)}`);
  return j.rows || [];
}

// Category = first path segment after any locale prefix (matches the site).
function categoryOf(pageUrl) {
  try {
    const seg = new URL(pageUrl).pathname.replace(/^\/+|\/+$/g, '').split('/');
    if (['en', 'zh', 'ms'].includes(seg[0])) seg.shift();
    return seg[0] || 'home';
  } catch { return 'home'; }
}

async function loadPrev() {
  if (!existsSync(OUT)) return { byMonth: {} };
  try { return JSON.parse(await readFile(OUT, 'utf8')); } catch { return { byMonth: {} }; }
}

async function main() {
  const raw = process.env.GSC_SA_KEY;
  if (!raw) { console.log('[gsc] no GSC_SA_KEY — nothing to pull.'); return; }
  // Accept the service-account JSON either verbatim or base64-encoded (a common
  // way people store multi-line keys in a secret).
  const parseKey = (s) => {
    const candidates = [s];
    try { candidates.push(Buffer.from(s, 'base64').toString('utf8')); } catch { /* not base64 */ }
    for (const c of candidates) {
      try { const o = JSON.parse(c); if (o && o.client_email && o.private_key) return o; } catch { /* try next */ }
    }
    return null;
  };
  const sa = parseKey(raw.trim());
  if (!sa) { console.warn('[gsc] GSC_SA_KEY is not a valid service-account JSON (raw or base64) — skipping.'); return; }

  const today = Date.now();
  const end = ymd(today - 3 * 864e5);          // GSC lags ~2-3 days
  const start90 = ymd(today - 90 * 864e5);
  const start16mo = ymd(today - 490 * 864e5);  // ~16 months (GSC max)

  let token, byDate, byPage, byQuery, totalsRows;
  try {
    token = await accessToken(sa);
    [byDate, byPage, byQuery, totalsRows] = await Promise.all([
      query(token, { startDate: start16mo, endDate: end, dimensions: ['date'], rowLimit: 500 }),
      query(token, { startDate: start90, endDate: end, dimensions: ['page'], rowLimit: 1000 }),
      query(token, { startDate: start90, endDate: end, dimensions: ['query'], rowLimit: 25 }),
      query(token, { startDate: start90, endDate: end, rowLimit: 1 }),
    ]);
  } catch (err) {
    console.warn(`[gsc] query failed, snapshot unchanged: ${err.message}`);
    return; // fail-safe
  }

  // byMonth — merge fresh months over the committed record (older months persist).
  const prev = await loadPrev();
  const byMonth = { ...(prev.byMonth ?? {}) };
  const fresh = {};
  for (const r of byDate) {
    const m = (r.keys?.[0] || '').slice(0, 7); // YYYY-MM
    if (!m) continue;
    const e = (fresh[m] ||= { clicks: 0, impressions: 0 });
    e.clicks += Math.round(r.clicks || 0);
    e.impressions += Math.round(r.impressions || 0);
  }
  Object.assign(byMonth, fresh);

  // latest — per-category split + top queries over the trailing 90 days.
  const byCategory = {};
  for (const r of byPage) {
    const cat = categoryOf(r.keys?.[0] || '');
    if (cat === 'home') continue;
    const e = (byCategory[cat] ||= { clicks: 0, impressions: 0 });
    e.clicks += Math.round(r.clicks || 0);
    e.impressions += Math.round(r.impressions || 0);
  }
  const topQueries = byQuery.map((r) => ({
    query: r.keys?.[0] || '',
    clicks: Math.round(r.clicks || 0),
    impressions: Math.round(r.impressions || 0),
    position: Math.round((r.position || 0) * 10) / 10,
  }));
  const t = totalsRows[0] || {};
  const totals = {
    clicks: Math.round(t.clicks || 0),
    impressions: Math.round(t.impressions || 0),
    ctr: Math.round((t.ctr || 0) * 1000) / 10, // %
    position: Math.round((t.position || 0) * 10) / 10,
  };

  const snapshot = {
    updatedAt: new Date().toISOString(),
    property: SITE,
    byMonth,
    latest: { window: { start: start90, end }, totals, byCategory, topQueries },
  };
  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(snapshot, null, 2) + '\n', 'utf8');
  console.log(`[gsc] wrote ${path.relative(ROOT, OUT)} — 90d: ${totals.clicks} clicks · ${totals.impressions} impressions · pos ${totals.position}; ${Object.keys(byMonth).length} month(s) archived.`);
}

main().catch((e) => { console.warn('[gsc] unexpected error, snapshot unchanged:', e.message); });
