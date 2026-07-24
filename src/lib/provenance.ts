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
  states: {
    label: {
      ms: 'Negeri dan Wilayah Persekutuan',
      en: 'States and Federal Territories',
      zh: '各州与联邦直辖区',
    },
    // Names and codes are factual; the map grid is a deliberate abstraction.
    verification: 'schematic',
    note: {
      ms: 'Peta ialah kartogram bergaya (grid), bukan unjuran geografi yang tepat. Nama dan kod negeri adalah tepat.',
      en: 'The map is a stylised grid cartogram, not an accurate geographic projection. State names and codes are accurate.',
      zh: '地图为风格化网格示意图，并非精确地理投影。州名与代码准确。',
    },
  },
  terminology: {
    label: {
      ms: 'Istilah harian Malaysia',
      en: 'Malaysian everyday terminology',
      zh: '马来西亚日常用语',
    },
    verification: 'unverified',
    reviewer: null,
    note: {
      ms: 'Senarai permulaan yang kecil dan belum disemak oleh pakar bahasa. Padanan “baku” adalah cadangan, bukan ketetapan DBP.',
      en: 'A small starter list, not yet reviewed by a language specialist. The “standard” equivalents are suggestions, not DBP rulings.',
      zh: '这是尚未经语言专家审阅的初始小型列表。所谓“标准”对应词为建议，并非国家语文局的裁定。',
    },
  },
};

export function getProvenance(id: string): Provenance | undefined {
  return DATASETS[id];
}
