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
    id: 'home-financing', href: '/tools/home-financing', icon: '🏠', color: '#F97316', status: 'live', group: 'finance',
    title: L('Kalkulator Pembiayaan Rumah', 'Home Financing', '房屋贷款计算器', 'வீட்டு நிதி கணிப்பான்', '住宅ローン計算機', '주택 금융 계산기', 'เครื่องคำนวณสินเชื่อบ้าน', 'Tài chính mua nhà', 'Pembiayaan Rumah', 'حاسبة تمويل المنزل', 'गृह वित्त कैलकुलेटर', 'Financiación de vivienda', 'Financement immobilier'),
    blurb: L('Ansuran + duti setem, yuran guaman, MOT.', 'Instalment + stamp duty, legal fees, MOT.', '月供＋印花税、律师费、业权转让。', 'தவணை + முத்திரை வரி, சட்டக் கட்டணம், MOT.', '返済額＋印紙税・弁護士費用・MOT。', '상환금 + 인지세, 법무 비용, MOT.', 'ค่างวด + อากรแสตมป์ ค่าทนาย MOT', 'Trả góp + thuế tem, phí pháp lý, MOT.', 'Angsuran + bea meterai, biaya hukum, MOT.', 'القسط + رسوم الدمغة والأتعاب القانونية وMOT.', 'किस्त + स्टांप शुल्क, कानूनी शुल्क, MOT।', 'Cuota + impuesto de timbre, honorarios legales, MOT.', 'Mensualité + droit de timbre, frais juridiques, MOT.'),
  },
  {
    id: 'rpgt-calculator', href: '/tools/rpgt-calculator', icon: '📈', color: '#A78BFA', status: 'live', group: 'finance',
    title: L('Kalkulator CKHT (RPGT)', 'RPGT Calculator', '产业盈利税计算器', 'RPGT கணிப்பான்', 'RPGT 計算機', 'RPGT 계산기', 'เครื่องคำนวณ RPGT', 'Máy tính RPGT', 'Kalkulator RPGT', 'حاسبة RPGT', 'RPGT कैलकुलेटर', 'Calculadora RPGT', 'Calculateur RPGT'),
    blurb: L('Cukai keuntungan pelupusan mengikut tempoh pegangan.', 'Disposal-gain tax by holding period.', '按持有期计算处置收益税。', 'வைத்திருந்த காலத்தின்படி விற்பனை ஆதாய வரி.', '保有期間に応じた譲渡益税。', '보유 기간별 처분 이익세.', 'ภาษีกำไรจากการขายตามระยะเวลาถือครอง', 'Thuế lãi chuyển nhượng theo thời gian nắm giữ.', 'Pajak keuntungan pelepasan menurut masa kepemilikan.', 'ضريبة ربح التصرف حسب مدة الحيازة.', 'होल्डिंग अवधि के अनुसार निपटान-लाभ कर।', 'Impuesto sobre la ganancia por periodo de tenencia.', 'Impôt sur la plus-value selon la durée de détention.'),
  },
  {
    id: 'stamp-duty-calculator', href: '/tools/stamp-duty-calculator', icon: '📜', color: '#22D3EE', status: 'live', group: 'finance',
    title: L('Kalkulator Duti Setem', 'Stamp Duty Calculator', '印花税计算器', 'முத்திரை வரி கணிப்பான்', '印紙税計算機', '인지세 계산기', 'เครื่องคำนวณอากรแสตมป์', 'Máy tính thuế tem', 'Kalkulator Bea Meterai', 'حاسبة رسوم الدمغة', 'स्टांप शुल्क कैलकुलेटर', 'Calculadora de impuesto de timbre', 'Calculateur de droit de timbre'),
    blurb: L('Pindah milik hartanah, pinjaman dan saham.', 'Property, loan and share transfer.', '产业转让、贷款与股份转让。', 'சொத்து, கடன், பங்கு பரிமாற்றம்.', '不動産・ローン・株式の譲渡。', '부동산, 대출, 주식 양도.', 'โอนทรัพย์สิน เงินกู้ และหุ้น', 'Chuyển nhượng bất động sản, khoản vay và cổ phần.', 'Pengalihan properti, pinjaman, dan saham.', 'نقل العقارات والقروض والأسهم.', 'संपत्ति, ऋण और शेयर हस्तांतरण।', 'Transferencia de propiedad, préstamo y acciones.', 'Transfert de propriété, de prêt et d’actions.'),
  },
  {
    id: 'car-loan-calculator', href: '/tools/car-loan-calculator', icon: '🚗', color: '#F43F5E', status: 'live', group: 'daily',
    title: L('Kalkulator Pinjaman Kereta', 'Car Loan Calculator', '车贷计算器', 'கார் கடன் கணிப்பான்', '自動車ローン計算機', '자동차 대출 계산기', 'เครื่องคำนวณสินเชื่อรถ', 'Máy tính vay mua xe', 'Kalkulator Pinjaman Mobil', 'حاسبة قرض السيارة', 'कार लोन कैलकुलेटर', 'Calculadora de préstamo de coche', 'Calculateur de prêt auto'),
    blurb: L('Sewa beli kadar rata — cara Malaysia.', 'Flat-rate hire purchase — the Malaysian way.', '统一利率分期——马来西亚算法。', 'நிலையான விகித வாடகை கொள்முதல் — மலேசிய முறை.', '定率ハイヤーパーチェス — マレーシア方式。', '정액 할부 — 말레이시아 방식.', 'เช่าซื้ออัตราคงที่ — แบบมาเลเซีย', 'Trả góp lãi suất phẳng — kiểu Malaysia.', 'Sewa beli suku bunga rata — cara Malaysia.', 'الشراء بالتقسيط بمعدل ثابت — بالطريقة الماليزية.', 'फ्लैट-दर हायर परचेज़ — मलेशियाई तरीका।', 'Compra a plazos con tasa fija, al estilo de Malasia.', 'Location-vente à taux fixe — à la malaisienne.'),
  },
  {
    id: 'zakat-calculator', href: '/tools/zakat-calculator', icon: '🌙', color: '#34D399', status: 'live', group: 'daily',
    title: L('Kalkulator Zakat', 'Zakat Calculator', '天课计算器', 'ஜகாத் கணிப்பான்', 'ザカート計算機', '자카트 계산기', 'เครื่องคำนวณซะกาต', 'Máy tính Zakat', 'Kalkulator Zakat', 'حاسبة الزكاة', 'ज़कात कैलकुलेटर', 'Calculadora de Zakat', 'Calculateur de Zakat'),
    blurb: L('Zakat pendapatan, simpanan dan perniagaan.', 'Zakat on income, savings and business.', '收入、储蓄与营业天课。', 'வருமானம், சேமிப்பு, வணிக ஜகாத்.', '所得・貯蓄・事業のザカート。', '소득, 저축, 사업 자카트.', 'ซะกาตจากรายได้ เงินออม และธุรกิจ', 'Zakat trên thu nhập, tiết kiệm và kinh doanh.', 'Zakat atas penghasilan, tabungan, dan bisnis.', 'زكاة الدخل والمدخرات والأعمال.', 'आय, बचत और व्यवसाय पर ज़कात।', 'Zakat sobre ingresos, ahorros y negocio.', 'Zakat sur le revenu, l’épargne et l’entreprise.'),
  },
  {
    id: 'sst-threshold-checker', href: '/tools/sst-threshold-checker', icon: '🧾', color: '#6366F1', status: 'live', group: 'business',
    title: L('Penyemak Ambang SST', 'SST Threshold Checker', 'SST 门槛检查器', 'SST வரம்பு சரிபார்ப்பு', 'SST 基準チェッカー', 'SST 기준 확인기', 'ตัวตรวจเกณฑ์ SST', 'Kiểm tra ngưỡng SST', 'Pemeriksa Ambang SST', 'فاحص عتبة SST', 'SST सीमा जाँचकर्ता', 'Verificador de umbral SST', 'Vérificateur de seuil SST'),
    blurb: L('Perlukah anda berdaftar untuk SST?', 'Do you need to register for SST?', '你是否需要注册 SST？', 'நீங்கள் SST-க்கு பதிவு செய்ய வேண்டுமா?', 'SST 登録が必要か。', 'SST 등록이 필요한가요?', 'คุณต้องจดทะเบียน SST หรือไม่', 'Bạn có cần đăng ký SST không?', 'Apakah Anda perlu mendaftar SST?', 'هل تحتاج إلى التسجيل في SST؟', 'क्या आपको SST पंजीकरण चाहिए?', '¿Necesitas registrarte para el SST?', 'Devez-vous vous enregistrer à la SST ?'),
  },
  {
    id: 'epf-retirement', href: '/tools/epf-retirement', icon: '🏦', color: '#FBBF24', status: 'live', group: 'finance',
    title: L('Unjuran Persaraan KWSP', 'EPF Retirement Projection', '公积金退休预测', 'EPF ஓய்வூதியக் கணிப்பு', 'EPF 退職予測', 'EPF 은퇴 전망', 'การคาดการณ์เกษียณ EPF', 'Dự phóng hưu trí EPF', 'Proyeksi Pensiun KWSP', 'توقّع تقاعد EPF', 'EPF सेवानिवृत्ति प्रक्षेपण', 'Proyección de jubilación EPF', 'Projection de retraite EPF'),
    blurb: L('Unjurkan simpanan KWSP anda hingga umur 60.', 'Project your EPF savings to age 60.', '预测你到60岁的公积金储蓄。', '60 வயது வரை உங்கள் EPF சேமிப்பைக் கணியுங்கள்.', '60歳までのEPF積立を試算。', '60세까지의 EPF 저축을 예측하세요.', 'คาดการณ์เงินออม EPF ของคุณถึงอายุ 60', 'Dự phóng tiết kiệm EPF đến tuổi 60.', 'Proyeksikan tabungan KWSP Anda hingga usia 60.', 'توقّع مدخرات EPF حتى سن 60.', '60 वर्ष तक अपनी EPF बचत का प्रक्षेपण करें।', 'Proyecta tus ahorros EPF hasta los 60 años.', 'Projetez votre épargne EPF jusqu’à 60 ans.'),
  },
  {
    id: 'public-holidays', href: '/tools/public-holidays', icon: '📅', color: '#60A5FA', status: 'live', group: 'daily',
    title: L('Cuti Umum Malaysia', 'Malaysia Public Holidays', '马来西亚公共假期', 'மலேசிய பொது விடுமுறைகள்', 'マレーシアの祝日', '말레이시아 공휴일', 'วันหยุดราชการมาเลเซีย', 'Ngày lễ Malaysia', 'Hari Libur Malaysia', 'العطل الرسمية في ماليزيا', 'मलेशिया सार्वजनिक अवकाश', 'Días festivos de Malasia', 'Jours fériés en Malaisie'),
    blurb: L('Cuti ikut negeri + pencari hujung minggu panjang.', 'Holidays by state + long-weekend finder.', '按州属的假期＋长周末查找。', 'மாநில விடுமுறைகள் + நீண்ட வார இறுதி தேடல்.', '州別の祝日＋連休ファインダー。', '주별 공휴일 + 연휴 찾기.', 'วันหยุดตามรัฐ + ตัวค้นหาวันหยุดยาว', 'Ngày lễ theo bang + tìm kỳ nghỉ dài.', 'Libur per negeri + pencari akhir pekan panjang.', 'العطل حسب الولاية + باحث عطلة نهاية الأسبوع الطويلة.', 'राज्यवार अवकाश + लंबा सप्ताहांत खोजक।', 'Festivos por estado + buscador de puentes.', 'Jours fériés par État + recherche de ponts.'),
  },
  {
    id: 'road-tax-calculator', href: '/tools/road-tax-calculator', icon: '🚙', color: '#F59E0B', status: 'live', group: 'daily',
    title: L('Kalkulator Cukai Jalan', 'Road Tax Calculator', '路税计算器', 'சாலை வரி கணிப்பான்', '道路税計算機', '도로세 계산기', 'เครื่องคำนวณภาษีถนน', 'Máy tính thuế đường bộ', 'Kalkulator Pajak Jalan', 'حاسبة ضريبة الطريق', 'रोड टैक्स कैलकुलेटर', 'Calculadora de impuesto de circulación', 'Calculateur de taxe routière'),
    blurb: L('Saloon persendirian Semenanjung, ikut cc enjin.', 'Private saloon, Peninsular, by engine cc.', '半岛私人轿车，按引擎 cc。', 'சொந்த சலூன், தீபகற்பம், இன்ஜின் cc வாரியாக.', '半島の自家用セダン、排気量別。', '반도 자가용 세단, 배기량별.', 'รถเก๋งส่วนบุคคล คาบสมุทร ตาม cc', 'Xe saloon cá nhân, Bán đảo, theo cc.', 'Sedan pribadi, Semenanjung, per cc.', 'سيدان خاص، شبه الجزيرة، حسب سعة المحرك.', 'निजी सैलून, प्रायद्वीप, इंजन cc अनुसार।', 'Sedán privado, Península, por cc.', 'Berline privée, Péninsule, par cylindrée.'),
  },
  {
    id: 'corporate-tax-estimator', href: '/tools/corporate-tax-estimator', icon: '🏛️', color: '#818CF8', status: 'live', group: 'business',
    title: L('Anggaran Cukai Syarikat', 'Corporate Tax Estimator', '企业税估算器', 'நிறுவன வரி மதிப்பீடு', '法人税計算機', '법인세 추정기', 'เครื่องประเมินภาษีนิติบุคคล', 'Ước tính thuế doanh nghiệp', 'Estimasi Pajak Perusahaan', 'تقدير ضريبة الشركات', 'कॉर्पोरेट कर अनुमानक', 'Estimador de impuesto de sociedades', 'Estimateur d’impôt des sociétés'),
    blurb: L('Jalur PKS 15/17/24% + kelayakan.', 'SME 15/17/24% bands + eligibility.', '中小企业 15/17/24% 级距＋资格。', 'SME 15/17/24% அடுக்குகள் + தகுதி.', '中小企業 15/17/24% + 適格性。', '중소기업 15/17/24% 구간 + 자격.', 'ขั้น SME 15/17/24% + คุณสมบัติ', 'Bậc SME 15/17/24% + điều kiện.', 'Lapisan UKM 15/17/24% + kelayakan.', 'شرائح SME 15/17/24% + الأهلية.', 'SME 15/17/24% + पात्रता।', 'Tramos pyme 15/17/24% + elegibilidad.', 'Tranches PME 15/17/24% + éligibilité.'),
  },
  {
    id: 'overtime-calculator', href: '/tools/overtime-calculator', icon: '⏱️', color: '#2DD4BF', status: 'live', group: 'employment',
    title: L('Kalkulator Kerja Lebih Masa', 'Overtime & Leave Pay', '加班与请假工资', 'மேலதிக நேர ஊதியம்', '残業・休暇手当', '초과근무·휴가 수당', 'ค่าล่วงเวลาและค่าลา', 'Lương làm thêm & nghỉ phép', 'Upah Lembur & Cuti', 'أجر العمل الإضافي والإجازة', 'ओवरटाइम और अवकाश वेतन', 'Horas extra y permisos', 'Heures sup. et congés'),
    blurb: L('OT, hari rehat, cuti umum, cuti tanpa gaji (EA 1955).', 'OT, rest-day, holiday, unpaid leave (EA 1955).', '加班、休息日、公假、无薪假（1955年雇佣法）。', 'OT, ஓய்வுநாள், விடுமுறை, ஊதியமில்லா விடுப்பு.', '残業・休息日・祝日・無給休暇（雇用法1955）。', '초과근무·휴무일·공휴일·무급휴가(고용법1955).', 'OT วันหยุด วันหยุดราชการ ลาไม่รับเงิน', 'OT, ngày nghỉ, lễ, nghỉ không lương (EA 1955).', 'Lembur, hari istirahat, libur, cuti tanpa gaji.', 'العمل الإضافي والراحة والعطل والإجازة بدون أجر.', 'ओटी, विश्राम-दिन, अवकाश, अवैतनिक छुट्टी।', 'Horas extra, descanso, festivo, permiso sin sueldo.', 'HS, repos, férié, congé sans solde (EA 1955).'),
  },
  {
    id: 'audit-exemption-checker', href: '/tools/audit-exemption-checker', icon: '🔍', color: '#FB7185', status: 'live', group: 'business',
    title: L('Penyemak Pengecualian Audit', 'Audit Exemption Checker', '审计豁免检查器', 'தணிக்கை விலக்கு சரிபார்ப்பு', '監査免除チェッカー', '감사 면제 확인기', 'ตัวตรวจการยกเว้นตรวจสอบบัญชี', 'Kiểm tra miễn kiểm toán', 'Pemeriksa Pengecualian Audit', 'فاحص إعفاء التدقيق', 'ऑडिट छूट जाँचकर्ता', 'Verificador de exención de auditoría', 'Vérificateur d’exemption d’audit'),
    blurb: L('Ambang 2-daripada-3 (PD 10/2024).', '2-of-3 thresholds (PD 10/2024).', '三选二门槛（PD 10/2024）。', '3-இல்-2 வரம்புகள் (PD 10/2024).', '3つのうち2つの基準（PD 10/2024）。', '3개 중 2개 기준 (PD 10/2024).', 'เกณฑ์ 2 ใน 3 (PD 10/2024)', 'Ngưỡng 2-trên-3 (PD 10/2024).', 'Ambang 2-dari-3 (PD 10/2024).', 'عتبات 2 من 3 (PD 10/2024).', '3 में से 2 सीमाएँ (PD 10/2024)।', 'Umbrales 2 de 3 (PD 10/2024).', 'Seuils 2 sur 3 (PD 10/2024).'),
  },
  {
    id: 'sdn-bhd-cost', href: '/tools/sdn-bhd-cost', icon: '🏗️', color: '#A3E635', status: 'live', group: 'business',
    title: L('Kos Penubuhan Sdn Bhd', 'Sdn Bhd Setup Cost', '私人有限公司注册费用', 'Sdn Bhd அமைப்புச் செலவு', 'Sdn Bhd 設立費用', 'Sdn Bhd 설립 비용', 'ค่าจัดตั้ง Sdn Bhd', 'Chi phí lập Sdn Bhd', 'Biaya Pendirian Sdn Bhd', 'تكلفة تأسيس Sdn Bhd', 'Sdn Bhd स्थापना लागत', 'Coste de constituir una Sdn Bhd', 'Coût de création d’une Sdn Bhd'),
    blurb: L('Yuran SSM + kos tahun pertama.', 'SSM fees + first-year setup costs.', 'SSM 费用＋首年注册成本。', 'SSM கட்டணம் + முதலாம் ஆண்டு செலவு.', 'SSM 手数料＋初年度費用。', 'SSM 수수료 + 첫 해 설립 비용.', 'ค่าธรรมเนียม SSM + ต้นทุนปีแรก', 'Phí SSM + chi phí năm đầu.', 'Biaya SSM + biaya tahun pertama.', 'رسوم SSM + تكاليف السنة الأولى.', 'SSM शुल्क + पहले वर्ष की लागत।', 'Tasas SSM + costes del primer año.', 'Frais SSM + coûts de première année.'),
  },
  // --- Living & Understand pillar tools ---
  {
    id: 'tenancy-stamp-duty', href: '/tools/tenancy-stamp-duty', icon: '🔑', color: '#5EEAD4', status: 'live', group: 'daily',
    title: L('Duti Setem Sewa', 'Tenancy Stamp Duty', '租约印花税', 'வாடகை முத்திரை வரி', '賃貸印紙税', '임대 인지세', 'อากรแสตมป์สัญญาเช่า', 'Thuế tem hợp đồng thuê', 'Bea Meterai Sewa', 'رسوم دمغة الإيجار', 'किरायेदारी स्टांप शुल्क', 'Timbre de arrendamiento', 'Droit de timbre de bail'),
    blurb: L('Duti perjanjian sewa — skala item 49 semasa.', 'Lease duty on the current item-49 scale.', '租约印花税——当前第49项税率。', 'வாடகை ஒப்பந்த வரி — தற்போதைய உருப்படி 49 அளவில்.', '賃貸契約の印紙税 — 現行の項目49スケール。', '임대차 인지세 — 현행 항목 49 기준.', 'อากรสัญญาเช่า — ตามเกณฑ์ข้อ 49 ปัจจุบัน', 'Thuế hợp đồng thuê — theo biểu mục 49 hiện hành.', 'Bea sewa — skala item 49 terkini.', 'رسم عقد الإيجار — وفق جدول البند 49 الحالي.', 'पट्टा शुल्क — वर्तमान मद 49 पैमाने पर।', 'Impuesto de arrendamiento según la escala del punto 49.', 'Droit de bail selon le barème actuel du point 49.'),
  },
  {
    id: 'which-court-finder', href: '/tools/which-court-finder', icon: '⚖️', color: '#C084FC', status: 'live', group: 'daily',
    title: L('Mahkamah Mana?', 'Which Court?', '哪个法院？', 'எந்த நீதிமன்றம்?', 'どの裁判所？', '어느 법원?', 'ศาลไหน?', 'Tòa án nào?', 'Pengadilan Mana?', 'أي محكمة؟', 'कौन सा न्यायालय?', '¿Qué tribunal?', 'Quel tribunal ?'),
    blurb: L('Halakan pertikaian ke mahkamah atau tribunal yang betul.', 'Route a dispute to the right court or tribunal.', '将纠纷引向正确的法院或仲裁庭。', 'சர்ச்சையை சரியான நீதிமன்றம்/தீர்ப்பாயத்திற்கு வழிநடத்தவும்.', '紛争を正しい裁判所・審判所へ案内。', '분쟁을 알맞은 법원·심판소로 안내.', 'นำข้อพิพาทไปยังศาลหรือคณะอนุญาโตตุลาการที่ถูกต้อง', 'Định tuyến tranh chấp đến đúng tòa án hoặc hội đồng.', 'Arahkan sengketa ke pengadilan atau tribunal yang tepat.', 'وجِّه النزاع إلى المحكمة أو الهيئة المناسبة.', 'विवाद को सही न्यायालय या ट्रिब्यूनल तक पहुँचाएँ।', 'Dirige una disputa al tribunal o foro correcto.', 'Orientez un litige vers la juridiction adéquate.'),
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
  // Stamp duty
  'taxation/stamp-duty-rates': 'stamp-duty-calculator',
  'taxation/stamp-duty-self-assessment': 'stamp-duty-calculator',
  'taxation/stamp-duty-share-transfer': 'stamp-duty-calculator',
  'taxation/stamp-act-1949': 'stamp-duty-calculator',
  // RPGT
  'taxation/rpgt-rates': 'rpgt-calculator',
  'taxation/rpgt-exemptions': 'rpgt-calculator',
  'law/real-property-gains-tax': 'rpgt-calculator',
  // Home financing
  'property/home-loan-mortgage-financing': 'home-financing',
  'property/buying-a-home-process': 'home-financing',
  'property/foreigners-buying-property': 'home-financing',
  // Car loan (flat-rate hire purchase)
  'transport/buying-a-car': 'car-loan-calculator',
  'transport/electric-vehicle-ownership': 'car-loan-calculator',
  // SST threshold
  'taxation/sst-registration': 'sst-threshold-checker',
  'taxation/sst-explained': 'sst-threshold-checker',
  'taxation/sst-rate-table': 'sst-threshold-checker',
  'taxation/service-tax-act-2018': 'sst-threshold-checker',
  // Zakat
  'glossary/zakat': 'zakat-calculator',
  'money-daily-life/zakat-tax-rebate': 'zakat-calculator',
  // EPF retirement projection
  'finance/epf-members-investment-scheme': 'epf-retirement',
  'money-daily-life/i-saraan-epf-voluntary-contribution': 'epf-retirement',
  'money-daily-life/epf-akaun-fleksibel': 'epf-retirement',
  'employment/minimum-retirement-age-malaysia': 'epf-retirement',
  // Public holidays
  'malaysia/public-holidays-in-malaysia': 'public-holidays',
  'employment/public-holidays-malaysia': 'public-holidays',
  'money-daily-life/public-holidays': 'public-holidays',
  'employment/leave-entitlements-malaysia': 'public-holidays',
  // Road tax
  'transport/road-tax-renewal': 'road-tax-calculator',
  'transport/road-transport-department-jpj': 'road-tax-calculator',
  // Corporate tax
  'taxation/corporate-tax-rates': 'corporate-tax-estimator',
  'taxation/business-structure-tax-comparison': 'corporate-tax-estimator',
  'taxation/llp-taxation': 'corporate-tax-estimator',
  // Overtime / leave pay
  'employment/working-hours-overtime-malaysia': 'overtime-calculator',
  'employment/wage-deductions-malaysia': 'overtime-calculator',
  // Audit exemption
  'audit/audit-exemption-thresholds': 'audit-exemption-checker',
  'audit/audit-exemption': 'audit-exemption-checker',
  'accounting/audit-exemption-criteria': 'audit-exemption-checker',
  'accounting/statutory-audit-requirement': 'audit-exemption-checker',
  // Sdn Bhd incorporation cost
  'business/register-sdn-bhd': 'sdn-bhd-cost',
  'business/ssm-fees-malaysia': 'sdn-bhd-cost',
  'business/sole-prop-vs-sdn-bhd': 'sdn-bhd-cost',
  'business/what-is-sdn-bhd': 'sdn-bhd-cost',
  // Tenancy stamp duty (lease, item 49)
  'property/renting-a-home': 'tenancy-stamp-duty',
  'property/tenancy-agreement': 'tenancy-stamp-duty',
  'property/renting-property-malaysia': 'tenancy-stamp-duty',
  // Which court finder (civic / legal system)
  'law/small-claims-tribunal-procedure': 'which-court-finder',
  'law/courts-of-malaysia': 'which-court-finder',
  'law/malaysian-court-system': 'which-court-finder',
  'law/syariah-court-malaysia': 'which-court-finder',
};

/** The live tool to surface on an article, or null. Key = "category/slug". */
export function toolForArticle(category: string, slug: string, locale: Locale) {
  const id = ARTICLE_TOOL[`${category}/${slug}`];
  if (!id) return null;
  const t = TOOLS.find((x) => x.id === id && x.status === 'live');
  return t ? by(locale)(t) : null;
}
