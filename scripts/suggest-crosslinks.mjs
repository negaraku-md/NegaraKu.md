#!/usr/bin/env node
// suggest-crosslinks.mjs — find UNDECLARED cross-link opportunities.
//
// build-graph.mjs and check-internal-links.mjs only reason about links you have
// ALREADY written (the `relations[]`/`related[]` graph, and broken hrefs). This
// finds the ones you HAVEN'T: places where one published article's prose mentions
// another published article — by its title or entity name — without linking it.
//
// It is the tool the manual Timeline cross-link pass should have been: run it
// after adding articles, review the candidates, wire the good ones. It never
// edits files and never ships to the browser — it is a build-time analysis
// script like its siblings in this folder.
//
// Usage:
//   node scripts/suggest-crosslinks.mjs <slug> [<slug> ...]   inbound: who should link TO these
//   node scripts/suggest-crosslinks.mjs --outbound <slug>...   also: what these should link OUT to
//   node scripts/suggest-crosslinks.mjs --recent <N>           target the N most-recently-edited masters
//
// A "mention" = the target's `entity` or `title` (parentheticals stripped) found
// in another published master's body, where that master does not already link to
// the target (no href to its slug, and slug not in its `related[]`). Masters only
// — once a master link is added, mirror it into the .ms/.zh/.en translations, the
// same as any body edit. High precision over recall: it suggests, you decide.
//
// Strengths & limits: strongest for NAME-like articles (people, organisations,
// named events, Acts). Weaker where an article is referred to mainly by a SHORT
// abbreviation ("GE15", "PRU-13") — it matches the title/entity, not shorthand,
// so those want a manual eye. A target whose term is a common noun ("holding
// company") is flagged "broad term" — most of its matches are the noun, not
// references. Treat all output as leads to review, never auto-apply.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KDIR = path.join(ROOT, 'knowledge');
const MIN = 6; // minimum mention-term length — shorter terms are too noisy
const CAP = 40; // max candidates printed per target, keeps output reviewable

// ---- args -------------------------------------------------------------------
const argv = process.argv.slice(2);
const outbound = argv.includes('--outbound');
const all = argv.includes('--all'); // target every published master
const named = argv.includes('--named'); // restrict targets to named-entity articles (people/orgs/laws/…)
const summary = argv.includes('--summary'); // one line per target, no per-candidate detail — for a corpus triage
const plan = argv.includes('--plan'); // machine-readable: one TSV row per candidate (source, target, cat, term, line)
const unique = argv.includes('--unique'); // drop targets whose entity/abbr is shared by another published master
const ri = argv.indexOf('--recent');
const recentN = ri >= 0 ? parseInt(argv[ri + 1], 10) || 10 : 0;
const explicit = argv.filter((a, i) => !a.startsWith('--') && argv[i - 1] !== '--recent');

// ---- load master files (the no-lang-suffix .md; .ms/.zh/.en.md are translations)
const isMaster = (f) => f.endsWith('.md') && !/\.(ms|zh|en)\.md$/.test(f);
const fmVal = (raw, key) => {
  const m = raw.match(new RegExp('^' + key + ':\\s*"?(.*?)"?\\s*$', 'm'));
  return m ? m[1].trim() : '';
};
const splitBody = (raw) => {
  const p = raw.split(/^---$/m);
  return p.length >= 3 ? p.slice(2).join('---') : raw;
};

const arts = [];
for (const rel of readdirSync(KDIR, { recursive: true })) {
  const file = path.join(KDIR, rel);
  if (!isMaster(file)) continue;
  let st;
  try {
    st = statSync(file);
  } catch {
    continue;
  }
  if (!st.isFile()) continue;
  const raw = readFileSync(file, 'utf8');
  const slug = fmVal(raw, 'slug');
  if (!slug) continue;
  arts.push({
    rel: path.relative(ROOT, file).replace(/\\/g, '/'),
    slug,
    status: fmVal(raw, 'status') || 'draft',
    title: fmVal(raw, 'title'),
    entity: fmVal(raw, 'entity'),
    cat: fmVal(raw, 'category'),
    mtime: st.mtimeMs,
    raw,
    body: splitBody(raw),
  });
}
const pub = arts.filter((a) => a.status === 'published');
const bySlug = new Map(pub.map((a) => [a.slug, a]));

// ---- duplicate-entity detection (for --unique) ------------------------------
// The corpus carries the same body/Act/company written up more than once across
// categories (e.g. PDRM ×3, Petronas ×3). Wiring an entity link is only quality
// work once that entity has ONE canonical article, so --unique drops any target
// whose entity name (or a title abbreviation) is shared by another published
// master — leaving only the entities that are safe to link right now.
const normEnt = (s) => (s || '').toLowerCase().replace(/\s*\([^)]*\)/g, '').trim();
const entCount = new Map();
const abbrCount = new Map();
for (const a of pub) {
  const k = normEnt(a.entity);
  if (k) entCount.set(k, (entCount.get(k) || 0) + 1);
  const seen = new Set();
  for (const m of (a.title || '').matchAll(/\(([A-Z][A-Za-z]{1,6})\)/g)) {
    const ab = m[1].toUpperCase();
    if (seen.has(ab)) continue;
    seen.add(ab);
    abbrCount.set(ab, (abbrCount.get(ab) || 0) + 1);
  }
}
// Short abbreviation-stub slugs (e.g. "jpn", "pdrm", "ma63") are the other half
// of a dup pair whose long-form profile carries the same token — catch those too.
const stubSlugs = new Set(pub.filter((a) => a.slug.length <= 6 && a.entity).map((a) => a.slug));
const shareStub = (slug) => {
  for (const s of stubSlugs) {
    if (s === slug) continue;
    if (slug === s || slug.startsWith(s + '-') || slug.endsWith('-' + s) || slug.includes('-' + s + '-')) return true;
  }
  return false;
};
const hasDuplicate = (a) => {
  if (entCount.get(normEnt(a.entity)) >= 2) return true;
  for (const m of (a.title || '').matchAll(/\(([A-Z][A-Za-z]{1,6})\)/g)) {
    if (abbrCount.get(m[1].toUpperCase()) >= 2) return true;
  }
  return shareStub(a.slug);
};

// ---- helpers ----------------------------------------------------------------
const GENERIC = new Set(['malaysia', 'the', 'and', 'of', 'in', 'law', 'tax', 'business']);
function termsFor(a) {
  const cleaned = [a.entity, a.title]
    .filter(Boolean)
    .map((s) => s.replace(/\s*\([^)]*\)\s*/g, ' ').trim()); // drop "(RE/RO)"-style suffixes
  // Also try a leading-article-stripped variant so entity "The Sheraton Move"
  // still matches prose that says "Sheraton Move".
  const withVariants = cleaned.flatMap((s) => {
    const bare = s.replace(/^(the|a|an)\s+/i, '');
    return bare !== s ? [s, bare] : [s];
  });
  return [...new Set(withVariants)].filter((t) => t.length >= MIN && !GENERIC.has(t.toLowerCase()));
}
// A term that matches a large share of the corpus is almost certainly a common
// noun ("holding company", "service tax"), not a reference — flag for filtering.
const BROAD = 15;
// Does `src` already connect to `slug` (a body href to it, or it in related[])?
function connected(src, slug) {
  if (src.body.includes('/' + slug + ')') || src.body.includes('/' + slug + '/')) return true;
  const rel = src.raw.match(/^related:\s*\[([^\]]*)\]/m);
  return !!(rel && rel[1].includes('"' + slug + '"'));
}
// First line in `body` (1-based within the body) that contains `term`, case-insensitive.
function findLine(body, term) {
  const lines = body.split('\n');
  const t = term.toLowerCase();
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes(t)) return { n: i + 1, text: lines[i].trim() };
  }
  return null;
}

// ---- resolve targets --------------------------------------------------------
let targets;
if (all || named) {
  targets = [...pub].sort((a, b) => (a.slug < b.slug ? -1 : 1));
} else if (recentN) {
  targets = [...pub].sort((a, b) => b.mtime - a.mtime).slice(0, recentN);
} else {
  targets = [];
  for (const s of explicit) {
    const a = bySlug.get(s);
    if (!a) {
      console.log(`  ⚠ "${s}" is not a published master — skipped.`);
      continue;
    }
    targets.push(a);
  }
}
// --named: keep only articles that ARE a named entity (person, org, agency, law,
// company, place, event). Their titles/entities are proper nouns, so a prose
// match is almost always a real reference — the highest-precision slice.
if (named) targets = targets.filter((t) => t.entity);
if (unique) targets = targets.filter((t) => !hasDuplicate(t));
if (!targets.length) {
  console.log(
    'Usage: node scripts/suggest-crosslinks.mjs <published-slug> [...]  |  --recent <N>  |  --all  |  --named  [--summary] [--outbound]',
  );
  process.exit(0);
}

// ---- scan -------------------------------------------------------------------
let total = 0;
for (const tgt of targets) {
  const terms = termsFor(tgt);
  const inbound = [];
  if (terms.length) {
    for (const src of pub) {
      if (src.slug === tgt.slug) continue;
      if (connected(src, tgt.slug)) continue;
      for (const term of terms) {
        const hit = findLine(src.body, term);
        if (hit) {
          inbound.push({ src: src.rel, term, ...hit });
          break; // one candidate line per source is enough to act on
        }
      }
    }
  }

  const out = [];
  if (outbound) {
    for (const other of pub) {
      if (other.slug === tgt.slug) continue;
      if (connected(tgt, other.slug)) continue;
      for (const term of termsFor(other)) {
        const hit = findLine(tgt.body, term);
        if (hit) {
          out.push({ target: other.slug, term, ...hit });
          break;
        }
      }
    }
  }

  const broadFlag = inbound.length > BROAD;
  if (plan) {
    // TSV rows for tooling. Broad targets (common nouns) are noise for wiring — skip them.
    if (broadFlag) continue;
    // source-master | target-slug | target-category | term | body-line | snippet
    for (const c of inbound) {
      console.log(`PLAN\t${c.src}\t${tgt.slug}\t${tgt.cat}\t${c.term}\t${c.n}\t${c.text.slice(0, 140).replace(/\t/g, ' ')}`);
    }
    total += inbound.length;
    continue;
  }
  if (summary) {
    // One dense line per target with a candidate — for a whole-corpus triage.
    if (inbound.length) {
      const mark = broadFlag ? 'BROAD' : tgt.entity ? 'named' : 'guide';
      console.log(`${String(inbound.length).padStart(4)}  [${mark.padEnd(5)}]  ${tgt.cat.padEnd(18)}  ${tgt.slug}`);
    }
    total += inbound.length;
    continue;
  }
  console.log(`\n=== ${tgt.slug}  (${tgt.title || tgt.entity || ''}) ===`);
  const broad = broadFlag ? '  ⚠ broad term — many matches are likely the common noun, filter carefully' : '';
  console.log(`INBOUND — published articles that mention it but don't link it: ${inbound.length}${broad}`);
  for (const c of inbound.slice(0, CAP)) {
    console.log(`  • ${c.src}:${c.n}  [match: "${c.term}"]`);
    console.log(`      ${c.text.slice(0, 160)}`);
  }
  if (inbound.length > CAP) console.log(`  … +${inbound.length - CAP} more`);
  if (outbound) {
    console.log(`OUTBOUND — published articles this one mentions but doesn't link: ${out.length}`);
    for (const c of out.slice(0, CAP)) {
      console.log(`  • → ${c.target}  (line ${c.n}, match "${c.term}")`);
      console.log(`      ${c.text.slice(0, 160)}`);
    }
    if (out.length > CAP) console.log(`  … +${out.length - CAP} more`);
  }
  total += inbound.length + out.length;
}

console.log(
  `\n[suggest-crosslinks] ${targets.length} target(s), ${total} candidate link(s) across ${pub.length} published masters.`,
);
console.log('Review each, then wire the good ones (add the link in all language variants of the source).');
