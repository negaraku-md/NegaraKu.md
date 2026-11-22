// build-food-heroes.mjs — hero + in-body images for Malaysian food-lifestyle articles,
// which were shipping with no photo. Picks live in scripts/data/food-images.json
// (one entry per slug: a hero + up to two body images). Every image is a free-licensed
// Wikimedia Commons photo, each license-verified against the Commons File page (API) and
// visually inspected to confirm it genuinely depicts the place (weak/ambiguous/first-hit
// shots were rejected). Writes public/media/food/<slug>/{hero,body-1,body-2}.webp
// (1600x900, aim <=180 KB) + public/media/food/_food-rollout-meta.json (provenance, read by
// the frontmatter injectors). Re-running is idempotent.
//
//   node scripts/build-food-heroes.mjs
//
// `kind`: a straight depiction of the named place = actual.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'scripts', 'data', 'food-images.json');
const UA = 'NegaraKuBot/1.0 (https://negaraku.md; tourism image sourcing)';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const cleanUrl = u => String(u).split('?')[0];
async function dl(url) {
  for (let i = 0; i < 5; i++) {
    try { const r = await fetch(url, { headers: { 'User-Agent': UA, 'Referer': 'https://commons.wikimedia.org/' }, signal: AbortSignal.timeout(90000) }); if (r.ok) return Buffer.from(await r.arrayBuffer()); } catch { }
    await sleep(1500 * (i + 1));
  }
  return null;
}
async function toWebp(buf, outFile) {
  let q = 82, out;
  for (; q >= 30; q -= 6) {
    out = await sharp(buf).resize(1600, 900, { fit: 'cover', position: 'attention' }).modulate({ saturation: 1.04, brightness: 1.02 }).webp({ quality: q }).toBuffer();
    if (out.length <= 180 * 1024) break;
  }
  fs.writeFileSync(outFile, out);
  return Math.round(out.length / 1024);
}

const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));
const meta = {};
for (const [slug, set] of Object.entries(data)) {
  const dir = path.join(ROOT, 'public', 'media', 'food', slug);
  fs.mkdirSync(dir, { recursive: true });
  const entry = { slug, hero: null, body: [] };
  const jobs = [['hero', set.hero], ...(set.body || []).map((b, i) => [`body-${i + 1}`, b])];
  for (const [name, im] of jobs) {
    if (!im?.url) continue;
    const buf = await dl(cleanUrl(im.url));
    if (!buf) { console.log('DL FAIL', slug, name); continue; }
    const kb = await toWebp(buf, path.join(dir, `${name}.webp`));
    const rec = { file: `/media/food/${slug}/${name}.webp`, credit: `${im.by} / Wikimedia Commons`, license: im.license, source: im.page, kind: im.kind || 'actual', subject: im.subject || '', alt: im.alt, kb };
    if (name === 'hero') entry.hero = rec; else entry.body.push(rec);
    console.log(`${slug}/${name}  ${kb}KB  (${im.by}, ${im.license})`);
  }
  meta[slug] = entry;
}
fs.writeFileSync(path.join(ROOT, 'public', 'media', 'food', '_food-rollout-meta.json'), JSON.stringify(meta, null, 2));
const nHero = Object.values(meta).filter(m => m.hero).length;
const nBody = Object.values(meta).reduce((n, m) => n + m.body.length, 0);
console.log(`\ndone — ${Object.keys(meta).length} slugs · ${nHero} heroes · ${nBody} body images`);
