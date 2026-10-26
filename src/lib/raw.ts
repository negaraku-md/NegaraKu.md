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
    ...(d.reviewed ? [`- Reviewed: ${new Date(d.reviewed).toISOString().slice(0, 10)}`] : []),
    `- Canonical: ${url}`,
    '',
  );

  // Layer 1 — the curated, liftable answer surface. The 30-second `answer`, the
  // scannable `keyTakeaways` and the `faq` Q&A live in frontmatter, NOT in the
  // body, so `sourceBody()` strips them. Without re-emitting them here, the single
  // most quotable units — exactly what answer engines and AI assistants cite —
  // would be absent from the raw Markdown and the llms-full corpus. They lead the
  // document (the answer is the first thing a crawler should see) and the FAQ
  // follows the body, mirroring the on-page three-layer reading model. Each field
  // is already in the article's own language, so the raw output stays monolingual.
  if (d.answer) {
    lines.push('## Answer', '', d.answer, '');
  }
  if (d.appliesTo) {
    lines.push(`**Applies to:** ${d.appliesTo}`, '');
  }
  if (d.keyTakeaways.length) {
    lines.push('## Key takeaways', '');
    for (const k of d.keyTakeaways) lines.push(`- ${k}`);
    lines.push('');
  }

  lines.push('---', '');
  lines.push(sourceBody(article));

  if (d.faq.length) {
    lines.push('', '## Frequently asked questions', '');
    for (const f of d.faq) {
      lines.push(`### ${f.q}`, '', f.a, '');
    }
  }

  if (d.sources.length) {
    lines.push('', '## Sources', '');
    for (const s of d.sources) {
      lines.push(`- ${s.title}${s.url ? ` — ${s.url}` : ''}${s.publisher ? ` (${s.publisher})` : ''}`);
    }
  }
  lines.push('', '---', `Source of truth: ${REPO}`, 'License: CC BY-SA 4.0', '');
  return lines.join('\n');
}
