#!/usr/bin/env node
/**
 * Food Article Standard validator — docs/FOOD-ARTICLE-STANDARD.md
 *
 * Encodes the *frontmatter-checkable* rules of the Food & Lifestyle article
 * standard and flags nonconformant MASTER food articles. The block-ORDER of the
 * four templates is body prose and is NOT machine-checkable here; this validator
 * covers the parts the schema + provenance grammar make verifiable:
 *
 *   F1  food master missing `foodType`                     (§1 — must be set)
 *   F2  `foodType` outside the closed enum                 (schema enum)
 *   F3  `review[]` present on a NON-`place` foodType       (§2/§5 — place-only)
 *   F4  `images[]` carries a `role: cover` entry           (§3 — hero owns the cover)
 *   F5  `hero` set but missing heroKind / heroOrigin       (§3 — classify every image)
 *   F6  review source `editorial-visit` w/o `visitedMonth` (§5 — limited to the visit)
 *
 * WARNs (standard wants it; does not fail the run):
 *   W1  `hero` set but no `heroAlt`                         (WCAG / §3)
 *   W2  `foodType: place` but no `place:` visit card        (§2 Place block 6)
 *   W3  `images[]` entry without explicit kind/origin       (§3 — claim-based, authored)
 *
 * Scope: knowledge/food-lifestyle/, MASTER files only (bare `<slug>.md`; the
 * `<slug>.<locale>.md` siblings are translations and inherit these fields).
 *
 * Run:    node scripts/validate-food-standard.mjs
 *         node scripts/validate-food-standard.mjs --table   # full conformance table
 *         node scripts/validate-food-standard.mjs --strict  # (alias; already exit-1 on ERROR)
 * Exit 1 if any ERROR is found. WARNs do not fail the run.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const FOOD_DIR = 'knowledge/food-lifestyle';
const FOODTYPE_ENUM = new Set(['place', 'dish', 'ingredient', 'cuisine', 'culture', 'practical']);
const LOCALES = new Set([
  'ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr',
]);

const TABLE = process.argv.includes('--table');

/** A master file is a bare `<slug>.md` with no trailing `.<locale>` infix. */
function isMaster(file) {
  const base = file.replace(/\.md$/i, '');
  const dot = base.lastIndexOf('.');
  if (dot > -1 && LOCALES.has(base.slice(dot + 1))) return false;
  return true;
}

function walk(dir) {
  return readdirSync(dir).flatMap((e) => {
    const p = join(dir, e);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
  });
}

/**
 * Pull the lines of a top-level block (e.g. `images:` / `review:`) — every line
 * after the key that is indented more than the key, up to the next top-level key.
 */
function blockLines(lines, key) {
  const start = lines.findIndex((l) => new RegExp(`^${key}:`).test(l));
  if (start === -1) return null;
  const out = [];
  for (let i = start + 1; i < lines.length; i++) {
    if (/^[A-Za-z][\w-]*:/.test(lines[i])) break; // next top-level key
    out.push(lines[i]);
  }
  return out;
}

/** Split a block's lines into list items (each begins with `  - `). */
function listItems(block) {
  if (!block) return [];
  const items = [];
  let cur = null;
  for (const l of block) {
    if (/^\s*-\s/.test(l)) {
      if (cur) items.push(cur);
      cur = [l];
    } else if (cur) {
      cur.push(l);
    }
  }
  if (cur) items.push(cur);
  return items;
}

const errors = [];
const warns = [];
const rows = []; // { file, foodType, verdict, breaks: [] }

for (const file of walk(FOOD_DIR)) {
  if (!isMaster(file)) continue;
  const raw = readFileSync(file, 'utf8').replace(/^﻿/, '');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) { errors.push(`${file}: no frontmatter block`); continue; }
  const lines = m[1].split(/\r?\n/);
  const breaks = [];

  const foodType = (m[1].match(/^foodType:\s*"?([\w-]+)"?/m) || [])[1] || null;
  const hasHero = /^hero:\s*\S/m.test(m[1]);
  const heroKind = (m[1].match(/^heroKind:\s*"?([\w-]+)"?/m) || [])[1];
  const heroOrigin = (m[1].match(/^heroOrigin:\s*"?([\w-]+)"?/m) || [])[1];
  const heroAlt = /^heroAlt:\s*\S/m.test(m[1]);
  const hasPlaceCard = /^place:\s*$/m.test(m[1]) || /^place:\s*\r?$/m.test(m[1]);

  const reviewItems = listItems(blockLines(lines, 'review'));
  const imageItems = listItems(blockLines(lines, 'images'));

  // F1 / F2 — foodType -------------------------------------------------------
  if (!foodType) {
    errors.push(`${file}: [F1] food master is missing \`foodType\` (§1 — set one of ${[...FOODTYPE_ENUM].join('/')})`);
    breaks.push('F1');
  } else if (!FOODTYPE_ENUM.has(foodType)) {
    errors.push(`${file}: [F2] invalid foodType "${foodType}" (§1 enum)`);
    breaks.push('F2');
  }

  // F3 — review[] is place-only ---------------------------------------------
  if (reviewItems.length && foodType && foodType !== 'place') {
    errors.push(`${file}: [F3] review[] (${reviewItems.length} entr${reviewItems.length === 1 ? 'y' : 'ies'}) on foodType "${foodType}" — review[] is place-only (§2/§5)`);
    breaks.push('F3');
  }

  // F6 — editorial-visit entries need visitedMonth ---------------------------
  reviewItems.forEach((it, idx) => {
    const body = it.join('\n');
    const src = (body.match(/source:\s*"?([\w-]+)"?/) || [])[1];
    if (src === 'editorial-visit' && !/visitedMonth:/.test(body)) {
      errors.push(`${file}: [F6] review[${idx}] source editorial-visit without \`visitedMonth\` (§5)`);
      breaks.push('F6');
    }
  });

  // F4 / W3 — images[] provenance -------------------------------------------
  imageItems.forEach((it, idx) => {
    const body = it.join('\n');
    if (/role:\s*"?cover"?/.test(body)) {
      errors.push(`${file}: [F4] images[${idx}] has role "cover" — the cover lives in hero*, never in images[] (§3)`);
      breaks.push('F4');
    }
    if (!/\bkind:/.test(body) || !/\borigin:/.test(body)) {
      warns.push(`${file}: [W3] images[${idx}] omits explicit kind/origin — classify every image against its claim (§3)`);
      breaks.push('W3');
    }
  });

  // F5 / W1 — hero provenance ------------------------------------------------
  if (hasHero) {
    if (!heroKind || !heroOrigin) {
      errors.push(`${file}: [F5] hero set but missing ${!heroKind ? 'heroKind' : ''}${!heroKind && !heroOrigin ? ' + ' : ''}${!heroOrigin ? 'heroOrigin' : ''} — classify every image (§3)`);
      breaks.push('F5');
    }
    if (!heroAlt) {
      warns.push(`${file}: [W1] hero set but no heroAlt (WCAG / §3)`);
      breaks.push('W1');
    }
  }

  // W2 — place should carry a visit card ------------------------------------
  if (foodType === 'place' && !hasPlaceCard) {
    warns.push(`${file}: [W2] foodType place but no \`place:\` visit card (§2 Place block 6)`);
    breaks.push('W2');
  }

  rows.push({ file, foodType: foodType || '∅', breaks });
}

if (TABLE) {
  console.log('\n=== Food Standard conformance table (masters) ===');
  for (const r of rows.sort((a, b) => a.file.localeCompare(b.file))) {
    const slug = r.file.replace(/^.*[\\/]/, '').replace(/\.md$/, '');
    const verdict = r.breaks.length ? r.breaks.join(',') : 'OK';
    console.log(`${verdict === 'OK' ? ' ok ' : 'FAIL'}  ${slug.padEnd(42)} ${String(r.foodType).padEnd(10)} ${verdict === 'OK' ? '' : verdict}`);
  }
}

for (const w of warns) console.log(`[WARN]  ${w}`);
for (const e of errors) console.log(`[ERROR] ${e}`);

const conformant = rows.filter((r) => r.breaks.every((b) => b.startsWith('W'))).length;
console.log(
  `\n[food-standard] ${rows.length} master food article(s): ` +
    `${rows.filter((r) => !r.breaks.length).length} clean, ` +
    `${conformant - rows.filter((r) => !r.breaks.length).length} warn-only, ` +
    `${rows.filter((r) => r.breaks.some((b) => !b.startsWith('W'))).length} with ERRORs — ` +
    `${errors.length} error(s), ${warns.length} warning(s)`,
);
process.exit(errors.length ? 1 : 0);
