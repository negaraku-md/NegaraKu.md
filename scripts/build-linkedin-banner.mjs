// LinkedIn Company Page banner generator — ONE banner (LinkedIn is a single,
// English-led page, NOT per-language like Facebook — see memory negaraku-linkedin-page).
//
// Design mirrors the Facebook cover brand system (scripts/build-fb-covers.mjs): warm-black
// vertical gradient, gold top hairline, two faint gold hibiscus watermarks (brand FLOWER_D),
// centred hexagon+wordmark lockup, then the English tagline + subtitle + a row listing the
// four public languages. Sized 1584x396 (4:1) — LinkedIn's cover proportion — and designed
// crop-tolerant (full-bleed background + centred content within safe margins) so it holds up
// even if LinkedIn crops to a shorter band.
//
// Fonts come from the OS by family name (Windows: Segoe UI / Nirmala UI / Microsoft YaHei),
// resolved by sharp/librsvg. Output: public/brand/NegaraKu.md.LinkedIn-Cover.png
// Re-run: `node scripts/build-linkedin-banner.mjs`, then re-upload to the LinkedIn Page.
import { createRequire } from 'module';
const REPO = 'D:/Workspace/negaraku.md';
const require = createRequire(REPO + '/');
const sharp = require('sharp');
const { FLOWER_D } = await import('file:///D:/Workspace/negaraku.md/scripts/logo-flower.mjs');

const GOLD = '#FFC000';
const BRAND = `${REPO}/public/brand`;
const OUT = `${BRAND}/NegaraKu.md.LinkedIn-Cover.png`;
const FONT = 'Segoe UI, Nirmala UI, Malgun Gothic, Yu Gothic UI, Yu Gothic, Meiryo, Microsoft YaHei, Noto Sans SC, sans-serif';

// LinkedIn's "Cover Image" editor crops to a FIXED, very wide/short box — LinkedIn's
// documented Company-Page cover ratio 1128x191 (≈5.9:1). Measured empirically by the crop
// rectangle: 4:1 / 2:1 / 3:1 all sat TALLER than the box so it grabbed only a thin centre
// band and clipped the language row (the dark top/bottom was the editor's DIM overlay, not
// letterbox). So render at that ratio, 2x for sharpness = 2256x382, with a COMPACT layout
// (lockup + tagline + language row; subtitle dropped — too tall for the short band).
const W = 2256, H = 382;
const TAGLINE = 'Let the world know about Malaysia';
const LANGS = ['Bahasa Melayu', 'English', '中文', 'தமிழ்'];

// Layout knobs — compact stack, centred around H/2
const GOLD_LINE = 8;          // top hairline thickness
const LOGO_W = 560;           // wordmark lockup width (asset is 3:1 → h = LOGO_W/3 ≈ 187)
const LOGO_CY = 120;          // lockup vertical centre
const Y_TAG = 278;            // tagline baseline
const Y_LANG = 338;           // language row baseline
const TAG_SIZE = 48, LANG_SIZE = 27;
// Flower watermark (matches FB flower transform math: cx/cy are the path's anchor centre)
const FL_SC = 0.46, FL_OP = 0.07, FL_CX = 381, FL_CY = 420, FL_BY = 191, FL_INSET = 265;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const flower = (bx, mir) =>
  `<g opacity="${FL_OP}"><path d="${FLOWER_D}" fill="${GOLD}" transform="translate(${bx - mir * FL_SC * FL_CX} ${FL_BY - FL_SC * FL_CY}) scale(${mir * FL_SC} ${FL_SC})"/></g>`;

function langRow(y) {
  const GAP = 20;
  let spans = '';
  LANGS.forEach((l, i) => {
    if (i) spans += `<tspan dx="${GAP}" fill="${GOLD}">·</tspan>`;
    const dx = i ? ` dx="${GAP}"` : '';
    spans += `<tspan${dx} fill="#e9e9e9" font-weight="500">${esc(l)}</tspan>`;
  });
  return `<text x="${W / 2}" y="${y}" text-anchor="middle" font-family="${FONT}" font-size="${LANG_SIZE}">${spans}</text>`;
}

async function main() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#100e0a"/><stop offset="0.30" stop-color="#161209"/>
      <stop offset="0.50" stop-color="#151209"/><stop offset="0.75" stop-color="#0e0c0a"/>
      <stop offset="1" stop-color="#08070a"/></linearGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    ${flower(FL_INSET, 1)}
    ${flower(W - FL_INSET, -1)}
    <rect x="0" y="0" width="${W}" height="${GOLD_LINE}" fill="${GOLD}"/>
    <text x="${W / 2}" y="${Y_TAG}" text-anchor="middle" font-family="${FONT}" font-weight="700" font-size="${TAG_SIZE}" fill="#ffffff">${esc(TAGLINE)}</text>
    ${langRow(Y_LANG)}
  </svg>`;
  const base = await sharp(Buffer.from(svg)).png().toBuffer();
  const logo = await sharp(`${BRAND}/negaraku-lockup-transparent-1800.png`).resize({ width: LOGO_W }).toBuffer();
  const lh = (await sharp(logo).metadata()).height;
  await sharp(base)
    .composite([{ input: logo, left: Math.round((W - LOGO_W) / 2), top: Math.round(LOGO_CY - lh / 2) }])
    .png({ compressionLevel: 9 }).toFile(OUT);
  console.log('· wrote LinkedIn banner', `${W}x${H}`, '→', OUT);
}
main();
