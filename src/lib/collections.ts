import type { Locale } from './categories';

// Curated COLLECTIONS surfaced as featured cards inside a category's topic grid
// (ServiceCategory / HubGroups). A collection is a hand-picked, cross-cutting set
// with its own hub page, distinct from an ordinary subcategory topic. Generic
// mechanism kept for future use; there are no collections at present — the MICHELIN
// Guide is now an ordinary `michelin-guide` subcategory, not a collection.

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

export const CATEGORY_COLLECTIONS: Record<string, CategoryCollection[]> = {};

export function collectionsFor(categoryId: string): CategoryCollection[] {
  return CATEGORY_COLLECTIONS[categoryId] ?? [];
}
