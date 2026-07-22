// build-git-info.mjs — snapshot recent commits + contributor tallies from git.
// Writes public/api/git.json. Degrades gracefully to empty data when the
// project is not yet a git repo (so the site still builds before first commit).

import { execFileSync } from 'node:child_process';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'api', 'git.json');

function git(args) {
  return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' }).trim();
}

async function main() {
  let commits = [];
  let contributors = [];
  try {
    git(['rev-parse', '--is-inside-work-tree']);
    const log = git([
      'log',
      '-50',
      '--no-merges',
      '--pretty=format:%h\x1f%an\x1f%ad\x1f%s',
      '--date=short',
    ]);
    commits = log
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const [hash, author, date, subject] = line.split('\x1f');
        return { hash, author, date, subject };
      });

    const shortlog = git(['shortlog', '-sne', 'HEAD']);
    contributors = shortlog
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const m = line.trim().match(/^(\d+)\s+(.+?)\s+<(.+?)>$/);
        return m ? { count: Number(m[1]), name: m[2], email: m[3] } : null;
      })
      .filter(Boolean);
  } catch {
    console.warn('[git] not a git repo (or no commits) — writing empty git.json.');
  }

  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify({ commits, contributors }, null, 2));
  console.log(`[git] ${commits.length} commit(s), ${contributors.length} contributor(s) → public/api/git.json`);
}

main().catch((err) => {
  console.warn('[git] skipped:', err.message);
});
