// build-economy-heroes.mjs — fetch + process hero images for ECONOMY-pillar
// articles that warrant a lead photo. All sources are free-licensed Wikimedia
// Commons images, chosen to be honest + on-topic (Malaysian where a verified
// Malaysian image exists). Committed so the heroes are reproducible, not one-off
// temp files (mirrors build-concept-heroes.mjs).
//
//   node scripts/build-economy-heroes.mjs
//
// Writes public/media/economy/<slug>/hero.webp (1600x900 ≤180KB) and prints the
// frontmatter values (heroCredit/heroLicense/heroSource) for wiring.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const UA = 'NegaraKuBot/1.0 (https://negaraku.md; hero image sourcing)';
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function dl(url) {
  for (let i = 0; i < 4; i++) {
    try { const r = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60000) }); if (r.ok) return Buffer.from(await r.arrayBuffer()); } catch {}
    await sleep(1500 * (i + 1));
  }
  return null;
}
// slug → chosen Wikimedia image. `url` is the direct upload URL (utm stripped);
// `page` is the Commons File: URL (heroSource); credit = "<artist> / Wikimedia Commons".
const HEROES = [
  { slug: 'malaysia-budget-2027', url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Kuala_Lumpur_Malaysia_Bangunan_Parlimen_Malaysia-01.jpg', lic: 'CC BY-SA 3.0', by: 'CEphoto, Uwe Aranas', page: 'https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_Malaysia_Bangunan_Parlimen_Malaysia-01.jpg' },
];
const meta = [];
for (const h of HEROES) {
  const buf = await dl(h.url);
  if (!buf) { console.log('DOWNLOAD FAIL', h.slug); continue; }
  const dir = path.join('public', 'media', 'economy', h.slug);
  fs.mkdirSync(dir, { recursive: true });
  let q = 82, out;
  for (; q >= 30; q -= 6) {
    out = await sharp(buf).resize(1600, 900, { fit: 'cover', position: 'attention' }).modulate({ saturation: 1.04, brightness: 1.02 }).webp({ quality: q }).toBuffer();
    if (out.length <= 180 * 1024) break;
  }
  fs.writeFileSync(path.join(dir, 'hero.webp'), out);
  meta.push({ slug: h.slug, credit: `${h.by} / Wikimedia Commons`, license: h.lic, source: h.page, kb: Math.round(out.length / 1024) });
  console.log(`${h.slug}  ${Math.round(out.length / 1024)}KB  q${q}  (${h.by})`);
}
fs.writeFileSync(path.join('public', 'media', 'economy', '_economy-heroes-meta.json'), JSON.stringify(meta, null, 2));
console.log('\ndone —', meta.length, 'hero(es)');
