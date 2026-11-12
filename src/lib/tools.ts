import type { Locale } from './categories';

// The Malaysia Tools Hub registry — interactive, client-side tools that sit on top
// of the knowledge base (see docs/plans/malaysia-tools-hub-plan.md). The /tools hub
// page and any "tools" surfaces read this one list, so adding a tool is a single
// entry here. `status: 'live'` tools render as working cards; 'soon' tools render
// as disabled "coming soon" cards so the roadmap is visible without dead links.

export interface Tool {
  id: string;
  href: string; // locale-agnostic; localePath() applied by the view. '' for 'soon'.
  icon: string;
  color: string;
  status: 'live' | 'soon';
  group: 'finance' | 'business' | 'employment' | 'daily';
  title: Record<Locale, string>;
  blurb: Record<Locale, string>;
}

const L = (
  ms: string, en: string, zh: string, ta: string, ja: string, ko: string,
  th: string, vi: string, id: string, ar: string, hi: string, es: string, fr: string,
): Record<Locale, string> => ({ ms, en, zh, ta, ja, ko, th, vi, id, ar, hi, es, fr });

export const TOOLS: Tool[] = [
  {
    id: 'income-tax-calculator',
    href: '/tools/income-tax-calculator',
    icon: '🧮',
    color: '#FFC000',
    status: 'live',
    group: 'finance',
    title: L(
      'Kalkulator Cukai Pendapatan', 'Income Tax Calculator', '所得税计算器',
      'வருமான வரி கணிப்பான்', '所得税計算機', '소득세 계산기', 'เครื่องคำนวณภาษีเงินได้',
      'Máy tính thuế thu nhập', 'Kalkulator Pajak Penghasilan', 'حاسبة ضريبة الدخل',
      'आयकर कैलकुलेटर', 'Calculadora de impuesto sobre la renta', "Calculateur d'impôt sur le revenu",
    ),
    blurb: L(
      'Anggarkan cukai individu anda (YA2025) — jalur, pelepasan dan rebat.',
      'Estimate your personal tax (YA2025) — bands, reliefs and rebates.',
      '估算你的个人所得税（2025课税年）——级距、减免与回扣。',
      'உங்கள் தனிநபர் வரியை மதிப்பிடுங்கள் (YA2025) — அடுக்குகள், நிவாரணங்கள், தள்ளுபடிகள்.',
      '個人所得税を試算（YA2025）— 税率帯・控除・リベート。',
      '개인 소득세 추정(YA2025) — 구간, 공제, 리베이트.',
      'ประเมินภาษีบุคคลธรรมดา (YA2025) — ขั้นบันได การลดหย่อน และเครดิตภาษี',
      'Ước tính thuế cá nhân (YA2025) — bậc thuế, miễn giảm và hoàn thuế.',
      'Perkirakan pajak pribadi Anda (YA2025) — lapisan, keringanan, dan rabat.',
      'قدِّر ضريبتك الشخصية (YA2025) — الشرائح والإعفاءات والخصومات.',
      'अपना व्यक्तिगत कर अनुमानित करें (YA2025) — स्लैब, छूट और रिबेट।',
      'Estima tu impuesto personal (YA2025): tramos, desgravaciones y rebajas.',
      'Estimez votre impôt personnel (YA2025) : tranches, abattements et réductions.',
    ),
  },
  {
    id: 'compliance-calendar',
    href: '/compliance-calendar',
    icon: '🗓️',
    color: '#38BDF8',
    status: 'live',
    group: 'business',
    title: L(
      'Kalendar Pematuhan', 'Compliance Calendar', '合规日历',
      'இணக்க நாட்காட்டி', 'コンプライアンス・カレンダー', '규정 준수 달력', 'ปฏิทินการปฏิบัติตามกฎ',
      'Lịch tuân thủ', 'Kalender Kepatuhan', 'تقويم الامتثال',
      'अनुपालन कैलेंडर', 'Calendario de cumplimiento', 'Calendrier de conformité',
    ),
    blurb: L(
      'Kewajipan berkanun syarikat sebagai tarikh akhir dari tarikh pemerbadanan.',
      "A company's statutory duties as dated deadlines from its incorporation date.",
      '从公司注册日起，将法定义务转为带日期的截止期限。',
      'நிறுவனத்தின் சட்டப்பூர்வ கடமைகள் — பதிவு தேதியிலிருந்து காலக்கெடுக்களாக.',
      '設立日から、会社の法定義務を期限日として表示。',
      '설립일 기준으로 회사의 법정 의무를 마감일로 표시.',
      'หน้าที่ตามกฎหมายของบริษัทเป็นกำหนดเส้นตายนับจากวันจดทะเบียน',
      'Nghĩa vụ luật định của công ty dưới dạng hạn chót tính từ ngày thành lập.',
      'Kewajiban hukum perusahaan sebagai tenggat bertanggal sejak tanggal pendirian.',
      'الواجبات القانونية للشركة كمواعيد نهائية مؤرخة من تاريخ التأسيس.',
      'कंपनी के वैधानिक कर्तव्य — निगमन तिथि से समयसीमा के रूप में।',
      'Las obligaciones legales de una empresa como plazos fechados desde su constitución.',
      "Les obligations légales d'une société sous forme d'échéances datées depuis sa constitution.",
    ),
  },
  // Roadmap (docs/plans/malaysia-tools-hub-plan.md) — rendered as "coming soon".
  {
    id: 'salary-take-home', href: '/tools/salary-take-home', icon: '💷', color: '#4ADE80', status: 'live', group: 'employment',
    title: L('Kalkulator Gaji Bersih', 'Salary Take-Home', '实得工资计算器', 'சம்பள கணிப்பான்', '手取り給与計算機', '실수령 급여 계산기', 'เครื่องคำนวณเงินเดือนสุทธิ', 'Lương thực nhận', 'Kalkulator Gaji Bersih', 'حاسبة صافي الراتب', 'नेट वेतन कैलकुलेटर', 'Salario neto', 'Salaire net'),
    blurb: L('KWSP + PERKESO + SIP + PCB.', 'EPF + SOCSO + EIS + PCB.', '公积金＋社险＋就业保险＋预扣税。', 'EPF + SOCSO + EIS + PCB.', 'EPF + SOCSO + EIS + PCB。', 'EPF + SOCSO + EIS + PCB.', 'EPF + SOCSO + EIS + PCB', 'EPF + SOCSO + EIS + PCB.', 'EPF + SOCSO + EIS + PCB.', 'EPF + SOCSO + EIS + PCB.', 'EPF + SOCSO + EIS + PCB।', 'EPF + SOCSO + EIS + PCB.', 'EPF + SOCSO + EIS + PCB.'),
  },
  {
    id: 'home-financing', href: '', icon: '🏠', color: '#F97316', status: 'soon', group: 'finance',
    title: L('Kalkulator Pembiayaan Rumah', 'Home Financing', '房屋贷款计算器', 'வீட்டு நிதி கணிப்பான்', '住宅ローン計算機', '주택 금융 계산기', 'เครื่องคำนวณสินเชื่อบ้าน', 'Tài chính mua nhà', 'Pembiayaan Rumah', 'حاسبة تمويل المنزل', 'गृह वित्त कैलकुलेटर', 'Financiación de vivienda', 'Financement immobilier'),
    blurb: L('Ansuran + duti setem, yuran guaman, MOT.', 'Instalment + stamp duty, legal fees, MOT.', '月供＋印花税、律师费、业权转让。', 'தவணை + முத்திரை வரி, சட்டக் கட்டணம், MOT.', '返済額＋印紙税・弁護士費用・MOT。', '상환금 + 인지세, 법무 비용, MOT.', 'ค่างวด + อากรแสตมป์ ค่าทนาย MOT', 'Trả góp + thuế tem, phí pháp lý, MOT.', 'Angsuran + bea meterai, biaya hukum, MOT.', 'القسط + رسوم الدمغة والأتعاب القانونية وMOT.', 'किस्त + स्टांप शुल्क, कानूनी शुल्क, MOT।', 'Cuota + impuesto de timbre, honorarios legales, MOT.', 'Mensualité + droit de timbre, frais juridiques, MOT.'),
  },
  {
    id: 'rpgt-calculator', href: '', icon: '📈', color: '#A78BFA', status: 'soon', group: 'finance',
    title: L('Kalkulator CKHT (RPGT)', 'RPGT Calculator', '产业盈利税计算器', 'RPGT கணிப்பான்', 'RPGT 計算機', 'RPGT 계산기', 'เครื่องคำนวณ RPGT', 'Máy tính RPGT', 'Kalkulator RPGT', 'حاسبة RPGT', 'RPGT कैलकुलेटर', 'Calculadora RPGT', 'Calculateur RPGT'),
    blurb: L('Cukai keuntungan pelupusan mengikut tempoh pegangan.', 'Disposal-gain tax by holding period.', '按持有期计算处置收益税。', 'வைத்திருந்த காலத்தின்படி விற்பனை ஆதாய வரி.', '保有期間に応じた譲渡益税。', '보유 기간별 처분 이익세.', 'ภาษีกำไรจากการขายตามระยะเวลาถือครอง', 'Thuế lãi chuyển nhượng theo thời gian nắm giữ.', 'Pajak keuntungan pelepasan menurut masa kepemilikan.', 'ضريبة ربح التصرف حسب مدة الحيازة.', 'होल्डिंग अवधि के अनुसार निपटान-लाभ कर।', 'Impuesto sobre la ganancia por periodo de tenencia.', 'Impôt sur la plus-value selon la durée de détention.'),
  },
  {
    id: 'stamp-duty-calculator', href: '', icon: '📜', color: '#22D3EE', status: 'soon', group: 'finance',
    title: L('Kalkulator Duti Setem', 'Stamp Duty Calculator', '印花税计算器', 'முத்திரை வரி கணிப்பான்', '印紙税計算機', '인지세 계산기', 'เครื่องคำนวณอากรแสตมป์', 'Máy tính thuế tem', 'Kalkulator Bea Meterai', 'حاسبة رسوم الدمغة', 'स्टांप शुल्क कैलकुलेटर', 'Calculadora de impuesto de timbre', 'Calculateur de droit de timbre'),
    blurb: L('Perjanjian sewa, SPJB dan pindah milik saham.', 'Tenancy, SPA and share transfer.', '租约、买卖合约与股份转让。', 'வாடகை, SPA, பங்கு பரிமாற்றம்.', '賃貸借・SPA・株式譲渡。', '임대차, SPA, 주식 양도.', 'สัญญาเช่า SPA และโอนหุ้น', 'Hợp đồng thuê, SPA và chuyển nhượng cổ phần.', 'Sewa, SPA, dan pengalihan saham.', 'الإيجار وSPA ونقل الأسهم.', 'किरायेदारी, SPA और शेयर हस्तांतरण।', 'Arrendamiento, SPA y transferencia de acciones.', 'Bail, SPA et transfert d’actions.'),
  },
  {
    id: 'car-loan-calculator', href: '', icon: '🚗', color: '#F43F5E', status: 'soon', group: 'daily',
    title: L('Kalkulator Pinjaman Kereta', 'Car Loan Calculator', '车贷计算器', 'கார் கடன் கணிப்பான்', '自動車ローン計算機', '자동차 대출 계산기', 'เครื่องคำนวณสินเชื่อรถ', 'Máy tính vay mua xe', 'Kalkulator Pinjaman Mobil', 'حاسبة قرض السيارة', 'कार लोन कैलकुलेटर', 'Calculadora de préstamo de coche', 'Calculateur de prêt auto'),
    blurb: L('Sewa beli kadar rata — cara Malaysia.', 'Flat-rate hire purchase — the Malaysian way.', '统一利率分期——马来西亚算法。', 'நிலையான விகித வாடகை கொள்முதல் — மலேசிய முறை.', '定率ハイヤーパーチェス — マレーシア方式。', '정액 할부 — 말레이시아 방식.', 'เช่าซื้ออัตราคงที่ — แบบมาเลเซีย', 'Trả góp lãi suất phẳng — kiểu Malaysia.', 'Sewa beli suku bunga rata — cara Malaysia.', 'الشراء بالتقسيط بمعدل ثابت — بالطريقة الماليزية.', 'फ्लैट-दर हायर परचेज़ — मलेशियाई तरीका।', 'Compra a plazos con tasa fija, al estilo de Malasia.', 'Location-vente à taux fixe — à la malaisienne.'),
  },
  {
    id: 'zakat-calculator', href: '', icon: '🌙', color: '#34D399', status: 'soon', group: 'daily',
    title: L('Kalkulator Zakat', 'Zakat Calculator', '天课计算器', 'ஜகாத் கணிப்பான்', 'ザカート計算機', '자카트 계산기', 'เครื่องคำนวณซะกาต', 'Máy tính Zakat', 'Kalkulator Zakat', 'حاسبة الزكاة', 'ज़कात कैलकुलेटर', 'Calculadora de Zakat', 'Calculateur de Zakat'),
    blurb: L('Zakat pendapatan, simpanan dan perniagaan.', 'Zakat on income, savings and business.', '收入、储蓄与营业天课。', 'வருமானம், சேமிப்பு, வணிக ஜகாத்.', '所得・貯蓄・事業のザカート。', '소득, 저축, 사업 자카트.', 'ซะกาตจากรายได้ เงินออม และธุรกิจ', 'Zakat trên thu nhập, tiết kiệm và kinh doanh.', 'Zakat atas penghasilan, tabungan, dan bisnis.', 'زكاة الدخل والمدخرات والأعمال.', 'आय, बचत और व्यवसाय पर ज़कात।', 'Zakat sobre ingresos, ahorros y negocio.', 'Zakat sur le revenu, l’épargne et l’entreprise.'),
  },
  {
    id: 'sst-threshold-checker', href: '', icon: '🧾', color: '#6366F1', status: 'soon', group: 'business',
    title: L('Penyemak Ambang SST', 'SST Threshold Checker', 'SST 门槛检查器', 'SST வரம்பு சரிபார்ப்பு', 'SST 基準チェッカー', 'SST 기준 확인기', 'ตัวตรวจเกณฑ์ SST', 'Kiểm tra ngưỡng SST', 'Pemeriksa Ambang SST', 'فاحص عتبة SST', 'SST सीमा जाँचकर्ता', 'Verificador de umbral SST', 'Vérificateur de seuil SST'),
    blurb: L('Perlukah anda berdaftar untuk SST?', 'Do you need to register for SST?', '你是否需要注册 SST？', 'நீங்கள் SST-க்கு பதிவு செய்ய வேண்டுமா?', 'SST 登録が必要か。', 'SST 등록이 필요한가요?', 'คุณต้องจดทะเบียน SST หรือไม่', 'Bạn có cần đăng ký SST không?', 'Apakah Anda perlu mendaftar SST?', 'هل تحتاج إلى التسجيل في SST؟', 'क्या आपको SST पंजीकरण चाहिए?', '¿Necesitas registrarte para el SST?', 'Devez-vous vous enregistrer à la SST ?'),
  },
];

const by = (locale: Locale) => (t: Tool) => ({ ...t, label: t.title[locale], desc: t.blurb[locale] });

export function toolsFor(locale: Locale) {
  return TOOLS.map(by(locale));
}
export function liveTools(locale: Locale) {
  return toolsFor(locale).filter((t) => t.status === 'live');
}

// --- Article → tool links -------------------------------------------------
// A high-intent article points its reader at the one live tool that turns the
// topic into an action (a tax article → the tax calculator). Keyed by the
// article's "category/slug" (ArticleView builds the same key). Freshness-neutral:
// the card is rendered by the template, not the markdown body, so adding a
// mapping never changes an article's content hash or re-stales a translation —
// and every language lights up at once via the tool's own title/blurb. Only LIVE
// tools belong here; extend as tools ship.
const ARTICLE_TOOL: Record<string, string> = {
  // Personal income tax / PCB (annual) → Income Tax Calculator
  'taxation/income-tax-in-malaysia': 'income-tax-calculator',
  'taxation/personal-tax-rates': 'income-tax-calculator',
  'taxation/personal-tax-reliefs': 'income-tax-calculator',
  'taxation/pcb-monthly-tax-deduction': 'income-tax-calculator',
  'taxation/which-tax-form': 'income-tax-calculator',
  'taxation/individual-tax-residence': 'income-tax-calculator',
  'taxation/dividend-tax-malaysia': 'income-tax-calculator',
  'money-daily-life/income-tax-individuals': 'income-tax-calculator',
  // Payroll / take-home pay → Salary Take-Home
  'employment/payroll-rates-deadlines-malaysia': 'salary-take-home',
  'employment/pcb-mtd-malaysia': 'salary-take-home',
  'employment/epf-socso-guide': 'salary-take-home',
  'employment/socso-eis-employer-guide': 'salary-take-home',
  'employment/minimum-wage-malaysia': 'salary-take-home',
  'employment/payroll-compliance-malaysia': 'salary-take-home',
  'employment/new-hire-statutory-checklist': 'salary-take-home',
  'employment/employees-provident-fund-act-1991': 'salary-take-home',
  'money-daily-life/epf-socso-employees': 'salary-take-home',
  // Statutory deadlines → Compliance Calendar
  'company-secretary/sdn-bhd-filing-calendar': 'compliance-calendar',
  'company-secretary/annual-return': 'compliance-calendar',
  'company-secretary/financial-statements-lodgement': 'compliance-calendar',
  'taxation/company-tax-calendar': 'compliance-calendar',
  'taxation/form-c-and-cp204': 'compliance-calendar',
  'business/sdn-bhd-first-year-compliance': 'compliance-calendar',
};

/** The live tool to surface on an article, or null. Key = "category/slug". */
export function toolForArticle(category: string, slug: string, locale: Locale) {
  const id = ARTICLE_TOOL[`${category}/${slug}`];
  if (!id) return null;
  const t = TOOLS.find((x) => x.id === id && x.status === 'live');
  return t ? by(locale)(t) : null;
}
