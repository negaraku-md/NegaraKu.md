// build-measure-cards.mjs — PROTOTYPE key-fact "measure cards" for live-event
// social bursts (the ANC-style atomic card, done in the NegaraKu brand + 9 langs +
// a "sourced / not-yet-law" trust mark). Renders ONE square 1080×1080 card per fact
// via sharp (SVG → PNG). This sample proves the visual bar before we wire the full
// keyTakeaways → cards → multi-channel burst pipeline (see docs/plans/fb-event-campaign.md).
//
// Usage: node scripts/build-measure-cards.mjs   → writes public/brand/measure-cards/<id>.png
// Fonts: Montserrat/Lato vendored in assets/og-fonts (embedded as @font-face data URIs);
//        CJK/Tamil/Thai fall back to the OS stack.

import { readFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { FLOWER_D, FLOWER_VB, FLOWER_CX, FLOWER_CY } from './logo-flower.mjs';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'brand', 'measure-cards');
mkdirSync(OUT, { recursive: true });

const GOLD = '#FFC000';
const INK = '#F5F3EC';
const MUTE = '#A9A49A';

// --- embed vendored Latin fonts so Montserrat/Lato render identically everywhere.
const b64 = (p) => readFileSync(path.join(ROOT, 'assets', 'og-fonts', p)).toString('base64');
const FONTS = `
  @font-face{font-family:'Montserrat';font-weight:800;src:url(data:font/ttf;base64,${b64('Montserrat-ExtraBold.ttf')}) format('truetype');}
  @font-face{font-family:'Montserrat';font-weight:700;src:url(data:font/ttf;base64,${b64('Montserrat-Bold.ttf')}) format('truetype');}
  @font-face{font-family:'Lato';font-weight:700;src:url(data:font/ttf;base64,${b64('Lato-Bold.ttf')}) format('truetype');}
  @font-face{font-family:'Lato';font-weight:400;src:url(data:font/ttf;base64,${b64('Lato-Regular.ttf')}) format('truetype');}
`;
const TITLE = "Montserrat,'Noto Sans CJK SC','Microsoft YaHei','Noto Sans Tamil','Noto Sans Thai','Malgun Gothic','Yu Gothic UI',sans-serif";
const BODY = "Lato,'Noto Sans CJK SC','Microsoft YaHei','Noto Sans Tamil','Noto Sans Thai',sans-serif";

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// crude but serviceable width model: CJK glyphs ≈ 1em, others ≈ 0.56em.
const emWidth = (s) => [...s].reduce((w, ch) => w + (/[⺀-鿿가-힣぀-ヿ＀-￯]/.test(ch) ? 1 : 0.56), 0);
function wrap(text, maxEm) {
  const hard = String(text).split('\n');
  const lines = [];
  for (const seg of hard) {
    // CJK has no spaces → wrap by char; else by word.
    const cjk = emWidth(seg) / Math.max([...seg].length, 1) > 0.8;
    if (cjk) {
      let line = '';
      for (const ch of seg) {
        if (emWidth(line + ch) > maxEm && line) { lines.push(line); line = ch; }
        else line += ch;
      }
      if (line) lines.push(line);
    } else {
      let line = '';
      for (const word of seg.split(/\s+/)) {
        if (emWidth(line ? line + ' ' + word : word) > maxEm && line) { lines.push(line); line = word; }
        else line = line ? line + ' ' + word : word;
      }
      if (line) lines.push(line);
    }
  }
  return lines;
}

function card({ id, kicker, fact, sourced, caveat, cta }) {
  const W = 1080, H = 1080, PAD = 84;
  // fit the fact: pick a font size whose longest line fits the content width.
  const maxW = W - PAD * 2;
  let fontPx = 92, lines;
  for (;;) {
    const maxEm = maxW / (fontPx * 0.62); // ~advance per em at this weight
    lines = wrap(fact, maxEm);
    const blockH = lines.length * fontPx * 1.16;
    if ((lines.length <= 5 && blockH < 560) || fontPx <= 56) break;
    fontPx -= 4;
  }
  const lineH = fontPx * 1.16;
  const startY = 560 - ((lines.length - 1) * lineH) / 2; // vertical centre of the fact block

  const fl = (() => {
    const s = 620 / FLOWER_VB; // scale flower
    const tx = W - 150, ty = H - 70;
    return `<g transform="translate(${tx} ${ty}) scale(${s}) translate(${-FLOWER_CX} ${-FLOWER_CY})" opacity="0.05"><path d="${FLOWER_D}" fill="${GOLD}"/></g>`;
  })();

  const factSvg = lines.map((ln, i) =>
    `<text x="${PAD}" y="${startY + i * lineH}" font-family="${TITLE}" font-weight="800" font-size="${fontPx}" fill="${INK}" letter-spacing="-0.5">${esc(ln)}</text>`
  ).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <style>${FONTS}</style>
    <radialGradient id="bg" cx="28%" cy="22%" r="95%">
      <stop offset="0%" stop-color="#1a140a"/><stop offset="55%" stop-color="#0b0a07"/><stop offset="100%" stop-color="#000000"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${fl}
  <rect x="0" y="0" width="${W}" height="8" fill="${GOLD}"/>
  <!-- kicker -->
  <text x="${PAD}" y="150" font-family="${TITLE}" font-weight="700" font-size="30" fill="${GOLD}" letter-spacing="3">${esc(kicker)}</text>
  <line x1="${PAD}" y1="186" x2="${PAD + 92}" y2="186" stroke="${GOLD}" stroke-width="4"/>
  <!-- the fact -->
  ${factSvg}
  <!-- divider -->
  <line x1="${PAD}" y1="852" x2="${W - PAD}" y2="852" stroke="#2a2620" stroke-width="2"/>
  <!-- trust row -->
  <g transform="translate(${PAD} 904)">
    <circle cx="17" cy="0" r="17" fill="none" stroke="${GOLD}" stroke-width="3"/>
    <path d="M9 0 l6 7 l11 -15" fill="none" stroke="${GOLD}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="48" y="9" font-family="${BODY}" font-weight="700" font-size="30" fill="${INK}">${esc(sourced)}</text>
  </g>
  <text x="${PAD}" y="972" font-family="${BODY}" font-weight="400" font-size="26" fill="${MUTE}">${esc(caveat)}</text>
  <!-- wordmark + cta -->
  <text x="${W - PAD}" y="915" text-anchor="end" font-family="${TITLE}" font-weight="800" font-size="40"><tspan fill="${INK}">NegaraKu</tspan><tspan fill="${GOLD}">.md</tspan></text>
  <text x="${W - PAD}" y="966" text-anchor="end" font-family="${BODY}" font-weight="700" font-size="26" fill="${GOLD}">${esc(cta)}</text>
</svg>`;
}

const CARDS = [
  { id: 'zh-wage', kicker: '财案 2027 · 打工族', fact: '最低薪金\nRM1,700 → RM2,000', sourced: '有出处 · 可查证', caveat: '已宣布，尚未成为法律（2027年6月起）', cta: 'negaraku.md' },
  { id: 'zh-tax', kicker: '财案 2027 · 家庭', fact: '个人所得税下调 1 个百分点\n一般减免 RM9,000 → RM12,000', sourced: '有出处 · 可查证', caveat: '已宣布，尚未成为法律', cta: 'negaraku.md' },
  { id: 'en-wage', kicker: 'BUDGET 2027 · WORKERS', fact: 'Minimum wage\nRM1,700 → RM2,000', sourced: 'Sourced & verifiable', caveat: 'Announced — not yet law (from June 2027)', cta: 'negaraku.md' },
  { id: 'ms-sme', kicker: 'BELANJAWAN 2027 · PKS', fact: 'Cukai pendapatan PKS\ndipotong 1 mata peratus', sourced: 'Bersumber & boleh disahkan', caveat: 'Diumumkan — belum menjadi undang-undang', cta: 'negaraku.md' },
];

for (const c of CARDS) {
  const svg = card(c);
  const out = path.join(OUT, `${c.id}.png`);
  await sharp(Buffer.from(svg)).png().toFile(out);
  console.log('wrote', path.relative(ROOT, out));
}
console.log('\nSample measure cards rendered →', path.relative(ROOT, OUT));
