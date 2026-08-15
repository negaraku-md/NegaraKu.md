import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { articlesForLocale } from '@/lib/content';
import { localePath } from '@/lib/i18n';

export async function GET(context: APIContext) {
  const items = await articlesForLocale('zh');
  return rss({
    title: 'NegaraKu.md',
    description: '开源、AI 友好的马来西亚知识库',
    site: context.site ?? 'https://negaraku.md',
    items: items.map((a) => ({
      title: a.data.title,
      description: a.data.summary,
      pubDate: a.data.updated,
      link: localePath(`/${a.data.category}/${a.data.slug}`, 'zh'),
      categories: [a.data.category],
    })),
    customData: `<language>zh-Hans</language>`,
  });
}
