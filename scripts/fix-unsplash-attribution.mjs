// fix-unsplash-attribution.mjs — bring Unsplash heroes up to the Unsplash API
// production attribution standard.
//
// Unsplash requires: the photographer's name links to THEIR profile and "Unsplash"
// links to unsplash.com, both carrying ?utm_source=NegaraKu.md&utm_medium=referral,
// and a download event triggered when a photo is used. Our rollout stored the
// photo-PAGE url in heroSource and a combined "Name / Unsplash" string in heroCredit
// (so the view could only render ONE link). This script, per Unsplash hero:
//   1. reads /photos/<id> with the access key → photographer name + profile url,
//   2. triggers the download endpoint (links.download_location) for compliance,
//   3. rewrites heroCredit → the clean name and heroSource → the profile url
//      across the master AND all 12 translations (hero* is freshness-neutral).
// The two-link render + UTM lives in ArticleView (heroLicense === 'Unsplash License'
// is the detector). Re-runnable: files already pointing at a /@profile are skipped.
//
// Env: UNSPLASH_ACCESS_KEY (read from .env.local or the environment).

import { readFile, writeFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';

const ROOT = process.cwd();

function loadKey() {
  if (process.env.UNSPLASH_ACCESS_KEY) return process.env.UNSPLASH_ACCESS_KEY.trim();
  const envPath = path.join(ROOT, '.env.local');
  if (existsSync(envPath)) {
    const m = readFileSync(envPath, 'utf8').match(/^UNSPLASH_ACCESS_KEY=(.+)$/m);
    if (m) return m[1].trim();
  }
  throw new Error('UNSPLASH_ACCESS_KEY not found (env or .env.local)');
}

const photoId = (heroSource) => heroSource.replace(/[?"'].*$/, '').split('-').pop().slice(-11);

async function main() {
  const KEY = loadKey();
  // All files carrying an Unsplash hero (masters + translations).
  const files = execSync(`grep -rlE 'heroLicense: *"Unsplash' knowledge/`, { encoding: 'utf8' })
    .split('\n').map((s) => s.trim()).filter(Boolean);
  console.log(`[unsplash] ${files.length} files with an Unsplash hero`);

  // Group by current photo id (from heroSource), fetch metadata once per id.
  const idCache = new Map(); // id -> { name, profile }
  let changed = 0, skipped = 0;

  for (const rel of files) {
    const abs = path.join(ROOT, rel);
    let raw = await readFile(abs, 'utf8');
    const srcLine = raw.match(/^heroSource:\s*"([^"]+)"/m);
    if (!srcLine) { console.warn(`  ! ${rel}: no heroSource`); continue; }
    const src = srcLine[1];
    if (/unsplash\.com\/@/.test(src)) { skipped++; continue; } // already a profile url

    const id = photoId(src);
    if (!idCache.has(id)) {
      const res = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${KEY}`);
      if (!res.ok) { console.warn(`  ! photo ${id} → HTTP ${res.status}; leaving ${rel}`); continue; }
      const j = await res.json();
      const name = j.user?.name || '';
      const profile = j.user?.links?.html || '';
      const dl = j.links?.download_location;
      // Trigger the download event (compliance). Non-fatal on error.
      if (dl) { try { await fetch(`${dl}&client_id=${KEY}`); } catch { /* ignore */ } }
      idCache.set(id, { name, profile });
      console.log(`  ↳ ${id}: ${name} → ${profile} (download triggered)`);
    }
    const { name, profile } = idCache.get(id);
    if (!name || !profile) { console.warn(`  ! ${id}: missing name/profile; leaving ${rel}`); continue; }

    const next = raw
      .replace(/^(heroCredit:\s*)"[^"]*"/m, `$1"${name}"`)
      .replace(/^(heroSource:\s*)"[^"]*"/m, `$1"${profile}"`);
    if (next !== raw) { await writeFile(abs, next, 'utf8'); changed++; }
  }
  console.log(`[unsplash] done: ${changed} files updated, ${skipped} already-profile, ${idCache.size} photos.`);
}

main().catch((e) => { console.error('[unsplash] FAILED:', e.message); process.exit(1); });
