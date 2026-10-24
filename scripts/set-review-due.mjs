// set-review-due.mjs — give every published topic an honest, policy-based
// reviewDue, and keep all 13 locale files in sync.
//
// Two gaps this closes (lifecycle step 5):
//   1. BACKFILL — ~300 published masters carry no reviewDue, so their freshness
//      badge can never flip and they never enter the review queue. We compute
//      one from the master's own `updated` (fallback reviewed/created/today)
//      plus the tier/sensitivity cadence (scripts/lib/review-cadence.mjs).
//   2. MIRROR — reviewDue is a per-topic fact but is stored on every locale file
//      (effectiveStatus runs per page). The mirror drifted: the newest languages
//      (ar/hi/es/fr) and some masters are missing it. We copy the master's
//      canonical reviewDue down to ALL its locale files.
//
// The master's OWN reviewDue, if already set, is authoritative and preserved —
// we only fill a missing one and propagate the agreed value outward. Idempotent.
//
// reviewDue is NOT in the translation hash (title/summary/answer/keyTakeaways/
// faq/appliesTo), so this is freshness-neutral: no re-stamp, no false "stale".
//
// Usage:
//   node scripts/set-review-due.mjs                    # dry-run, whole corpus
//   node scripts/set-review-due.mjs --apply            # write
//   node scripts/set-review-due.mjs --apply <cat/slug>...   # only these topics
//   node scripts/set-review-due.mjs --recompute        # also RECOMPUTE masters
//                                                        that already have a date

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { computeReviewDue, reviewMonths } from './lib/review-cadence.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const KNOWLEDGE = join(ROOT, 'knowledge');
const LANGS = ['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr'];

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const RECOMPUTE = args.includes('--recompute');
const bases = args.filter((a) => !a.startsWith('--')); // optional cat/slug allow-list
const TODAY = new Date().toISOString().slice(0, 10);

// ---- fs + frontmatter helpers ---------------------------------------------
function walk(d) {
  let o = [];
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) o = o.concat(walk(p));
    else if (e.name.endsWith('.md')) o.push(p);
  }
  return o;
}
const relOf = (f) => f.replace(/\\/g, '/').replace(/^.*\/knowledge\//, '');
const fmOf = (raw) => (raw.match(/^---\r?\n([\s\S]*?)\r?\n---/) ?? [null, ''])[1];
const field = (fm, key) => {
  const m = fm.match(new RegExp(`^${key}:[ \\t]*"?([^"\\n]*)"?[ \\t]*$`, 'm'));
  return m ? m[1].trim() : null;
};
/** Replace `reviewDue: ...` in place, else insert right after the `reviewed:`
 *  line, else after `status:`. Keeps the bare-date format (no quotes). */
function setReviewDue(raw, date) {
  if (/^reviewDue:.*$/m.test(raw)) return raw.replace(/^reviewDue:.*$/m, `reviewDue: ${date}`);
  if (/^reviewed:.*$/m.test(raw)) return raw.replace(/^reviewed:.*$/m, (m) => `${m}\nreviewDue: ${date}`);
  return raw.replace(/^status:.*$/m, (m) => `${m}\nreviewDue: ${date}`);
}

// ---- group files by topic --------------------------------------------------
/** key "category/slug" -> { files: [{rel, abs, lang}], master } */
const topics = new Map();
for (const abs of walk(KNOWLEDGE)) {
  const rel = relOf(abs);
  const m = /^([^/]+)\/(.+?)(?:\.([a-z]{2}))?\.md$/.exec(rel);
  if (!m) continue;
  const [, category, slug, langInfix] = m;
  if (langInfix && !LANGS.includes(langInfix)) continue; // part of the slug, not a lang
  const key = `${category}/${slug}`;
  if (bases.length && !bases.some((b) => b.replace(/\.md$/, '') === key)) continue;
  const raw = readFileSync(abs, 'utf8');
  const fm = fmOf(raw);
  const lang = field(fm, 'lang') ?? langInfix ?? 'ms';
  const t = topics.get(key) ?? { key, files: [] };
  t.files.push({ rel, abs, lang, raw, fm });
  topics.set(key, t);
}

// ---- plan ------------------------------------------------------------------
let backfilled = 0; // masters that gained a first reviewDue
let recomputed = 0; // masters whose date we changed under --recompute
let mirrored = 0; // locale files brought into line
const edits = []; // {abs, raw, next, rel}
const sample = [];

for (const t of topics.values()) {
  // master = the file whose own lang === its declared masterLanguage.
  const master =
    t.files.find((f) => f.lang === (field(f.fm, 'masterLanguage') ?? 'ms')) ?? t.files[0];
  const status = field(master.fm, 'status') ?? 'draft';
  if (status !== 'published') continue; // freshness queue only concerns published topics

  const tier = field(master.fm, 'tier') ?? '3';
  const sensitivity = field(master.fm, 'sensitivity') ?? 'none';

  let canonical = field(master.fm, 'reviewDue');
  if (!canonical || RECOMPUTE) {
    const baseline = field(master.fm, 'updated') || field(master.fm, 'reviewed') || field(master.fm, 'created') || TODAY;
    const computed = computeReviewDue(baseline, tier, sensitivity);
    if (!canonical) {
      canonical = computed;
      backfilled++;
      if (sample.length < 8) sample.push(`backfill ${t.key} (tier ${tier}${sensitivity !== 'none' ? '/' + sensitivity : ''}, ${reviewMonths(tier, sensitivity)}mo from ${baseline}) -> ${canonical}`);
    } else if (computed !== canonical) {
      canonical = computed;
      recomputed++;
    }
  }

  // Mirror the canonical date onto every locale file (including the master).
  for (const f of t.files) {
    if (field(f.fm, 'reviewDue') === canonical) continue;
    const next = setReviewDue(f.raw, canonical);
    if (next !== f.raw) {
      edits.push({ abs: f.abs, raw: f.raw, next, rel: f.rel });
      mirrored++;
    }
  }
}

// ---- report ----------------------------------------------------------------
console.log(`\n[review-due] ${APPLY ? 'APPLY' : 'DRY-RUN'}${RECOMPUTE ? ' --recompute' : ''}${bases.length ? ` (scope: ${bases.join(', ')})` : ''}`);
console.log(`  published masters backfilled (no reviewDue -> policy date): ${backfilled}`);
if (RECOMPUTE) console.log(`  masters recomputed to the current policy date: ${recomputed}`);
console.log(`  locale files written (mirror brought into line):           ${mirrored}`);
for (const s of sample) console.log(`    e.g. ${s}`);

if (!edits.length) {
  console.log('\n[review-due] nothing to change — every published topic already consistent.\n');
  process.exit(0);
}
if (!APPLY) {
  console.log(`\n[review-due] dry-run only (${edits.length} files would change). Re-run with --apply to write.\n`);
  process.exit(0);
}
for (const e of edits) writeFileSync(e.abs, e.next, 'utf8');
console.log(`\n[review-due] done — ${edits.length} file(s) written. reviewDue is freshness-neutral (no re-stamp).`);
console.log('[review-due] next: node scripts/sync.mjs && node scripts/validate-frontmatter.mjs ; commit (held for push).\n');
