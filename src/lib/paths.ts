import type { Locale } from './categories';
import { launchCategories } from './categories';
import { articlesForLocale } from './content';
import { orderedSubcats } from './subcategories';

/** getStaticPaths entries for category index pages.
    'about' is excluded — a dedicated /about page owns that route. */
export function categoryPaths() {
  // Only categories that have earned enough content are routed publicly.
  return launchCategories().map((c) => ({ params: { category: c.id } }));
}

/** getStaticPaths entries for article pages in a given locale. */
export async function articlePaths(locale: Locale) {
  const items = await articlesForLocale(locale);
  return items.map((article) => ({
    params: { category: article.data.category, slug: article.data.slug },
    props: { article },
  }));
}

/** getStaticPaths entries for topic (subcategory) pages in a given locale.
    One page per subcategory that actually holds articles, routed under
    /<category>/topic/<subcategory> so it can never collide with an article
    slug at /<category>/<slug>. */
export async function topicPaths(locale: Locale) {
  const items = await articlesForLocale(locale);
  const out: {
    params: { category: string; topic: string };
    props: { categoryId: string; topic: string; articles: typeof items };
  }[] = [];
  for (const c of launchCategories()) {
    const catArticles = items.filter((a) => a.data.category === c.id);
    if (catArticles.length === 0) continue;
    const subs = orderedSubcats(
      c.id,
      catArticles.flatMap((a) => a.data.subcategory),
    );
    for (const s of subs) {
      const arts = catArticles.filter((a) => a.data.subcategory.includes(s));
      if (arts.length === 0) continue;
      out.push({ params: { category: c.id, topic: s }, props: { categoryId: c.id, topic: s, articles: arts } });
    }
  }
  return out;
}
