#!/usr/bin/env node
/**
 * emit-ub-body-source.mjs — emit the English-seed source manifest the translation
 * agents read, for one pillar (or an explicit key list). Pass a category name to
 * emit every UB article in that category that has staged body images, EXCLUDING
 * any whose master file already carries an images: block (idempotent re-runs).
 *
 *   node scripts/emit-ub-body-source.mjs arts-culture   > scratchpad/ubt-source.json
 *   node scripts/emit-ub-body-source.mjs --keys a/b c/d  > scratchpad/ubt-source.json
 *
 * Output shape: { "cat/slug": { title, images:[{alt,subject}, ...] } }
 * (title = master title, for translator context.)
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const meta = JSON.parse(fs.readFileSync(path.join(ROOT, 'public/media/_ub-rollout-meta.json'), 'utf8'));
const argv = process.argv.slice(2);

let keys;
if (argv[0] === '--keys') {
  keys = argv.slice(1);
} else {
  const cat = argv[0];
  if (!cat) { console.error('usage: emit-ub-body-source.mjs <category> | --keys a/b c/d'); process.exit(1); }
  keys = Object.keys(meta).filter((k) => k.startsWith(cat + '/') && (meta[k].body || []).length > 0);
}

const out = {};
let skipped = [];
for (const key of keys) {
  if (!meta[key] || (meta[key].body || []).length === 0) { skipped.push(`${key}(no-body)`); continue; }
  const [cat, slug] = key.split('/');
  const masterPath = path.join(ROOT, 'knowledge', cat, `${slug}.md`);
  if (!fs.existsSync(masterPath)) { skipped.push(`${key}(no-master)`); continue; }
  const raw = fs.readFileSync(masterPath, 'utf8');
  if (/^images:/m.test(raw)) { skipped.push(`${key}(already-done)`); continue; }
  const tm = raw.match(/^title:\s*"?(.*?)"?\s*$/m);
  out[key] = {
    title: tm ? tm[1] : slug,
    images: meta[key].body.map((b) => ({ alt: b.alt, subject: b.subject })),
  };
}
process.stderr.write(`emitting ${Object.keys(out).length} article(s); skipped ${skipped.length}${skipped.length ? ': ' + skipped.slice(0, 20).join(', ') : ''}\n`);
process.stdout.write(JSON.stringify(out, null, 2));
