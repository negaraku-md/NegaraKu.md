// linkedin.mjs — shared helpers for the LinkedIn poster.
//
// LinkedIn is ONE English-led Company Page (NOT per-language like Facebook — see
// memory negaraku-linkedin-page): a single org, English articles, business/
// compliance pillar first. This module holds the org URN, the Posts-API call and
// header/versioning, and the post builder. It reuses the language-neutral helpers
// from facebook.mjs (URL/UTM/hashtags/pillar) so the two posters can't drift.
//
// Posting needs LinkedIn's Community Management API: an access token with the
// `w_organization_social` scope, minted for a member who is an ADMIN of the org.
// That product is App-Review gated, so until the token exists this engine runs in
// dry-run (preview) — everything below is built and testable now.

import { withUtm, articleUrl, hashtags, localePrefix } from './facebook.mjs';

// Versioned REST base. LinkedIn REQUIRES a `LinkedIn-Version` header (YYYYMM) on
// every /rest call; bump LINKEDIN_VERSION periodically (LinkedIn sunsets old
// versions ~1 year out). Override via env without a code change if one expires.
export const REST = 'https://api.linkedin.com/rest';
export const LINKEDIN_VERSION = process.env.LINKEDIN_VERSION || '202506';

// The Company Page is an ORGANIZATION; posts are authored by its URN. 146607540 is
// NegaraKu.md (linkedin.com/company/negaraku-md). Public id → lives here, not in a
// secret; override with LINKEDIN_ORG_URN if ever needed.
export const ORG_ID = process.env.LINKEDIN_ORG_ID || '146607540';
export const ORG_URN = process.env.LINKEDIN_ORG_URN || `urn:li:organization:${ORG_ID}`;

// LinkedIn is a SINGLE Company Page, but it serves a Malaysian audience, so the
// poster posts in three languages to the one feed: English (lead), Bahasa Melayu
// and 中文 — each drawn from its own demand-ranked, business-first queue and
// rotated so the single feed stays a balanced trilingual mix. (Tamil is omitted:
// LinkedIn has no ta Page locale and the ta professional audience there is thin.)
export const LANGS = ['en', 'ms', 'zh'];

// Per-language call-to-action preceding the link (mirrors the FB posters' copy).
const CTA = {
  en: '🔗 Read the full guide:',
  ms: '🔗 Baca panduan penuh:',
  zh: '🔗 阅读完整指南：',
};

export function headers(token) {
  return {
    Authorization: `Bearer ${token}`,
    'X-Restli-Protocol-Version': '2.0.0',
    'LinkedIn-Version': LINKEDIN_VERSION,
    'Content-Type': 'application/json',
  };
}

// The Posts API `commentary` field is "Little Text": a small set of punctuation is
// RESERVED for entity markup and must be backslash-escaped in literal prose, or the
// post is rejected / renders wrong. We escape the prose (title/summary/CTA) but
// build the hashtag line separately — there the leading `#` is intentional and each
// tag body is alphanumeric (hashtag() strips the rest), so nothing there needs escaping.
const LI_RESERVED = /[\\|{}@\[\]()<>#*_~]/g;
export const escapeLI = (s) => String(s).replace(LI_RESERVED, (c) => `\\${c}`);

// Build the /rest/posts body for a published article IN ONE LANGUAGE: an ARTICLE
// share (a clickable link card — LinkedIn scrapes the page's OG title/image) plus a
// commentary hook + hashtags. `data` is that language's article frontmatter.
export function buildPost(data, { siteUrl, lang = 'en' }) {
  if (!data.slug || !data.category) return null;
  const link = withUtm(
    articleUrl(siteUrl, localePrefix(lang), data.category, data.slug),
    'linkedin',
    'social',
  );
  const tags = hashtags(data, lang); // FB hashtag builder is language-aware (en/ms/zh)
  // Commentary: escaped hook (title + summary + CTA+link), then the raw tag line.
  const hook = [
    escapeLI(data.title),
    '',
    escapeLI(data.summary || ''),
    '',
    `${(CTA[lang] || CTA.en)} ${escapeLI(link)}`,
  ].join('\n');
  const commentary = tags ? `${hook}\n\n${tags}` : hook;
  return {
    author: ORG_URN,
    commentary,
    visibility: 'PUBLIC',
    distribution: {
      feedDistribution: 'MAIN_FEED',
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    content: {
      article: {
        source: link,
        title: (data.title || '').slice(0, 400),
        description: (data.summary || '').slice(0, 256),
      },
    },
    lifecycleState: 'PUBLISHED',
    isReshareDisabledByAuthor: false,
  };
}

// POST one article to the org's feed. Returns the created post URN (from the
// x-restli-id response header). Throws with the API body on failure so the run log
// shows the exact reason (401 = token/scope, 403 = not an org admin, 422 = body).
export async function postArticle(body, token) {
  const res = await fetch(`${REST}/posts`, {
    method: 'POST',
    headers: headers(token),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`LinkedIn /rest/posts ${res.status}: ${txt.slice(0, 500)}`);
  }
  return res.headers.get('x-restli-id') || res.headers.get('x-linkedin-id') || '(created)';
}
