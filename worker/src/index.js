// NegaraKu.md — Visitors analytics edge logger.
//
// A Cloudflare Worker bound to `negaraku.md/*`. On every request it classifies
// the User-Agent into readers / search / ai (see classify.js), writes one
// Analytics Engine data point for HTML page views, and then passes the request
// straight through to the origin (GitHub Pages) unchanged.
//
// Why a Worker: GitHub Pages is static and never sees the User-Agent, so it
// cannot tell a human from Googlebot from ClaudeBot. Cloudflare does. The build
// step (scripts/build-analytics.mjs) later queries the Analytics Engine SQL API
// and folds these points into public/api/analytics.json.
//
// Passthrough note: `fetch(request)` from a Worker to its own zone is routed to
// the ORIGIN, not back through this Worker, so there is no loop.

import { classify, pathKey, isPageView } from './classify.js';

export default {
  /**
   * @param {Request} request
   * @param {{ AE: { writeDataPoint: (o: any) => void } }} env
   * @param {{ waitUntil: (p: Promise<any>) => void }} ctx
   */
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      // Only count real page navigations: GET, HTML-ish path, not an asset.
      if (request.method === 'GET' && isPageView(url.pathname)) {
        const { bucket, bot } = classify(request.headers.get('user-agent') || '');
        if (bucket !== 'skip' && env.AE) {
          const key = pathKey(url.pathname);
          // blob1=key, blob2=bucket, blob3=bot, blob4=locale ; index by key so
          // the SQL API can GROUP BY it cheaply. doubles[0]=1 is one hit.
          const locale = url.pathname.startsWith('/en/') ? 'en'
            : url.pathname.startsWith('/zh/') ? 'zh' : 'ms';
          ctx.waitUntil(Promise.resolve().then(() =>
            env.AE.writeDataPoint({
              blobs: [key, bucket, bot, locale],
              doubles: [1],
              indexes: [key.slice(0, 96)],
            })
          ));
        }
      }
    } catch {
      // Never let logging break the page — fall through to the origin.
    }
    return fetch(request);
  },
};
