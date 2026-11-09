#!/usr/bin/env node
/**
 * suggest-framework.mjs — Sprint 1b corpus-rollout aid.
 *
 * READ-ONLY. Tags nothing. Proposes a `framework` for every untagged, published
 * article family by mapping its `contentType` to a framework, with a confidence
 * tier that sorts it into a rollout wave. Output is a review sheet, not an edit.
 *
 *   node scripts/suggest-framework.mjs            # write the preview .md + print summary
 *   node scripts/suggest-framework.mjs --json out.json   # also dump per-family JSON
 *   node scripts/suggest-framework.mjs --wave A   # print only one wave's families
 *
 * The map encodes the pilot's findings (see docs/plans/sprint-1b-corpus-rollout-plan.md):
 *   glossary → explainer (NOT data-reference); comparison → decision but verify it
 *   isn't an explainer-that-compares; law → rules OR the statute-record data-reference.
 * `guide` (the 55% bucket) and `(none)` carry NO auto-proposal — they are the
 * irreducible reader-job work, surfaced grouped by category for cluster-reading.
 */
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, basename } from 'node:path';

const LOCALES = new Set(['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi', 'es', 'fr']);

// contentType -> [proposedFramework, confidence, note]. null = no auto-proposal.
const MAP = {
  place:      ['profile',         'high',   ''],
  company:    ['profile',         'high',   ''],
  data:       ['data-reference',  'high',   ''],
  glossary:   ['explainer',       'high',   'pilot lesson: glossary is explainer-shaped, not data-reference'],
  timeline:   ['history-culture', 'high',   '⚠ true dated origin = history-culture; a calendar/sequence of deadlines is data-reference/how-to'],
  checklist:  ['how-to',          'high',   ''],
  comparison: ['decision',        'high',   '⚠ verify it decides, not an explainer that merely compares'],
  agency:     ['profile',         'medium', 'gov body — profile; "what X does" can be explainer'],
  faq:        ['explainer',       'medium', ''],
  law:        ['rules',           'medium', '⚠ "does this apply to me" = rules; "the statute record" = data-reference'],
  industry:   ['profile',         'medium', '⚠ sector page — profile, or data-reference if figures-led'],
  news:       [null,              'low',    'case-by-case'],
  guide:      [null,              'low',    'reader-job bucket — cluster-read by category'],
  '(none)':   [null,              'low',    'no contentType signal — must read'],
};
const WAVE = { high: 'A', medium: 'B', low: 'C' };

// category -> pillar, parsed from categories.ts (best-effort; unknown -> '?').
function loadPillars() {
  const src = readFileSync('src/lib/categories.ts', 'utf8');
  const m = {};
  const re = /id:\s*'([a-z0-9-]+)',[\s\S]*?pillar:\s*'([a-z-]+)'/g;
  let g;
  while ((g = re.exec(src))) if (!(g[1] in m)) m[g[1]] = g[2];
  return m;
}

function* walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.md')) yield p;
  }
}
function isMaster(file) {
  const b = basename(file).replace(/\.md$/, '');
  const dot = b.lastIndexOf('.');
  return !(dot > -1 && LOCALES.has(b.slice(dot + 1)));
}
function fm(file) {
  const t = readFileSync(file, 'utf8');
  const parts = t.split(/^---\s*$/m);
  if (parts.length < 3) return {};
  const d = {};
  for (const line of parts[1].split(/\r?\n/)) {
    const mm = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (mm) d[mm[1]] = mm[2].trim().replace(/^["']|["']$/g, '');
  }
  return d;
}

const pillars = loadPillars();
const rows = [];
let doneCount = 0, archivedCount = 0;
for (const file of walk('knowledge')) {
  if (!isMaster(file)) continue;
  const d = fm(file);
  const rel = relative('.', file).split('\\').join('/');
  const category = rel.split('/')[1];
  const slug = basename(file).replace(/\.md$/, '');
  if ((d.status || 'published') === 'archived') { archivedCount++; continue; }
  if (d.framework) { doneCount++; continue; }           // already tagged — skip
  const ct = d.contentType && d.contentType.length ? d.contentType : '(none)';
  const [fw, conf, note] = MAP[ct] || [null, 'low', `unmapped contentType "${ct}"`];
  rows.push({
    family: `${category}/${slug}`,
    category,
    pillar: pillars[category] || '?',
    contentType: ct,
    proposed: fw,
    confidence: conf,
    wave: WAVE[conf],
    note,
  });
}

// ---- reporting helpers ----
const byWave = (w) => rows.filter((r) => r.wave === w);
const groupBy = (arr, key) => arr.reduce((m, r) => ((m[r[key]] ??= []).push(r), m), {});
const count = (arr, key) => Object.entries(groupBy(arr, key)).map(([k, v]) => [k, v.length]).sort((a, b) => b[1] - a[1]);

const args = process.argv.slice(2);
const waveArg = (args[args.indexOf('--wave') + 1] || '').toUpperCase();
if (args.includes('--wave') && ['A', 'B', 'C'].includes(waveArg)) {
  for (const r of byWave(waveArg).sort((a, b) => a.family.localeCompare(b.family)))
    console.log(`${r.wave}  ${(r.proposed ?? '(reader-job)').padEnd(16)} ${r.contentType.padEnd(11)} ${r.family}`);
  process.exit(0);
}
if (args.includes('--json')) {
  const out = args[args.indexOf('--json') + 1];
  writeFileSync(out, JSON.stringify(rows, null, 2));
  console.log(`[suggest-framework] wrote ${rows.length} rows → ${out}`);
}

// ---- markdown preview ----
const A = byWave('A'), B = byWave('B'), C = byWave('C');
const esc = (s) => String(s).replace(/\|/g, '\\|');
let md = `# Framework rollout — auto-suggestion preview

Generated by \`scripts/suggest-framework.mjs\` (read-only; nothing is tagged).
**${rows.length} untagged published families** remain (${doneCount} already tagged,
${archivedCount} archived skipped). Proposals come from the \`contentType\`→framework
map in [the rollout plan](./sprint-1b-corpus-rollout-plan.md); every tag is still
confirmed by reader-job at batch time. ⚠ marks a mapping that needs a confirming read.

## Wave sizes

| Wave | Confidence | Families | Method |
|---|---|---:|---|
| **A** | high | ${A.length} | auto-tag from map → sample-verify ~10% per contentType |
| **B** | medium | ${B.length} | light per-cluster read; split the ⚠ mixed types |
| **C** | low (\`guide\`/\`(none)\`/\`news\`) | ${C.length} | reader-job by category cluster |

## Wave A — high-confidence (${A.length})

By contentType → proposed framework:

| contentType | → framework | n | note |
|---|---|---:|---|
${count(A, 'contentType').map(([ct]) => {
  const r = A.find((x) => x.contentType === ct);
  return `| ${ct} | ${r.proposed} | ${A.filter((x) => x.contentType === ct).length} | ${esc(r.note)} |`;
}).join('\n')}

Full Wave A list (family → proposed):

${Object.entries(groupBy(A, 'category')).sort().map(([cat, rs]) =>
  `- **${cat}** (${rs.length}): ` + rs.map((r) => `\`${r.family.split('/')[1]}\`→${r.proposed}`).join(', ')
).join('\n')}

## Wave B — medium (${B.length})

| category | families | contentTypes (proposed) |
|---|---:|---|
${Object.entries(groupBy(B, 'category')).sort().map(([cat, rs]) => {
  const cts = [...new Set(rs.map((r) => `${r.contentType}→${r.proposed ?? '?'}`))].join(', ');
  return `| ${cat} | ${rs.length} | ${esc(cts)} |`;
}).join('\n')}

## Wave C — reader-job bucket (${C.length})

\`guide\`/\`(none)\`/\`news\` — no auto-proposal; classify by category cluster.

| category | families | pillar |
|---|---:|---|
${Object.entries(groupBy(C, 'category')).sort((a, b) => b[1].length - a[1].length).map(([cat, rs]) =>
  `| ${cat} | ${rs.length} | ${rs[0].pillar} |`
).join('\n')}
`;

writeFileSync('docs/plans/framework-rollout-preview.md', md);

// ---- console summary ----
console.log(`[suggest-framework] ${rows.length} untagged published families (${doneCount} tagged, ${archivedCount} archived skipped)`);
console.log(`  Wave A (high):   ${A.length}`);
console.log(`  Wave B (medium): ${B.length}`);
console.log(`  Wave C (low):    ${C.length}`);
console.log('\n  Wave A by contentType → framework:');
for (const [ct, n] of count(A, 'contentType')) {
  const r = A.find((x) => x.contentType === ct);
  console.log(`    ${ct.padEnd(11)} → ${String(r.proposed).padEnd(16)} ${n}`);
}
console.log('\n  wrote docs/plans/framework-rollout-preview.md');
