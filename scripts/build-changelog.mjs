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
  const s = subject.toLowerCase().trim();
  // Prefer the conventional-commit type prefix (text before the first ":"). This
  // is far more reliable than scanning the whole subject, where substrings like
  // "en" inside "backend" used to mis-flag commits as translations.
  const prefix = s.includes(':') ? s.slice(0, s.indexOf(':')).trim() : '';
  if (/^(feat|feature)$/.test(prefix)) return { key: 'feature', icon: '✨' };
  if (/^(fix|bug|bugfix|hotfix)$/.test(prefix)) return { key: 'fix', icon: '🐛' };
  if (/^(content|docs?|article)$/.test(prefix)) return { key: 'content', icon: '📄' };
  if (/^(translate|translation|i18n|lang|locale)$/.test(prefix)) return { key: 'translate', icon: '🌐' };
  if (/^(chore|refactor|style|ui|ux|build|ci|test|perf|arch|architecture|revert|deps?|config)$/.test(prefix))
    return { key: 'chore', icon: '🔧' };
  // No recognised prefix → fall back to word-boundary keyword scan on the subject.
  if (/\bfix(es|ed)?\b|\bbug\b/.test(s)) return { key: 'fix', icon: '🐛' };
  if (/\btranslat\w*\b|\bi18n\b/.test(s)) return { key: 'translate', icon: '🌐' };
  if (/\b(content|article)\b/.test(s)) return { key: 'content', icon: '📄' };
  if (/\b(feat|feature|add(s|ed)?|new)\b/.test(s)) return { key: 'feature', icon: '✨' };
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
      return { hash, author, date, subject: cleanSubject(subject), type: type.key, icon: type.icon };
    })
    // The changelog is READER-facing, so drop developer-only noise (chore, build,
    // ci, refactor, style — all bucketed as `chore`). This also removes internal
    // commits a visitor should never see (e.g. the "EXPERIMENT" branch commits).
    // The reader-relevant history — content, translations, features, fixes — stays.
    .filter((e) => e.type !== 'chore');
}

// Strip a conventional-commit prefix ("feat:", "content(gov):", "fix!:") so the
// changelog shows the human message, not the developer tag. Leaves ordinary
// prose (e.g. "1963: Building Malaysia…") untouched, and capitalises the result.
function cleanSubject(subject) {
  const m = subject.match(/^[a-z]+(\([^)]*\))?!?:\s*(.+)$/i);
  const text = m ? m[2].trim() : subject.trim();
  return text.charAt(0).toUpperCase() + text.slice(1);
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
