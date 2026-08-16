// User-Agent classification for the Visitors analytics pipeline.
//
// Every request is sorted into exactly one of:
//   'readers' — a human browser (no known bot signature)
//   'search'  — a search-engine crawler (Googlebot, Bingbot, …)
//   'ai'      — an AI/LLM crawler (ClaudeBot, GPTBot, …)
//   'skip'    — a known non-human agent that is NEITHER search nor AI
//               (social-preview fetchers, monitors, generic HTTP clients).
//               These are logged nowhere, so the three buckets stay honest:
//               "readers" really means humans, not "everything that isn't a
//               named crawler".
//
// The returned `bot` is the canonical display name used in the per-bot
// tooltip; for humans it is 'human'.
//
// Order matters: AI is matched before search (some AI crawlers also carry a
// generic token), and both are matched before the generic-bot skip net.

// [needle in UA (lowercased), canonical bot name]
const AI = [
  ['claudebot', 'ClaudeBot'],
  ['claude-web', 'ClaudeBot'],
  ['anthropic-ai', 'Anthropic'],
  ['gptbot', 'GPTBot'],
  ['chatgpt-user', 'ChatGPT-User'],
  ['oai-searchbot', 'OAI-SearchBot'],
  ['perplexitybot', 'PerplexityBot'],
  ['perplexity-user', 'PerplexityBot'],
  ['google-extended', 'Google-Extended'],
  ['ccbot', 'CCBot'],
  ['bytespider', 'Bytespider'],
  ['amazonbot', 'Amazonbot'],
  ['cohere-ai', 'cohere-ai'],
  ['applebot-extended', 'Applebot-Extended'],
  ['meta-externalagent', 'Meta-ExternalAgent'],
  ['facebookbot', 'FacebookBot'],
  ['diffbot', 'Diffbot'],
  ['imagesiftbot', 'ImagesiftBot'],
  ['youbot', 'YouBot'],
  ['duckassistbot', 'DuckAssistBot'],
  ['ai2bot', 'AI2Bot'],
  ['timpibot', 'Timpibot'],
  ['omgili', 'omgili'],
];

const SEARCH = [
  ['googlebot', 'Googlebot'],
  ['storebot-google', 'Googlebot'],
  ['bingbot', 'Bingbot'],
  ['msnbot', 'Bingbot'],
  ['duckduckbot', 'DuckDuckBot'],
  ['duckduckgo', 'DuckDuckBot'],
  ['yandexbot', 'YandexBot'],
  ['baiduspider', 'Baiduspider'],
  ['slurp', 'Yahoo'],
  ['sogou', 'Sogou'],
  ['exabot', 'Exabot'],
  ['seznambot', 'SeznamBot'],
  ['petalbot', 'PetalBot'],
  ['applebot', 'Applebot'], // after applebot-extended (AI) above
];

// Generic non-human markers → 'skip' (counted in no bucket).
const GENERIC_BOT = /(?:\bbot\b|spider|crawler|crawl|scrapy|headless|phantomjs|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|pinterest|slackbot|discordbot|embedly|python-requests|python-urllib|go-http-client|java\/|okhttp|libwww|curl\/|wget\/|axios\/|node-fetch|got \(|dataprovider|semrush|ahrefs|mj12bot|dotbot|bytedance|censys|masscan|zgrab)/i;

/**
 * @param {string} ua raw User-Agent header (may be empty)
 * @returns {{bucket:'readers'|'search'|'ai'|'skip', bot:string}}
 */
export function classify(ua) {
  const s = (ua || '').toLowerCase();
  if (!s) return { bucket: 'skip', bot: 'unknown' }; // no UA → don't attribute
  for (const [needle, name] of AI) if (s.includes(needle)) return { bucket: 'ai', bot: name };
  for (const [needle, name] of SEARCH) if (s.includes(needle)) return { bucket: 'search', bot: name };
  if (GENERIC_BOT.test(s)) return { bucket: 'skip', bot: 'bot' };
  return { bucket: 'readers', bot: 'human' };
}

/**
 * Normalise a request path to the analytics key used in analytics.json,
 * which is "<category>/<slug>" with the locale prefix stripped so all three
 * languages of one article aggregate together (matching how ArticleView reads
 * `${category}/${slug}`). Non-article pages collapse to a short label that
 * simply never matches an article lookup.
 *
 * @param {string} pathname e.g. "/en/accounting/accounting-software-malaysia/"
 * @returns {string} e.g. "accounting/accounting-software-malaysia"
 */
export function pathKey(pathname) {
  let p = (pathname || '/').split('?')[0].split('#')[0];
  p = p.replace(/^\/+/, '').replace(/\/+$/, ''); // trim slashes
  if (!p) return 'home';
  const seg = p.split('/');
  if (seg[0] === 'en' || seg[0] === 'zh' || seg[0] === 'ms') seg.shift();
  return seg.join('/') || 'home';
}

// Paths we never count as a "page view": build assets, endpoints, files, and
// the common vulnerability-scanner probes (dot-dirs like /.git, /.env; WordPress
// and xmlrpc paths) that use browser-like UAs and would otherwise be miscounted
// as "readers". Real-article filtering at build time is the backstop; this just
// avoids logging the obvious junk to Analytics Engine in the first place.
const SKIP_PATH =
  /^\/(?:_astro\/|api\/|pagefind\/|_a\b|assets\/|fonts\/|brand\/|og\/)|\.(?:css|m?js|json|xml|txt|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|map|webmanifest|pdf|zip)$|\/\.[^/]|(?:^|\/)(?:wp-(?:login|admin|content|includes|json)|xmlrpc\.php)/i;

/** True when a GET for this path represents an HTML page navigation worth counting. */
export function isPageView(pathname) {
  if (!pathname) return false;
  return !SKIP_PATH.test(pathname);
}
