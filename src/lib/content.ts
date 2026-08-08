import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './categories';
import { PILLARS } from './categories';
import { DEFAULT_LOCALE } from './i18n';

export type Article = CollectionEntry<'knowledge'>;

/** Site-wide hero stats — the ONE standard shown across the site:
    Sections · Categories · Topics · Articles. Values are global (whole corpus);
    scoped pages (section/category/topic) compute their own scoped versions but
    keep the same four labels in the same order. */
export async function siteStats(locale: Locale): Promise<{
  sections: number;
  categories: number;
  topics: number;
  articles: number;
}> {
  const items = (await articlesForLocale(locale)).filter((a) => a.data.category !== 'about');
  return {
    sections: PILLARS.length,
    categories: new Set(items.map((a) => a.data.category)).size,
    // A topic is scoped to its category — topic pages live at /<category>/topic/<subcat>,
    // so `law/tax` and `taxation/tax` are two distinct topics. Counting bare subcategory
    // strings merged them, making the site-wide total (407) smaller than the sum of the
    // per-section/per-category topic counts (488). Key by category/subcat so every hero
    // that shows "topics" reconciles with the sum of its parts.
    topics: new Set(items.flatMap((a) => a.data.subcategory.map((s) => `${a.data.category}/${s}`))).size,
    articles: items.length,
  };
}

/** Canonical, language-independent key for an article. */
export function articleKey(a: Article): string {
  return `${a.data.category}/${a.data.slug}`;
}

/** Estimated reading time in minutes from an article body (Latin words + CJK chars, ~200 wpm). */
export function readingTime(article: Article): number {
  const body = article.body ?? '';
  const cjk = (body.match(/[㐀-鿿]/g) ?? []).length;
  const latin = body.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
  return Math.max(1, Math.round((cjk + latin) / 200));
}

/** All article entries across every language. */
// PUBLICATION GATE. Sensitive (3R+1) content may never appear on the public
// site until a human reviewer has signed it off and it is marked published —
// this is the 3R+1 hard rule, enforced at the build layer so it cannot be
// bypassed by a stray link or a listing. Everything downstream (pages, routes,
// nav, search index, sitemap, RSS, llms.txt) flows through allArticles(), so
// filtering here removes it from the whole published surface at once.
// Non-sensitive drafts are still published (disclosed as AI-drafted per-article).
/**
 * Statuses where the reader still sees the article. An update cycle
 * (needs-update → in-update) must NOT unpublish a working page: the current
 * version stays live while the next one is prepared.
 */
export const LIVE_STATUSES = ['published', 'needs-update', 'in-update'] as const;
export function isLive(status: string): boolean {
  return (LIVE_STATUSES as readonly string[]).includes(status);
}

export function isPublishable(a: Article): boolean {
  // The public site serves FINISHED work only. Draft / in-review / reviewed are
  // in-progress states — visible on the Dashboard and in git, but never on the
  // reader-facing pages. Contributors work through GitHub, not the rendered site.
  // (Archived = retired; also never served.)
  if (!isLive(a.data.status)) return false;
  // Sensitive (3R+1) content must additionally carry a named human reviewer.
  if (a.data.sensitivity && a.data.sensitivity !== 'none') return Boolean(a.data.reviewer);
  return true;
}

/**
 * The status to SHOW. `needs-update` is derived, never stored: a published
 * article whose reviewDue has passed is overdue by definition, so computing it
 * keeps the freshness claim tied to the freshness fact (and the flag itself can
 * never go stale). An explicit stored status always wins.
 */
export function effectiveStatus(a: Article, now: Date = new Date()): string {
  const s = a.data.status;
  if (s === 'published' && a.data.reviewDue && new Date(a.data.reviewDue) < now) {
    return 'needs-update';
  }
  return s;
}

export async function allArticles(): Promise<Article[]> {
  return (await getCollection('knowledge')).filter(isPublishable);
}

/**
 * OPS census — one row per topic across the WHOLE corpus, every status included
 * (draft / in-review / reviewed / published), publish gate deliberately NOT
 * applied. This is the single population the Dashboard's statistics must be
 * computed from, so the headline, category coverage, lifecycle ladder and
 * hero all reconcile to the same denominator no matter the status mix.
 *
 * One row per topic = the topic's MASTER (lang === masterLanguage), falling back
 * to any entry when a master file is absent. Never leaks sensitive titles: it
 * returns aggregate rows, and the reader-facing title lists stay gated elsewhere.
 */
export async function corpusTopics(): Promise<Article[]> {
  const all = (await getCollection('knowledge')).filter((a) => a.data.category !== 'about');
  const byKey = new Map<string, Article>();
  for (const a of all) {
    const key = articleKey(a);
    const prev = byKey.get(key);
    const isMaster = (x: Article) => x.data.lang === (x.data.masterLanguage ?? x.data.lang);
    if (!prev || (isMaster(a) && !isMaster(prev))) byKey.set(key, a);
  }
  return [...byKey.values()];
}

/**
 * Return one entry per canonical article for the requested locale, falling
 * back to the Bahasa Malaysia source when a translation is missing.
 */
export async function articlesForLocale(locale: Locale): Promise<Article[]> {
  const all = await allArticles();
  const byKey = new Map<string, Article>();

  for (const a of all) {
    const key = articleKey(a);
    const existing = byKey.get(key);
    if (!existing) {
      byKey.set(key, a);
      continue;
    }
    // Prefer exact locale match; otherwise prefer the default-locale source.
    const score = (x: Article) =>
      x.data.lang === locale ? 2 : x.data.lang === DEFAULT_LOCALE ? 1 : 0;
    if (score(a) > score(existing)) byKey.set(key, a);
  }

  return [...byKey.values()].sort(
    (a, b) => b.data.updated.getTime() - a.data.updated.getTime(),
  );
}

/** Resolve a single article by category + slug for a locale (with fallback). */
export async function findArticle(
  category: string,
  slug: string,
  locale: Locale,
): Promise<Article | undefined> {
  const items = await articlesForLocale(locale);
  return items.find((a) => a.data.category === category && a.data.slug === slug);
}

/** Articles in a given category for a locale. */
export async function articlesInCategory(
  category: string,
  locale: Locale,
): Promise<Article[]> {
  const items = await articlesForLocale(locale);
  return items.filter((a) => a.data.category === category);
}

/** Look up related articles (by canonical slug) for the "Related" rail. */
export async function relatedArticles(
  article: Article,
  locale: Locale,
): Promise<Article[]> {
  const items = await articlesForLocale(locale);
  const bySlug = new Map(items.map((a) => [a.data.slug, a]));
  return article.data.related
    .map((slug) => bySlug.get(slug))
    .filter((a): a is Article => Boolean(a));
}
