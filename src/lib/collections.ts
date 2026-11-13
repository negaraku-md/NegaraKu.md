import type { StringKey } from './i18n';
import michelin from '@/data/collections/michelin.json';

// Curated COLLECTIONS surfaced as featured cards inside a category's topic grid
// (ServiceCategory). A collection is a hand-picked, cross-cutting set with its own
// hub page (e.g. the MICHELIN Guide), distinct from an ordinary subcategory topic.
// It links to the hub, not a /topic/ page. Add one here to feature it in a category.

export interface CategoryCollection {
  id: string;
  /** Locale-agnostic hub path; localePath() applied by the view. */
  href: string;
  /** How many items the collection holds (shown on the card). */
  count: number;
  /** i18n key for the card title. */
  labelKey: StringKey;
  /** Accent colour for the card bar. */
  color: string;
}

export const CATEGORY_COLLECTIONS: Record<string, CategoryCollection[]> = {
  'food-lifestyle': [
    {
      id: 'michelin',
      href: '/michelin',
      count: (michelin as { count?: number }).count ?? 0,
      labelKey: 'nav.michelinGuide',
      color: '#C0392B', // MICHELIN red
    },
  ],
};

export function collectionsFor(categoryId: string): CategoryCollection[] {
  return CATEGORY_COLLECTIONS[categoryId] ?? [];
}
