// archive-article.mjs — close the obsolescence loop (lifecycle step 6).
//
// Retire a topic and point its URL at a successor. It flips the MASTER and every
// translation to `status: archived` + `hidden: true`, records `supersededBy` and
// the archive reason, and writes a per-locale 301 redirect so a once-indexed URL
// NEVER 404s (astro.config.mjs expands src/data/archive-redirects.json to all 13
// locales). Archived topics are already dropped from every listing by content.ts.
//
// Usage:
//   MERGE (301 to a successor):
//     node scripts/archive-article.mjs <category/slug> --into <category/slug> \
//          [--reason "..."] [--by <name>] [--apply]
//   TOMBSTONE (no successor — serve the page at 200 + noindex so the URL never
//   404s, kept out of listings/sitemap/search):
//     node scripts/archive-article.mjs <category/slug> --tombstone \
//          [--reason "..."] [--by <name>] [--apply]
//
//   (no --apply) dry-run: print the full plan, write nothing.
//   --apply                 perform it.
//
// HARD GATES (never silently skipped — the run aborts with a reason):
//   • the topic's master must exist and be in a live/archivable status
//     (published · needs-update · request-archive · in-archive · reviewed);
//     draft / in-review / in-redraft are refused (nothing public to retire).
//   • exactly one of --into / --tombstone. --into must resolve to a DIFFERENT,
//     published master (no redirect to a missing/non-public page, no self-redirect);
//     --tombstone takes no successor (nothing to redirect to) and keeps the page served.
//   • idempotent: an already-archived topic with the same target is a no-op.
//
// Only status/hidden/tombstone/supersededBy/requestedBy/requestReason/updated
// change — none are in the translation hash, so this is freshness-neutral.

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const REDIRECTS_JSON = path.join(ROOT, 'src', 'data', 'archive-redirects.json');
const ASTRO_CONFIG = path.join(ROOT, 'astro.config.mjs');
// All translation languages. `ms` is included because when a topic's master is
// en/zh/ta, its Malay edition lives at `slug.ms.md` (a translation) — omitting it
// would leave that one file un-archived and its /<slug> (ms) page out of sync.
const LANGS = ['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr'];
const ARCHIVABLE = new Set(['published', 'needs-update', 'request-archive', 'in-archive', 'reviewed']);

const today = () => new Date().toISOString().slice(0, 10);

function die(msg) {
  console.error(`\n[archive] ABORT: ${msg}\n`);
  process.exit(1);
}

// ---- args -----------------------------------------------------------------
const argv = process.argv.slice(2);
const apply = argv.includes('--apply');
const flag = (name) => {
  const i = argv.indexOf(name);
  return i >= 0 && i + 1 < argv.length ? argv[i + 1] : null;
};
const positional = argv.find((a) => !a.startsWith('--') && a.includes('/') && argv[argv.indexOf(a) - 1] !== '--into' && argv[argv.indexOf(a) - 1] !== '--reason' && argv[argv.indexOf(a) - 1] !== '--by');
const into = flag('--into');
const tombstone = argv.includes('--tombstone');
const reason = flag('--reason');
const by = flag('--by');

if (!positional) die('give the topic to archive as <category/slug> (e.g. energy/petronas).');
if (!into && !tombstone) die('give either --into <category/slug> (merge: 301 to a live successor) OR --tombstone (no successor: serve the page at 200 with an archived banner + noindex, so the URL never 404s).');
if (into && tombstone) die('--into and --tombstone are mutually exclusive — a tombstone has no successor to redirect to.');

const [cat, slug] = positional.split('/');
if (!cat || !slug) die(`bad topic path "${positional}" — expected <category/slug>.`);
let intoCat, intoSlug;
if (into) {
  [intoCat, intoSlug] = into.split('/');
  if (!intoCat || !intoSlug) die(`bad --into path "${into}" — expected <category/slug>.`);
  if (cat === intoCat && slug === intoSlug) die('cannot supersede a topic by itself.');
}

// ---- resolve files --------------------------------------------------------
const masterRel = `${cat}/${slug}.md`;
const masterAbs = path.join(KNOWLEDGE, cat, `${slug}.md`);
if (!existsSync(masterAbs)) die(`master not found: knowledge/${masterRel}`);

// ---- frontmatter helpers (regex line-edits; never reformat the whole block) ----
const getField = (raw, key) => {
  const m = raw.match(new RegExp(`^${key}:[ \\t]*"?([^"\\n]*)"?[ \\t]*$`, 'm'));
  return m ? m[1].trim() : null;
};
/** Replace `key: ...` in place, or insert right after the `status:` line. */
const setField = (raw, key, token) => {
  const re = new RegExp(`^${key}:.*$`, 'm');
  if (re.test(raw)) return raw.replace(re, `${key}: ${token}`);
  return raw.replace(/^status:.*$/m, (m) => `${m}\n${key}: ${token}`);
};
const yamlStr = (s) => `"${String(s).replace(/"/g, "'")}"`;

// Validate the successor is public before we point anyone at it (merge mode only).
let intoStatus = null;
if (into) {
  const intoMasterAbs = path.join(KNOWLEDGE, intoCat, `${intoSlug}.md`);
  if (!existsSync(intoMasterAbs)) die(`--into target not found: knowledge/${intoCat}/${intoSlug}.md`);
  intoStatus = getField(readFileSync(intoMasterAbs, 'utf8'), 'status') ?? 'published';
  if (intoStatus === 'archived' || intoStatus === 'draft' || intoStatus === 'in-review') {
    die(`--into target is "${intoStatus}", not public — refusing to redirect to it.`);
  }
}

// Gather the topic's files: master + any translations present.
const dirFiles = await readdir(path.join(KNOWLEDGE, cat));
const files = [masterRel];
for (const l of LANGS) {
  if (dirFiles.includes(`${slug}.${l}.md`)) files.push(`${cat}/${slug}.${l}.md`);
}

// ---- build the plan -------------------------------------------------------
const supersededByPath = into ? `/${intoCat}/${intoSlug}` : null;
const fromBase = `/${cat}/${slug}`;

const plan = [];
let alreadyArchived = 0;
for (const rel of files) {
  const abs = path.join(KNOWLEDGE, rel);
  let raw = await readFile(abs, 'utf8');
  const status = getField(raw, 'status') ?? 'published';
  if (status === 'archived') {
    alreadyArchived++;
    continue; // idempotent
  }
  if (!ARCHIVABLE.has(status)) {
    die(`${rel} is "${status}" — not archivable (expected one of: ${[...ARCHIVABLE].join(', ')}).`);
  }
  let next = raw;
  next = setField(next, 'status', '"archived"');
  if (tombstone) {
    // No successor: keep the page SERVED (not hidden) as a noindex tombstone.
    next = setField(next, 'hidden', 'false');
    next = setField(next, 'tombstone', 'true');
  } else {
    // Merge: drop from the site and 301 to the successor.
    next = setField(next, 'hidden', 'true');
    next = setField(next, 'supersededBy', yamlStr(supersededByPath));
  }
  if (by) next = setField(next, 'requestedBy', yamlStr(by));
  if (reason) next = setField(next, 'requestReason', yamlStr(reason));
  next = setField(next, 'updated', today());
  plan.push({ rel, abs, from: status, raw, next });
}

// ---- TOMBSTONE mode: no redirect; the page stays served (noindex) ----------
if (tombstone) {
  console.log(`\n[archive] ${apply ? 'APPLY' : 'DRY-RUN'} — tombstone ${fromBase} (no successor; served at 200 + noindex)`);
  console.log(`  files to flip: ${plan.length}${alreadyArchived ? ` (+${alreadyArchived} already archived, skipped)` : ''}`);
  for (const p of plan) console.log(`    ${p.from.padEnd(14)} → archived (tombstone)   ${p.rel}`);
  if (reason) console.log(`  reason: ${reason}`);
  if (by) console.log(`  by: ${by}`);
  if (plan.length === 0) { console.log('\n[archive] already archived — nothing to do.\n'); process.exit(0); }
  if (!apply) { console.log('\n[archive] dry-run only. Re-run with --apply to write.\n'); process.exit(0); }
  for (const p of plan) await writeFile(p.abs, p.next);
  console.log(`\n[archive] done — ${plan.length} file(s) tombstoned (served + noindex, kept out of listings/sitemap/search).`);
  console.log('[archive] next: node scripts/sync.mjs ; build on CI; commit (held for push).\n');
  process.exit(0);
}

// ---- MERGE mode: redirect collision check ---------------------------------
const redirData = JSON.parse(readFileSync(REDIRECTS_JSON, 'utf8'));
redirData.redirects ??= {};
const existingArchive = redirData.redirects[fromBase];
const configText = readFileSync(ASTRO_CONFIG, 'utf8');
const curatedOwns = configText.includes(`'${fromBase}'`) || configText.includes(`"${fromBase}"`);

// ---- report ---------------------------------------------------------------
console.log(`\n[archive] ${apply ? 'APPLY' : 'DRY-RUN'} — retire ${fromBase} → ${supersededByPath}`);
console.log(`  successor status: ${intoStatus}`);
console.log(`  files to flip: ${plan.length}${alreadyArchived ? ` (+${alreadyArchived} already archived, skipped)` : ''}`);
for (const p of plan) console.log(`    ${p.from.padEnd(14)} → archived   ${p.rel}`);
if (reason) console.log(`  reason: ${reason}`);
if (by) console.log(`  by: ${by}`);

if (existingArchive && existingArchive !== supersededByPath) {
  die(`a DIFFERENT archive redirect already exists for ${fromBase} → ${existingArchive}. Resolve by hand.`);
}
if (curatedOwns) {
  console.log(`  NOTE: a hand-written redirect in astro.config already owns ${fromBase} — it will win; the archive entry is redundant but harmless.`);
}
const redirectIsNew = existingArchive !== supersededByPath && !curatedOwns;
if (plan.length === 0 && !redirectIsNew) {
  console.log('\n[archive] already fully archived + redirected — nothing to do.\n');
  process.exit(0);
}

console.log(`  redirect: ${redirectIsNew ? 'ADD' : 'already present'}  ${fromBase} → ${supersededByPath}  (expands to all 13 locales)`);

if (!apply) {
  console.log('\n[archive] dry-run only. Re-run with --apply to write.\n');
  process.exit(0);
}

// ---- apply ----------------------------------------------------------------
for (const p of plan) await writeFile(p.abs, p.next);
if (redirectIsNew) {
  redirData.redirects[fromBase] = supersededByPath;
  // keep the map sorted for stable diffs
  const sorted = Object.fromEntries(Object.entries(redirData.redirects).sort(([a], [b]) => a.localeCompare(b)));
  redirData.redirects = sorted;
  await writeFile(REDIRECTS_JSON, JSON.stringify(redirData, null, 2) + '\n');
}
console.log(`\n[archive] done — ${plan.length} file(s) archived, redirect ${redirectIsNew ? 'added' : 'unchanged'}.`);
console.log('[archive] next: npm run check:links (0 broken) + build on CI; commit (held for push).\n');
