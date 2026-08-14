#!/usr/bin/env node
/**
 * Fast frontmatter validator for knowledge/*.md
 *
 * Catches, in milliseconds and at zero token cost, the schema violations that
 * repeatedly broke `astro build` during bulk article generation:
 *   - relations[].rel outside the closed enum      (e.g. "issued-by")
 *   - contentType outside the closed enum          (e.g. "institution")
 *   - unquoted YAML dates parsed as numbers/Dates  (sources[].date)
 *   - duplicated top-level frontmatter keys        (silent YAML failure)
 *   - tier S paired with sensitivity "none"        (repo consistency rule)
 *   - a reviewer name or reviewed date on an AI draft (honesty rule)
 *
 * Run: node scripts/validate-frontmatter.mjs [--fix-dates]
 * Exit 1 if any ERROR is found. WARNs do not fail the run.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const REL_ENUM = new Set([
  'administered-by', 'governs', 'requires', 'affects', 'part-of', 'located-in',
  'supersedes', 'explained-in', 'compares-with', 'related-to',
]);
const CONTENT_TYPE_ENUM = new Set([
  'guide', 'faq', 'checklist', 'comparison', 'timeline', 'glossary', 'law',
  'agency', 'place', 'company', 'industry', 'data', 'news',
]);
const SENSITIVITIES = new Set([
  'none', 'race', 'religion', 'royalty', 'constitution', 'elections', 'security',
  'health', 'legal-proceedings',
]);

// Canonical state constitutional structure — the source of truth for the
// "royalty" sensitivity on a state PROFILE. The nine states with a hereditary
// Malay Ruler MUST carry sensitivity "royalty"; the Governor-led states and the
// Federal Territories (no monarch) MUST NOT. Keyed by the profile's slug
// (the base filename), matched only for files under knowledge/states/.
const STATE_RULER = {
  johor: true, kedah: true, kelantan: true, 'negeri-sembilan': true,
  pahang: true, perak: true, perlis: true, selangor: true, terengganu: true,
  // No hereditary Ruler — Governor (Yang di-Pertua Negeri) or Federal Territory.
  melaka: false, penang: false, sabah: false, sarawak: false,
  'kuala-lumpur': false, labuan: false, putrajaya: false,
};

const FIX_DATES = process.argv.includes('--fix-dates');

function walk(dir) {
  return readdirSync(dir).flatMap((e) => {
    const p = join(dir, e);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
  });
}

const errors = [];
const warns = [];
let fixed = 0;

for (const file of walk('knowledge')) {
  let raw = readFileSync(file, 'utf8');
  // Strip a UTF-8 BOM if present — Astro tolerates it, but it makes the file
  // inconsistent with the rest of the corpus and breaks naive frontmatter parsing.
  if (raw.charCodeAt(0) === 0xfeff) {
    raw = raw.slice(1);
    if (FIX_DATES) { writeFileSync(file, raw, 'utf8'); console.log(`[validate] stripped BOM from ${file}`); }
    else warns.push(`${file}: file begins with a UTF-8 BOM — run with --fix-dates to strip`);
  }
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) { errors.push(`${file}: no frontmatter block`); continue; }
  let fm = m[1];
  const lines = fm.split(/\r?\n/);

  // --- duplicated top-level keys -------------------------------------------
  const topKeys = lines
    .filter((l) => /^[A-Za-z][\w-]*:/.test(l))
    .map((l) => l.split(':')[0]);
  const dupes = [...new Set(topKeys.filter((k, i) => topKeys.indexOf(k) !== i))];
  for (const d of dupes) errors.push(`${file}: duplicated frontmatter key "${d}"`);

  // --- relations.rel enum ---------------------------------------------------
  for (const rel of fm.matchAll(/rel:\s*"?([a-z-]+)"?/g)) {
    if (!REL_ENUM.has(rel[1])) errors.push(`${file}: illegal relations.rel "${rel[1]}"`);
  }

  // --- contentType enum -----------------------------------------------------
  const ct = fm.match(/^contentType:\s*"?([\w-]+)"?/m);
  if (ct && !CONTENT_TYPE_ENUM.has(ct[1])) {
    errors.push(`${file}: illegal contentType "${ct[1]}"`);
  }

  // --- unquoted dates INSIDE the sources block only.
  // revisions[].date is z.coerce.date() and accepts a bare YAML date; but
  // sources[].date is a plain string, so an unquoted value arrives as a
  // Date/number and fails the build. Only flag the latter.
  let inSources = false;
  const badDateLines = [];
  lines.forEach((l, i) => {
    if (/^[A-Za-z][\w-]*:/.test(l)) inSources = /^sources:/.test(l);
    if (inSources && /^\s+date:\s*\d[\d-]*\s*$/.test(l)) badDateLines.push(i);
  });
  if (badDateLines.length) {
    if (FIX_DATES) {
      const out = [...lines];
      for (const i of badDateLines) out[i] = out[i].replace(/(\s*date:\s*)(\d[\d-]*)\s*$/, '$1"$2"');
      writeFileSync(file, raw.replace(m[1], out.join('\n')), 'utf8');
      fixed += badDateLines.length;
    } else {
      errors.push(`${file}: ${badDateLines.length} unquoted sources[].date — run with --fix-dates`);
    }
  }

  // --- sources[].url must be an absolute URL. The schema uses z.string().url(),
  // so a relative internal link (/en/...) breaks the build. These belong in
  // `related`/`relations`, not `sources`.
  let inSrc = false;
  const badUrlLines = [];
  lines.forEach((l, i) => {
    if (/^[A-Za-z][\w-]*:/.test(l)) inSrc = /^sources:/.test(l);
    if (inSrc) {
      const um = l.match(/^\s+url:\s*"?([^"]+)"?\s*$/);
      if (um && !/^https?:\/\//i.test(um[1].trim())) badUrlLines.push(i + 1);
    }
  });
  if (badUrlLines.length)
    errors.push(`${file}: sources[].url must be absolute http(s) — line(s) ${badUrlLines.join(', ')} (internal links go in \`related\`)`);

  // --- honesty + governance rules ------------------------------------------
  const tier = (fm.match(/^tier:\s*"?([\dS])"?/m) || [])[1];
  const sens = (fm.match(/^sensitivity:\s*"?([\w-]+)"?/m) || [])[1];
  const status = (fm.match(/^status:\s*"?([\w-]+)"?/m) || [])[1];
  const reviewer = (fm.match(/^reviewer:\s*(.+)$/m) || [])[1]?.trim();

  if (sens && !SENSITIVITIES.has(sens)) errors.push(`${file}: unknown sensitivity "${sens}"`);

  // --- state-profile classification guardrail ------------------------------
  // A state profile lives at knowledge/states/<slug>[.lang].md. Enforce the
  // royalty rule from STATE_RULER so a mis-tagged classification (e.g. Melaka
  // marked "royalty", or Kedah left "none") fails the build instead of shipping.
  const stateMatch = file.match(/[\\/]states[\\/]([a-z-]+?)(?:\.(?:ms|en|zh))?\.md$/);
  if (stateMatch && stateMatch[1] in STATE_RULER) {
    const hasRuler = STATE_RULER[stateMatch[1]];
    if (hasRuler && sens !== 'royalty') {
      errors.push(`${file}: ${stateMatch[1]} has a hereditary Ruler — sensitivity must be "royalty" (got "${sens ?? 'none'}")`);
    }
    if (!hasRuler && sens === 'royalty') {
      errors.push(`${file}: ${stateMatch[1]} has no Ruler (Governor/Federal Territory) — sensitivity must not be "royalty"`);
    }
  }
  if (tier === 'S' && sens === 'none') {
    warns.push(`${file}: tier S paired with sensitivity "none" — pick a 3R+1 sensitivity`);
  }
  if (status === 'draft' && reviewer && reviewer !== 'null') {
    errors.push(`${file}: status draft but reviewer is ${reviewer} — AI cannot self-certify review`);
  }
  // A reviewed date with no human reviewer is the INTENDED state for AI-verified
  // content (aiAssisted: true, reviewer: null, verified against primary sources
  // on that date). Only flag it as an inconsistency for non-AI content.
  if (/^reviewed:\s*\S/m.test(fm) && reviewer === 'null' && !/^aiAssisted:\s*true/m.test(fm)) {
    warns.push(`${file}: has a reviewed date but reviewer is null`);
  }

  // --- contributor identity must be a bare lowercase GitHub handle ----------
  // See docs/CONTRIBUTOR-IDENTITY-STANDARD.md. Rejects display-name forms like
  // "Ashton Tan", "@ashton-tan", or an email — a person is identified only by
  // their lowercase github handle (a-z, 0-9, hyphen). `null` is always allowed.
  const HANDLE = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  for (const field of ['author', 'reviewer', 'publishedBy']) {
    const raw = (fm.match(new RegExp(`^${field}:\\s*(.+)$`, 'm')) || [])[1]?.trim();
    if (!raw || raw === 'null' || raw === '~' || raw === '""') continue;
    const val = raw.replace(/^["']|["']$/g, '');
    if (!HANDLE.test(val)) {
      errors.push(
        `${file}: ${field} "${val}" is not a bare lowercase github handle — ` +
          `use e.g. "ashton-tan" (see docs/CONTRIBUTOR-IDENTITY-STANDARD.md)`,
      );
    }
  }
}

if (fixed) console.log(`[validate] quoted ${fixed} date value(s)`);
for (const w of warns) console.log(`[WARN]  ${w}`);
for (const e of errors) console.log(`[ERROR] ${e}`);
console.log(`[validate] ${errors.length} error(s), ${warns.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
