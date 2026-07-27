// build-logo.mjs — the single source of truth for the NegaraKu.md logo.
// Writes public/favicon.svg AND the public/brand/ kit from ONE badge definition
// so nothing can drift. The logo is the 1company-style black rounded hexagon
// with the 5-petal gold blossom (stem + buds) in place of the "1".
// Gold #FFC000, badge black #0A0A0A, canvas #07070A, ink #F4F4F8.
// Run: node scripts/build-logo.mjs

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'brand');
const GOLD = '#FFC000';
const BADGE_BLACK = '#0A0A0A';
const BORDER = '#FFFFFF';
const DARK = '#07070A';
const INK = '#F4F4F8';
const FONT = "Montserrat, 'Segoe UI', Arial, sans-serif";

// Badge geometry (512-unit canvas, matches the 1company badge): a white
// rounded-hexagon outer ring, a transparent gap, then the black hexagon.
const HEX = { R1: 250, ring: 21, gap: 11, round: 28 }; // R1 outer, ring width, gap

// ── The blossom (favicon geometry, 64-unit space, flower head at 32,28) ──────
const PETALS = (fill) => `<g fill="${fill}" transform="translate(32 28)">
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5"/>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5" transform="rotate(72)"/>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5" transform="rotate(144)"/>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5" transform="rotate(216)"/>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5" transform="rotate(288)"/>
    </g>`;
const STEM = (fill) => `<path d="M32 28 C 32 39, 33 47, 35.5 54" stroke="${fill}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <circle cx="35.6" cy="54.2" r="2.5" fill="${fill}"/>
    <circle cx="31" cy="49.5" r="1.9" fill="${fill}"/>
    <circle cx="38.4" cy="50.4" r="1.9" fill="${fill}"/>`;
const PISTIL = (fill) => `<circle cx="32" cy="28" r="2.4" fill="${fill}"/>`;

// The blossom with a masked (transparent) centre, so the background shows through
// the hole. maskId must be unique per SVG document.
function blossom(fill, maskId) {
  return `<defs><mask id="${maskId}"><rect width="64" height="64" fill="#fff"/><circle cx="32" cy="28" r="5.3" fill="#000"/></mask></defs>
    <g mask="url(#${maskId})">${PETALS(fill)}
    ${STEM(fill)}</g>
    ${PISTIL(fill)}`;
}

// Place a blossom so its visual centre (≈32,30 in the 64-unit space) lands at
// (cx,cy) scaled by s.
function placeBlossom(cx, cy, s, maskId) {
  return `<g transform="translate(${(cx - 32 * s).toFixed(2)} ${(cy - 30 * s).toFixed(2)}) scale(${s})">${blossom(GOLD, maskId)}</g>`;
}

// Pointy-top rounded hexagon, drawn as a stroked polygon so the corners round
// like the 1company badge. Returns the <polygon> element.
function hexagon(cx, cy, R, fill, round = HEX.round) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (90 + i * 60);
    pts.push(`${(cx + R * Math.cos(a)).toFixed(1)},${(cy - R * Math.sin(a)).toFixed(1)}`);
  }
  return `<polygon points="${pts.join(' ')}" fill="${fill}" stroke="${fill}" stroke-width="${round}" stroke-linejoin="round"/>`;
}

// The full badge body in a 512-unit space: white ring (with a transparent gap)
// + black hexagon + gold blossom. uid keeps mask ids unique per SVG document.
function badgeBody(uid) {
  const { R1, ring, gap } = HEX;
  const R2 = R1 - ring; // inner edge of the white ring
  const R3 = R2 - gap; // black hexagon (transparent gap between it and the ring)
  return `<mask id="ring-${uid}"><rect width="512" height="512" fill="#000"/>${hexagon(256, 256, R1, '#fff')}${hexagon(256, 256, R2, '#000')}</mask>
  <rect width="512" height="512" fill="${BORDER}" mask="url(#ring-${uid})"/>
  ${hexagon(256, 256, R3, BADGE_BLACK)}
  ${placeBlossom(256, 256, 5.4, `bh-${uid}`)}`;
}

// ── The badge (primary logo), 512-unit canvas ──
const badgeSvg = (px) => `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" viewBox="0 0 512 512">
  ${badgeBody('i')}
</svg>`;

// Flat mark: the blossom alone (transparent centre), for monochrome / tiny use.
const markSvg = (px) => `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" viewBox="0 0 64 64">${blossom(GOLD, 'bh')}</svg>`;

// Horizontal lockup: badge + "NegaraKu.md" wordmark. bg=null → transparent.
const lockupSvg = (w, h, bg) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 900 300">
  ${bg ? `<rect width="900" height="300" rx="28" fill="${bg}"/>` : ''}
  <g transform="translate(16 16) scale(0.52)">${badgeBody('l')}</g>
  <text x="300" y="182" font-family="${FONT}" font-size="90" font-weight="800" fill="${INK}">NegaraKu<tspan fill="${GOLD}">.md</tspan></text>
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

  // The favicon IS the badge — one source of truth for the whole site.
  const favicon = badgeSvg(512);
  await writeFile(path.join(ROOT, 'public', 'favicon.svg'), favicon);

  // Brand kit: icon (badge), mark (flat blossom), lockups.
  await writeFile(path.join(OUT, 'negaraku-icon.svg'), badgeSvg(512));
  await writeFile(path.join(OUT, 'negaraku-mark.svg'), markSvg(512));
  await writeFile(path.join(OUT, 'negaraku-lockup.svg'), lockupSvg(900, 300, null));
  await writeFile(path.join(OUT, 'negaraku-lockup-dark.svg'), lockupSvg(900, 300, DARK));

  await png(badgeSvg(1024), 'negaraku-icon-1024.png', 1024);
  await png(badgeSvg(512), 'negaraku-icon-512.png', 512);
  await png(markSvg(1024), 'negaraku-mark-1024.png', 1024);
  await png(markSvg(512), 'negaraku-mark-512.png', 512);
  await png(lockupSvg(1800, 600, null), 'negaraku-lockup-transparent-1800.png', 1800, 600);
  await png(lockupSvg(1800, 600, DARK), 'negaraku-lockup-dark-1800.png', 1800, 600);

  const readme = `# NegaraKu.md — brand assets

The logo is a **black rounded hexagon** (1company badge shape) with the
**five-petal gold blossom** (stem + buds) in place of the "1". \`build-logo.mjs\`
is the single source of truth — it also writes \`public/favicon.svg\`, so the
site icon and this kit can never drift.

## Files
| File | Use |
|---|---|
| \`negaraku-icon.svg\` / \`-icon-1024.png\` / \`-512.png\` | The hexagon badge — favicon, app icon, avatar, primary logo |
| \`negaraku-mark.svg\` / \`-mark-1024.png\` / \`-512.png\` | Flat gold blossom, transparent centre — bullets / tiny / monochrome use on any bg |
| \`negaraku-lockup.svg\` / \`-lockup-transparent-1800.png\` | Badge + wordmark, transparent |
| \`negaraku-lockup-dark.svg\` / \`-lockup-dark-1800.png\` | Badge + wordmark on the dark brand canvas |

## Colours
- Gold accent: \`#FFC000\`
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
