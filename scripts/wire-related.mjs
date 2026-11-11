// wire-related.mjs — add specific reader-facing cross-links to `related[]`
// across ALL language variants of an article, idempotently.
//
// WHY THIS IS SAFE / FRESHNESS-NEUTRAL:
//   `related` is NOT in translation-sync's TRANSLATED_FIELDS (only title /
//   summary / answer / appliesTo / body are hashed). Adding a slug to `related`
//   therefore does NOT change sourceContentHash and does NOT flip any
//   translation to `stale`. It is a language-neutral graph edge, but it is
//   STORED per-file and the "Related" rail is resolved per-locale
//   (content.ts relatedArticles reads the current-locale entry's `.related`),
//   so the link must be present on every language file to show in every
//   language. This script writes all 13.
//
// It preserves inline (["a","b"]) vs block (- a) formatting, leaves every other
// field byte-for-byte untouched, is idempotent (re-running adds nothing), and
// never removes an existing related slug. Dry-run unless --apply.
//
//   node scripts/wire-related.mjs           # dry-run: show what would change
//   node scripts/wire-related.mjs --apply   # write the files

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const APPLY = process.argv.includes('--apply');
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const KDIR = join(ROOT, 'knowledge');
const LANGS = ['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr'];

// The link plan — reader-facing "see also" edges for the four freshness-neutral
// wins. `base` is category/slug of the article being edited; `add` are canonical
// slugs to ensure are present in its related[]. Bare slugs (content.ts resolves
// article.data.related by slug within the current locale).
const PLAN = [
  // #1 — Scam cluster: make the four safety pages mutually discoverable.
  { base: 'public-safety/how-to-report-a-scam-malaysia', add: ['national-scam-response-centre-nsrc', 'how-to-report-a-crime-malaysia', 'staying-safe-scams-and-emergencies'] },
  { base: 'public-safety/national-scam-response-centre-nsrc', add: ['how-to-report-a-scam-malaysia', 'how-to-report-a-crime-malaysia', 'staying-safe-scams-and-emergencies'] },
  { base: 'public-safety/how-to-report-a-crime-malaysia', add: ['how-to-report-a-scam-malaysia', 'national-scam-response-centre-nsrc'] },
  { base: 'money-daily-life/staying-safe-scams-and-emergencies', add: ['how-to-report-a-scam-malaysia', 'national-scam-response-centre-nsrc'] },

  // #5 — Audit-exemption triangle: eligibility ↔ thresholds ↔ after.
  { base: 'accounting/audit-exemption-criteria', add: ['audit-exemption-thresholds', 'after-audit-exemption'] },
  { base: 'audit/audit-exemption-thresholds', add: ['audit-exemption-criteria', 'after-audit-exemption'] },
  { base: 'audit/after-audit-exemption', add: ['audit-exemption-criteria', 'audit-exemption-thresholds'] },

  // #7 — Ah Hei place card ↔ dish history (and the dish lists its notable venues).
  { base: 'food-lifestyle/ah-hei-bak-kut-teh', add: ['bak-kut-teh'] },
  { base: 'food-lifestyle/bak-kut-teh', add: ['ah-hei-bak-kut-teh', 'minji-bak-kut-teh'] },

  // #4 — Business hub → its branch articles (outbound journey wiring).
  { base: 'business/starting-a-business-in-malaysia', add: ['business-structures-malaysia', 'sole-prop-vs-sdn-bhd', 'llp-vs-sdn-bhd', 'register-sdn-bhd', 'doing-business-sabah', 'sarawak-business-guide'] },
];

// ---- validate every slug in the plan actually exists on disk --------------
const allSlugs = new Set();
(function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    if (e.isDirectory()) walk(join(d, e.name));
    else if (e.name.endsWith('.md')) allSlugs.add(e.name.replace(/(\.[a-z]{2})?\.md$/i, ''));
  }
})(KDIR);

let missing = 0;
for (const { base, add } of PLAN) {
  const baseSlug = base.split('/')[1];
  if (!allSlugs.has(baseSlug)) { console.error(`  ✗ base missing: ${base}`); missing++; }
  for (const t of add) if (!allSlugs.has(t)) { console.error(`  ✗ target missing: ${t} (for ${base})`); missing++; }
}
if (missing) { console.error(`\n[wire-related] ${missing} slug(s) not found on disk — fix the PLAN before applying.`); process.exit(1); }

// ---- find every language file for a category/slug -------------------------
function filesFor(base) {
  const [cat, slug] = base.split('/');
  const dir = join(KDIR, cat);
  const out = [];
  const master = join(dir, `${slug}.md`);
  if (existsSync(master)) out.push(master);
  for (const l of LANGS) { const p = join(dir, `${slug}.${l}.md`); if (existsSync(p)) out.push(p); }
  return out;
}

// ---- merge `add` into a file's related[], preserving formatting -----------
function wireFile(file, add) {
  const raw = readFileSync(file, 'utf8');
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return { changed: false, reason: 'no-frontmatter' };
  const block = fm[1];
  const ownSlug = (block.match(/^slug:\s*"?([^"\n]+)"?/m) || [])[1]?.trim();

  const inline = block.match(/^related:\s*\[([^\]]*)\]\s*$/m);
  const blk = block.match(/^related:\s*\r?\n((?:[ \t]*-[ \t]*.*\r?\n?)+)/m);

  let current = [];
  if (inline) current = inline[1].split(',').map((x) => x.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  else if (blk) current = blk[1].split(/\r?\n/).map((l) => l.replace(/^[ \t]*-[ \t]*/, '').trim().replace(/^["']|["']$/g, '')).filter(Boolean);

  const merged = [...current];
  for (const t of add) if (t !== ownSlug && !merged.includes(t)) merged.push(t);
  if (merged.length === current.length) return { changed: false, reason: 'already-present' };

  let newBlock;
  if (inline) {
    newBlock = block.replace(inline[0], `related: [${merged.map((s) => `"${s}"`).join(', ')}]`);
  } else if (blk) {
    newBlock = block.replace(blk[0], 'related:\n' + merged.map((s) => `  - "${s}"`).join('\n') + '\n');
  } else {
    // No related field — insert one right after the slug: line (inline form).
    const slugLine = block.match(/^slug:.*$/m);
    if (!slugLine) return { changed: false, reason: 'no-slug-line' };
    newBlock = block.replace(slugLine[0], `${slugLine[0]}\nrelated: [${merged.map((s) => `"${s}"`).join(', ')}]`);
  }
  if (newBlock === block) return { changed: false, reason: 'noop' };
  if (APPLY) writeFileSync(file, raw.replace(block, newBlock), 'utf8');
  return { changed: true, added: merged.filter((s) => !current.includes(s)) };
}

// ---- run ------------------------------------------------------------------
let files = 0, changed = 0;
for (const { base, add } of PLAN) {
  const list = filesFor(base);
  let baseChanged = 0;
  const addedSet = new Set();
  for (const f of list) {
    files++;
    const r = wireFile(f, add);
    if (r.changed) { changed++; baseChanged++; (r.added || []).forEach((s) => addedSet.add(s)); }
  }
  console.log(`  ${base}  — ${baseChanged}/${list.length} files${addedSet.size ? '  +[' + [...addedSet].join(', ') + ']' : '  (all already present)'}`);
}
console.log(`\n[wire-related] ${APPLY ? 'APPLIED' : 'DRY-RUN'} — files scanned:${files} changed:${changed}`);
if (!APPLY) console.log('Re-run with --apply to write.');
