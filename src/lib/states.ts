import type { Locale } from './categories';

// The 13 states + 3 federal territories, with a schematic grid position for a
// cartogram-style map (col,row). This is a stylised layout, not a precise
// geographic projection — swap in a real TopoJSON later if pixel accuracy is
// needed. `slug` links to a states-category article when one exists.
export interface State {
  code: string;
  slug: string;
  name: Record<Locale, string>;
  region: 'semenanjung' | 'borneo';
  ft?: boolean;
  col: number;
  row: number;
}

export const STATES: State[] = [
  { code: 'PLS', slug: 'perlis', region: 'semenanjung', col: 1, row: 0, name: { ms: 'Perlis', en: 'Perlis', zh: '玻璃市' } },
  { code: 'KDH', slug: 'kedah', region: 'semenanjung', col: 1, row: 1, name: { ms: 'Kedah', en: 'Kedah', zh: '吉打' } },
  { code: 'KTN', slug: 'kelantan', region: 'semenanjung', col: 2, row: 1, name: { ms: 'Kelantan', en: 'Kelantan', zh: '吉兰丹' } },
  { code: 'PNG', slug: 'pulau-pinang', region: 'semenanjung', col: 0, row: 2, name: { ms: 'Pulau Pinang', en: 'Penang', zh: '槟城' } },
  { code: 'PRK', slug: 'perak', region: 'semenanjung', col: 1, row: 2, name: { ms: 'Perak', en: 'Perak', zh: '霹雳' } },
  { code: 'TRG', slug: 'terengganu', region: 'semenanjung', col: 3, row: 2, name: { ms: 'Terengganu', en: 'Terengganu', zh: '登嘉楼' } },
  { code: 'SGR', slug: 'selangor', region: 'semenanjung', col: 1, row: 3, name: { ms: 'Selangor', en: 'Selangor', zh: '雪兰莪' } },
  { code: 'PHG', slug: 'pahang', region: 'semenanjung', col: 2, row: 3, name: { ms: 'Pahang', en: 'Pahang', zh: '彭亨' } },
  { code: 'KUL', slug: 'kuala-lumpur', region: 'semenanjung', ft: true, col: 1, row: 4, name: { ms: 'W.P. Kuala Lumpur', en: 'KL (Federal)', zh: '吉隆坡' } },
  { code: 'NSN', slug: 'negeri-sembilan', region: 'semenanjung', col: 2, row: 4, name: { ms: 'Negeri Sembilan', en: 'N. Sembilan', zh: '森美兰' } },
  { code: 'PJY', slug: 'putrajaya', region: 'semenanjung', ft: true, col: 1, row: 5, name: { ms: 'W.P. Putrajaya', en: 'Putrajaya (Federal)', zh: '布城' } },
  { code: 'MLK', slug: 'melaka', region: 'semenanjung', col: 2, row: 5, name: { ms: 'Melaka', en: 'Malacca', zh: '马六甲' } },
  { code: 'JHR', slug: 'johor', region: 'semenanjung', col: 2, row: 6, name: { ms: 'Johor', en: 'Johor', zh: '柔佛' } },
  { code: 'SBH', slug: 'sabah', region: 'borneo', col: 6, row: 0, name: { ms: 'Sabah', en: 'Sabah', zh: '沙巴' } },
  { code: 'LBN', slug: 'labuan', region: 'borneo', ft: true, col: 5, row: 1, name: { ms: 'W.P. Labuan', en: 'Labuan (Federal)', zh: '纳闽' } },
  { code: 'SWK', slug: 'sarawak', region: 'borneo', col: 5, row: 3, name: { ms: 'Sarawak', en: 'Sarawak', zh: '砂拉越' } },
];
