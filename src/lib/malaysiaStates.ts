// ---------------------------------------------------------------------------
// Malaysia states — the data layer for "explore by state" discovery.
//
// Each of the 13 states + 3 federal territories, with:
//  - `slug`: its states-category article (display name resolved per locale
//    from that article's title, so no hand-kept 16×13 name table);
//  - `postcodes`: the 2-digit postcode prefixes that fall in it, so a venue's
//    state is DERIVED from its place-card address (Malaysian postcodes map
//    cleanly to states — no geocoding needed);
//  - `tourism`: the tourism guides that belong to the state (region guides have
//    no place card, so they are mapped by hand — a small, stable set).
//
// State is derived, never stored on 900+ articles, so this is additive and
// reversible. Maps (lat/long pins) are a later phase: the place cards carry a
// Maps search URL, not coordinates, so real pins need a geocoding pass.
// ---------------------------------------------------------------------------

export interface MyState {
  id: string;
  /** states-category article slug (for the localized display name). */
  slug: string;
  /** 2-digit postcode prefixes in this state. */
  postcodes: string[];
  /** tourism article slugs that belong to this state (region guides). */
  tourism: string[];
}

export const MY_STATES: MyState[] = [
  { id: 'johor', slug: 'johor', postcodes: ['79', '80', '81', '82', '83', '84', '85', '86'], tourism: ['johor-bahru-and-johor'] },
  { id: 'kedah', slug: 'kedah', postcodes: ['05', '06', '07', '08', '09'], tourism: ['langkawi-visitor-guide'] },
  { id: 'kelantan', slug: 'kelantan', postcodes: ['15', '16', '17', '18'], tourism: [] },
  { id: 'melaka', slug: 'melaka', postcodes: ['75', '76', '77', '78'], tourism: ['melaka-heritage-visitor-guide'] },
  { id: 'negeri-sembilan', slug: 'negeri-sembilan', postcodes: ['70', '71', '72', '73'], tourism: [] },
  { id: 'pahang', slug: 'pahang', postcodes: ['25', '26', '27', '28', '39', '49', '69'], tourism: ['cameron-highlands-visitor-guide', 'genting-highlands', 'frasers-hill', 'taman-negara-ecotourism-guide'] },
  { id: 'penang', slug: 'penang', postcodes: ['10', '11', '12', '13', '14'], tourism: ['penang-george-town-visitor-guide'] },
  { id: 'perak', slug: 'perak', postcodes: ['30', '31', '32', '33', '34', '35', '36'], tourism: ['ipoh-and-the-kinta-valley'] },
  { id: 'perlis', slug: 'perlis', postcodes: ['01', '02'], tourism: [] },
  { id: 'selangor', slug: 'selangor', postcodes: ['40', '41', '42', '43', '44', '45', '46', '47', '48', '63', '64', '68'], tourism: [] },
  { id: 'terengganu', slug: 'terengganu', postcodes: ['20', '21', '22', '23', '24'], tourism: ['east-coast-islands-guide'] },
  { id: 'sabah', slug: 'sabah', postcodes: ['88', '89', '90', '91'], tourism: ['sabah-visitor-guide', 'mount-kinabalu-and-kinabalu-park', 'sipadan-and-semporna'] },
  { id: 'sarawak', slug: 'sarawak', postcodes: ['93', '94', '95', '96', '97', '98'], tourism: ['sarawak-visitor-guide', 'gunung-mulu-national-park', 'kuching-visitor-guide'] },
  { id: 'kuala-lumpur', slug: 'kuala-lumpur', postcodes: ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60'], tourism: ['kuala-lumpur-visitor-guide'] },
  { id: 'putrajaya', slug: 'putrajaya', postcodes: ['62'], tourism: [] },
  { id: 'labuan', slug: 'labuan', postcodes: ['87'], tourism: [] },
];

const POSTCODE_TO_STATE: Record<string, string> = Object.fromEntries(
  MY_STATES.flatMap((s) => s.postcodes.map((p) => [p, s.id])),
);

/** Derive a state id from a free-text Malaysian address via its 5-digit postcode. */
export function stateFromAddress(address: string | undefined): string | null {
  if (!address) return null;
  const pc = address.match(/\b(\d{5})\b/);
  if (!pc) return null;
  return POSTCODE_TO_STATE[pc[1].slice(0, 2)] ?? null;
}

export function getState(id: string): MyState | undefined {
  return MY_STATES.find((s) => s.id === id);
}

/** All tourism slugs claimed by any state (to resolve them from the corpus). */
export function stateTourismSlugs(): Set<string> {
  return new Set(MY_STATES.flatMap((s) => s.tourism));
}
