// Malaysia public holidays — pure engine over the gazette dataset (data.ts).
// Encodes the state-specific weekend (Fri–Sat in Johor/Kedah/Kelantan/Terengganu,
// Sat–Sun elsewhere), so holiday lists, working-day counts and long-weekend
// detection are correct per state. Pure + unit-tested; no hidden "today".

import {
  HOLIDAYS, HOLIDAY_NAMES, FRI_SAT_STATES, STATES, YEARS, META,
  type Holiday, type Scope, type StateId,
} from './data';

export { STATES, YEARS, META, FRI_SAT_STATES } from './data';
export type { StateId } from './data';

export type Lang = 'ms' | 'en' | 'zh';

const toUTC = (iso: string) => new Date(iso + 'T00:00:00Z');
const dow = (iso: string) => toUTC(iso).getUTCDay();          // 0 Sun … 6 Sat
export function addDays(iso: string, n: number): string {
  const d = toUTC(iso);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
const daysBetweenInclusive = (a: string, b: string) =>
  Math.round((toUTC(b).getTime() - toUTC(a).getTime()) / 86_400_000) + 1;

/** Does a holiday's scope apply to this state? */
export function applies(scope: Scope, stateId: StateId): boolean {
  if (scope === 'national') return true;
  if (Array.isArray(scope)) return scope.includes(stateId);
  return !scope.except.includes(stateId);
}

/** Localized holiday name, with an "in lieu / replacement" suffix when relevant. */
export function holidayName(key: string, locale: Lang, inLieu?: boolean): string {
  const rec = HOLIDAY_NAMES[key];
  const base = rec ? (rec[locale] ?? rec.en) : key;
  if (!inLieu) return base;
  const suffix = locale === 'zh' ? '（补假）' : locale === 'ms' ? ' (Cuti Ganti)' : ' (Holiday)';
  return base + suffix;
}

export interface HolidayView {
  date: string; key: string; name: string; inLieu: boolean; religious: boolean; dow: number;
}

/** Holidays that apply to a state in a year, sorted by date, localized. */
export function holidaysFor(stateId: StateId, year: number, locale: Lang = 'en'): HolidayView[] {
  return (HOLIDAYS[year] ?? [])
    .filter((e) => applies(e.scope, stateId))
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((e) => ({
      date: e.date, key: e.key, name: holidayName(e.key, locale, e.inLieu),
      inLieu: !!e.inLieu, religious: !!e.religious, dow: dow(e.date),
    }));
}

/** All applicable holiday DATES for a state across every loaded year (lookup set). */
function holidayDateSet(stateId: StateId): Set<string> {
  const s = new Set<string>();
  for (const y of YEARS) for (const e of HOLIDAYS[y]) if (applies(e.scope, stateId)) s.add(e.date);
  return s;
}

export function restDays(stateId: StateId): number[] {
  return FRI_SAT_STATES.includes(stateId) ? [5, 6] : [0, 6]; // Fri/Sat or Sun/Sat
}
export function isRestDay(iso: string, stateId: StateId): boolean {
  return restDays(stateId).includes(dow(iso));
}
export function isHoliday(iso: string, stateId: StateId): boolean {
  return holidayDateSet(stateId).has(iso);
}
export function isWorkingDay(iso: string, stateId: StateId): boolean {
  return !isRestDay(iso, stateId) && !isHoliday(iso, stateId);
}

/** Count working days in [startISO, endISO] inclusive for a state (rest days +
 *  public holidays excluded). Returns 0 if the range is reversed or absurd. */
export function workingDaysBetween(startISO: string, endISO: string, stateId: StateId): number {
  const span = daysBetweenInclusive(startISO, endISO);
  if (span <= 0 || span > 3660) return 0;
  const hol = holidayDateSet(stateId);
  const rest = restDays(stateId);
  let n = 0, iso = startISO;
  for (let i = 0; i < span; i++) {
    if (!rest.includes(dow(iso)) && !hol.has(iso)) n++;
    iso = addDays(iso, 1);
  }
  return n;
}

export interface NextHoliday { date: string; key: string; name: string; daysAway: number; inLieu: boolean; }

/** The next holiday on or after fromISO for a state (across loaded years). */
export function nextHoliday(stateId: StateId, fromISO: string, locale: Lang = 'en'): NextHoliday | null {
  let best: Holiday | null = null;
  for (const y of YEARS) {
    for (const e of HOLIDAYS[y]) {
      if (!applies(e.scope, stateId)) continue;
      if (e.date < fromISO) continue;
      if (!best || e.date < best.date) best = e;
    }
  }
  if (!best) return null;
  return {
    date: best.date, key: best.key, name: holidayName(best.key, locale, best.inLieu),
    daysAway: daysBetweenInclusive(fromISO, best.date) - 1, inLieu: !!best.inLieu,
  };
}

export interface LongWeekend { start: string; end: string; days: number; holidays: string[]; }

/** Runs of >= 3 consecutive non-working days that include at least one public
 *  holiday (not just the weekly rest days), for a state in a year. */
export function longWeekends(year: number, stateId: StateId, locale: Lang = 'en'): LongWeekend[] {
  const start = `${year}-01-01`, end = `${year}-12-31`;
  const span = daysBetweenInclusive(start, end);
  const hol = holidayDateSet(stateId);
  const rest = restDays(stateId);
  // Localized name for each holiday date in-year (first/primary entry wins).
  const nameByDate = new Map<string, string>();
  for (const e of holidaysFor(stateId, year, locale)) if (!nameByDate.has(e.date)) nameByDate.set(e.date, e.name);

  const out: LongWeekend[] = [];
  let runStart: string | null = null, runHolidays: string[] = [], hadHoliday = false, iso = start;
  const flush = (endIso: string) => {
    if (runStart && hadHoliday) {
      const len = daysBetweenInclusive(runStart, endIso);
      if (len >= 3) out.push({ start: runStart, end: endIso, days: len, holidays: Array.from(new Set(runHolidays)) });
    }
    runStart = null; runHolidays = []; hadHoliday = false;
  };
  let prev: string | null = null;
  for (let i = 0; i < span; i++) {
    const off = rest.includes(dow(iso)) || hol.has(iso);
    if (off) {
      if (!runStart) runStart = iso;
      if (hol.has(iso)) { hadHoliday = true; const nm = nameByDate.get(iso); if (nm) runHolidays.push(nm); }
    } else if (runStart) {
      flush(prev as string);
    }
    prev = iso;
    iso = addDays(iso, 1);
  }
  if (runStart) flush(prev as string);
  return out;
}
