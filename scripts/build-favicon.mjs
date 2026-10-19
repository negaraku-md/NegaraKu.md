// build-favicon.mjs — generate public/favicon.ico from the brand icon.
//
// Why: browsers (and Lighthouse's crawler) auto-request /favicon.ico for the tab
// icon even when the HTML only declares favicon.svg. GitHub Pages has no .ico, so
// that auto-request 404'd — which Lighthouse reports as a console/browser error
// (the "Browser errors were logged to the console" Best-Practices flag) and shows
// up in Search Console's 404 list. This emits a real multi-size ICO (16/32/48,
// PNG-compressed entries — valid per the ICO spec and supported by every modern
// browser) so the auto-request returns 200.
//
// Idempotent + cheap. Run on demand (or wire into prebuild); the output is
// committed so a plain checkout already has it.

import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'public', 'brand', 'negaraku-icon-192.png');
const OUT = path.join(ROOT, 'public', 'favicon.ico');
const SIZES = [16, 32, 48];

// Pack an array of {size, png(Buffer)} into a single .ico (ICONDIR + entries + PNGs).
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = icon
  header.writeUInt16LE(images.length, 4); // image count

  const entries = [];
  let offset = 6 + images.length * 16; // PNG data starts after header + all entries
  for (const { size, png } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // width  (0 = 256)
    e.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 = 256)
    e.writeUInt8(0, 2); // palette colors (0 = no palette)
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // color planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(png.length, 8); // image byte size
    e.writeUInt32LE(offset, 12); // image byte offset
    offset += png.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.png)]);
}

const src = await readFile(SRC);
const images = await Promise.all(
  SIZES.map(async (size) => ({
    size,
    png: await sharp(src).resize(size, size, { fit: 'cover' }).png().toBuffer(),
  })),
);
await writeFile(OUT, buildIco(images));
console.log(`[favicon] wrote ${path.relative(ROOT, OUT)} (${SIZES.join('/')}px, ${(await readFile(OUT)).length} bytes)`);
