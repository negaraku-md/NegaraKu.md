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
import { classifyReferrer } from './referrer.js';

export default {
  /**
   * @param {Request} request
   * @param {{ AE: { writeDataPoint: (o: any) => void } }} env
   * @param {{ waitUntil: (p: Promise<any>) => void }} ctx
   */
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);

      // Engagement beacon: the page sends navigator.sendBeacon('/_a/e', {p,t,s})
      // on page-leave. Record dwell (t, seconds) + max scroll (s, %) as an
      // 'engage' row, then short-circuit — this path has no origin to hit.
      if (request.method === 'POST' && url.pathname === '/_a/e') {
        try {
          const b = await request.json();
          const p = String(b.p || '');
          const key = pathKey(p);
          const t = Math.max(0, Math.min(3600, Math.round(Number(b.t) || 0))); // cap 1h
          const s = Math.max(0, Math.min(100, Math.round(Number(b.s) || 0)));  // 0–100%
          if (env.AE && key && key !== 'home' && t > 0) {
            const locale = p.startsWith('/en/') ? 'en' : p.startsWith('/zh/') ? 'zh' : 'ms';
            // blob2='engage' marks the row so the pageview aggregator ignores it;
            // doubles carry dwell seconds + scroll %, weighted per sample at query time.
            env.AE.writeDataPoint({ blobs: [key, 'engage', '', locale], doubles: [t, s], indexes: [key.slice(0, 96)] });
          }
        } catch { /* malformed beacon — ignore */ }
        return new Response(null, { status: 204 });
      }

      // Only count real page navigations: GET, HTML-ish path, not an asset.
      if (request.method === 'GET' && isPageView(url.pathname)) {
        const { bucket, bot } = classify(request.headers.get('user-agent') || '');
        if (bucket !== 'skip' && env.AE) {
          const key = pathKey(url.pathname);
          // blob1=key, blob2=bucket, blob3=bot, blob4=locale, blob5=channel,
          // blob6=source ; index by key so the SQL API can GROUP BY it cheaply.
          // doubles[0]=1 is one hit. channel/source are the human referral
          // source (search/ai/social/…) — only for readers; '' for bots.
          const locale = url.pathname.startsWith('/en/') ? 'en'
            : url.pathname.startsWith('/zh/') ? 'zh' : 'ms';
          const { channel, source } = bucket === 'readers'
            ? classifyReferrer(request.headers.get('referer'), url)
            : { channel: '', source: '' };
          ctx.waitUntil(Promise.resolve().then(() =>
            env.AE.writeDataPoint({
              blobs: [key, bucket, bot, locale, channel, source],
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
