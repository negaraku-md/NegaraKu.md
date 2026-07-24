import type { Locale, Pillar } from './categories';

// Sponsorship as DATA, not markup.
//
// It used to be a 1company block hardcoded inside ArticleView and shown by a
// pillar check. That made it impossible to vary per article, to disclose
// consistently, or to answer "who sponsored what" — the data model calls for an
// `Article Sponsored` entity, so here it is.
//
// Disclosure is not optional: a sponsored block always carries a visible
// "Sponsored" label, and sensitive (3R+1) content is NEVER sponsored — civic
// content must not carry a commercial ask.

export interface Sponsor {
  id: string;
  /** Display name. Keep `1company` lowercase — brand rule. */
  name: string;
  url: string;
  heading: Record<Locale, string>;
  blurb: Record<Locale, string>;
  cta: Record<Locale, string>;
}

export const SPONSORS: Record<string, Sponsor> = {
  '1company': {
    id: '1company',
    name: '1company.com',
    url: 'https://www.1company.com',
    heading: {
      ms: 'Perlukan bantuan profesional?',
      en: 'Need professional help?',
      zh: '需要专业协助？',
    },
    blurb: {
      ms: ' menyediakan perkhidmatan penubuhan syarikat, setiausaha syarikat, perakaunan, audit dan cukai di Malaysia.',
      en: ' provides incorporation, company secretarial, accounting, audit and tax services in Malaysia.',
      zh: ' 提供马来西亚公司注册、公司秘书、会计、审计与税务服务。',
    },
    cta: { ms: 'Ketahui lebih lanjut', en: 'Learn more', zh: '了解更多' },
  },
};

/**
 * Default sponsor per pillar. Data, so changing who sponsors what is an edit
 * here rather than a change to a component.
 */
export const PILLAR_SPONSOR: Partial<Record<Pillar, string>> = {
  'doing-business': '1company',
};

/**
 * Resolve the sponsor for an article. An explicit `sponsor` on the article wins;
 * otherwise the pillar default applies. Sensitive content is never sponsored,
 * and `sponsor: "none"` opts a single article out.
 */
export function resolveSponsor(
  articleSponsor: string | null | undefined,
  pillar: Pillar | undefined,
  sensitive: boolean,
): Sponsor | undefined {
  if (sensitive) return undefined;
  if (articleSponsor === 'none') return undefined;
  const id = articleSponsor ?? (pillar ? PILLAR_SPONSOR[pillar] : undefined);
  return id ? SPONSORS[id] : undefined;
}
