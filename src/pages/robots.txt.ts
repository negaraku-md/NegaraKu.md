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

// Backlink / SEO-index crawlers with no discovery value here (they feed
// third-party SEO databases). Disallowed to reclaim bandwidth.
const SEO_SCRAPERS = [
  'SemrushBot',
  'AhrefsBot',
  'MJ12bot',
  'DotBot',
  'BLEXBot',
  'DataForSeoBot',
  'PetalBot',
];

export const GET: APIRoute = () => {
  const lines: string[] = [];

  // Everyone (including AI agents) may read everything.
  lines.push('User-agent: *', 'Allow: /', '');

  // Named AI agents, explicitly allowed (some operators only honour named rules).
  for (const ua of AI_AGENTS) {
    lines.push(`User-agent: ${ua}`, 'Allow: /', '');
  }

  // Backlink / SEO-index scrapers: disallowed. They were the top bandwidth
  // consumers (SemrushBot ~2k, AhrefsBot ~1.2k req/day) and add nothing to this
  // project's discovery — search engines and AI agents (above) already cover it.
  // Remove SemrushBot / AhrefsBot here if you use those tools for your own SEO
  // monitoring. (robots.txt is advisory; a Cloudflare WAF rule enforces it.)
  for (const ua of SEO_SCRAPERS) {
    lines.push(`User-agent: ${ua}`, 'Disallow: /', '');
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
