// card-brand.mjs — the ONE NegaraKu.md generated-image standard.
//
// Single source of truth for every branded image we render (SVG → PNG via sharp):
// the article OG cards (build-og.mjs), the live-event measure cards
// (build-measure-cards.mjs), and future channel images. Change the logo, palette or
// lockup here and every image family updates together — no parallel look, no drift.
//
// Exports: the palette tokens, the font stacks, the embedded Latin @font-face block,
// and the shared primitives bloom() / badge() / chip() / textWidth() / wrapText(),
// lifted verbatim from the established OG design so cards are visibly one family.

import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FLOWER_D, FLOWER_VB, FLOWER_CX, FLOWER_CY } from '../logo-flower.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

// --- palette (the brand canvas + ink, exactly as the OG cards) ---------------
export const BG = '#07070A';          // near-black canvas
export const GOLD = '#FFC000';        // 1company gold accent
export const INK = '#F4F4F8';         // primary text
export const MUTE = '#9A9AB8';        // secondary / summary text
export const FAINT = '#C0C0D0';       // tagline / tertiary

// --- fonts -------------------------------------------------------------------
export const TITLE_FONT = "Montserrat, 'Noto Sans Tamil', 'Noto Sans Thai', 'Noto Naskh Arabic', 'Noto Sans Devanagari', 'Noto Sans', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Microsoft YaHei', Arial, sans-serif";
export const BODY_FONT = "Lato, 'Noto Sans Tamil', 'Noto Sans Thai', 'Noto Naskh Arabic', 'Noto Sans Devanagari', 'Noto Sans', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Microsoft YaHei', Arial, sans-serif";

// Embedded Latin fonts (vendored) so Montserrat/Lato render identically on any host
// (local Windows, CI Linux) without relying on an installed system font. CJK/Tamil/
// Thai still resolve from the OS/Noto stack above. Drop into <defs><style>.
const _b64 = (p) => readFileSync(path.join(ROOT, 'assets', 'og-fonts', p)).toString('base64');
export const FONT_FACES = `
  @font-face{font-family:'Montserrat';font-weight:800;src:url(data:font/ttf;base64,${_b64('Montserrat-ExtraBold.ttf')}) format('truetype');}
  @font-face{font-family:'Montserrat';font-weight:700;src:url(data:font/ttf;base64,${_b64('Montserrat-Bold.ttf')}) format('truetype');}
  @font-face{font-family:'Lato';font-weight:700;src:url(data:font/ttf;base64,${_b64('Lato-Bold.ttf')}) format('truetype');}
  @font-face{font-family:'Lato';font-weight:400;src:url(data:font/ttf;base64,${_b64('Lato-Regular.ttf')}) format('truetype');}
  @font-face{font-family:'Noto Naskh Arabic';font-weight:400 700;src:url(data:font/ttf;base64,${_b64('NotoNaskhArabic-Regular.ttf')}) format('truetype');}`;

// Gold corner glow, as the OG cards. Returns { def, rect } — `def` goes in <defs>,
// `rect` paints it over the BG fill.
export const glow = (w, h, id = 'glow', cx = '12%', cy = '0%', r = '70%') => ({
  def: `<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}"><stop offset="0%" stop-color="${GOLD}" stop-opacity="0.10"/><stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/></radialGradient>`,
  rect: `<rect width="${w}" height="${h}" fill="url(#${id})"/>`,
});

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Approx text width: CJK/Hangul glyphs ≈ 1.0, Latin ≈ 0.54 (× font size).
export const textWidth = (s, size) => {
  let u = 0;
  for (const ch of String(s)) u += /[㐀-鿿一-龥가-힣]/.test(ch) ? 1.0 : 0.54;
  return u * size;
};

// Faint Bunga Raya watermark (the real v2 logo flower), gold, centred at (cx,cy).
export const bloom = (cx, cy, size, opacity = 0.06) => {
  const sc = size / FLOWER_VB;
  const tx = cx - FLOWER_CX * sc, ty = cy - FLOWER_CY * sc;
  return `<g opacity="${opacity}" transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${sc.toFixed(5)})"><path fill="${GOLD}" fill-rule="evenodd" d="${FLOWER_D}"/></g>`;
};

// The hexagon brand BADGE — black hexagon + white border + gold Bunga Raya.
const _FSC = 300 / FLOWER_VB;
const _FTX = 256 - FLOWER_CX * _FSC;
const _FTY = 256 - FLOWER_CY * _FSC;
export const badge = (cx, cy, size) => {
  const S = size / 512, tx = cx - 256 * S, ty = cy - 256 * S;
  return `<g transform="translate(${tx} ${ty}) scale(${S})">
    <polygon points="256,23.5 54.65,139.75 54.65,372.25 256,488.5 457.35,372.25 457.35,139.75" fill="#0A0A0A" stroke="#0A0A0A" stroke-width="34" stroke-linejoin="round"/>
    <polygon points="256,6.5 39.93,131.25 39.93,380.75 256,505.5 472.07,380.75 472.07,131.25" fill="none" stroke="#FFFFFF" stroke-width="11" stroke-linejoin="round" stroke-linecap="round"/>
    <g transform="translate(${_FTX.toFixed(2)} ${_FTY.toFixed(2)}) scale(${_FSC.toFixed(5)})"><path fill="${GOLD}" fill-rule="evenodd" d="${FLOWER_D}"/></g></g>`;
};

// The top-right lockup: badge + "NegaraKu.md" wordmark + "AI-friendly Malaysia"
// tagline, centred on x=cx. Matches the OG card's corner lockup.
export const lockup = (cx, topY, tagline, badgeSize = 84) =>
  `${badge(cx, topY, badgeSize)}
  <text x="${cx}" y="${topY + badgeSize / 2 + 34}" text-anchor="middle" font-family="${TITLE_FONT}" font-size="27" font-weight="700" fill="${INK}">NegaraKu<tspan fill="${GOLD}">.md</tspan></text>
  <text x="${cx}" y="${topY + badgeSize / 2 + 58}" text-anchor="middle" font-family="${BODY_FONT}" font-size="15" font-weight="700" letter-spacing="1.5" fill="${FAINT}">${esc(tagline)}</text>`;

// Rounded status/trust chip — the OG chip, verbatim. Returns { w, svg }.
export const CHIP_FONT = 19;
export function chip(x, y, text, fg, stroke, bg) {
  const w = 22 + textWidth(text, CHIP_FONT), h = 38;
  return {
    w,
    svg: `<rect x="${x}" y="${y}" width="${w.toFixed(1)}" height="${h}" rx="19" fill="${bg}" stroke="${stroke}"/>
    <text x="${(x + w / 2).toFixed(1)}" y="${y + 25}" text-anchor="middle" font-family="${BODY_FONT}" font-size="${CHIP_FONT}" font-weight="700" fill="${fg}">${esc(text)}</text>`,
  };
}

// Chip palettes (match the OG card's chip colours).
export const CHIP = {
  green: ['#4ade80', 'rgba(74,222,128,.4)', 'rgba(74,222,128,.12)'],   // published / sourced
  blue: ['#60a5fa', 'rgba(96,165,250,.4)', 'rgba(96,165,250,.12)'],    // mode
  red: ['#f87171', 'rgba(248,113,113,.45)', 'rgba(248,113,113,.12)'],  // sensitive
  muted: ['#9A9AB8', 'rgba(99,99,108,.9)', '#141419'],                 // neutral / caveat
};

// A row of chips laid out left→right from (x,y). `defs` = [[text, ...palette], …].
export function chipRow(x, y, defs, gap = 11) {
  let cx = x; const parts = [];
  for (const [text, ...pal] of defs) { const k = chip(cx, y, text, ...pal); parts.push(k.svg); cx += k.w + gap; }
  return parts.join('\n  ');
}

export { FLOWER_VB };
