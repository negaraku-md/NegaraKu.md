// build-living-heroes.mjs — hero + in-body images for the "Living in Malaysia" pillar,
// which spans many categories. Picks (keyed "<category>/<slug>") live in
// scripts/data/living-images.json. Every image is a free-licensed Wikimedia Commons photo,
// licence-verified via the Commons API and visually inspected (weak/first-hit/mislabelled/
// species-mismatch shots rejected). Writes public/media/<cat>/<slug>/{hero,body-1,body-2}.webp
// (1600x900, aim <=180 KB) + public/media/_living-rollout-meta.json. Idempotent.
//   node scripts/build-living-heroes.mjs
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'scripts', 'data', 'living-images.json');
const UA = 'NegaraKuBot/1.0 (https://negaraku.md; living image sourcing)';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const clean = u => String(u).split('?')[0];
async function dl(url) { for (let i = 0; i < 5; i++) { try { const r = await fetch(url, { headers: { 'User-Agent': UA, 'Referer': 'https://commons.wikimedia.org/' }, signal: AbortSignal.timeout(90000) }); if (r.ok) return Buffer.from(await r.arrayBuffer()); } catch {} await sleep(1500 * (i + 1)); } return null; }
async function toWebp(buf, out) { let q = 82, o; for (; q >= 30; q -= 6) { o = await sharp(buf).resize(1600, 900, { fit: 'cover', position: 'attention' }).modulate({ saturation: 1.04, brightness: 1.02 }).webp({ quality: q }).toBuffer(); if (o.length <= 180 * 1024) break; } fs.writeFileSync(out, o); return Math.round(o.length / 1024); }
const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));
const meta = {};
for (const [key, set] of Object.entries(data)) {
  const [cat, slug] = key.split('/');
  const dir = path.join(ROOT, 'public', 'media', cat, slug); fs.mkdirSync(dir, { recursive: true });
  const entry = { hero: null, body: [] };
  const jobs = [['hero', set.hero], ...(set.body || []).map((b, i) => [`body-${i + 1}`, b])];
  for (const [name, im] of jobs) { if (!im?.url) continue;
    const buf = await dl(clean(im.url)); if (!buf) { console.log('DL FAIL', key, name); continue; }
    const kb = await toWebp(buf, path.join(dir, `${name}.webp`));
    const rec = { file: `/media/${cat}/${slug}/${name}.webp`, credit: `${im.by} / Wikimedia Commons`, license: im.license, source: im.page, kind: im.kind || 'actual', origin: 'third-party', subject: im.subject || '', alt: im.alt, kb };
    if (name === 'hero') entry.hero = rec; else entry.body.push(rec);
    console.log(`${key}/${name}  ${kb}KB  (${im.by}, ${im.license})`);
  }
  meta[key] = entry;
}
fs.writeFileSync(path.join(ROOT, 'public', 'media', '_living-rollout-meta.json'), JSON.stringify(meta, null, 2));
console.log(`\ndone — ${Object.keys(meta).length} articles`);
