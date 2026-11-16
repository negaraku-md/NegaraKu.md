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
    id: 'the-making-of-malaysia',
    pillar: 'understand',
    icon: '📜',
    title: { ms: "Pembentukan Malaysia", en: "The making of Malaysia", zh: "马来西亚的形成", ta: "மலேசியா உருவான வரலாறு", ja: "マレーシア建国の歩み", ko: "말레이시아의 형성", th: "กำเนิดมาเลเซีย", vi: "Sự hình thành của Malaysia", id: "Terbentuknya Malaysia", ar: "نشأة ماليزيا", hi: "मलेशिया का निर्माण", es: "La formación de Malasia", fr: "La formation de la Malaisie" },
    blurb: { ms: "Bagaimana negara ini terbentuk — daripada kerajaan awal dan Kesultanan Melaka, melalui penjajahan, pendudukan, kemerdekaan, dan persekutuan 1963.", en: "How the country came to be — from early kingdoms and the Melaka Sultanate through colonial rule, occupation, independence, and the 1963 federation.", zh: "这个国家如何诞生——从早期王国与马六甲苏丹王朝,历经殖民、占领、独立,到 1963 年的联邦成立。", ta: "இந்த நாடு எப்படி உருவானது — ஆரம்பகால அரசுகள் மற்றும் மலாக்கா சுல்தானகம் தொடங்கி, காலனித்துவ ஆட்சி, ஆக்கிரமிப்பு, சுதந்திரம், 1963 கூட்டாட்சி வரை.", ja: "この国はどう生まれたのか——初期の王国やマラッカ王国から、植民地支配、占領、独立、そして1963年の連邦結成まで。", ko: "이 나라가 어떻게 탄생했는가 — 초기 왕국과 믈라카 술탄국에서 식민 통치, 점령기, 독립, 그리고 1963년 연방 수립까지.", th: "ประเทศนี้ถือกำเนิดขึ้นอย่างไร — จากอาณาจักรยุคแรกและรัฐสุลต่านมะละกา ผ่านยุคอาณานิคม การยึดครอง การประกาศเอกราช จนถึงการก่อตั้งสหพันธรัฐในปี 1963", vi: "Đất nước ra đời như thế nào — từ các vương quốc sơ khai và Vương quốc Hồi giáo Melaka qua thời thuộc địa, chiếm đóng, độc lập, đến liên bang năm 1963.", id: "Bagaimana negara ini lahir — dari kerajaan awal dan Kesultanan Melaka, melalui penjajahan, pendudukan, kemerdekaan, hingga persekutuan 1963.", ar: "كيف تكوّنت البلاد — من الممالك المبكرة وسلطنة ملقا، مروراً بالحكم الاستعماري والاحتلال والاستقلال، وصولاً إلى اتحاد عام 1963.", hi: "देश कैसे बना — शुरुआती राज्यों और मेलाका सल्तनत से लेकर औपनिवेशिक शासन, कब्ज़े, स्वतंत्रता और 1963 के संघ तक।", es: "Cómo nació el país — desde los primeros reinos y el Sultanato de Melaka hasta el dominio colonial, la ocupación, la independencia y la federación de 1963.", fr: "Comment le pays est né — des premiers royaumes et du sultanat de Melaka à la domination coloniale, l'occupation, l'indépendance et la fédération de 1963." },
    steps: [
      { cat: 'malaysia', slug: 'srivijaya' },
      { cat: 'malaysia', slug: 'melaka-sultanate' },
      { cat: 'malaysia', slug: 'portuguese-melaka-1511' },
      { cat: 'malaysia', slug: 'straits-settlements' },
      { cat: 'malaysia', slug: 'japanese-occupation' },
      { cat: 'malaysia', slug: 'independence-1957' },
      { cat: 'malaysia', slug: 'formation-of-malaysia-1963' },
      { cat: 'malaysia', slug: 'singapore-separation-1965' },
    ],
  },
  {
    id: 'the-malaysian-economy',
    pillar: 'understand',
    icon: '📈',
    title: { ms: "Ekonomi Malaysia", en: "The Malaysian economy", zh: "马来西亚经济", ta: "மலேசியப் பொருளாதாரம்", ja: "マレーシア経済", ko: "말레이시아 경제", th: "เศรษฐกิจมาเลเซีย", vi: "Nền kinh tế Malaysia", id: "Ekonomi Malaysia", ar: "الاقتصاد الماليزي", hi: "मलेशिया की अर्थव्यवस्था", es: "La economía malasia", fr: "L'économie malaisienne" },
    blurb: { ms: "Apa yang menggerakkannya — perdagangan, minyak dan minyak sawit, elektronik, ringgit dan belanjawan persekutuan, serta siapa menetapkan dasar monetari.", en: "What drives it — trade, oil and palm oil, electronics, the ringgit and the federal budget, and who sets monetary policy.", zh: "推动经济的力量——贸易、石油与棕油、电子业、令吉与联邦预算案,以及由谁制定货币政策。", ta: "இதை இயக்குவது எது — வர்த்தகம், எண்ணெய் மற்றும் பாமாயில், மின்னணுவியல், ரிங்கிட் மற்றும் கூட்டாட்சி வரவுசெலவுத் திட்டம், பணவியல் கொள்கையை வகுப்பவர் யார்.", ja: "何が経済を動かすのか——貿易、石油とパーム油、電子産業、リンギットと連邦予算、そして金融政策の担い手。", ko: "무엇이 경제를 움직이는가 — 무역, 석유와 팜유, 전자산업, 링깃과 연방 예산, 그리고 통화정책을 결정하는 주체.", th: "อะไรขับเคลื่อนเศรษฐกิจ — การค้า น้ำมันและน้ำมันปาล์ม อิเล็กทรอนิกส์ เงินริงกิตและงบประมาณกลาง รวมถึงใครเป็นผู้กำหนดนโยบายการเงิน", vi: "Điều gì thúc đẩy nó — thương mại, dầu mỏ và dầu cọ, điện tử, đồng ringgit và ngân sách liên bang, cùng ai định hình chính sách tiền tệ.", id: "Apa yang menggerakkannya — perdagangan, minyak dan minyak sawit, elektronik, ringgit dan anggaran belanja federal, serta siapa yang menetapkan kebijakan moneter.", ar: "ما الذي يحرّكه — التجارة والنفط وزيت النخيل والإلكترونيات والرينغيت والموازنة الاتحادية، ومن يرسم السياسة النقدية.", hi: "इसे क्या चलाता है — व्यापार, तेल और पाम ऑयल, इलेक्ट्रॉनिक्स, रिंगित और संघीय बजट, और मौद्रिक नीति कौन तय करता है।", es: "Qué la impulsa — el comercio, el petróleo y el aceite de palma, la electrónica, el ringgit y el presupuesto federal, y quién fija la política monetaria.", fr: "Ce qui la porte — le commerce, le pétrole et l'huile de palme, l'électronique, le ringgit et le budget fédéral, et qui fixe la politique monétaire." },
    steps: [
      { cat: 'economy', slug: 'gdp-overview' },
      { cat: 'economy', slug: 'external-trade' },
      { cat: 'economy', slug: 'oil-gas-petronas' },
      { cat: 'economy', slug: 'palm-oil-sector' },
      { cat: 'economy', slug: 'electronics-semiconductors' },
      { cat: 'economy', slug: 'ringgit' },
      { cat: 'economy', slug: 'federal-budget' },
      { cat: 'economy', slug: 'bank-negara-malaysia' },
    ],
  },
  {
    id: 'malaysia-festivals-and-culture',
    pillar: 'understand',
    icon: '🎉',
    title: { ms: "Perayaan & budaya", en: "Festivals & culture", zh: "节庆与文化", ta: "திருவிழாக்களும் பண்பாடும்", ja: "祭りと文化", ko: "축제와 문화", th: "เทศกาลและวัฒนธรรม", vi: "Lễ hội & văn hóa", id: "Festival & budaya", ar: "الاحتفالات والثقافة", hi: "त्योहार और संस्कृति", es: "Fiestas y cultura", fr: "Fêtes & culture" },
    blurb: { ms: "Sambutan dan tradisi yang mencorakkan tahun — Hari Raya, Tahun Baru Cina, Deepavali, Thaipusam, Wesak dan pesta menuai, serta warisan dan seni.", en: "The celebrations and traditions that shape the year — Hari Raya, Chinese New Year, Deepavali, Thaipusam, Wesak and the harvest festivals, plus heritage and the arts.", zh: "贯穿一年的庆典与传统——开斋节、农历新年、屠妖节、大宝森节、卫塞节与丰收节,以及文化遗产与艺术。", ta: "ஆண்டை வடிவமைக்கும் கொண்டாட்டங்களும் மரபுகளும் — ஹரி ராயா, சீனப் புத்தாண்டு, தீபாவளி, தைப்பூசம், வெசாக் மற்றும் அறுவடைத் திருவிழாக்கள், அத்துடன் பாரம்பரியமும் கலைகளும்.", ja: "一年を彩る祝祭と伝統 — ハリラヤ、春節、ディパバリ、タイプーサム、ウェーサク、そして収穫祭。加えて、受け継がれる文化遺産と芸術。", ko: "한 해를 수놓는 기념일과 전통 — 하리 라야(Hari Raya), 설날, 디파발리(Deepavali), 타이푸삼(Thaipusam), 웨삭(Wesak), 추수 축제, 그리고 유산과 예술까지.", th: "งานฉลองและประเพณีที่หล่อหลอมทั้งปี — Hari Raya, ตรุษจีน, Deepavali, Thaipusam, Wesak และเทศกาลเก็บเกี่ยว พร้อมมรดกและศิลปะ", vi: "Những dịp lễ và truyền thống định hình cả năm — Hari Raya, Tết Nguyên đán, Deepavali, Thaipusam, Wesak và các lễ hội mùa gặt, cùng di sản và nghệ thuật.", id: "Perayaan dan tradisi yang membentuk sepanjang tahun — Hari Raya, Tahun Baru Imlek, Deepavali, Thaipusam, Wesak dan festival panen, serta warisan dan kesenian.", ar: "الاحتفالات والتقاليد التي تشكّل ملامح العام — عيد الفطر (Hari Raya) ورأس السنة الصينية وديبافالي (Deepavali) وثايبوسام (Thaipusam) وويساك (Wesak) وأعياد الحصاد، إلى جانب التراث والفنون.", hi: "वे उत्सव और परंपराएँ जो पूरे वर्ष को आकार देती हैं — Hari Raya, चीनी नववर्ष, Deepavali, Thaipusam, Wesak और फ़सल के त्योहार, साथ ही विरासत और कलाएँ।", es: "Las celebraciones y tradiciones que marcan el año — Hari Raya, el Año Nuevo Chino, Deepavali, Thaipusam, Wesak y las fiestas de la cosecha, además del patrimonio y las artes.", fr: "Les célébrations et traditions qui rythment l'année — Hari Raya, le Nouvel An chinois, Deepavali, Thaipusam, Wesak et les fêtes des récoltes, ainsi que le patrimoine et les arts." },
    steps: [
      { cat: 'arts-culture', slug: 'hari-raya-aidilfitri' },
      { cat: 'arts-culture', slug: 'chinese-new-year' },
      { cat: 'arts-culture', slug: 'deepavali' },
      { cat: 'arts-culture', slug: 'thaipusam' },
      { cat: 'arts-culture', slug: 'wesak' },
      { cat: 'arts-culture', slug: 'kaamatan' },
      { cat: 'arts-culture', slug: 'national-cultural-policy' },
      { cat: 'arts-culture', slug: 'unesco-world-heritage' },
    ],
  },
  {
    id: 'states-and-regions',
    pillar: 'understand',
    icon: '🗺️',
    title: { ms: "Negeri & wilayah", en: "States & regions", zh: "各州与地区", ta: "மாநிலங்களும் பகுதிகளும்", ja: "州と地域", ko: "주와 지역", th: "รัฐและภูมิภาค", vi: "Các bang & vùng miền", id: "Negeri bagian & wilayah", ar: "الولايات والأقاليم", hi: "राज्य और क्षेत्र", es: "Estados y regiones", fr: "États & régions" },
    blurb: { ms: "Bagaimana negeri dan wilayah persekutuan berbeza — dari Kuala Lumpur dan Pulau Pinang hingga Johor, Sabah dan Sarawak, serta perlindungan yang membezakan negeri Borneo.", en: "How the states and federal territories differ — from Kuala Lumpur and Penang to Johor, Sabah and Sarawak, and the safeguards that set the Borneo states apart.", zh: "各州与联邦直辖区有何不同——从吉隆坡、槟城到柔佛、沙巴与砂拉越,以及让婆罗洲两州与众不同的特别保障。", ta: "மாநிலங்களும் கூட்டரசு நிலப்பகுதிகளும் எவ்வாறு வேறுபடுகின்றன — கோலாலம்பூர், பினாங்கிலிருந்து ஜொகூர், சபா, சரவாக் வரை, மேலும் போர்னியோ மாநிலங்களைத் தனித்து நிறுத்தும் பாதுகாப்பு உரிமைகள்.", ja: "州と連邦直轄領はどう違うのか — クアラルンプールやペナンから、ジョホール、サバ、サラワクまで。ボルネオの州を特別な存在とする保障措置も。", ko: "각 주와 연방 직할구는 어떻게 다른가 — 쿠알라룸푸르(Kuala Lumpur)와 페낭(Penang)부터 조호르(Johor), 사바(Sabah), 사라왁(Sarawak)까지, 그리고 보르네오 주들을 구별 짓는 특별 보호 조항.", th: "ความแตกต่างระหว่างรัฐและดินแดนสหพันธรัฐ — จาก Kuala Lumpur และ Penang ไปจนถึง Johor, Sabah และ Sarawak รวมถึงการคุ้มครองที่ทำให้รัฐบอร์เนียวแตกต่าง", vi: "Sự khác biệt giữa các bang và lãnh thổ liên bang — từ Kuala Lumpur và Penang đến Johor, Sabah và Sarawak, cùng những quyền bảo hộ làm nên nét riêng của các bang Borneo.", id: "Bagaimana negeri bagian dan wilayah persekutuan berbeda — dari Kuala Lumpur dan Penang hingga Johor, Sabah dan Sarawak, serta pengaman yang membedakan negeri bagian Borneo.", ar: "كيف تختلف الولايات والأقاليم الاتحادية — من كوالالمبور (Kuala Lumpur) وبينانغ (Penang) إلى جوهور (Johor) وصباح (Sabah) وساراواك (Sarawak)، والضمانات التي تميّز ولايتَي بورنيو.", hi: "राज्य और संघीय क्षेत्र एक-दूसरे से कैसे भिन्न हैं — Kuala Lumpur और Penang से लेकर Johor, Sabah और Sarawak तक, और वे सुरक्षा उपाय जो Borneo के राज्यों को अलग बनाते हैं।", es: "En qué se diferencian los estados y los territorios federales — de Kuala Lumpur y Penang a Johor, Sabah y Sarawak, y las salvaguardas que distinguen a los estados de Borneo.", fr: "Ce qui distingue les États et les territoires fédéraux — de Kuala Lumpur et Penang à Johor, Sabah et Sarawak, et les garanties qui mettent à part les États de Bornéo." },
    steps: [
      { cat: 'states', slug: 'state-government-structure' },
      { cat: 'states', slug: 'kuala-lumpur' },
      { cat: 'states', slug: 'penang' },
      { cat: 'states', slug: 'johor' },
      { cat: 'states', slug: 'sabah' },
      { cat: 'states', slug: 'sarawak' },
      { cat: 'states', slug: 'sabah-sarawak-safeguards' },
      { cat: 'states', slug: 'how-state-governments-are-funded' },
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
    id: 'renting-a-home',
    pillar: 'living',
    icon: '🔑',
    title: { ms: "Menyewa rumah", en: "Renting a home", zh: "租房", ta: "வீடு வாடகைக்கு எடுப்பது", ja: "住まいを借りる", ko: "집 임차하기", th: "เช่าที่อยู่อาศัย", vi: "Thuê nhà ở", id: "Menyewa tempat tinggal", ar: "استئجار مسكن", hi: "घर किराए पर लेना", es: "Alquilar una vivienda", fr: "Louer un logement" },
    blurb: { ms: "Daripada mencari tempat dan perjanjian penyewaan hingga yuran ejen, serta menyambung bekalan elektrik, air, dan internet.", en: "From finding a place and the tenancy agreement to agent fees, and getting electricity, water, and internet connected.", zh: "从找房、租约到中介费,再到接通电、水与网络。", ta: "ஒரு இடத்தைத் தேடுவது மற்றும் வாடகை ஒப்பந்தம் தொடங்கி, முகவர் கட்டணம், மின்சாரம், தண்ணீர், இணையம் இணைப்பு பெறுவது வரை.", ja: "物件探しや賃貸契約から、仲介手数料、そして電気・水道・インターネットの開通まで。", ko: "집을 찾는 일과 임대차 계약에서 중개 수수료, 그리고 전기·수도·인터넷 연결까지.", th: "ตั้งแต่การหาที่พักและสัญญาเช่า ไปจนถึงค่านายหน้า และการขอติดตั้งไฟฟ้า น้ำประปา และอินเทอร์เน็ต", vi: "Từ tìm chỗ ở và hợp đồng thuê đến phí môi giới, cùng việc lắp đặt điện, nước và internet.", id: "Dari mencari tempat dan perjanjian sewa hingga biaya agen, serta menyambung listrik, air, dan internet.", ar: "من العثور على المكان وعقد الإيجار إلى أتعاب الوسيط، وتوصيل الكهرباء والماء والإنترنت.", hi: "जगह ढूँढने और किराया अनुबंध से लेकर एजेंट शुल्क तक, और बिजली, पानी व इंटरनेट का कनेक्शन लेने तक।", es: "Desde encontrar un lugar y el contrato de arrendamiento hasta las comisiones del agente, y conectar la electricidad, el agua y el internet.", fr: "De la recherche d'un bien et du contrat de location aux frais d'agence, puis au raccordement de l'électricité, de l'eau et d'internet." },
    steps: [
      { cat: 'property', slug: 'finding-a-rental' },
      { cat: 'property', slug: 'renting-a-home-tenancy' },
      { cat: 'property', slug: 'property-agents-and-fees' },
      { cat: 'property', slug: 'electricity-tnb-account' },
      { cat: 'property', slug: 'water-supply' },
      { cat: 'property', slug: 'internet-and-fibre' },
      { cat: 'property', slug: 'condo-living-maintenance-fees' },
      { cat: 'property', slug: 'rubbish-and-local-council' },
    ],
  },
  {
    id: 'raising-a-family',
    pillar: 'living',
    icon: '👨‍👩‍👧',
    title: { ms: "Membesarkan keluarga di sini", en: "Raising a family here", zh: "在这里养育家庭", ta: "இங்கு குடும்பம் வளர்ப்பது", ja: "この地で子育てする", ko: "이곳에서 가정 꾸리기", th: "สร้างครอบครัวที่นี่", vi: "Nuôi dạy gia đình tại đây", id: "Membesarkan keluarga di sini", ar: "تربية أسرة هنا", hi: "यहाँ परिवार बसाना", es: "Formar una familia aquí", fr: "Fonder une famille ici" },
    blurb: { ms: "Mendaftarkan kelahiran, memilih sekolah — kebangsaan, vernakular, atau antarabangsa — serta prasekolah, penjagaan kesihatan, dan insurans untuk keluarga.", en: "Registering a birth, choosing a school — national, vernacular, or international — plus preschool, healthcare, and insurance for the family.", zh: "报生、择校——国民、母语源流或国际学校——以及幼儿园、医疗与家庭保险。", ta: "பிறப்பைப் பதிவு செய்வது, பள்ளியைத் தேர்ந்தெடுப்பது — தேசிய, தாய்மொழி அல்லது சர்வதேச — மேலும் பாலர் பள்ளி, சுகாதாரம், குடும்பத்திற்கான காப்பீடு.", ja: "出生届、学校選び——国民学校、民族語学校、インターナショナルスクール——に加えて、就学前教育、医療、家族の保険まで。", ko: "출생 신고, 학교 선택 — 국립, 모국어, 국제학교 — 그리고 유아 교육, 의료, 가족 보험까지.", th: "การแจ้งเกิด การเลือกโรงเรียน — รัฐบาล ภาษาท้องถิ่น หรือนานาชาติ — รวมถึงชั้นอนุบาล การรักษาพยาบาล และประกันสำหรับครอบครัว", vi: "Đăng ký khai sinh, chọn trường — quốc gia, tiếng mẹ đẻ hay quốc tế — cùng mầm non, y tế và bảo hiểm cho gia đình.", id: "Mendaftarkan kelahiran, memilih sekolah — nasional, vernakular, atau internasional — ditambah prasekolah, layanan kesehatan, dan asuransi untuk keluarga.", ar: "تسجيل المواليد واختيار المدرسة — وطنية أو لغوية أو دولية — إضافةً إلى الحضانة والرعاية الصحية والتأمين للأسرة.", hi: "जन्म पंजीकरण, स्कूल का चुनाव — राष्ट्रीय, वर्नाकुलर या अंतरराष्ट्रीय — साथ ही प्रीस्कूल, स्वास्थ्य सेवा और परिवार के लिए बीमा।", es: "Registrar un nacimiento, elegir escuela — nacional, vernácula o internacional — además del preescolar, la sanidad y los seguros para la familia.", fr: "Déclarer une naissance, choisir une école — nationale, vernaculaire ou internationale — sans oublier la maternelle, la santé et l'assurance pour la famille." },
    steps: [
      { cat: 'settling-in', slug: 'registering-a-birth' },
      { cat: 'education', slug: 'malaysian-education-system' },
      { cat: 'education', slug: 'national-schools-sk-sjkc-sjkt' },
      { cat: 'education', slug: 'international-schools' },
      { cat: 'education', slug: 'preschool-tadika-childcare' },
      { cat: 'healthcare', slug: 'how-malaysian-healthcare-works' },
      { cat: 'healthcare', slug: 'medical-insurance' },
      { cat: 'settling-in', slug: 'dependant-social-visit-passes' },
    ],
  },
  {
    id: 'buying-a-home',
    pillar: 'living',
    icon: '🏡',
    title: { ms: "Membeli rumah", en: "Buying a home", zh: "购房", ta: "வீடு வாங்குதல்", ja: "住まいの購入", ko: "주택 구입", th: "ซื้อบ้าน", vi: "Mua nhà", id: "Membeli rumah", ar: "شراء منزل", hi: "घर खरीदना", es: "Comprar una vivienda", fr: "Acheter un logement" },
    blurb: { ms: "Perjalanan pembelian — proses dan pembiayaan, pegangan bebas lawan pajakan, peraturan untuk warga asing, perlindungan pembeli, serta cukai dan yuran yang menyusul.", en: "The purchase journey — the process and financing, freehold versus leasehold, the rules for foreigners, buyer protection, and the taxes and fees that follow.", zh: "购房流程——从程序与贷款、永久地契与租赁地契之别、外国人规定、买家保障,到随后的税费。", ta: "வாங்கும் பயணம் — செயல்முறையும் நிதியளிப்பும், சுதந்திர உரிமை எதிர் குத்தகை உரிமை, அயல்நாட்டினருக்கான விதிகள், வாங்குநர் பாதுகாப்பு, அத்துடன் தொடரும் வரிகளும் கட்டணங்களும்.", ja: "購入までの道のり — 手続きと資金調達、フリーホールドとリースホールドの違い、外国人向けのルール、買い手の保護、そして購入後にかかる税金と諸費用。", ko: "구입의 여정 — 절차와 금융, 자유 보유권 대 임차 보유권, 외국인 규정, 매수자 보호, 그리고 뒤따르는 세금과 비용.", th: "เส้นทางการซื้อ — ขั้นตอนและการเงิน กรรมสิทธิ์ถาวรกับกรรมสิทธิ์เช่า กฎสำหรับชาวต่างชาติ การคุ้มครองผู้ซื้อ และภาษีกับค่าธรรมเนียมที่ตามมา", vi: "Hành trình mua nhà — quy trình và tài chính, sở hữu vĩnh viễn so với sở hữu có thời hạn, quy định dành cho người nước ngoài, bảo vệ người mua, cùng các khoản thuế và phí kèm theo.", id: "Perjalanan pembelian — prosesnya dan pembiayaan, freehold versus leasehold, aturan bagi orang asing, perlindungan pembeli, serta pajak dan biaya yang mengikutinya.", ar: "رحلة الشراء — الإجراءات والتمويل، والتملك الحر مقابل الإيجار طويل الأمد، وقواعد تملّك الأجانب، وحماية المشتري، والضرائب والرسوم المترتبة على ذلك.", hi: "खरीद की यात्रा — प्रक्रिया और वित्तपोषण, फ़्रीहोल्ड बनाम लीजहोल्ड, विदेशियों के लिए नियम, खरीदार सुरक्षा, और उसके बाद आने वाले कर और शुल्क।", es: "El recorrido de la compra — el proceso y la financiación, la plena propiedad frente al arrendamiento, las normas para extranjeros, la protección del comprador y los impuestos y gastos posteriores.", fr: "Le parcours d'achat — les démarches et le financement, pleine propriété ou bail emphytéotique, les règles pour les étrangers, la protection de l'acheteur, et les taxes et frais qui suivent." },
    steps: [
      { cat: 'property', slug: 'buying-a-home-process' },
      { cat: 'property', slug: 'freehold-leasehold-strata-landed' },
      { cat: 'property', slug: 'home-loan-mortgage-financing' },
      { cat: 'property', slug: 'foreigners-buying-property' },
      { cat: 'property', slug: 'homebuyer-protection-abandoned-projects' },
      { cat: 'property', slug: 'real-property-gains-tax' },
      { cat: 'property', slug: 'assessment-and-quit-rent' },
      { cat: 'property', slug: 'property-inheritance-faraid-distribution' },
    ],
  },
  {
    id: 'retiring-in-malaysia',
    pillar: 'living',
    icon: '🌴',
    title: { ms: "Bersara di Malaysia", en: "Retiring in Malaysia", zh: "在马来西亚退休", ta: "மலேசியாவில் ஓய்வு வாழ்க்கை", ja: "マレーシアでの退職生活", ko: "말레이시아에서의 은퇴", th: "เกษียณในมาเลเซีย", vi: "Nghỉ hưu tại Malaysia", id: "Pensiun di Malaysia", ar: "التقاعد في ماليزيا", hi: "मलेशिया में सेवानिवृत्ति", es: "Jubilarse en Malasia", fr: "Prendre sa retraite en Malaisie" },
    blurb: { ms: "Menetap untuk jangka panjang — visa MM2H, kos sara hidup, penjagaan kesihatan dan insurans, membeli hartanah, serta laluan ke arah PR.", en: "Settling down for the long term — the MM2H visa, cost of living, healthcare and insurance, buying property, and the path toward permanent residency.", zh: "长期定居——MM2H 签证、生活成本、医疗与保险、购置房产,以及通往永久居留的路径。", ta: "நீண்டகால நிலைத்த வாழ்வு — MM2H விசா, வாழ்க்கைச் செலவு, சுகாதாரமும் காப்பீடும், சொத்து வாங்குதல், அத்துடன் நிரந்தரக் குடியிருப்பை நோக்கிய பாதை.", ja: "長く腰を据えて暮らすために — MM2Hビザ、生活費、医療と保険、不動産の購入、そして永住権への道のり。", ko: "장기 정착하기 — MM2H 비자, 생활비, 의료와 보험, 부동산 구입, 그리고 영주권으로 가는 길.", th: "ปักหลักอยู่อาศัยระยะยาว — วีซ่า MM2H ค่าครองชีพ สุขภาพและประกัน การซื้ออสังหาริมทรัพย์ และเส้นทางสู่การมีถิ่นที่อยู่ถาวร", vi: "An cư lâu dài — thị thực MM2H, chi phí sinh hoạt, y tế và bảo hiểm, mua bất động sản, cùng lộ trình tiến tới thường trú nhân.", id: "Menetap untuk jangka panjang — visa MM2H, biaya hidup, layanan kesehatan dan asuransi, membeli properti, serta jalan menuju izin tinggal tetap.", ar: "الاستقرار على المدى الطويل — تأشيرة MM2H وتكلفة المعيشة والرعاية الصحية والتأمين وشراء العقارات والمسار نحو الإقامة الدائمة.", hi: "लंबे समय के लिए बसना — MM2H वीज़ा, रहन-सहन का खर्च, स्वास्थ्य सेवा और बीमा, संपत्ति खरीदना, और स्थायी निवास की ओर राह।", es: "Instalarse a largo plazo — el visado MM2H, el coste de vida, la sanidad y los seguros, la compra de propiedad y el camino hacia la residencia permanente.", fr: "S'installer durablement — le visa MM2H, le coût de la vie, la santé et l'assurance, l'achat immobilier, et la voie vers la résidence permanente." },
    steps: [
      { cat: 'settling-in', slug: 'mm2h-long-stay-visa' },
      { cat: 'cost-of-living', slug: 'cost-of-living-overview' },
      { cat: 'healthcare', slug: 'how-malaysian-healthcare-works' },
      { cat: 'healthcare', slug: 'private-hospitals-and-costs' },
      { cat: 'healthcare', slug: 'medical-insurance' },
      { cat: 'property', slug: 'foreigners-buying-property' },
      { cat: 'settling-in', slug: 'permanent-residency-malaysia' },
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
  {
    id: 'paying-business-tax',
    pillar: 'doing-business',
    icon: '🧾',
    title: { ms: "Membayar cukai perniagaan", en: "Paying business tax", zh: "缴纳企业税", ta: "வணிக வரி செலுத்துவது", ja: "事業の税金を納める", ko: "사업세 납부", th: "การเสียภาษีธุรกิจ", vi: "Nộp thuế doanh nghiệp", id: "Membayar pajak usaha", ar: "دفع ضريبة الشركات", hi: "व्यवसाय कर चुकाना", es: "Pagar los impuestos de la empresa", fr: "Payer l'impôt des entreprises" },
    blurb: { ms: "Tanggungjawab cukai syarikat — pemastautinan, kadar korporat, Borang C dan CP204, kalendar cukai, SST, dan e-Invois.", en: "A company's tax duties — residence, corporate rates, the Form C and CP204, the tax calendar, SST, and e-invoicing.", zh: "公司的税务责任——税务居民身份、企业税率、C 表格与 CP204、报税时程、SST,以及电子发票。", ta: "ஒரு நிறுவனத்தின் வரிக் கடமைகள் — குடியிருப்பு நிலை, கார்ப்பரேட் விகிதங்கள், Form C மற்றும் CP204, வரி நாட்காட்டி, SST, மின்-விலைப்பட்டியல்.", ja: "企業の納税義務——居住地判定、法人税率、Form CとCP204、税務カレンダー、SST、そして電子インボイス。", ko: "회사의 세무 의무 — 거주지 판정, 법인세율, Form C와 CP204, 세무 일정, SST, 그리고 전자 송장.", th: "หน้าที่ด้านภาษีของบริษัท — ถิ่นที่อยู่ อัตราภาษีนิติบุคคล แบบ Form C และ CP204 ปฏิทินภาษี SST และใบกำกับภาษีอิเล็กทรอนิกส์", vi: "Nghĩa vụ thuế của công ty — cư trú, thuế suất doanh nghiệp, Form C và CP204, lịch thuế, SST và hóa đơn điện tử.", id: "Kewajiban pajak sebuah perusahaan — status residen, tarif korporat, Form C dan CP204, kalender pajak, SST, dan e-invoice.", ar: "الواجبات الضريبية للشركة — الإقامة والمعدلات على الشركات، نموذج Form C وCP204، الروزنامة الضريبية، SST، والفوترة الإلكترونية.", hi: "कंपनी के कर दायित्व — निवास, कॉरपोरेट दरें, Form C और CP204, कर कैलेंडर, SST और ई-इनवॉइसिंग।", es: "Las obligaciones fiscales de una empresa — residencia, tipos corporativos, el Form C y el CP204, el calendario tributario, el SST y la facturación electrónica.", fr: "Les obligations fiscales d'une société — résidence, taux d'imposition, le Form C et le CP204, le calendrier fiscal, la SST et la facturation électronique." },
    steps: [
      { cat: 'taxation', slug: 'company-tax-residence' },
      { cat: 'taxation', slug: 'corporate-tax-rates' },
      { cat: 'taxation', slug: 'form-c-and-cp204' },
      { cat: 'taxation', slug: 'company-tax-calendar' },
      { cat: 'taxation', slug: 'sst-explained' },
      { cat: 'taxation', slug: 'e-invoicing' },
      { cat: 'taxation', slug: 'capital-allowances' },
      { cat: 'taxation', slug: 'dividend-tax-malaysia' },
    ],
  },
  {
    id: 'closing-a-company',
    pillar: 'doing-business',
    icon: '🚪',
    title: { ms: "Menutup syarikat", en: "Closing a company", zh: "结束公司", ta: "நிறுவனத்தை மூடுவது", ja: "会社をたたむ", ko: "회사 폐업", th: "การปิดบริษัท", vi: "Đóng cửa công ty", id: "Menutup perusahaan", ar: "إغلاق شركة", hi: "कंपनी बंद करना", es: "Cerrar una empresa", fr: "Fermer une entreprise" },
    blurb: { ms: "Penggulungan atau pembatalan — cara menutup syarikat atau perniagaan dengan betul, dan bila penyelamatan korporat pilihan lebih baik.", en: "Winding up or striking off — the routes to close a company or business properly, and when corporate rescue is the better option.", zh: "清盘或除名——如何妥善结束公司或生意,以及何时企业拯救是更好的选择。", ta: "கலைப்பது அல்லது நீக்குவது — ஒரு நிறுவனம் அல்லது வணிகத்தை முறையாக மூடுவதற்கான வழிகள், கார்ப்பரேட் மீட்பு சிறந்த தேர்வாக இருக்கும் தருணம்.", ja: "清算か除名か——会社や事業を適切に閉じるための手続きと、事業再生がより良い選択となる場面。", ko: "청산 또는 등록 말소 — 회사나 사업체를 올바르게 정리하는 방법, 그리고 기업 회생이 더 나은 선택이 되는 경우.", th: "การเลิกกิจการหรือถอนชื่อออกจากทะเบียน — ช่องทางปิดบริษัทหรือธุรกิจอย่างถูกต้อง และเมื่อใดที่การฟื้นฟูกิจการเป็นทางเลือกที่ดีกว่า", vi: "Thanh lý hay xóa tên — các con đường để đóng một công ty hoặc doanh nghiệp đúng cách, và khi nào tái cấu trúc doanh nghiệp là lựa chọn tốt hơn.", id: "Pembubaran atau penghapusan — cara menutup perusahaan atau usaha dengan benar, dan kapan penyelamatan korporat jadi pilihan yang lebih baik.", ar: "التصفية أو الشطب — سبل إغلاق شركة أو نشاط تجاري على نحوٍ سليم، ومتى يكون الإنقاذ المؤسسي الخيار الأفضل.", hi: "परिसमापन या नाम-विलोपन — कंपनी या व्यवसाय को सही ढंग से बंद करने के रास्ते, और कब कॉरपोरेट रेस्क्यू बेहतर विकल्प है।", es: "Liquidación o baja registral — las vías para cerrar correctamente una empresa o un negocio, y cuándo el rescate corporativo es la mejor opción.", fr: "Liquidation ou radiation — les voies pour fermer correctement une société ou une entreprise, et quand le redressement est la meilleure option." },
    steps: [
      { cat: 'business', slug: 'close-a-company' },
      { cat: 'business', slug: 'members-voluntary-winding-up' },
      { cat: 'business', slug: 'creditors-voluntary-winding-up' },
      { cat: 'business', slug: 'winding-up-by-court-malaysia' },
      { cat: 'business', slug: 'strike-off-company-malaysia' },
      { cat: 'business', slug: 'corporate-rescue-malaysia' },
      { cat: 'business', slug: 'close-sole-proprietorship-partnership' },
    ],
  },
  {
    id: 'licences-and-permits',
    pillar: 'doing-business',
    icon: '📋',
    title: { ms: "Lesen & permit", en: "Licences & permits", zh: "执照与准证", ta: "உரிமங்களும் அனுமதிகளும்", ja: "ライセンスと許認可", ko: "인허가와 면허", th: "ใบอนุญาตและใบอนุญาตประกอบการ", vi: "Giấy phép & giấy chứng nhận", id: "Lisensi & izin", ar: "الرخص والتصاريح", hi: "लाइसेंस और परमिट", es: "Licencias y permisos", fr: "Licences & permis" },
    blurb: { ms: "Kelulusan yang mungkin diperlukan untuk beroperasi — lesen perniagaan, permit premis dan papan tanda, lesen khusus sektor, serta pensijilan halal.", en: "The approvals a business may need to operate — the business licence, premise and signboard permits, sector-specific licences, and halal certification.", zh: "营业可能需要的批准——商业执照、营业场所与招牌准证、行业专属执照,以及清真认证。", ta: "ஒரு வணிகம் இயங்க தேவைப்படக்கூடிய ஒப்புதல்கள் — வணிக உரிமம், வளாக மற்றும் விளம்பரப் பலகை அனுமதிகள், துறைசார் உரிமங்கள், அத்துடன் ஹலால் சான்றிதழ்.", ja: "事業を営むために必要となる認可 — 事業ライセンス、店舗・看板の許可、業種別のライセンス、そしてハラル認証。", ko: "사업 운영에 필요할 수 있는 승인 — 사업 면허, 영업장 및 간판 허가, 업종별 면허, 그리고 할랄 인증.", th: "การอนุมัติที่ธุรกิจอาจต้องมีเพื่อดำเนินกิจการ — ใบอนุญาตธุรกิจ ใบอนุญาตสถานประกอบการและป้ายชื่อ ใบอนุญาตเฉพาะภาคส่วน และการรับรองฮาลาล", vi: "Những phê duyệt mà một doanh nghiệp có thể cần để hoạt động — giấy phép kinh doanh, giấy phép mặt bằng và bảng hiệu, giấy phép theo từng ngành, cùng chứng nhận halal.", id: "Persetujuan yang mungkin dibutuhkan bisnis untuk beroperasi — lisensi usaha, izin premis dan papan tanda, lisensi khusus sektor, serta sertifikasi halal.", ar: "الموافقات التي قد يحتاجها النشاط التجاري لمزاولة عمله — رخصة النشاط التجاري وتصاريح المقر واللافتات والرخص الخاصة بكل قطاع وشهادة الحلال.", hi: "किसी व्यवसाय को चलाने के लिए ज़रूरी मंज़ूरियाँ — व्यवसाय लाइसेंस, परिसर और साइनबोर्ड परमिट, क्षेत्र-विशिष्ट लाइसेंस, और हलाल प्रमाणन।", es: "Las autorizaciones que un negocio puede necesitar para operar — la licencia comercial, los permisos de local y de rótulo, las licencias sectoriales y la certificación halal.", fr: "Les autorisations dont une entreprise peut avoir besoin pour opérer — la licence d'exploitation, les permis de local et d'enseigne, les licences sectorielles, et la certification halal." },
    steps: [
      { cat: 'business', slug: 'business-licence-malaysia' },
      { cat: 'business', slug: 'online-business-licence-malaysia' },
      { cat: 'business', slug: 'signboard-licence-malaysia' },
      { cat: 'business', slug: 'premise-licence-malaysia' },
      { cat: 'business', slug: 'sector-licence-directory' },
      { cat: 'business', slug: 'wrt-licence-malaysia' },
      { cat: 'business', slug: 'halal-certification-malaysia' },
      { cat: 'business', slug: 'factory-operating-licences-malaysia' },
    ],
  },
  {
    id: 'importing-and-exporting',
    pillar: 'doing-business',
    icon: '🚢',
    title: { ms: "Import & eksport", en: "Importing & exporting", zh: "进出口", ta: "இறக்குமதியும் ஏற்றுமதியும்", ja: "輸入と輸出", ko: "수입과 수출", th: "นำเข้าและส่งออก", vi: "Xuất nhập khẩu", id: "Impor & ekspor", ar: "الاستيراد والتصدير", hi: "आयात और निर्यात", es: "Importar y exportar", fr: "Importer & exporter" },
    blurb: { ms: "Menggerakkan barang merentasi sempadan — lesen import dan eksport, duti kastam dan eksais, permit yang diluluskan (AP), zon bebas, serta pembiayaan dagangan.", en: "Moving goods across the border — the import and export licence, customs and excise duties, approved permits, free zones, and trade financing.", zh: "跨境运送货物——进出口执照、关税与国产税、批准准证(AP)、自由区,以及贸易融资。", ta: "எல்லை தாண்டிப் பொருட்களை நகர்த்துதல் — இறக்குமதி மற்றும் ஏற்றுமதி உரிமம், சுங்கமும் கலால் வரிகளும், அங்கீகரிக்கப்பட்ட அனுமதிகள், தடையற்ற மண்டலங்கள், அத்துடன் வர்த்தக நிதியளிப்பு.", ja: "国境を越えて物を動かす — 輸出入ライセンス、関税と物品税、承認許可証（AP）、フリーゾーン、そして貿易金融。", ko: "국경 너머로 상품을 옮기기 — 수입·수출 면허, 관세와 소비세, 승인 허가(AP), 자유 구역, 그리고 무역 금융.", th: "การเคลื่อนย้ายสินค้าข้ามพรมแดน — ใบอนุญาตนำเข้าและส่งออก อากรศุลกากรและสรรพสามิต ใบอนุญาตที่ได้รับการอนุมัติ เขตปลอดอากร และการเงินเพื่อการค้า", vi: "Đưa hàng hóa qua biên giới — giấy phép nhập khẩu và xuất khẩu, thuế hải quan và thuế tiêu thụ đặc biệt, giấy phép được duyệt, khu thương mại tự do, cùng tài trợ thương mại.", id: "Memindahkan barang melintasi perbatasan — lisensi impor dan ekspor, bea cukai dan cukai, izin yang disetujui, zona bebas, serta pembiayaan perdagangan.", ar: "نقل البضائع عبر الحدود — رخصة الاستيراد والتصدير والرسوم الجمركية ورسوم المكوس والتصاريح المعتمدة والمناطق الحرة وتمويل التجارة.", hi: "सीमा पार माल की आवाजाही — आयात और निर्यात लाइसेंस, सीमा शुल्क और उत्पाद शुल्क, अनुमोदित परमिट, मुक्त क्षेत्र, और व्यापार वित्तपोषण।", es: "Mover mercancías a través de la frontera — la licencia de importación y exportación, los derechos de aduana e impuestos especiales, los permisos aprobados, las zonas francas y la financiación comercial.", fr: "Faire passer des marchandises à la frontière — la licence d'import et d'export, les droits de douane et d'accise, les permis approuvés, les zones franches, et le financement du commerce." },
    steps: [
      { cat: 'business', slug: 'import-export-licence-malaysia' },
      { cat: 'taxation', slug: 'customs-import-duty' },
      { cat: 'taxation', slug: 'excise-duty' },
      { cat: 'business', slug: 'approved-permit-ap-malaysia' },
      { cat: 'business', slug: 'anti-dumping-countervailing-duties' },
      { cat: 'business', slug: 'digital-free-trade-zone' },
      { cat: 'business', slug: 'warehouse-licence-malaysia' },
      { cat: 'business', slug: 'exim-bank-trade-financing-malaysia' },
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
