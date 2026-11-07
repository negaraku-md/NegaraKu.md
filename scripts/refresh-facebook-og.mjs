// refresh-facebook-og.mjs — force Facebook to re-fetch the Open Graph card for
// already-posted articles whose cards were FIXED, so the live posts stop showing
// the stale/broken image.
//
// Why: two OG-card bugs were cached by Facebook at post time —
//   1. CJK (zh/ja/ko) summaries rendered as tofu boxes (normal-weight CJK had no
//      font until a later build); and
//   2. breadcrumbs for 13 subcategories (restaurants, income-tax, …) showed the
//      raw English key instead of a localized label.
// Both are fixed in the current build, but Facebook keeps its own cached copy of
// each shared URL's OG tags/image until asked to re-scrape. This script issues the
// Graph API scrape (`POST /?id=<url>&scrape=true`) for the AFFECTED posted URLs,
// which makes Facebook re-pull the (now-correct) card.
//
// TARGETED — only posts that were actually affected are refreshed:
//   • any post in a CJK language (zh/ja/ko)  — the summary-tofu fix; OR
//   • any post whose article subcategory is one of the newly-localized clusters —
//     the breadcrumb fix.
//
// Run order matters: deploy the corrected cards FIRST (so R2 serves the fixed
// PNGs), THEN run this. Re-scraping before the fix is live just re-caches the bug.
//
// Required env:
//   FB_PAGE_ACCESS_TOKEN  — the System-User token (GitHub secret); this script
//                           mints each Page's own token from it, like the posters.
// Optional:
//   SITE_URL              — defaults to https://negaraku.md
//   FB_DRY_RUN=1          — list the URLs that WOULD be refreshed, call nothing.
//   REFRESH_LIMIT=<n>     — cap the number of refreshes (debugging).

import { readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import {
  PAGES, GRAPH, localePrefix, langFile, withUtm, articleUrl, pageTokenFor, gfetch,
} from './lib/facebook.mjs';

const SITE_URL = process.env.SITE_URL ?? 'https://negaraku.md';
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const DRY_RUN = process.env.FB_DRY_RUN === '1';
const LIMIT = Number(process.env.REFRESH_LIMIT) || 0;
const POSTED_FILE = 'analytics/posted.json';

// Languages whose summary rendered as tofu before the CJK font fix.
const CJK_LANGS = new Set(['zh', 'ja', 'ko']);
// Subcategory clusters that gained a localized breadcrumb label (were English).
const AFFECTED_SUBCATS = new Set([
  'restaurants', 'cuisines', 'dishes', 'drinks', 'ingredients', 'income-tax',
  'islamic-finance', 'literature', 'regional', 'religion', 'growth',
  'telecommunications', 'traditional-medicine',
]);

async function frontmatter(file, cache) {
  if (cache.has(file)) return cache.get(file);
  let data = null;
  try { data = matter(await readFile(file, 'utf8')).data; } catch { data = null; }
  cache.set(file, data);
  return data;
}

async function collectTargets() {
  let posted;
  try { posted = JSON.parse(await readFile(POSTED_FILE, 'utf8')).posted || {}; }
  catch (e) { throw new Error(`cannot read ${POSTED_FILE}: ${e.message}`); }

  const fmCache = new Map();
  const out = [];
  const seen = new Set();
  for (const key of Object.keys(posted)) {
    const hash = key.lastIndexOf('#');
    if (hash < 0) continue;
    const base = key.slice(0, hash);          // knowledge/<cat>/<slug>
    const lang = key.slice(hash + 1);         // ms | en | zh | …
    if (!base.startsWith('knowledge/') || !PAGES[lang]) continue;

    const data = await frontmatter(langFile(base, lang), fmCache);
    if (!data || !data.slug || !data.category) continue;
    const sub = Array.isArray(data.subcategory) ? data.subcategory[0] : data.subcategory;

    const affected = CJK_LANGS.has(lang) || (sub && AFFECTED_SUBCATS.has(sub));
    if (!affected) continue;

    const url = withUtm(articleUrl(SITE_URL, localePrefix(lang), data.category, data.slug), 'facebook', 'social');
    const dedupe = `${lang}|${url}`;
    if (seen.has(dedupe)) continue;
    seen.add(dedupe);
    out.push({ lang, url, reason: CJK_LANGS.has(lang) ? 'cjk' : `subcat:${sub}` });
  }
  return out;
}

// Ask Facebook to re-scrape one URL's OG tags/image.
async function rescrape(url, pageToken, lang) {
  const body = new URLSearchParams({ id: url, scrape: 'true', access_token: pageToken });
  const res = await gfetch(`${GRAPH}/`, { method: 'POST', body }, { label: `scrape ${lang}` });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(JSON.stringify(json));
  return json; // { id, title, image: [...], updated_time, … }
}

async function main() {
  let targets = await collectTargets();
  if (LIMIT > 0) targets = targets.slice(0, LIMIT);

  console.log(`[fb-refresh] ${targets.length} affected posted URL(s) to re-scrape`);
  const byLang = targets.reduce((a, t) => ((a[t.lang] = (a[t.lang] || 0) + 1), a), {});
  console.log('[fb-refresh] by language:', JSON.stringify(byLang));

  if (!targets.length) return;

  if (DRY_RUN || !TOKEN) {
    console.log(`[fb-refresh] ${DRY_RUN ? 'DRY_RUN' : 'no FB_PAGE_ACCESS_TOKEN'} — listing only, no API calls:`);
    for (const t of targets) console.log(`  [${t.lang}] (${t.reason}) ${t.url}`);
    return;
  }

  const tokenCache = new Map();
  const pageToken = async (lang) => {
    if (!tokenCache.has(lang)) tokenCache.set(lang, await pageTokenFor(PAGES[lang], TOKEN));
    return tokenCache.get(lang);
  };

  let ok = 0, fail = 0;
  for (const t of targets) {
    try {
      await rescrape(t.url, await pageToken(t.lang), t.lang);
      ok++;
      if (ok % 25 === 0) console.log(`[fb-refresh] …${ok}/${targets.length} refreshed`);
    } catch (err) {
      fail++;
      console.error(`[fb-refresh] FAIL [${t.lang}] ${t.url}: ${err.message}`);
    }
    await new Promise((r) => setTimeout(r, 300)); // gentle pacing for Graph limits
  }
  console.log(`[fb-refresh] done — ${ok} refreshed, ${fail} failed, of ${targets.length}.`);
  if (fail) process.exit(1);
}

main().catch((err) => { console.error('[fb-refresh] error:', err); process.exit(1); });
