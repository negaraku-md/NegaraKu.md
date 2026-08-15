// Visitor analytics — build step.
//
// Pulls the counts logged by the Cloudflare Worker (worker/src/index.js) out of
// Analytics Engine via its SQL API and folds them into the file the site reads,
// public/api/analytics.json, in the shape documented in docs/ANALYTICS.md:
//
//   { "<category>/<slug>": { readers, search:{total,byBot}, ai:{total,byBot} } }
//
// Honest by construction:
//   • No Cloudflare credentials → we DO NOTHING (leave any existing file, or
//     none) so the site keeps rendering "not tracked yet". The build never
//     fails just because analytics isn't wired.
//   • Only buckets with real hits are written; empty ones are omitted so the
//     card shows "—" rather than a fake 0.
//
// Env:
//   CF_ACCOUNT_ID          Cloudflare account id (required to run)
//   CF_API_TOKEN           token with "Account Analytics: Read" (required)
//   CF_AE_DATASET          Analytics Engine dataset   (default negaraku_analytics)
//   ANALYTICS_WINDOW_DAYS  rolling window to sum over  (default 90)

import { mkdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.join('public', 'api', 'analytics.json');
const ACCOUNT = process.env.CF_ACCOUNT_ID;
const TOKEN = process.env.CF_API_TOKEN;
const DATASET = process.env.CF_AE_DATASET || 'negaraku_analytics';
const DAYS = Number(process.env.ANALYTICS_WINDOW_DAYS || 90);

async function main() {
  if (!ACCOUNT || !TOKEN) {
    // Report what's already there so a first run without creds is transparent.
    let existing = 'none';
    try { existing = `${Object.keys(JSON.parse(await readFile(OUT, 'utf8'))).length} page(s)`; } catch {}
    console.log(`[analytics] no CF_ACCOUNT_ID / CF_API_TOKEN — skipping (existing file: ${existing}). Site shows "not tracked yet".`);
    return;
  }

  const sql =
    `SELECT blob1 AS path, blob2 AS bucket, blob3 AS bot, SUM(_sample_interval) AS n ` +
    `FROM ${DATASET} ` +
    `WHERE timestamp > NOW() - INTERVAL '${DAYS}' DAY ` +
    `GROUP BY path, bucket, bot`;

  let rows;
  try {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT}/analytics_engine/sql`,
      { method: 'POST', headers: { Authorization: `Bearer ${TOKEN}` }, body: sql }
    );
    if (!res.ok) throw new Error(`AE SQL API ${res.status}: ${(await res.text()).slice(0, 300)}`);
    const json = await res.json();
    rows = json.data || [];
  } catch (err) {
    // Never fail the build over analytics — keep whatever file already exists.
    console.warn(`[analytics] query failed, leaving existing file: ${err.message}`);
    return;
  }

  const out = {};
  for (const r of rows) {
    const key = r.path;
    const n = Math.round(Number(r.n) || 0);
    if (!key || key === 'home' || n <= 0) continue;
    const e = (out[key] ||= { readers: 0, search: { total: 0, byBot: {} }, ai: { total: 0, byBot: {} } });
    if (r.bucket === 'readers') e.readers += n;
    else if (r.bucket === 'search') { e.search.total += n; e.search.byBot[r.bot] = (e.search.byBot[r.bot] || 0) + n; }
    else if (r.bucket === 'ai') { e.ai.total += n; e.ai.byBot[r.bot] = (e.ai.byBot[r.bot] || 0) + n; }
  }

  // Drop empty buckets so the card renders "—" instead of a fake 0.
  const clean = {};
  for (const [key, e] of Object.entries(out)) {
    const row = {};
    if (e.readers > 0) row.readers = e.readers;
    if (e.search.total > 0) row.search = e.search;
    if (e.ai.total > 0) row.ai = e.ai;
    if (Object.keys(row).length) clean[key] = row;
  }

  await mkdir(path.dirname(OUT), { recursive: true });
  const sorted = Object.fromEntries(Object.entries(clean).sort(([a], [b]) => a.localeCompare(b)));
  await writeFile(OUT, JSON.stringify(sorted, null, 2) + '\n', 'utf8');
  console.log(`[analytics] wrote ${OUT} — ${Object.keys(sorted).length} page(s) over ${DAYS}d.`);
}

main().catch((e) => { console.warn('[analytics] unexpected error, skipping:', e.message); });
