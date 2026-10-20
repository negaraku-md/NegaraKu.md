// pull-ga4.mjs — archive Google Analytics 4 into analytics/ga4.json.
//
// The behavioural arm of the analytics archive (GSC = search demand, GA4 = what
// consented visitors actually do). Authenticates as a service account
// (GA_SA_KEY, a JSON key) with the Analytics Data API read scope, runs a handful
// of runReport calls against the property, and writes:
//   • byMonth — users/sessions/views per calendar month, MERGED forward so the
//               record outlives any retention window (same idea as gsc.json)
//   • latest  — trailing-90-day totals + acquisition channels, countries, devices
//               and top pages, for the /analytics "Google Analytics" panel
//
// No dependency: the service-account JWT is signed with node:crypto and exchanged
// for an access token — identical to pull-search-console.mjs, only the scope and
// API differ.
//
// Env: GA_SA_KEY (service-account JSON, verbatim or base64) — falls back to
// GSC_SA_KEY so the SAME service account that reads Search Console can read GA4
// (just enable the Analytics Data API on its project + add it as a Viewer on the
// property; no new key or secret needed). GA_PROPERTY_ID (numeric; defaults to the
// NegaraKu.md property). Fail-safe: missing creds or any API error → the committed
// snapshot is kept, exit 0. Never breaks a build.
//
// GA4 only receives data from visitors who ACCEPT the cookie banner (Consent
// Mode v2 defaults to denied), so these numbers are a consented subset — smaller
// than the first-party edge analytics by design. See GoogleAnalytics.astro.

import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'analytics', 'ga4.json');
const PROPERTY = (process.env.GA_PROPERTY_ID || '559513299').replace(/\D/g, '');
const API = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY}:runReport`;

const b64url = (buf) => Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const ymd = (d) => new Date(d).toISOString().slice(0, 10);
const num = (s) => Math.round(Number(s) || 0);

function signJwt(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
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

// One runReport. Returns the raw rows array ([] when the property has no data yet).
async function report(token, body) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`runReport ${res.status}: ${JSON.stringify(j).slice(0, 300)}`);
  return j.rows || [];
}

// Run a report but never throw — a failed sub-panel just comes back empty.
async function safe(token, label, body) {
  try { return await report(token, body); }
  catch (e) { console.warn(`[ga4] ${label} failed (non-fatal): ${e.message}`); return []; }
}

const dim1 = (r) => r.dimensionValues?.[0]?.value || '';
const met = (r, i = 0) => num(r.metricValues?.[i]?.value);
// [label, metric] pairs, biggest first, top N — for the bar lists.
const pairs = (rows, n = 12) => rows.map((r) => [dim1(r), met(r)]).filter(([l, v]) => l && v > 0).sort((a, b) => b[1] - a[1]).slice(0, n);

async function loadPrev() {
  if (!existsSync(OUT)) return { byMonth: {} };
  try { return JSON.parse(await readFile(OUT, 'utf8')); } catch { return { byMonth: {} }; }
}

function parseKey(raw) {
  const s = raw.trim();
  const candidates = [s];
  try { candidates.push(Buffer.from(s, 'base64').toString('utf8')); } catch { /* not base64 */ }
  for (const c of candidates) {
    try { const o = JSON.parse(c); if (o && o.client_email && o.private_key) return o; } catch { /* try next */ }
  }
  return null;
}

async function main() {
  const raw = process.env.GA_SA_KEY || process.env.GSC_SA_KEY;
  if (!raw) { console.log('[ga4] no GA_SA_KEY / GSC_SA_KEY — nothing to pull.'); return; }
  const sa = parseKey(raw);
  if (!sa) { console.warn('[ga4] GA_SA_KEY is not a valid service-account JSON (raw or base64) — skipping.'); return; }

  const today = Date.now();
  const end = ymd(today - 864e5);          // GA4 finalises ~1 day back
  const start90 = ymd(today - 90 * 864e5);
  const start16mo = ymd(today - 490 * 864e5);
  const r90 = [{ startDate: start90, endDate: end }];

  let token, totalsRows, byMonthRows, chanRows, countryRows, deviceRows, pageRows;
  try {
    token = await accessToken(sa);
    totalsRows = await report(token, {
      dateRanges: r90,
      metrics: [{ name: 'totalUsers' }, { name: 'sessions' }, { name: 'screenPageViews' }, { name: 'averageSessionDuration' }, { name: 'engagementRate' }],
    });
  } catch (err) {
    console.warn(`[ga4] base query failed, snapshot unchanged: ${err.message}`);
    return; // fail-safe — a bad key/permission keeps the committed snapshot
  }

  [byMonthRows, chanRows, countryRows, deviceRows, pageRows] = await Promise.all([
    safe(token, 'byMonth', { dateRanges: [{ startDate: start16mo, endDate: end }], dimensions: [{ name: 'yearMonth' }], metrics: [{ name: 'totalUsers' }, { name: 'sessions' }, { name: 'screenPageViews' }], orderBys: [{ dimension: { dimensionName: 'yearMonth' } }], limit: 36 }),
    safe(token, 'channels', { dateRanges: r90, dimensions: [{ name: 'sessionDefaultChannelGroup' }], metrics: [{ name: 'sessions' }], orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 12 }),
    safe(token, 'countries', { dateRanges: r90, dimensions: [{ name: 'country' }], metrics: [{ name: 'totalUsers' }], orderBys: [{ metric: { metricName: 'totalUsers' }, desc: true }], limit: 12 }),
    safe(token, 'devices', { dateRanges: r90, dimensions: [{ name: 'deviceCategory' }], metrics: [{ name: 'sessions' }], orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 6 }),
    safe(token, 'pages', { dateRanges: r90, dimensions: [{ name: 'pagePath' }], metrics: [{ name: 'screenPageViews' }], orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }], limit: 15 }),
  ]);

  // byMonth — merge fresh months over the committed record (older months persist).
  const prev = await loadPrev();
  const byMonth = { ...(prev.byMonth ?? {}) };
  for (const r of byMonthRows) {
    const ym = dim1(r); // 'YYYYMM'
    if (!/^\d{6}$/.test(ym)) continue;
    byMonth[`${ym.slice(0, 4)}-${ym.slice(4)}`] = { users: met(r, 0), sessions: met(r, 1), views: met(r, 2) };
  }

  const t = totalsRows[0];
  const totals = {
    users: met(t, 0), sessions: met(t, 1), views: met(t, 2),
    avgEngagementSec: num(t?.metricValues?.[3]?.value),
    engagementRate: Math.round((Number(t?.metricValues?.[4]?.value) || 0) * 1000) / 10, // %
  };

  const snapshot = {
    updatedAt: new Date().toISOString(),
    property: `properties/${PROPERTY}`,
    byMonth,
    latest: {
      window: { start: start90, end },
      totals,
      byChannel: pairs(chanRows, 12),
      byCountry: pairs(countryRows, 12),
      byDevice: pairs(deviceRows, 6),
      topPages: pairs(pageRows, 15),
    },
  };
  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(snapshot, null, 2) + '\n', 'utf8');
  console.log(`[ga4] wrote ${path.relative(ROOT, OUT)} — 90d: ${totals.users} users · ${totals.sessions} sessions · ${totals.views} views; ${Object.keys(byMonth).length} month(s) archived.`);
}

main().catch((e) => { console.warn('[ga4] unexpected error, snapshot unchanged:', e.message); });
