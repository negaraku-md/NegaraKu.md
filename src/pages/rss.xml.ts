import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { articlesForLocale } from '@/lib/content';
import { localePath } from '@/lib/i18n';

export async function GET(context: APIContext) {
  const items = await articlesForLocale('ms');
  return rss({
    title: 'negaraku.md',
    description: 'Pangkalan pengetahuan sumber terbuka tentang Malaysia',
    site: context.site ?? 'https://negaraku.md',
    items: items.map((a) => ({
      title: a.data.title,
      description: a.data.summary,
      pubDate: a.data.updated,
      link: localePath(`/${a.data.category}/${a.data.slug}`, 'ms'),
      categories: [a.data.category],
    })),
    customData: `<language>ms-MY</language>`,
  });
}
