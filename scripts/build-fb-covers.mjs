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
const FONT = 'Segoe UI, Nirmala UI, Leelawadee UI, Tahoma, Malgun Gothic, Yu Gothic UI, Yu Gothic, Meiryo, Microsoft YaHei, Noto Sans SC, Noto Sans Thai, sans-serif';

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
  { code: 'th', label: 'ไทย', file: 'NegaraKu.md.th.Facebook-Cover-Photo.png',
    tagline: 'ให้โลกได้รู้จักมาเลเซีย',
    subtitle: 'ฐานความรู้เกี่ยวกับมาเลเซียแบบโอเพนซอร์สและเป็นมิตรกับ AI' },
  { code: 'vi', label: 'Tiếng Việt', file: 'NegaraKu.md.vi.Facebook-Cover-Photo.png',
    tagline: 'Hãy để thế giới biết đến Malaysia',
    subtitle: 'Cơ sở tri thức mã nguồn mở, thân thiện với AI về Malaysia' },
  { code: 'id', label: 'Bahasa Indonesia', file: 'NegaraKu.md.id.Facebook-Cover-Photo.png',
    tagline: 'Biarkan dunia mengenal Malaysia',
    subtitle: 'Basis pengetahuan sumber terbuka dan ramah-AI tentang Malaysia' },
  // ar subtitle uses the pure-Arabic AI term (الذكاء الاصطناعي) rather than the Latin
  // "AI": an embedded LTR run inside RTL text makes the SVG bidi reorder the line
  // (the preposition dangles), which looks broken on the cover.
  { code: 'ar', label: 'العربية', file: 'NegaraKu.md.ar.Facebook-Cover-Photo.png',
    tagline: 'دع العالم يعرف ماليزيا',
    subtitle: 'قاعدة معرفة مفتوحة المصدر وصديقة للذكاء الاصطناعي عن ماليزيا' },
  { code: 'hi', label: 'हिन्दी', file: 'NegaraKu.md.hi.Facebook-Cover-Photo.png',
    tagline: 'दुनिया को मलेशिया के बारे में बताएँ',
    subtitle: 'मलेशिया के बारे में ओपन-सोर्स, AI-अनुकूल ज्ञान आधार' },
  { code: 'es', label: 'Español', file: 'NegaraKu.md.es.Facebook-Cover-Photo.png',
    tagline: 'Que el mundo conozca Malasia',
    subtitle: 'Base de conocimiento de código abierto y compatible con la IA sobre Malasia' },
  { code: 'fr', label: 'Français', file: 'NegaraKu.md.fr.Facebook-Cover-Photo.png',
    tagline: 'Faire connaître la Malaisie au monde',
    subtitle: "Base de connaissances open source et adaptée à l'IA sur la Malaisie" },
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

// ---- language-selector row, auto-fitting so it stays clean as languages grow ----
// Approx glyph advance (in em) per script — for fit math only, not exact metrics.
function glyphEm(ch) {
  const c = ch.codePointAt(0);
  if ((c >= 0x1100 && c <= 0x11ff) || (c >= 0x2e80 && c <= 0x9fff) ||
      (c >= 0xac00 && c <= 0xd7a3) || (c >= 0xf900 && c <= 0xfaff) ||
      (c >= 0xff00 && c <= 0xffef)) return 1.0;                                  // CJK / Hangul / kana (full-width)
  if ((c >= 0x0590 && c <= 0x06ff) || (c >= 0x0900 && c <= 0x097f) ||
      (c >= 0x0b80 && c <= 0x0bff) || (c >= 0x0e00 && c <= 0x0e7f)) return 0.62; // Arabic / Devanagari / Tamil / Thai
  return 0.54;                                                                   // Latin & default
}
const labelEm = (s) => [...s].reduce((w, ch) => w + glyphEm(ch), 0);
const SEP_EM = glyphEm('·');
// Row width scales linearly with font size: each separator adds the middot glyph + a
// gap of 0.7·fs on each side. So rowWidth(l, fs) === fs · rowWidth(l, 1).
function rowWidth(langs, fs) {
  let em = 0;
  langs.forEach((l, i) => { if (i) em += SEP_EM; em += labelEm(l.label); });
  return em * fs + (langs.length - 1) * 2 * (0.7 * fs);
}
// One centred line of labels; the active one is gold + underlined.
function langRowLine(langs, W, y, active, fs) {
  const gap = Math.round(0.7 * fs);
  let spans = '';
  langs.forEach((l, i) => {
    if (i) spans += `<tspan dx="${gap}" fill="#6f6f6f">·</tspan>`;
    const dx = i ? ` dx="${gap}"` : '';
    spans += l.code === active
      ? `<tspan${dx} fill="${GOLD}" font-weight="600" text-decoration="underline">${esc(l.label)}</tspan>`
      : `<tspan${dx} fill="#8a8a8a">${esc(l.label)}</tspan>`;
  });
  return `<text x="${W / 2}" y="${y}" text-anchor="middle" font-family="${FONT}" font-size="${fs}">${spans}</text>`;
}
// Fit the full set on ONE line, shrinking the font down to MIN; if it still won't fit,
// wrap to TWO centred lines. yc is the row's vertical centre. Scales to many languages.
function langRow(W, yc, active) {
  const BASE = 25, MIN = 18, MARGIN = 80;
  const availW = W - 2 * MARGIN;
  const unit = rowWidth(LANGS, 1);           // width at fs=1 → fs that exactly fills = availW/unit
  const oneLineFs = availW / unit;
  if (oneLineFs >= MIN) return langRowLine(LANGS, W, yc, active, Math.min(BASE, oneLineFs));
  // wrap into two near-equal halves (split by cumulative label width)
  const totalEm = LANGS.reduce((s, l) => s + labelEm(l.label), 0);
  let acc = 0, cut = LANGS.length;
  for (let i = 0; i < LANGS.length; i++) { acc += labelEm(LANGS[i].label); if (acc >= totalEm / 2) { cut = i + 1; break; } }
  const a = LANGS.slice(0, cut), b = LANGS.slice(cut);
  const fs = Math.max(MIN, Math.min(BASE, availW / rowWidth(a, 1), availW / rowWidth(b, 1)));
  const lh = Math.round(fs + 14);
  return langRowLine(a, W, yc - Math.round(lh / 2), active, fs) +
         langRowLine(b, W, yc + Math.round(lh / 2), active, fs);
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
