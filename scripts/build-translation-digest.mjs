// build-translation-digest.mjs — Markdown digest of the re-translation worklist.
//
// Reads public/api/translation-debt.json (scripts/translation-sync.mjs) + the
// readership in public/api/analytics.json, and prints a prioritized digest for
// the weekly "Translations to refresh" GitHub issue (review-due.yml). When a
// master is updated & republished its translations fall stale; this is how a
// maintainer is told what to re-translate, most-read topics first. Read-only.

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const API = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'api');
const read = (f, fb) => { try { return JSON.parse(readFileSync(join(API, f), 'utf8')); } catch { return fb; } };
const debt = read('translation-debt.json', { topics: [], orphans: [], counts: {} });
const analytics = read('analytics.json', {});
const readersOf = (k) => { const r = analytics[k]?.readers; return typeof r === 'number' ? r : (r?.total ?? 0); };
const TOP_N = 30;

const rows = debt.topics
  .map((t) => ({ ...t, readers: readersOf(t.key) }))
  .sort((a, b) => b.readers - a.readers || b.staleLangs.length - a.staleLangs.length);

const c = debt.counts ?? {};
const md = [];
md.push('## 🌐 Translations to refresh');
md.push('');
md.push(`_Auto-generated ${new Date().toISOString().slice(0, 10)}. ${c.staleTopics ?? rows.length} topic(s), ${c.staleTranslations ?? 0} stale translation file(s)${c.orphans ? `, ${c.orphans} orphan(s)` : ''}. A master changed since these were translated — re-translate, then \`npm run translate:stamp\`. Most-read first._`);
md.push('');
if (rows.length) {
  for (const r of rows.slice(0, TOP_N)) md.push(`- **${r.key}** — ${r.readers} readers · ${r.staleLangs.length} lang(s): \`${r.staleLangs.join(' ')}\``);
  if (rows.length > TOP_N) md.push(`- …and ${rows.length - TOP_N} more (see \`public/api/translation-debt.json\`).`);
} else {
  md.push('✅ Every translation is in sync with its master.');
}
if (debt.orphans?.length) {
  md.push('');
  md.push(`### ⚠️ Orphans (${debt.orphans.length}) — translation without a master`);
  for (const o of debt.orphans.slice(0, TOP_N)) md.push(`- \`${o}\``);
}
md.push('');
md.push('Re-translate with `node scripts/translate.mjs`, then `npm run translate:stamp`. Full list: `public/api/translation-debt.json`.');
process.stdout.write(md.join('\n') + '\n');
