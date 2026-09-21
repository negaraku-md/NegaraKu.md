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
  queryDailyTotals, addDayRow, replaceDays, queryDailyAiBots, addAiBotRow,
} from './lib/analytics-store.mjs';

const ACCOUNT = process.env.CF_ACCOUNT_ID;
const TOKEN = process.env.CF_API_TOKEN;
const DATASET = process.env.CF_AE_DATASET || 'negaraku_analytics';
// One-time backfill: recompute the per-day trend series over AE's ~90-day
// retention window and REPLACE those days (idempotent). Run once at launch so
// the trend charts have immediate history; normal runs then fold forward daily.
const SEED_SERIES = process.argv.includes('--seed-series');

// Build a fresh per-day series from daily AE rows (used by the seed backfill).
function seriesFromRows(rows) {
  const s = {};
  for (const r of rows) addDayRow(s, r);
  return s;
}

async function main() {
  if (!ACCOUNT || !TOKEN) {
    console.log('[accumulate] no CF_ACCOUNT_ID / CF_API_TOKEN — nothing to do.');
    return;
  }
  const store = await loadCumulative();

  if (SEED_SERIES) {
    // Backfill the last 90 days of the daily series, replacing those day buckets.
    const from = chDateTime(Date.now() - 90 * 24 * 60 * 60 * 1000);
    const upto = chDateTime(Date.now() - 5 * 60 * 1000);
    try {
      const dayRows = await queryDailyTotals({ account: ACCOUNT, token: TOKEN, dataset: DATASET, afterCursor: from, upto });
      const fresh = seriesFromRows(dayRows);
      try {
        const botRows = await queryDailyAiBots({ account: ACCOUNT, token: TOKEN, dataset: DATASET, afterCursor: from, upto });
        for (const r of botRows) addAiBotRow(fresh, r);
      } catch (e) { console.warn(`[accumulate] seed AI-bot query failed (daily totals kept): ${e.message}`); }
      replaceDays((store.series ||= {}), fresh);
      store.updatedAt = new Date().toISOString();
      await saveCumulative(store);
      console.log(`[accumulate] seeded daily series over last 90d — ${Object.keys(store.series).length} day(s) now stored.`);
    } catch (err) {
      console.warn(`[accumulate] series seed failed, snapshot unchanged: ${err.message}`);
    }
    return;
  }

  const fromCursor = store.cursor; // window start for BOTH the per-page and daily folds
  const upto = chDateTime(Date.now() - 5 * 60 * 1000); // now − 5 min (ingestion margin)
  if (upto <= fromCursor) {
    console.log('[accumulate] cursor already current — nothing to fold.');
    return;
  }

  let rows;
  try {
    rows = await queryTail({ account: ACCOUNT, token: TOKEN, dataset: DATASET, afterCursor: fromCursor, upto });
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

  // Fold the daily trend series over the SAME window (site-level, isolated so a
  // daily-query failure never blocks the per-page accumulation below).
  try {
    const dayRows = await queryDailyTotals({ account: ACCOUNT, token: TOKEN, dataset: DATASET, afterCursor: fromCursor, upto });
    store.series ||= {};
    for (const r of dayRows) addDayRow(store.series, r);
    console.log(`[accumulate] folded ${dayRows.length} daily row(s) into the trend series.`);
  } catch (err) {
    console.warn(`[accumulate] daily series fold failed (per-page fold kept): ${err.message}`);
  }
  try {
    const botRows = await queryDailyAiBots({ account: ACCOUNT, token: TOKEN, dataset: DATASET, afterCursor: fromCursor, upto });
    store.series ||= {};
    for (const r of botRows) addAiBotRow(store.series, r);
    console.log(`[accumulate] folded ${botRows.length} AI-bot daily row(s).`);
  } catch (err) {
    console.warn(`[accumulate] AI-bot daily fold failed: ${err.message}`);
  }

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
