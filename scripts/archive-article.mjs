// archive-article.mjs — close the obsolescence loop (lifecycle step 6).
//
// Retire a topic and point its URL at a successor. It flips the MASTER and every
// translation to `status: archived` + `hidden: true`, records `supersededBy` and
// the archive reason, and writes a per-locale 301 redirect so a once-indexed URL
// NEVER 404s (astro.config.mjs expands src/data/archive-redirects.json to all 13
// locales). Archived topics are already dropped from every listing by content.ts.
//
// Usage:
//   node scripts/archive-article.mjs <category/slug> --into <category/slug> \
//        [--reason "..."] [--by <name>] [--apply]
//
//   (no --apply) dry-run: print the full plan, write nothing.
//   --apply                 perform it.
//
// HARD GATES (never silently skipped — the run aborts with a reason):
//   • the topic's master must exist and be in a live/archivable status
//     (published · needs-update · request-archive · in-archive · reviewed);
//     draft / in-review / in-redraft are refused (nothing public to retire).
//   • --into is REQUIRED and must resolve to a DIFFERENT, published master
//     (no redirect to a missing or non-public page, no self-redirect).
//   • a genuinely obsolete topic with NO successor is refused here — that case
//     needs a noindex tombstone page (a later increment), not a soft-404 redirect.
//   • idempotent: an already-archived topic with the same target is a no-op.
//
// Only status/hidden/supersededBy/requestedBy/requestReason/updated change — none
// are in the translation hash, so this is freshness-neutral (no re-stamp needed).

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const REDIRECTS_JSON = path.join(ROOT, 'src', 'data', 'archive-redirects.json');
const ASTRO_CONFIG = path.join(ROOT, 'astro.config.mjs');
const LANGS = ['en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr'];
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
const reason = flag('--reason');
const by = flag('--by');

if (!positional) die('give the topic to archive as <category/slug> (e.g. energy/petronas).');
if (!into) die('--into <category/slug> is required: every archive must redirect to a live successor. A no-successor obsolete topic needs a noindex tombstone (not built yet).');

const [cat, slug] = positional.split('/');
const [intoCat, intoSlug] = into.split('/');
if (!cat || !slug) die(`bad topic path "${positional}" — expected <category/slug>.`);
if (!intoCat || !intoSlug) die(`bad --into path "${into}" — expected <category/slug>.`);
if (cat === intoCat && slug === intoSlug) die('cannot supersede a topic by itself.');

// ---- resolve files --------------------------------------------------------
const masterRel = `${cat}/${slug}.md`;
const masterAbs = path.join(KNOWLEDGE, cat, `${slug}.md`);
if (!existsSync(masterAbs)) die(`master not found: knowledge/${masterRel}`);

const intoMasterAbs = path.join(KNOWLEDGE, intoCat, `${intoSlug}.md`);
if (!existsSync(intoMasterAbs)) die(`--into target not found: knowledge/${intoCat}/${intoSlug}.md`);

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

// Validate the successor is public before we point anyone at it.
const intoRaw = readFileSync(intoMasterAbs, 'utf8');
const intoStatus = getField(intoRaw, 'status') ?? 'published';
if (intoStatus === 'archived' || intoStatus === 'draft' || intoStatus === 'in-review') {
  die(`--into target is "${intoStatus}", not public — refusing to redirect to it.`);
}

// Gather the topic's files: master + any translations present.
const dirFiles = await readdir(path.join(KNOWLEDGE, cat));
const files = [masterRel];
for (const l of LANGS) {
  if (dirFiles.includes(`${slug}.${l}.md`)) files.push(`${cat}/${slug}.${l}.md`);
}

// ---- build the plan -------------------------------------------------------
const supersededByPath = `/${intoCat}/${intoSlug}`;
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
  next = setField(next, 'hidden', 'true');
  next = setField(next, 'supersededBy', yamlStr(supersededByPath));
  if (by) next = setField(next, 'requestedBy', yamlStr(by));
  if (reason) next = setField(next, 'requestReason', yamlStr(reason));
  next = setField(next, 'updated', today());
  plan.push({ rel, abs, from: status, raw, next });
}

// ---- redirect collision check --------------------------------------------
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
