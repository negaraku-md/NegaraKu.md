// fb-delete-phantom.mjs — delete the wrong-language "phantom" Facebook posts that
// were created when .th.md/.vi.md files were mis-treated as master bases (fixed in
// fb-queue.mjs). A phantom manifest key is `<base>#<lang>` where <base> ends in a
// locale suffix (.ms/.en/.zh/.ta/.ja/.ko/.th/.vi) — those posted a translated
// title/summary to the wrong Page. This deletes each such post via the Graph API
// and removes its manifest entry so the (now-fixed) poster re-posts correctly.
//
// Env:
//   FB_PAGE_ACCESS_TOKEN  — system-user token (mints each Page's token). Required for real deletes.
//   FB_DRY_RUN=1          — list what would be deleted; no API calls, no token needed.
import { GRAPH, PAGES, pageTokenFor } from './lib/facebook.mjs';
import { loadManifest, saveManifest } from './lib/fb-queue.mjs';

const DRY_RUN = process.env.FB_DRY_RUN === '1';
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const SUFFIX = /\.(ms|en|zh|ta|ja|ko|th|vi)$/;
// Optional: also delete posts made at/after this ISO timestamp (e.g. redo a day's
// batch after fixing the OG cards). Removing their manifest entries lets the poster
// re-post them cleanly.
const SINCE = process.env.FB_DELETE_SINCE || '';

async function main() {
  const manifest = loadManifest();
  const posted = manifest.posted || {};
  const phantoms = Object.entries(posted)
    .map(([key, v]) => {
      const base = key.slice(0, key.lastIndexOf('#'));
      const lang = key.slice(key.lastIndexOf('#') + 1);
      return { key, base, lang, post_id: v.post_id, at: v.at };
    })
    .filter((e) => e.post_id && (SUFFIX.test(e.base) || (SINCE && e.at && e.at >= SINCE)));

  console.log(`[fb-cleanup] selector: phantom${SINCE ? ` + since ${SINCE}` : ''} — posts to delete: ${phantoms.length}`);
  for (const p of phantoms) console.log(`  ${p.at || '?'}  ${p.key}  → ${p.post_id}  (page ${PAGES[p.lang] || '?'})`);

  if (!phantoms.length) { console.log('[fb-cleanup] nothing to do.'); return; }
  if (DRY_RUN || !TOKEN) {
    console.log(`\n[fb-cleanup] ${DRY_RUN ? 'DRY_RUN' : 'no token'} — no deletions performed.`);
    return;
  }

  let ok = 0, fail = 0;
  for (const p of phantoms) {
    const pageId = PAGES[p.lang];
    if (!pageId) { console.warn(`[fb-cleanup] no PAGES[${p.lang}] — skip ${p.key}`); continue; }
    let pageToken;
    try { pageToken = await pageTokenFor(pageId, TOKEN); }
    catch (e) { console.error(`[fb-cleanup] token FAIL ${p.lang}:`, e.message); fail++; continue; }
    const res = await fetch(`${GRAPH}/${p.post_id}?access_token=${encodeURIComponent(pageToken)}`, { method: 'DELETE' });
    const j = await res.json().catch(() => ({}));
    if (res.ok && j.success !== false) {
      delete posted[p.key];         // drop the entry so the fixed poster re-posts the real base
      saveManifest(manifest);       // persist after EACH delete so a mid-run failure never loses progress
      ok++;
      console.log(`[fb-cleanup] deleted ${p.key} (${p.post_id})`);
    } else {
      fail++;
      console.error(`[fb-cleanup] DELETE FAILED ${p.key} (${p.post_id}):`, JSON.stringify(j));
    }
  }
  console.log(`[fb-cleanup] done — deleted ${ok}, failed ${fail}. ${Object.keys(posted).length} entries remain.`);
  if (fail) process.exit(1);
}
main().catch((e) => { console.error('[fb-cleanup] error:', e); process.exit(1); });
