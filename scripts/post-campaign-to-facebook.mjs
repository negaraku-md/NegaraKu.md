// post-campaign-to-facebook.mjs — multi-post, multi-format EVENT campaigns on the
// NegaraKu.md Facebook Pages. Complements post-to-facebook.mjs (one debut link post
// per article): an event (Budget, election, ruling) needs a PHASED sequence of posts
// across the attention curve — see docs/plans/fb-event-campaign.md.
//
// Usage:
//   node scripts/post-campaign-to-facebook.mjs <campaign-id> [--only <postId>] [--lang en,ms] [--dry-run]
//   # reads campaigns/<campaign-id>/<lang>.json (one self-contained file per language)
//
// Each language file: { "lang": "en", "posts": [ { id, type, linkPath?, link?, message, notBefore? } ] }
//   type: "link" (message + a link) or "text" (message only). ("photo" = future.)
//   linkPath: site-relative path (e.g. "/en/economy/malaysia-budget-2027/"); or `link` for an absolute URL.
//   notBefore: ISO timestamp — the post is skipped until then (staged drip).
//
// Idempotent: every sent post is recorded in campaigns/<id>/.sent.json keyed `lang|postId`,
// so re-running never double-posts. Stage the series by re-running over days (notBefore
// gates each) or with --only.
//
// Required env: FB_PAGE_ACCESS_TOKEN (system-user token; the script mints each Page token).
// Optional:     SITE_URL (default https://negaraku.md), FB_DRY_RUN=1, FB_PAGE_ID_<LANG>.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { PAGES, GRAPH, pageTokenFor, gfetch, withUtm } from './lib/facebook.mjs';

const SITE_URL = process.env.SITE_URL ?? 'https://negaraku.md';
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const argv = process.argv.slice(2);
const DRY_RUN = process.env.FB_DRY_RUN === '1' || argv.includes('--dry-run');

function argVal(name) {
  const i = argv.indexOf(name);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : '';
}
const campaignId = argv.find((a) => !a.startsWith('--') && argv[argv.indexOf(a) - 1] !== '--only' && argv[argv.indexOf(a) - 1] !== '--lang');
const onlyPost = argVal('--only');
const langFilter = argVal('--lang') ? argVal('--lang').split(',').map((s) => s.trim()).filter(Boolean) : null;

if (!campaignId) {
  console.error('Usage: node scripts/post-campaign-to-facebook.mjs <campaign-id> [--only <postId>] [--lang en,ms] [--dry-run]');
  process.exit(2);
}
if (!TOKEN && !DRY_RUN) {
  console.error('FB_PAGE_ACCESS_TOKEN is required (or run with --dry-run / FB_DRY_RUN=1).');
  process.exit(2);
}

const dir = path.resolve('campaigns', campaignId);
if (!existsSync(dir)) {
  console.error(`No campaign directory: campaigns/${campaignId}`);
  process.exit(2);
}

const sentPath = path.join(dir, '.sent.json');
const sent = existsSync(sentPath) ? JSON.parse(readFileSync(sentPath, 'utf8')) : {};
const saveSent = () => writeFileSync(sentPath, JSON.stringify(sent, null, 2) + '\n');

const now = Date.now();
const langFiles = readdirSync(dir).filter((f) => f.endsWith('.json') && f !== '.sent.json');

let posted = 0;
let skipped = 0;
let failed = 0;

for (const file of langFiles) {
  let camp;
  try {
    camp = JSON.parse(readFileSync(path.join(dir, file), 'utf8'));
  } catch (e) {
    console.error(`[skip] ${file}: invalid JSON — ${e.message}`);
    continue;
  }
  const lang = camp.lang || path.basename(file, '.json');
  if (langFilter && !langFilter.includes(lang)) continue;
  const pageId = PAGES[lang];
  if (!pageId) {
    console.warn(`[skip] ${lang}: no Facebook Page configured`);
    continue;
  }

  for (const post of camp.posts || []) {
    if (onlyPost && post.id !== onlyPost) continue;
    const key = `${lang}|${post.id}`;
    if (sent[key]) { skipped++; continue; }
    if (post.notBefore && new Date(post.notBefore).getTime() > now) {
      console.log(`[wait] ${key}: not before ${post.notBefore}`);
      skipped++;
      continue;
    }
    if (!post.message) { console.warn(`[skip] ${key}: no message`); continue; }

    const body = { message: post.message };
    if (post.type === 'link') {
      const url = post.link || `${SITE_URL}${post.linkPath || ''}`;
      if (!post.link && !post.linkPath) { console.warn(`[skip] ${key}: link post without link/linkPath`); continue; }
      body.link = withUtm(url, 'facebook', 'social');
    }

    if (DRY_RUN) {
      console.log(`\n── [dry-run] ${key} → Page ${pageId} (${post.type})`);
      console.log(body.message);
      if (body.link) console.log(body.link);
      posted++;
      continue;
    }

    try {
      const pageToken = await pageTokenFor(pageId, TOKEN);
      const res = await gfetch(
        `${GRAPH}/${pageId}/feed`,
        { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...body, access_token: pageToken }) },
        { label: key },
      );
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.id) {
        console.error(`[fail] ${key}: ${JSON.stringify(json)}`);
        failed++;
        continue;
      }
      sent[key] = { postId: json.id, at: new Date().toISOString() };
      saveSent();
      console.log(`[ok] ${key} → ${json.id}`);
      posted++;
    } catch (e) {
      console.error(`[fail] ${key}: ${e.message}`);
      failed++;
    }
  }
}

console.log(`\n[campaign ${campaignId}] ${DRY_RUN ? 'DRY-RUN ' : ''}posted ${posted}, skipped ${skipped}, failed ${failed}`);
if (failed && !DRY_RUN) process.exit(1);
