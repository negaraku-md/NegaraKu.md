import type { Article } from './content';
import type { Locale } from './categories';
import { getCategory } from './categories';
import { subcatLabel, SUBCATEGORY_LABELS } from './subcategories';
import { SITE } from './site';
import { localePath } from './i18n';

/** The country term, per language, always included as a base keyword. */
const COUNTRY: Record<Locale, string[]> = {
  ms: ['Malaysia'],
  en: ['Malaysia'],
  zh: ['马来西亚', 'Malaysia'],
};

/**
 * Human-readable, localized search keywords for an article — derived from its
 * title, localized category + subcategory labels, and the country term. These
 * are real terms people (and AI) search for, not internal IDs. Deduped.
 */
export function keywordsFor(article: Article, locale: Locale): string[] {
  const d = article.data;
  const cat = getCategory(d.category);
  const raw = [
    d.title,
    cat?.name[locale] ?? d.category,
    // Only subcategories with a real localized label — never leak raw slugs.
    ...d.subcategory.filter((s) => SUBCATEGORY_LABELS[s]).map((s) => subcatLabel(s, locale)),
    ...COUNTRY[locale],
  ];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const k of raw) {
    const key = k.trim().toLowerCase();
    if (k.trim() && !seen.has(key)) {
      seen.add(key);
      out.push(k.trim());
    }
  }
  return out;
}

/** BreadcrumbList JSON-LD: home → category → article. */
export function breadcrumbJsonLd(article: Article, locale: Locale): Record<string, unknown> {
  const d = article.data;
  const cat = getCategory(d.category);
  const items = [
    { name: 'NegaraKu.md', url: SITE + localePath('/', locale) },
    { name: cat?.name[locale] ?? d.category, url: SITE + localePath(`/${d.category}`, locale) },
    { name: d.title, url: SITE + localePath(`/${d.category}/${d.slug}`, locale) },
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** Schema.org Article JSON-LD for a knowledge entry. */
export function articleJsonLd(article: Article, locale: Locale): Record<string, unknown> {
  const d = article.data;
  const url = SITE + localePath(`/${d.category}/${d.slug}`, locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: d.title,
    description: d.summary,
    inLanguage: locale === 'zh' ? 'zh-Hans' : locale === 'ms' ? 'ms-MY' : 'en',
    datePublished: (d.created ?? d.updated).toISOString(),
    dateModified: d.updated.toISOString(),
    mainEntityOfPage: url,
    url,
    isAccessibleForFree: true,
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    keywords: keywordsFor(article, locale).join(', '),
    publisher: {
      '@type': 'Organization',
      name: 'NegaraKu.md',
      url: SITE,
    },
    sponsor: {
      '@type': 'Organization',
      name: '1company',
      url: 'https://www.1company.com',
    },
    citation: d.sources.map((s) => s.url ?? s.title),
    articleSection: d.category,
  };
}

/**
 * The <title> used in search results — NOT the on-page H1.
 *
 * Appends the review year, e.g. "… (2026 Guide)". This is a Google click-through
 * play: dated titles win clicks against competitors who date theirs. It does
 * nothing for AI citation, which reads `dateModified` from JSON-LD instead.
 *
 * The year is DERIVED from the review date, never hardcoded, so:
 *   - it can never advertise a freshness the article hasn't earned;
 *   - it needs no annual maintenance across hundreds of articles;
 *   - it drops off automatically once an article goes stale.
 * Freshness claim stays tied to freshness fact — same rule as the trust badge.
 */
const FRESH_MONTHS = 18;
/** Google renders roughly this many characters before truncating. */
export const TITLE_BUDGET = 60;

export function seoTitleFor(article: Article): string {
  const d = article.data;
  const base = d.seoTitle ?? d.title;

  // Never double-stamp a title that already carries a year.
  if (/\b(19|20)\d{2}\b/.test(base)) return base;

  const stamp = d.reviewed ?? d.updated;
  if (!stamp) return base;

  const ageMonths = (Date.now() - new Date(stamp).getTime()) / (1000 * 60 * 60 * 24 * 30.44);
  if (ageMonths > FRESH_MONTHS) return base; // stale — say nothing rather than lie

  const year = new Date(stamp).getFullYear();

  // Fit the year inside the display budget, or the stamp gets truncated away and
  // buys nothing. Prefer "(2026 Guide)", fall back to "(2026)", then to no year.
  const long = `${base} (${year} Guide)`;
  const short = `${base} (${year})`;
  if (d.contentType === 'guide' && long.length <= TITLE_BUDGET) return long;
  if (short.length <= TITLE_BUDGET) return short;
  return base;
}

/**
 * FAQPage JSON-LD. A primary AEO surface — this is the shape search engines and
 * AI assistants lift answers from. Returns null when the article has no FAQ.
 */
export function faqJsonLd(article: Article): Record<string, unknown> | null {
  const faq = article.data.faq;
  if (!faq.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Site-level WebSite JSON-LD with a search action + sponsor. */
export function websiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NegaraKu.md',
    alternateName: 'negaraku.md',
    url: SITE,
    inLanguage: ['ms-MY', 'en', 'zh-Hans'],
    description: 'An open-source, AI-friendly knowledge base about Malaysia.',
    sponsor: {
      '@type': 'Organization',
      name: '1company',
      url: 'https://www.1company.com',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}
