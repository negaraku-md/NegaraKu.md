// build-og.mjs — render Open Graph images (1200×630) for social/Facebook link
// previews. Generates a branded DEFAULT card plus a PER-ARTICLE card (title +
// category) for every article in the manifest, so a shared article link shows a
// card specific to that page. Uses `sharp` to rasterise SVG → PNG.
// Non-fatal: if sharp is unavailable it warns, writes the default SVG, and skips.

import { mkdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'og');
const MANIFEST = path.join(ROOT, 'public', 'api', 'articles.json');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const titleCase = (id) => id.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
const TITLE_FONT = "Montserrat, 'Noto Sans', 'Noto Sans CJK SC', 'Microsoft YaHei', Arial, sans-serif";
const BODY_FONT = "Lato, 'Noto Sans', 'Noto Sans CJK SC', 'Microsoft YaHei', Arial, sans-serif";

// Wrap a title into lines. Latin wraps by words; CJK (no spaces) wraps by
// character. Truncates to maxLines with an ellipsis.
function wrapTitle(title, { maxLatin = 26, maxCjk = 16, maxLines = 4 } = {}) {
  const cjk = /[㐀-鿿]/.test(title);
  const lines = [];
  if (cjk) {
    let line = '';
    for (const ch of Array.from(title)) {
      if (Array.from(line).length >= maxCjk) {
        lines.push(line);
        line = '';
        if (lines.length >= maxLines) break;
      }
      line += ch;
    }
    if (line && lines.length < maxLines) lines.push(line);
  } else {
    let line = '';
    for (const w of title.split(/\s+/)) {
      if (line && (line + ' ' + w).length > maxLatin) {
        lines.push(line);
        line = w;
        if (lines.length >= maxLines) break;
      } else {
        line = line ? line + ' ' + w : w;
      }
    }
    if (line && lines.length < maxLines) lines.push(line);
  }
  // Ellipsis if we ran out of room before consuming the whole title.
  const joined = lines.join(cjk ? '' : ' ').replace(/…$/, '');
  const full = cjk ? title.replace(/\s+/g, '') : title.replace(/\s+/g, ' ');
  if (lines.length && joined.length < full.length) {
    lines[lines.length - 1] = lines[lines.length - 1].replace(/\s*$/, '') + '…';
  }
  return lines;
}

function articleSvg({ title, category }) {
  const lines = wrapTitle(title);
  const lh = 78;
  const blockH = (lines.length - 1) * lh;
  // Centre shorter titles, but never let the block ride up into the category
  // label (y≈182) — clamp the first baseline to 262.
  const startY = Math.max(262, 330 - blockH / 2);
  const tspans = lines
    .map((l, i) => `<tspan x="90" dy="${i === 0 ? 0 : lh}">${esc(l)}</tspan>`)
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#07070A"/>
  <rect x="0" y="0" width="1200" height="8" fill="#FFC000"/>
  <g transform="translate(90,60) scale(0.34)">
    <path d="M120 40a70 70 0 1 0 0 120 55 55 0 1 1 0-120z" fill="#FFC000"/>
    <path d="M150 70l9 22 23.5 1.5-18 15 6 23-20.5-12.5-20.5 12.5 6-23-18-15 23.5-1.5z" fill="#FFC000"/>
  </g>
  <text x="150" y="102" font-family="${TITLE_FONT}" font-size="34" font-weight="700" fill="#F4F4F8">NegaraKu<tspan fill="#FFC000">.md</tspan></text>
  <text x="90" y="182" font-family="${BODY_FONT}" font-size="26" font-weight="700" letter-spacing="3" fill="#FFC000">${esc(titleCase(category)).toUpperCase()}</text>
  <text x="90" y="${startY}" font-family="${TITLE_FONT}" font-size="62" font-weight="800" fill="#F4F4F8">${tspans}</text>
  <text x="90" y="582" font-family="${BODY_FONT}" font-size="27" fill="#9A9AB8">An open-source knowledge base about Malaysia · <tspan fill="#C0C0D0">negaraku.md</tspan></text>
</svg>`;
}

const defaultSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#07070A"/>
  <rect x="0" y="0" width="1200" height="8" fill="#FFC000"/>
  <g transform="translate(90,150)">
    <path d="M120 40a70 70 0 1 0 0 120 55 55 0 1 1 0-120z" fill="#FFC000"/>
    <path d="M150 70l9 22 23.5 1.5-18 15 6 23-20.5-12.5-20.5 12.5 6-23-18-15 23.5-1.5z" fill="#FFC000"/>
  </g>
  <text x="90" y="400" font-family="${TITLE_FONT}" font-size="96" font-weight="700" fill="#F4F4F8">NegaraKu<tspan fill="#FFC000">.md</tspan></text>
  <text x="92" y="470" font-family="${BODY_FONT}" font-size="38" fill="#C0C0D0">An open-source, AI-friendly knowledge base about Malaysia</text>
  <text x="92" y="560" font-family="${BODY_FONT}" font-size="30" fill="#9A9AB8">Sponsored by <tspan fill="#FFC000" font-weight="700">1company</tspan></text>
</svg>`;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(path.join(OUT_DIR, 'default.svg'), defaultSvg);

  let sharp;
  try {
    ({ default: sharp } = await import('sharp'));
  } catch {
    console.warn('[og] sharp not installed — wrote default.svg only. `npm i -D sharp` to enable PNG.');
    return;
  }
  const toPng = (svg, file) => sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(file);
  await toPng(defaultSvg, path.join(OUT_DIR, 'default.png'));

  let manifest = [];
  try {
    const raw = JSON.parse(await readFile(MANIFEST, 'utf8'));
    manifest = Array.isArray(raw) ? raw : raw.articles ?? [];
  } catch {
    console.warn('[og] manifest not found — wrote default.png only. Run `npm run sync` first.');
    return;
  }
  const items = manifest.filter((a) => a.lang && a.category && a.slug && a.title);
  let made = 0;
  const CONC = 24;
  for (let i = 0; i < items.length; i += CONC) {
    await Promise.all(
      items.slice(i, i + CONC).map(async (a) => {
        const dir = path.join(OUT_DIR, a.lang, a.category);
        await mkdir(dir, { recursive: true });
        await toPng(articleSvg({ title: a.title, category: a.category }), path.join(dir, `${a.slug}.png`));
        made++;
      }),
    );
  }
  console.log(`[og] wrote default.png + ${made} per-article cards`);
}

main().catch((err) => {
  console.warn('[og] skipped:', err.message);
});
