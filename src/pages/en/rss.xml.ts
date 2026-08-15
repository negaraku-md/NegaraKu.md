import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { articlesForLocale } from '@/lib/content';
import { localePath } from '@/lib/i18n';

export async function GET(context: APIContext) {
  const items = await articlesForLocale('en');
  return rss({
    title: 'NegaraKu.md',
    description: 'An open-source, AI-friendly knowledge base about Malaysia',
    site: context.site ?? 'https://negaraku.md',
    items: items.map((a) => ({
      title: a.data.title,
      description: a.data.summary,
      pubDate: a.data.updated,
      link: localePath(`/${a.data.category}/${a.data.slug}`, 'en'),
      categories: [a.data.category],
    })),
    customData: `<language>en</language>`,
  });
}
