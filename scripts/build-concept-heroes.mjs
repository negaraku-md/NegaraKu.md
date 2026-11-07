// build-concept-heroes.mjs — fetch + process the hero images for the food-pillar
// CONCEPT articles (the ones that aren't a specific dish or place, so they weren't
// in the restaurant/dish hero rollout). All sources are free-licensed Wikimedia
// Commons images, chosen by contact-sheet QA (honest + on-topic; Malaysian where a
// verified Malaysian image exists, otherwise a generic-but-accurate image with a
// non-claiming alt). Committed so the heroes are reproducible, not one-off temp.
//
//   node scripts/build-concept-heroes.mjs
//
// Writes public/media/food/<slug>/hero.webp (1600x900 ≤180KB) and prints the
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
// slug → chosen Wikimedia image. `file` is the Commons File: URL (heroSource);
// `url` is the direct upload URL; credit = "<artist> / Wikimedia Commons".
const HEROES = [
  { slug: 'kopi-teh-tarik-and-coffeeshop-drinks', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Teh_tarik_2.jpg', lic: 'CC BY-SA 2.0', by: 'Alpha from Melbourne, Australia', page: 'https://commons.wikimedia.org/wiki/File:Teh_tarik_2.jpg' },
  { slug: 'hawker-centres-and-food-courts', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Seventy_Two_Food_Court.jpg', lic: 'CC BY-SA 4.0', by: 'Chongkian', page: 'https://commons.wikimedia.org/wiki/File:Seventy_Two_Food_Court.jpg' },
  { slug: 'malaysian-food-as-national-and-unesco-heritage', url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Nasi_Lemak%2C_di_Lapangan_Terbang_Antarabangsa_Kuala_Lumpur_2_%28KLIA_2%29.jpg', lic: 'CC BY-SA 4.0', by: 'Meandkancil2020', page: 'https://commons.wikimedia.org/wiki/File:Nasi_Lemak,_di_Lapangan_Terbang_Antarabangsa_Kuala_Lumpur_2_(KLIA_2).jpg' },
  { slug: 'durian-culture-and-varieties', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Durian_-_The_Fruit_Hunters_-_Eye_Steel_Film.jpg', lic: 'CC BY 2.0', by: 'Eye Steel Film', page: 'https://commons.wikimedia.org/wiki/File:Durian_-_The_Fruit_Hunters_-_Eye_Steel_Film.jpg' },
  { slug: 'dining-etiquette-tipping-and-service-charge', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Banana_leaf_rice.jpg', lic: 'CC BY-SA 4.0', by: 'Misaochan', page: 'https://commons.wikimedia.org/wiki/File:Banana_leaf_rice.jpg' },
  { slug: 'cinema-entertainment-and-censorship', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Columbia_City_Cinema_main_hall.jpg', lic: 'CC BY-SA 3.0', by: 'Joe Mabel', page: 'https://commons.wikimedia.org/wiki/File:Columbia_City_Cinema_main_hall.jpg' },
  { slug: 'dietary-restrictions-and-vegetarian-dining', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Vegan_tali_Annalakshmi.JPG', lic: 'CC BY-SA 4.0', by: 'Johor Haki', page: 'https://commons.wikimedia.org/wiki/File:Vegan_tali_Annalakshmi.JPG' },
  { slug: 'shopping-malls-and-retail-culture', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Suria_KLCC_%2818952839826%29.jpg', lic: 'CC BY 2.0', by: 'Jorge Láscar', page: 'https://commons.wikimedia.org/wiki/File:Suria_KLCC_(18952839826).jpg' },
  { slug: 'regional-and-ethnic-cuisines', url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Dinner%2C_Kuala_Lumpur_International_Airport%2C_2025_%2801%29.jpg', lic: 'CC BY-SA 4.0', by: 'Bahnfrend', page: 'https://commons.wikimedia.org/wiki/File:Dinner,_Kuala_Lumpur_International_Airport,_2025_(01).jpg' },
  { slug: 'ramadan-bazaars-and-fasting-month-food', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Bazaar_Ramadan_in_Dato_Keramat_%2842273936581%29.jpg', lic: 'CC BY 2.0', by: 'Leilafadzleen', page: 'https://commons.wikimedia.org/wiki/File:Bazaar_Ramadan_in_Dato_Keramat_(42273936581).jpg' },
  { slug: 'festive-foods-across-malaysian-festivals', url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Contoh_jamuan_hari_raya.jpg', lic: 'CC BY-SA 4.0', by: 'Anarohana70', page: 'https://commons.wikimedia.org/wiki/File:Contoh_jamuan_hari_raya.jpg' },
  { slug: 'kopitiam-mamak-culture', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Kluang_-_Hailam_Toast_kopitiam_May_2024.jpg', lic: 'CC BY-SA 4.0', by: 'Dominic Nelson', page: 'https://commons.wikimedia.org/wiki/File:Kluang_-_Hailam_Toast_kopitiam_May_2024.jpg' },
];
const meta = [];
for (const h of HEROES) {
  const buf = await dl(h.url);
  if (!buf) { console.log('DOWNLOAD FAIL', h.slug); continue; }
  const dir = path.join('public', 'media', 'food', h.slug);
  fs.mkdirSync(dir, { recursive: true });
  let q = 82, out;
  for (; q >= 30; q -= 6) {
    out = await sharp(buf).resize(1600, 900, { fit: 'cover', position: 'attention' }).modulate({ saturation: 1.05, brightness: 1.02 }).webp({ quality: q }).toBuffer();
    if (out.length <= 180 * 1024) break;
  }
  fs.writeFileSync(path.join(dir, 'hero.webp'), out);
  meta.push({ slug: h.slug, credit: `${h.by} / Wikimedia Commons`, license: h.lic, source: h.page, kb: Math.round(out.length / 1024) });
  console.log(`${h.slug}  ${Math.round(out.length / 1024)}KB  q${q}  (${h.by})`);
}
fs.writeFileSync(path.join('public', 'media', 'food', '_concept-heroes-meta.json'), JSON.stringify(meta, null, 2));
console.log('\ndone —', meta.length, 'heroes');
