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
import { deviceInfo } from './device.js';
import { handleQuery } from './query.js';

// Locale of a path from its first segment. ms is the default (no prefix); every
// other public locale lives under /<code>/. Keep in sync with LOCALES in
// src/lib/i18n.ts — a missing code silently mis-attributes that locale's traffic
// to Malay (the ko/ta/ja bug fixed 2026-09-27: en/zh/ta/ja were listed, ko/th
// were not, so /ko and /th hits counted as ms).
const VIEW_LOCALES = ['en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id'];
function localeOf(pathname) {
  const seg = (pathname || '').split('/')[1];
  return VIEW_LOCALES.includes(seg) ? seg : 'ms';
}

export default {
  /**
   * @param {Request} request
   * @param {{ AE: { writeDataPoint: (o: any) => void } }} env
   * @param {{ waitUntil: (p: Promise<any>) => void }} ctx
   */
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);

      // Live analytics query (contributor-only): POST /_a/q runs a whitelisted
      // Analytics Engine group-by in real time (see query.js). Short-circuits —
      // never touches the origin or the pageview logger.
      if (url.pathname === '/_a/q') {
        return handleQuery(request, env);
      }

      // Engagement + click beacon at /_a/e (POST). Two shapes, both cookieless:
      //   • engagement on page-leave: { p, t, s }  → dwell + max scroll ('engage')
      //   • link click:               { c:1, p, u, k } → what readers open next
      // Short-circuits — this path has no origin to hit.
      if (request.method === 'POST' && url.pathname === '/_a/e') {
        try {
          const b = await request.json();
          const p = String(b.p || '');
          const key = pathKey(p);

          // Link-click row: blob2='click', blob1=from-article, blob3=kind
          // (internal|outbound), blob4=dest (article key for internal, hostname
          // for outbound — never a full URL/query, so no PII). Ignored by every
          // pageview/daily aggregator (they only sum readers/search/ai buckets).
          if (b.c) {
            const kind = b.k === 'outbound' ? 'outbound' : 'internal';
            let dest = String(b.u || '').slice(0, 120);
            if (kind === 'internal') dest = pathKey(dest);
            if (env.AE && dest) {
              env.AE.writeDataPoint({ blobs: [key, 'click', kind, dest], doubles: [1], indexes: [dest.slice(0, 96)] });
            }
            return new Response(null, { status: 204 });
          }
          const t = Math.max(0, Math.min(3600, Math.round(Number(b.t) || 0))); // cap 1h
          const s = Math.max(0, Math.min(100, Math.round(Number(b.s) || 0)));  // 0–100%
          if (env.AE && key && key !== 'home' && t > 0) {
            const locale = localeOf(p);
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
          // blob6=source, blob7=country, blob8=region, blob9=city, blob10=device,
          // blob11=browser, blob12=os ; index by key so the SQL API can GROUP BY
          // it cheaply. doubles[0]=1 is one hit. channel/source are the human
          // referral source (search/ai/social/…) — only for readers; '' for bots.
          // country/region/city come from Cloudflare's edge geo (request.cf);
          // device/browser/os are coarse UA buckets — the pivot dimensions.
          const locale = localeOf(url.pathname);
          const { channel, source } = bucket === 'readers'
            ? classifyReferrer(request.headers.get('referer'), url)
            : { channel: '', source: '' };
          const cf = request.cf || {};
          const country = cf.country || '';                    // ISO-2, e.g. MY
          const region = cf.regionCode || cf.region || '';     // state/region (may be '')
          const city = cf.city || '';                          // may be '' in some regions
          const { device, browser, os } = deviceInfo(request.headers.get('user-agent') || '');
          ctx.waitUntil(Promise.resolve().then(() =>
            env.AE.writeDataPoint({
              blobs: [key, bucket, bot, locale, channel, source, country, region, city, device, browser, os],
              doubles: [1],
              indexes: [key.slice(0, 96)],
            })
          ));
        }
      }
    } catch {
      // Never let logging break the page — fall through to the origin.
    }

    // Edge-cache cacheable GETs via the Cache API. The site is static (GitHub
    // Pages), but this Worker is on negaraku.md/* and intercepts every request
    // (for the UA analytics above), so Cloudflare's own edge cache sits BEHIND
    // the Worker and never serves these pages — the hit rate sat at ~11% and
    // every page hit origin. `cf: { cacheEverything }` on the subrequest does NOT
    // fix this for a same-zone Worker, so we keep an explicit edge-cache entry:
    // on a hit we return it without touching origin; on a miss we fetch, store,
    // and serve. The pageview is still logged above on EVERY request (hit or
    // miss), so analytics is unaffected. Dynamic endpoints bypass: /_a/* is
    // short-circuited earlier; /api/* and /cdn-cgi/* are never cached.
    const u = new URL(request.url);
    const p = u.pathname;
    if (request.method !== 'GET' || p.startsWith('/api/') || p.startsWith('/_a/') || p.startsWith('/cdn-cgi/')) {
      return fetch(request);
    }
    const cache = caches.default;
    const hit = await cache.match(request);
    if (hit) return hit;
    const resp = await fetch(request);
    // Only cache successful, cookieless responses (GitHub Pages HTML is cookieless).
    if (resp.ok && !resp.headers.has('set-cookie')) {
      const immutable = p.startsWith('/_astro/');
      const isAsset = immutable || /\.(?:woff2?|css|js|mjs|map|png|jpe?g|svg|webp|avif|ico|gif)$/i.test(p);
      const cached = new Response(resp.body, resp);
      if (!isAsset) {
        // HTML/pages: cache at the EDGE only (s-maxage) and keep the browser
        // revalidating, so a deploy + purge is visible at once — never a stale
        // browser copy. Content-hashed assets keep their far-future origin header.
        cached.headers.set('Cache-Control', 'public, max-age=0, s-maxage=600, stale-while-revalidate=60');
      }
      ctx.waitUntil(cache.put(request, cached.clone()));
      return cached;
    }
    return resp;
  },
};
