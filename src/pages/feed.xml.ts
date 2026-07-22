import type { APIContext } from 'astro';
import { articlesForLocale } from '@/lib/content';
import { localePath } from '@/lib/i18n';
import { SITE } from '@/lib/site';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Atom 1.0 feed (companion to the RSS 2.0 feed at /rss.xml).
export async function GET(_context: APIContext) {
  const items = await articlesForLocale('ms');
  const updated = items[0]?.data.updated.toISOString() ?? new Date(0).toISOString();
  const entries = items
    .map((a) => {
      const url = SITE + localePath(`/${a.data.category}/${a.data.slug}`, 'ms');
      return `  <entry>
    <title>${esc(a.data.title)}</title>
    <link href="${url}"/>
    <id>${url}</id>
    <updated>${a.data.updated.toISOString()}</updated>
    <summary>${esc(a.data.summary)}</summary>
    <category term="${esc(a.data.category)}"/>
  </entry>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>NegaraKu.md</title>
  <subtitle>An open-source, AI-friendly knowledge base about Malaysia</subtitle>
  <link href="${SITE}/feed.xml" rel="self"/>
  <link href="${SITE}/"/>
  <id>${SITE}/</id>
  <updated>${updated}</updated>
${entries}
</feed>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
}
