import type { Locale } from './categories';
import { articlesForLocale, type Article } from './content';

export interface HomeData {
  essentials: Article[];
  all: Article[];
  counts: Record<string, number>;
  total: number;
}

const statusRank = { verified: 3, reviewed: 2, draft: 1 } as const;

export async function homeData(locale: Locale): Promise<HomeData> {
  const items = await articlesForLocale(locale);

  const counts: Record<string, number> = {};
  for (const a of items) counts[a.data.category] = (counts[a.data.category] ?? 0) + 1;

  const essentials = [...items]
    .filter((a) => a.data.category !== 'about')
    .sort((a, b) => {
      const s = statusRank[b.data.status] - statusRank[a.data.status];
      if (s !== 0) return s;
      return b.data.updated.getTime() - a.data.updated.getTime();
    })
    .slice(0, 5);

  return { essentials, all: items, counts, total: items.length };
}
