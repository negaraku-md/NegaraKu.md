// build-drink-heroes.mjs — hero images for Malaysian drink articles that were
// showing the branded fallback (no honest photo). All images are free-licensed
// Wikimedia Commons photos, each sourced + license-verified against the Commons
// File page (LicenseShortName + Artist via the Commons API) and visually inspected
// to confirm it genuinely depicts the drink. Two drinks (nutmeg-juice "air buah
// pala", barley "air barli") were DELIBERATELY left on the fallback — Commons has
// no genuine free photo of them, and a wrong-looking substitute would mislead.
//
//   node scripts/build-drink-heroes.mjs
//
// Writes public/media/food/<slug>/hero.webp (1600x900 <=180KB) + a meta json used
// by the frontmatter injector. `kind`: clean servings = actual; stall/scene shots
// (the drink in a vat / being pressed / a coconut opened) = representative.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const UA = 'NegaraKuBot/1.0 (https://negaraku.md; hero image sourcing)';
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function dl(url) {
  for (let i = 0; i < 5; i++) {
    try { const r = await fetch(url, { headers: { 'User-Agent': UA, 'Referer': 'https://commons.wikimedia.org/' }, signal: AbortSignal.timeout(60000) }); if (r.ok) return Buffer.from(await r.arrayBuffer()); } catch {}
    await sleep(1500 * (i + 1));
  }
  return null;
}
const HEROES = [
  { slug: 'teh-tarik', kind: 'actual', url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Teh_tarik_-_01.jpg', lic: 'CC BY-SA 4.0', by: 'Wiki Asmah', page: 'https://commons.wikimedia.org/wiki/File:Teh_tarik_-_01.jpg', alt: 'A clear glass mug of frothy brown pulled milk tea (teh tarik) on a marble table' },
  { slug: 'teh-halia', kind: 'actual', url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Teh_Halia_%28Singapore%29.jpg', lic: 'CC BY-SA 3.0', by: 'Schahryar', page: 'https://commons.wikimedia.org/wiki/File:Teh_Halia_(Singapore).jpg', alt: 'Glass mugs of brown ginger milk tea (teh halia) on a wooden table' },
  { slug: 'teh-o-ais-limau', kind: 'actual', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Iced_lemon_tea_%282015-08-20%29.JPG', lic: 'CC BY-SA 4.0', by: 'Lombroso', page: 'https://commons.wikimedia.org/wiki/File:Iced_lemon_tea_(2015-08-20).JPG', alt: 'A tall glass of iced black tea with lemon slices and no milk' },
  { slug: 'kopi-cham', kind: 'actual', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Tea%2BCoffee_Cham_-_Old_Town_Kopitiam_Mamak_AUD3.jpg', lic: 'CC BY-SA 3.0', by: 'Avlxyz', page: 'https://commons.wikimedia.org/wiki/File:Tea%2BCoffee_Cham_-_Old_Town_Kopitiam_Mamak_AUD3.jpg', alt: 'A frothy coffee-and-tea mix (kopi cham) in a floral kopitiam cup and saucer' },
  { slug: 'sirap-bandung', kind: 'actual', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Bandung_Drinks.jpg', lic: 'CC BY-SA 2.0', by: 'Kyle Lam', page: 'https://commons.wikimedia.org/wiki/File:Bandung_Drinks.jpg', alt: 'Two tall glasses of pink iced rose-syrup milk (sirap bandung) with straws' },
  { slug: 'milo-dinosaur', kind: 'actual', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Milo_dinosaur_-_a_cup_of_Milo_with_undissolved_Milo_powder_added_on_top.jpg', lic: 'CC BY-SA 4.0', by: 'Pauloleong2002', page: 'https://commons.wikimedia.org/wiki/File:Milo_dinosaur_-_a_cup_of_Milo_with_undissolved_Milo_powder_added_on_top.jpg', alt: 'A glass of iced Milo topped with a thick mound of undissolved Milo powder' },
  { slug: 'air-kelapa', kind: 'representative', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Kelapa_Muda_coconut_drink.jpg', lic: 'CC BY 2.0', by: 'Danumurthi Mahendra', page: 'https://commons.wikimedia.org/wiki/File:Kelapa_Muda_coconut_drink.jpg', alt: 'A street vendor opening a fresh green young coconut with a cleaver, beside a pile of coconuts' },
  { slug: 'air-kekwa', kind: 'actual', url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Chrysanthemum_tea.JPG', lic: 'CC BY-SA 3.0', by: 'Taman Renyah', page: 'https://commons.wikimedia.org/wiki/File:Chrysanthemum_tea.JPG', alt: 'A floral teacup of pale chrysanthemum tea (air kekwa) with steeping flowers' },
  { slug: 'air-limau-ais', kind: 'actual', url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Koh_Mak%2C_Thailand%2C_Lime_juice%2C_Lemonade%2C_Limeade.jpg', lic: 'CC BY 4.0', by: 'Vyacheslav Argenberg', page: 'https://commons.wikimedia.org/wiki/File:Koh_Mak,_Thailand,_Lime_juice,_Lemonade,_Limeade.jpg', alt: 'A tumbler of iced lime juice (air limau ais) with a fresh lime wedge, seen from above' },
  { slug: 'air-tebu', kind: 'representative', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Es_Air_Tebu_%28Sugarcane_juice%29_seller.JPG', lic: 'CC BY-SA 3.0', by: 'Gunawan Kartapranata', page: 'https://commons.wikimedia.org/wiki/File:Es_Air_Tebu_(Sugarcane_juice)_seller.JPG', alt: 'A street vendor pressing sugarcane through a mill beside jugs of fresh green sugarcane juice (air tebu)' },
  { slug: 'lassi', kind: 'actual', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Lassi-MB53.jpg', lic: 'CC BY-SA 4.0', by: 'Rajeeb', page: 'https://commons.wikimedia.org/wiki/File:Lassi-MB53.jpg', alt: 'Creamy white iced yogurt lassi in a patterned cup with a straw' },
  { slug: 'bubble-tea', kind: 'actual', url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Pearl_Milk_Tea_in_Chun_Shui_Tang.jpg', lic: 'CC0', by: 'Battlesnake1', page: 'https://commons.wikimedia.org/wiki/File:Pearl_Milk_Tea_in_Chun_Shui_Tang.jpg', alt: 'A tall glass of milk tea with a thick layer of black tapioca pearls at the base' },
  { slug: 'soya-bean', kind: 'actual', url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Soy_milk_%282%29.jpg', lic: 'CC BY-SA 3.0', by: 'LinasD', page: 'https://commons.wikimedia.org/wiki/File:Soy_milk_(2).jpg', alt: 'A tall glass of pale soybean milk with soybeans beside it' },
  { slug: 'cincau', kind: 'actual', url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Cincau.jpg', lic: 'CC BY-SA 4.0', by: 'Supardisahabu', page: 'https://commons.wikimedia.org/wiki/File:Cincau.jpg', alt: 'A chilled grass-jelly (cincau) drink with dark jelly settled at the base' },
  { slug: 'air-mata-kucing', kind: 'representative', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Air_Mata_Kuching_%28_Sweet_Monk_Fruit_Longan_Dessert_%29.jpg', lic: 'CC BY-SA 4.0', by: 'Dr.Francostein1975', page: 'https://commons.wikimedia.org/wiki/File:Air_Mata_Kuching_(_Sweet_Monk_Fruit_Longan_Dessert_).jpg', alt: 'A Malaysian hawker stall vat of dark air mata kucing longan drink with a bilingual sign' },
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
  meta.push({ slug: h.slug, kind: h.kind, origin: 'third-party', credit: `${h.by} / Wikimedia Commons`, license: h.lic, source: h.page, alt: h.alt, kb: Math.round(out.length / 1024) });
  console.log(`${h.slug}  ${Math.round(out.length / 1024)}KB  q${q}  ${h.kind}  (${h.by}, ${h.lic})`);
}
fs.writeFileSync(path.join('public', 'media', 'food', '_drink-heroes-meta.json'), JSON.stringify(meta, null, 2));
console.log('\ndone —', meta.length, 'of', HEROES.length, 'heroes');
