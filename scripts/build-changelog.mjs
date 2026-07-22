// build-changelog.mjs — produce a date-grouped changelog.
// Prefers git history; falls back to article `updated` dates from the manifest
// so the /changelog page is populated even before the first commit.
// Writes public/api/changelog.json.

import { execFileSync } from 'node:child_process';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = path.join(ROOT, 'public', 'api');
const OUT = path.join(API, 'changelog.json');

const TYPE = (subject) => {
  const s = subject.toLowerCase();
  if (/^feat|feature|add/.test(s)) return { key: 'feature', icon: '✨' };
  if (/^fix|bug/.test(s)) return { key: 'fix', icon: '🐛' };
  if (/^docs?|content|article/.test(s)) return { key: 'content', icon: '📄' };
  if (/^translat|i18n|zh|en/.test(s)) return { key: 'translate', icon: '🌐' };
  return { key: 'chore', icon: '🔧' };
};

function fromGit() {
  const log = execFileSync(
    'git',
    ['log', '-500', '--no-merges', '--pretty=format:%h\x1f%an\x1f%ad\x1f%s', '--date=short'],
    { cwd: ROOT, encoding: 'utf8' },
  ).trim();
  if (!log) return null;
  return log
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [hash, author, date, subject] = line.split('\x1f');
      const type = TYPE(subject);
      return { hash, author, date, subject, type: type.key, icon: type.icon };
    });
}

async function fromManifest() {
  const file = path.join(API, 'articles.json');
  if (!existsSync(file)) return [];
  const { articles } = JSON.parse(await readFile(file, 'utf8'));
  // Collect per-language titles keyed by canonical article key, so one entry
  // per article can render in the reader's language (not 3 entries, one per file).
  const byKey = new Map();
  for (const a of articles) {
    if (!a.updated) continue;
    if (!byKey.has(a.key)) {
      byKey.set(a.key, { key: a.key, category: a.category, date: a.updated, titles: {} });
    }
    byKey.get(a.key).titles[a.lang] = a.title;
  }
  return [...byKey.values()]
    .map((e) => ({
      hash: null,
      author: 'NegaraKu.md',
      date: e.date,
      category: e.category,
      // Trilingual title; falls back to Malay for any missing translation.
      titleI18n: { ms: e.titles.ms, en: e.titles.en ?? e.titles.ms, zh: e.titles.zh ?? e.titles.ms },
      type: 'content',
      icon: '📄',
    }))
    .sort((x, y) => (x.date < y.date ? 1 : -1));
}

async function main() {
  let entries = [];
  let source = 'git';
  try {
    entries = fromGit() ?? [];
  } catch {
    entries = [];
  }
  if (!entries.length) {
    entries = await fromManifest();
    source = 'manifest';
  }

  // Group by date + tally by type.
  const byDate = new Map();
  const tally = {};
  for (const e of entries) {
    if (!byDate.has(e.date)) byDate.set(e.date, []);
    byDate.get(e.date).push(e);
    tally[e.type] = (tally[e.type] ?? 0) + 1;
  }
  const days = [...byDate.entries()]
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .map(([date, items]) => ({ date, count: items.length, items }));

  await mkdir(API, { recursive: true });
  await writeFile(OUT, JSON.stringify({ source, total: entries.length, tally, days }, null, 2));
  console.log(`[changelog] ${entries.length} ent(source: ${source}) → public/api/changelog.json`);
}

main().catch((err) => {
  console.warn('[changelog] skipped:', err.message);
});
