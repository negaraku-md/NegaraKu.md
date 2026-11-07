// build-fallback-heroes.mjs — branded, LANGUAGE-NEUTRAL fallback hero graphics
// for food articles that have no honest photo. These are obviously brand
// graphics (bunga raya + a gold food motif + the wordmark, no article title),
// so they guarantee every food article has ≥1 image without ever faking a photo.
// Committed + reproducible. Output: public/media/fallback/food-<key>.webp (1600x900).
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
import { BG, GOLD, INK, FAINT, glow, bloom, badge } from './lib/card-brand.mjs';

const W = 1600, H = 900, CX = W / 2, CY = H / 2;
// Simple gold line icons (stroke), centred on (x,y) at scale s. Food-signalling
// but clearly iconographic, not photographic.
const ICONS = {
  // noodle/soup bowl with steam + chopsticks — the universal Malaysian food image
  bowl: (x, y, s) => `
    <g fill="none" stroke="${GOLD}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M ${x - s} ${y} a ${s} ${s * 0.78} 0 0 0 ${2 * s} 0"/>
      <ellipse cx="${x}" cy="${y}" rx="${s}" ry="${s * 0.26}"/>
      <line x1="${x - s * 0.35}" y1="${y - s * 0.9}" x2="${x + s * 0.65}" y2="${y - s * 0.1}"/>
      <line x1="${x - s * 0.15}" y1="${y - s * 0.95}" x2="${x + s * 0.85}" y2="${y - s * 0.15}"/>
    </g>
    <g fill="none" stroke="${GOLD}" stroke-width="5" stroke-linecap="round" opacity="0.8">
      <path d="M ${x - s * 0.45} ${y - s * 0.55} q 14 -22 0 -44"/>
      <path d="M ${x} ${y - s * 0.62} q 14 -24 0 -48"/>
      <path d="M ${x + s * 0.45} ${y - s * 0.55} q 14 -22 0 -44"/>
    </g>`,
  // cup/glass of drink with handle + steam — teh tarik / kopi
  cup: (x, y, s) => `
    <g fill="none" stroke="${GOLD}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M ${x - s * 0.7} ${y - s * 0.7} L ${x - s * 0.5} ${y + s * 0.8} Q ${x} ${y + s}, ${x + s * 0.5} ${y + s * 0.8} L ${x + s * 0.7} ${y - s * 0.7} Z"/>
      <path d="M ${x + s * 0.68} ${y - s * 0.45} q ${s * 0.5} 0 ${s * 0.5} ${s * 0.45} q 0 ${s * 0.45} ${-s * 0.5} ${s * 0.45}"/>
    </g>
    <g fill="none" stroke="${GOLD}" stroke-width="5" stroke-linecap="round" opacity="0.8">
      <path d="M ${x - s * 0.25} ${y - s * 0.95} q 14 -22 0 -44"/>
      <path d="M ${x + s * 0.25} ${y - s * 0.95} q 14 -22 0 -44"/>
    </g>`,
  // market stall / shopfront with awning — hawker, pasar, kopitiam
  stall: (x, y, s) => `
    <g fill="none" stroke="${GOLD}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M ${x - s} ${y - s * 0.5} L ${x + s} ${y - s * 0.5} L ${x + s * 0.8} ${y - s} L ${x - s * 0.8} ${y - s} Z"/>
      <path d="M ${x - s} ${y - s * 0.5} l ${s * 0.4} ${s * 0.35} l ${s * 0.4} ${-s * 0.35} l ${s * 0.4} ${s * 0.35} l ${s * 0.4} ${-s * 0.35} l ${s * 0.4} ${s * 0.35} l ${s * 0.4} ${-s * 0.35}"/>
      <path d="M ${x - s * 0.8} ${y - s * 0.15} L ${x - s * 0.8} ${y + s} M ${x + s * 0.8} ${y - s * 0.15} L ${x + s * 0.8} ${y + s}"/>
      <path d="M ${x - s * 0.8} ${y + s} L ${x + s * 0.8} ${y + s}"/>
    </g>`,
};
const JOBS = [
  { key: 'food-lifestyle', icon: 'bowl' },   // default for any food article
  { key: 'restaurants', icon: 'bowl' },
  { key: 'drinks', icon: 'cup' },
  { key: 'markets', icon: 'stall' },
];
const svg = (iconName) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>${glow(W, H, 'g', '50%', '18%', '72%').def}</defs>
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="0" y="0" width="${W}" height="8" fill="${GOLD}"/>
  ${bloom(CX, CY + 40, 560, 0.07)}
  ${ICONS[iconName](CX, CY - 40, 150)}
  ${badge(CX, H - 150, 76)}
  <text x="${CX}" y="${H - 86}" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="30" font-weight="700" fill="${INK}">NegaraKu<tspan fill="${GOLD}">.md</tspan></text>
  <text x="${CX}" y="${H - 56}" text-anchor="middle" font-family="Lato, Arial, sans-serif" font-size="17" letter-spacing="2" fill="${FAINT}">MALAYSIA</text>
</svg>`;
const dir = path.join('public', 'media', 'fallback');
fs.mkdirSync(dir, { recursive: true });
for (const j of JOBS) {
  let q = 82, out;
  for (; q >= 40; q -= 6) { out = await sharp(Buffer.from(svg(j.icon))).webp({ quality: q }).toBuffer(); if (out.length <= 120 * 1024) break; }
  fs.writeFileSync(path.join(dir, `food-${j.key}.webp`), out);
  console.log(`food-${j.key}.webp  ${Math.round(out.length / 1024)}KB`);
}
console.log('done');
