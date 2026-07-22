#!/usr/bin/env node
// MCP server for negaraku.md — exposes the Malaysia knowledge base to AI clients.
//
// Tools:
//   search_articles(query, lang?)   — keyword search over titles + summaries
//   read_article(slug, lang?)       — full Markdown of an article
//   list_categories()               — the category taxonomy
//
// Data source: the sibling knowledge/ folder and public/api/articles.json.
// Run `npm install` in this directory first, then wire it into your client:
//   { "command": "node", "args": ["/abs/path/to/mcp/server.mjs"] }

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const MANIFEST = path.join(ROOT, 'public', 'api', 'articles.json');
const SITE = 'https://negaraku.md';

async function manifest() {
  if (!existsSync(MANIFEST)) throw new Error('articles.json missing — run `npm run sync` in the project root.');
  return JSON.parse(await readFile(MANIFEST, 'utf8')).articles;
}

function urlFor(a) {
  const prefix = a.lang === 'ms' ? '' : `/${a.lang}`;
  return `${SITE}${prefix}/${a.category}/${a.slug}`;
}

const server = new McpServer({ name: 'negaraku.md', version: '0.1.0' });

server.tool(
  'search_articles',
  'Search the negaraku.md knowledge base about Malaysia by keyword.',
  { query: z.string().describe('search terms'), lang: z.enum(['ms', 'en', 'zh']).optional() },
  async ({ query, lang }) => {
    const items = await manifest();
    const q = query.toLowerCase();
    const hits = items
      .filter((a) => !lang || a.lang === lang)
      .map((a) => {
        const hay = `${a.title} ${a.summary} ${a.category}`.toLowerCase();
        let score = 0;
        for (const term of q.split(/\s+/)) if (term && hay.includes(term)) score++;
        return { a, score };
      })
      .filter((x) => x.score > 0)
      .sort((x, y) => y.score - x.score)
      .slice(0, 10)
      .map(({ a }) => `- ${a.title} (${a.category}) — ${urlFor(a)}.md\n  ${a.summary}`);

    return {
      content: [
        {
          type: 'text',
          text: hits.length ? hits.join('\n') : `No results for "${query}".`,
        },
      ],
    };
  },
);

server.tool(
  'read_article',
  'Read the full Markdown of a negaraku.md article by its slug.',
  { slug: z.string(), lang: z.enum(['ms', 'en', 'zh']).default('ms') },
  async ({ slug, lang }) => {
    const items = await manifest();
    const match =
      items.find((a) => a.slug === slug && a.lang === lang) ||
      items.find((a) => a.slug === slug && a.lang === 'ms');
    if (!match) return { content: [{ type: 'text', text: `Article "${slug}" not found.` }], isError: true };
    const file = path.join(KNOWLEDGE, match.path);
    const { content, data } = matter(await readFile(file, 'utf8'));
    return {
      content: [
        { type: 'text', text: `# ${data.title}\n\n> ${data.summary}\n\n${content.trim()}` },
      ],
    };
  },
);

server.tool('list_categories', 'List the categories in the knowledge base.', {}, async () => {
  const items = await manifest();
  const counts = {};
  for (const a of items) counts[a.category] = (counts[a.category] ?? 0) + 1;
  const text = Object.entries(counts)
    .sort()
    .map(([c, n]) => `- ${c}: ${n}`)
    .join('\n');
  return { content: [{ type: 'text', text }] };
});

await server.connect(new StdioServerTransport());
