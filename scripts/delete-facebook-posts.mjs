// delete-facebook-posts.mjs — delete Facebook Page posts by story id via the Graph API.
//
// Posts published by the system user through /{page-id}/feed do NOT appear in any
// Facebook management UI (timeline, Content Library, Business Suite), so they can only
// be removed with a Graph API DELETE. This is the counterpart to post-to-facebook.mjs.
//
// Usage (manual dispatch or local): pass full story ids "{page-id}_{story-id}", either as
// args or newline/space-separated in the STORY_IDS env var:
//   node scripts/delete-facebook-posts.mjs 1227711683752433_122... 1382294921622880_122...
//
// Required env:
//   FB_PAGE_ACCESS_TOKEN  — the System-User token (GitHub secret) with a role on every
//                           Page; each Page's own token is minted from it at runtime.
// Optional:
//   FB_DRY_RUN=1          — log what would be deleted, don't call the API.

const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const DRY_RUN = process.env.FB_DRY_RUN === '1';
const GRAPH = 'https://graph.facebook.com/v21.0';

function idList() {
  const args = process.argv.slice(2);
  const raw = args.length ? args.join(' ') : process.env.STORY_IDS ?? '';
  return raw
    .split(/[\s,]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

// Each Page post is deleted with THAT Page's own access token. FB_PAGE_ACCESS_TOKEN
// (a System-User token with a role on the Page) mints it; cached per Page per run.
const pageTokenCache = new Map();
async function pageTokenFor(pageId) {
  if (pageTokenCache.has(pageId)) return pageTokenCache.get(pageId);
  const url = `${GRAPH}/${pageId}?fields=access_token&access_token=${encodeURIComponent(TOKEN)}`;
  const res = await fetch(url);
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.access_token) {
    throw new Error(`could not mint a Page token for page ${pageId} (is the Page assigned to the system user?): ${JSON.stringify(json)}`);
  }
  pageTokenCache.set(pageId, json.access_token);
  return json.access_token;
}

async function del(storyId) {
  // Full id is "{page-id}_{post-id}"; the page id prefix tells us which Page token to use.
  const pageId = storyId.split('_')[0];
  if (!pageId || !storyId.includes('_')) {
    console.error(`[fb-del] skip "${storyId}": not a full {page-id}_{post-id} story id`);
    return false;
  }
  let pageToken;
  try {
    pageToken = await pageTokenFor(pageId);
  } catch (err) {
    console.error(`[fb-del] FAILED mint token for page ${pageId}:`, err.message);
    return false;
  }
  const url = `${GRAPH}/${storyId}?access_token=${encodeURIComponent(pageToken)}`;
  const res = await fetch(url, { method: 'DELETE' });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.success === false) {
    console.error(`[fb-del] FAILED ${storyId}:`, JSON.stringify(json));
    return false;
  }
  console.log(`[fb-del] deleted ${storyId}`);
  return true;
}

async function main() {
  const ids = idList();
  if (!ids.length) {
    console.log('[fb-del] no story ids given — nothing to delete.');
    return;
  }
  if (DRY_RUN || !TOKEN) {
    for (const id of ids) console.log(`[fb-del] ${DRY_RUN ? 'DRY_RUN' : 'no token'} — would delete ${id} (page ${id.split('_')[0]})`);
    return;
  }
  let ok = 0;
  for (const id of ids) if (await del(id)) ok++;
  console.log(`[fb-del] done — ${ok}/${ids.length} deleted.`);
  if (ok !== ids.length) {
    console.error(`[fb-del] FAILED — only ${ok}/${ids.length} deleted.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('[fb-del] error:', err);
  process.exit(1);
});
