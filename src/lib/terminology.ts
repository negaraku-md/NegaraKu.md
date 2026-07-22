// A starter Malaysian terminology glossary + a colloquial→standard converter
// ruleset. This is a small seed for demonstration — extend it over time.

export interface Term {
  term: string; // colloquial / everyday Malaysian term
  standard: string; // Bahasa Malaysia baku
  en: string; // English gloss
  note?: string;
  category: 'makanan' | 'harian' | 'bahasa' | 'sosial';
}

export const TERMS: Term[] = [
  { term: 'tapau', standard: 'bungkus', en: 'takeaway (food)', category: 'makanan', note: 'From Cantonese 打包.' },
  { term: 'lepak', standard: 'bersantai', en: 'to hang out / chill', category: 'sosial' },
  { term: 'mamak', standard: 'gerai India-Muslim', en: 'Indian-Muslim eatery', category: 'makanan' },
  { term: 'teh tarik', standard: 'teh tarik', en: 'pulled milk tea', category: 'makanan' },
  { term: 'kopitiam', standard: 'kedai kopi', en: 'coffee shop', category: 'makanan' },
  { term: 'balik kampung', standard: 'pulang ke kampung', en: 'return to hometown', category: 'sosial' },
  { term: 'kena', standard: 'terpaksa / dikenakan', en: 'to get / have to', category: 'bahasa' },
  { term: 'boleh tahan', standard: 'agak baik', en: 'not bad / decent', category: 'bahasa' },
  { term: 'pasar malam', standard: 'pasar malam', en: 'night market', category: 'harian' },
  { term: 'kedai runcit', standard: 'kedai runcit', en: 'sundry shop', category: 'harian' },
  { term: 'jom', standard: 'mari / ayuh', en: "let's go", category: 'bahasa' },
  { term: 'bes', standard: 'hebat', en: 'great / awesome', category: 'bahasa' },
];

// Colloquial → standard word replacements for the converter.
export const RULES: Record<string, string> = Object.fromEntries(
  TERMS.map((t) => [t.term.toLowerCase(), t.standard]),
);
// A few extra common substitutions.
Object.assign(RULES, {
  tak: 'tidak',
  nak: 'hendak',
  nk: 'hendak',
  camni: 'begini',
  camtu: 'begitu',
  dgn: 'dengan',
  yg: 'yang',
  tu: 'itu',
  ni: 'ini',
  x: 'tidak',
});
