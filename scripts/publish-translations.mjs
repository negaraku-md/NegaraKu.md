// Publish the ms/zh translation files for the given topics (idempotent).
// A translation inherits its master's review sign-off: once the EN master is
// published + reviewed, its translations go live too. Only flips files that are
// still in-review with an empty reviewer, so re-running is safe.
//
// Usage: node scripts/publish-translations.mjs <category/slug> [<category/slug> ...]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const REVIEWER = 'ashton-tan';
const targets = process.argv.slice(2);
if (!targets.length) {
  console.error('usage: publish-translations.mjs <category/slug> [...]');
  process.exit(1);
}

let flipped = 0;
const skipped = [];
for (const t of targets) {
  for (const lang of ['ms', 'zh']) {
    const f = `knowledge/${t}.${lang}.md`;
    if (!existsSync(f)) { skipped.push(`${f} (missing)`); continue; }
    let raw = readFileSync(f, 'utf8');
    if (!/^status:\s*"in-review"/m.test(raw)) { skipped.push(`${f} (not in-review)`); continue; }
    raw = raw.replace(/^status:\s*"in-review"/m, 'status: "published"');
    raw = raw.replace(/^reviewer:\s*null\s*$/m, `reviewer: "${REVIEWER}"`);
    writeFileSync(f, raw, 'utf8');
    flipped++;
  }
}
console.log(`[publish-translations] published ${flipped} translation file(s)`);
if (skipped.length) console.log('skipped:\n  ' + skipped.join('\n  '));
