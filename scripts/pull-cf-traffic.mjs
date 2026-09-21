// pull-cf-traffic.mjs — pull Cloudflare's zone HTTP analytics (GraphQL) for the
// /analytics "Traffic explorer": the rich, filterable current-traffic snapshot
// that mirrors Cloudflare's own Domain Dashboard (country · device · browser ·
// OS · path · status · cache), plus the `visits` measure.
//
// Why a separate live snapshot: Cloudflare's adaptive dataset is the source of
// truth for raw edge traffic (every request, bots included), but on the FREE
// plan it only retains ~24–72h. So this runs at BUILD time and writes an
// ephemeral snapshot to public/api/cf-traffic.json — no archive, no fold. The
// long-term trends and the CURATED (human, bot-filtered) view come from our own
// Analytics Engine pipeline (build-analytics.mjs); the two are shown side by
// side under a source toggle on /analytics.
//
// Fail-safe by construction: missing creds or any API error → write a small
// { empty:true } stub and exit 0. Never breaks a build.
//
// Env:
//   CF_API_TOKEN   token with **Zone → Analytics → Read** (in addition to the
//                  Account Analytics:Read the AE reads use)
//   CF_ZONE_ID     the zone tag (d815f…); see docs/ANALYTICS.md
//   CF_TRAFFIC_HOURS  trailing window, default 24, capped 72 (free-plan retention)
//   SITE_URL       default https://negaraku.md (host label only)

import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'api', 'cf-traffic.json');
const TOKEN = process.env.CF_API_TOKEN;
const ZONE = process.env.CF_ZONE_ID;
const HOURS = Math.min(72, Math.max(1, parseInt(process.env.CF_TRAFFIC_HOURS || '24', 10) || 24));
const HOST = (process.env.SITE_URL || 'https://negaraku.md').replace(/^https?:\/\//, '').replace(/\/$/, '');
const ENDPOINT = 'https://api.cloudflare.com/client/v4/graphql';

async function writeStub(reason) {
  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify({ updatedAt: new Date().toISOString(), hours: HOURS, host: HOST, empty: true, reason }, null, 2) + '\n', 'utf8');
  console.log(`[cf-traffic] wrote empty stub (${reason}).`);
}

// When we have no creds (typical local dev), keep a hand-seeded snapshot if one
// is present (public/api is gitignored, so this is local-only) so the UI stays
// previewable; otherwise write the empty stub. Real API errors still stub, to
// surface a misconfigured token rather than silently serving stale data.
async function preserveOrStub(reason) {
  if (existsSync(OUT)) {
    try {
      const cur = JSON.parse(await readFile(OUT, 'utf8'));
      if (cur.seed === true) { console.log(`[cf-traffic] ${reason} — keeping local seed (${OUT}).`); return; }
    } catch { /* fall through to stub */ }
  }
  return writeStub(reason);
}

// One adaptive-groups query. `sel` is the selection set inside the group node
// (e.g. "count sum{visits} dimensions{clientCountryName}"). Returns the group
// array, or throws.
async function gql({ sel, filter = '', limit = 5000, orderBy = 'count_DESC' }) {
  const since = new Date(Date.now() - HOURS * 3600 * 1000).toISOString();
  const until = new Date().toISOString();
  const q =
    `query($z:String!,$s:Time!,$u:Time!){viewer{zones(filter:{zoneTag:$z}){` +
    `httpRequestsAdaptiveGroups(limit:${limit},filter:{datetime_geq:$s,datetime_leq:$u${filter}},orderBy:[${orderBy}]){${sel}}` +
    `}}}`;
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: q, variables: { z: ZONE, s: since, u: until } }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const j = await res.json();
  if (j.errors?.length) throw new Error(j.errors.map((e) => e.message).join('; ').slice(0, 200));
  return j.data.viewer.zones[0]?.httpRequestsAdaptiveGroups || [];
}

// Run a query but never throw — a failed panel just comes back empty.
async function safe(label, opts, map) {
  try {
    const rows = await gql(opts);
    return rows.map(map);
  } catch (e) {
    console.warn(`[cf-traffic] ${label} query failed (non-fatal): ${e.message}`);
    return [];
  }
}

const HTML = ',edgeResponseContentTypeName:"html"'; // strip css/png/md asset noise
const statusClass = (n) => `${Math.floor(Number(n) / 100)}xx`;

async function main() {
  if (!TOKEN || !ZONE) return preserveOrStub('no CF_API_TOKEN / CF_ZONE_ID');

  // Headline totals (html page loads).
  let totals = { count: 0, visits: 0 };
  try {
    const t = await gql({ sel: 'count sum{visits}', filter: HTML, limit: 1 });
    totals = { count: t[0]?.count || 0, visits: t[0]?.sum?.visits || 0 };
  } catch (e) {
    // A failing totals query with creds present almost always means the token
    // lacks Zone Analytics:Read — surface it clearly, then stub out.
    console.warn(`[cf-traffic] totals query failed: ${e.message}`);
    return writeStub(`api error: ${e.message}`);
  }

  // The cube: country × device × browser × OS (html), count + visits. Powers the
  // Country/Device/Browser/OS panels with full client-side cross-filtering.
  const cube = await safe('cube',
    { sel: 'count sum{visits} dimensions{clientCountryName clientDeviceType userAgentBrowser userAgentOS}', filter: HTML, limit: 5000 },
    (r) => [r.dimensions.clientCountryName || '', r.dimensions.clientDeviceType || '', r.dimensions.userAgentBrowser || '', r.dimensions.userAgentOS || '', r.count || 0, r.sum?.visits || 0]);

  // Top pages, country-crossed (so the Top-pages panel filters by country too).
  const paths = await safe('paths',
    { sel: 'count sum{visits} dimensions{clientCountryName clientRequestPath}', filter: HTML, limit: 1500 },
    (r) => [r.dimensions.clientCountryName || '', r.dimensions.clientRequestPath || '', r.count || 0, r.sum?.visits || 0]);

  // Status codes (all content — a 404/301 breakdown is useful), country-crossed.
  const status = await safe('status',
    { sel: 'count dimensions{clientCountryName edgeResponseStatus}', filter: '', limit: 2000 },
    (r) => [r.dimensions.clientCountryName || '', statusClass(r.dimensions.edgeResponseStatus), r.count || 0]);

  // Cache status (html), country-crossed.
  const cache = await safe('cache',
    { sel: 'count dimensions{clientCountryName cacheStatus}', filter: HTML, limit: 1000 },
    (r) => [r.dimensions.clientCountryName || '', r.dimensions.cacheStatus || '', r.count || 0]);

  // HTTP protocol (html), country-crossed.
  const proto = await safe('proto',
    { sel: 'count dimensions{clientCountryName clientRequestHTTPProtocol}', filter: HTML, limit: 500 },
    (r) => [r.dimensions.clientCountryName || '', r.dimensions.clientRequestHTTPProtocol || '', r.count || 0]);

  // Per-day mini trend (html) — only a few points on the free window.
  const daily = await safe('daily',
    { sel: 'count sum{visits} dimensions{date}', filter: HTML, limit: 90, orderBy: 'date_ASC' },
    (r) => [r.dimensions.date || '', r.count || 0, r.sum?.visits || 0]);

  const out = { updatedAt: new Date().toISOString(), hours: HOURS, host: HOST, totals, cube, paths, status, cache, proto, daily };
  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(out) + '\n', 'utf8');
  console.log(`[cf-traffic] wrote ${OUT} — ${cube.length} cube rows, ${paths.length} paths, totals ${totals.count} req / ${totals.visits} visits (last ${HOURS}h).`);
}

main().catch((e) => { console.warn('[cf-traffic] unexpected error (non-fatal):', e.message); return writeStub(`unexpected: ${e.message}`); });
