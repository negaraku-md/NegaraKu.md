---
topicId: MY-ACC-0002
title: "Chuẩn bị một hồ sơ MBRS 2.0: mTool, hệ thống phân loại SSMxT và vòng lặp từ chối"
seoTitle: "Hướng dẫn nộp hồ sơ MBRS 2.0: mTool & gắn thẻ SSMxT"
slug: "mbrs-2-filing-guide"
category: "accounting"
subcategory: ["financial-statements"]
summary: "Cơ chế đầu-cuối của việc chuẩn bị một hồ sơ XBRL của SSM — chọn điểm nhập, ánh xạ tài khoản sang các khái niệm SSMxT, vượt qua xác thực mTool, và đưa một hồ sơ bị truy vấn trở lại qua mPortal."

tier: "1"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Một hồ sơ MBRS 2.0 được chuẩn bị ngoại tuyến trong mTool, công cụ chuẩn bị dựa trên Excel của SSM, và được nộp trực tuyến qua mPortal. Bạn chọn một trong 31 điểm nhập, ánh xạ mọi con số trong báo cáo tài chính sang một khái niệm trong Hệ thống Phân loại SSM (SSMxT_2022v1.0), vượt qua các quy tắc xác thực hệ thống phân loại được tích hợp trong công cụ, và tạo một tài liệu phiên bản XBRL. Một người lập (maker) tải nó lên; chỉ một người nộp (lodger) nắm giữ một giấy chứng nhận hành nghề hợp lệ mới có thể nộp nó."
keyTakeaways:
  - "mTool 2.2 là công cụ chuẩn bị hiện hành; hệ thống phân loại bên trong nó là SSMxT_2022v1.0, được xây dựng trên IFRS Taxonomy 2022"
  - "31 điểm nhập trải khắp tờ khai thường niên, báo cáo tài chính, các chỉ số tài chính then chốt, đính chính và đơn xin miễn — chọn sai một cái nghĩa là dựng lại tệp"
  - "Không cho phép mở rộng của công ty: nếu hệ thống phân loại không có yếu tố cho khoản mục của bạn, bạn gắn thẻ nó vào một khối văn bản, bạn không phát minh một khái niệm"
  - "Số tiền phải bằng Ringgit Malaysia — s.259(1)(c) của Companies Act 2016 yêu cầu nó và hệ thống phân loại bắt buộc iso4217:MYR"
  - "Xác thực dựa trên quy tắc, không phải hình thức: các yếu tố bắt buộc, các yếu tố bắt buộc suy ra, tổng hợp chiều, quy tắc dấu và tính nhất quán liên báo cáo đều chạy trước khi tệp được tạo"
  - "Người lập chuẩn bị và tải lên, người nộp phê duyệt và nộp — một giám đốc không có vai trò trong cả hai"
  - "Một hồ sơ bị truy vấn quay lại người lập; thời hạn luật định không dừng lại trong khi bạn sửa nó"
appliesTo: "Kế toán viên, thư ký công ty và nhân viên tài chính phải tạo ra chính tệp XBRL, không chỉ biết rằng một tệp là cần thiết."

faq:
  - q: "Tôi nên dùng phiên bản mTool nào và hệ thống phân loại nào?"
    a: "mTool 2.2 là bản phát hành hiện hành trên trang MBRS của SSM, và hệ thống phân loại được nhúng trong nó là SSMxT_2022v1.0, dựa trên IFRS Accounting Taxonomy 2022. SSM công bố một ghi chú riêng về sự khác biệt giữa mTool 2.1 và 2.2. Một tệp zip được tạo trong mTool 1.0 không thể tải lên mPortal 2.0 — nó phải được mở trong công cụ hiện hành và tạo lại."
  - q: "Một điểm nhập là gì và làm sao tôi chọn đúng cái?"
    a: "Một điểm nhập là lược đồ hệ thống phân loại cụ thể cho một loại hồ sơ. MBRS 2.0 có 31 cái: năm loại tờ khai thường niên, các loại báo cáo tài chính chia theo chuẩn mực kế toán và loại công ty (FS-MFRS, FS-MPERS, FS-CLBG, FS-EPC, FS-FC, FS-BNM, cùng các tương đương của Companies Act 1965), bốn loại chỉ số tài chính then chốt, đính chính, và tám đơn xin miễn. Cái đúng được cố định bởi loại công ty của bạn, Đạo luật bạn nộp theo, và chuẩn mực kế toán bạn áp dụng."
  - q: "Tôi có thể tạo thẻ riêng của mình nếu hệ thống phân loại không có yếu tố cho một khoản mục không?"
    a: "Không. Tài liệu kiến trúc SSMxT nói rõ rằng các mở rộng của công ty đối với SSMxT_2022v1.0 không được phép. Khi hệ thống phân loại không mang khái niệm khớp, người lập cung cấp chi tiết bằng cách gắn thẻ nó vào một yếu tố khối văn bản phù hợp. Đây là sự khác biệt lớn nhất duy nhất giữa việc nộp hồ sơ với SSM và báo cáo XBRL tự nguyện ở nơi khác."
  - q: "Ai thực sự có thể nộp tệp — người lập hay người nộp?"
    a: "Người lập chuẩn bị tài liệu phiên bản và tải nó lên trong mPortal, nhưng việc nộp là hành vi của người nộp. Một người nộp phải nắm giữ một giấy chứng nhận hành nghề đang hiệu lực được đăng ký qua e-Secretary, cùng một chứng chỉ số hợp lệ. Nếu giấy chứng nhận hành nghề đã hết hạn thì hồ sơ đơn giản là không thể được nộp, bất kể tệp XBRL tốt đến đâu."
  - q: "Tôi có thể nộp các chỉ số tài chính then chốt thay cho một bộ báo cáo tài chính đầy đủ không?"
    a: "Chỉ với sự phê duyệt trước. Một công ty trước tiên phải nộp đơn theo điểm nhập EA2 xin miễn nộp báo cáo tài chính và các báo cáo ở định dạng XBRL đầy đủ, theo s.604(2) của Companies Act 2016. Một khi SSM cấp nó, công ty có thể dùng một điểm nhập KFI. Nộp KFI mà không có sự phê duyệt đó không phải là một lựa chọn."
  - q: "Nếu SSM truy vấn hồ sơ của tôi, thời hạn có dừng không?"
    a: "Không. Một truy vấn gửi hồ sơ trở lại người lập để sửa và nộp lại, nhưng không điều gì về việc đó làm dừng đồng hồ phân phát s.258 hoặc đồng hồ nộp hồ sơ s.259. Nếu tệp đã sửa đến sau ngày luật định, các khoản phạt nộp muộn theo Practice Directive 1/2017 áp dụng từ ngày đến hạn gốc."

verificationNeeded: []

lang: "vi"
masterLanguage: "en"
translationStatus: "pending"

status: "draft"
aiAssisted: true
reviewer: null
publishedBy: "ashton-tan"
reviewed: 2026-08-14
reviewDue: 2027-07-22
revision: 0
revisions:
  - revision: 0
    date: 2026-08-14
    change: "Approved and published."
    reviewer: null

updated: 2026-08-14
sources:
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, Version 2.8"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQ_MBRS_ISSB.pdf"
    publisher: "SSM"
    date: "2025-05-01"
  - title: "Table of Fees — Registration of Company (ROC)"
    url: "https://www.ssm.com.my/Pages/Services/Registration-of-Company-(ROC)/Table-of-Fees.aspx"
    publisher: "SSM"
  - title: "MBRS Enhancement MBRS 2.0 — Overview"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "SSM"
  - title: "MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "MBRS — Malaysian Business Reporting System"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "SSM"
  - title: "Companies Act 2016 (Act 777), updated text as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "Companies Act 2016: Practice Directive No. 1/2017 (Revised 1 October 2024)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Practice%20Directive%201_2017%20(Revised)%201%20Oct%202024.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "Practice Directive No. 10/2024 — Qualifying Criteria for Audit Exemption for Certain Private Companies in Malaysia"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/PD10-2024-Qualifying-Criteria-for-Audit-Exemption-for-Certain-Categories-of-Private-Companies.pdf"
    publisher: "SSM"
    date: "2024-12-16"

entity: "MBRS 2.0 filing preparation"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "explained-in", to: "mbrs-2" }
  - { rel: "related-to", to: "mbrs-tagging-errors" }
  - { rel: "related-to", to: "financial-statement-pack" }
  - { rel: "related-to", to: "financial-statements-lodgement" }
  - { rel: "related-to", to: "unaudited-financial-statements" }
  - { rel: "related-to", to: "extension-of-time-ssm" }
related: ["mbrs-2", "mbrs-tagging-errors", "financial-statement-pack", "financial-statements-lodgement", "unaudited-financial-statements", "extension-of-time-ssm", "mfrs-vs-mpers"]
keywords: ["MBRS 2.0 filing guide", "mTool 2.2", "SSMxT taxonomy", "XBRL tagging Malaysia", "MBRS entry point", "mPortal maker lodger", "MBRS rejection", "prepare financial statements XBRL SSM"]
---

Các kết quả tìm kiếm cho «MBRS 2.0» gần như hoàn toàn là những người bán cho bạn
một cách để *không* phải làm nó. Các nhà cung cấp dịch vụ chuyển đổi, dịch vụ gắn
thẻ thuê ngoài, và những lời mời chào «sẵn sàng» của Big Four kết thúc ở «hãy nói
chuyện với chúng tôi». Không ai công bố những gì thực sự xảy ra giữa một bộ tài
khoản đã ký và một sự xác nhận từ SSM.

Đây là những gì xảy ra. Bạn cài đặt một add-in của Microsoft Excel, chọn một trong
ba mươi mốt điểm nhập, và ánh xạ mọi con số trong báo cáo tài chính của bạn sang
một khái niệm trong một hệ thống phân loại 6,000 yếu tố mà bạn không được phép mở
rộng. Rồi công cụ từ chối tạo một tệp cho đến khi mọi yếu tố bắt buộc có mặt, mọi
tổng phụ khớp, và mọi quy ước dấu đúng. Rồi một người có giấy chứng nhận hành nghề
bấm nộp.

Trang này là về cơ chế. **Nghĩa vụ** nộp hồ sơ — ai, khi nào, và hình phạt là gì —
nằm ở trang đi kèm về [MBRS 2.0 và nghĩa vụ nộp hồ
sơ](/vi/company-secretary/mbrs-2).

## Bạn thực sự đang xây dựng gì

Một hồ sơ MBRS là một tài liệu phiên bản XBRL: một tệp có cấu trúc trong đó mỗi con
số mang một danh tính máy đọc được. Danh tính đến từ **Hệ thống Phân loại SSM**,
hiện là **SSMxT_2022v1.0**.

SSMxT không phải là phát minh của SSM từ con số không. Nó lấy **IFRS Accounting
Taxonomy 2022** làm cơ sở — 6,458 yếu tố IFRS — và thêm các khái niệm thuộc phạm vi
tài phán Malaysia lên trên, cho các thuyết minh của Companies Act mà IFRS không có
lý do để mang. Hệ thống phân loại báo cáo tài chính Companies Act 2016 lên đến
**6,197 khái niệm theo MFRS** và **2,375 theo MPERS**.

Phía phi tài chính nhỏ hơn và mang tính quy định nhiều hơn hầu hết người lập mong
đợi:

| Thuyết minh | Khái niệm (CA 2016) |
| --- | --- |
| Báo cáo của giám đốc | 24 |
| Báo cáo do giám đốc lập | 29 |
| Đánh giá kinh doanh của giám đốc | 11 |
| Báo cáo của kiểm toán viên gửi các thành viên | 22 |
| Sự tham gia vào sàn giao dịch chứng khoán | 11 |

Những con số đó quan trọng. Báo cáo của giám đốc không được nộp dưới dạng một PDF
được quét. Nó được gắn thẻ, từng trường một, đối chiếu với 24 khái niệm được xác
định — đó là lý do một báo cáo của giám đốc được soạn dưới dạng văn xuôi tự do và
không bao giờ được ánh xạ vào các tiêu đề Phụ lục thứ Năm trở thành một vấn đề gắn
thẻ chứ không phải một vấn đề soạn thảo.

## Hai công cụ, và tệp truyền giữa chúng

**mTool** là công cụ chuẩn bị. Nó là một add-in của Microsoft Excel, chỉ Windows —
nó không chạy trên macOS, và nó không chạy trên Open Office. Bản phát hành hiện hành
là **mTool 2.2**, và SSM công bố một ghi chú riêng nêu ra sự khác biệt so với mTool
2.1. Nó mang một trình duyệt SSMxT tích hợp, hoạt động ngoại tuyến, chạy các quy tắc
xác thực, và xuất tệp XBRL dưới dạng một tệp zip.

**mPortal** là nền tảng nộp hồ sơ. Bạn đăng nhập, tải tệp zip lên, định tuyến nó để
phê duyệt, thanh toán, và nhận sự xác nhận.

Một cạm bẫy ở đây tốn cả buổi chiều: **một tệp zip được tạo trong mTool 1.0 không thể
tải lên mPortal 2.0.** Hướng dẫn của chính SSM cho phép bạn mở một tệp zip mTool 1.0
trong công cụ hiện hành và tạo lại nó, nhưng bản thân đối tượng cũ đã chết. Nếu bạn
đang nộp lại một thứ gì đó được chuẩn bị vào năm 2023, hãy chuẩn bị dựng lại.

Cạm bẫy liên quan là số công ty. **Định dạng số đăng ký công ty mới là bắt buộc
trong MBRS 2.0.** Định dạng cũ chỉ được dùng để điền trước dữ liệu tờ khai thường
niên.

## Chọn điểm nhập

Một điểm nhập là lược đồ hệ thống phân loại cho một loại hồ sơ cụ thể. MBRS 2.0 có
31 cái. Chọn sai không phải là một lỗi định dạng — nó là một lược đồ khác, các yếu tố
bắt buộc khác, và một sự dựng lại.

**Tờ khai thường niên**

| Điểm nhập | Sử dụng |
| --- | --- |
| AR1 | Công ty có vốn cổ phần, s.68 |
| AR2 | Công ty không có vốn cổ phần, s.68 |
| AR3 | Công ty nước ngoài, s.576 |
| AR4 | Thông tin không thay đổi, s.68(6) |
| AR1965 | Tờ khai thường niên theo Companies Act 1965 |

**Báo cáo tài chính và các báo cáo**

FS-MFRS và FS-MPERS chia theo chuẩn mực kế toán áp dụng. FS-CLBG dành cho các công
ty trách nhiệm bảo lãnh, FS-EPC cho các exempt private company, FS-FC cho các công
ty nước ngoài, và FS-BNM cho các công ty do Bank Negara Malaysia quản lý. Mỗi cái có
một đối tác Companies Act 1965.

**Các chỉ số tài chính then chốt**

KFI-MFRS, KFI-MPERS, KFI-CLBG và KFI-FC tồn tại cho các công ty không nộp một bộ đầy
đủ ở dạng XBRL. Bạn không thể đơn giản chọn cái này. Một công ty trước tiên phải có
được sự phê duyệt theo **EA2 — đơn xin miễn nộp báo cáo tài chính và các báo cáo ở
định dạng XBRL đầy đủ**, theo s.604(2) của Companies Act 2016. Cùng khuôn mẫu với
FS-FC, chỉ có sẵn sau một sự miễn trừ EA3 theo s.575(7).

**Đơn xin miễn** là một họ riêng của chúng, và các móc luật định đáng biết vì chúng
là điều mà đơn thực sự được nộp theo:

| Điểm nhập | Đơn | Điều |
| --- | --- | --- |
| EA1 | Cuối năm tài chính của công ty con nước ngoài không trùng với công ty nắm giữ | s.247(3) |
| EA2 | Miễn nộp ở định dạng XBRL đầy đủ | s.604(2) |
| EA3 | Miễn trừ nộp báo cáo tài chính bởi một công ty nước ngoài | s.575(7) |
| EA4A | Nới nhẹ về hình thức và nội dung của báo cáo của giám đốc | s.255(1) |
| EA4B | Nới nhẹ về hình thức và nội dung của báo cáo tài chính | s.255(1) |
| EA5A | Gia hạn thời gian phân phát báo cáo tài chính | s.259(2) |
| EA5B | Gia hạn thời gian nộp báo cáo tài chính | s.259(2) |
| EA6 | Gia hạn thời gian tổ chức AGM | s.340(4) |
| EA7 | Gia hạn thời gian nộp tờ khai thường niên | s.609(2) |
| EA8 | Đơn gửi Bộ trưởng | s.247(8) |

Lưu ý rằng EA5A và EA5B là **các đơn riêng biệt**. Phân phát và nộp hồ sơ là các
đồng hồ luật định riêng biệt theo s.258 và s.259, và một sự gia hạn của cái này
không gia hạn cái kia. Sự phân biệt đó là vô hình trong hầu hết các hướng dẫn và nó
được tích hợp vào hệ thống nộp hồ sơ.

## Ánh xạ: phần không ai dạy

Định nghĩa của chính SSM đơn giản một cách lừa dối — người lập «làm việc ánh xạ bằng
cách khớp thông tin trong báo cáo tài chính với một khái niệm liên quan trong Hệ
thống Phân loại». Trong thực tế, ánh xạ là nơi xét đoán nằm, và là nơi các vấn đề
năm-thứ-hai được tạo ra.

**Bạn không thể mở rộng hệ thống phân loại.** Tài liệu kiến trúc rõ ràng: các mở
rộng của công ty đối với SSMxT_2022v1.0 không được phép, và các thực thể không được
mở rộng hệ thống phân loại khi tạo một tài liệu phiên bản. Khi bạn cần chi tiết mà
hệ thống phân loại không mô hình hóa — một phân tách bộ phận, một loại thu nhập khác
bất thường — chỉ dẫn là cung cấp nó bằng **gắn thẻ khối văn bản** vào một khái niệm
khối văn bản phù hợp.

Đây là điều ngược lại với cách XBRL hoạt động trong hầu hết các chế độ công ty niêm
yết, nơi các yếu tố mở rộng là thông lệ. Người lập đến từ thế giới đó với lấy một thẻ
tùy chỉnh, không thể tạo một cái, và kết luận công cụ bị hỏng.

**Phạm vi bộ đầy đủ được cố định.** Đối với một hồ sơ ở dạng XBRL đầy đủ, các báo cáo
tối thiểu là báo cáo tình hình tài chính, báo cáo lãi lỗ, báo cáo lưu chuyển tiền
tệ, báo cáo thay đổi vốn chủ sở hữu, và các thuyết minh. Hệ thống phân loại mang các
cách trình bày thay thế cho ba trong số chúng và bạn phải chọn một cái và giữ nguyên:

- Báo cáo tình hình tài chính — ngắn hạn/dài hạn, **hoặc** theo thứ tự thanh khoản
- Báo cáo lãi lỗ — theo chức năng của chi phí, **hoặc** theo bản chất của chi phí
- Báo cáo lưu chuyển tiền tệ — trực tiếp, **hoặc** gián tiếp

Chuyển đổi giữa các năm là hợp pháp nhưng dễ thấy, và nó sẽ tạo ra các số liệu so
sánh không khớp trong dữ liệu ngay cả khi các tài khoản đọc bình thường.

**Đồng tiền và làm tròn không mang tính hình thức.** Số tiền phải được thể hiện bằng
Ringgit Malaysia, với đơn vị đo `iso4217:MYR`. Đây không chỉ là một quy tắc hệ thống
phân loại — s.259(1)(c) của Companies Act 2016 yêu cầu tất cả các số tiền trong báo
cáo tài chính và các báo cáo được nộp phải được ghi bằng đồng tiền Malaysia, và yêu
cầu một bản dịch có chứng thực khi các tài liệu không bằng Tiếng Malay hoặc Tiếng
Anh.

Làm tròn được xử lý bởi thuộc tính `decimals`, không phải bằng cách làm tròn con số.
Ví dụ có lời giải của SSM: tài sản được hiển thị là 53,928 trong một bộ tài khoản
được nêu bằng đơn vị nghìn được gắn thẻ là **53928000 với decimals đặt là -3**.
Người lập gõ 53928 đã ghi thiếu tài sản ba bậc độ lớn, và không quy tắc xác thực nào
sẽ bắt được nó, vì 53,928 là một con số hoàn toàn hợp lệ.

## Xác thực: năm họ quy tắc, không phải một trình kiểm tra chính tả

Xác thực của mTool được thúc đẩy bởi formula linkbase của hệ thống phân loại. SSM mô
hình hóa các quy tắc như các khẳng định trong đó «true» nghĩa là đã vượt qua. Hiểu
các họ cho bạn biết bạn đang tìm loại lỗi nào.

**Các yếu tố bắt buộc.** Một số khái niệm phải có mặt. Một khẳng định riêng tồn tại
cho mỗi cái, chính xác để thông báo lỗi nêu tên yếu tố bị thiếu. Ví dụ từ tài liệu
của SSM: «Assets» nên được báo cáo.

**Các yếu tố bắt buộc suy ra.** Chỉ bắt buộc trong một số hoàn cảnh nhất định, được
mô hình hóa với một điều kiện tiên quyết. Ví dụ của SSM: khi người nộp chọn tình
trạng công ty là «Public company», thì việc thuyết minh tình trạng kiểm toán báo cáo
tài chính phải là «Audited». Sai thông tin nộp hồ sơ ở đầu mẫu và bạn sẽ kích hoạt
các yêu cầu hạ nguồn mà bạn không mong đợi.

**Tổng hợp chiều.** Các thành viên của một trục phải cộng thành cha. Tổng vốn chủ sở
hữu bằng lợi ích của cổ đông không kiểm soát cộng các thành phần vốn chủ sở hữu khác
cộng vốn chủ sở hữu thuộc về chủ sở hữu của công ty mẹ. Đây là nơi một bộ tài khoản
được lắp ráp qua nhiều bảng tính và không bao giờ được đối chiếu chéo cuối cùng bị
bắt.

**Giá trị dương và âm.** Vị thế của SSM tinh tế hơn «chi phí là âm». **Không có yếu
tố nào phải luôn được lưu âm** — các khoản mục có trọng số âm như chi phí được lưu
dưới dạng số dương trong hầu hết các trường hợp. Formula linkbase thay vào đó bắt
buộc một danh sách các yếu tố phải luôn **dương**.

**Dữ liệu liên báo cáo và tương quan.** Các giá trị xuất hiện trong nhiều hơn một
báo cáo phải khớp, và các giá trị liên kết logic được kiểm tra đối chiếu với nhau.

Thêm vào đó là các xác thực về cấu trúc — tính đúng dạng XBRL, xác thực chiều, liệt
kê mở rộng, xác thực bảng và công thức — kiểm tra phiên bản đối chiếu với chính
SSMxT_2022v1.0.

## Người lập, người nộp và bước phê duyệt

mPortal dựa trên vai trò, và các vai trò không thể hoán đổi.

**Người lập (maker)** chuẩn bị tài liệu phiên bản và tải nó lên. Người lập không cần
một chữ ký số.

**Người nộp (lodger)** phê duyệt và nộp. Một người nộp phải nắm giữ một giấy chứng
nhận hành nghề theo s.241 của Companies Act 2016, được đăng ký qua e-Secretary, và
một chứng chỉ số hợp lệ. Việc phê duyệt được thực hiện qua Administrator → Approval
Management → Filing Approval, nơi bảng điều khiển hiển thị các hồ sơ do người lập tải
lên và đang chờ người nộp phê duyệt.

Sự liên kết giữa người lập và người nộp được quản lý trong mPortal, và nó có thể được
đặt không hoạt động. Một thất bại phổ biến và hoàn toàn mờ đục là một người lập tải
các tệp không bao giờ xuất hiện trong hàng đợi của người nộp vì sự liên kết đã bị vô
hiệu hóa và không được khôi phục. Một người lập duy nhất có thể được liên kết với
nhiều người nộp.

Một giám đốc không phải là một vai trò trong hệ thống này. Đây là cùng điểm về cấu
trúc điều chỉnh các đơn xin gia hạn thời gian, mà SSM yêu cầu phải đến từ thư ký công
ty. Nếu giấy chứng nhận hành nghề của thư ký của bạn đã hết hạn, bạn không có một kênh
nộp hồ sơ — và bạn sẽ biết điều đó vào ngày bạn cố dùng nó.

## Vòng lặp từ chối

Ba điều khác nhau được gọi là «từ chối» và chúng hành xử khác nhau.

**Thất bại xác thực mTool.** Tệp sẽ không được tạo. Bạn vẫn ngoại tuyến, không có gì
được nộp, và không đồng hồ nào bị ảnh hưởng. Đây là kết quả tốt.

**Truy vấn mPortal.** Hồ sơ được chấp nhận để xem xét rồi bị truy vấn lại. Người lập
thấy trạng thái truy vấn trên bảng điều khiển, sửa, và nộp lại. Thời hạn luật định
không bị ảnh hưởng bởi bất kỳ điều nào trong số này — phân phát s.258 và nộp hồ sơ
s.259 chạy trên các ngày riêng của chúng, và các khoản phạt Practice Directive 1/2017
tích lũy từ ngày đến hạn gốc, không phải từ ngày tệp của bạn cuối cùng vượt qua.

**Đính chính sau khi nộp.** Một khi một hồ sơ đã được ghi nhận, bạn không nộp lại nó
— bạn đính chính nó theo s.602 của Companies Act 2016. mPortal 2.0 mang ba dạng:

- **Đính chính tiêu chuẩn** — sửa dữ liệu trong một AR hoặc FS đã nộp, dù qua MBRS hay tại quầy
- **Đính chính thông tin nộp hồ sơ** — sửa chính phần đầu của hồ sơ, ví dụ một cuối năm tài chính được nộp là 30/12/23 thay vì 31/12/23, hoặc một hồ sơ được nộp là AR4 khi lẽ ra phải là AR1
- **Nộp rỗng (Nil filing)** — đính chính một hồ sơ mà không tải lên bất kỳ AR hoặc FS thay thế nào, dùng cho các lần nộp trùng hoặc một lệnh của tòa mà không có thay thế

Cũng có một tuyến **nộp lệnh của tòa** cho các công ty có tình trạng đã giải thể.

Theo MBRS 1.0 việc đính chính nghĩa là một đơn tại quầy trước khi nộp lại. MBRS 2.0
đưa toàn bộ quy trình vào cổng. Đó là một cải tiến thực sự, và nó cũng là lý do các
điểm nhập đính chính tồn tại trong mTool ngay từ đầu.

## Một trình tự làm việc

1. **Cố định các ngày trước khi bạn mở công cụ.** Cuối năm tài chính, ngày phân phát,
   thời hạn nộp hồ sơ. Đồng hồ nộp hồ sơ theo s.259(1)(a) bắt đầu từ khi phân phát,
   không phải từ cuối năm.
2. **Xác nhận bản dựng mTool và phiên bản hệ thống phân loại** trên trang MBRS của
   SSM. SSM cập nhật những thứ này mà không có một thông báo riêng.
3. **Chọn điểm nhập một cách có chủ đích** — loại công ty, Đạo luật, chuẩn mực kế
   toán. Nếu bạn cần KFI hoặc FS-FC, sự phê duyệt EA2 hoặc EA3 phải tồn tại sẵn.
4. **Đối chiếu chéo các tài khoản trước khi gắn thẻ.** Mọi sự không nhất quán nội bộ
   mà một PDF từng che giấu nay là một thất bại xác thực chặn.
5. **Ánh xạ một lần và ghi lại việc ánh xạ.** Các xét đoán bạn đưa ra năm nay nên
   được lặp lại năm sau, hoặc các số liệu so sánh của bạn sẽ không thể so sánh được
   trong dữ liệu ngay cả khi chúng như vậy trong các tài khoản.
6. **Gắn thẻ cả các báo cáo phi tài chính** — báo cáo của giám đốc, báo cáo do giám
   đốc lập, báo cáo của kiểm toán viên. Đây là các khái niệm, không phải tệp đính
   kèm.
7. **Xác thực và sửa bên trong mTool.** mPortal không phải là một dịch vụ xác thực.
8. **Kiểm tra giấy chứng nhận hành nghề và chứng chỉ số của người nộp** trước tuần
   hạn chót, không phải trong nó.
9. **Tải lên, định tuyến để người nộp phê duyệt, thanh toán, giữ sự xác nhận.** Sự
   xác nhận là bằng chứng của việc tuân thủ, không phải tệp zip.
10. **Nếu tệp sẽ không sẵn sàng, hãy xin gia hạn trước khi kỳ hết hạn** — EA5A cho
    phân phát, EA5B cho nộp hồ sơ, EA7 cho tờ khai thường niên.

## Những sai lầm thường gặp

- **Gõ con số đã làm tròn thay vì dùng thuộc tính `decimals`.** 53,928 trong một bộ
  tài khoản được nêu bằng đơn vị nghìn là 53928000 với decimals -3. Gõ 53928 vượt qua
  mọi quy tắc xác thực và sai một hệ số một nghìn.
- **Cố tạo một yếu tố tùy chỉnh.** Các mở rộng của công ty đối với SSMxT_2022v1.0
  không được phép. Dùng một khối văn bản.
- **Nộp KFI mà không có sự phê duyệt EA2**, hoặc FS-FC mà không có sự miễn trừ EA3.
  Cả hai đều đòi hỏi một sự miễn được cấp trước.
- **Cho rằng một sự gia hạn bao gồm cả hai đồng hồ.** EA5A gia hạn phân phát, EA5B
  gia hạn nộp hồ sơ, và s.258 cùng s.259 là tuần tự.
- **Tải một tệp zip mTool 1.0 lên mPortal 2.0.** Mở nó trong công cụ hiện hành và tạo
  lại.
- **Dùng định dạng số đăng ký công ty cũ.** Định dạng mới là bắt buộc trong MBRS 2.0
  trừ khi để điền trước dữ liệu tờ khai thường niên.
- **Một sự liên kết người-lập–người-nộp bị vô hiệu hóa**, nên các hồ sơ được tải lên
  không bao giờ đến hàng đợi phê duyệt của người nộp và không ai chú ý cho đến hạn
  chót.
- **Coi một truy vấn là một đồng hồ đã dừng.** Nó không phải. Các khoản phạt chạy từ
  ngày luật định.
- **Thay đổi cơ sở trình bày giữa các năm** — theo thứ tự thanh khoản một năm,
  ngắn hạn/dài hạn năm sau — và tạo ra các số liệu so sánh không khớp trong dữ liệu.
- **Để báo cáo của giám đốc chưa gắn thẻ dưới dạng văn xuôi nháp.** Nó ánh xạ vào 24
  khái niệm được xác định và các tiêu đề Phụ lục thứ Năm; soạn nó theo cách đó ngay từ
  đầu loại bỏ cả một lớp làm lại.

## Tiếp theo

Trước cuối năm tiếp theo của bạn, hãy làm một điều: viết ra việc ánh xạ. Mỗi tài
khoản trong bảng cân đối thử của bạn, khái niệm SSMxT mà nó được gắn thẻ vào, và lý
do khi sự lựa chọn không hiển nhiên. Tài liệu đó đáng giá hơn chính tệp XBRL, vì tệp
có thể vứt đi và việc ánh xạ là thứ bạn dựng lại từ đầu mỗi năm nếu bạn không giữ nó.

Rồi đọc trang [các lỗi gắn thẻ](/vi/accounting/mbrs-tagging-errors), lấy các họ thất
bại ở trên và làm việc qua mỗi cái thực sự trông ra sao trong một bộ tài khoản thực.
