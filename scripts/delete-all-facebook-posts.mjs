// delete-all-facebook-posts.mjs — enumerate and delete EVERY published post on each
// NegaraKu language Page. Used for the clean-slate relaunch of the Facebook rollout.
//
// Posts published by the system user don't appear in the Business-Suite UI, so the
// only way to wipe a Page is via the Graph API: page through the Page's own posts,
// collect every story id, then DELETE each one with that Page's token.
//
// Safety: this does NOTHING destructive unless FB_DELETE_ALL_CONFIRM === 'DELETE ALL'.
// Otherwise it only enumerates and prints a per-Page count (a dry run).
//
// Env:
//   FB_PAGE_ACCESS_TOKEN   — system-user token with a role on every Page (secret).
//   FB_DELETE_ALL_CONFIRM  — must equal 'DELETE ALL' to actually delete.
//   FB_DRY_RUN=1           — force enumerate + count only (no deletes), even if confirmed.
//   FB_ONLY_LANGS          — comma-separated langs to limit to (default: all 13).
import { GRAPH, LANGS, PAGES, pageTokenFor, gfetch } from './lib/facebook.mjs';

const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const CONFIRMED = process.env.FB_DELETE_ALL_CONFIRM === 'DELETE ALL';
const DRY = process.env.FB_DRY_RUN === '1' || !CONFIRMED;
const ONLY = (process.env.FB_ONLY_LANGS || '').split(',').map((s) => s.trim()).filter(Boolean);

// Collect every story id on a Page. Try published_posts (the Page's own posts); if it
// returns nothing or errors, fall back to feed. Follows paging.next to the end.
async function allPostIds(pageId, pageToken) {
  for (const edge of ['published_posts', 'feed']) {
    const ids = [];
    let url = `${GRAPH}/${pageId}/${edge}?fields=id&limit=100&access_token=${encodeURIComponent(pageToken)}`;
    let errored = false;
    while (url) {
      let res, j;
      try {
        res = await gfetch(url, {}, { label: `${edge} ${pageId}` });
        j = await res.json().catch(() => ({}));
      } catch (e) {
        console.error(`[del-all] ${edge} fetch failed (page ${pageId}): ${e.message}`);
        errored = true; break;
      }
      if (!res.ok) {
        console.error(`[del-all] ${edge} error (page ${pageId}): ${JSON.stringify(j).slice(0, 200)}`);
        errored = true; break;
      }
      for (const p of j.data || []) if (p.id) ids.push(p.id);
      url = j.paging?.next || '';
    }
    if (ids.length) return [...new Set(ids)];
    if (!errored) return []; // edge worked but the Page is genuinely empty
    // else: try the next edge
  }
  return [];
}

async function del(storyId, pageToken) {
  const res = await gfetch(
    `${GRAPH}/${storyId}?access_token=${encodeURIComponent(pageToken)}`,
    { method: 'DELETE' }, { label: `del ${storyId}` },
  );
  const j = await res.json().catch(() => ({}));
  if (!res.ok || j.success === false) {
    console.error(`[del-all] FAILED ${storyId}: ${JSON.stringify(j).slice(0, 160)}`);
    return false;
  }
  return true;
}

async function main() {
  if (!TOKEN) { console.error('[del-all] no FB_PAGE_ACCESS_TOKEN — aborting.'); process.exit(1); }
  const langs = LANGS.filter((l) => PAGES[l] && (!ONLY.length || ONLY.includes(l)));
  console.log(`[del-all] mode: ${DRY ? 'DRY RUN (enumerate + count only)' : 'DELETE (confirmed)'} — ${langs.length} Page(s): ${langs.join(', ')}\n`);

  const perPage = [];
  let grand = 0, okAll = 0, failAll = 0;
  for (const lang of langs) {
    const pageId = PAGES[lang];
    let pageToken;
    try {
      pageToken = await pageTokenFor(pageId, TOKEN);
    } catch (e) {
      console.error(`[del-all] [${lang}] token mint FAILED (page ${pageId}): ${e.message}`);
      perPage.push(`${lang.padEnd(3)} page ${pageId}: TOKEN-FAIL`);
      continue;
    }
    const ids = await allPostIds(pageId, pageToken);
    grand += ids.length;
    console.log(`[del-all] [${lang}] enumerated ${ids.length} post(s)`);
    if (DRY) { perPage.push(`${lang.padEnd(3)} page ${pageId}: ${ids.length} post(s)`); continue; }
    let ok = 0, fail = 0;
    for (const id of ids) { if (await del(id, pageToken)) ok++; else fail++; }
    okAll += ok; failAll += fail;
    console.log(`[del-all] [${lang}] deleted ${ok}/${ids.length}${fail ? ` (FAILED ${fail})` : ''}`);
    perPage.push(`${lang.padEnd(3)} page ${pageId}: ${ids.length} found → deleted ${ok}${fail ? `, FAILED ${fail}` : ''}`);
  }

  console.log('\n=== SUMMARY ===');
  perPage.forEach((l) => console.log('  ' + l));
  console.log(`TOTAL enumerated: ${grand}`);
  if (DRY) {
    console.log('\nDRY RUN — nothing deleted. Re-run with FB_DELETE_ALL_CONFIRM="DELETE ALL" to delete.');
    return;
  }
  console.log(`DELETED ${okAll}/${grand}${failAll ? ` — FAILED ${failAll}` : ''}.`);
  if (failAll) process.exit(1);
}

main().catch((e) => { console.error('[del-all] error:', e); process.exit(1); });
