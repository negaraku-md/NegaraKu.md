// build-food-heroes-b2.mjs — hero images for the second batch of food articles
// (dish-named hawker spots + a few concept articles) that had no honest photo and
// were showing the branded fallback. All images are free-licensed Wikimedia Commons
// photos chosen by contact-sheet QA: honest and on-topic, Malaysian where a verified
// Malaysian image exists, and wired with a non-claiming "representative" alt — we do
// NOT claim the exact venue's own plating. Committed so heroes are reproducible.
//
//   node scripts/build-food-heroes-b2.mjs
//
// Writes public/media/food/<slug>/hero.webp (1600x900 ≤180KB) + prints wiring meta.
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
const HEROES = [
  { slug: '7-chai-ipoh-hor-fun', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Ipoh_Hor_Fun%2C_Yinzo_Kopi%2C_Ipoh%2C_Malaysia.jpg', lic: 'CC BY 2.0', by: 'Sharon Hahn Darlin', page: 'https://commons.wikimedia.org/wiki/File:Ipoh_Hor_Fun,_Yinzo_Kopi,_Ipoh,_Malaysia.jpg' },
  { slug: 'lum-lai-duck-meat-koay-teow-thng', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Rice_Noodle_With_Braised_Duck_And_Hard_Boiled_Egg_-_March_2024.jpg', lic: 'CC BY-SA 4.0', by: 'Banej', page: 'https://commons.wikimedia.org/wiki/File:Rice_Noodle_With_Braised_Duck_And_Hard_Boiled_Egg_-_March_2024.jpg' },
  { slug: 'super-star-koay-teow-soup', url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Fishball_noodle_soup.jpg', lic: 'CC BY 4.0', by: 'Misaochan2', page: 'https://commons.wikimedia.org/wiki/File:Fishball_noodle_soup.jpg' },
  { slug: 'alcohol-rules-in-malaysia', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Beer_in_7-Eleven%2C_Malaysia.jpg', lic: 'CC BY-SA 2.0', by: 'Jeremy Eades', page: 'https://commons.wikimedia.org/wiki/File:Beer_in_7-Eleven,_Malaysia.jpg' },
  { slug: 'michelin-guide-malaysia', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Michelin_Guide_2026_plaque.jpg', lic: 'CC BY-SA 4.0', by: 'Oleg Yunakov', page: 'https://commons.wikimedia.org/wiki/File:Michelin_Guide_2026_plaque.jpg' },
  { slug: 'pasar-malam-and-street-food', url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Section_8_Kota_Damansara_Night_Market.jpg', lic: 'CC0', by: 'Wiki Farazi', page: 'https://commons.wikimedia.org/wiki/File:Section_8_Kota_Damansara_Night_Market.jpg' },
];
const meta = [];
for (const h of HEROES) {
  const buf = await dl(h.url);
  if (!buf) { console.log('DOWNLOAD FAIL', h.slug); continue; }
  const dir = path.join('public', 'media', 'food', h.slug);
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
fs.writeFileSync(path.join('public', 'media', 'food', '_food-heroes-b2-meta.json'), JSON.stringify(meta, null, 2));
console.log('\ndone —', meta.length, 'heroes');
