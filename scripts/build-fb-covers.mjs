// Facebook Page cover generator — ONE template for every language.
//
// Design: NegaraKu.md brand cover (black warm-gradient bg, gold top hairline, two
// faint gold hibiscus watermarks, centred hexagon+wordmark lockup) with a per-language
// tagline + subtitle + a language selector row that lists EVERY language, highlighting
// the current one in gold + underline.
//
// The background/flowers/logo/gold-line are reconstructed EXACTLY from the original
// ms/en/zh covers by taking the per-pixel MIN across the three (they share an identical
// background and differ only in light text — min() keeps the dark bg and erases every
// language's text). That guarantees pixel-identical framing to the hand-made covers.
// The clean plate is cached at public/brand/_fb-cover-blank.png.
//
// TO ADD A LANGUAGE: append one entry to LANGS below (code, native label, output file,
// tagline, subtitle), then `node scripts/build-fb-covers.mjs`. Re-run regenerates ALL
// covers so every page shows the full, updated language row. Then re-upload each cover
// to its FB Page. Fonts come from the OS (Windows: Segoe UI / Nirmala UI / Malgun Gothic
// / Yu Gothic / Microsoft YaHei) — sharp/librsvg resolves them by family name.
import { createRequire } from 'module';
import fs from 'fs';
const REPO = 'D:/Workspace/negaraku.md';
const require = createRequire(REPO + '/');
const sharp = require('sharp');
const { FLOWER_D } = await import('file:///D:/Workspace/negaraku.md/scripts/logo-flower.mjs');

const GOLD = '#FFC000';
const BRAND = `${REPO}/public/brand`;
const BLANK = `${BRAND}/_fb-cover-blank.png`;
// Universal font stack — first family that has each glyph wins (Latin→Segoe, Tamil→Nirmala,
// Korean→Malgun, Japanese kana→Yu Gothic, Chinese→YaHei, fallback Noto Sans SC).
const FONT = 'Segoe UI, Nirmala UI, Malgun Gothic, Yu Gothic UI, Yu Gothic, Meiryo, Microsoft YaHei, Noto Sans SC, sans-serif';

// Order = display order in the language row. Add new languages here.
const LANGS = [
  { code: 'ms', label: 'Bahasa Melayu', file: 'NegaraKu.md.Facebook-Cover-Photo.png',
    tagline: 'Biar dunia mengenali Malaysia',
    subtitle: 'Pangkalan pengetahuan sumber terbuka dan mesra-AI tentang Malaysia' },
  { code: 'en', label: 'English', file: 'NegaraKu.md.en.Facebook-Cover-Photo.png',
    tagline: 'Let the world know about Malaysia',
    subtitle: 'Open-source, AI-friendly knowledge base about Malaysia' },
  { code: 'zh', label: '中文', file: 'NegaraKu.md.zh.Facebook-Cover-Photo.png',
    tagline: '让世界认识马来西亚',
    subtitle: '关于马来西亚的开源、AI 友好知识库' },
  { code: 'ta', label: 'தமிழ்', file: 'NegaraKu.md.ta.Facebook-Cover-Photo.png',
    tagline: 'உலகம் மலேசியாவை அறியட்டும்',
    subtitle: 'மலேசியா பற்றிய திறந்த-மூல, AI-நட்பு அறிவுக் களஞ்சியம்' },
  { code: 'ja', label: '日本語', file: 'NegaraKu.md.ja.Facebook-Cover-Photo.png',
    tagline: '世界にマレーシアを知ってもらおう',
    subtitle: 'マレーシアに関するオープンソースでAIフレンドリーな知識ベース' },
  { code: 'ko', label: '한국어', file: 'NegaraKu.md.ko.Facebook-Cover-Photo.png',
    tagline: '세계에 말레이시아를 알리다',
    subtitle: '말레이시아에 관한 오픈소스 AI 친화적 지식 베이스' },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function ensureBlank(W, H) {
  if (fs.existsSync(BLANK)) return;
  // Clean, text-free plate generated from scratch, matched to the hand-made en cover:
  // warm black gradient (sampled from en), 11px gold top line, two faint gold hibiscus
  // watermarks (brand FLOWER_D), centred hexagon+wordmark lockup.
  const SC = 0.72, OP = 0.10, cx = 381, cy = 420, by = 210; // flower scale / opacity / bloom anchor
  const flower = (bx, mir) =>
    `<g opacity="${OP}"><path d="${FLOWER_D}" fill="${GOLD}" transform="translate(${bx - mir * SC * cx} ${by - SC * cy}) scale(${mir * SC} ${SC})"/></g>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#100e0a"/><stop offset="0.30" stop-color="#161209"/>
      <stop offset="0.50" stop-color="#151209"/><stop offset="0.75" stop-color="#0e0c0a"/>
      <stop offset="1" stop-color="#08070a"/></linearGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    ${flower(150, 1)}
    ${flower(W - 150, -1)}
    <rect x="0" y="0" width="${W}" height="11" fill="${GOLD}"/>
  </svg>`;
  const base = await sharp(Buffer.from(svg)).png().toBuffer();
  const LOGO_W = 640;
  const logo = await sharp(`${BRAND}/negaraku-lockup-transparent-1800.png`).resize({ width: LOGO_W }).toBuffer();
  const lh = (await sharp(logo).metadata()).height;
  await sharp(base)
    .composite([{ input: logo, left: Math.round((W - LOGO_W) / 2), top: Math.round(195 - lh / 2) }])
    .png().toFile(BLANK);
  console.log('· wrote clean plate (from-scratch, en-matched: 11px gold line)', BLANK);
}

function langRow(W, y, active) {
  // Explicit dx offsets around each separator — SVG renderers collapse whitespace, so
  // nbsp/em-space don't widen; dx does. 18px before + 18px after each middot.
  const GAP = 18;
  let spans = '';
  LANGS.forEach((l, i) => {
    if (i) spans += `<tspan dx="${GAP}" fill="#6f6f6f">·</tspan>`;
    const dx = i ? ` dx="${GAP}"` : '';
    spans += l.code === active
      ? `<tspan${dx} fill="${GOLD}" font-weight="600" text-decoration="underline">${esc(l.label)}</tspan>`
      : `<tspan${dx} fill="#8a8a8a">${esc(l.label)}</tspan>`;
  });
  return `<text x="${W / 2}" y="${y}" text-anchor="middle" font-family="${FONT}" font-size="25">${spans}</text>`;
}

async function main() {
  const m = await sharp(`${BRAND}/NegaraKu.md.en.Facebook-Cover-Photo.png`).metadata();
  const W = m.width, H = m.height;
  await ensureBlank(W, H);
  const blank = await sharp(BLANK).png().toBuffer();
  const yTag = Math.round(H * 0.649), ySub = Math.round(H * 0.718), yLang = Math.round(H * 0.795);
  for (const l of LANGS) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      <text x="${W / 2}" y="${yTag}" text-anchor="middle" font-family="${FONT}" font-weight="700" font-size="52" fill="#ffffff">${esc(l.tagline)}</text>
      <text x="${W / 2}" y="${ySub}" text-anchor="middle" font-family="${FONT}" font-size="29" fill="#c9c9c9">${esc(l.subtitle)}</text>
      ${langRow(W, yLang, l.code)}
    </svg>`;
    await sharp(blank).composite([{ input: Buffer.from(svg), left: 0, top: 0 }]).png({ compressionLevel: 9 }).toFile(`${BRAND}/${l.file}`);
    console.log('· cover', l.code, '→', l.file);
  }
  console.log('done —', LANGS.length, 'covers. Re-upload each to its FB Page.');
}
main();
