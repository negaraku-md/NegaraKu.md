// ping-indexnow.mjs — notify IndexNow (Bing, Yandex, …) that URLs changed, so
// they re-crawl within minutes instead of waiting for the next sitemap sweep.
//
// IndexNow is a hosted-key protocol: the key lives at
//   https://negaraku.md/<key>.txt   (public/<key>.txt in this repo)
// and we POST { host, key, keyLocation, urlList } to the IndexNow endpoint.
//
// Modes:
//   node scripts/ping-indexnow.mjs <url> [<url> …]   — submit explicit URLs
//   node scripts/ping-indexnow.mjs --changed          — URLs from the last push's
//        changed knowledge/**.md (git diff INDEXNOW_BEFORE..HEAD), mapped to their
//        published locale URLs via the article manifest
//   node scripts/ping-indexnow.mjs --all              — every published URL (bulk;
//        chunked to 10k). Use sparingly (e.g. after a big launch).
//   add --dry to print the payload without calling the API.
//
// Fail-safe: no key file → skip (exit 0); API error → warn, exit 0. Never breaks
// a deploy.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HOST = (process.env.SITE_URL || 'https://negaraku.md').replace(/^https?:\/\//, '').replace(/\/$/, '');
const ENDPOINT = 'https://api.indexnow.org/IndexNow';
const DRY = process.argv.includes('--dry') || process.env.INDEXNOW_DRY_RUN === '1';
const LOCALE_PREFIX = (lang) => (lang === 'ms' ? '' : `/${lang}`);

// The key is the basename of public/<32-hex>.txt (also its content).
function findKey() {
  if (process.env.INDEXNOW_KEY) return process.env.INDEXNOW_KEY.trim();
  const dir = path.join(ROOT, 'public');
  try {
    const f = readdirSync(dir).find((n) => /^[0-9a-f]{8,128}\.txt$/i.test(n));
    if (f) return f.replace(/\.txt$/i, '');
  } catch { /* none */ }
  return null;
}

function manifest() {
  const p = path.join(ROOT, 'public', 'api', 'articles.json');
  if (!existsSync(p)) return [];
  try { return JSON.parse(readFileSync(p, 'utf8')).articles || []; } catch { return []; }
}

// A changed knowledge path → its published locale URL (or null if not live).
function urlForFile(rel, pub) {
  const m = rel.replace(/\\/g, '/').match(/^knowledge\/([^/]+)\/(.+?)(?:\.(ms|en|zh|ta|ja|ko))?\.md$/);
  if (!m) return null;
  const [, cat, slug, lang = 'ms'] = m;
  const key = `${cat}/${slug}#${lang}`;
  if (!pub.has(key)) return null; // that locale isn't published (draft/archived/missing)
  return `https://${HOST}${LOCALE_PREFIX(lang)}/${cat}/${slug}`;
}

function collectUrls() {
  const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  if (args.length) return args;

  const pub = new Set(
    manifest().filter((a) => a.status === 'published' && a.category && a.slug)
      .map((a) => `${a.category}/${a.slug}#${a.lang ?? 'ms'}`),
  );

  if (process.argv.includes('--all')) {
    return [...pub].map((k) => {
      const [base, lang] = k.split('#');
      return `https://${HOST}${LOCALE_PREFIX(lang)}/${base}`;
    });
  }

  // --changed (default): diff the last push.
  const before = process.env.INDEXNOW_BEFORE || 'HEAD~1';
  let files = [];
  try {
    files = execSync(`git diff --name-only --diff-filter=ACMR ${before} HEAD -- "knowledge/**/*.md"`, { cwd: ROOT, encoding: 'utf8' })
      .split('\n').map((s) => s.trim()).filter(Boolean);
  } catch (e) {
    console.warn(`[indexnow] git diff failed (${e.message}) — nothing to submit.`);
    return [];
  }
  const urls = new Set();
  for (const f of files) { const u = urlForFile(f, pub); if (u) urls.add(u); }
  return [...urls];
}

async function submit(key, urlList) {
  const keyLocation = `https://${HOST}/${key}.txt`;
  for (let i = 0; i < urlList.length; i += 10000) {
    const chunk = urlList.slice(i, i + 10000);
    const body = JSON.stringify({ host: HOST, key, keyLocation, urlList: chunk });
    if (DRY) { console.log(`[indexnow] DRY — would POST ${chunk.length} URL(s):\n${chunk.slice(0, 10).join('\n')}${chunk.length > 10 ? `\n… +${chunk.length - 10} more` : ''}`); continue; }
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body });
      console.log(`[indexnow] submitted ${chunk.length} URL(s) → ${res.status} ${res.statusText}`);
    } catch (err) {
      console.warn(`[indexnow] submit failed (non-fatal): ${err.message}`);
    }
  }
}

async function main() {
  const key = findKey();
  if (!key) { console.log('[indexnow] no key file in public/ — skipping.'); return; }
  const urls = collectUrls();
  if (!urls.length) { console.log('[indexnow] no URLs to submit.'); return; }
  console.log(`[indexnow] host ${HOST}, key ${key.slice(0, 8)}…, ${urls.length} URL(s)${DRY ? ' (dry-run)' : ''}.`);
  await submit(key, urls);
}

main().catch((e) => { console.warn('[indexnow] unexpected error (non-fatal):', e.message); });
