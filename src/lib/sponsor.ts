// sponsor.ts — maps a high-intent article to the relevant sponsor service, and
// builds a UTM-tagged link. NegaraKu.md is sponsored by 1company; this turns the
// corpus's high-ranking business/finance content into a disclosed funnel:
//   - compliance / professional services  -> 1company.com
//   - financing of any kind                -> 1financing.com
// Only commercially-relevant articles get a CTA; everything else returns null
// (no CTA on arts, history, geography, etc.), keeping it targeted, not spammy.
import { BRAND_1COMPANY, BRAND_1FINANCING } from './site';

export type SponsorKind = 'company' | 'financing';

// Categories whose readers are typically in-market for 1company's services
// (incorporation, company secretary, accounting, audit, tax, advisory).
const COMPANY_CATEGORIES = new Set([
  'company-secretary', 'accounting', 'audit', 'taxation', 'business', 'finance',
]);

// Categories that are financing-led (personal / property money matters).
const FINANCING_CATEGORIES = new Set(['property', 'money-daily-life']);

// Financing-specific topics that live inside otherwise company/finance
// categories — these override to 1financing. Unknown slugs simply never match.
const FINANCING_SLUGS = new Set([
  'sme-financing-malaysia', 'equity-crowdfunding-p2p-malaysia',
  'foreign-currency-borrowing-malaysia', 'business-loan', 'business-loans-malaysia',
  'working-capital', 'invoice-financing', 'trade-financing', 'trade-finance',
  'startup-funding', 'venture-capital-malaysia', 'microfinance-malaysia',
]);

/** Which sponsor (if any) an article should funnel to. Financing takes
    precedence over the company default when a topic is financing-specific. */
export function sponsorFor(category: string, slug: string): SponsorKind | null {
  if (FINANCING_SLUGS.has(slug) || FINANCING_CATEGORIES.has(category)) return 'financing';
  if (COMPANY_CATEGORIES.has(category)) return 'company';
  return null;
}

/** UTM-tagged link to the sponsor, for dashboard attribution (utm_content
    carries the exact article so per-article funnel performance is measurable). */
export function sponsorUrl(kind: SponsorKind, category: string, slug: string): string {
  const base = kind === 'financing' ? BRAND_1FINANCING : BRAND_1COMPANY;
  const q = new URLSearchParams({
    utm_source: 'negaraku.md',
    utm_medium: 'article-cta',
    utm_campaign: kind,
    utm_content: `${category}/${slug}`,
  });
  return `${base}/?${q.toString()}`;
}
