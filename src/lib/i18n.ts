import type { Locale } from './categories';

// The languages advertised in the UI (language switcher + hreflang alternates).
// A locale is added here only once its full corpus + chrome are launch-ready; before
// that it is soft-launched (routes/chrome built, but held OUT of this list so its /
// pages stay noindex and out of the sitemap, and the switcher never points at a page
// that isn't ready). Japanese (`ja`) open-launched 2026-09-20: full 1,094-article corpus
// translated + chrome localized.
export const LOCALES: Locale[] = ['ms', 'en', 'zh', 'ta', 'ja', 'ko', 'th', 'vi', 'id', 'ar', 'hi'];
export const DEFAULT_LOCALE: Locale = 'ms';

export const LOCALE_NAMES: Record<Locale, string> = {
  ms: 'Bahasa Melayu',
  en: 'English',
  zh: '中文',
  ta: 'தமிழ்',
  ja: '日本語',
  ko: '한국어',
  th: 'ไทย',
  vi: 'Tiếng Việt',
  id: 'Bahasa Indonesia',
  ar: 'العربية',
  hi: 'हिन्दी',
  es: 'Español',
};

/** UI string table. Keep keys stable; fall back to `ms` if a value is missing. */
const STRINGS = {
  'site.title': {
    ms: 'NegaraKu.md',
    en: 'NegaraKu.md',
    zh: 'NegaraKu.md',
    ta: 'NegaraKu.md',
    ja: 'NegaraKu.md',
    ko: 'NegaraKu.md',
    th: 'NegaraKu.md',
    vi: 'NegaraKu.md',
    id: 'NegaraKu.md',
    ar: 'NegaraKu.md',
    hi: 'NegaraKu.md',
    es: 'NegaraKu.md',
  },
  'site.tagline': {
    ms: 'Pangkalan pengetahuan sumber terbuka tentang Malaysia',
    en: 'An open-source knowledge base about Malaysia',
    zh: '关于马来西亚的开源知识库',
    ta: 'மலேசியா பற்றிய ஒரு திறந்த மூல அறிவுத் தளம்',
    ja: 'マレーシアに関するオープンソースの知識ベース',
    ko: '말레이시아에 관한 오픈소스 지식 베이스',
    th: 'ฐานความรู้โอเพนซอร์สเกี่ยวกับมาเลเซีย',
    vi: 'Cơ sở tri thức nguồn mở về Malaysia',
    id: 'Basis pengetahuan sumber terbuka tentang Malaysia',
    ar: 'قاعدة معرفية مفتوحة المصدر عن ماليزيا',
    hi: 'मलेशिया के बारे में एक ओपन-सोर्स ज्ञान कोश',
    es: 'Una base de conocimiento de código abierto sobre Malasia',
  },
  // Homepage meta description — a full ~150-char sentence (the short tagline
  // above is too brief for search snippets; Bing flagged it). Not shown on-page.
  'site.homeDescription': {
    ms: 'Pangkalan pengetahuan sumber terbuka dan mesra-AI tentang Malaysia — kerajaan, undang-undang, perniagaan, cukai, budaya dan kehidupan harian, berpetikan sumber, dalam sebelas bahasa.',
    en: 'A free, open-source, AI-friendly knowledge base about Malaysia — its government, laws, business, tax, culture and daily life, cited and available in eleven languages.',
    zh: 'NegaraKu.md 是一个关于马来西亚的开源、对 AI 友好的知识库，涵盖政府、法律、商业、税务、文化与日常生活，内容附引用来源，并提供十一种语言版本。',
    ta: 'மலேசியா பற்றிய இலவச, திறந்த மூல, AI-நட்பு அறிவுத் தளம் — அரசாங்கம், சட்டம், வணிகம், வரி, பண்பாடு மற்றும் அன்றாட வாழ்க்கை, மேற்கோள்களுடன், பதினொரு மொழிகளில்.',
    ja: 'マレーシアに関する無料・オープンソース・AIフレンドリーな知識ベース。政府・法律・ビジネス・税務・文化・日常生活を、出典付きで、11言語で提供します。',
    ko: '말레이시아에 관한 무료 오픈소스 AI 친화적 지식 베이스 — 정부, 법률, 비즈니스, 세무, 문화, 일상생활을 출처와 함께 11개 언어로 제공합니다.',
    th: 'ฐานความรู้เกี่ยวกับมาเลเซียที่เปิดให้ใช้ฟรี เป็นโอเพนซอร์ส และเป็นมิตรกับ AI — ครอบคลุมรัฐบาล กฎหมาย ธุรกิจ ภาษี วัฒนธรรม และชีวิตประจำวัน พร้อมการอ้างอิงแหล่งที่มา และให้บริการใน 11 ภาษา',
    vi: 'Cơ sở tri thức miễn phí, nguồn mở và thân thiện với AI về Malaysia — chính phủ, luật pháp, kinh doanh, thuế, văn hóa và đời sống hằng ngày, có trích dẫn nguồn và cung cấp bằng mười một ngôn ngữ.',
    id: 'Basis pengetahuan sumber terbuka dan ramah-AI tentang Malaysia — pemerintahan, hukum, bisnis, pajak, budaya, dan kehidupan sehari-hari, disertai kutipan sumber, dalam sebelas bahasa.',
    ar: 'قاعدة معرفية مجانية ومفتوحة المصدر وصديقة لـ AI عن ماليزيا — حكومتها وقوانينها وأعمالها وضرائبها وثقافتها وحياتها اليومية، موثّقة بالمصادر ومتاحة بإحدى عشرة لغة.',
    hi: 'मलेशिया के बारे में एक निःशुल्क, ओपन-सोर्स, AI-अनुकूल ज्ञान कोश — इसकी सरकार, कानून, व्यापार, कर, संस्कृति और दैनिक जीवन, स्रोतों सहित और ग्यारह भाषाओं में उपलब्ध।',
    es: 'Una base de conocimiento gratuita, de código abierto y compatible con la IA sobre Malasia — su gobierno, leyes, negocios, impuestos, cultura y vida cotidiana, con fuentes citadas y disponible en once idiomas.',
  },
  // Short brand tagline shown under the wordmark in the header lockup — the "what".
  'brand.tagline': {
    ms: 'Malaysia mesra-AI',
    en: 'AI-friendly Malaysia',
    zh: 'AI 友好的马来西亚',
    ta: 'AI-நட்பு மலேசியா',
    ja: 'AIフレンドリーなマレーシア',
    ko: 'AI 친화적인 말레이시아',
    th: 'มาเลเซียที่เป็นมิตรกับ AI',
    vi: 'Malaysia thân thiện với AI',
    id: 'Malaysia ramah-AI',
    ar: 'ماليزيا صديقة لـ AI',
    hi: 'AI-अनुकूल मलेशिया',
    es: 'Malasia compatible con la IA',
  },
  // Mission — the "why we exist". Distinct from brand.tagline (the "what"); a
  // rallying line, not a descriptor. Reused across About, hero, and metadata.
  'site.mission': {
    ms: 'Biar dunia mengenali Malaysia',
    en: 'Let the world know about Malaysia',
    zh: '让世界认识马来西亚',
    ta: 'மலேசியாவை உலகம் அறியட்டும்',
    ja: '世界にマレーシアを知ってもらおう',
    ko: '세계에 말레이시아를 알리자',
    th: 'ให้โลกได้รู้จักมาเลเซีย',
    vi: 'Để thế giới biết đến Malaysia',
    id: 'Biar dunia mengenal Malaysia',
    ar: 'دع العالم يعرف ماليزيا',
    hi: 'दुनिया को मलेशिया के बारे में बताएँ',
    es: 'Que el mundo conozca Malasia',
  },
  'nav.categories': { ms: 'Kategori', en: 'Categories', zh: '分类', ta: 'பிரிவுகள்', ja: 'カテゴリー', ko: '카테고리', th: 'หมวดหมู่', vi: 'Danh mục', id: 'Kategori', ar: 'الفئات', hi: 'श्रेणियाँ', es: 'Categorías' },
  'nav.search': { ms: 'Cari', en: 'Search', zh: '搜索', ta: 'தேடு', ja: '検索', ko: '검색', th: 'ค้นหา', vi: 'Tìm kiếm', id: 'Cari', ar: 'بحث', hi: 'खोज', es: 'Buscar' },
  // One placeholder for every site-wide search box (home hero, Explore, /search).
  'search.placeholder': {
    ms: 'Cari Malaysia — orang, tempat, peristiwa…',
    en: 'Search Malaysia — people, places, events…',
    zh: '搜索马来西亚 — 人物、地点、事件…',
    ta: 'மலேசியாவைத் தேடுங்கள் — நபர்கள், இடங்கள், நிகழ்வுகள்…',
    ja: 'マレーシアを検索 — 人物、場所、出来事…',
    ko: '말레이시아 검색 — 인물, 장소, 사건…',
    th: 'ค้นหามาเลเซีย — บุคคล สถานที่ เหตุการณ์…',
    vi: 'Tìm kiếm Malaysia — con người, địa điểm, sự kiện…',
    id: 'Cari Malaysia — orang, tempat, peristiwa…',
    ar: 'ابحث في ماليزيا — أشخاص، أماكن، أحداث…',
    hi: 'मलेशिया में खोजें — लोग, स्थान, घटनाएँ…',
    es: 'Busca en Malasia — personas, lugares, eventos…',
  },
  'nav.about': { ms: 'Tentang', en: 'About', zh: '关于', ta: 'பற்றி', ja: '概要', ko: '소개', th: 'เกี่ยวกับ', vi: 'Giới thiệu', id: 'Tentang', ar: 'حول', hi: 'परिचय', es: 'Acerca de' },
  'nav.contribute': { ms: 'Sumbang', en: 'Contribute', zh: '贡献', ta: 'பங்களி', ja: '貢献', ko: '기여', th: 'มีส่วนร่วม', vi: 'Đóng góp', id: 'Kontribusi', ar: 'ساهم', hi: 'योगदान करें', es: 'Contribuir' },
  'nav.explore': { ms: 'Terokai', en: 'Explore', zh: '探索', ta: 'ஆராய்க', ja: '探索', ko: '탐색', th: 'สำรวจ', vi: 'Khám phá', id: 'Jelajahi', ar: 'استكشف', hi: 'अन्वेषण करें', es: 'Explorar' },
  'nav.articles': { ms: 'Semua Artikel', en: 'All Articles', zh: '所有文章', ta: 'அனைத்து கட்டுரைகள்', ja: 'すべての記事', ko: '모든 기사', th: 'บทความทั้งหมด', vi: 'Tất cả bài viết', id: 'Semua Artikel', ar: 'جميع المقالات', hi: 'सभी लेख', es: 'Todos los artículos' },
  'nav.graph': { ms: 'Graf Pengetahuan', en: 'Knowledge Graph', zh: '知识图谱', ta: 'அறிவு வரைபடம்', ja: 'ナレッジグラフ', ko: '지식 그래프', th: 'กราฟความรู้', vi: 'Đồ thị tri thức', id: 'Graf Pengetahuan', ar: 'الرسم البياني المعرفي', hi: 'ज्ञान ग्राफ़', es: 'Grafo de conocimiento' },
  'nav.understand': { ms: 'Kenali', en: 'Understand', zh: '认识', ta: 'புரிதல்', ja: '知る', ko: '알아보기', th: 'ทำความเข้าใจ', vi: 'Tìm hiểu', id: 'Kenali', ar: 'افهم', hi: 'समझें', es: 'Comprender' },
  'nav.visit': { ms: 'Lawati', en: 'Visit', zh: '游览', ta: 'பயணம்', ja: '訪れる', ko: '방문', th: 'เยือน', vi: 'Tham quan', id: 'Kunjungi', ar: 'زُر', hi: 'यात्रा करें', es: 'Visitar' },
  'nav.living': { ms: 'Hidup', en: 'Living', zh: '生活', ta: 'வாழ்க்கை', ja: '暮らす', ko: '생활', th: 'ใช้ชีวิต', vi: 'Sinh sống', id: 'Hidup', ar: 'المعيشة', hi: 'जीवन', es: 'Vivir' },
  'nav.business': { ms: 'Bisnes', en: 'Business', zh: '经商', ta: 'வணிகம்', ja: 'ビジネス', ko: '비즈니스', th: 'ธุรกิจ', vi: 'Kinh doanh', id: 'Bisnis', ar: 'الأعمال', hi: 'व्यापार', es: 'Negocios' },
  'nav.more': { ms: 'Lagi', en: 'More', zh: '更多', ta: 'மேலும்', ja: 'その他', ko: '더보기', th: 'เพิ่มเติม', vi: 'Thêm', id: 'Lainnya', ar: 'المزيد', hi: 'और', es: 'Más' },
  'nav.settings': { ms: 'Tetapan', en: 'Settings', zh: '设置', ta: 'அமைப்புகள்', ja: '設定', ko: '설정', th: 'การตั้งค่า', vi: 'Cài đặt', id: 'Pengaturan', ar: 'الإعدادات', hi: 'सेटिंग्स', es: 'Ajustes' },
  'nav.data': { ms: 'Data', en: 'Data', zh: '数据', ta: 'தரவு', ja: 'データ', ko: '데이터', th: 'ข้อมูล', vi: 'Dữ liệu', id: 'Data', ar: 'البيانات', hi: 'डेटा', es: 'Datos' },
  'nav.dashboard': { ms: 'Papan Pemuka', en: 'Dashboard', zh: '仪表板', ta: 'டாஷ்போர்டு', ja: 'ダッシュボード', ko: '대시보드', th: 'แดชบอร์ด', vi: 'Bảng điều khiển', id: 'Dasbor', ar: 'لوحة التحكم', hi: 'डैशबोर्ड', es: 'Panel' },
  'nav.analytics': { ms: 'Analitik', en: 'Analytics', zh: '分析', ta: 'பகுப்பாய்வு', ja: 'アナリティクス', ko: '분석', th: 'การวิเคราะห์', vi: 'Phân tích', id: 'Analitik', ar: 'التحليلات', hi: 'विश्लेषण', es: 'Analítica' },
  'nav.elections': { ms: 'Pilihan Raya', en: 'Elections', zh: '选举', ta: 'தேர்தல்கள்', ja: '選挙', ko: '선거', th: 'การเลือกตั้ง', vi: 'Bầu cử', id: 'Pemilihan Umum', ar: 'الانتخابات', hi: 'चुनाव', es: 'Elecciones' },
  'nav.aboutPage': { ms: 'Tentang Kami', en: 'About Us', zh: '关于我们', ta: 'எங்களைப் பற்றி', ja: '私たちについて', ko: '우리에 대하여', th: 'เกี่ยวกับเรา', vi: 'Về chúng tôi', id: 'Tentang Kami', ar: 'من نحن', hi: 'हमारे बारे में', es: 'Sobre nosotros' },
  'nav.changelog': { ms: 'Log Perubahan', en: 'Changelog', zh: '更新日志', ta: 'மாற்ற பதிவு', ja: '変更履歴', ko: '변경 기록', th: 'บันทึกการเปลี่ยนแปลง', vi: 'Nhật ký thay đổi', id: 'Log Perubahan', ar: 'سجل التغييرات', hi: 'परिवर्तन-सूची', es: 'Registro de cambios' },
  'nav.milestones': { ms: 'Pencapaian Penting', en: 'Milestones', zh: '里程碑', ta: 'மைல்கற்கள்', ja: 'マイルストーン', ko: '주요 이정표', th: 'หมุดหมายสำคัญ', vi: 'Cột mốc', id: 'Pencapaian Penting', ar: 'المحطات البارزة', hi: 'मील के पत्थर', es: 'Hitos' },
  'nav.site': { ms: 'Laman', en: 'Site', zh: '网站', ta: 'தளம்', ja: 'サイト', ko: '사이트', th: 'เว็บไซต์', vi: 'Trang web', id: 'Situs', ar: 'الموقع', hi: 'साइट', es: 'Sitio' },
  'nav.exploreMalaysia': { ms: 'Terokai Malaysia', en: 'Explore Malaysia', zh: '探索马来西亚', ta: 'மலேசியாவை ஆராய்க', ja: 'マレーシアを探索', ko: '말레이시아 탐색', th: 'สำรวจมาเลเซีย', vi: 'Khám phá Malaysia', id: 'Jelajahi Malaysia', ar: 'استكشف ماليزيا', hi: 'मलेशिया का अन्वेषण करें', es: 'Explorar Malasia' },
  'nav.latest': { ms: 'Terkini', en: 'Latest', zh: '最新', ta: 'சமீபத்தியவை', ja: '最新', ko: '최신', th: 'ล่าสุด', vi: 'Mới nhất', id: 'Terkini', ar: 'الأحدث', hi: 'नवीनतम', es: 'Lo último' },
  'nav.timeline': { ms: 'Garis Masa', en: 'Timeline', zh: '时间线', ta: 'காலவரிசை', ja: 'タイムライン', ko: '타임라인', th: 'เส้นเวลา', vi: 'Dòng thời gian', id: 'Garis Waktu', ar: 'الخط الزمني', hi: 'समयरेखा', es: 'Cronología' },
  'nav.trending': { ms: 'Paling Banyak Dibaca', en: 'Most Read', zh: '最多阅读', ta: 'அதிகம் படித்தவை', ja: 'よく読まれている', ko: '많이 읽은 글', th: 'อ่านมากที่สุด', vi: 'Đọc nhiều nhất', id: 'Paling Banyak Dibaca', ar: 'الأكثر قراءة', hi: 'सर्वाधिक पढ़े गए', es: 'Lo más leído' },
  'nav.understandMalaysia': { ms: 'Kenali Malaysia', en: 'Understand Malaysia', zh: '认识马来西亚', ta: 'மலேசியாவைப் புரிந்துகொள்க', ja: 'マレーシアを知る', ko: '말레이시아 알아보기', th: 'ทำความเข้าใจมาเลเซีย', vi: 'Tìm hiểu Malaysia', id: 'Kenali Malaysia', ar: 'افهم ماليزيا', hi: 'मलेशिया को समझें', es: 'Comprender Malasia' },
  'nav.livingMalaysia': { ms: 'Hidup di Malaysia', en: 'Living in Malaysia', zh: '在马来西亚生活', ta: 'மலேசியாவில் வாழ்க்கை', ja: 'マレーシアで暮らす', ko: '말레이시아에서 살기', th: 'ใช้ชีวิตในมาเลเซีย', vi: 'Sinh sống tại Malaysia', id: 'Hidup di Malaysia', ar: 'المعيشة في ماليزيا', hi: 'मलेशिया में जीवन', es: 'Vivir en Malasia' },
  'nav.businessMalaysia': { ms: 'Berniaga di Malaysia', en: 'Doing Business in Malaysia', zh: '在马来西亚经商', ta: 'மலேசியாவில் வணிகம்', ja: 'マレーシアでビジネス', ko: '말레이시아에서 사업하기', th: 'ทำธุรกิจในมาเลเซีย', vi: 'Kinh doanh tại Malaysia', id: 'Berbisnis di Malaysia', ar: 'ممارسة الأعمال في ماليزيا', hi: 'मलेशिया में व्यापार करना', es: 'Hacer negocios en Malasia' },
  'nav.team': { ms: 'Pasukan Kami', en: 'Our Team', zh: '我们的团队', ta: 'எங்கள் குழு', ja: '私たちのチーム', ko: '우리 팀', th: 'ทีมของเรา', vi: 'Đội ngũ của chúng tôi', id: 'Tim Kami', ar: 'فريقنا', hi: 'हमारी टीम', es: 'Nuestro equipo' },
  'nav.faq': { ms: 'Soalan Lazim', en: 'FAQ', zh: '常见问题', ta: 'அடிக்கடி கேட்கப்படும் கேள்விகள்', ja: 'よくある質問', ko: '자주 묻는 질문', th: 'คำถามที่พบบ่อย', vi: 'Câu hỏi thường gặp', id: 'Pertanyaan Umum', ar: 'الأسئلة الشائعة', hi: 'अक्सर पूछे जाने वाले प्रश्न', es: 'Preguntas frecuentes' },
  'nav.submitArticle': { ms: 'Hantar Artikel', en: 'Submit Article', zh: '提交文章', ta: 'கட்டுரை சமர்ப்பி', ja: '記事を投稿', ko: '기사 제출', th: 'ส่งบทความ', vi: 'Gửi bài viết', id: 'Kirim Artikel', ar: 'إرسال مقال', hi: 'लेख सबमिट करें', es: 'Enviar artículo' },
  'nav.donate': { ms: 'Derma Token AI Anda', en: 'Donate Your AI Token', zh: '捐赠你的 AI Token', ta: 'உங்கள் AI டோக்கனை நன்கொடை அளியுங்கள்', ja: 'AIトークンを寄付', ko: 'AI 토큰 기부', th: 'บริจาคโทเคน AI ของคุณ', vi: 'Quyên góp token AI của bạn', id: 'Donasikan Token AI Anda', ar: 'تبرّع برموز AI الخاصة بك', hi: 'अपना AI टोकन दान करें', es: 'Dona tu token de IA' },
  'nav.support': { ms: 'Sokong NegaraKu.md', en: 'Support NegaraKu.md', zh: '支持 NegaraKu.md', ta: 'NegaraKu.md-ஐ ஆதரியுங்கள்', ja: 'NegaraKu.md を支援', ko: 'NegaraKu.md 후원', th: 'สนับสนุน NegaraKu.md', vi: 'Ủng hộ NegaraKu.md', id: 'Dukung NegaraKu.md', ar: 'ادعم NegaraKu.md', hi: 'NegaraKu.md का समर्थन करें', es: 'Apoya a NegaraKu.md' },
  'nav.whyContribute': { ms: 'Kenapa Menyumbang', en: 'Why Contribute', zh: '为何贡献', ta: 'ஏன் பங்களிக்க வேண்டும்', ja: '貢献する理由', ko: '기여하는 이유', th: 'เหตุใดจึงควรมีส่วนร่วม', vi: 'Vì sao nên đóng góp', id: 'Mengapa Berkontribusi', ar: 'لماذا تساهم', hi: 'योगदान क्यों करें', es: 'Por qué contribuir' },
  'nav.roles': { ms: 'Peranan & Cara Ia Berfungsi', en: 'Roles & How It Works', zh: '角色与运作方式', ta: 'பங்குகள் & இது எவ்வாறு செயல்படுகிறது', ja: '役割と仕組み', ko: '역할 및 작동 방식', th: 'บทบาทและวิธีการทำงาน', vi: 'Vai trò & Cách thức hoạt động', id: 'Peran & Cara Kerjanya', ar: 'الأدوار وكيفية العمل', hi: 'भूमिकाएँ और यह कैसे काम करता है', es: 'Roles y cómo funciona' },
  'nav.contributors': { ms: 'Penyumbang', en: 'Contributors', zh: '贡献者', ta: 'பங்களிப்பாளர்கள்', ja: '貢献者', ko: '기여자', th: 'ผู้มีส่วนร่วม', vi: 'Người đóng góp', id: 'Kontributor', ar: 'المساهمون', hi: 'योगदानकर्ता', es: 'Colaboradores' },
  'nav.cli': { ms: 'Alat CLI', en: 'CLI Tool', zh: 'CLI 工具', ta: 'CLI கருவி', ja: 'CLI ツール', ko: 'CLI 도구', th: 'เครื่องมือ CLI', vi: 'Công cụ CLI', id: 'Alat CLI', ar: 'أداة CLI', hi: 'CLI उपकरण', es: 'Herramienta CLI' },
  'nav.github': { ms: 'GitHub', en: 'GitHub', zh: 'GitHub', ta: 'GitHub', ja: 'GitHub', ko: 'GitHub', th: 'GitHub', vi: 'GitHub', id: 'GitHub', ar: 'GitHub', hi: 'GitHub', es: 'GitHub' },
  'nav.reportIssue': { ms: 'Laporkan Isu', en: 'Report an Issue', zh: '报告问题', ta: 'சிக்கலைப் புகாரளி', ja: '問題を報告', ko: '문제 신고', th: 'รายงานปัญหา', vi: 'Báo cáo sự cố', id: 'Laporkan Isu', ar: 'الإبلاغ عن مشكلة', hi: 'समस्या की रिपोर्ट करें', es: 'Informar de un problema' },
  'nav.suggest': { ms: 'Cadangkan Penambahbaikan', en: 'Suggest an Improvement', zh: '建议改进', ta: 'மேம்பாட்டைப் பரிந்துரையுங்கள்', ja: '改善を提案', ko: '개선 제안', th: 'เสนอการปรับปรุง', vi: 'Đề xuất cải tiến', id: 'Sarankan Perbaikan', ar: 'اقترح تحسينًا', hi: 'सुधार का सुझाव दें', es: 'Sugerir una mejora' },
  // Section headings inside the Explore dropdown (rendered uppercase via CSS).
  'nav.grpDiscover': { ms: 'Temui', en: 'Discover', zh: '发现', ta: 'கண்டறி', ja: '発見', ko: '발견', th: 'ค้นพบ', vi: 'Khám phá', id: 'Temukan', ar: 'اكتشف', hi: 'खोजें', es: 'Descubrir' },
  'nav.grpSections': { ms: 'Tonggak', en: 'Pillars', zh: '支柱', ta: 'தூண்கள்', ja: '柱', ko: '핵심 축', th: 'เสาหลัก', vi: 'Trụ cột', id: 'Pilar', ar: 'الركائز', hi: 'स्तंभ', es: 'Pilares' },
  'nav.grpTools': { ms: 'Alat', en: 'Tools', zh: '工具', ta: 'கருவிகள்', ja: 'ツール', ko: '도구', th: 'เครื่องมือ', vi: 'Công cụ', id: 'Alat', ar: 'الأدوات', hi: 'उपकरण', es: 'Herramientas' },
  // Section headings inside the Contribute dropdown.
  'nav.grpGetStarted': { ms: 'Bermula', en: 'Get started', zh: '开始', ta: 'தொடங்குங்கள்', ja: 'はじめる', ko: '시작하기', th: 'เริ่มต้น', vi: 'Bắt đầu', id: 'Mulai', ar: 'ابدأ', hi: 'शुरू करें', es: 'Empezar' },
  'nav.grpContent': { ms: 'Kandungan', en: 'Content', zh: '内容', ta: 'உள்ளடக்கம்', ja: 'コンテンツ', ko: '콘텐츠', th: 'เนื้อหา', vi: 'Nội dung', id: 'Konten', ar: 'المحتوى', hi: 'सामग्री', es: 'Contenido' },
  'nav.grpSupportUs': { ms: 'Sokong Kami', en: 'Support us', zh: '支持我们', ta: 'எங்களை ஆதரியுங்கள்', ja: '支援する', ko: '후원하기', th: 'สนับสนุนเรา', vi: 'Ủng hộ chúng tôi', id: 'Dukung Kami', ar: 'ادعمنا', hi: 'हमारा समर्थन करें', es: 'Apóyanos' },
  'nav.grpDevelop': { ms: 'Bangunkan', en: 'Develop', zh: '开发', ta: 'உருவாக்கு', ja: '開発', ko: '개발', th: 'พัฒนา', vi: 'Phát triển', id: 'Kembangkan', ar: 'طوّر', hi: 'विकसित करें', es: 'Desarrollar' },
  // New nav destinations.
  'nav.worklist': { ms: 'Senarai Kerja', en: 'Worklist', zh: '工作清单', ta: 'வேலைப் பட்டியல்', ja: '作業リスト', ko: '작업 목록', th: 'รายการงาน', vi: 'Danh sách công việc', id: 'Daftar Kerja', ar: 'قائمة العمل', hi: 'कार्य-सूची', es: 'Lista de trabajo' },
  'nav.siteBug': { ms: 'Laporkan Pepijat Laman', en: 'Report a Site Bug', zh: '报告网站故障', ta: 'தள பிழையைப் புகாரளி', ja: 'サイトの不具合を報告', ko: '사이트 버그 신고', th: 'รายงานข้อบกพร่องของเว็บไซต์', vi: 'Báo lỗi trang web', id: 'Laporkan Bug Situs', ar: 'الإبلاغ عن خطأ في الموقع', hi: 'साइट बग की रिपोर्ट करें', es: 'Informar de un error del sitio' },
  'nav.forAI': { ms: 'Untuk AI · llms.txt', en: 'For AI · llms.txt', zh: '面向 AI · llms.txt', ta: 'AI-க்கு · llms.txt', ja: 'AI向け · llms.txt', ko: 'AI용 · llms.txt', th: 'สำหรับ AI · llms.txt', vi: 'Dành cho AI · llms.txt', id: 'Untuk AI · llms.txt', ar: 'لأجل AI · llms.txt', hi: 'AI के लिए · llms.txt', es: 'Para IA · llms.txt' },
  'nav.menu': { ms: 'Menu', en: 'Menu', zh: '菜单', ta: 'மெனு', ja: 'メニュー', ko: '메뉴', th: 'เมนู', vi: 'Menu', id: 'Menu', ar: 'القائمة', hi: 'मेन्यू', es: 'Menú' },
  'nav.startHere': { ms: 'Mula di sini', en: 'Start here', zh: '从这里开始', ta: 'இங்கே தொடங்குங்கள்', ja: 'ここから始める', ko: '여기서 시작', th: 'เริ่มที่นี่', vi: 'Bắt đầu tại đây', id: 'Mulai di sini', ar: 'ابدأ هنا', hi: 'यहाँ से शुरू करें', es: 'Empieza aquí' },
  'nav.grpAbout': { ms: 'Tentang NegaraKu.md', en: 'About NegaraKu.md', zh: '关于 NegaraKu.md', ta: 'NegaraKu.md பற்றி', ja: 'NegaraKu.md について', ko: 'NegaraKu.md 소개', th: 'เกี่ยวกับ NegaraKu.md', vi: 'Giới thiệu NegaraKu.md', id: 'Tentang NegaraKu.md', ar: 'حول NegaraKu.md', hi: 'NegaraKu.md के बारे में', es: 'Acerca de NegaraKu.md' },
  'nav.grpThisSite': { ms: 'Laman ini', en: 'This site', zh: '本网站', ta: 'இந்த தளம்', ja: 'このサイト', ko: '이 사이트', th: 'เว็บไซต์นี้', vi: 'Trang web này', id: 'Situs ini', ar: 'هذا الموقع', hi: 'यह साइट', es: 'Este sitio' },

  // Contributor View (launchpad) — lifecycle nav + the view-mode toggle.
  'cnav.lifecycle': { ms: 'Kitaran Hayat', en: 'Lifecycle', zh: '生命周期', ta: 'வாழ்க்கைச் சுழற்சி', ja: 'ライフサイクル', ko: '수명 주기', th: 'วงจรชีวิต', vi: 'Vòng đời', id: 'Siklus Hidup', ar: 'دورة الحياة', hi: 'जीवनचक्र', es: 'Ciclo de vida' },
  'cnav.guide': { ms: 'Panduan penyumbang', en: 'Contributor guide', zh: '贡献者指南', ta: 'பங்களிப்பாளர் வழிகாட்டி', ja: '貢献者ガイド', ko: '기여자 가이드', th: 'คู่มือผู้มีส่วนร่วม', vi: 'Hướng dẫn người đóng góp', id: 'Panduan kontributor', ar: 'دليل المساهم', hi: 'योगदानकर्ता मार्गदर्शिका', es: 'Guía del colaborador' },
  'cnav.grpOnSite': { ms: 'Di laman ini', en: 'On this site', zh: '本站', ta: 'இந்த தளத்தில்', ja: 'このサイト内', ko: '이 사이트에서', th: 'บนเว็บไซต์นี้', vi: 'Trên trang web này', id: 'Di situs ini', ar: 'على هذا الموقع', hi: 'इस साइट पर', es: 'En este sitio' },
  'cnav.grpOnGitHub': { ms: 'Di GitHub', en: 'On GitHub', zh: '在 GitHub', ta: 'GitHub-இல்', ja: 'GitHub 上', ko: 'GitHub에서', th: 'บน GitHub', vi: 'Trên GitHub', id: 'Di GitHub', ar: 'على GitHub', hi: 'GitHub पर', es: 'En GitHub' },
  'cnav.grpBuild': { ms: 'Bina', en: 'Build', zh: '构建', ta: 'கட்டமை', ja: 'ビルド', ko: '빌드', th: 'สร้าง', vi: 'Xây dựng', id: 'Bangun', ar: 'البناء', hi: 'बिल्ड', es: 'Compilar' },
  'cnav.reviewQueue': { ms: 'Barisan semakan (PR)', en: 'Review queue (PRs)', zh: '审核队列（PR）', ta: 'மதிப்பாய்வு வரிசை (PRs)', ja: 'レビュー待ち（PR）', ko: '검토 대기열 (PR)', th: 'คิวการตรวจทาน (PR)', vi: 'Hàng đợi xét duyệt (PR)', id: 'Antrean tinjauan (PR)', ar: 'قائمة المراجعة (PRs)', hi: 'समीक्षा कतार (PRs)', es: 'Cola de revisión (PR)' },
  'cnav.drafts': { ms: 'Artikel draf', en: 'Draft articles', zh: '草稿文章', ta: 'வரைவு கட்டுரைகள்', ja: '下書き記事', ko: '초안 기사', th: 'บทความฉบับร่าง', vi: 'Bài viết nháp', id: 'Artikel draf', ar: 'المقالات المسودة', hi: 'मसौदा लेख', es: 'Artículos en borrador' },
  'cnav.articleIssues': { ms: 'Isu artikel', en: 'Article issues', zh: '文章问题', ta: 'கட்டுரை சிக்கல்கள்', ja: '記事の問題', ko: '기사 이슈', th: 'ปัญหาของบทความ', vi: 'Sự cố bài viết', id: 'Isu artikel', ar: 'مشكلات المقالات', hi: 'लेख संबंधी समस्याएँ', es: 'Incidencias de artículos' },
  'cnav.articleRequests': { ms: 'Permintaan artikel', en: 'Article requests', zh: '文章请求', ta: 'கட்டுரை கோரிக்கைகள்', ja: '記事のリクエスト', ko: '기사 요청', th: 'คำขอบทความ', vi: 'Yêu cầu bài viết', id: 'Permintaan artikel', ar: 'طلبات المقالات', hi: 'लेख अनुरोध', es: 'Solicitudes de artículos' },
  'cnav.translationIssues': { ms: 'Isu terjemahan', en: 'Translation issues', zh: '翻译问题', ta: 'மொழிபெயர்ப்பு சிக்கல்கள்', ja: '翻訳の問題', ko: '번역 이슈', th: 'ปัญหาการแปล', vi: 'Sự cố dịch thuật', id: 'Isu terjemahan', ar: 'مشكلات الترجمة', hi: 'अनुवाद संबंधी समस्याएँ', es: 'Incidencias de traducción' },
  'cnav.newArticle': { ms: 'Artikel baharu (templat)', en: 'New article (template)', zh: '新文章（模板）', ta: 'புதிய கட்டுரை (வார்ப்புரு)', ja: '新規記事（テンプレート）', ko: '새 기사 (템플릿)', th: 'บทความใหม่ (เทมเพลต)', vi: 'Bài viết mới (mẫu)', id: 'Artikel baru (templat)', ar: 'مقال جديد (قالب)', hi: 'नया लेख (टेम्पलेट)', es: 'Artículo nuevo (plantilla)' },
  'cnav.actions': { ms: 'Tindakan / lakaran', en: 'Actions / deploys', zh: '操作 / 部署', ta: 'செயல்கள் / வெளியீடுகள்', ja: 'アクション / デプロイ', ko: '작업 / 배포', th: 'การดำเนินการ / การปรับใช้', vi: 'Hành động / triển khai', id: 'Tindakan / deploy', ar: 'الإجراءات / عمليات النشر', hi: 'क्रियाएँ / परिनियोजन', es: 'Acciones / despliegues' },
  'cnav.deploy': { ms: 'Deploy + mod penyelenggaraan', en: 'Deploy + maintenance', zh: '部署 + 维护', ta: 'வெளியீடு + பராமரிப்பு', ja: 'デプロイ + メンテナンス', ko: '배포 + 유지보수', th: 'การปรับใช้ + การบำรุงรักษา', vi: 'Triển khai + bảo trì', id: 'Deploy + mode pemeliharaan', ar: 'النشر + الصيانة', hi: 'परिनियोजन + रखरखाव', es: 'Despliegue + mantenimiento' },
  // Workspace-aligned nav (mirrors the Contributor home sections; shared labels).
  'cnav.workspace': { ms: 'Ruang kerja', en: 'Workspace', zh: '工作区', ta: 'பணியிடம்', ja: 'ワークスペース', ko: '작업 공간', th: 'พื้นที่ทำงาน', vi: 'Không gian làm việc', id: 'Ruang kerja', ar: 'مساحة العمل', hi: 'कार्यक्षेत्र', es: 'Espacio de trabajo' },
  'cnav.myWork': { ms: 'Kerja saya', en: 'My work', zh: '我的工作', ta: 'எனது பணி', ja: '自分の作業', ko: '내 작업', th: 'งานของฉัน', vi: 'Việc của tôi', id: 'Pekerjaan saya', ar: 'عملي', hi: 'मेरा काम', es: 'Mi trabajo' },
  'cnav.findTask': { ms: 'Cari tugas', en: 'Find a task', zh: '寻找任务', ta: 'ஒரு பணியைக் கண்டறி', ja: 'タスクを探す', ko: '작업 찾기', th: 'หางานทำ', vi: 'Tìm một việc', id: 'Cari tugas', ar: 'ابحث عن مهمة', hi: 'कोई कार्य खोजें', es: 'Buscar una tarea' },
  'cnav.project': { ms: 'Projek', en: 'Project', zh: '项目', ta: 'திட்டம்', ja: 'プロジェクト', ko: '프로젝트', th: 'โครงการ', vi: 'Dự án', id: 'Proyek', ar: 'المشروع', hi: 'परियोजना', es: 'Proyecto' },
  'cnav.guides': { ms: 'Panduan', en: 'Guides', zh: '指南', ta: 'வழிகாட்டிகள்', ja: 'ガイド', ko: '가이드', th: 'คู่มือ', vi: 'Hướng dẫn', id: 'Panduan', ar: 'الأدلة', hi: 'मार्गदर्शिकाएँ', es: 'Guías' },
  'cnav.grpNeedsAttention': { ms: 'Perlu perhatian', en: 'Needs attention', zh: '需要关注', ta: 'கவனம் தேவை', ja: '要対応', ko: '주의 필요', th: 'ต้องให้ความสนใจ', vi: 'Cần chú ý', id: 'Perlu perhatian', ar: 'يحتاج إلى انتباه', hi: 'ध्यान देने की आवश्यकता', es: 'Requiere atención' },
  'cnav.grpStartContributing': { ms: 'Mula menyumbang', en: 'Start contributing', zh: '开始贡献', ta: 'பங்களிக்கத் தொடங்கு', ja: '貢献を始める', ko: '기여 시작', th: 'เริ่มมีส่วนร่วม', vi: 'Bắt đầu đóng góp', id: 'Mulai berkontribusi', ar: 'ابدأ المساهمة', hi: 'योगदान शुरू करें', es: 'Empezar a contribuir' },
  'cnav.myPrs': { ms: 'Pull request saya', en: 'My pull requests', zh: '我的 pull request', ta: 'எனது pull request-கள்', ja: '自分の pull request', ko: '내 pull request', th: 'pull request ของฉัน', vi: 'Pull request của tôi', id: 'Pull request saya', ar: 'طلبات السحب الخاصة بي', hi: 'मेरे pull request', es: 'Mis pull requests' },
  'cnav.assigned': { ms: 'Ditugaskan kepada saya', en: 'Assigned to me', zh: '分配给我的', ta: 'எனக்கு ஒதுக்கப்பட்டவை', ja: '自分の担当', ko: '나에게 할당됨', th: 'ที่มอบหมายให้ฉัน', vi: 'Được giao cho tôi', id: 'Ditugaskan ke saya', ar: 'المُسندة إليّ', hi: 'मुझे सौंपे गए', es: 'Asignado a mí' },
  'cnav.reviewRequested': { ms: 'Semakan diminta', en: 'Review requested', zh: '请求我审阅', ta: 'மதிப்பாய்வு கோரப்பட்டது', ja: 'レビュー依頼', ko: '검토 요청됨', th: 'ถูกขอให้รีวิว', vi: 'Được yêu cầu duyệt', id: 'Diminta meninjau', ar: 'طُلبت المراجعة', hi: 'समीक्षा का अनुरोध किया गया', es: 'Revisión solicitada' },
  'cnav.prsToReview': { ms: 'Pull request untuk disemak', en: 'Pull requests to review', zh: '待审阅的 pull request', ta: 'மதிப்பாய்வு செய்ய வேண்டிய pull request-கள்', ja: 'レビュー待ちの pull request', ko: '검토할 pull request', th: 'pull request ที่ต้องรีวิว', vi: 'Pull request cần duyệt', id: 'Pull request untuk ditinjau', ar: 'طلبات السحب للمراجعة', hi: 'समीक्षा के लिए pull request', es: 'Pull requests para revisar' },
  'cnav.openArticleIssues': { ms: 'Isu artikel terbuka', en: 'Open article issues', zh: '未关闭的文章问题', ta: 'திறந்த கட்டுரை issue-கள்', ja: '未解決の記事 issue', ko: '열린 기사 이슈', th: 'issue บทความที่เปิดอยู่', vi: 'Issue bài viết đang mở', id: 'Issue artikel yang terbuka', ar: 'مشكلات المقالات المفتوحة', hi: 'खुली लेख issue', es: 'Incidencias de artículos abiertas' },
  'cnav.buildStatus': { ms: 'Status bina & lancar', en: 'Build & deploy status', zh: '构建与部署状态', ta: 'உருவாக்கம் & வெளியீட்டு நிலை', ja: 'ビルドとデプロイ状況', ko: '빌드 및 배포 상태', th: 'สถานะการ build และ deploy', vi: 'Trạng thái build & deploy', id: 'Status build & deploy', ar: 'حالة البناء والنشر', hi: 'बिल्ड और परिनियोजन स्थिति', es: 'Estado de compilación y despliegue' },
  'cnav.goodFirst': { ms: 'Isu pertama yang baik', en: 'Good first issues', zh: '适合新手的 issue', ta: 'தொடக்கநிலை issue-கள்', ja: '初心者向け issue', ko: '입문용 이슈', th: 'issue สำหรับมือใหม่', vi: 'Issue cho người mới', id: 'Issue untuk pemula', ar: 'مشكلات مناسبة للمبتدئين', hi: 'शुरुआती लोगों के लिए अच्छी issue', es: 'Buenas incidencias para empezar' },
  'cnav.translationGaps': { ms: 'Jurang terjemahan', en: 'Translation gaps', zh: '翻译缺口', ta: 'மொழிபெயர்ப்பு இடைவெளிகள்', ja: '翻訳の欠落', ko: '번역 누락', th: 'ช่องว่างการแปล', vi: 'Thiếu bản dịch', id: 'Celah terjemahan', ar: 'فجوات الترجمة', hi: 'अनुवाद की कमियाँ', es: 'Lagunas de traducción' },
  'cnav.fullGuide': { ms: 'Panduan sumbangan penuh', en: 'Full contribution guide', zh: '完整贡献指南', ta: 'முழுப் பங்களிப்பு வழிகாட்டி', ja: '貢献ガイド全文', ko: '전체 기여 가이드', th: 'คู่มือการมีส่วนร่วมฉบับเต็ม', vi: 'Hướng dẫn đóng góp đầy đủ', id: 'Panduan kontribusi lengkap', ar: 'دليل المساهمة الكامل', hi: 'संपूर्ण योगदान मार्गदर्शिका', es: 'Guía de contribución completa' },
  'cnav.newToGithub': { ms: 'Baru dengan GitHub?', en: 'New to GitHub?', zh: 'GitHub 新手？', ta: 'GitHub-இல் புதியவரா?', ja: 'GitHub は初めて？', ko: 'GitHub이 처음?', th: 'เพิ่งใช้ GitHub?', vi: 'Mới dùng GitHub?', id: 'Baru di GitHub?', ar: 'جديد على GitHub؟', hi: 'GitHub पर नए हैं?', es: '¿Nuevo en GitHub?' },
  'cnav.toContributor': { ms: 'Paparan Penyumbang', en: 'Contributor view', zh: '贡献者视图', ta: 'பங்களிப்பாளர் காட்சி', ja: '貢献者ビュー', ko: '기여자 보기', th: 'มุมมองผู้มีส่วนร่วม', vi: 'Chế độ xem người đóng góp', id: 'Tampilan Kontributor', ar: 'عرض المساهم', hi: 'योगदानकर्ता दृश्य', es: 'Vista de colaborador' },
  'cnav.toReader': { ms: 'Paparan Pembaca', en: 'Reader view', zh: '读者视图', ta: 'வாசகர் காட்சி', ja: '読者ビュー', ko: '독자 보기', th: 'มุมมองผู้อ่าน', vi: 'Chế độ xem người đọc', id: 'Tampilan Pembaca', ar: 'عرض القارئ', hi: 'पाठक दृश्य', es: 'Vista de lector' },
  'cnav.signout': { ms: 'Log keluar', en: 'Sign out', zh: '退出登录', ta: 'வெளியேறு', ja: 'ログアウト', ko: '로그아웃', th: 'ออกจากระบบ', vi: 'Đăng xuất', id: 'Keluar', ar: 'تسجيل الخروج', hi: 'साइन आउट', es: 'Cerrar sesión' },
  'cnav.viewSwitch': { ms: 'Tukar paparan (Pembaca / Penyumbang)', en: 'Switch view (Reader / Contributor)', zh: '切换视图（读者 / 贡献者）', ta: 'காட்சியை மாற்று (வாசகர் / பங்களிப்பாளர்)', ja: 'ビューを切り替え（読者 / 貢献者）', ko: '보기 전환 (독자 / 기여자)', th: 'สลับมุมมอง (ผู้อ่าน / ผู้มีส่วนร่วม)', vi: 'Chuyển chế độ xem (Người đọc / Người đóng góp)', id: 'Ganti tampilan (Pembaca / Kontributor)', ar: 'تبديل العرض (القارئ / المساهم)', hi: 'दृश्य बदलें (पाठक / योगदानकर्ता)', es: 'Cambiar vista (Lector / Colaborador)' },
  // Short one-word labels for the segmented view switch.
  'cnav.reader': { ms: 'Pembaca', en: 'Reader', zh: '读者', ta: 'வாசகர்', ja: '読者', ko: '독자', th: 'ผู้อ่าน', vi: 'Người đọc', id: 'Pembaca', ar: 'القارئ', hi: 'पाठक', es: 'Lector' },
  'cnav.contributor': { ms: 'Penyumbang', en: 'Contributor', zh: '贡献者', ta: 'பங்களிப்பாளர்', ja: '貢献者', ko: '기여자', th: 'ผู้มีส่วนร่วม', vi: 'Người đóng góp', id: 'Kontributor', ar: 'المساهم', hi: 'योगदानकर्ता', es: 'Colaborador' },
  'nav.signin': { ms: 'Log masuk penyumbang', en: 'Contributor sign-in', zh: '贡献者登录', ta: 'பங்களிப்பாளர் உள்நுழைவு', ja: '貢献者ログイン', ko: '기여자 로그인', th: 'เข้าสู่ระบบผู้มีส่วนร่วม', vi: 'Đăng nhập người đóng góp', id: 'Masuk kontributor', ar: 'تسجيل دخول المساهم', hi: 'योगदानकर्ता साइन-इन', es: 'Inicio de sesión de colaborador' },
  'reader.title': { ms: 'Tetapan bacaan', en: 'Reading settings', zh: '阅读设置', ta: 'வாசிப்பு அமைப்புகள்', ja: '読書設定', ko: '읽기 설정', th: 'การตั้งค่าการอ่าน', vi: 'Cài đặt đọc', id: 'Pengaturan bacaan', ar: 'إعدادات القراءة', hi: 'पठन सेटिंग्स', es: 'Ajustes de lectura' },
  'reader.textSize': { ms: 'Saiz teks', en: 'Text size', zh: '字号', ta: 'எழுத்து அளவு', ja: '文字サイズ', ko: '글자 크기', th: 'ขนาดตัวอักษร', vi: 'Cỡ chữ', id: 'Ukuran teks', ar: 'حجم النص', hi: 'पाठ का आकार', es: 'Tamaño del texto' },
  'reader.sizeStandard': { ms: 'Biasa', en: 'Standard', zh: '标准', ta: 'இயல்பு', ja: '標準', ko: '표준', th: 'มาตรฐาน', vi: 'Tiêu chuẩn', id: 'Standar', ar: 'قياسي', hi: 'मानक', es: 'Estándar' },
  'reader.sizeLarge': { ms: 'Besar', en: 'Large', zh: '大', ta: 'பெரிது', ja: '大', ko: '크게', th: 'ใหญ่', vi: 'Lớn', id: 'Besar', ar: 'كبير', hi: 'बड़ा', es: 'Grande' },
  'reader.sizeXlarge': { ms: 'Ekstra', en: 'X-Large', zh: '特大', ta: 'மிகப் பெரிது', ja: '特大', ko: '아주 크게', th: 'ใหญ่พิเศษ', vi: 'Rất lớn', id: 'Ekstra', ar: 'كبير جدًا', hi: 'अति बड़ा', es: 'Muy grande' },
  'home.hero.title': {
    ms: 'Fahami Malaysia secara mendalam',
    en: 'Understand Malaysia, deeply',
    zh: '深入认识马来西亚',
    ta: 'மலேசியாவை ஆழமாகப் புரிந்துகொள்ளுங்கள்',
    ja: 'マレーシアを深く理解する',
    ko: '말레이시아를 깊이 이해하기',
    th: 'เข้าใจมาเลเซียอย่างลึกซึ้ง',
    vi: 'Hiểu Malaysia một cách sâu sắc',
    id: 'Pahami Malaysia secara mendalam',
    ar: 'افهم ماليزيا بعمق',
    hi: 'मलेशिया को गहराई से समझें',
    es: 'Comprende Malasia, en profundidad',
  },
  'home.hero.subtitle': {
    ms: 'Naratif yang dikurasi, boleh dibaca manusia dan AI — satu sumber kebenaran tentang negara kita.',
    en: 'Curated, human- and AI-readable narratives — a single source of truth about our nation.',
    zh: '经过策展、供人类与 AI 阅读的叙事——关于我们国家的单一事实来源。',
    ta: 'தொகுக்கப்பட்ட, மனிதர்களும் AI-யும் படிக்கக்கூடிய விவரிப்புகள் — நமது நாட்டைப் பற்றிய ஒரே உண்மை மூலம்.',
    ja: '厳選された、人間にもAIにも読める物語 — 私たちの国に関する唯一の信頼できる情報源。',
    ko: '엄선된, 사람과 AI 모두 읽을 수 있는 이야기 — 우리나라에 관한 유일한 신뢰할 수 있는 정보원.',
    th: 'เรื่องเล่าที่คัดสรรมาอย่างดี อ่านได้ทั้งมนุษย์และ AI — แหล่งข้อมูลอันเป็นหนึ่งเดียวที่เชื่อถือได้เกี่ยวกับประเทศของเรา',
    vi: 'Những tường thuật được tuyển chọn, con người và AI đều đọc được — một nguồn thông tin xác thực duy nhất về đất nước chúng ta.',
    id: 'Narasi yang dikurasi, dapat dibaca manusia dan AI — satu sumber kebenaran tentang negara kita.',
    ar: 'سرديات منسّقة يقرأها الإنسان و AI — مصدر واحد موثوق للحقيقة عن وطننا.',
    hi: 'संकलित, मनुष्य और AI दोनों के पढ़ने योग्य वृत्तांत — हमारे देश के बारे में सत्य का एकमात्र स्रोत।',
    es: 'Narrativas curadas, legibles por personas y por la IA — una única fuente fiable sobre nuestra nación.',
  },
  'home.essentials': {
    ms: 'Lima bacaan penting',
    en: 'Five essential reads',
    zh: '五篇必读',
    ta: 'ஐந்து அத்தியாவசிய வாசிப்புகள்',
    ja: '必読の5記事',
    ko: '필독 기사 5선',
    th: 'ห้าบทความที่ต้องอ่าน',
    vi: 'Năm bài đọc thiết yếu',
    id: 'Lima bacaan penting',
    ar: 'خمس قراءات أساسية',
    hi: 'पाँच आवश्यक पठन',
    es: 'Cinco lecturas esenciales',
  },
  'home.browse': { ms: 'Terokai mengikut kategori', en: 'Browse by category', zh: '按分类浏览', ta: 'பிரிவு வாரியாக உலாவுங்கள்', ja: 'カテゴリー別に見る', ko: '카테고리별 보기', th: 'เรียกดูตามหมวดหมู่', vi: 'Duyệt theo danh mục', id: 'Jelajahi berdasarkan kategori', ar: 'تصفّح حسب الفئة', hi: 'श्रेणी के अनुसार ब्राउज़ करें', es: 'Explorar por categoría' },
  'home.why.title': { ms: 'Mengapa negaraku.md?', en: 'Why negaraku.md?', zh: '为何选择 negaraku.md?', ta: 'ஏன் negaraku.md?', ja: 'なぜ negaraku.md なのか？', ko: '왜 negaraku.md인가?', th: 'ทำไมต้อง negaraku.md?', vi: 'Vì sao chọn negaraku.md?', id: 'Mengapa negaraku.md?', ar: 'لماذا negaraku.md؟', hi: 'negaraku.md क्यों?', es: '¿Por qué negaraku.md?' },
  'home.why.body': {
    ms: 'Bukan sekadar timbunan data — setiap artikel dikurasi, dipetik sumbernya, dan boleh disunting oleh komuniti melalui GitHub. Ditulis dalam Markdown supaya manusia dan model bahasa besar sama-sama boleh membacanya.',
    en: 'Not just a pile of data — every article is curated, cited, and community-editable via GitHub. Written in Markdown so both people and large language models can read it.',
    zh: '不仅是数据堆砌——每篇文章都经过策展、注明出处，并可通过 GitHub 由社区编辑。以 Markdown 撰写，方便人类与大型语言模型阅读。',
    ta: 'வெறும் தரவுக் குவியல் அல்ல — ஒவ்வொரு கட்டுரையும் தொகுக்கப்பட்டு, மேற்கோள் காட்டப்பட்டு, GitHub வழியாக சமூகத்தால் திருத்தக்கூடியது. மனிதர்களும் பெரிய மொழி மாதிரிகளும் படிக்கும் வகையில் Markdown-இல் எழுதப்பட்டுள்ளது.',
    ja: 'ただのデータの山ではありません — すべての記事は厳選され、出典が示され、GitHub を通じてコミュニティが編集できます。人間も大規模言語モデルも読めるように Markdown で書かれています。',
    ko: '단순한 데이터 더미가 아닙니다 — 모든 기사는 엄선되고, 출처가 명시되며, GitHub을 통해 커뮤니티가 편집할 수 있습니다. 사람과 대규모 언어 모델이 모두 읽을 수 있도록 Markdown으로 작성되었습니다.',
    th: 'ไม่ใช่เพียงกองข้อมูล — ทุกบทความได้รับการคัดสรร อ้างอิงแหล่งที่มา และชุมชนสามารถแก้ไขได้ผ่าน GitHub เขียนด้วย Markdown เพื่อให้ทั้งมนุษย์และโมเดลภาษาขนาดใหญ่สามารถอ่านได้',
    vi: 'Không chỉ là một đống dữ liệu — mỗi bài viết đều được tuyển chọn, trích dẫn nguồn và cộng đồng có thể chỉnh sửa qua GitHub. Được viết bằng Markdown để cả con người lẫn các mô hình ngôn ngữ lớn đều có thể đọc được.',
    id: 'Bukan sekadar tumpukan data — setiap artikel dikurasi, dikutip sumbernya, dan dapat disunting oleh komunitas melalui GitHub. Ditulis dalam Markdown agar manusia dan model bahasa besar sama-sama dapat membacanya.',
    ar: 'ليست مجرد كومة من البيانات — كل مقال منسّق وموثّق بالمصادر وقابل للتحرير من المجتمع عبر GitHub. مكتوب بصيغة Markdown ليتمكن البشر ونماذج اللغة الكبيرة معًا من قراءته.',
    hi: 'केवल डेटा का ढेर नहीं — हर लेख संकलित, स्रोत-उद्धृत और GitHub के माध्यम से समुदाय द्वारा संपादन-योग्य है। Markdown में लिखा गया है ताकि लोग और बड़े भाषा मॉडल दोनों इसे पढ़ सकें।',
    es: 'No es solo un montón de datos — cada artículo está curado, con fuentes citadas y editable por la comunidad a través de GitHub. Escrito en Markdown para que tanto las personas como los grandes modelos de lenguaje puedan leerlo.',
  },
  'article.sources': { ms: 'Sumber', en: 'Sources', zh: '来源', ta: 'மூலங்கள்', ja: '出典', ko: '출처', th: 'แหล่งที่มา', vi: 'Nguồn', id: 'Sumber', ar: 'المصادر', hi: 'स्रोत', es: 'Fuentes' },
  'article.related': { ms: 'Berkaitan', en: 'Related', zh: '相关', ta: 'தொடர்புடையவை', ja: '関連', ko: '관련', th: 'ที่เกี่ยวข้อง', vi: 'Liên quan', id: 'Terkait', ar: 'ذات صلة', hi: 'संबंधित', es: 'Relacionado' },
  'article.updated': { ms: 'Dikemas kini', en: 'Updated', zh: '更新于', ta: 'புதுப்பிக்கப்பட்டது', ja: '更新', ko: '업데이트', th: 'อัปเดตเมื่อ', vi: 'Đã cập nhật', id: 'Diperbarui', ar: 'آخر تحديث', hi: 'अद्यतन', es: 'Actualizado' },
  'article.published': { ms: 'Diterbitkan', en: 'Published', zh: '发布于', ta: 'வெளியிடப்பட்டது', ja: '公開', ko: '게시', th: 'เผยแพร่เมื่อ', vi: 'Đã xuất bản', id: 'Diterbitkan', ar: 'نُشر', hi: 'प्रकाशित', es: 'Publicado' },
  'article.reviewedOn': { ms: 'Disemak pada', en: 'Reviewed on', zh: '审阅于', ta: 'மதிப்பாய்வு செய்யப்பட்டது', ja: 'レビュー日', ko: '검토일', th: 'ตรวจทานเมื่อ', vi: 'Đã xét duyệt vào', id: 'Ditinjau pada', ar: 'روجع في', hi: 'समीक्षा की तिथि', es: 'Revisado el' },
  'article.verifiedOn': { ms: 'Disahkan pada', en: 'Verified on', zh: '核实于', ta: 'சரிபார்க்கப்பட்டது', ja: '検証日', ko: '검증일', th: 'ตรวจสอบเมื่อ', vi: 'Đã xác minh vào', id: 'Diverifikasi pada', ar: 'تم التحقق في', hi: 'सत्यापन की तिथि', es: 'Verificado el' },
  'article.by': { ms: 'oleh', en: 'by', zh: '·', ta: 'மூலம்', ja: '著者', ko: '작성자', th: 'โดย', vi: 'bởi', id: 'oleh', ar: 'بقلم', hi: 'द्वारा', es: 'por' },
  'article.edit': { ms: 'Sunting di GitHub', en: 'Edit on GitHub', zh: '在 GitHub 上编辑', ta: 'GitHub-இல் திருத்து', ja: 'GitHub で編集', ko: 'GitHub에서 편집', th: 'แก้ไขบน GitHub', vi: 'Chỉnh sửa trên GitHub', id: 'Sunting di GitHub', ar: 'حرّر على GitHub', hi: 'GitHub पर संपादित करें', es: 'Editar en GitHub' },
  'article.raw': { ms: 'Lihat Markdown mentah', en: 'View raw Markdown', zh: '查看原始 Markdown', ta: 'மூல Markdown-ஐக் காண்க', ja: '生の Markdown を表示', ko: '원본 Markdown 보기', th: 'ดู Markdown ต้นฉบับ', vi: 'Xem Markdown thô', id: 'Lihat Markdown mentah', ar: 'عرض Markdown الخام', hi: 'कच्चा Markdown देखें', es: 'Ver Markdown sin procesar' },
  'status.draft': { ms: 'Draf', en: 'Draft', zh: '草稿', ta: 'வரைவு', ja: '下書き', ko: '초안', th: 'ฉบับร่าง', vi: 'Bản nháp', id: 'Draf', ar: 'مسودة', hi: 'मसौदा', es: 'Borrador' },
  'status.in-review': { ms: 'Dalam Semakan', en: 'In review', zh: '审阅中', ta: 'மதிப்பாய்வில்', ja: 'レビュー中', ko: '검토 중', th: 'อยู่ระหว่างการตรวจทาน', vi: 'Đang xét duyệt', id: 'Dalam Tinjauan', ar: 'قيد المراجعة', hi: 'समीक्षाधीन', es: 'En revisión' },
  'status.reviewed': { ms: 'Disemak', en: 'Reviewed', zh: '已审阅', ta: 'மதிப்பாய்வு செய்யப்பட்டது', ja: 'レビュー済み', ko: '검토됨', th: 'ตรวจทานแล้ว', vi: 'Đã xét duyệt', id: 'Ditinjau', ar: 'تمت المراجعة', hi: 'समीक्षित', es: 'Revisado' },
  'status.published': { ms: 'Diterbitkan', en: 'Published', zh: '已发布', ta: 'வெளியிடப்பட்டது', ja: '公開済み', ko: '게시됨', th: 'เผยแพร่แล้ว', vi: 'Đã xuất bản', id: 'Diterbitkan', ar: 'منشور', hi: 'प्रकाशित', es: 'Publicado' },
  'status.verified': { ms: 'Disahkan', en: 'Verified', zh: '已核实', ta: 'சரிபார்க்கப்பட்டது', ja: '検証済み', ko: '검증됨', th: 'ตรวจสอบแล้ว', vi: 'Đã xác minh', id: 'Diverifikasi', ar: 'موثّق', hi: 'सत्यापित', es: 'Verificado' },
  'status.needs-update': { ms: 'Perlu Kemas Kini', en: 'Needs update', zh: '需更新', ta: 'புதுப்பிப்பு தேவை', ja: '要更新', ko: '업데이트 필요', th: 'ต้องอัปเดต', vi: 'Cần cập nhật', id: 'Perlu Pembaruan', ar: 'يحتاج إلى تحديث', hi: 'अद्यतन आवश्यक', es: 'Necesita actualización' },
  'status.in-update': { ms: 'Sedang Dikemas Kini', en: 'Being updated', zh: '更新中', ta: 'புதுப்பிக்கப்படுகிறது', ja: '更新中', ko: '업데이트 중', th: 'กำลังอัปเดต', vi: 'Đang cập nhật', id: 'Sedang Diperbarui', ar: 'قيد التحديث', hi: 'अद्यतन किया जा रहा है', es: 'En actualización' },
  'status.archived': { ms: 'Diarkibkan', en: 'Archived', zh: '已归档', ta: 'காப்பகப்படுத்தப்பட்டது', ja: 'アーカイブ済み', ko: '보관됨', th: 'เก็บถาวรแล้ว', vi: 'Đã lưu trữ', id: 'Diarsipkan', ar: 'مؤرشف', hi: 'संग्रहीत', es: 'Archivado' },
  'footer.license': {
    ms: 'Kandungan di bawah CC BY-SA 4.0. Kod di bawah lesen MIT.',
    en: 'Content under CC BY-SA 4.0. Code under the MIT license.',
    zh: '内容采用 CC BY-SA 4.0，代码采用 MIT 许可证。',
    ta: 'உள்ளடக்கம் CC BY-SA 4.0 உரிமத்தின் கீழ். குறியீடு MIT உரிமத்தின் கீழ்.',
    ja: 'コンテンツは CC BY-SA 4.0 の下で提供。コードは MIT ライセンスの下で提供。',
    ko: '콘텐츠는 CC BY-SA 4.0 라이선스로 제공됩니다. 코드는 MIT 라이선스로 제공됩니다.',
    th: 'เนื้อหาอยู่ภายใต้ CC BY-SA 4.0 โค้ดอยู่ภายใต้สัญญาอนุญาต MIT',
    vi: 'Nội dung theo giấy phép CC BY-SA 4.0. Mã nguồn theo giấy phép MIT.',
    id: 'Konten di bawah CC BY-SA 4.0. Kode di bawah lisensi MIT.',
    ar: 'المحتوى بموجب CC BY-SA 4.0. الكود بموجب رخصة MIT.',
    hi: 'सामग्री CC BY-SA 4.0 के अंतर्गत। कोड MIT लाइसेंस के अंतर्गत।',
    es: 'Contenido bajo CC BY-SA 4.0. Código bajo la licencia MIT.',
  },
  'footer.sponsoredBy': {
    ms: 'Ditaja oleh',
    en: 'Sponsored by',
    zh: '赞助单位',
    ta: 'அனுசரணை வழங்குநர்',
    ja: 'スポンサー',
    ko: '후원',
    th: 'สนับสนุนโดย',
    vi: 'Được tài trợ bởi',
    id: 'Disponsori oleh',
    ar: 'برعاية',
    hi: 'प्रायोजक',
    es: 'Patrocinado por',
  },
  'a11y.skip': { ms: 'Langkau ke kandungan', en: 'Skip to content', zh: '跳到内容', ta: 'உள்ளடக்கத்திற்குச் செல்க', ja: 'コンテンツへスキップ', ko: '콘텐츠로 건너뛰기', th: 'ข้ามไปยังเนื้อหา', vi: 'Bỏ qua để đến nội dung', id: 'Lewati ke konten', ar: 'تخطَّ إلى المحتوى', hi: 'सामग्री पर जाएँ', es: 'Saltar al contenido' },
  'a11y.top': { ms: 'Kembali ke atas', en: 'Back to top', zh: '返回顶部', ta: 'மேலே செல்க', ja: 'トップへ戻る', ko: '맨 위로', th: 'กลับไปด้านบน', vi: 'Về đầu trang', id: 'Kembali ke atas', ar: 'العودة إلى الأعلى', hi: 'ऊपर वापस जाएँ', es: 'Volver arriba' },
} as const;

export type StringKey = keyof typeof STRINGS;

export function t(key: StringKey, locale: Locale): string {
  const entry = STRINGS[key];
  // A UI locale with no authored string (e.g. `ta` before translation) falls
  // back to Malay — the cast lets us index with a Locale the table may not carry.
  return (entry as Record<string, string>)[locale] ?? entry[DEFAULT_LOCALE];
}

/** Build a locale-aware href. ms → "/path/", en → "/en/path/", zh → "/zh/path/".
 *  Emits the TRAILING-SLASH form GitHub Pages actually serves, so internal links
 *  hit the page directly (200) instead of the `/x` → `/x/` 301 that Search Console
 *  reported as "Page with redirect". File routes (a dot in the last segment, e.g.
 *  /llms.txt) are left slash-free by withTrailingSlash. */
export function localePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const localized = locale === DEFAULT_LOCALE
    ? clean
    : clean === '/' ? `/${locale}` : `/${locale}${clean}`;
  return withTrailingSlash(localized);
}

/**
 * Normalize a page pathname to the trailing-slash form GitHub Pages actually
 * serves (`/x` 301-redirects to `/x/`). Used for canonical, og:url, hreflang and
 * JSON-LD URLs so every emitted URL matches the resolved one — and the sitemap,
 * which already emits trailing slashes. File routes (a dot in the last segment,
 * e.g. `/llms.txt`, `/x.md`) are left untouched — only directory pages get a slash.
 */
export function withTrailingSlash(pathname: string): string {
  if (!pathname) return '/';
  // Split off any query/hash so the slash lands on the PATH, not after a
  // fragment (e.g. `/contribute#report` → `/contribute/#report`, never
  // `/contribute#report/` which breaks the anchor and 301-redirects).
  const i = pathname.search(/[?#]/);
  const path = i === -1 ? pathname : pathname.slice(0, i);
  const rest = i === -1 ? '' : pathname.slice(i);
  if (!path) return `/${rest}`;
  if (path.endsWith('/')) return `${path}${rest}`;
  const last = path.split('/').pop() ?? '';
  if (last.includes('.')) return `${path}${rest}`; // file route — no slash
  return `${path}/${rest}`;
}

/** Extract the active locale from an Astro URL pathname. */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  if (seg === 'en' || seg === 'zh' || seg === 'ta' || seg === 'ja' || seg === 'ko' || seg === 'th' || seg === 'vi' || seg === 'id' || seg === 'ar' || seg === 'hi' || seg === 'es') return seg;
  return DEFAULT_LOCALE;
}
