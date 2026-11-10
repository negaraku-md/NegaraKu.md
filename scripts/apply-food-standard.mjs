// apply-food-standard.mjs — clear the F1 (foodType) + F5 (hero provenance) backlog
// from docs/plans/food-standard-rollout-plan.md across MASTER food articles.
//
// Both fields are FRESHNESS-NEUTRAL (excluded from the translation hash, see the
// plan §2), so this touches masters only and re-stamps nothing.
//
//   F1  foodType   ← mapped from subcategory/contentType (plan §1 table)
//   F5  heroKind + heroOrigin ← place→representative / else→actual ; third-party
//        (every food hero is an Unsplash/Wikimedia stock image, never an owner
//         or editorial shoot)
//
// Idempotent: a master that already has foodType / heroKind / heroOrigin keeps it.
// Run:  node scripts/apply-food-standard.mjs   (then validate-food-standard.mjs)

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const FOOD_DIR = 'knowledge/food-lifestyle';
const LOCALES = new Set(['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr']);
const isMaster = (f) => { const b = f.replace(/\.md$/i, ''); const d = b.lastIndexOf('.'); return !(d > -1 && LOCALES.has(b.slice(d + 1))); };
const walk = (d) => readdirSync(d).flatMap((e) => { const p = join(d, e); return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : []; });

// A few guidance/rules articles map to `practical` rather than `culture`.
const SLUG_PRACTICAL = new Set([
  'alcohol-rules-in-malaysia',
  'halal-certification-in-malaysia',
  'dietary-restrictions-and-vegetarian-dining',
]);

function foodTypeFor(sub, ct, slug) {
  if (SLUG_PRACTICAL.has(slug)) return 'practical';
  if (ct === 'place' || sub === 'restaurants') return 'place';
  if (sub === 'dishes') return 'dish';
  if (sub === 'ingredients') return 'ingredient';
  if (['cuisines', 'cuisine', 'masakan', 'regional'].includes(sub)) return 'cuisine';
  if (['alcohol', 'halal'].includes(sub)) return 'practical';
  return 'culture'; // dining/kopitiam/pasar/ramadan/durian/drinks/heritage/festivals/retail/hiburan/makanan
}

const ftDist = {};
let changed = 0, ftAdded = 0, provAdded = 0;

for (const file of walk(FOOD_DIR)) {
  if (!isMaster(file)) continue;
  let raw = readFileSync(file, 'utf8');
  const bom = raw.startsWith('﻿') ? '﻿' : '';
  if (bom) raw = raw.slice(1);
  const eol = raw.includes('\r\n') ? '\r\n' : '\n';
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) { console.warn('no frontmatter:', file); continue; }
  const fmText = m[1];
  const lines = fmText.split(/\r?\n/);
  const slug = file.replace(/^.*[\\/]/, '').replace(/\.md$/, '');

  const hasFoodType = lines.some((l) => /^foodType:/.test(l));
  const subLine = lines.find((l) => /^subcategory:/.test(l)) || '';
  const sub = (subLine.match(/\[\s*"?([^"\],]+)"?/) || [])[1] || null;
  const ctLine = lines.find((l) => /^contentType:/.test(l)) || '';
  const ct = (ctLine.match(/^contentType:\s*"?([^"\r\n]+?)"?\s*$/) || [])[1] || null;
  const hasHero = lines.some((l) => /^hero:\s*\S/.test(l));
  const hasKind = lines.some((l) => /^heroKind:/.test(l));
  const hasOrigin = lines.some((l) => /^heroOrigin:/.test(l));

  let mutated = false;

  if (!hasFoodType) {
    const ft = foodTypeFor(sub, ct, slug);
    ftDist[ft] = (ftDist[ft] || 0) + 1;
    let idx = lines.findIndex((l) => /^subcategory:/.test(l));
    if (idx === -1) idx = lines.findIndex((l) => /^category:/.test(l));
    if (idx === -1) idx = 0;
    lines.splice(idx + 1, 0, `foodType: "${ft}"`);
    ftAdded++; mutated = true;
  }

  if (hasHero && (!hasKind || !hasOrigin)) {
    const ftNow = (lines.find((l) => /^foodType:/.test(l)) || '').match(/^foodType:\s*"?([\w-]+)"?/)?.[1] || foodTypeFor(sub, ct, slug);
    const kind = ftNow === 'place' ? 'representative' : 'actual';
    const ins = [];
    if (!hasKind) ins.push(`heroKind: "${kind}"`);
    if (!hasOrigin) ins.push('heroOrigin: "third-party"');
    const idx = lines.findIndex((l) => /^hero:\s*\S/.test(l));
    lines.splice(idx + 1, 0, ...ins);
    provAdded++; mutated = true;
  }

  if (mutated) {
    const newRaw = bom + raw.replace(fmText, lines.join(eol));
    writeFileSync(file, newRaw, 'utf8');
    changed++;
  }
}

console.log('foodType distribution (newly set):', ftDist);
console.log(`[food-standard] changed ${changed} masters — foodType +${ftAdded}, hero provenance +${provAdded}`);
