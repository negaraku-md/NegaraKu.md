// accumulate-analytics.mjs — fold the Analytics Engine tail into the committed
// all-time snapshot before AE's ~90-day retention drops it.
//
// Run on a schedule (see .github/workflows/accumulate-analytics.yml) at least
// every ~85 days — daily in practice. Each run:
//   1. reads analytics/cumulative.json (pages folded up to `cursor`)
//   2. queries AE for hits in (cursor, now - 5min]  (the untallied tail;
//      the 5-min margin avoids missing late-ingested points)
//   3. adds them to pages, advances cursor to that upper bound
//   4. writes the snapshot back (the workflow commits it)
//
// Env: CF_ACCOUNT_ID, CF_API_TOKEN ("Account Analytics: Read"),
//      CF_AE_DATASET (default negaraku_analytics).
//
// Fail-safe: any query error leaves the snapshot untouched (no gaps, no
// double-count) and exits 0 — the next run retries. Never corrupts the store.

import {
  loadCumulative, saveCumulative, queryTail, addRow, chDateTime,
  loadArticleKeys, filterToArticles,
} from './lib/analytics-store.mjs';

const ACCOUNT = process.env.CF_ACCOUNT_ID;
const TOKEN = process.env.CF_API_TOKEN;
const DATASET = process.env.CF_AE_DATASET || 'negaraku_analytics';

async function main() {
  if (!ACCOUNT || !TOKEN) {
    console.log('[accumulate] no CF_ACCOUNT_ID / CF_API_TOKEN — nothing to do.');
    return;
  }
  const store = await loadCumulative();
  const upto = chDateTime(Date.now() - 5 * 60 * 1000); // now − 5 min (ingestion margin)
  if (upto <= store.cursor) {
    console.log('[accumulate] cursor already current — nothing to fold.');
    return;
  }

  let rows;
  try {
    rows = await queryTail({ account: ACCOUNT, token: TOKEN, dataset: DATASET, afterCursor: store.cursor, upto });
  } catch (err) {
    console.warn(`[accumulate] AE query failed, snapshot unchanged: ${err.message}`);
    return; // fail-safe: retry next run, no data lost
  }

  const keys = await loadArticleKeys(); // drop scanner/non-article noise if manifest present
  let added = 0;
  for (const r of rows) {
    if (keys && !keys.has(r.path)) continue;
    addRow(store.pages, r);
    added += Math.round(Number(r.n) || 0);
  }
  store.pages = filterToArticles(store.pages, keys); // prune any previously-stored noise
  store.cursor = upto;
  store.updatedAt = new Date().toISOString();
  await saveCumulative(store);
  console.log(
    `[accumulate] folded ${rows.length} row(s) (+${added} hits) up to ${upto} — ` +
      `${Object.keys(store.pages).length} article(s) all-time.`,
  );
}

main().catch((e) => {
  console.warn('[accumulate] unexpected error, snapshot unchanged:', e.message);
});
