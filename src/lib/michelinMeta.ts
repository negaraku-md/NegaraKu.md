import type { Locale } from './categories';

// SEO title + meta description for the MICHELIN Guide Malaysia hub (/michelin),
// shared by the 13 locale route files. The on-page H1/lede live in
// MichelinHubView; these are the <head> strings.

export const MICHELIN_TITLE: Record<Locale, string> = {
  ms: 'Panduan MICHELIN',
  en: 'MICHELIN Guide',
  zh: '米其林指南',
  ta: 'MICHELIN வழிகாட்டி',
  ja: 'ミシュランガイド',
  ko: '미쉐린 가이드',
  th: 'มิชลินไกด์',
  vi: 'Cẩm nang MICHELIN',
  id: 'Panduan MICHELIN',
  ar: 'دليل ميشلان',
  hi: 'मिशेलिन गाइड',
  es: 'Guía MICHELIN',
  fr: 'Guide MICHELIN',
};

export const MICHELIN_DESC: Record<Locale, string> = {
  ms: 'Setiap restoran MICHELIN Malaysia yang kami liputi — bintang, Bib Gourmand dan terpilih di Kuala Lumpur, Pulau Pinang dan seterusnya. Tapis ikut anugerah, negeri dan harga.',
  en: 'Every MICHELIN restaurant in Malaysia we cover — Stars, Bib Gourmand and Selected across Kuala Lumpur, Penang and beyond. Filter by award, state and price.',
  zh: '我们收录的所有马来西亚米其林餐厅——吉隆坡、槟城及其他地区的星级、必比登与入选餐厅。可按奖项、州属和价格筛选。',
  ta: 'நாங்கள் உள்ளடக்கிய ஒவ்வொரு மலேசிய MICHELIN உணவகமும் — கோலாலம்பூர், பினாங்கு உள்ளிட்ட நட்சத்திரம், Bib Gourmand, தேர்ந்தெடுக்கப்பட்டவை. விருது, மாநிலம், விலை வாரியாக வடிகட்டவும்.',
  ja: 'クアラルンプール、ペナンなどのミシュラン星、ビブグルマン、セレクテッド——当サイト掲載のマレーシアのミシュラン店すべて。受賞・州・価格で絞り込み。',
  ko: '쿠알라룸푸르·페낭 등 말레이시아의 미쉐린 스타, 빕 구르망, 셀렉티드 레스토랑 전부. 상·주·가격으로 필터링하세요.',
  th: 'ร้านมิชลินในมาเลเซียทุกแห่งที่เรารวบรวม — ดาว บิบ กูร์มองด์ และคัดสรร ทั่วกัวลาลัมเปอร์ ปีนัง และอื่น ๆ กรองตามรางวัล รัฐ ราคา',
  vi: 'Mọi nhà hàng MICHELIN tại Malaysia chúng tôi giới thiệu — Sao, Bib Gourmand và Selected khắp Kuala Lumpur, Penang và hơn thế. Lọc theo giải thưởng, bang, giá.',
  id: 'Setiap restoran MICHELIN Malaysia yang kami bahas — Bintang, Bib Gourmand, dan Terpilih di Kuala Lumpur, Penang, dan sekitarnya. Saring menurut penghargaan, wilayah, harga.',
  ar: 'كل مطعم ميشلان في ماليزيا نغطيه — النجوم وبيب غورماند والمختارات في كوالالمبور وبينانغ وغيرها. صفِّ حسب الجائزة والولاية والسعر.',
  hi: 'मलेशिया के हर मिशेलिन रेस्तरां जिन्हें हम कवर करते हैं — कुआलालंपुर, पेनांग व अन्य में स्टार, बिब गोरमंड और चयनित। पुरस्कार, राज्य, कीमत से छाँटें।',
  es: 'Cada restaurante MICHELIN de Malasia que cubrimos: Estrellas, Bib Gourmand y Seleccionados en Kuala Lumpur, Penang y más. Filtra por distinción, estado y precio.',
  fr: 'Chaque restaurant MICHELIN de Malaisie que nous couvrons : Étoiles, Bib Gourmand et Sélectionnés à Kuala Lumpur, Penang et au-delà. Filtrez par distinction, état, prix.',
};
