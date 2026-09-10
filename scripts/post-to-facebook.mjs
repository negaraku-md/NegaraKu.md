// post-to-facebook.mjs — announce newly added articles on the NegaraKu.md
// Facebook Pages via the Graph API.
//
// Invoked by the GitHub Action with the list of added knowledge files:
//   node scripts/post-to-facebook.mjs knowledge/history/kemerdekaan-1957.md ...
// or pass them newline-separated via the CHANGED_FILES env var.
//
// Each article is posted once PER LANGUAGE, each to its OWN Page and in its own
// language: Bahasa Malaysia → facebook.com/negaraku.md ("/"), English →
// negaraku.md.en ("/en"), Chinese → negaraku.md.zh ("/zh"). See the PAGES map
// below; a language whose Page id is blank is skipped. A language's file is
// `<base>.<lang>.md`, or the master `<base>.md` when the master IS that language.
//
// Required env:
//   FB_PAGE_ACCESS_TOKEN    — a System-User token (GitHub secret) with a role on
//                             every Page; the script mints each Page's OWN token
//                             from it at runtime (see pageTokenFor). Each Page
//                             must be assigned to that system user.
// Optional:
//   FB_PAGE_ID_MS/EN/ZH     — override a Page id (defaults are in PAGES; Page ids
//                             are public, so they need not be secrets).
//                             FB_PAGE_ID is the legacy alias for the ms Page.
//   SITE_URL                — defaults to https://negaraku.md
//   FB_DRY_RUN=1            — log what would be posted, don't call the API

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import matter from 'gray-matter';
import {
  PAGES, LANGS, GRAPH, localePrefix,
  articleBases, langFile, isPublishedBase,
  hashtags, withUtm, articleUrl, pageTokenFor,
} from './lib/facebook.mjs';

const SITE_URL = process.env.SITE_URL ?? 'https://negaraku.md';
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const DRY_RUN = process.env.FB_DRY_RUN === '1';
// The commit the push started from. When set (the push trigger passes it), we
// announce only the TRANSITION to published — an article that was already
// published at this commit is skipped, so editing a live article never re-posts.
// Unset (manual workflow_dispatch with an explicit file list) → no baseline, so
// any currently-published file the caller named is posted.
const BEFORE_SHA = process.env.FB_BEFORE_SHA || '';
// Emoji prefixed to the title line so it stands out (FB post text can't be bold).
// Set to '' to drop it, or change the emoji here.
const TITLE_EMOJI = '📌 ';

function fileList() {
  const args = process.argv.slice(2);
  if (args.length) return args;
  return (process.env.CHANGED_FILES ?? '')
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

// Whether an article's master was ALREADY published at commit `sha`. Reads the
// master via `git show` (git always uses forward-slash paths, so `base` works
// as-is on any OS). A file absent at that commit — or any git error — counts as
// "not previously published" (so a brand-new published file still posts).
function wasPublishedAt(base, sha) {
  if (!sha) return false;
  try {
    const txt = execFileSync('git', ['show', `${sha}:${base}.md`], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    const data = matter(txt).data;
    return data.status === 'published' && !data.hidden;
  } catch {
    return false;
  }
}

// Expand the changed files into one target per (article, language): the file to
// read + the URL locale prefix. Deduped, so each article yields exactly its
// three language posts regardless of how many of its files changed. Skips any
// article whose master isn't published (drafts are never announced).
function targets(files) {
  const out = [];
  const seen = new Set();
  for (const base of articleBases(files)) {
    if (!isPublishedBase(base)) continue; // draft/unpublished/hidden — do not post
    if (wasPublishedAt(base, BEFORE_SHA)) continue; // already live before this push — an edit, not a debut
    for (const lang of LANGS) {
      if (!PAGES[lang]) continue; // no Page for this language yet — skip it
      const file = langFile(base, lang);
      const key = `${base}|${lang}`;
      if (existsSync(file) && !seen.has(key)) {
        seen.add(key);
        out.push({ file, lang, prefix: localePrefix(lang) });
      }
    }
  }
  return out;
}

// Build the {link, message} for a target, or null if the file lacks slug/category.
function buildPost(file, data, lang, prefix) {
  if (!data.slug || !data.category) {
    console.warn(`[fb] skip ${file}: missing slug/category`);
    return null;
  }
  return {
    link: withUtm(articleUrl(SITE_URL, prefix, data.category, data.slug), 'facebook', 'social'),
    // 📌 prefixes the title so it stands out above the summary (FB post text is
    // plain — no bold). Swap TITLE_EMOJI to change or drop it. Hashtags follow
    // the post's language.
    message: `${TITLE_EMOJI}${data.title}\n\n${data.summary}\n\n${hashtags(data, lang)}`,
  };
}

async function preview(t) {
  const p = buildPost(t.file, matter(await readFile(t.file, 'utf8')).data, t.lang, t.prefix);
  if (p) console.log(`[fb] ${DRY_RUN ? 'DRY_RUN' : 'no credentials'} — would post [${t.lang}] → page ${PAGES[t.lang]}:\n  ${p.link}\n  ${p.message}\n`);
}

async function post(t) {
  const p = buildPost(t.file, matter(await readFile(t.file, 'utf8')).data, t.lang, t.prefix);
  if (!p) return false;
  const pageId = PAGES[t.lang];
  let pageToken;
  try {
    pageToken = await pageTokenFor(pageId, TOKEN);
  } catch (err) {
    // One Page's token failing (e.g. not yet assigned to the system user) must
    // not abort the others — fail this target, let the rest post, job goes red.
    console.error(`[fb] FAILED [${t.lang}] mint token for page ${pageId}:`, err.message);
    return false;
  }
  const body = new URLSearchParams({ message: p.message, link: p.link, access_token: pageToken });
  const res = await fetch(`${GRAPH}/${pageId}/feed`, { method: 'POST', body });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error(`[fb] FAILED [${t.lang}] ${p.link}:`, JSON.stringify(json));
    return false;
  }
  console.log(`[fb] posted [${t.lang}] ${p.link} → ${json.id}`);
  return true;
}

async function main() {
  const ts = targets(fileList());
  if (!ts.length) {
    console.log('[fb] no new canonical articles to post.');
    return;
  }

  // Dry run / no token: log what would be posted, never call the API, exit 0.
  if (DRY_RUN || !TOKEN) {
    for (const t of ts) await preview(t);
    return;
  }

  let posted = 0;
  for (const t of ts) if (await post(t)) posted++;
  console.log(`[fb] done — ${posted}/${ts.length} posted.`);
  // Fail the job (red ❌) if any post failed — no more false green.
  if (posted !== ts.length) {
    console.error(`[fb] FAILED — only ${posted}/${ts.length} post(s) succeeded.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('[fb] error:', err);
  process.exit(1);
});
