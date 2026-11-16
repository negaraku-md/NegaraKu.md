import type { Locale, Pillar } from './categories';
import { LIVING_PATH, type GuidedStep } from './livingPath';
import { BUSINESS_PATH } from './businessPath';

// The guide library. A "guide" is a curated, ordered journey through existing
// articles (hook → depth) — sourced facts in sequence, NOT a ranking or 攻略.
// Each pillar can hold MANY guides; they surface as compact cards on the pillar
// hub (GuideCards) and each opens its own page at /guide/<id> (GuideView), so a
// guide is individually shareable and AI-citable. Add a guide by adding an entry
// here (title/blurb in all 13 languages; steps are language-neutral article
// pointers that resolve per locale and silently drop if absent). Titles/blurbs
// are plain UI copy — NOT article content — so they live here, not in frontmatter.

export interface Guide {
  id: string;
  pillar: Pillar;
  /** Leading emoji for the card + page hero. */
  icon: string;
  title: Record<Locale, string>;
  blurb: Record<Locale, string>;
  /** Ordered article pointers; resolved against the locale pool at render time. */
  steps: GuidedStep[];
}

export const GUIDES: Guide[] = [
  {
    id: 'understand-malaysia-basics',
    pillar: 'understand',
    icon: '🧭',
    title: { ms: "Baru di Malaysia? Mula di sini", en: "New to Malaysia? Start here", zh: "初来马来西亚?从这里开始", ta: "மலேசியா புதிதா? இங்கே தொடங்குங்கள்", ja: "マレーシアは初めて？ここから", ko: "말레이시아가 처음이신가요? 여기서 시작하세요", th: "เพิ่งมามาเลเซีย? เริ่มที่นี่", vi: "Mới đến Malaysia? Bắt đầu tại đây", id: "Baru di Malaysia? Mulai di sini", ar: "جديد في ماليزيا؟ ابدأ من هنا", hi: "मलेशिया में नए हैं? यहाँ से शुरू करें", es: "¿Nuevo en Malasia? Empieza aquí", fr: "Nouveau en Malaisie ? Commencez ici" },
    blurb: { ms: "Cara terpantas untuk mengenali keadaan — negara dan rakyatnya, bahasa dan agama, serta kisah di sebalik negara ini.", en: "The quickest way to get your bearings — the land and its people, languages and faiths, and the story behind the country.", zh: "最快的入门方式——这片土地与人民、语言与信仰,以及这个国家背后的故事。", ta: "நாட்டைப் புரிந்துகொள்ள விரைவான வழி — நிலமும் மக்களும், மொழிகளும் நம்பிக்கைகளும், நாட்டின் பின்னணிக் கதையும்.", ja: "いちばん手早く全体像をつかむ — 国土と人々、言語と宗教、そして国の歩みの物語。", ko: "가장 빠르게 감을 잡는 길 — 국토와 사람들, 언어와 신앙, 그리고 이 나라에 얽힌 이야기.", th: "วิธีที่เร็วที่สุดในการทำความเข้าใจภาพรวม — ผืนแผ่นดินและผู้คน ภาษาและความเชื่อ รวมถึงเรื่องราวเบื้องหลังประเทศนี้", vi: "Cách nhanh nhất để nắm bắt tổng quan — đất nước và con người, ngôn ngữ và tín ngưỡng, cùng câu chuyện phía sau quốc gia này.", id: "Cara tercepat untuk menemukan arah — negeri dan penduduknya, bahasa dan keyakinan, serta kisah di balik negara ini.", ar: "أسرع طريقة لتتعرّف على المكان — الأرض وسكانها، اللغات والأديان، والقصة وراء البلد.", hi: "अपनी पकड़ बनाने का सबसे तेज़ तरीका — यह भूमि और इसके लोग, भाषाएँ और धर्म, और इस देश के पीछे की कहानी।", es: "La forma más rápida de orientarte: el territorio y su gente, los idiomas y las religiones, y la historia que hay detrás del país.", fr: "Le moyen le plus rapide de vous repérer — le territoire et ses habitants, les langues et les religions, et l'histoire du pays." },
    steps: [
      { cat: 'malaysia', slug: 'what-malaysia-is' },
      { cat: 'malaysia', slug: 'peninsular-and-borneo' },
      { cat: 'malaysia', slug: 'population-composition' },
      { cat: 'malaysia', slug: 'languages-spoken' },
      { cat: 'malaysia', slug: 'religion-statistics' },
      { cat: 'malaysia', slug: 'rukun-negara' },
      { cat: 'malaysia', slug: 'timeline-of-malaysia' },
      { cat: 'malaysia', slug: 'malaysia-at-a-glance' },
    ],
  },
  {
    id: 'how-malaysia-is-governed',
    pillar: 'understand',
    icon: '🏛️',
    title: { ms: "Bagaimana Malaysia ditadbir", en: "How Malaysia is governed", zh: "马来西亚如何治理", ta: "மலேசியா எப்படி ஆளப்படுகிறது", ja: "マレーシアの統治のしくみ", ko: "말레이시아는 어떻게 통치되는가", th: "มาเลเซียปกครองอย่างไร", vi: "Malaysia được điều hành như thế nào", id: "Bagaimana Malaysia diperintah", ar: "كيف تُحكم ماليزيا", hi: "मलेशिया का शासन कैसे चलता है", es: "Cómo se gobierna Malasia", fr: "Comment la Malaisie est gouvernée" },
    blurb: { ms: "Daripada Perlembagaan Persekutuan hingga Parlimen, raja-raja dan pilihan raya — siapa memegang kuasa apa, dan bagaimana semuanya terjalin.", en: "From the Federal Constitution to Parliament, the rulers and elections — who holds what power, and how it all fits together.", zh: "从联邦宪法到国会、统治者与选举——谁握有哪些权力,以及这一切如何衔接。", ta: "கூட்டரசு அரசியலமைப்பு முதல் நாடாளுமன்றம், சுல்தான்கள், தேர்தல்கள் வரை — யார் எந்த அதிகாரம் வைத்திருக்கிறார்கள், இவை எல்லாம் எப்படி இணைகின்றன.", ja: "連邦憲法から議会、統治者と選挙まで — 誰がどの権限を持ち、それらがどう組み合わさっているのか。", ko: "연방헌법부터 의회, 통치자와 선거까지 — 누가 어떤 권한을 쥐고, 그것이 어떻게 맞물려 돌아가는지.", th: "ตั้งแต่รัฐธรรมนูญแห่งสหพันธรัฐไปจนถึงรัฐสภา เจ้าผู้ครองรัฐและการเลือกตั้ง — ใครมีอำนาจอะไร และทั้งหมดประกอบกันอย่างไร", vi: "Từ Hiến pháp Liên bang đến Nghị viện, các quốc vương và bầu cử — ai nắm quyền gì, và tất cả gắn kết với nhau ra sao.", id: "Dari Konstitusi Federal hingga Parlemen, para raja dan pemilu — siapa memegang kekuasaan apa, dan bagaimana semuanya saling terkait.", ar: "من الدستور الاتحادي إلى البرلمان والحكّام والانتخابات — من يملك أيّ سلطة، وكيف يتكامل ذلك كله.", hi: "संघीय संविधान से लेकर संसद, राजाओं और चुनावों तक — किसके पास कौन-सी शक्ति है, और यह सब कैसे आपस में जुड़ता है।", es: "De la Constitución Federal al Parlamento, los soberanos y las elecciones: quién ostenta cada poder y cómo encaja todo.", fr: "De la Constitution fédérale au Parlement, les souverains et les élections — qui détient quel pouvoir, et comment tout s'articule." },
    steps: [
      { cat: 'government', slug: 'federal-constitution' },
      { cat: 'government', slug: 'three-tiers-of-government' },
      { cat: 'government', slug: 'parliament' },
      { cat: 'government', slug: 'yang-di-pertuan-agong' },
      { cat: 'government', slug: 'majlis-raja-raja' },
      { cat: 'government', slug: 'federal-state-division' },
      { cat: 'government', slug: 'how-elections-work' },
      { cat: 'government', slug: 'kehakiman-mahkamah' },
    ],
  },
  {
    id: 'moving-to-malaysia',
    pillar: 'living',
    icon: '🧳',
    title: { ms: "Berpindah ke Malaysia", en: "Moving to Malaysia", zh: "移居马来西亚", ta: "மலேசியாவுக்கு இடம்பெயர்தல்", ja: "マレーシアへの移住", ko: "말레이시아로 이주하기", th: "ย้ายมาอยู่มาเลเซีย", vi: "Chuyển đến Malaysia", id: "Pindah ke Malaysia", ar: "الانتقال إلى ماليزيا", hi: "मलेशिया आना", es: "Mudarse a Malasia", fr: "S'installer en Malaisie" },
    blurb: { ms: "Keputusan sebenar, mengikut urutan — pas atau visa mana yang sesuai, kemudian PR, kos sara hidup, cukai, hartanah, sekolah dan penjagaan kesihatan.", en: "The real decisions, in order — which visa or pass fits you, then permanent residency, cost of living, tax, property, schools and healthcare.", zh: "真正要做的决定,按顺序——哪种签证或准证适合你,然后是永久居留、生活成本、税务、房产、学校与医疗。", ta: "உண்மையான முடிவுகள், வரிசையாக — உங்களுக்கு எந்த விசா அல்லது பாஸ் பொருந்தும், பிறகு நிரந்தரக் குடியிருப்பு (PR), வாழ்க்கைச் செலவு, வரி, சொத்து, பள்ளிகள், சுகாதாரம்.", ja: "本当に必要な決断を順番に — 自分に合うビザやパスはどれか、そして永住権、生活費、税金、不動産、学校、医療。", ko: "실제로 내려야 할 결정을 순서대로 — 어떤 비자나 패스가 맞는지, 그다음 영주권(PR), 생활비, 세금, 부동산, 학교와 의료.", th: "การตัดสินใจที่สำคัญจริง เรียงตามลำดับ — วีซ่าหรือพาสแบบไหนเหมาะกับคุณ แล้วตามด้วยการพำนักถาวร ค่าครองชีพ ภาษี อสังหาริมทรัพย์ โรงเรียน และการรักษาพยาบาล", vi: "Những quyết định thực tế, theo thứ tự — loại thị thực hay giấy phép nào phù hợp với bạn, rồi đến thường trú, chi phí sinh hoạt, thuế, bất động sản, trường học và y tế.", id: "Keputusan nyata, berurutan — visa atau pas mana yang cocok untuk Anda, lalu izin tinggal tetap, biaya hidup, pajak, properti, sekolah, dan layanan kesehatan.", ar: "القرارات الفعلية بالترتيب — أيّ تأشيرة أو تصريح يناسبك، ثم الإقامة الدائمة وتكلفة المعيشة والضرائب والعقارات والمدارس والرعاية الصحية.", hi: "असली फ़ैसले, क्रम से — कौन-सा वीज़ा या पास आपके लिए सही है, फिर स्थायी निवास (PR), रहने का खर्च, कर, संपत्ति, स्कूल और स्वास्थ्य सेवा।", es: "Las decisiones reales, en orden: qué visado o permiso te conviene, y luego la residencia permanente, el coste de vida, los impuestos, la vivienda, los colegios y la sanidad.", fr: "Les vraies décisions, dans l'ordre — quel visa ou permis vous convient, puis la résidence permanente, le coût de la vie, les impôts, l'immobilier, les écoles et la santé." },
    steps: LIVING_PATH,
  },
  {
    id: 'settling-in-first-months',
    pillar: 'living',
    icon: '🏠',
    title: { ms: "Bulan-bulan pertama anda di sini", en: "Your first months here", zh: "你在这里的头几个月", ta: "உங்கள் முதல் மாதங்கள் இங்கே", ja: "到着からの最初の数か月", ko: "이곳에서의 첫 몇 달", th: "เดือนแรก ๆ ของคุณที่นี่", vi: "Những tháng đầu tiên của bạn ở đây", id: "Bulan-bulan pertama Anda di sini", ar: "أشهرك الأولى هنا", hi: "यहाँ आपके पहले महीने", es: "Tus primeros meses aquí", fr: "Vos premiers mois sur place" },
    blurb: { ms: "Persediaan praktikal selepas tiba — kad pengenalan, akaun bank, kad SIM, memandu, penjagaan kesihatan, dan mengelak penipuan.", en: "The practical setup after you arrive — your ID, a bank account, a SIM, driving, healthcare, and staying safe from scams.", zh: "抵达后的实际安顿——身份证件、银行账户、SIM 卡、驾车、医疗,以及防范诈骗。", ta: "வந்தவுடன் செய்யவேண்டிய நடைமுறை ஏற்பாடுகள் — அடையாள அட்டை, வங்கிக் கணக்கு, SIM, ஓட்டுநர், சுகாதாரம், மோசடிகளிலிருந்து பாதுகாப்பு.", ja: "着いてからの実務的な準備 — ID、銀行口座、SIM、運転、医療、そして詐欺から身を守ること。", ko: "도착한 뒤 실질적으로 갖춰야 할 것 — 신분증, 은행 계좌, SIM, 운전, 의료, 그리고 사기를 피하는 법.", th: "การจัดการเรื่องจำเป็นหลังมาถึง — บัตรประจำตัว บัญชีธนาคาร SIM การขับรถ การรักษาพยาบาล และการระวังมิจฉาชีพ", vi: "Việc chuẩn bị thực tế sau khi bạn đến — giấy tờ tùy thân, tài khoản ngân hàng, SIM, lái xe, y tế, và phòng tránh lừa đảo.", id: "Persiapan praktis setelah Anda tiba — identitas, rekening bank, SIM, mengemudi, layanan kesehatan, dan menjaga diri dari penipuan.", ar: "الترتيبات العملية بعد وصولك — بطاقة هويتك، وحساب مصرفي، وشريحة SIM، والقيادة، والرعاية الصحية، والحماية من عمليات الاحتيال.", hi: "पहुँचने के बाद की व्यावहारिक तैयारी — आपका पहचान-पत्र, बैंक खाता, एक SIM, ड्राइविंग, स्वास्थ्य सेवा, और घोटालों से सुरक्षित रहना।", es: "La puesta a punto práctica tras tu llegada: tu identificación, una cuenta bancaria, una SIM, conducir, la sanidad y protegerte de las estafas.", fr: "L'installation pratique après votre arrivée — votre pièce d'identité, un compte bancaire, une carte SIM, la conduite, la santé et la vigilance face aux arnaques." },
    steps: [
      { cat: 'settling-in', slug: 'moving-to-malaysia-first-steps' },
      { cat: 'settling-in', slug: 'mykad-and-identity-documents' },
      { cat: 'money-daily-life', slug: 'opening-bank-account' },
      { cat: 'money-daily-life', slug: 'mobile-sim-plans' },
      { cat: 'money-daily-life', slug: 'duitnow-qr-payments' },
      { cat: 'transport', slug: 'driving-licence-foreigners' },
      { cat: 'healthcare', slug: 'how-malaysian-healthcare-works' },
      { cat: 'money-daily-life', slug: 'staying-safe-scams-and-emergencies' },
    ],
  },
  {
    id: 'starting-a-business',
    pillar: 'doing-business',
    icon: '🏢',
    title: { ms: "Memulakan perniagaan", en: "Starting a business", zh: "创办企业", ta: "ஒரு வணிகத்தைத் தொடங்குதல்", ja: "起業する", ko: "사업 시작하기", th: "เริ่มต้นทำธุรกิจ", vi: "Khởi nghiệp kinh doanh", id: "Memulai bisnis", ar: "بدء مشروع تجاري", hi: "व्यवसाय शुरू करना", es: "Montar un negocio", fr: "Créer une entreprise" },
    blurb: { ms: "Laluan memulakan syarikat — struktur, penubuhan, setiausaha syarikat, cukai korporat, SST, dan pematuhan tahun pertama.", en: "The company-starter path — structure, incorporation, a company secretary, corporate tax, SST, and first-year compliance.", zh: "开公司的路径——公司架构、注册、公司秘书、企业所得税、SST,以及第一年的合规。", ta: "நிறுவனம் தொடங்கும் பாதை — அமைப்பு, பதிவு, நிறுவனச் செயலர், கார்ப்பரேட் வரி, SST, முதல் ஆண்டு இணக்கம்.", ja: "会社を立ち上げる道のり — 法人形態、設立登記、カンパニーセクレタリー、法人税、SST、そして初年度のコンプライアンス。", ko: "회사 설립의 길 — 형태, 법인 설립, 회사 비서, 법인세, SST, 그리고 첫해 규정 준수.", th: "เส้นทางการตั้งบริษัท — โครงสร้าง การจดทะเบียน เลขานุการบริษัท ภาษีนิติบุคคล SST และการปฏิบัติตามกฎระเบียบในปีแรก", vi: "Lộ trình thành lập công ty — cơ cấu, đăng ký thành lập, thư ký công ty, thuế doanh nghiệp, SST, và tuân thủ năm đầu tiên.", id: "Jalur merintis perusahaan — struktur, pendirian, sekretaris perusahaan, pajak korporat, SST, dan kepatuhan tahun pertama.", ar: "مسار تأسيس الشركة — الهيكل القانوني، والتأسيس، وأمين سر الشركة، وضريبة الشركات، وSST، والامتثال في السنة الأولى.", hi: "कंपनी शुरू करने की राह — संरचना, निगमन, कंपनी सचिव, कॉर्पोरेट कर, SST, और पहले साल का अनुपालन।", es: "La ruta para crear una empresa: estructura, constitución, secretario corporativo, impuesto de sociedades, SST y cumplimiento del primer año.", fr: "Le parcours du créateur d'entreprise — structure, constitution, secrétaire de société, impôt sur les sociétés, SST et conformité de la première année." },
    steps: BUSINESS_PATH,
  },
  {
    id: 'hiring-your-first-employee',
    pillar: 'doing-business',
    icon: '👥',
    title: { ms: "Mengambil pekerja pertama anda", en: "Hiring your first employee", zh: "聘请第一名员工", ta: "உங்கள் முதல் ஊழியரை பணியமர்த்துதல்", ja: "最初の従業員を雇う", ko: "첫 직원 채용하기", th: "จ้างพนักงานคนแรก", vi: "Tuyển nhân viên đầu tiên", id: "Merekrut karyawan pertama Anda", ar: "توظيف أول موظف لديك", hi: "अपना पहला कर्मचारी रखना", es: "Contratar a tu primer empleado", fr: "Embaucher votre premier salarié" },
    blurb: { ms: "Apa yang undang-undang tuntut daripada majikan — kontrak, KWSP dan PERKESO, gaji minimum, penggajian, pas kerja, dan waktu bekerja.", en: "What the law asks of an employer — contracts, EPF and SOCSO, minimum wage, payroll, work passes, and working hours.", zh: "法律对雇主的要求——雇佣合同、公积金(EPF)与社会保险(SOCSO)、最低工资、薪酬发放、工作准证,以及工作时间。", ta: "முதலாளியிடமிருந்து சட்டம் எதிர்பார்ப்பது — ஒப்பந்தங்கள், EPF மற்றும் SOCSO, குறைந்தபட்ச ஊதியம், ஊதியப்பட்டியல், பணி பாஸ்கள், வேலை நேரம்.", ja: "法律が雇用主に求めること — 雇用契約、EPFとSOCSO、最低賃金、給与計算、就労パス、そして労働時間。", ko: "고용주에게 법이 요구하는 것 — 계약서, EPF와 SOCSO, 최저임금, 급여 지급, 취업 패스, 그리고 근로 시간.", th: "สิ่งที่กฎหมายกำหนดให้นายจ้างต้องทำ — สัญญาจ้าง EPF และ SOCSO ค่าแรงขั้นต่ำ การจ่ายเงินเดือน พาสทำงาน และชั่วโมงทำงาน", vi: "Những gì pháp luật yêu cầu ở người sử dụng lao động — hợp đồng, EPF và SOCSO, lương tối thiểu, bảng lương, giấy phép lao động, và giờ làm việc.", id: "Apa yang hukum tuntut dari pemberi kerja — kontrak, EPF dan SOCSO, upah minimum, penggajian, pas kerja, dan jam kerja.", ar: "ما يطلبه القانون من صاحب العمل — العقود، وEPF وSOCSO، والحد الأدنى للأجور، وكشوف الرواتب، وتصاريح العمل، وساعات العمل.", hi: "कानून नियोक्ता से क्या माँगता है — अनुबंध, EPF और SOCSO, न्यूनतम वेतन, वेतन-भुगतान, वर्क पास, और काम के घंटे।", es: "Lo que la ley exige al empleador: contratos, EPF y SOCSO, salario mínimo, nóminas, permisos de trabajo y jornada laboral.", fr: "Ce que la loi exige d'un employeur — contrats, EPF et SOCSO, salaire minimum, paie, permis de travail et temps de travail." },
    steps: [
      { cat: 'employment', slug: 'labour-law-map-malaysia' },
      { cat: 'employment', slug: 'employment-contract-malaysia' },
      { cat: 'employment', slug: 'new-hire-statutory-checklist' },
      { cat: 'employment', slug: 'epf-socso-guide' },
      { cat: 'employment', slug: 'minimum-wage-malaysia' },
      { cat: 'employment', slug: 'payroll-compliance-malaysia' },
      { cat: 'employment', slug: 'work-passes-malaysia' },
      { cat: 'employment', slug: 'working-hours-overtime-malaysia' },
    ],
  },
];

/** Guides belonging to a pillar, in registry order. */
export function guidesForPillar(pillar: Pillar): Guide[] {
  return GUIDES.filter((g) => g.pillar === pillar);
}

/** One guide by id (for the /guide/<id> page). */
export function getGuide(id: string): Guide | undefined {
  return GUIDES.find((g) => g.id === id);
}

/** Bare path for a guide page; wrap with localePath() at the call site. */
export function guidePath(id: string): string {
  return `/guide/${id}`;
}

/** getStaticPaths entries for the /guide/<id> route (locale-agnostic). */
export function guidePaths() {
  return GUIDES.map((g) => ({ params: { guide: g.id }, props: { guide: g } }));
}

/** Localized guide copy with an English fallback. */
export function guideText(ls: Record<Locale, string>, locale: Locale): string {
  return ls[locale] ?? ls.en;
}
