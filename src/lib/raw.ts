import type { Article } from './content';
import { SITE, REPO } from './site';
import type { Locale } from './categories';
import { localePath } from './i18n';

/** Render an article as a clean Markdown document for LLM/raw consumption. */
export function articleToMarkdown(article: Article, locale: Locale): string {
  const d = article.data;
  const url = SITE + localePath(`/${d.category}/${d.slug}`, locale);
  const lines: string[] = [];
  lines.push(`# ${d.title}`, '');
  lines.push(`> ${d.summary}`, '');
  lines.push(
    `- Category: ${d.category}`,
    `- Language: ${d.lang}`,
    `- Status: ${d.status}`,
    `- Updated: ${d.updated.toISOString().slice(0, 10)}`,
    `- Canonical: ${url}`,
    '',
    '---',
    '',
  );
  lines.push(article.body?.trim() ?? '');
  if (d.sources.length) {
    lines.push('', '## Sources', '');
    for (const s of d.sources) {
      lines.push(`- ${s.title}${s.url ? ` — ${s.url}` : ''}${s.publisher ? ` (${s.publisher})` : ''}`);
    }
  }
  lines.push('', '---', `Source of truth: ${REPO}`, 'License: CC BY-SA 4.0', '');
  return lines.join('\n');
}
