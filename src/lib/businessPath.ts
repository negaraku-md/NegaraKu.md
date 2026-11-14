// businessPath.ts — the curated "Starting a business in Malaysia?" journey.
//
// A sequenced, sourced ENTRY path surfaced above the generic category grid on the
// `doing-business` pillar hub (/doing-business). One curated best article per step
// of the real company-starter journey, in order; hook→depth (each step links into
// a cited article). Reuses existing articles — NO new content. Mirrors livingPath.
//
// Keep it SHORT and ORDERED (it reads as a journey); stage meaning is carried by the
// article titles, so no per-step translation is needed. Slugs are language-neutral
// identifiers, never translated.

import type { GuidedStep } from './livingPath';

export const BUSINESS_PATH: GuidedStep[] = [
  { cat: 'business', slug: 'business-structures-malaysia' },
  { cat: 'business', slug: 'register-sdn-bhd' },
  { cat: 'company-secretary', slug: 'appoint-company-secretary' },
  { cat: 'taxation', slug: 'corporate-tax-rates' },
  { cat: 'taxation', slug: 'sst-explained' },
  { cat: 'employment', slug: 'labour-law-map-malaysia' },
  { cat: 'business', slug: 'sdn-bhd-first-year-compliance' },
  { cat: 'business', slug: 'foreign-ownership-malaysia' },
];
