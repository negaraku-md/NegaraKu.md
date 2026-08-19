import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import type { Article } from './content';

// Build-time readers for the generated JSON in public/api/. These files are
// produced by scripts/{build-dashboard,build-changelog,build-git-info}.mjs
// during predev/prebuild. Returns a fallback when a file is missing.

const API_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../public/api');

// These files are generated once (predev/prebuild) and immutable for the life of
// the process, so parse each at most once — the analytics reader in particular is
// hit on every one of ~3,000 article pages during a build.
const _apiCache = new Map<string, unknown>();
function read<T>(name: string, fallback: T): T {
  if (_apiCache.has(name)) return _apiCache.get(name) as T;
  const file = path.join(API_DIR, name);
  let value: T = fallback;
  if (existsSync(file)) {
    try { value = JSON.parse(readFileSync(file, 'utf8')) as T; } catch { /* keep fallback */ }
  }
  _apiCache.set(name, value);
  return value;
}

export interface Vital {
  label: { ms: string; en: string; zh: string };
  score: number;
  detail: { ms: string; en: string; zh: string };
}
export interface Dashboard {
  totals: {
    articles: number;
    files: number;
    languages: number;
    categories: number;
    reviewedPct: number;
    masterArticles?: number;
    filesByLang?: Record<string, number>;
    publishedByLang?: Record<string, number>;
    publishedTotal?: number;
  };
  vitals: Record<string, Vital>;
  statusDist: Record<string, number>;
  perCategory: Record<string, number>;
  perLangCoverage: Record<string, { have: number; total: number; pct: number; source: number; target: number; translated: number; missing: number }>;
  trilingual: { topics: number; full: number; two: number; one: number; fullPct: number };
  registry: Array<{ title: { ms: string; en: string; zh: string }; category: string; status: string; words: number; sources: number; updated: string | null; langs: string[] }>;
}

export function getDashboard(): Dashboard {
  return read<Dashboard>('dashboard.json', {
    totals: { articles: 0, files: 0, languages: 3, categories: 0, reviewedPct: 0 },
    vitals: {},
    statusDist: {},
    perCategory: {},
    perLangCoverage: {},
    trilingual: { topics: 0, full: 0, two: 0, one: 0, fullPct: 0 },
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

export interface GraphNode {
  id: string;
  slug: string;
  category: string;
  titles: { ms: string; en: string; zh: string };
  weight: number;
}
export interface GraphLink {
  source: string;
  target: string;
  rel: string;
}
export interface KnowledgeGraph {
  generatedFrom?: string;
  nodeCount: number;
  linkCount: number;
  nodes: GraphNode[];
  links: GraphLink[];
}

export function getGraph(): KnowledgeGraph {
  return read<KnowledgeGraph>('graph.json', { nodeCount: 0, linkCount: 0, nodes: [], links: [] });
}

// Visitor analytics (docs/ANALYTICS.md): per-article buckets for human readers,
// search crawlers and AI crawlers. A bucket is a bare count, or an object with a
// per-bot breakdown. Read on every article page, so cache it (see `read`).
export type AnalyticsBucket = number | { total: number; byBot?: Record<string, number> };
export type Analytics = Record<string, { readers?: AnalyticsBucket; search?: AnalyticsBucket; ai?: AnalyticsBucket }>;

export function getAnalytics(): Analytics {
  return read<Analytics>('analytics.json', {});
}

// Article keys ("category/slug") ranked by reader analytics with a recency
// fallback, top N. Lets a pair of strips (Most read + Latest) share one ranking
// so the Latest strip can exclude what Most read already showed — matches the
// internal ranking in ArticleStrip's "reads" mode.
export function mostReadKeys(articles: Article[], limit = 4): string[] {
  const a = getAnalytics();
  const reads = (x: Article): number => {
    const r = a[`${x.data.category}/${x.data.slug}`]?.readers;
    return r == null ? 0 : typeof r === 'object' ? r.total ?? 0 : r;
  };
  return [...articles]
    .filter((x) => x.data.category !== 'about')
    .sort((p, q) => {
      const d = reads(q) - reads(p);
      return d !== 0 ? d : +new Date(q.data.updated) - +new Date(p.data.updated);
    })
    .slice(0, limit)
    .map((x) => `${x.data.category}/${x.data.slug}`);
}

// Auto-generated contributor roll (scripts/build-credits.mjs → credits.json).
export interface CreditPerson {
  name: string;
  roles: string[]; // subset of author | contributor | reviewer
  articles: number;
  authored: number;
  contributions: number;
  reviews: number;
}
export interface Credits {
  generatedAt: string;
  stats: { people: number; topics: number; aiAssistedTopics: number; reviews: number; contributions: number };
  people: CreditPerson[];
}
export function getCredits(): Credits {
  return read<Credits>('credits.json', {
    generatedAt: '',
    stats: { people: 0, topics: 0, aiAssistedTopics: 0, reviews: 0, contributions: 0 },
    people: [],
  });
}
