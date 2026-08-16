// build-analytics.mjs — write the Visitors data the site renders,
// public/api/analytics.json, as an ALL-TIME count:
//
//   displayed = committed snapshot (analytics/cumulative.json, all hits up to
//               its cursor)  +  live AE tail (hits since the cursor)
//
// The snapshot survives Cloudflare Analytics Engine's ~90-day retention (it is
// folded forward by scripts/accumulate-analytics.mjs); the live tail keeps a
// fresh deploy up to the minute. See docs/ANALYTICS.md.
//
// Honest by construction:
//   • No CF credentials → serve the committed snapshot as-is (still all-time,
//     just not topped up with the newest tail). Never fails the build.
//   • Empty buckets are omitted so the card shows "—", never a fake 0.
//   • Only real-article keys are kept — scanner/probe traffic is dropped.
//
// Env: CF_ACCOUNT_ID, CF_API_TOKEN, CF_AE_DATASET (default negaraku_analytics).

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import {
  loadCumulative, queryTail, addRow, clonePages, cleanPages,
  loadArticleKeys, filterToArticles, OUT_FILE,
} from './lib/analytics-store.mjs';

const ACCOUNT = process.env.CF_ACCOUNT_ID;
const TOKEN = process.env.CF_API_TOKEN;
const DATASET = process.env.CF_AE_DATASET || 'negaraku_analytics';

async function main() {
  const store = await loadCumulative();
  const pages = clonePages(store.pages); // start from the all-time snapshot

  // Top up with the live tail since the snapshot's cursor (best-effort).
  if (ACCOUNT && TOKEN) {
    try {
      const rows = await queryTail({ account: ACCOUNT, token: TOKEN, dataset: DATASET, afterCursor: store.cursor, upto: null });
      for (const r of rows) addRow(pages, r);
      console.log(`[analytics] snapshot + ${rows.length} live tail row(s) since ${store.cursor}.`);
    } catch (err) {
      console.warn(`[analytics] live tail query failed, serving snapshot only: ${err.message}`);
    }
  } else {
    console.log('[analytics] no CF creds — serving the committed all-time snapshot.');
  }

  const keys = await loadArticleKeys();
  const clean = cleanPages(filterToArticles(pages, keys));

  await mkdir(path.dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, JSON.stringify(clean, null, 2) + '\n', 'utf8');
  console.log(`[analytics] wrote ${OUT_FILE} — ${Object.keys(clean).length} article(s) (all-time).`);
}

main().catch((e) => { console.warn('[analytics] unexpected error, skipping:', e.message); });
