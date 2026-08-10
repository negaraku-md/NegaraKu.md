// One-off: repair broken `related:` slugs across knowledge/**/*.md.
// - remap a broken slug to a real one when there's a confident close match
//   (slug typo/variant, e.g. federal-constitution-malaysia -> federal-constitution-of-malaysia)
// - otherwise drop it (genuinely-unwritten topic) — the site drops it on render anyway.
// Preserves inline (["a","b"]) vs block (- a) formatting. Dry-run unless --apply.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const APPLY = process.argv.includes('--apply');
const man = JSON.parse(readFileSync('public/api/articles.json', 'utf8'));
const real = new Set((man.articles || []).map((a) => a.slug));
const realList = [...real];

// SAFE remap only: two slugs match iff their token SETS are identical after
// removing filler words (country/company/grammar noise). This catches typo/
// variant slugs (employment-act-1955-malaysia -> employment-act-1955,
// tenaga-nasional-berhad -> tenaga-nasional) but never a different concept.
// Anything without an exact normalised match is DROPPED, not guessed.
const STOP = new Set(['malaysia', 'malaysian', 'the', 'of', 'and', 'in', 'a', 'an', 's', 'berhad', 'bhd']);
const dice2 = (a, b) => { // tie-breaker only
  const bg = (s) => { const g = new Map(); for (let i = 0; i < s.length - 1; i++) g.set(s.slice(i, i + 2), (g.get(s.slice(i, i + 2)) || 0) + 1); return g; };
  const ga = bg(a), gb = bg(b); let inter = 0, n = 0; for (const v of ga.values()) n += v; for (const v of gb.values()) n += v;
  for (const [k, v] of ga) if (gb.has(k)) inter += Math.min(v, gb.get(k)); return n ? (2 * inter) / n : 0;
};
const norm = (slug) => slug.split('-').filter((t) => t && !STOP.has(t)).sort().join('-');
const index = new Map();
for (const r of realList) { const k = norm(r); if (!k) continue; (index.get(k) || index.set(k, []).get(k)).push(r); }

const remapCache = new Map();
function bestMatch(slug) {
  if (remapCache.has(slug)) return remapCache.get(slug);
  const k = norm(slug);
  const cands = k ? index.get(k) : null;
  let res = null;
  if (cands && cands.length) res = cands.length === 1 ? cands[0] : cands.slice().sort((a, b) => dice2(slug, b) - dice2(slug, a))[0];
  remapCache.set(slug, res);
  return res;
}

function walk(d) { let o = []; for (const e of readdirSync(d, { withFileTypes: true })) { const p = join(d, e.name); if (e.isDirectory()) o = o.concat(walk(p)); else if (e.name.endsWith('.md')) o.push(p); } return o; }

const stats = { files: 0, remapped: 0, dropped: 0, filesChanged: 0 };
const remapSamples = new Map(), dropSet = new Set();

// Resolve one slug list against real/remap; returns cleaned array.
function resolveList(items, ownSlug) {
  const out = [];
  for (let s of items) {
    s = s.trim().replace(/^["']|["']$/g, '');
    if (!s) continue;
    if (s === ownSlug) continue;                 // no self-reference
    if (real.has(s)) { if (!out.includes(s)) out.push(s); continue; }
    const m = bestMatch(s);
    if (m) { stats.remapped++; if (remapSamples.size < 40) remapSamples.set(s, m); if (m !== ownSlug && !out.includes(m)) out.push(m); }
    else { stats.dropped++; dropSet.add(s); }
  }
  return out;
}

for (const f of walk('knowledge')) {
  stats.files++;
  const raw = readFileSync(f, 'utf8');
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) continue;
  const block = fm[1];
  const ownSlug = (block.match(/^slug:\s*"?([^"\n]+)"?/m) || [])[1]?.trim();

  // inline:  related: ["a", "b"]
  const inline = block.match(/^related:\s*\[([^\]]*)\]\s*$/m);
  // block list: related:\n  - a\n  - b
  const blk = block.match(/^related:\s*\r?\n((?:[ \t]*-[ \t]*.*\r?\n?)+)/m);

  let newBlockText = null, oldSlugs = null;
  if (inline) {
    oldSlugs = inline[1].split(',').map((x) => x.trim()).filter(Boolean);
    const cleaned = resolveList(oldSlugs, ownSlug);
    const rendered = `related: [${cleaned.map((s) => `"${s}"`).join(', ')}]`;
    newBlockText = block.replace(inline[0], rendered);
  } else if (blk) {
    oldSlugs = blk[1].split(/\r?\n/).map((l) => l.replace(/^[ \t]*-[ \t]*/, '').trim()).filter(Boolean);
    const cleaned = resolveList(oldSlugs, ownSlug);
    const rendered = cleaned.length
      ? 'related:\n' + cleaned.map((s) => `  - "${s}"`).join('\n') + '\n'
      : 'related: []\n';
    newBlockText = block.replace(blk[0], rendered);
  } else continue;

  if (newBlockText !== null && newBlockText !== block) {
    stats.filesChanged++;
    if (APPLY) writeFileSync(f, raw.replace(block, newBlockText), 'utf8');
  }
}

console.log(`[fix-related] ${APPLY ? 'APPLIED' : 'DRY-RUN'} — files:${stats.files} changed:${stats.filesChanged} remapped:${stats.remapped} dropped:${stats.dropped}`);
console.log('\nSample remaps (broken -> real):');
for (const [b, m] of remapSamples) console.log(`  ${b}  ->  ${m}`);
console.log(`\nDistinct slugs dropped (no confident match): ${dropSet.size}`);
console.log([...dropSet].slice(0, 30).join(', '));
