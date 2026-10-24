import type { Article } from './content';
import type { ContentLocale, Locale, Category } from './categories';
import { getCategory, loc } from './categories';
import { subcatLabel, SUBCATEGORY_LABELS } from './subcategories';
import { SITE } from './site';
import { localePath, withTrailingSlash, LOCALES } from './i18n';

// BCP-47 language tags for every launched locale (for schema.org inLanguage).
const BCP47: Record<Locale, string> = { ms: 'ms-MY', en: 'en', zh: 'zh-Hans', ta: 'ta', ja: 'ja', ko: 'ko', th: 'th', vi: 'vi', id: 'id', ar: 'ar', hi: 'hi', es: 'es', fr: 'fr' };

/** Stable @id for the site's Organization entity — linked from publisher/sponsor. */
export const ORG_ID = `${SITE}/#organization`;

/** Absolute, trailing-slash canonical URL for a page path (matches <link canonical>). */
function pageUrl(path: string, locale: Locale): string {
  return SITE + withTrailingSlash(localePath(path, locale));
}

/**
 * Standalone Organization JSON-LD — the site's brand entity. Emitted on the
 * homepage so search engines and AI assistants can build a knowledge panel and
 * associate the brand with its logo and social profiles; publisher/sponsor
 * elsewhere reference it by @id.
 */
export function organizationJsonLd(locale: Locale = 'en'): Record<string, unknown> {
  const n = LOCALES.length;
  const description = {
    ms: `Pangkalan pengetahuan sumber terbuka dan mesra-AI tentang Malaysia — dalam ${n} bahasa.`,
    en: `An open-source, AI-friendly knowledge base about Malaysia — in ${n} languages.`,
    zh: `关于马来西亚的开源、AI 友好知识库——提供 ${n} 种语言。`,
    ta: `மலேசியா பற்றிய திறந்த-மூல, AI-நட்பு அறிவுத் தளம் — ${n} மொழிகளில்.`,
    ja: `マレーシアに関するオープンソースで AI フレンドリーな知識ベース — ${n} 言語で提供。`,
    ko: `말레이시아에 관한 오픈소스이자 AI 친화적인 지식 베이스 — ${n}개 언어로 제공.`,
    th: `ฐานความรู้เกี่ยวกับมาเลเซียแบบโอเพนซอร์สและเป็นมิตรกับ AI — มีให้ ${n} ภาษา`,
    vi: `Cơ sở tri thức mã nguồn mở, thân thiện với AI về Malaysia — bằng ${n} ngôn ngữ.`,
    id: `Basis pengetahuan sumber terbuka dan ramah-AI tentang Malaysia — dalam ${n} bahasa.`,
    ar: `قاعدة معرفة مفتوحة المصدر وصديقة للذكاء الاصطناعي عن ماليزيا — بـ ${n} لغات.`,
    hi: `मलेशिया के बारे में एक ओपन-सोर्स, AI-अनुकूल ज्ञान आधार — ${n} भाषाओं में।`,
    es: `Una base de conocimiento sobre Malasia, de código abierto y compatible con la IA — en ${n} idiomas.`,
    fr: `Une base de connaissances sur la Malaisie, open source et adaptée à l'IA — en ${n} langues.`,
  }[locale] ?? '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'NegaraKu.md',
    alternateName: 'negaraku.md',
    url: SITE,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE}/brand/negaraku-icon-1024.png`,
      width: 1024,
      height: 1024,
    },
    description,
    sameAs: [
      'https://www.wikidata.org/wiki/Q141449495', // NegaraKu.md's Wikidata item — ties the brand to the global knowledge graph
      'https://www.facebook.com/negaraku.md',
      'https://github.com/negaraku-md',
    ],
    sponsor: {
      '@type': 'Organization',
      name: '1company',
      url: 'https://www.1company.com',
    },
  };
}

/** The country term, per language, always included as a base keyword. */
const COUNTRY: Record<ContentLocale, string[]> = {
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
    cat?.name[locale as ContentLocale] ?? d.category,
    // Only subcategories with a real localized label — never leak raw slugs.
    ...d.subcategory.filter((s) => SUBCATEGORY_LABELS[s]).map((s) => subcatLabel(s, locale)),
    ...(COUNTRY[locale as ContentLocale] ?? COUNTRY.ms),
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
    { name: 'NegaraKu.md', url: pageUrl('/', locale) },
    { name: cat?.name[locale as ContentLocale] ?? d.category, url: pageUrl(`/${d.category}`, locale) },
    { name: d.title, url: pageUrl(`/${d.category}/${d.slug}`, locale) },
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

/**
 * Article author. Content is AI-drafted and organisation-published, so the
 * honest default author is the Organization itself. When a real human is named
 * in the public revision history (a contributor other than "AI"), credit them
 * as a Person — that's how an open project surfaces genuine human authorship.
 */
function authorFor(d: Article['data']): Record<string, unknown> {
  const human = (d.revisions ?? [])
    .map((r) => r.contributor)
    .find((c): c is string => Boolean(c) && c!.trim().toLowerCase() !== 'ai');
  if (human) return { '@type': 'Person', name: human };
  return { '@type': 'Organization', '@id': ORG_ID, name: 'NegaraKu.md', url: SITE };
}

/** Schema.org Article JSON-LD for a knowledge entry. */
export function articleJsonLd(article: Article, locale: Locale): Record<string, unknown> {
  const d = article.data;
  const url = pageUrl(`/${d.category}/${d.slug}`, locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: d.title,
    description: d.summary,
    // The 30-second direct answer, machine-readable. This is the concise,
    // liftable answer AI assistants and answer engines quote — previously it
    // only existed as on-page text, invisible to structured-data consumers.
    ...(d.answer ? { abstract: d.answer } : {}),
    inLanguage: locale === 'zh' ? 'zh-Hans' : locale === 'ms' ? 'ms-MY' : locale === 'ta' ? 'ta' : locale === 'ja' ? 'ja' : locale === 'ko' ? 'ko' : locale === 'id' ? 'id' : locale === 'ar' ? 'ar' : locale === 'hi' ? 'hi' : locale === 'es' ? 'es' : locale === 'fr' ? 'fr' : 'en',
    datePublished: (d.created ?? d.updated).toISOString(),
    dateModified: d.updated.toISOString(),
    mainEntityOfPage: url,
    url,
    author: authorFor(d),
    isAccessibleForFree: true,
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    keywords: keywordsFor(article, locale).join(', '),
    // Point voice assistants at the answer + key-takeaways blocks (the Layer-1
    // summary). Only meaningful when the answer block actually renders.
    ...(d.answer
      ? {
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.l1 .answer', '.l1 .kt'],
          },
        }
      : {}),
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'NegaraKu.md',
      url: SITE,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/brand/negaraku-icon-1024.png`,
      },
    },
    sponsor: {
      '@type': 'Organization',
      name: '1company',
      url: 'https://www.1company.com',
    },
    // Structured citations — CreativeWork objects (not bare URLs), so engines can
    // read the source's name, publisher and date, not just a link.
    citation: d.sources.map((s) => ({
      '@type': 'CreativeWork',
      name: s.title,
      ...(s.url ? { url: s.url } : {}),
      ...(s.publisher ? { publisher: { '@type': 'Organization', name: s.publisher } } : {}),
      ...(s.date ? { datePublished: s.date } : {}),
    })),
    articleSection: d.category,
    // Entity linking: tie this article to the canonical Wikidata entity it is
    // ABOUT, so Google's Knowledge Graph and LLMs recognise NegaraKu.md as an
    // authoritative source on it (the compounding SEO + AI amplification — no
    // Wikipedia editing needed). Only when a confident QID is set on the article.
    ...(d.wikidata
      ? {
          about: {
            '@type': 'Thing',
            name: d.entity ?? d.title,
            '@id': `https://www.wikidata.org/wiki/${d.wikidata}`,
            sameAs: `https://www.wikidata.org/wiki/${d.wikidata}`,
          },
        }
      : {}),
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
export function websiteJsonLd(locale: Locale = 'en'): Record<string, unknown> {
  const description = {
    ms: 'Pangkalan pengetahuan sumber terbuka dan mesra-AI tentang Malaysia.',
    en: 'An open-source, AI-friendly knowledge base about Malaysia.',
    zh: '关于马来西亚的开源、AI 友好知识库。',
    ta: 'மலேசியா பற்றிய திறந்த-மூல, AI-நட்பு அறிவுத் தளம்.',
    ja: 'マレーシアに関するオープンソースで AI フレンドリーな知識ベース。',
    ko: '말레이시아에 관한 오픈소스이자 AI 친화적인 지식 베이스.',
    th: 'ฐานความรู้เกี่ยวกับมาเลเซียแบบโอเพนซอร์สและเป็นมิตรกับ AI.',
    vi: 'Cơ sở tri thức mã nguồn mở, thân thiện với AI về Malaysia.',
    id: 'Basis pengetahuan sumber terbuka dan ramah-AI tentang Malaysia.',
    ar: 'قاعدة معرفة مفتوحة المصدر وصديقة للذكاء الاصطناعي عن ماليزيا.',
    hi: 'मलेशिया के बारे में एक ओपन-सोर्स, AI-अनुकूल ज्ञान आधार।',
    es: 'Una base de conocimiento sobre Malasia, de código abierto y compatible con la IA.',
    fr: "Une base de connaissances sur la Malaisie, open source et adaptée à l'IA.",
  }[locale] ?? '';
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    name: 'NegaraKu.md',
    alternateName: 'negaraku.md',
    url: SITE,
    inLanguage: LOCALES.map((l) => BCP47[l]),
    description,
    publisher: { '@id': ORG_ID },
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

/**
 * CollectionPage + ItemList JSON-LD for a category landing page. Category pages
 * list every article in the category but previously carried NO structured data,
 * so engines saw a bare list. This tells them the page is a curated collection
 * and enumerates its members as an ordered ItemList — each a ListItem pointing
 * at the article — which is how a listing page earns rich understanding and
 * feeds the member URLs to crawlers and answer engines.
 */
export function categoryCollectionJsonLd(cat: Category, articles: Article[], locale: Locale): Record<string, unknown> {
  const url = pageUrl(`/${cat.id}`, locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    url,
    name: loc(cat.name, locale),
    description: loc(cat.blurb, locale),
    inLanguage: BCP47[locale],
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': ORG_ID },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: pageUrl(`/${a.data.category}/${a.data.slug}`, locale),
        name: a.data.title,
      })),
    },
  };
}

/**
 * Dataset JSON-LD for the whole knowledge base. NegaraKu.md is an open,
 * multilingual, machine-readable corpus — a Dataset is exactly how Google
 * Dataset Search and AI ingestion pipelines recognise that, with concrete
 * download distributions (the JSON API, the llms.txt dump, the Hugging Face
 * dataset). Emitted once on the homepage. This is a discovery surface the site
 * was not previously claiming, and it reinforces the "AI-friendly" positioning
 * with an actual, crawlable data offering rather than a claim.
 */
export function datasetJsonLd(locale: Locale = 'en'): Record<string, unknown> {
  const n = LOCALES.length;
  const description = {
    ms: `Korpus pengetahuan sumber terbuka, berbilang bahasa dan boleh dibaca mesin tentang Malaysia — perundangan, cukai, perniagaan, kerajaan dan banyak lagi, dalam ${n} bahasa, setiap dakwaan dipetik sumbernya.`,
    en: `An open, multilingual, machine-readable knowledge corpus about Malaysia — law, tax, business, government and more, in ${n} languages, with every claim sourced.`,
    zh: `关于马来西亚的开放、多语言、机器可读知识语料库——涵盖法律、税务、商业、政府等，提供 ${n} 种语言，每项陈述均注明来源。`,
    ta: `மலேசியா பற்றிய திறந்த, பன்மொழி, இயந்திரம் படிக்கக்கூடிய அறிவுத் தொகுப்பு — சட்டம், வரி, வணிகம், அரசாங்கம் மற்றும் பல, ${n} மொழிகளில், ஒவ்வொரு கூற்றும் மூலத்துடன்.`,
    ja: `マレーシアに関するオープンで多言語・機械可読のナレッジコーパス — 法律、税務、ビジネス、政府など、${n} 言語で、すべての記述に出典付き。`,
    ko: `말레이시아에 관한 개방형·다국어·기계 판독 가능 지식 코퍼스 — 법률, 세무, 비즈니스, 정부 등, ${n}개 언어, 모든 서술에 출처 표기.`,
    th: `คลังความรู้เกี่ยวกับมาเลเซียแบบเปิด หลายภาษา และอ่านได้ด้วยเครื่อง — กฎหมาย ภาษี ธุรกิจ รัฐบาล และอื่น ๆ ใน ${n} ภาษา พร้อมอ้างอิงแหล่งที่มาทุกข้อความ`,
    vi: `Kho tri thức mở, đa ngôn ngữ, máy đọc được về Malaysia — luật, thuế, kinh doanh, chính phủ và hơn thế, bằng ${n} ngôn ngữ, mọi khẳng định đều có nguồn.`,
    id: `Korpus pengetahuan terbuka, multibahasa, dan terbaca mesin tentang Malaysia — hukum, pajak, bisnis, pemerintahan, dan lainnya, dalam ${n} bahasa, setiap klaim bersumber.`,
    ar: `مجموعة معرفية مفتوحة ومتعددة اللغات وقابلة للقراءة آلياً عن ماليزيا — القانون والضرائب والأعمال والحكومة وغيرها، بـ ${n} لغات، مع توثيق كل معلومة بمصدرها.`,
    hi: `मलेशिया के बारे में एक खुला, बहुभाषी, मशीन-पठनीय ज्ञान संग्रह — कानून, कर, व्यवसाय, सरकार और अधिक, ${n} भाषाओं में, हर कथन स्रोत-सहित।`,
    es: `Un corpus de conocimiento abierto, multilingüe y legible por máquina sobre Malasia — derecho, impuestos, negocios, gobierno y más, en ${n} idiomas, con cada afirmación con fuente.`,
    fr: `Un corpus de connaissances ouvert, multilingue et lisible par machine sur la Malaisie — droit, fiscalité, affaires, gouvernement et plus, en ${n} langues, chaque affirmation sourcée.`,
  }[locale] ?? '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${SITE}/#dataset`,
    name: 'NegaraKu.md — Malaysia Knowledge Base',
    alternateName: 'negaraku.md dataset',
    description,
    url: SITE,
    inLanguage: LOCALES.map((l) => BCP47[l]),
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isAccessibleForFree: true,
    keywords: ['Malaysia', 'knowledge base', 'open data', 'multilingual', 'taxation', 'business', 'law', 'government', 'employment', 'cost of living'],
    creator: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    sameAs: 'https://huggingface.co/datasets/negaraku-md/negaraku-md',
    distribution: [
      {
        '@type': 'DataDownload',
        name: 'Articles JSON manifest',
        encodingFormat: 'application/json',
        contentUrl: `${SITE}/api/articles.json`,
      },
      {
        '@type': 'DataDownload',
        name: 'Full corpus for LLMs (llms.txt)',
        encodingFormat: 'text/plain',
        contentUrl: `${SITE}/llms-full.txt`,
      },
      {
        '@type': 'DataDownload',
        name: 'Hugging Face dataset',
        encodingFormat: 'application/json',
        contentUrl: 'https://huggingface.co/datasets/negaraku-md/negaraku-md',
      },
    ],
  };
}
