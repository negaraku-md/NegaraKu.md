import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './categories';
import { DEFAULT_LOCALE } from './i18n';

export type Article = CollectionEntry<'knowledge'>;

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
export async function allArticles(): Promise<Article[]> {
  return getCollection('knowledge');
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
