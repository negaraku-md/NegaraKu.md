---
topicId: MY-TEC-0016
title: "किसी AI टूल में क्लाइंट की जानकारी डालने से पहले: मलेशियाई SME के लिए एक चेकलिस्ट"
seoTitle: "AI टूल में क्लाइंट डेटा: एक मलेशियाई SME PDPA चेकलिस्ट"
slug: "before-putting-client-data-into-ai"
category: "technology"
subcategory: ["digital"]
summary: "किसी क्लाइंट का विवरण किसी चैटबॉट या AI टूल में पेस्ट कर देना तेज़ है — और यह चुपचाप मलेशिया के Personal Data Protection Act 2010, पेशेवर गोपनीयता कर्तव्य, या किसी NDA का उल्लंघन कर सकता है। किसी और का AI इस्तेमाल करना आपकी कानूनी ज़िम्मेदारी को बाहर नहीं निकालता: आप ही data controller बने रहते हैं। यह वेंडर-तटस्थ चेकलिस्ट PDPA सिद्धांतों, सीमा-पार स्थानांतरण, संवेदनशील डेटा, पढ़ने योग्य provider-शर्तों, और पहले लागू करने योग्य सुरक्षा उपायों को कवर करती है।"
tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "किसी क्लाइंट की व्यक्तिगत जानकारी किसी तीसरे-पक्ष के AI टूल में डालने से पहले, इसे सुविधा नहीं, बल्कि एक data-protection निर्णय मानें। मलेशिया के Personal Data Protection Act 2010 (PDPA, Act 709) के तहत, क्लाइंट डेटा को किसी बाहरी टूल में डालना 'processing' है और आमतौर पर एक disclosure या transfer — और भले ही टूल किसी और का हो, व्यवसाय data controller के रूप में कानूनी रूप से ज़िम्मेदार बना रहता है। इसलिए आप पर अब भी सातों PDPA सिद्धांतों का भार है (वैध आधार और सूचना, सूचित की गई सीमा से आगे disclosure न करना, सुरक्षा, आवश्यकता से अधिक समय तक डेटा न रखना, सटीकता, और access अनुरोधों का सम्मान करना)। चार चीज़ें विशेष जाँच की हकदार हैं: क्या टूल डेटा को मलेशिया के बाहर store या process करता है (एक cross-border transfer जिसे किसी PDPA शर्त को पूरा करना होगा); क्या कोई डेटा sensitive personal data है (स्वास्थ्य, धर्म, biometric और इस तरह का), जिसके लिए सख्त संचालन चाहिए; provider की अपनी शर्तें आपके इनपुट पर training, retention, deletion, sub-processors और सर्वर स्थान के बारे में क्या कहती हैं; और क्या कोई पेशेवर गोपनीयता कर्तव्य या कोई NDA स्वतंत्र रूप से इस पर रोक लगाता है। सबसे सुरक्षित डिफ़ॉल्ट है पहले डेटा को न्यूनतम और anonymise करना, उचित शर्तों वाले business tier का उपयोग करना, और केवल वही डालना जिसकी काम को वास्तव में ज़रूरत है। ध्यान दें कि PDPA में 2024 में बदलावों के साथ संशोधन हुआ (breach notification, एक Data Protection Officer कर्तव्य, data portability, और नए cross-border नियम) जो 2025 भर में चरणबद्ध रूप से लागू हुए — वर्तमान स्थिति की पुष्टि pdp.gov.my पर करें।"
keyTakeaways:
  - "किसी और का AI टूल इस्तेमाल करना आपकी कानूनी ज़िम्मेदारी को बाहर नहीं निकालता — Personal Data Protection Act 2010 (Act 709) के तहत आपका व्यवसाय उस क्लाइंट डेटा के लिए data controller बना रहता है जिसे आप डालते हैं"
  - "क्लाइंट की व्यक्तिगत डेटा को किसी बाहरी AI टूल में डालना 'processing' है और आमतौर पर एक disclosure/transfer, इसलिए सातों PDPA सिद्धांत अब भी लागू होते हैं (वैध आधार + सूचना, disclosure सीमाएँ, सुरक्षा, retention, सटीकता, access)"
  - "Cross-border जाँच: कई AI टूल डेटा को मलेशिया के बाहर store या process करते हैं — यह एक cross-border transfer है जिसे किसी PDPA शर्त को पूरा करना होगा (उदा. पर्याप्त सुरक्षा, स्पष्ट सहमति, संविदात्मक आवश्यकता, या प्रलेखित सुरक्षा उपाय)"
  - "Sensitive personal data (स्वास्थ्य, धर्म, biometric और इस तरह का) के लिए सख्त संचालन चाहिए — स्पष्ट सहमति और शर्तों पर सावधानीपूर्वक नज़र डाले बिना इसे किसी सामान्य AI टूल में न डालें"
  - "provider की अपनी शर्तें पढ़ें (मार्केटिंग नहीं): क्या यह आपके इनपुट पर training करता है? उन्हें कितने समय तक रखा जाता है, क्या आप उन्हें हटा सकते हैं? sub-processors कौन हैं और सर्वर कहाँ हैं? क्या कोई business tier है जिसमें data-processing agreement और no-training विकल्प हो?"
  - "PDPA ही एकमात्र कर्तव्य नहीं है — एक पेशेवर गोपनीयता दायित्व (उदा. वकील, एकाउंटेंट, डॉक्टर) या एक NDA स्वतंत्र रूप से किसी क्लाइंट की जानकारी को किसी बाहरी टूल में डालने पर रोक लगा सकता है"
appliesTo: "मलेशियाई SMEs, पेशेवर और कर्मचारी जो क्लाइंट या ग्राहक की व्यक्तिगत डेटा किसी AI चैटबॉट या टूल में डालने पर विचार कर रहे हैं, और कोई भी जिसे PDPA तथा अपने गोपनीयता कर्तव्यों के भीतर ऐसा करने के लिए एक सरल चेकलिस्ट चाहिए।"

faq:
  - q: "अगर AI टूल किसी दूसरी कंपनी का है, तो क्या डेटा सुरक्षा उनकी समस्या है?"
    a: "नहीं। Personal Data Protection Act 2010 के तहत, आपका व्यवसाय उस क्लाइंट डेटा के लिए data controller है जिसे वह process करने का निर्णय लेता है, और यह ज़िम्मेदारी इसलिए टूल के provider को नहीं जाती कि टूल उनका है। provider आपकी ओर से एक processor के रूप में कार्य करता है; आपको अब भी PDPA सिद्धांतों को पूरा करना होगा — जिसमें यह सुनिश्चित करना शामिल है कि processor पर्याप्त सुरक्षा गारंटी देता है — और आप ही डेटा के लिए जवाबदेह बने रहते हैं। संक्षेप में: किसी और का AI इस्तेमाल करना आपकी कानूनी ज़िम्मेदारी को बाहर नहीं निकालता।"
  - q: "क्या इससे फ़र्क पड़ता है कि AI टूल के सर्वर कहाँ हैं?"
    a: "हाँ, बहुत। कई AI टूल डेटा को मलेशिया के बाहर के सर्वरों पर store या process करते हैं, और उन्हें क्लाइंट की व्यक्तिगत डेटा भेजना एक cross-border transfer है जिसे PDPA नियंत्रित करता है। 2024 संशोधन द्वारा पेश किए गए नियमों के तहत, ऐसा transfer केवल तभी अनुमत है जब कम से कम एक शर्त पूरी हो — उदाहरण के लिए गंतव्य पर्याप्त या काफ़ी हद तक समान सुरक्षा प्रदान करता हो, data subject ने स्पष्ट सहमति दी हो, transfer किसी अनुबंध के लिए आवश्यक हो, या आपके पास प्रलेखित सुरक्षा उपाय हों। जाँचें कि टूल डेटा को कहाँ process करता है और सुनिश्चित करें कि कोई शर्त लागू होती है; वर्तमान शर्तों की पुष्टि pdp.gov.my पर करें।"
  - q: "क्या मैं बस डेटा को anonymise करके पेस्ट कर दूँ?"
    a: "पहले न्यूनतम और anonymise करना बिल्कुल सही प्रवृत्ति और सबसे सुरक्षित डिफ़ॉल्ट है — नाम, पहचान-पत्र संख्याएँ, संपर्क विवरण और खाता संख्याएँ हटा दें, और केवल वही डालें जिसकी काम को वास्तव में ज़रूरत है। लेकिन सावधान रहें: ऐसा डेटा जो अन्य जानकारी के साथ जोड़े जाने पर भी किसी की पहचान करा सकता है, वास्तव में अनाम नहीं हो सकता, और आंशिक विवरण किसी व्यक्ति की फिर से पहचान करा सकते हैं। किसी भी संवेदनशील चीज़ के लिए, या जहाँ आप पहचानकर्ताओं को नहीं हटा सकते, इसे व्यक्तिगत डेटा मानें और यह मान लेने के बजाय कि anonymisation दायित्व हटा देता है, पूरी चेकलिस्ट लागू करें।"
  - q: "मैंने अपने क्लाइंट के साथ एक NDA पर हस्ताक्षर किए हैं — क्या PDPA चेकलिस्ट उसे भी कवर करती है?"
    a: "नहीं — उन्हें अलग-अलग द्वार मानें जिन दोनों को आपको पार करना होगा। जहाँ PDPA संतुष्ट हो, वहाँ भी एक गोपनीयता खंड, एक NDA, या गोपनीयता का एक पेशेवर कर्तव्य (उदाहरण के लिए Legal Profession Act 1976 के तहत वकीलों के लिए, MIA उप-नियमों के तहत एकाउंटेंट के लिए, Malaysian Medical Council संहिता के तहत डॉक्टरों के लिए, या Financial Services Act 2013 के तहत लाइसेंस प्राप्त वित्तीय संस्थानों के लिए) स्वतंत्र रूप से किसी क्लाइंट की जानकारी को किसी तीसरे पक्ष को, जिसमें AI provider भी शामिल है, सहमति के बिना disclose करने पर रोक लगा सकता है। कुछ भी डालने से पहले data-protection स्थिति और अपने गोपनीयता दायित्वों दोनों की जाँच करें।"

lang: "hi"
translationStatus: "in-sync"
sourceContentHash: "9312aca05cc75d07"
masterLanguage: "en"

status: "published"
aiAssisted: true
reviewer: null
reviewed: "2026-11-17"
reviewDue: 2027-11-17
publishedBy: "ashton-tan"
revision: 0
revisions:
  - revision: 0
    date: 2026-11-17
    change: "Drafted and published."
    reviewer: null

verificationNeeded:
  - "The Personal Data Protection (Amendment) Act 2024 provisions (data breach notification, mandatory DPO appointment, data portability, and the revised cross-border transfer framework) were phased into force across 2025; exact in-force dates, the DPO-appointment thresholds (which come from a guideline, not the Act), any breach-notification timeframe, and penalty figures are time-sensitive — the article hedges these and directs readers to pdp.gov.my to confirm the current position. Do not state a specific DPO threshold, breach-notification deadline or penalty figure as settled fact without checking the current guideline/Act."
  - "Exact section numbers for the seven principles and for the new DPO/breach/portability/cross-border provisions shifted with the 2024 renumbering; the article cites the principles and duties by name rather than pinning section numbers."
  - "The specific confidentiality rule/section for each named profession should be confirmed against that profession's governing instrument before being cited chapter-and-verse."

updated: 2026-11-17
sources:
  - title: "Personal Data Protection Act 2010 (Act 709) और सात Personal Data Protection Principles"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "व्यक्तिगत डेटा संरक्षण विभाग (Personal Data Protection Department, JPDP), डिजिटल मंत्रालय (Ministry of Digital)"
  - title: "Personal Data Protection (Amendment) Act 2024 — breach notification, DPO, data portability, cross-border transfer"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "व्यक्तिगत डेटा संरक्षण विभाग (Personal Data Protection Department, JPDP)"
  - title: "Cross-Border Personal Data Transfer Guideline (2025) — सीमा-पार व्यक्तिगत डेटा स्थानांतरण दिशानिर्देश"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "व्यक्तिगत डेटा संरक्षण आयुक्त (Personal Data Protection Commissioner)"
  - title: "Data Protection Laws of the World — मलेशिया (PDPA अवलोकन, sensitive data, controller/processor)"
    url: "https://www.dlapiperdataprotection.com/index.html?t=law&c=MY"
    publisher: "DLA Piper"

entity: "Using AI tools with personal data under the PDPA (Malaysia)"
relations:
  - { rel: "related-to", to: "pdpa-compliance-malaysia" }
  - { rel: "related-to", to: "data-protection-officer-malaysia" }
  - { rel: "related-to", to: "data-breach-notification-malaysia" }
related: ["pdpa-compliance-malaysia", "data-protection-officer-malaysia", "data-breach-notification-malaysia"]
keywords: ["मलेशिया में AI टूल में क्लाइंट डेटा", "PDPA AI चैटबॉट", "Personal Data Protection Act 2010 AI", "मलेशिया cross-border data transfer", "AI गोपनीयता NDA मलेशिया", "SME AI डेटा चेकलिस्ट", "data controller AI मलेशिया", "sensitive personal data AI", "Act 709 AI टूल"]
framework: decision
---

किसी क्लाइंट का ईमेल, उनकी शिकायत, या नामों से भरा कोई अनुबंध किसी चैटबॉट में
पेस्ट करके उससे सारांश या जवाब बनाने को कहने में दो सेकंड लगते हैं। वही सुविधा
ठीक वही जोखिम है: उन दो सेकंड में एक व्यवसाय मलेशिया के डेटा-संरक्षण कानून का
उल्लंघन करते हुए किसी तीसरे पक्ष को व्यक्तिगत डेटा disclose कर सकता है, क्लाइंट के
प्रति अपने गोपनीयता कर्तव्य को तोड़ सकता है, या अपने हस्ताक्षरित किसी NDA का उल्लंघन
कर सकता है — बिना किसी के ऐसा तय किए।

उपयोगी मानसिक मॉडल यह है: **किसी और का AI टूल इस्तेमाल करना आपकी कानूनी
ज़िम्मेदारी को बाहर नहीं निकालता।** **Personal Data Protection Act 2010 (PDPA,
Act 709)** के तहत, आपका व्यवसाय उस क्लाइंट डेटा के लिए **data controller** है जिसे
वह process करने का विकल्प चुनता है, और यह ज़िम्मेदारी आपके पास ही रहती है भले ही
टूल किसी और का हो। डेटा डालने से पहले चलाने के लिए यह एक छोटी चेकलिस्ट है।

## 1. आप पर अब भी सातों PDPA सिद्धांतों का भार है

क्लाइंट की व्यक्तिगत डेटा को किसी बाहरी AI टूल में डालना PDPA के तहत **processing**
है, और आमतौर पर provider को एक **disclosure या transfer**। इसलिए Act के **सात
Personal Data Protection Principles** अब भी लागू होते हैं। सरल शब्दों में, डेटा
डालने से पहले, पूछें:

- **वैध आधार और सूचना** — क्या आपके पास सहमति या कोई अन्य वैध आधार है, और क्या
  आपकी privacy notice ने क्लाइंट को बताया था कि उनका डेटा तीसरे-पक्ष के टूलों या
  वेंडरों द्वारा process किया जा सकता है?
- **Disclosure** — किसी AI provider को डेटा भेजना एक disclosure है; क्या यह उन
  प्रयोजनों और प्राप्तकर्ताओं के भीतर है जिनकी आपने सूचना दी थी?
- **सुरक्षा** — क्या टूल पर्याप्त रूप से सुरक्षित है, और क्या कोई लिखित व्यवस्था है
  ताकि provider (आपका processor) पर्याप्त सुरक्षा गारंटी दे?
- **Retention** — क्या टूल आपके इनपुट रखता है, कितने समय तक, और क्या आप उन्हें
  हटा सकते हैं? डेटा को आवश्यकता से अधिक समय तक बने न रहने दें।
- **डेटा अखंडता** — AI आउटपुट गलत या गढ़ा हुआ हो सकता है; आप जिस भी व्यक्तिगत डेटा
  पर भरोसा करते हैं उसकी सटीकता के लिए आप ही ज़िम्मेदार बने रहते हैं।
- **Access** — आपको अब भी अनुरोध पर किसी क्लाइंट के डेटा को खोजने, पुनः प्राप्त करने
  और सुधारने में सक्षम होना चाहिए, जो तब कठिन है जब वह अपारदर्शी तीसरे-पक्ष के
  सिस्टमों के भीतर बिखरा हुआ हो।

## 2. जाँचें कि डेटा कहाँ जाता है — cross-border transfer

कई AI टूल **डेटा को मलेशिया के बाहर के सर्वरों पर store या process करते हैं।** किसी
ऐसे टूल में क्लाइंट की व्यक्तिगत डेटा डालना एक **cross-border transfer** है, जिसे
PDPA नियंत्रित करता है। 2024 संशोधन द्वारा पेश किए गए ढाँचे के तहत, विदेश में transfer
केवल तभी अनुमत है जब **कम से कम एक शर्त पूरी हो** — उदाहरण के लिए गंतव्य **पर्याप्त
या काफ़ी हद तक समान सुरक्षा** प्रदान करता हो, data subject ने **स्पष्ट सहमति** दी
हो, transfer किसी **अनुबंध के लिए आवश्यक** हो, या आपके पास संविदात्मक खंडों जैसे
**प्रलेखित सुरक्षा उपाय** हों।

तो पता लगाएँ कि **टूल डेटा को कहाँ process करता है**, और सुनिश्चित करें कि कोई शर्त
लागू होती है — यह न मानें कि अकेली सहमति हमेशा इसे कवर कर देती है। सटीक शर्तें
Commissioner के cross-border transfer दिशानिर्देश में हैं; वर्तमान स्थिति की पुष्टि
**pdp.gov.my** पर करें।

## 3. क्या इसमें से कोई sensitive personal data है?

PDPA **sensitive personal data** — जिसमें स्वास्थ्य, धार्मिक या अन्य मान्यताएँ,
राजनीतिक राय, अपराध, और (2024 संशोधन के बाद से) **biometric data** शामिल है —
के साथ अधिक सख्ती से पेश आता है, जिसके लिए आमतौर पर संकीर्ण आधारों में से **स्पष्ट
सहमति** की आवश्यकता होती है। स्पष्ट सहमति और टूल की शर्तों को सावधानी से पढ़े बिना
स्वास्थ्य रिकॉर्ड, धार्मिक जानकारी, biometric data या इस तरह की चीज़ों को किसी सामान्य
AI टूल में **न** डालें। यहाँ मानक ऊँचा है, और किसी रिसाव से होने वाला नुकसान अधिक है।

## 4. provider की अपनी शर्तें पढ़ें — मार्केटिंग नहीं

कोई टूल क्लाइंट डेटा के साथ इस्तेमाल करने के लिए सुरक्षित है या नहीं, इसका उत्तर उसके
**Terms of Service, Privacy Policy और किसी Data Processing Addendum** द्वारा दिया
जाता है, न कि उसके होमपेज द्वारा। **किसी भी** टूल से पूछने योग्य टिकाऊ प्रश्न:

- **Training:** क्या provider आपके इनपुट का उपयोग अपने **मॉडलों को train या बेहतर
  करने** के लिए करता है, और क्या कोई opt-out या कोई tier है जहाँ training डिफ़ॉल्ट
  रूप से बंद हो?
- **Retention और deletion:** इनपुट और आउटपुट कितने समय तक रखे जाते हैं, और क्या आप
  उन्हें (और प्रतियों को) हटा सकते हैं?
- **Sub-processors और स्थान:** sub-processors कौन हैं, और सर्वर **किन देशों** में
  हैं? (वापस cross-border जाँच पर।)
- **Business tier:** क्या कोई **business या enterprise plan है जिसमें data-processing
  agreement**, संविदात्मक गोपनीयता और एक no-training प्रतिबद्धता हो? मुफ़्त और
  उपभोक्ता tiers में अक्सर इनकी कमी होती है।
- **सुरक्षा और breach:** encryption, access नियंत्रण, मान्यता प्राप्त सुरक्षा मानक,
  और समय पर **आपको किसी breach की सूचना देने** की प्रतिबद्धता ताकि आप अपने दायित्वों
  को पूरा कर सकें।

## 5. PDPA ही एकमात्र कर्तव्य नहीं है — गोपनीयता और NDAs

PDPA के संतुष्ट होने पर भी, एक अलग कर्तव्य अब भी डेटा डालने पर रोक लगा सकता है। कई
पेशेवरों पर **PDPA से स्वतंत्र, और अक्सर उससे सख्त, गोपनीयता दायित्व** होते हैं —
उदाहरण के लिए **Legal Profession Act 1976** के तहत वकील, **Malaysian Institute of
Accountants (MIA)** उप-नियमों के तहत एकाउंटेंट, **Malaysian Medical Council**
संहिता के तहत डॉक्टर, और **Financial Services Act 2013** के तहत लाइसेंस प्राप्त
वित्तीय संस्थान। और आपके क्लाइंट engagement में एक **गोपनीयता खंड या NDA** स्वतंत्र
रूप से उनकी जानकारी को किसी तीसरे पक्ष को, जिसमें AI provider भी शामिल है, सहमति के
बिना disclose करने पर रोक लगा सकता है। data-protection स्थिति और अपने गोपनीयता
दायित्वों **दोनों की जाँच करें।**

## सुरक्षित डिफ़ॉल्ट

संदेह होने पर, कम करें:

- **पहले न्यूनतम और anonymise करें** — नाम, पहचान-पत्र संख्याएँ, संपर्क और खाता
  विवरण हटा दें, और केवल वही डालें जिसकी काम को वास्तव में ज़रूरत है।
- **एक business tier का उपयोग करें** जिसमें data-processing agreement, no-training
  शर्तें और परिभाषित retention हो, जब भी कोई क्लाइंट डेटा शामिल हो।
- **अपनी notice अपडेट करें या सहमति लें** जहाँ तीसरे-पक्ष की processing पहले से
  कवर नहीं है।
- **एक रिकॉर्ड रखें** — कौन-सा टूल, क्या डेटा, क्या आधार, क्या सुरक्षा उपाय — ताकि
  आप जवाबदेही दिखा सकें और किसी access अनुरोध का उत्तर दे सकें।
- **एक छोटी आंतरिक AI-उपयोग नीति लिखें** जो कर्मचारियों को बताए कि AI टूलों में क्या
  डाला जा सकता है और क्या नहीं, कौन-से टूल स्वीकृत हैं, और anonymisation नियम।

## 2024 संशोधन पर एक नोट

PDPA में **2024** में संशोधन हुआ, जिसके बदलाव **2025** भर में चरणबद्ध रूप से लागू
हुए: अनिवार्य **data breach notification**, बड़े पैमाने की processing के लिए एक
**Data Protection Officer (DPO)** नियुक्त करने का कर्तव्य, एक **data portability**
अधिकार, और ऊपर वर्णित **नया cross-border transfer** ढाँचा। सटीक लागू होने की तिथियाँ,
DPO की सीमाएँ और कोई भी दंड आँकड़े बदलते रहते हैं और आंशिक रूप से Act के बजाय
दिशानिर्देशों द्वारा तय होते हैं — इसलिए कर्तव्यों के स्वरूप को टिकाऊ मानें, और किसी
विशिष्ट आँकड़े या समयसीमा पर भरोसा करने से पहले **pdp.gov.my पर वर्तमान विवरण की
पुष्टि करें।**

## आगे क्या

- Act के दायित्वों को पूरी तरह से जानने के लिए सामान्य
  [PDPA अनुपालन अवलोकन](/hi/business/pdpa-compliance-malaysia) पढ़ें।
- देखें कि क्या आपके संगठन को एक
  [Data Protection Officer](/hi/business/data-protection-officer-malaysia) की ज़रूरत
  है और [data breach notification](/hi/business/data-breach-notification-malaysia)
  कर्तव्य में क्या शामिल है।
- किसी भी नए टूल में क्लाइंट डेटा डालने से पहले, आधिकारिक पोर्टल **pdp.gov.my** पर
  वर्तमान संशोधन स्थिति, दिशानिर्देशों और cross-border शर्तों की पुष्टि करें।
