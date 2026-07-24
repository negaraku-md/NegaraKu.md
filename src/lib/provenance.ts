import type { Locale } from './categories';

// Dataset provenance — the trust apparatus for content that is NOT an article.
//
// Articles carry sources, a reviewer and a review date, and the page shows them.
// Datasets rendered on the hub pages carried none of that: `companies.ts` warned
// "approximate and for demonstration" in a CODE COMMENT the reader never sees,
// while the site drew it as a real bubble chart. The warning has to reach the
// person looking at the numbers, not just the person editing the file.
//
// Verification is deliberately honest rather than flattering:
//   sourced     — every figure traceable to the cited source, as at `asOf`
//   unverified  — illustrative/seed values; NOT to be relied on
//   schematic   — deliberately stylised (a cartogram, not a projection)
//
// Do not mark a dataset `sourced` until the figures have actually been checked
// against the source. An invented citation is worse than an honest "unverified".

export type Verification = 'sourced' | 'unverified' | 'schematic';

export interface Provenance {
  /** Human name of the dataset, shown to the reader. */
  label: Record<Locale, string>;
  verification: Verification;
  /** The date the data represents (not the date the file was edited). */
  asOf?: string;
  source?: { title: string; url?: string; publisher?: string };
  reviewer?: string | null;
  reviewDue?: string | null;
  /** The honest caveat, shown verbatim to the reader. */
  note?: Record<Locale, string>;
}

export const DATASETS: Record<string, Provenance> = {
  companies: {
    label: {
      ms: 'Syarikat tersenarai Bursa Malaysia',
      en: 'Bursa Malaysia listed companies',
      zh: '马交所上市公司',
    },
    verification: 'unverified',
    reviewer: null,
    note: {
      ms: 'Angka permodalan pasaran dan hasil adalah nilai benih anggaran untuk tujuan ilustrasi sahaja — belum disahkan terhadap Bursa Malaysia. Jangan jadikan asas keputusan.',
      en: 'Market-capitalisation and revenue figures are approximate seed values for illustration only — not yet verified against Bursa Malaysia. Do not rely on them for any decision.',
      zh: '市值与营收数字仅为示意性初始数据，尚未对照马交所核实。请勿作为任何决策依据。',
    },
  },
};

export function getProvenance(id: string): Provenance | undefined {
  return DATASETS[id];
}
