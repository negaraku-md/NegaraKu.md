// build-logo.mjs — export the NegaraKu.md brand assets (mark + lockup) as SVG
// (scalable master) and high-resolution PNG (transparent + on-dark), into
// public/brand/. The mark is the 5-petal gold blossom; gold is #FFC000.
// Run: node scripts/build-logo.mjs   (or `npm run build:logo`)

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'brand');
const GOLD = '#FFC000';
const DARK = '#07070A';
const INK = '#F4F4F8';
const FONT = "Montserrat, 'Segoe UI', Arial, sans-serif";

// The blossom, centred at (0,0), radius ~24 units. `hole` punches a transparent
// centre (so the flower reads on any background); a small gold pistil sits in it.
const petals = (idSuffix) => `
    <mask id="hole${idSuffix}">
      <rect x="-40" y="-40" width="80" height="80" fill="#fff"/>
      <circle cx="0" cy="0" r="5.3" fill="#000"/>
    </mask>
    <g fill="${GOLD}" mask="url(#hole${idSuffix})">
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5"/>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5" transform="rotate(72)"/>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5" transform="rotate(144)"/>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5" transform="rotate(216)"/>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5" transform="rotate(288)"/>
    </g>
    <circle cx="0" cy="0" r="2.4" fill="${GOLD}"/>`;

// Standalone mark (transparent). viewBox 0 0 64 64, flower centred.
const markSvg = (size) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <defs></defs>
  <g transform="translate(32 32)">${petals('m')}</g>
</svg>`;

// App/social icon — flower on the dark rounded square (favicon writ large).
const iconSvg = (size) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="13" fill="${DARK}"/>
  <rect x="1" y="1" width="62" height="62" rx="12" fill="none" stroke="${GOLD}" stroke-width="1.5" stroke-opacity="0.35"/>
  <g transform="translate(32 32)">${petals('i')}</g>
</svg>`;

// Horizontal lockup: flower + "NegaraKu.md" wordmark. bg=null → transparent.
const lockupSvg = (w, h, bg) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 480 120">
  ${bg ? `<rect width="480" height="120" rx="16" fill="${bg}"/>` : ''}
  <g transform="translate(60 60) scale(1.7)">${petals('l')}</g>
  <text x="118" y="74" font-family="${FONT}" font-size="52" font-weight="800" fill="${INK}">NegaraKu<tspan fill="${GOLD}">.md</tspan></text>
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
    await sharp(Buffer.from(svg)).resize(w, h ?? w).png().toFile(path.join(OUT, file));
  };

  // SVG masters (scalable — best for design tools / print).
  await writeFile(path.join(OUT, 'negaraku-mark.svg'), markSvg(512));
  await writeFile(path.join(OUT, 'negaraku-icon.svg'), iconSvg(512));
  await writeFile(path.join(OUT, 'negaraku-lockup.svg'), lockupSvg(480, 120, null));
  await writeFile(path.join(OUT, 'negaraku-lockup-dark.svg'), lockupSvg(480, 120, DARK));

  // High-res PNGs.
  await png(markSvg(1024), 'negaraku-mark-1024.png', 1024);
  await png(markSvg(512), 'negaraku-mark-512.png', 512);
  await png(iconSvg(1024), 'negaraku-icon-1024.png', 1024);
  await png(iconSvg(512), 'negaraku-icon-512.png', 512);
  await png(lockupSvg(1920, 480, null), 'negaraku-lockup-transparent-1920.png', 1920, 480);
  await png(lockupSvg(1920, 480, DARK), 'negaraku-lockup-dark-1920.png', 1920, 480);

  const readme = `# NegaraKu.md — brand assets

The mark is a five-petal gold blossom; the wordmark is **NegaraKu** in ink with
**.md** in gold.

## Files
| File | Use |
|---|---|
| \`negaraku-mark.svg\` / \`-mark-1024.png\` / \`-512.png\` | The blossom mark, transparent — icons, bullets, avatars on any bg |
| \`negaraku-icon.svg\` / \`-icon-1024.png\` / \`-512.png\` | Mark on the dark rounded square — app icon / social avatar |
| \`negaraku-lockup.svg\` / \`-lockup-transparent-1920.png\` | Full horizontal logo, transparent |
| \`negaraku-lockup-dark.svg\` / \`-lockup-dark-1920.png\` | Full logo on the dark brand canvas |

## Colours
- Gold accent: \`#FFC000\`
- Dark canvas: \`#07070A\`
- Ink (wordmark): \`#F4F4F8\`

## Font
Wordmark: **Montserrat** (weights 700–800). The SVGs reference it; PNGs are
rasterised with the nearest available system font, so prefer the SVGs when the
exact typeface matters (or set Montserrat in your design tool).

Regenerate with \`node scripts/build-logo.mjs\`.
`;
  await writeFile(path.join(OUT, 'README.md'), readme);
  console.log('[logo] wrote brand assets to public/brand/');
}

main().catch((e) => console.warn('[logo] failed:', e.message));
