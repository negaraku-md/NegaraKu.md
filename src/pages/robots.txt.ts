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

// Search engines (discovery value) explicitly allowed. PetalBot is Huawei's
// Petal Search crawler — a real search engine (Huawei devices have no Google
// services) with reach in the Chinese/Huawei ecosystem and emerging markets.
// Allowing it serves the "let the world know Malaysia" goal into the
// Chinese-speaking world without Baidu's ICP/GFW friction. (Baiduspider itself
// is already covered by the `*` group above.)
const SEARCH_ENGINES = [
  'PetalBot',
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
];

// Vulnerability-scanner probe paths. This is a static Astro build — no PHP, no
// .env, no secrets or config on the origin — so these URLs never existed and
// always 404. Automated scanners request them in bulk, which (a) fed Google a
// long "Not found (404)" list in Search Console and (b) wastes crawl attempts.
// Disallowing moves them from the "Not found" report into the intentional
// "Blocked by robots.txt" state Google stops flagging, and tells crawlers not to
// bother. SAFE: every pattern below matches only non-existent probe paths — no
// real page is a .php/.env/.yml/.git/etc. (Real data lives under /api/*.json,
// /llms.txt, /sitemap-*.xml, /_astro/*, which none of these match.) These are
// crawl directives, not the Content-Signal block Cloudflare used to inject.
const PROBE_DISALLOW = [
  '/_a/',                      // internal analytics beacon (POST-only; GET 404s)
  '/*.env',                    // .env, .env.local, .env.bak, path/.env, …
  '/*.php$',                   // wp-login.php, phpinfo.php, config.inc.php, …
  '/*.yml$',
  '/*.yaml$',
  '/*.bak$',
  '/*.tfstate$',
  '/*.sql$',
  '/.git',                     // .git/*, .gitlab-ci.yml, .gitmodules, .github/*
  '/.env',
  '/.claude',
  '/.anthropic',
  '/.config',
  '/.sqlite_history',
  '/.amplifyrc',
  '/Dockerfile',
  '/secrets.json',
  '/auth.json',
  '/stripe-keys.json',
  '/credentials.csv',
  '/config.json',
  '/config.env',
  '/appsettings.Staging.json',
  '/admin-panel/',
  '/plugins/',
  '/theme/',
];

export const GET: APIRoute = () => {
  const lines: string[] = [];

  // Everyone (including AI agents) may read everything, EXCEPT the scanner-probe
  // paths below (Googlebot reads this `*` group — there is no Googlebot group).
  lines.push('User-agent: *', 'Allow: /');
  for (const p of PROBE_DISALLOW) lines.push(`Disallow: ${p}`);
  lines.push('');

  // Named AI agents, explicitly allowed (some operators only honour named rules).
  for (const ua of AI_AGENTS) {
    lines.push(`User-agent: ${ua}`, 'Allow: /', '');
  }

  // Named search engines, explicitly allowed (same reason — some only honour
  // named rules, and this overrides the WAF scraper block for them).
  for (const ua of SEARCH_ENGINES) {
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
