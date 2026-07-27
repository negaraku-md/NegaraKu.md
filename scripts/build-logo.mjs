// build-logo.mjs — export the NegaraKu.md brand assets into public/brand/.
// The mark is taken VERBATIM from public/favicon.svg (5-petal gold blossom with
// a dark centre + gold pistil, a curved stem and three buds) so every asset is
// pixel-identical to the site's logo. Gold #FFC000, dark canvas #07070A.
// Run: node scripts/build-logo.mjs

import { mkdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'brand');
const GOLD = '#FFC000';
const DARK = '#07070A';
const INK = '#F4F4F8';
const FONT = "Montserrat, 'Segoe UI', Arial, sans-serif";

// The exact favicon blossom, in the favicon's 64-unit space, flower head at
// (32,28). Shared by every asset so nothing can drift from the real logo.
const PETALS = `<g fill="${GOLD}" transform="translate(32 28)">
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5"/>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5" transform="rotate(72)"/>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5" transform="rotate(144)"/>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5" transform="rotate(216)"/>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11.5" transform="rotate(288)"/>
    </g>`;
const STEM = `<path d="M32 28 C 32 39, 33 47, 35.5 54" stroke="${GOLD}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <circle cx="35.6" cy="54.2" r="2.5" fill="${GOLD}"/>
    <circle cx="31" cy="49.5" r="1.9" fill="${GOLD}"/>
    <circle cx="38.4" cy="50.4" r="1.9" fill="${GOLD}"/>`;
const PISTIL = `<circle cx="32" cy="28" r="2.4" fill="${GOLD}"/>`;
// Transparent centre (masked hole) — for use on any background.
const BLOSSOM_T = `<defs><mask id="bh"><rect x="0" y="0" width="64" height="64" fill="#fff"/><circle cx="32" cy="28" r="5.3" fill="#000"/></mask></defs>
    <g mask="url(#bh)">${PETALS}
    ${STEM}</g>
    ${PISTIL}`;

const markSvg = (size) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">${BLOSSOM_T}</svg>`;

// Full lockup: the blossom + "NegaraKu.md" wordmark. bg=null → transparent.
const lockupSvg = (w, h, bg) => {
  const s = 1.42; // scale the 64-unit blossom
  const cx = 62, cy = 56; // where the flower head sits
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 480 120">
  ${bg ? `<rect width="480" height="120" rx="16" fill="${bg}"/>` : ''}
  <g transform="translate(${cx - 32 * s} ${cy - 28 * s}) scale(${s})">${BLOSSOM_T}</g>
  <text x="122" y="74" font-family="${FONT}" font-size="52" font-weight="800" fill="${INK}">NegaraKu<tspan fill="${GOLD}">.md</tspan></text>
</svg>`;
};

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

  // Icon = the favicon verbatim (guaranteed identical to the site logo).
  const favicon = await readFile(path.join(ROOT, 'public', 'favicon.svg'), 'utf8');
  await writeFile(path.join(OUT, 'negaraku-icon.svg'), favicon);
  await png(favicon, 'negaraku-icon-1024.png', 1024);
  await png(favicon, 'negaraku-icon-512.png', 512);

  // Mark (transparent) + lockups.
  await writeFile(path.join(OUT, 'negaraku-mark.svg'), markSvg(512));
  await writeFile(path.join(OUT, 'negaraku-lockup.svg'), lockupSvg(480, 120, null));
  await writeFile(path.join(OUT, 'negaraku-lockup-dark.svg'), lockupSvg(480, 120, DARK));
  await png(markSvg(1024), 'negaraku-mark-1024.png', 1024);
  await png(markSvg(512), 'negaraku-mark-512.png', 512);
  await png(lockupSvg(1920, 480, null), 'negaraku-lockup-transparent-1920.png', 1920, 480);
  await png(lockupSvg(1920, 480, DARK), 'negaraku-lockup-dark-1920.png', 1920, 480);

  const readme = `# NegaraKu.md — brand assets

The mark is the five-petal gold blossom (with stem + buds) taken verbatim from
\`public/favicon.svg\`. The wordmark is **NegaraKu** in ink with **.md** in gold.

## Files
| File | Use |
|---|---|
| \`negaraku-mark.svg\` / \`-mark-1024.png\` / \`-512.png\` | Blossom mark, transparent centre — icons, avatars, bullets on any bg |
| \`negaraku-icon.svg\` / \`-icon-1024.png\` / \`-512.png\` | The favicon (blossom on dark rounded square) — app icon / avatar |
| \`negaraku-lockup.svg\` / \`-lockup-transparent-1920.png\` | Full horizontal logo, transparent |
| \`negaraku-lockup-dark.svg\` / \`-lockup-dark-1920.png\` | Full logo on the dark brand canvas |

## Colours
- Gold accent: \`#FFC000\`
- Dark canvas: \`#07070A\`
- Ink (wordmark): \`#F4F4F8\`

## Font
Wordmark: **Montserrat** (700–800). SVGs reference it; PNGs rasterise with the
nearest available system font — prefer the SVGs when the exact typeface matters.

Regenerate with \`node scripts/build-logo.mjs\`.
`;
  await writeFile(path.join(OUT, 'README.md'), readme);
  console.log('[logo] wrote brand assets (from favicon geometry) to public/brand/');
}

main().catch((e) => console.warn('[logo] failed:', e.message));
