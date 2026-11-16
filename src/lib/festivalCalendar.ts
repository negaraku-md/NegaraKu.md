// ---------------------------------------------------------------------------
// Festival calendar — the data layer for the "What's on" discovery band.
//
// Maps each festival that carries `festivalFacts` to the RECURRING MONTH-WINDOW
// it typically falls in (1 = January … 12 = December). These are DURABLE
// seasons, NOT gazetted dates: Malaysia's lunar, Hindu and solar-term festivals
// shift within a roughly stable window each year, so we show the window and link
// each reader to the article for the exact, year-specific date. Islamic feasts
// drift ~11 days earlier every Gregorian year through the whole calendar, so
// they are marked `moveable` and never pinned to a month.
//
// Windows were taken from each article's own sourced `festivalFacts.when`, not
// guessed. The band resolves titles per locale from the live corpus, so adding a
// festival = append one entry here once its article carries festivalFacts.
// ---------------------------------------------------------------------------

export interface FestivalSeason {
  /** arts-culture article slug (title resolved per locale from the corpus). */
  slug: string;
  /** Recurring Gregorian month-window, 1–12. Empty when `moveable`. */
  months: number[];
  /** True for Islamic (qamari) feasts that cycle through the whole year. */
  moveable?: boolean;
}

// Source windows (from each article's festivalFacts.when):
// CNY lunar 1st month → Jan–Feb · Thaipusam Tamil Thai → late Jan/Feb · Pongal
// Thai 1st → mid-Jan · Qingming solar term → early Apr · Tamil New Year → ~14 Apr
// · Wesak Vesakha full moon → Apr/May (May in MY) · Kaamatan → 30–31 May (much of
// May) · Gawai → 1–2 Jun · Dragon Boat 5th lunar month → Jun · Hungry Ghost 7th
// lunar month → Aug–Sep · Mid-Autumn 8th lunar month → Sep/Oct · Nine Emperor
// Gods 9th lunar month → Sep/Oct · Deepavali → Oct/Nov · Christmas → 25 Dec ·
// Winter Solstice solar term → ~21–23 Dec · Hari Raya Aidilfitri → moveable.
export const FESTIVAL_CALENDAR: FestivalSeason[] = [
  { slug: 'chinese-new-year', months: [1, 2] },
  { slug: 'pongal', months: [1] },
  { slug: 'thaipusam', months: [1, 2] },
  { slug: 'qingming-festival', months: [4] },
  { slug: 'tamil-new-year', months: [4] },
  { slug: 'wesak', months: [5] },
  { slug: 'kaamatan', months: [5] },
  { slug: 'gawai-dayak', months: [6] },
  { slug: 'dragon-boat-festival', months: [6] },
  { slug: 'hungry-ghost-festival', months: [8, 9] },
  { slug: 'mid-autumn-festival', months: [9, 10] },
  { slug: 'nine-emperor-gods-festival', months: [9, 10] },
  { slug: 'deepavali', months: [10, 11] },
  { slug: 'christmas-malaysia', months: [12] },
  { slug: 'winter-solstice-festival', months: [12] },
  { slug: 'hari-raya-aidilfitri', months: [], moveable: true },
];

/** Festivals whose season includes a given month (1–12). */
export function festivalsInMonth(month: number): FestivalSeason[] {
  return FESTIVAL_CALENDAR.filter((f) => f.months.includes(month));
}

/** The moveable (Islamic) feasts, shown separately from the month grid. */
export function moveableFestivals(): FestivalSeason[] {
  return FESTIVAL_CALENDAR.filter((f) => f.moveable);
}

/** All slugs the band references (for resolving titles from the corpus). */
export function festivalSlugs(): string[] {
  return FESTIVAL_CALENDAR.map((f) => f.slug);
}
