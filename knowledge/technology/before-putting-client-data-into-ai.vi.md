---
topicId: MY-TEC-0016
title: "Trước khi đưa thông tin khách hàng vào công cụ AI: Danh mục kiểm tra dành cho SME Malaysia"
seoTitle: "Dữ liệu khách hàng trong công cụ AI: Danh mục PDPA cho SME Malaysia"
slug: "before-putting-client-data-into-ai"
category: "technology"
subcategory: ["digital"]
summary: "Dán thông tin của một khách hàng vào chatbot hoặc công cụ AI thì rất nhanh — và điều đó có thể âm thầm vi phạm Personal Data Protection Act 2010 của Malaysia, một nghĩa vụ bảo mật nghề nghiệp, hoặc một NDA. Việc dùng AI của người khác không chuyển giao trách nhiệm pháp lý của bạn: bạn vẫn là data controller. Danh mục kiểm tra trung lập với nhà cung cấp này bao gồm các nguyên tắc PDPA, chuyển dữ liệu xuyên biên giới, dữ liệu nhạy cảm, các điều khoản của nhà cung cấp cần đọc, và những biện pháp bảo vệ cần áp dụng trước tiên."
tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Trước khi đưa thông tin cá nhân của khách hàng vào một công cụ AI của bên thứ ba, hãy coi đó là một quyết định về bảo vệ dữ liệu, chứ không phải một sự tiện lợi. Theo Personal Data Protection Act 2010 (PDPA, Act 709) của Malaysia, việc đưa dữ liệu khách hàng vào một công cụ bên ngoài là 'xử lý' và thường là một sự tiết lộ hoặc chuyển giao — và doanh nghiệp vẫn chịu trách nhiệm pháp lý với tư cách là data controller dù công cụ đó thuộc về người khác. Vì vậy bạn vẫn có nghĩa vụ với bảy nguyên tắc PDPA (cơ sở hợp pháp và thông báo, không tiết lộ ngoài phạm vi đã thông báo, bảo mật, không lưu giữ dữ liệu lâu hơn mức cần thiết, độ chính xác, và tôn trọng các yêu cầu truy cập). Bốn điều đáng kiểm tra cụ thể: liệu công cụ có lưu trữ hoặc xử lý dữ liệu bên ngoài Malaysia hay không (một sự chuyển giao xuyên biên giới phải đáp ứng một điều kiện của PDPA); liệu có bất kỳ dữ liệu nào là sensitive personal data (sức khỏe, tôn giáo, sinh trắc học và tương tự) hay không, điều này cần cách xử lý nghiêm ngặt hơn; các điều khoản của chính nhà cung cấp nói gì về việc huấn luyện trên dữ liệu đầu vào của bạn, thời gian lưu giữ, việc xóa, các bên xử lý phụ và vị trí máy chủ; và liệu một nghĩa vụ bảo mật nghề nghiệp hoặc một NDA có cấm điều đó một cách độc lập hay không. Mặc định an toàn nhất là giảm thiểu và ẩn danh dữ liệu trước, dùng một gói doanh nghiệp (business tier) có điều khoản phù hợp, và chỉ đưa vào những gì nhiệm vụ thực sự cần. Lưu ý rằng PDPA đã được sửa đổi vào năm 2024 với những thay đổi (thông báo vi phạm, nghĩa vụ bổ nhiệm Data Protection Officer, quyền di chuyển dữ liệu, và các quy tắc xuyên biên giới mới) được áp dụng theo giai đoạn trong suốt năm 2025 — hãy xác nhận tình trạng hiện tại trên pdp.gov.my."
keyTakeaways:
  - "Việc dùng công cụ AI của người khác KHÔNG chuyển giao trách nhiệm pháp lý của bạn — theo Personal Data Protection Act 2010 (Act 709), doanh nghiệp của bạn vẫn là data controller đối với dữ liệu khách hàng mà bạn đưa vào"
  - "Đưa dữ liệu cá nhân của khách hàng vào một công cụ AI bên ngoài là 'xử lý' và thường là một sự tiết lộ/chuyển giao, vì vậy bảy nguyên tắc PDPA vẫn áp dụng (cơ sở hợp pháp + thông báo, giới hạn tiết lộ, bảo mật, lưu giữ, độ chính xác, truy cập)"
  - "Kiểm tra xuyên biên giới: nhiều công cụ AI lưu trữ hoặc xử lý dữ liệu BÊN NGOÀI Malaysia — đó là một sự chuyển giao xuyên biên giới phải đáp ứng một điều kiện của PDPA (ví dụ mức bảo vệ tương xứng, sự đồng ý rõ ràng, sự cần thiết theo hợp đồng, hoặc các biện pháp bảo vệ được ghi chép lại)"
  - "Sensitive personal data (sức khỏe, tôn giáo, sinh trắc học và tương tự) cần cách xử lý nghiêm ngặt hơn — đừng đưa nó vào một công cụ AI thông thường mà không có sự đồng ý rõ ràng và không xem xét kỹ các điều khoản"
  - "Đọc các điều khoản của CHÍNH nhà cung cấp (không phải tài liệu quảng cáo): nó có huấn luyện trên dữ liệu đầu vào của bạn không? chúng được lưu giữ bao lâu, bạn có thể xóa chúng không? ai là các bên xử lý phụ và máy chủ đặt ở đâu? có một gói doanh nghiệp (business tier) kèm thỏa thuận xử lý dữ liệu và tùy chọn không huấn luyện không?"
  - "PDPA không phải là nghĩa vụ duy nhất — một nghĩa vụ bảo mật nghề nghiệp (ví dụ luật sư, kế toán, bác sĩ) hoặc một NDA có thể độc lập cấm việc đưa thông tin của khách hàng vào một công cụ bên ngoài"
appliesTo: "Các SME, chuyên gia và nhân viên Malaysia đang cân nhắc nhập dữ liệu cá nhân của khách hàng vào một chatbot hoặc công cụ AI, và bất kỳ ai cần một danh mục kiểm tra rõ ràng để làm điều đó trong khuôn khổ PDPA và các nghĩa vụ bảo mật của họ."

faq:
  - q: "Nếu công cụ AI thuộc về một công ty khác, thì việc bảo vệ dữ liệu là vấn đề của họ phải không?"
    a: "Không. Theo Personal Data Protection Act 2010, doanh nghiệp của bạn là data controller đối với dữ liệu khách hàng mà nó quyết định xử lý, và trách nhiệm đó không chuyển sang nhà cung cấp công cụ chỉ vì công cụ là của họ. Nhà cung cấp hành động như một processor thay mặt bạn; bạn vẫn phải đáp ứng các nguyên tắc PDPA — bao gồm việc đảm bảo rằng processor đưa ra các bảo đảm bảo mật đầy đủ — và bạn vẫn phải chịu trách nhiệm về dữ liệu. Nói ngắn gọn: dùng AI của người khác không chuyển giao trách nhiệm pháp lý của bạn."
  - q: "Việc máy chủ của công cụ AI đặt ở đâu có quan trọng không?"
    a: "Có, rất quan trọng. Nhiều công cụ AI lưu trữ hoặc xử lý dữ liệu trên máy chủ bên ngoài Malaysia, và việc gửi dữ liệu cá nhân của khách hàng đến đó là một sự chuyển giao xuyên biên giới mà PDPA điều chỉnh. Theo các quy tắc được đưa ra bởi bản sửa đổi năm 2024, một sự chuyển giao như vậy chỉ được phép nếu đáp ứng ít nhất một điều kiện — ví dụ nơi đến cung cấp mức bảo vệ tương xứng hoặc về cơ bản tương tự, chủ thể dữ liệu đã đưa ra sự đồng ý rõ ràng, việc chuyển giao là cần thiết cho một hợp đồng, hoặc bạn có các biện pháp bảo vệ được ghi chép lại. Hãy kiểm tra xem công cụ xử lý dữ liệu ở đâu và đảm bảo có một điều kiện áp dụng; xác nhận các điều kiện hiện hành trên pdp.gov.my."
  - q: "Tôi có thể chỉ ẩn danh dữ liệu rồi dán vào không?"
    a: "Giảm thiểu và ẩn danh trước chính là bản năng đúng đắn và là mặc định an toàn nhất — loại bỏ tên, số thẻ căn cước, thông tin liên hệ và số tài khoản, và chỉ đưa vào những gì nhiệm vụ thực sự cần. Nhưng hãy cẩn thận: dữ liệu vẫn có thể nhận dạng được một người khi kết hợp với thông tin khác thì có thể không thực sự ẩn danh, và các chi tiết một phần có thể tái nhận dạng một người. Đối với bất cứ điều gì nhạy cảm, hoặc khi bạn không thể loại bỏ các yếu tố nhận dạng, hãy coi nó là dữ liệu cá nhân và áp dụng toàn bộ danh mục kiểm tra thay vì cho rằng việc ẩn danh đã loại bỏ nghĩa vụ."
  - q: "Tôi đã ký một NDA với khách hàng — danh mục kiểm tra PDPA có bao gồm cả điều đó không?"
    a: "Không — hãy coi chúng là những cánh cửa riêng biệt mà bạn đều phải vượt qua. Ngay cả khi PDPA đã được đáp ứng, một điều khoản bảo mật, một NDA, hoặc một nghĩa vụ giữ bí mật nghề nghiệp (ví dụ đối với luật sư theo Legal Profession Act 1976, kế toán theo quy chế của MIA, bác sĩ theo quy tắc của Malaysian Medical Council, hoặc các tổ chức tài chính được cấp phép theo Financial Services Act 2013) có thể độc lập cấm việc tiết lộ thông tin của khách hàng cho bất kỳ bên thứ ba nào, kể cả một nhà cung cấp AI, mà không có sự đồng ý. Hãy kiểm tra cả vị thế về bảo vệ dữ liệu lẫn các nghĩa vụ bảo mật của bạn trước khi đưa bất cứ thứ gì vào."

lang: "vi"
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
  - title: "Personal Data Protection Act 2010 (Act 709) và bảy Nguyên tắc Bảo vệ Dữ liệu Cá nhân"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "Cục Bảo vệ Dữ liệu Cá nhân (JPDP), Bộ Kỹ thuật số"
  - title: "Personal Data Protection (Amendment) Act 2024 — thông báo vi phạm, DPO, quyền di chuyển dữ liệu, chuyển giao xuyên biên giới"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "Cục Bảo vệ Dữ liệu Cá nhân (JPDP)"
  - title: "Hướng dẫn Chuyển Dữ liệu Cá nhân Xuyên biên giới (2025)"
    url: "https://www.pdp.gov.my/jpdpv2/"
    publisher: "Ủy viên Bảo vệ Dữ liệu Cá nhân"
  - title: "Data Protection Laws of the World — Malaysia (tổng quan PDPA, dữ liệu nhạy cảm, controller/processor)"
    url: "https://www.dlapiperdataprotection.com/index.html?t=law&c=MY"
    publisher: "DLA Piper"

entity: "Using AI tools with personal data under the PDPA (Malaysia)"
relations:
  - { rel: "related-to", to: "pdpa-compliance-malaysia" }
  - { rel: "related-to", to: "data-protection-officer-malaysia" }
  - { rel: "related-to", to: "data-breach-notification-malaysia" }
related: ["pdpa-compliance-malaysia", "data-protection-officer-malaysia", "data-breach-notification-malaysia"]
keywords: ["dữ liệu khách hàng trong công cụ AI Malaysia", "PDPA AI chatbot", "Personal Data Protection Act 2010 AI", "chuyển dữ liệu xuyên biên giới Malaysia", "bảo mật AI NDA Malaysia", "danh mục dữ liệu AI SME", "data controller AI Malaysia", "sensitive personal data AI", "Act 709 công cụ AI"]
framework: decision
---

Chỉ mất hai giây để dán email của một khách hàng, lời phàn nàn của họ, hoặc một hợp
đồng đầy tên người vào một chatbot và yêu cầu nó tóm tắt hoặc trả lời. Chính sự tiện
lợi đó là rủi ro: trong hai giây đó, một doanh nghiệp có thể tiết lộ dữ liệu cá nhân
cho một bên thứ ba, vi phạm luật bảo vệ dữ liệu của Malaysia, phá vỡ một nghĩa vụ bảo
mật mà họ nợ khách hàng, hoặc vi phạm một NDA mà họ đã ký — mà không có ai quyết định
làm điều đó.

Mô hình tư duy hữu ích là thế này: **dùng công cụ AI của người khác không chuyển giao
trách nhiệm pháp lý của bạn.** Theo **Personal Data Protection Act 2010 (PDPA,
Act 709)**, doanh nghiệp của bạn là **data controller** đối với dữ liệu khách hàng mà
nó chọn xử lý, và trách nhiệm đó vẫn thuộc về bạn dù công cụ thuộc về người khác. Đây
là một danh mục kiểm tra ngắn để chạy qua trước khi dữ liệu được đưa vào.

## 1. Bạn vẫn có nghĩa vụ với bảy nguyên tắc PDPA

Đưa dữ liệu cá nhân của khách hàng vào một công cụ AI bên ngoài là **xử lý** theo
PDPA, và thường là một sự **tiết lộ hoặc chuyển giao** cho nhà cung cấp. Vì vậy **bảy
Nguyên tắc Bảo vệ Dữ liệu Cá nhân** của Đạo luật vẫn áp dụng. Nói đơn giản, trước khi
bạn đưa dữ liệu vào, hãy tự hỏi:

- **Cơ sở hợp pháp và thông báo** — bạn có sự đồng ý hoặc một cơ sở hợp pháp khác
  không, và thông báo quyền riêng tư của bạn có cho khách hàng biết rằng dữ liệu của
  họ có thể được xử lý bởi các công cụ hoặc nhà cung cấp của bên thứ ba không?
- **Tiết lộ** — gửi dữ liệu đến một nhà cung cấp AI là một sự tiết lộ; nó có nằm trong
  các mục đích và người nhận mà bạn đã thông báo không?
- **Bảo mật** — công cụ có đủ an toàn không, và có một thỏa thuận bằng văn bản để nhà
  cung cấp (processor của bạn) đưa ra các bảo đảm bảo mật đầy đủ không?
- **Lưu giữ** — công cụ có giữ dữ liệu đầu vào của bạn không, trong bao lâu, và bạn có
  thể xóa chúng không? Đừng để dữ liệu tồn tại lâu hơn mức cần thiết.
- **Tính toàn vẹn dữ liệu** — đầu ra của AI có thể sai hoặc bịa đặt; bạn vẫn chịu trách
  nhiệm về độ chính xác của bất kỳ dữ liệu cá nhân nào bạn dựa vào.
- **Truy cập** — bạn vẫn phải có khả năng tìm, truy xuất và chỉnh sửa dữ liệu của một
  khách hàng khi có yêu cầu, điều này rất khó nếu nó nằm rải rác bên trong các hệ thống
  bên thứ ba không minh bạch.

## 2. Kiểm tra dữ liệu đi về đâu — chuyển giao xuyên biên giới

Nhiều công cụ AI **lưu trữ hoặc xử lý dữ liệu trên máy chủ bên ngoài Malaysia.** Nhập
dữ liệu cá nhân của khách hàng vào một công cụ như vậy là một sự **chuyển giao xuyên
biên giới**, điều mà PDPA điều chỉnh. Theo khuôn khổ được đưa ra bởi bản sửa đổi năm
2024, một sự chuyển giao ra nước ngoài chỉ được phép nếu **đáp ứng ít nhất một điều
kiện** — ví dụ nơi đến cung cấp **mức bảo vệ tương xứng hoặc về cơ bản tương tự**, chủ
thể dữ liệu đã đưa ra **sự đồng ý rõ ràng**, việc chuyển giao là **cần thiết cho một
hợp đồng**, hoặc bạn có **các biện pháp bảo vệ được ghi chép lại** như các điều khoản
hợp đồng.

Vì vậy hãy tìm hiểu **công cụ xử lý dữ liệu ở đâu**, và đảm bảo có một điều kiện áp
dụng — đừng cho rằng chỉ riêng sự đồng ý luôn bao hàm điều đó. Các điều kiện chính xác
nằm trong hướng dẫn chuyển giao xuyên biên giới của Ủy viên; hãy xác nhận tình trạng
hiện tại trên **pdp.gov.my**.

## 3. Có phần nào là sensitive personal data không?

PDPA xử lý **sensitive personal data** — bao gồm sức khỏe, tín ngưỡng tôn giáo hoặc
tín ngưỡng khác, quan điểm chính trị, các hành vi phạm tội, và (kể từ bản sửa đổi năm
2024) **dữ liệu sinh trắc học** — một cách nghiêm ngặt hơn, nói chung đòi hỏi **sự đồng
ý rõ ràng** trong số các căn cứ hẹp hơn. **Đừng** đưa hồ sơ sức khỏe, thông tin tôn
giáo, dữ liệu sinh trắc học hoặc tương tự vào một công cụ AI thông thường mà không có
sự đồng ý rõ ràng và việc đọc kỹ các điều khoản của công cụ. Ngưỡng ở đây cao hơn, và
thiệt hại từ một vụ rò rỉ lớn hơn.

## 4. Đọc các điều khoản của chính nhà cung cấp — không phải tài liệu quảng cáo

Việc một công cụ có an toàn để dùng với dữ liệu khách hàng hay không được trả lời bởi
**Điều khoản Dịch vụ, Chính sách Quyền riêng tư và bất kỳ Phụ lục Xử lý Dữ liệu (Data
Processing Addendum) nào**, chứ không phải trang chủ của nó. Những câu hỏi bền vững cần
đặt ra cho **bất kỳ** công cụ nào:

- **Huấn luyện:** nhà cung cấp có dùng dữ liệu đầu vào của bạn để **huấn luyện hoặc cải
  thiện các mô hình** của họ không, và có tùy chọn từ chối hay một gói mà việc huấn
  luyện được tắt theo mặc định không?
- **Lưu giữ và xóa:** dữ liệu đầu vào và đầu ra được giữ bao lâu, và bạn có thể xóa
  chúng (và các bản sao) không?
- **Các bên xử lý phụ và vị trí:** ai là các bên xử lý phụ, và máy chủ đặt ở **những
  quốc gia nào**? (quay lại việc kiểm tra xuyên biên giới.)
- **Gói doanh nghiệp:** có một **gói doanh nghiệp hoặc doanh nghiệp lớn kèm thỏa thuận
  xử lý dữ liệu**, cam kết bảo mật theo hợp đồng và cam kết không huấn luyện không? Các
  gói miễn phí và gói cá nhân thường thiếu những điều này.
- **Bảo mật và vi phạm:** mã hóa, kiểm soát truy cập, các tiêu chuẩn bảo mật được công
  nhận, và một cam kết **thông báo cho bạn về một vụ vi phạm** kịp thời để đáp ứng các
  nghĩa vụ của chính bạn.

## 5. PDPA không phải là nghĩa vụ duy nhất — bảo mật và NDA

Ngay cả khi PDPA đã được đáp ứng, một nghĩa vụ riêng biệt vẫn có thể cấm việc đưa dữ
liệu vào. Nhiều chuyên gia có **nghĩa vụ bảo mật độc lập với, và thường nghiêm ngặt hơn
so với, PDPA** — ví dụ luật sư theo **Legal Profession Act 1976**, kế toán theo quy chế
của **Malaysian Institute of Accountants (MIA)**, bác sĩ theo quy tắc của **Malaysian
Medical Council**, và các tổ chức tài chính được cấp phép theo **Financial Services Act
2013**. Và một **điều khoản bảo mật hoặc NDA** trong hợp đồng dịch vụ với khách hàng
của bạn có thể độc lập cấm việc tiết lộ thông tin của họ cho bất kỳ bên thứ ba nào, kể
cả một nhà cung cấp AI, mà không có sự đồng ý. **Hãy kiểm tra cả hai** — vị thế về bảo
vệ dữ liệu và các nghĩa vụ bảo mật của bạn.

## Mặc định an toàn

Khi còn nghi ngờ, hãy làm ít hơn:

- **Giảm thiểu và ẩn danh trước** — loại bỏ tên, số thẻ căn cước, thông tin liên hệ và
  số tài khoản, và chỉ đưa vào những gì nhiệm vụ thực sự cần.
- **Dùng một gói doanh nghiệp** có thỏa thuận xử lý dữ liệu, điều khoản không huấn
  luyện và thời gian lưu giữ được xác định khi có bất kỳ dữ liệu khách hàng nào liên
  quan.
- **Cập nhật thông báo của bạn hoặc xin sự đồng ý** khi việc xử lý bởi bên thứ ba chưa
  được bao hàm.
- **Giữ một hồ sơ ghi chép** — công cụ nào, dữ liệu gì, cơ sở nào, biện pháp bảo vệ nào
  — để bạn có thể chứng minh trách nhiệm giải trình và trả lời một yêu cầu truy cập.
- **Viết một chính sách sử dụng AI nội bộ ngắn gọn** cho nhân viên biết những gì có thể
  và không thể đưa vào các công cụ AI, những công cụ nào được phê duyệt, và các quy tắc
  ẩn danh.

## Một lưu ý về bản sửa đổi năm 2024

PDPA đã được sửa đổi vào năm **2024**, với những thay đổi được áp dụng theo giai đoạn
trong suốt năm **2025**: **thông báo vi phạm dữ liệu** bắt buộc, một nghĩa vụ bổ nhiệm
**Data Protection Officer (DPO)** cho việc xử lý ở quy mô lớn hơn, một quyền **di chuyển
dữ liệu (data portability)**, và khuôn khổ **chuyển giao xuyên biên giới mới** nêu trên.
Các ngày có hiệu lực chính xác, các ngưỡng DPO và bất kỳ con số xử phạt nào đều đang
thay đổi và một phần được quy định bởi các hướng dẫn chứ không phải bởi chính Đạo luật
— vì vậy hãy coi hình dạng của các nghĩa vụ là bền vững, và **xác nhận chi tiết hiện
tại trên pdp.gov.my** trước khi dựa vào một con số hoặc thời hạn cụ thể.

## Tiếp theo là gì

- Đọc [tổng quan về tuân thủ PDPA](/vi/business/pdpa-compliance-malaysia) để biết đầy
  đủ các nghĩa vụ của Đạo luật.
- Xem liệu tổ chức của bạn có cần một
  [Data Protection Officer](/vi/business/data-protection-officer-malaysia) hay không và
  nghĩa vụ [thông báo vi phạm dữ liệu](/vi/business/data-breach-notification-malaysia)
  bao gồm những gì.
- Xác nhận tình trạng sửa đổi hiện tại, các hướng dẫn và các điều kiện xuyên biên giới
  trên cổng thông tin chính thức, **pdp.gov.my**, trước khi bạn đưa dữ liệu khách hàng
  vào bất kỳ công cụ mới nào.
