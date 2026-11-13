import type { Locale } from './categories';
import { MICHELIN_TITLE } from './michelinMeta';
import michelin from '@/data/collections/michelin.json';

// Curated COLLECTIONS surfaced as featured cards inside a category's topic grid
// (ServiceCategory). A collection is a hand-picked, cross-cutting set with its own
// hub page (e.g. the MICHELIN Guide), distinct from an ordinary subcategory topic.
// It links to the hub, not a /topic/ page. Add one here to feature it in a category.
// The hub lives UNDER its category (e.g. /food-lifestyle/michelin) so its path and
// breadcrumb read as a topic of that category.

export interface CategoryCollection {
  id: string;
  /** Locale-agnostic hub path (under the category); localePath() applied by the view. */
  href: string;
  /** How many items the collection holds (shown on the card). */
  count: number;
  /** Localised card title — SAME as the hub page title. */
  title: Record<Locale, string>;
  /** Accent colour for the card bar. */
  color: string;
}

export const CATEGORY_COLLECTIONS: Record<string, CategoryCollection[]> = {
  'food-lifestyle': [
    {
      id: 'michelin',
      href: '/food-lifestyle/michelin',
      count: (michelin as { count?: number }).count ?? 0,
      title: MICHELIN_TITLE,
      color: '#C0392B', // MICHELIN red
    },
  ],
};

export function collectionsFor(categoryId: string): CategoryCollection[] {
  return CATEGORY_COLLECTIONS[categoryId] ?? [];
}
