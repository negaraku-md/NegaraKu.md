// scenarios.ts — the 吃喝玩乐 ENTRY LAYER as scenario skins.
//
// Each scenario is a lifestyle SCENE (a kopitiam morning, Thaipusam, a hawker
// centre, Chinese New Year) that acts as an emotional doorway INTO NegaraKu's
// cited knowledge — hook→depth. A scene is just an ordered list of {cat, slug}
// pointers into ALREADY-PUBLISHED articles: zero new content, zero freshness
// debt, no 攻略/推荐/排名, transaction handed OUT. Rendered with GuidedPath
// (variant 'scenario'). This is explicitly NOT a pillar and NOT a destination —
// it is surfaced as a band on discovery/hub pages. See
// docs/plans/chi-he-wan-le-study-2026-11.md.
//
// Only the scene TITLE is localised here (13 langs); every step's title/summary
// comes from already-localised article data. Slugs are language-neutral — never
// translate a slug. To add a scene, append one entry pointing at existing masters.

import type { Locale } from './categories';
import type { GuidedStep } from './livingPath';

export interface Scenario {
  key: string;
  icon: string;
  title: Record<Locale, string>;
  steps: GuidedStep[];
}

export const SCENARIOS: Scenario[] = [
  {
    key: 'kopitiam',
    icon: '☕',
    title: {
      ms: 'Satu pagi di kopitiam',
      en: 'A morning in a kopitiam',
      zh: '老咖啡店的一个早晨',
      ta: 'ஒரு கொபிதியாம் காலை',
      ja: 'コピティアムの朝',
      ko: '코피티암에서의 아침',
      th: 'เช้าวันหนึ่งในร้านโกปี๊',
      vi: 'Một buổi sáng ở kopitiam',
      id: 'Sepagi di kopitiam',
      ar: 'صباح في مقهى كوبيتيام',
      hi: 'कोपितियाम में एक सुबह',
      es: 'Una mañana en un kopitiam',
      fr: 'Un matin dans un kopitiam',
    },
    steps: [
      { cat: 'food-lifestyle', slug: 'kopitiam-mamak-culture' },
      { cat: 'food-lifestyle', slug: 'kopi-teh-tarik-and-coffeeshop-drinks' },
      { cat: 'food-lifestyle', slug: 'hainanese-chicken-rice' },
    ],
  },
  {
    key: 'thaipusam',
    icon: '🪔',
    title: {
      ms: 'Mengalami Thaipusam',
      en: 'Experiencing Thaipusam',
      zh: '体验大宝森节',
      ta: 'தைப்பூசத்தை அனுபவித்தல்',
      ja: 'タイプーサムを体験する',
      ko: '타이푸삼 체험하기',
      th: 'สัมผัสเทศกาลไทปูซัม',
      vi: 'Trải nghiệm lễ Thaipusam',
      id: 'Mengalami Thaipusam',
      ar: 'تجربة ثايبوسام',
      hi: 'थाईपुसम का अनुभव',
      es: 'Vivir el Thaipusam',
      fr: 'Vivre le Thaipusam',
    },
    steps: [
      { cat: 'arts-culture', slug: 'thaipusam' },
      { cat: 'arts-culture', slug: 'hinduism-in-malaysia' },
      { cat: 'arts-culture', slug: 'chettiar-community' },
      { cat: 'arts-culture', slug: 'hindu-temple-architecture' },
    ],
  },
  {
    key: 'hawker',
    icon: '🍜',
    title: {
      ms: 'Kali pertama di pusat penjaja',
      en: 'Hawker-centre first-timer',
      zh: '第一次逛熟食中心',
      ta: 'முதல் முறை ஹாக்கர் மையத்தில்',
      ja: 'はじめてのホーカーセンター',
      ko: '처음 가보는 호커센터',
      th: 'ครั้งแรกในศูนย์อาหารหาบเร่',
      vi: 'Lần đầu đến khu hàng rong',
      id: 'Pertama kali ke pusat jajanan',
      ar: 'أول زيارة لمركز الباعة',
      hi: 'पहली बार हॉकर सेंटर में',
      es: 'Primera vez en un hawker centre',
      fr: 'Première fois dans un hawker centre',
    },
    steps: [
      { cat: 'food-lifestyle', slug: 'hawker-centres-and-food-courts' },
      { cat: 'food-lifestyle', slug: 'nasi-lemak' },
      { cat: 'food-lifestyle', slug: 'mee-goreng-mamak' },
      { cat: 'food-lifestyle', slug: 'halal-certification-in-malaysia' },
    ],
  },
  {
    key: 'cny',
    icon: '🧧',
    title: {
      ms: 'Tahun Baru Cina di Malaysia',
      en: 'A Chinese New Year in Malaysia',
      zh: '大马的农历新年',
      ta: 'மலேசியாவில் சீனப் புத்தாண்டு',
      ja: 'マレーシアの旧正月',
      ko: '말레이시아의 설날',
      th: 'ตรุษจีนในมาเลเซีย',
      vi: 'Tết Nguyên đán ở Malaysia',
      id: 'Tahun Baru Imlek di Malaysia',
      ar: 'رأس السنة الصينية في ماليزيا',
      hi: 'मलेशिया में चीनी नववर्ष',
      es: 'Un Año Nuevo Chino en Malasia',
      fr: 'Un Nouvel An chinois en Malaisie',
    },
    steps: [
      { cat: 'arts-culture', slug: 'chinese-new-year' },
      { cat: 'arts-culture', slug: 'chinese-dialects' },
      { cat: 'glossary', slug: 'open-house' },
      { cat: 'malaysia', slug: 'population-composition' },
    ],
  },
];
