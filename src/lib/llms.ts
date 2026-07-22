import { articlesForLocale } from '@/lib/content';
import { CATEGORIES } from '@/lib/categories';
import { articleToMarkdown } from '@/lib/raw';
import { SITE } from '@/lib/site';
import { localePath, type Locale } from '@/lib/i18n';

// One-line intro per language, kept parallel across locales.
const INTRO: Record<Locale, string[]> = {
  ms: [
    '> Pangkalan pengetahuan sumber terbuka dan mesra-AI tentang Malaysia. Kandungan',
    '> Markdown yang dikurasi dan bersumber, boleh disunting komuniti melalui GitHub,',
    '> tersedia dalam Bahasa Malaysia, Inggeris dan Cina. Tambah `.md` pada mana-mana',
    '> URL artikel untuk Markdown mentah. Versi bahasa lain: /en/llms.txt, /zh/llms.txt.',
  ],
  en: [
    '> An open-source, AI-friendly knowledge base about Malaysia. Curated, cited',
    '> Markdown, community-editable via GitHub, available in Bahasa Malaysia, English,',
    '> and Chinese. Append `.md` to any article URL for raw Markdown.',
    '> Other languages: /llms.txt (Bahasa Malaysia), /zh/llms.txt (中文).',
  ],
  zh: [
    '> 一个开源、对 AI 友好的马来西亚知识库。内容为经过策划并注明来源的 Markdown，',
    '> 可通过 GitHub 由社区编辑，提供马来文、英文和中文三种语言。在任意文章 URL',
    '> 后追加 `.md` 即可获取原始 Markdown。',
    '> 其他语言：/llms.txt（马来文）、/en/llms.txt（English）。',
  ],
};

// Build the llmstxt.org-style index for a given language.
export async function buildLlmsIndex(locale: Locale): Promise<string> {
  const items = await articlesForLocale(locale);
  const byCat = new Map<string, typeof items>();
  for (const a of items) {
    if (!byCat.has(a.data.category)) byCat.set(a.data.category, []);
    byCat.get(a.data.category)!.push(a);
  }

  const out: string[] = ['# negaraku.md', ''];
  out.push(...INTRO[locale], '');

  for (const cat of CATEGORIES) {
    const arts = byCat.get(cat.id);
    if (!arts?.length) continue;
    out.push(`## ${cat.name[locale]}`, '');
    for (const a of arts) {
      const url = `${SITE}${localePath(`/${a.data.category}/${a.data.slug}.md`, locale)}`;
      out.push(`- [${a.data.title}](${url}): ${a.data.summary}`);
    }
    out.push('');
  }

  const fullUrl = `${SITE}${localePath('/llms-full.txt', locale)}`;
  out.push('## Full text', '');
  out.push(`- [Complete corpus](${fullUrl}): every article concatenated as Markdown.`, '');

  return out.join('\n');
}

// Build the concatenated full-text corpus for a given language.
export async function buildLlmsFull(locale: Locale): Promise<string> {
  const items = await articlesForLocale(locale);
  const parts: string[] = [
    '# negaraku.md — full corpus',
    '',
    'An open-source knowledge base about Malaysia. License: CC BY-SA 4.0.',
    '',
  ];
  for (const a of items) {
    parts.push('', '=========================================================', '');
    parts.push(articleToMarkdown(a, locale));
  }
  return parts.join('\n');
}
