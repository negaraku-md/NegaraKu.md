import type { Locale, Pillar } from './categories';
import { BRAND_1COMPANY, BRAND_1FINANCING } from './site';

// Sponsorship as DATA, not markup.
//
// It used to be a 1company block hardcoded inside ArticleView and shown by a
// pillar check. That made it impossible to vary per article, to disclose
// consistently, or to answer "who sponsored what" — the data model calls for an
// `Article Sponsored` entity, so here it is. SponsorCTA.astro renders it.
//
// Integrity: sensitive (3R+1) content is NEVER sponsored — civic content must not
// carry a commercial ask (enforced in resolveSponsor). The sponsor block is
// visually distinct and links carry rel="sponsored"; the display name is the
// sponsor's domain so the destination is clear.

export interface Sponsor {
  id: string;
  /** Display name — the sponsor's domain (e.g. `1company.com`). Lowercase. */
  name: string;
  url: string;
  heading: Record<Locale, string>;
  blurb: Record<Locale, string>; // rendered after the bold name; keep leading space
  cta: Record<Locale, string>;
}

export const SPONSORS: Record<string, Sponsor> = {
  '1company': {
    id: '1company',
    name: '1company.com',
    url: BRAND_1COMPANY,
    heading: {
      ms: 'Perlukan khidmat nasihat profesional?',
      en: 'Need professional advisory?',
      zh: '需要专业咨询服务？',
      ta: 'தொழில்முறை ஆலோசனை தேவையா?',
      ja: '専門的なアドバイザリーが必要ですか？',
      ko: '전문 자문이 필요하신가요?',
      th: 'ต้องการบริการที่ปรึกษามืออาชีพหรือไม่?',
      vi: 'Cần tư vấn chuyên nghiệp?',
      id: 'Butuh layanan advisori profesional?',
      ar: 'هل تحتاج إلى استشارة مهنية؟',
      hi: 'पेशेवर सलाहकार सेवा चाहिए?',
      es: '¿Necesita asesoría profesional?',
      fr: 'Besoin de conseil professionnel ?',
    },
    blurb: {
      ms: ' menyediakan perkhidmatan penubuhan syarikat, setiausaha syarikat, perakaunan, audit dan cukai di Malaysia.',
      en: ' provides incorporation, company secretarial, accounting, audit and tax services in Malaysia.',
      zh: ' 提供马来西亚公司注册、公司秘书、会计、审计与税务服务。',
      ta: ' மலேசியாவில் நிறுவனப் பதிவு, நிறுவனச் செயலாளர், கணக்கியல், தணிக்கை மற்றும் வரி சேவைகளை வழங்குகிறது.',
      ja: ' はマレーシアにおける会社設立、カンパニーセクレタリー、会計、監査、税務のサービスを提供しています。',
      ko: '은 말레이시아에서 회사 설립, 회사 비서, 회계, 감사, 세무 서비스를 제공합니다.',
      th: ' ให้บริการจดทะเบียนบริษัท เลขานุการบริษัท บัญชี ตรวจสอบบัญชี และภาษีในมาเลเซีย.',
      vi: ' cung cấp dịch vụ thành lập công ty, thư ký công ty, kế toán, kiểm toán và thuế tại Malaysia.',
      id: ' menyediakan layanan pendirian perusahaan, sekretaris perusahaan, akuntansi, audit, dan pajak di Malaysia.',
      ar: ' يقدّم خدمات تأسيس الشركات وأمانة سر الشركات والمحاسبة والتدقيق والضرائب في ماليزيا.',
      hi: ' मलेशिया में कंपनी निगमन, कंपनी सचिवीय, लेखांकन, लेखापरीक्षा और कर सेवाएँ प्रदान करता है।',
      es: ' ofrece servicios de constitución de empresas, secretaría de empresa, contabilidad, auditoría y fiscalidad en Malasia.',
      fr: " propose des services de création de société, de secrétariat juridique, de comptabilité, d'audit et de fiscalité en Malaisie.",
    },
    cta: { ms: 'Ketahui lebih lanjut', en: 'Learn more', zh: '了解更多', ta: 'மேலும் அறிக', ja: '詳しく見る', ko: '자세히 보기', th: 'เรียนรู้เพิ่มเติม', vi: 'Tìm hiểu thêm', id: 'Pelajari lebih lanjut', ar: 'اعرف المزيد', hi: 'और जानें', es: 'Más información', fr: 'En savoir plus' },
  },
  '1financing': {
    id: '1financing',
    name: '1financing.com',
    url: BRAND_1FINANCING,
    heading: {
      ms: 'Perlukan pembiayaan?',
      en: 'Need financing?',
      zh: '需要融资？',
      ta: 'நிதி தேவையா?',
      ja: '資金調達が必要ですか？',
      ko: '자금이 필요하신가요?',
      th: 'ต้องการเงินทุนหรือไม่?',
      vi: 'Cần tài trợ vốn?',
      id: 'Butuh pembiayaan?',
      ar: 'هل تحتاج إلى تمويل؟',
      hi: 'वित्तपोषण चाहिए?',
      es: '¿Necesita financiación?',
      fr: 'Besoin de financement ?',
    },
    blurb: {
      ms: ' menghubungkan perniagaan dan individu Malaysia dengan pinjaman, pembiayaan dagangan, pembiayaan hartanah dan dana ekuiti.',
      en: ' connects Malaysian businesses and individuals to loans, trade finance, property financing and equity funding.',
      zh: ' 为马来西亚的企业和个人对接贷款、贸易融资、房地产融资与股权资金。',
      ta: ' மலேசிய வணிகங்கள் மற்றும் தனிநபர்களை கடன், வர்த்தக நிதி, சொத்து நிதி மற்றும் பங்கு நிதியுடன் இணைக்கிறது.',
      ja: ' はマレーシアの企業や個人を融資・貿易金融・不動産金融・エクイティ資金につなげます。',
      ko: '은 말레이시아의 기업과 개인을 대출, 무역 금융, 부동산 금융, 지분 자금과 연결합니다.',
      th: ' เชื่อมโยงธุรกิจและบุคคลในมาเลเซียกับสินเชื่อ การเงินการค้า การเงินอสังหาริมทรัพย์ และเงินทุนแบบตราสารทุน.',
      vi: ' kết nối doanh nghiệp và cá nhân Malaysia với các khoản vay, tài trợ thương mại, tài trợ bất động sản và vốn cổ phần.',
      id: ' menghubungkan bisnis dan individu Malaysia dengan pinjaman, pembiayaan perdagangan, pembiayaan properti, dan pendanaan ekuitas.',
      ar: ' يربط الشركات والأفراد في ماليزيا بالقروض وتمويل التجارة وتمويل العقارات وتمويل الأسهم.',
      hi: ' मलेशियाई व्यवसायों और व्यक्तियों को ऋण, व्यापार वित्त, संपत्ति वित्त और इक्विटी फंडिंग से जोड़ता है।',
      es: ' conecta a empresas y particulares de Malasia con préstamos, financiación comercial, financiación inmobiliaria y capital.',
      fr: ' met en relation les entreprises et les particuliers malaisiens avec des prêts, du financement commercial, du financement immobilier et des fonds propres.',
    },
    cta: { ms: 'Ketahui lebih lanjut', en: 'Learn more', zh: '了解更多', ta: 'மேலும் அறிக', ja: '詳しく見る', ko: '자세히 보기', th: 'เรียนรู้เพิ่มเติม', vi: 'Tìm hiểu thêm', id: 'Pelajari lebih lanjut', ar: 'اعرف المزيد', hi: 'और जानें', es: 'Más información', fr: 'En savoir plus' },
  },
};

/** Default sponsor per pillar. */
export const PILLAR_SPONSOR: Partial<Record<Pillar, string>> = {
  'doing-business': '1company',
};

// Category/topic routing (covers articles outside the doing-business pillar).
const COMPANY_CATEGORIES = new Set(['company-secretary', 'accounting', 'audit', 'taxation', 'business', 'finance']);
const FINANCING_CATEGORIES = new Set(['property', 'money-daily-life']);
const FINANCING_SLUGS = new Set([
  'sme-financing-malaysia', 'equity-crowdfunding-p2p-malaysia', 'foreign-currency-borrowing-malaysia',
  'business-loan', 'business-loans-malaysia', 'working-capital', 'invoice-financing', 'trade-financing',
  'trade-finance', 'startup-funding', 'venture-capital-malaysia', 'microfinance-malaysia',
]);

/**
 * Resolve the sponsor for an article. Precedence: explicit `sponsor: "none"` opts
 * out; an explicit sponsor id wins; then a financing-specific topic -> 1financing;
 * then company categories / the pillar default -> 1company. Sensitive (3R+1)
 * content is NEVER sponsored.
 */
export function resolveSponsor(
  articleSponsor: string | null | undefined,
  pillar: Pillar | undefined,
  sensitive: boolean,
  category?: string,
  slug?: string,
): Sponsor | undefined {
  if (sensitive) return undefined;
  if (articleSponsor === 'none') return undefined;
  if (articleSponsor) return SPONSORS[articleSponsor];
  if (category && ((slug && FINANCING_SLUGS.has(slug)) || FINANCING_CATEGORIES.has(category))) return SPONSORS['1financing'];
  if (category && COMPANY_CATEGORIES.has(category)) return SPONSORS['1company'];
  const id = pillar ? PILLAR_SPONSOR[pillar] : undefined;
  return id ? SPONSORS[id] : undefined;
}

/** UTM-tagged destination for a resolved sponsor (per-article attribution). */
export function sponsorUrl(sponsor: Sponsor, category: string, slug: string): string {
  const q = new URLSearchParams({
    utm_source: 'negaraku.md',
    utm_medium: 'article-cta',
    utm_campaign: sponsor.id,
    utm_content: `${category}/${slug}`,
  });
  const sep = sponsor.url.includes('?') ? '&' : '/?';
  return `${sponsor.url}${sep}${q.toString()}`;
}
