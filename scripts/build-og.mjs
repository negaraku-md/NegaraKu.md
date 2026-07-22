// build-og.mjs — render the branded default Open Graph image (1200×630) used
// for social/Facebook link previews. Uses `sharp` to rasterise an SVG to PNG.
// Non-fatal: if sharp is unavailable, it warns and skips so the build proceeds.

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'og');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#07070A"/>
  <rect x="0" y="0" width="1200" height="8" fill="#FFC000"/>
  <g transform="translate(90,150)">
    <path d="M120 40a70 70 0 1 0 0 120 55 55 0 1 1 0-120z" fill="#FFC000"/>
    <path d="M150 70l9 22 23.5 1.5-18 15 6 23-20.5-12.5-20.5 12.5 6-23-18-15 23.5-1.5z" fill="#FFC000"/>
  </g>
  <text x="90" y="400" font-family="Montserrat, Arial, sans-serif" font-size="96" font-weight="700" fill="#F4F4F8">NegaraKu<tspan fill="#FFC000">.md</tspan></text>
  <text x="92" y="470" font-family="Lato, Arial, sans-serif" font-size="38" fill="#C0C0D0">An open-source, AI-friendly knowledge base about Malaysia</text>
  <text x="92" y="560" font-family="Lato, Arial, sans-serif" font-size="30" fill="#9A9AB8">Sponsored by <tspan fill="#FFC000" font-weight="700">1company</tspan></text>
</svg>`;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  // Always write the SVG (useful for AI crawlers and as a source).
  await writeFile(path.join(OUT_DIR, 'default.svg'), svg);

  let sharp;
  try {
    ({ default: sharp } = await import('sharp'));
  } catch {
    console.warn('[og] sharp not installed — wrote default.svg only (no PNG). `npm i -D sharp` to enable PNG.');
    return;
  }
  await sharp(Buffer.from(svg)).png().toFile(path.join(OUT_DIR, 'default.png'));
  console.log('[og] wrote public/og/default.png');
}

main().catch((err) => {
  console.warn('[og] skipped:', err.message);
});
