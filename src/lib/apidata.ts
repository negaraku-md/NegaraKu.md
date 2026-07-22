import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Build-time readers for the generated JSON in public/api/. These files are
// produced by scripts/{build-dashboard,build-changelog,build-git-info}.mjs
// during predev/prebuild. Returns a fallback when a file is missing.

const API_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../public/api');

function read<T>(name: string, fallback: T): T {
  const file = path.join(API_DIR, name);
  if (!existsSync(file)) return fallback;
  try {
    return JSON.parse(readFileSync(file, 'utf8')) as T;
  } catch {
    return fallback;
  }
}

export interface Vital {
  label: { ms: string; en: string; zh: string };
  score: number;
  detail: { ms: string; en: string; zh: string };
}
export interface Dashboard {
  totals: { articles: number; files: number; languages: number; categories: number; reviewedPct: number };
  vitals: Record<string, Vital>;
  statusDist: Record<string, number>;
  perCategory: Record<string, number>;
  perLangCoverage: Record<string, { have: number; total: number; pct: number }>;
  registry: Array<{ title: { ms: string; en: string; zh: string }; category: string; status: string; words: number; sources: number; updated: string | null; langs: string[] }>;
}

export function getDashboard(): Dashboard {
  return read<Dashboard>('dashboard.json', {
    totals: { articles: 0, files: 0, languages: 3, categories: 0, reviewedPct: 0 },
    vitals: {},
    statusDist: {},
    perCategory: {},
    perLangCoverage: {},
    registry: [],
  });
}

export interface ChangelogEntry { hash: string | null; author: string; date: string; subject?: string; category?: string; titleI18n?: { ms: string; en: string; zh: string }; type: string; icon: string }
export interface Changelog {
  source: string;
  total: number;
  tally: Record<string, number>;
  days: Array<{ date: string; count: number; items: ChangelogEntry[] }>;
}

export function getChangelog(): Changelog {
  return read<Changelog>('changelog.json', { source: 'none', total: 0, tally: {}, days: [] });
}

export interface GitInfo {
  commits: Array<{ hash: string; author: string; date: string; subject: string }>;
  contributors: Array<{ count: number; name: string; email: string }>;
}

export function getGitInfo(): GitInfo {
  return read<GitInfo>('git.json', { commits: [], contributors: [] });
}
