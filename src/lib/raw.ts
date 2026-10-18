import { readFileSync } from 'node:fs';
import type { Article } from './content';
import { SITE, REPO } from './site';
import type { Locale } from './categories';
import { localePath } from './i18n';

/**
 * The raw markdown body. The content store no longer keeps `body` (dropped to
 * stay under V8's 512MB string limit at 13 languages), so read it straight from
 * the source .md on disk — which is exactly what the raw output should be — and
 * strip the frontmatter. Build-time only (SSG), so node:fs is fine.
 */
function sourceBody(article: Article): string {
  const fp = article.filePath;
  if (!fp) return article.body?.trim() ?? '';
  try {
    const raw = readFileSync(fp, 'utf8');
    const m = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
    return (m ? raw.slice(m[0].length) : raw).trim();
  } catch {
    return article.body?.trim() ?? '';
  }
}

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
  lines.push(sourceBody(article));
  if (d.sources.length) {
    lines.push('', '## Sources', '');
    for (const s of d.sources) {
      lines.push(`- ${s.title}${s.url ? ` — ${s.url}` : ''}${s.publisher ? ` (${s.publisher})` : ''}`);
    }
  }
  lines.push('', '---', `Source of truth: ${REPO}`, 'License: CC BY-SA 4.0', '');
  return lines.join('\n');
}
