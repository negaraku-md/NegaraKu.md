// build-logo.mjs — the single source of truth for the NegaraKu.md logo.
// Writes public/favicon.svg AND the public/brand/ kit from ONE badge definition
// so nothing can drift. The logo is the 1company-style black rounded hexagon
// with the 5-petal gold blossom (stem + buds) in place of the "1".
// Gold #FFC000, badge black #0A0A0A, canvas #07070A, ink #F4F4F8.
// Run: node scripts/build-logo.mjs

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FLOWER_D, FLOWER_VB, FLOWER_CX, FLOWER_CY } from './logo-flower.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'brand');
const GOLD = '#FFC000';
const RED = '#FF3333'; // bright red — matches the Black·Red theme accent
const BADGE_BLACK = '#0A0A0A';
const BORDER = '#FFFFFF';
const DARK = '#07070A';
const INK = '#F4F4F8';
const FONT = "Montserrat, 'Segoe UI', Arial, sans-serif";

// Badge geometry (512-unit canvas), measured from the official 1company asset
// (1company_Logo_transparent.png, 534px): the white hexagon OUTLINE sits
// directly on the black hexagon's edge — NO transparent gap. Ro = outer radius
// of the white stroke, border = white stroke width, cr = black corner rounding.
// gap kept at 0 so the black meets the outline exactly like the original.
const HEX = { Ro: 255, border: 11, gap: 0, cr: 34 };

// ── The Bunga Raya (hibiscus) object ─────────────────────────────────────────
// v2 logo: an exact vector trace of the national-flower emblem (see
// scripts/logo-flower.mjs), replacing the v1 abstract blossom. The white
// creases are negative space (fill-rule evenodd), so the badge black shows
// through them. Version 1 is archived in public/brand/v1/.
//
// Place the flower so its CENTROID (FLOWER_CX,FLOWER_CY in the FLOWER_VB box)
// lands at (cx,cy) — optical centring — sized so its larger side spans `size`.
function placeFlower(cx, cy, size, fill) {
  const sc = size / FLOWER_VB;
  const tx = (cx - FLOWER_CX * sc).toFixed(2);
  const ty = (cy - FLOWER_CY * sc).toFixed(2);
  return `<g transform="translate(${tx} ${ty}) scale(${sc.toFixed(5)})"><path fill="${fill}" fill-rule="evenodd" d="${FLOWER_D}"/></g>`;
}

// Pointy-top hexagon vertex list at vertex-radius R, centred (cx,cy).
function hexPts(cx, cy, R) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (90 + i * 60);
    pts.push(`${(cx + R * Math.cos(a)).toFixed(2)},${(cy - R * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(' ');
}

// The full badge body in a 512-unit space, matching the 1company badge:
//  • black hexagon fill (rounded via a round-join stroke of its own colour)
//  • a uniform white hexagon OUTLINE (single stroked polygon → identical border
//    weight at every edge and corner), sitting a transparent `gap` outside it.
function badgeBody(accent) {
  const { Ro, border, gap, cr } = HEX;
  const Rw = Ro - border / 2;      // centre-line radius of white stroke
  const blackOuter = Rw - gap;     // black meets the white centre-line (gap 0 → on the edge)
  const Rb = blackOuter - cr / 2;  // black polygon vertex radius
  return `<polygon points="${hexPts(256, 256, Rb)}" fill="${BADGE_BLACK}" stroke="${BADGE_BLACK}" stroke-width="${cr}" stroke-linejoin="round"/>
  <polygon points="${hexPts(256, 256, Rw)}" fill="none" stroke="${BORDER}" stroke-width="${border}" stroke-linejoin="round" stroke-linecap="round"/>
  ${placeFlower(256, 256, 300, accent)}`;
}

// ── The badge (primary logo), 512-unit canvas ──
const badgeSvg = (px, accent) => `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" viewBox="0 0 512 512">
  ${badgeBody(accent)}
</svg>`;

// Flat mark: the flower alone (creases transparent), for monochrome / tiny use.
const markSvg = (px, accent) => `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" viewBox="0 0 ${FLOWER_VB} ${FLOWER_VB}"><path fill="${accent}" fill-rule="evenodd" d="${FLOWER_D}"/></svg>`;

// Horizontal lockup: badge + "NegaraKu.md" wordmark. bg=null → transparent.
const lockupSvg = (w, h, bg, accent) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 900 300">
  ${bg ? `<rect width="900" height="300" rx="28" fill="${bg}"/>` : ''}
  <g transform="translate(16 16) scale(0.52)">${badgeBody(accent)}</g>
  <text x="300" y="182" font-family="${FONT}" font-size="90" font-weight="800" fill="${INK}">NegaraKu<tspan fill="${accent}">.md</tspan></text>
</svg>`;

async function main() {
  await mkdir(OUT, { recursive: true });
  let sharp;
  try {
    ({ default: sharp } = await import('sharp'));
  } catch {
    console.warn('[logo] sharp not installed — writing SVGs only. `npm i -D sharp` for PNGs.');
  }
  const png = async (svg, file, w, h) => {
    if (!sharp) return;
    await sharp(Buffer.from(svg)).resize(w, h ?? w, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(OUT, file));
  };

  // The favicon IS the gold badge — one source of truth for the site icon.
  await writeFile(path.join(ROOT, 'public', 'favicon.svg'), badgeSvg(512, GOLD));

  // Brand kit in BOTH accents: Gold (default names) and Red (`-red` suffix).
  const variants = [
    { accent: GOLD, suffix: '' },
    { accent: RED, suffix: '-red' },
  ];
  for (const { accent, suffix } of variants) {
    await writeFile(path.join(OUT, `negaraku-icon${suffix}.svg`), badgeSvg(512, accent));
    await writeFile(path.join(OUT, `negaraku-mark${suffix}.svg`), markSvg(512, accent));
    await writeFile(path.join(OUT, `negaraku-lockup${suffix}.svg`), lockupSvg(900, 300, null, accent));
    await writeFile(path.join(OUT, `negaraku-lockup-dark${suffix}.svg`), lockupSvg(900, 300, DARK, accent));

    await png(badgeSvg(1024, accent), `negaraku-icon${suffix}-1024.png`, 1024);
    await png(badgeSvg(512, accent), `negaraku-icon${suffix}-512.png`, 512);
    await png(markSvg(1024, accent), `negaraku-mark${suffix}-1024.png`, 1024);
    await png(markSvg(512, accent), `negaraku-mark${suffix}-512.png`, 512);
    await png(lockupSvg(1800, 600, null, accent), `negaraku-lockup-transparent${suffix}-1800.png`, 1800, 600);
    await png(lockupSvg(1800, 600, DARK, accent), `negaraku-lockup-dark${suffix}-1800.png`, 1800, 600);
  }

  const readme = `# NegaraKu.md — brand assets

The logo (v2) is a **black rounded hexagon** (1company badge shape) with the
**gold Bunga Raya** — an exact vector trace of Malaysia's national-flower emblem
— in place of the "1". \`build-logo.mjs\` is the single source of truth (shape in
\`scripts/logo-flower.mjs\`); it also writes \`public/favicon.svg\`, so the site
icon and this kit can never drift. **Version 1** (the abstract blossom) is
archived in \`public/brand/v1/\`.

Two accents are provided: **Gold** (default file names) and **Bright Red**
(same names with a \`-red\` suffix), matching the site's Black·Gold and Black·Red
themes.

## Files (each exists in Gold and \`-red\`)
| File | Use |
|---|---|
| \`negaraku-icon.svg\` / \`-icon-1024.png\` / \`-512.png\` | The hexagon badge — favicon, app icon, avatar, primary logo |
| \`negaraku-mark.svg\` / \`-mark-1024.png\` / \`-512.png\` | Flat hibiscus, transparent creases — bullets / tiny / monochrome use on any bg |
| \`negaraku-lockup.svg\` / \`-lockup-transparent-1800.png\` | Badge + wordmark, transparent |
| \`negaraku-lockup-dark.svg\` / \`-lockup-dark-1800.png\` | Badge + wordmark on the dark brand canvas |

Red variants: \`negaraku-icon-red.svg\`, \`negaraku-mark-red.svg\`,
\`negaraku-lockup-red.svg\`, etc.

## Colours
- Gold accent: \`#FFC000\`
- Bright-red accent: \`#FF2020\`
- Badge black: \`#0A0A0A\`
- Dark canvas: \`#07070A\`
- Ink (wordmark): \`#F4F4F8\`

## Font
Wordmark: **Montserrat** (700–800). SVGs reference it; PNGs rasterise with the
nearest available system font — prefer the SVGs when the exact typeface matters.

Regenerate everything (favicon + kit) with \`node scripts/build-logo.mjs\`.
`;
  await writeFile(path.join(OUT, 'README.md'), readme);
  console.log('[logo] wrote public/favicon.svg + brand kit (hexagon badge)');
}

main().catch((e) => console.warn('[logo] failed:', e.message));
