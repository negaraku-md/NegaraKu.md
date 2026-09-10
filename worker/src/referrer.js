// referrer.js — classify a human visit's traffic CHANNEL from its referrer + UTM.
//
// The counterpart to classify.js (which sorts the User-Agent): where a bot
// classifier answers "who is fetching", this answers "where did this reader
// come from". Only human ('readers') hits are classified; bots have no channel.
//
//   channel ∈ 'search' | 'ai' | 'social' | 'messaging' | 'other' | 'direct'
//   source  = a canonical name (google, chatgpt, facebook, …) or, for an
//             unrecognised referrer, its bare site — so a share to a brand-new
//             place shows up on its own, no code change needed.
//
// Two things win over the referrer, in order:
//   1. A `utm_source` on the URL — attributes links WE post/share, which often
//      arrive with the referrer stripped (messaging apps, in-app browsers).
//   2. Same-site referrers are internal navigation, not a channel → not counted
//      (channel ''); the reader was already counted on the page they entered on.
// No referrer at all is a real signal: channel 'direct' (typed, bookmarked, app).

// Ambiguous or too-short hosts, matched on the full host. [channel, source]
const HOST = new Map([
  ['x.com', ['social', 'x']],
  ['t.co', ['social', 'x']],
  ['fb.me', ['social', 'facebook']],
  ['lnkd.in', ['social', 'linkedin']],
  ['youtu.be', ['social', 'youtube']],
  ['t.me', ['messaging', 'telegram']],
  ['wa.me', ['messaging', 'whatsapp']],
  ['line.me', ['messaging', 'line']],
  ['x.ai', ['ai', 'grok']],
  ['you.com', ['ai', 'you']],
  ['poe.com', ['ai', 'poe']],
]);

// Brand recognised by any domain LABEL (survives every TLD and subdomain:
// google.com.my, l.facebook.com, gemini.google.com all match on one label).
// Ordered: AI before search, so gemini.google / copilot.microsoft resolve to
// the assistant, not the underlying search engine. First matching label wins.
const BY_LABEL = [
  ['chatgpt', 'ai', 'chatgpt'], ['openai', 'ai', 'chatgpt'], ['perplexity', 'ai', 'perplexity'],
  ['claude', 'ai', 'claude'], ['anthropic', 'ai', 'claude'], ['gemini', 'ai', 'gemini'],
  ['copilot', 'ai', 'copilot'], ['phind', 'ai', 'phind'], ['grok', 'ai', 'grok'],
  ['mistral', 'ai', 'mistral'], ['deepseek', 'ai', 'deepseek'], ['kagi', 'ai', 'kagi'],
  ['google', 'search', 'google'], ['bing', 'search', 'bing'], ['duckduckgo', 'search', 'duckduckgo'],
  ['yahoo', 'search', 'yahoo'], ['yandex', 'search', 'yandex'], ['baidu', 'search', 'baidu'],
  ['ecosia', 'search', 'ecosia'], ['startpage', 'search', 'startpage'], ['qwant', 'search', 'qwant'],
  ['sogou', 'search', 'sogou'], ['naver', 'search', 'naver'], ['brave', 'search', 'brave'],
  ['facebook', 'social', 'facebook'], ['instagram', 'social', 'instagram'], ['twitter', 'social', 'x'],
  ['linkedin', 'social', 'linkedin'], ['reddit', 'social', 'reddit'], ['threads', 'social', 'threads'],
  ['bsky', 'social', 'bluesky'], ['bluesky', 'social', 'bluesky'], ['youtube', 'social', 'youtube'],
  ['pinterest', 'social', 'pinterest'], ['tiktok', 'social', 'tiktok'], ['tumblr', 'social', 'tumblr'],
  ['mastodon', 'social', 'mastodon'], ['medium', 'social', 'medium'], ['quora', 'social', 'quora'],
  ['weibo', 'social', 'weibo'],
  ['whatsapp', 'messaging', 'whatsapp'], ['telegram', 'messaging', 'telegram'],
  ['messenger', 'messaging', 'messenger'], ['discord', 'messaging', 'discord'], ['slack', 'messaging', 'slack'],
];

// Channel a known source belongs to (used for the UTM path). Splits on '.' so a
// domain-shaped utm_source matches by brand label too — e.g. ChatGPT appends
// utm_source=chatgpt.com to outbound links; "chatgpt" → ai. null if unknown.
function labelChannel(name) {
  for (const label of String(name).split('.')) {
    const hit = BY_LABEL.find(([l]) => l === label);
    if (hit) return hit[1];
  }
  return null;
}

// A readable "site" for an unrecognised referrer: hostname minus a leading
// www./m./l./lm./amp. so m.example.com and www.example.com group as example.com.
function siteOf(hostname) {
  return hostname.replace(/^(?:www|m|l|lm|amp|mobile)\./, '');
}

/**
 * @param {string|null} referer  the request's Referer header
 * @param {URL} url  the request URL (for utm_* params and same-site detection)
 * @returns {{channel:string, source:string}}  channel '' means "don't count"
 */
export function classifyReferrer(referer, url) {
  // 1. UTM wins — attributes links we posted even when the referrer is gone.
  const utm = (url.searchParams.get('utm_source') || '').toLowerCase().trim();
  if (utm) {
    const source = utm.replace(/[^a-z0-9.\-]/g, '').slice(0, 40);
    const medium = (url.searchParams.get('utm_medium') || '').toLowerCase();
    const channel =
      labelChannel(source) ||
      (medium === 'social' ? 'social' : medium === 'messaging' ? 'messaging' : 'other');
    return { channel, source: source || 'other' };
  }

  if (!referer) return { channel: 'direct', source: 'direct' };

  let host;
  try {
    host = new URL(referer).hostname.toLowerCase();
  } catch {
    return { channel: 'direct', source: 'direct' }; // malformed referer → treat as direct
  }
  if (!host) return { channel: 'direct', source: 'direct' };

  // Same-site → internal navigation, not a channel.
  const self = url.hostname.toLowerCase().replace(/^www\./, '');
  if (host === self || host.endsWith('.' + self)) return { channel: '', source: '' };

  const exact = HOST.get(host);
  if (exact) return { channel: exact[0], source: exact[1] };

  const labels = new Set(host.split('.'));
  for (const [label, channel, source] of BY_LABEL) {
    if (labels.has(label)) return { channel, source };
  }

  return { channel: 'other', source: siteOf(host) };
}
