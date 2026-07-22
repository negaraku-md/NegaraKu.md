import type { APIRoute } from 'astro';
import { SITE } from '@/lib/site';

// robots.txt — welcomes general and AI crawlers, and advertises the machine
// resources (sitemap + llms.txt) so agents can discover the corpus.
const AI_AGENTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'anthropic-ai',
  'Google-Extended',
  'GoogleOther',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'Amazonbot',
  'meta-externalagent',
  'cohere-ai',
  'YouBot',
  'DuckAssistBot',
];

export const GET: APIRoute = () => {
  const lines: string[] = [];

  // Everyone (including AI agents) may read everything.
  lines.push('User-agent: *', 'Allow: /', '');

  // Named AI agents, explicitly allowed (some operators only honour named rules).
  for (const ua of AI_AGENTS) {
    lines.push(`User-agent: ${ua}`, 'Allow: /', '');
  }

  lines.push(`Sitemap: ${SITE}/sitemap-index.xml`);
  // Non-standard but increasingly recognised hints to the AI index (per language).
  lines.push(`# AI index (Bahasa Malaysia): ${SITE}/llms.txt`);
  lines.push(`# AI index (English): ${SITE}/en/llms.txt`);
  lines.push(`# AI index (中文): ${SITE}/zh/llms.txt`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
