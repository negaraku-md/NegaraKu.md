// build-review-queue.mjs — the proactive freshness queue (lifecycle step 5, #3+#4).
//
// Turns the passive reviewDue field into an ACTIONABLE, PRIORITIZED queue so the
// work finds the reviewer, not the reverse. Reads the build manifest
// (public/api/articles.json) + visitor analytics (public/api/analytics.json) and
// ranks every published topic that is overdue (or due soon) by VALUE:
//
//     priority = (readers + 1) × overdue-weight
//
// so a high-traffic, long-overdue page outranks a quiet one just tipping over.
// Emits:
//   • public/api/review-queue.json  — consumed by the contributor Worklist cockpit
//   • a Markdown digest on stdout    — the weekly GitHub issue body (review-due.yml)
//
// Read-only over content: it never edits articles. Run after sync + build-analytics.

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const API = join(ROOT, 'public', 'api');
const SOON_DAYS = 45; // "due soon" horizon — enough lead time to schedule a review
const TOP_N = 25; // how many to spell out in the issue digest

const read = (f, fb) => { try { return JSON.parse(readFileSync(join(API, f), 'utf8')); } catch { return fb; } };
const arts = (read('articles.json', { articles: [] }).articles) ?? [];
const analytics = read('analytics.json', {});
const readersOf = (key) => { const r = analytics[key]?.readers; return typeof r === 'number' ? r : (r?.total ?? 0); };

const today = new Date();
const dayMs = 86_400_000;
const daysBetween = (a, b) => Math.round((a.getTime() - b.getTime()) / dayMs);

// One row per published MASTER that carries a reviewDue.
const masters = arts.filter((a) => a.lang === (a.masterLanguage ?? 'ms') && a.status === 'published' && a.reviewDue);

const overdue = [];
const dueSoon = [];
for (const a of masters) {
  const due = new Date(a.reviewDue);
  const diff = daysBetween(due, today); // <0 overdue, >0 upcoming
  const readers = readersOf(a.key);
  const row = {
    key: a.key,
    title: a.title,
    category: a.category,
    tier: a.tier,
    sensitivity: a.sensitivity,
    reviewDue: a.reviewDue,
    readers,
    daysOverdue: diff < 0 ? -diff : 0,
    daysUntilDue: diff > 0 ? diff : 0,
  };
  if (diff < 0) {
    row.priority = Math.round((readers + 1) * (1 + -diff / 30)); // overdue months amplify traffic
    overdue.push(row);
  } else if (diff <= SOON_DAYS) {
    row.priority = Math.round((readers + 1) * (1 + diff / SOON_DAYS)); // soonest + most-read first
    dueSoon.push(row);
  }
}
overdue.sort((x, y) => y.priority - x.priority);
dueSoon.sort((x, y) => x.daysUntilDue - y.daysUntilDue || y.readers - x.readers);

const out = {
  generatedAt: today.toISOString(),
  horizonDays: SOON_DAYS,
  counts: { published: masters.length, overdue: overdue.length, dueSoon: dueSoon.length },
  overdue,
  dueSoon,
};
writeFileSync(join(API, 'review-queue.json'), JSON.stringify(out, null, 2) + '\n');
console.error(`[review-queue] published=${masters.length} overdue=${overdue.length} dueSoon=${dueSoon.length} -> public/api/review-queue.json`);

// ---- Markdown digest (stdout → GitHub issue body) --------------------------
const sens = (r) => (r.sensitivity && r.sensitivity !== 'none' ? ` · 🔒 ${r.sensitivity}` : '');
const line = (r, when) => `- **${r.title}** — \`${r.key}\` · tier ${r.tier}${sens(r)} · ${r.readers} readers · ${when}`;
const md = [];
md.push(`## 📋 Articles due for review`);
md.push('');
md.push(`_Auto-generated ${today.toISOString().slice(0, 10)}. ${overdue.length} overdue, ${dueSoon.length} due within ${SOON_DAYS} days (of ${masters.length} published). Ranked by readership × how overdue._`);
md.push('');
if (overdue.length) {
  md.push(`### ⏰ Overdue (${overdue.length}) — refresh these first`);
  for (const r of overdue.slice(0, TOP_N)) md.push(line(r, `**${r.daysOverdue}d overdue**`));
  if (overdue.length > TOP_N) md.push(`- …and ${overdue.length - TOP_N} more (see \`public/api/review-queue.json\`).`);
  md.push('');
}
if (dueSoon.length) {
  md.push(`### 🗓️ Due soon (${dueSoon.length}, next ${SOON_DAYS} days)`);
  for (const r of dueSoon.slice(0, TOP_N)) md.push(line(r, `due in ${r.daysUntilDue}d (${r.reviewDue})`));
  md.push('');
}
if (!overdue.length && !dueSoon.length) md.push(`✅ Nothing due in the next ${SOON_DAYS} days. The corpus is fresh.`);
md.push('');
md.push(`To refresh one: update the article, bump its \`revision\`, re-stamp translations (\`npm run translate:stamp\`), and set a new \`reviewDue\` — or run \`node scripts/publish-reviewed.mjs\` which stamps the policy date. Full queue: \`public/api/review-queue.json\`. Cadence policy: \`scripts/lib/review-cadence.mjs\`.`);
process.stdout.write(md.join('\n') + '\n');
