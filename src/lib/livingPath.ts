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

// The spine is the real arc of DECIDING to stay: can I enter → which pass is
// right for me (the four routes) → the long game (PR) → can I afford it → what
// I'll owe → doing business → putting down roots → family → health. Every step
// after the entry opener carries the sourced `stayFacts` "At a glance" bottom-line
// card (the 想留下 decision layer), so clicking a step lands on a cited, carded
// answer — hook→depth. Re-curated 2026-11-16 around those 12 carded decisions.
export const LIVING_PATH: GuidedStep[] = [
  { cat: 'settling-in', slug: 'malaysia-entry-visa-requirements-by-nationality' }, // can I enter?
  { cat: 'settling-in', slug: 'moving-to-malaysia-first-steps' },                  // the sequencing hub
  { cat: 'settling-in', slug: 'employment-pass' },                                 // work route
  { cat: 'settling-in', slug: 'mm2h-long-stay-visa' },                             // long-stay route
  { cat: 'settling-in', slug: 'premium-visa-programme-pvip' },                     // premium route
  { cat: 'settling-in', slug: 'de-rantau-nomad-pass' },                            // nomad route
  { cat: 'settling-in', slug: 'permanent-residency-malaysia' },                    // the long game
  { cat: 'cost-of-living', slug: 'cost-of-living-overview' },                      // can I afford it?
  { cat: 'taxation', slug: 'expatriate-and-non-resident-tax' },                    // what I'll owe
  { cat: 'business', slug: 'register-sdn-bhd' },                                   // if staying to do business
  { cat: 'property', slug: 'foreigners-buying-property' },                         // putting down roots
  { cat: 'education', slug: 'international-schools' },                             // bringing the family
  { cat: 'healthcare', slug: 'how-malaysian-healthcare-works' },                   // staying healthy
];
