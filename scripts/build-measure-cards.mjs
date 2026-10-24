// build-measure-cards.mjs — PROTOTYPE key-fact "measure cards" for live-event
// social bursts: the atomic single-fact card (ANC-style), rendered in the ONE
// NegaraKu brand standard (scripts/lib/card-brand.mjs — the same canvas, hexagon
// lockup, bloom watermark and chip component as the article OG cards), in 9 langs,
// with a "Sourced" + "announced, not yet law" trust chip the competition can't match.
//
// Square 1080×1080 (feed-native for FB/IG). Renders one card per fact via sharp.
// Usage: node scripts/build-measure-cards.mjs  → public/brand/measure-cards/<id>.png
//
// This proves the visual bar before wiring the full keyTakeaways → cards →
// multi-channel burst pipeline (see docs/plans/fb-event-campaign.md).

import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import {
  BG, GOLD, INK, FONT_FACES, TITLE_FONT, BODY_FONT, esc, textWidth,
  glow, bloom, lockup, chipRow, CHIP,
} from './lib/card-brand.mjs';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'brand', 'measure-cards');
mkdirSync(OUT, { recursive: true });

// Width of a line in the TITLE weight. textWidth() is tuned for the BODY chip font
// (Lato 0.54× Latin); Montserrat ExtraBold runs ~1.14× wider, so pad it here or the
// big fact overflows the content box.
const titleWidth = (s, size) => textWidth(s, size) * 1.14;

// Greedy wrap: CJK by char, Latin by word, against a max pixel width.
function wrap(text, maxPx, size) {
  const out = [];
  for (const seg of String(text).split('\n')) {
    const cjk = textWidth(seg, 1) / Math.max([...seg].length, 1) > 0.8;
    if (cjk) {
      let line = '';
      for (const ch of seg) {
        if (titleWidth(line + ch, size) > maxPx && line) { out.push(line); line = ch; } else line += ch;
      }
      if (line) out.push(line);
    } else {
      let line = '';
      for (const w of seg.split(/\s+/)) {
        const next = line ? line + ' ' + w : w;
        if (titleWidth(next, size) > maxPx && line) { out.push(line); line = w; } else line = next;
      }
      if (line) out.push(line);
    }
  }
  return out;
}

function card({ kicker, fact, sourced, caveat }) {
  const W = 1080, H = 1080, PAD = 80;
  const g = glow(W, H);

  // fit the fact: shrink until each hard-break segment fits ON ONE LINE within the
  // content box (no mid-phrase wrapping) and the block fits the height budget.
  const maxW = W - PAD * 2;
  const hardCount = String(fact).split('\n').length;
  let fs = 96, lines;
  for (;;) {
    lines = wrap(fact, maxW, fs);
    const blockH = lines.length * fs * 1.16;
    const wrapped = lines.length > hardCount;      // a segment overflowed → shrink
    if ((!wrapped && blockH < 560) || fs <= 52) break;
    fs -= 4;
  }
  const lh = fs * 1.16;
  const y0 = 556 - ((lines.length - 1) * lh) / 2;
  const factSvg = lines.map((ln, i) =>
    `<text x="${PAD}" y="${y0 + i * lh}" font-family="${TITLE_FONT}" font-weight="800" font-size="${fs}" fill="${INK}" letter-spacing="-0.5">${esc(ln)}</text>`
  ).join('\n  ');

  const trust = chipRow(PAD, 952, [[sourced, ...CHIP.green], [caveat, ...CHIP.muted]]);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs><style>${FONT_FACES}</style>${g.def}</defs>
  <rect width="${W}" height="${H}" fill="${BG}"/>
  ${g.rect}
  <rect x="0" y="0" width="${W}" height="8" fill="${GOLD}"/>
  ${bloom(900, 860, 380, 0.06)}
  <text x="${PAD}" y="132" font-family="${BODY_FONT}" font-size="26" font-weight="600" fill="${GOLD}" letter-spacing="0.5">${esc(kicker)}</text>
  ${factSvg}
  ${lockup(W - 118, 66, 'Explore Malaysia, AI-friendly')}
  ${trust}
</svg>`;
}

const CARDS = [
  { id: 'zh-wage', kicker: '经济  /  财案 2027  /  打工族', fact: '最低薪金\nRM1,700 → RM2,000', sourced: '有出处 · 可查证', caveat: '已宣布，尚未成为法律' },
  { id: 'zh-tax', kicker: '经济  /  财案 2027  /  家庭', fact: '个人所得税下调 1 个百分点\n一般减免 RM9,000 → RM12,000', sourced: '有出处 · 可查证', caveat: '已宣布，尚未成为法律' },
  { id: 'en-wage', kicker: 'Economy  /  Budget 2027  /  Workers', fact: 'Minimum wage\nRM1,700 → RM2,000', sourced: 'Sourced & verifiable', caveat: 'Announced — not yet law' },
  { id: 'ms-sme', kicker: 'Ekonomi  /  Belanjawan 2027  /  PKS', fact: 'Cukai pendapatan PKS\ndipotong 1 mata peratus', sourced: 'Bersumber & boleh disahkan', caveat: 'Diumumkan — belum undang-undang' },
];

for (const c of CARDS) {
  await sharp(Buffer.from(card(c))).png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 }).toFile(path.join(OUT, `${c.id}.png`));
  console.log('wrote', path.relative(ROOT, path.join(OUT, `${c.id}.png`)));
}
console.log('\nMeasure cards rendered on the shared brand standard →', path.relative(ROOT, OUT));
