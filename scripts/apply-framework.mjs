#!/usr/bin/env node
/**
 * apply-framework.mjs — tag article families with a `framework` value.
 *
 * Takes a JSON map { "category/slug": "framework", ... } and inserts
 * `framework: <value>` into the frontmatter of the master + every locale variant.
 * Metadata-only and freshness-neutral (framework is outside TRANSLATED_FIELDS).
 *
 *   node scripts/apply-framework.mjs map.json           # apply
 *   node scripts/apply-framework.mjs map.json --dry      # list, change nothing
 *
 * CORRECT PLACEMENT (the Sprint 1b gotcha): the line goes BEFORE the closing
 * `---` of the frontmatter. Inserting it AFTER puts it in the body, silently
 * changing the content hash (false "stale") and hiding it from the validator.
 * A family already carrying `framework` is skipped (never double-tagged).
 * Always run validate-frontmatter + translation-sync after.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';

const FRAMEWORKS = new Set([
  'explainer', 'history-culture', 'profile', 'how-to', 'decision', 'rules',
  'data-reference', 'journey-hub',
]);

const [mapFile, ...flags] = process.argv.slice(2);
const DRY = flags.includes('--dry');
if (!mapFile) { console.error('usage: apply-framework.mjs <map.json> [--dry]'); process.exit(2); }
const map = JSON.parse(readFileSync(mapFile, 'utf8'));

// family "cat/slug" -> every file: knowledge/cat/slug.md + slug.<locale>.md
function familyFiles(family) {
  const dir = join('knowledge', dirname(family));
  const slug = basename(family);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f === `${slug}.md` || f.startsWith(`${slug}.`) && f.endsWith('.md')
      && /^[a-z]{2}\.md$/.test(f.slice(slug.length + 1)))
    .map((f) => join(dir, f));
}

// insert `framework: <fw>` immediately BEFORE the 2nd `---` line.
function tagFile(file, fw) {
  const text = readFileSync(file, 'utf8');
  if (/^framework:/m.test(text)) return 'skip-has';
  const lines = text.split('\n');
  let seen = 0, at = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^---\s*\r?$/.test(lines[i])) { seen++; if (seen === 2) { at = i; break; } }
  }
  if (at < 0) return 'skip-nofm';
  lines.splice(at, 0, `framework: ${fw}`);
  if (!DRY) writeFileSync(file, lines.join('\n'));
  return 'tagged';
}

let fam = 0, tagged = 0, skipHas = 0, skipNoFm = 0, missing = 0, badFw = 0;
for (const [family, fw] of Object.entries(map)) {
  if (!FRAMEWORKS.has(fw)) { console.error(`! bad framework "${fw}" for ${family}`); badFw++; continue; }
  const files = familyFiles(family);
  if (!files.length) { console.error(`! no files for ${family}`); missing++; continue; }
  fam++;
  for (const f of files) {
    const r = tagFile(f, fw);
    if (r === 'tagged') tagged++;
    else if (r === 'skip-has') skipHas++;
    else if (r === 'skip-nofm') skipNoFm++;
  }
}
console.log(`[apply-framework]${DRY ? ' DRY' : ''} families: ${fam}, files tagged: ${tagged}, skipped(has): ${skipHas}, skipped(no-fm): ${skipNoFm}, missing-fam: ${missing}, bad-fw: ${badFw}`);
