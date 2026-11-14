// livingPath.ts — the curated "Thinking of moving to Malaysia?" journey.
//
// A sequenced, sourced ENTRY path surfaced above the generic category grid on the
// `living` pillar hub (/living). One curated best article per step of the real
// relocation journey, in order; hook→depth (each step links into a cited article),
// and most steps carry the myth→fact "fact card" we attach to that article.
//
// Reuses existing articles — NO new content. The China "想留下" (thinking-of-staying)
// audience is the primary driver, but it serves every relocation reader (13 langs).
// Keep it SHORT and ORDERED (it reads as a journey); stage meaning is carried by the
// article titles, so no per-step translation is needed. To change the path, edit the
// list — slugs are language-neutral identifiers, never translated.

export interface GuidedStep {
  /** Article category id. */
  cat: string;
  /** Article slug (language-neutral). */
  slug: string;
}

export const LIVING_PATH: GuidedStep[] = [
  { cat: 'settling-in', slug: 'malaysia-entry-visa-requirements-by-nationality' },
  { cat: 'settling-in', slug: 'mm2h-long-stay-visa' },
  { cat: 'public-safety', slug: 'how-to-report-a-scam-malaysia' },
  { cat: 'money-daily-life', slug: 'ewallets-regulation-safety' },
  { cat: 'taxation', slug: 'income-tax-in-malaysia' },
  { cat: 'property', slug: 'foreigners-buying-property' },
  { cat: 'healthcare', slug: 'public-healthcare-system-malaysia' },
  { cat: 'malaysia', slug: 'population-composition' },
  { cat: 'education', slug: 'international-students-studying-in-malaysia' },
  { cat: 'business', slug: 'foreign-ownership-malaysia' },
];
