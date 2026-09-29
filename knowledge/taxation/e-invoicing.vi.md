---
topicId: MY-TAX-0003
title: "Hóa đơn điện tử tại Malaysia: Bắt đầu từ đâu với MyInvois"
seoTitle: "Hóa đơn điện tử Malaysia: Điểm khởi đầu MyInvois"
slug: "e-invoicing"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Một trang định tuyến cho quy định bắt buộc về hóa đơn điện tử của Malaysia — cách thẩm định MyInvois hoạt động, khi nào doanh nghiệp của bạn vào phạm vi, và hướng dẫn chi tiết nào trả lời câu hỏi của bạn."

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Hóa đơn điện tử yêu cầu dữ liệu hóa đơn được nộp cho hệ thống MyInvois của LHDN để thẩm định, thông qua MyInvois Portal miễn phí hoặc một hệ thống được kết nối API. Một tài liệu đã được thẩm định nhận được một Unique Identifier Number và mã QR. Quy định bắt buộc được phân theo từng giai đoạn theo doanh thu hằng năm, với giai đoạn cuối cùng vươn tới các doanh nghiệp lên đến RM5 triệu từ ngày 1 tháng 1 năm 2026 và các doanh nghiệp dưới RM1 triệu được miễn. Mỗi giai đoạn mang thời gian nới lỏng tạm thời riêng của nó."
keyTakeaways:
  - "Việc thẩm định xảy ra thông qua MyInvois trước khi tài liệu hoạt động như một hóa đơn cho các mục đích thuế thu nhập"
  - "Bốn giai đoạn, không có giai đoạn thứ năm — giai đoạn cuối bắt đầu ngày 1 tháng 1 năm 2026 cho doanh thu lên đến RM5 triệu"
  - "Các doanh nghiệp có doanh thu hằng năm dưới RM1,000,000 được miễn"
  - "Giai đoạn của bạn được cố định bởi các con số FY2022 hoặc YA2022 và không thay đổi sau đó"
  - "Một hóa đơn điện tử đã được LHDN thẩm định không tự động thỏa mãn các quy tắc về hóa đơn thuế SST — đó là một yêu cầu tài liệu riêng biệt"
appliesTo: "Các chủ doanh nghiệp, nhóm tài chính và quản trị viên hệ thống chuẩn bị cho hoặc hoạt động theo quy định bắt buộc về hóa đơn điện tử."

verificationNeeded: []

lang: "vi"
masterLanguage: "en"
translationStatus: "pending"

status: "published"
aiAssisted: true
reviewer: null
reviewed: 2026-07-22
reviewDue: 2027-07-22
revision: 0
revisions:
  - revision: 0
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Hướng dẫn Hóa đơn Điện tử của IRBM (IRBM e-Invoice Guideline)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Cục Thuế Nội địa (LHDN)"
    date: "2026-07-07"
  - title: "Hướng dẫn Cụ thể về Hóa đơn Điện tử của IRBM (IRBM e-Invoice Specific Guideline)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Cục Thuế Nội địa (LHDN)"
    date: "2026-07-07"
  - title: "Cổng MyInvois (MyInvois Portal)"
    url: "https://myinvois.hasil.gov.my/"
    publisher: "Cục Thuế Nội địa (LHDN)"

entity: "e-Invoicing and MyInvois"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "explained-in", to: "myinvois-phases" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
  - { rel: "related-to", to: "e-invoice-vs-tax-invoice" }
related: ["myinvois-phases", "myinvois-integration", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice", "e-invoice-vs-tax-invoice", "e-invoice-accounting-records"]
keywords: ["e-Invoice Malaysia", "MyInvois", "e-invois LHDN", "e-invoicing phases Malaysia", "MyInvois validation"]
---

Một hóa đơn từng hợp lệ vì bạn đã phát hành nó. Theo quy định bắt buộc về hóa đơn điện tử,
nó hợp lệ vì LHDN nói vậy — tài liệu phải được nộp cho MyInvois
và được thẩm định trước khi nó làm nhiệm vụ cho các mục đích thuế thu nhập.

Chỉ một thay đổi đó là cái tạo ra mọi câu hỏi tiếp theo, và hầu hết chúng
có một câu trả lời riêng.

## Cách thẩm định hoạt động, trong sáu bước

1. Nhà cung cấp nộp dữ liệu giao dịch cho MyInvois, hoặc bằng cách nhập nó
   vào Cổng miễn phí hoặc tự động qua một hệ thống được kết nối API.
2. LHDN thẩm định cấu trúc và các trường yêu cầu gần như theo thời gian thực.
3. Một **Unique Identifier Number** và mã QR được cấp khi thành công.
4. Nhà cung cấp chia sẻ tài liệu đã được thẩm định với người mua.
5. Người mua có thể xác minh mã QR so với hồ sơ của LHDN.
6. Các trường hợp từ chối và hủy phải được xử lý trong khoảng thời gian cho phép.

## Bạn cần hướng dẫn nào

| Nếu câu hỏi của bạn là | Đọc |
| --- | --- |
| Khi nào điều này áp dụng cho doanh nghiệp của tôi? | [Các giai đoạn, ngưỡng và ngày nới lỏng của MyInvois](/vi/taxation/myinvois-phases) |
| Cổng, API hay một nhà cung cấp middleware? | [Tích hợp MyInvois](/vi/taxation/myinvois-integration) |
| Tôi thực sự phải gửi dữ liệu gì? | [Tham chiếu các trường dữ liệu hóa đơn điện tử](/vi/taxation/e-invoice-data-fields) |
| Tôi có thể gộp các giao dịch bán lẻ của mình thay vì phát hành từng cái không? | [Hóa đơn điện tử hợp nhất](/vi/taxation/consolidated-e-invoice) |
| Nhà cung cấp của tôi ở nước ngoài, hoặc là một cá nhân | [Hóa đơn điện tử tự lập](/vi/taxation/self-billed-e-invoice) |
| Điều này có thay thế hóa đơn thuế SST của tôi không? | [Hóa đơn điện tử và hóa đơn thuế SST](/vi/taxation/e-invoice-vs-tax-invoice) |
| Tôi phải giữ chúng bao lâu? | [Hóa đơn điện tử và hồ sơ kế toán](/vi/accounting/e-invoice-accounting-records) |

## Bốn điều người ta làm sai

**Không có giai đoạn thứ năm.** Việc triển khai chạy trong bốn giai đoạn theo doanh thu hằng năm,
kết thúc với nhóm lên đến RM5 triệu từ ngày 1 tháng 1 năm 2026. Các doanh nghiệp có
doanh thu hằng năm dưới **RM1,000,000** được miễn, cùng với các văn phòng ngoại giao
nước ngoài và các cá nhân không thực hiện một hoạt động kinh doanh. Điều này không mâu thuẫn với
mốc bắt đầu **1 tháng 7 năm 2026** riêng biệt áp dụng cho các doanh nghiệp *mới bắt đầu* — một
doanh nghiệp bắt đầu trong 2023 đến 2025 với doanh thu từ RM1 triệu trở lên vào vào ngày đó.
Đó là một quy tắc cho những đơn vị mới tham gia không có cơ sở FY2022, không phải một giai đoạn doanh thu
thứ năm.

**Giai đoạn của bạn được cố định, không trôi nổi.** Nó được xác định bởi báo cáo tài chính đã kiểm toán
FY2022 hoặc tờ khai YA2022, được tính theo tỷ lệ khi ngày kết thúc năm thay đổi,
và nó không thay đổi sau đó. Việc tăng trưởng vượt một ngưỡng sau này không chuyển bạn
sang một giai đoạn sớm hơn, và việc thu nhỏ không chuyển bạn ra khỏi.

**Các thời gian nới lỏng không giống với các ngày giai đoạn.** Mỗi giai đoạn
mang một thời gian tạm thời trong đó LHDN sẽ không hành động về việc không tuân thủ, và
thời gian nới lỏng Giai đoạn 4 chạy dài hơn đáng kể so với các giai đoạn trước. Hãy đọc
hướng dẫn về giai đoạn thay vì giả định rằng ngày bắt buộc là ngày thực thi.

**Một hóa đơn điện tử đã được thẩm định không tự động là một hóa đơn thuế SST.** Hai
chế độ có các yêu cầu tài liệu riêng biệt, và vị thế theo luật định là khi
các chi tiết của một hóa đơn điện tử không nhất quán với các yêu cầu về hóa đơn của một luật thành văn khác,
thì hóa đơn điện tử chỉ hợp lệ cho các mục đích của Luật Thuế thu nhập.
Người đã đăng ký SST cần một tài liệu thỏa mãn cả hai.

## Những sai lầm thường gặp

- Đợi đến ngày bắt buộc mới bắt đầu thử nghiệm. Các thất bại về thẩm định TIN và tích hợp
  chỉ xuất hiện dưới khối lượng giao dịch thực.
- Giả định rằng mọi khách hàng cần một hóa đơn điện tử liệt kê chi tiết, trong khi nhiều
  giao dịch B2C có thể được hợp nhất — tùy thuộc vào các hoạt động bị cấm.
- Bỏ qua các nghĩa vụ tự lập hóa đơn đối với các nhà cung cấp nước ngoài và đối với các khoản trả cho
  các cá nhân không tự phát hành gì.
- Coi đây là một dự án CNTT. Hầu hết các thất bại khi vận hành là dữ liệu chủ về khách hàng
  và nhà cung cấp bẩn, không phải các lỗi tích hợp.
- Giả định MyInvois là kho lưu trữ của bạn. LHDN không công bố sự bảo đảm lưu giữ nào cho
  các tài liệu đã được thẩm định; nghĩa vụ lưu giữ vẫn thuộc về bạn.

## Tiếp theo

Nếu bạn chưa biết liệu hoặc khi nào bạn nằm trong phạm vi, hãy bắt đầu với hướng dẫn
về giai đoạn — nó mang các dải doanh thu, ngưỡng miễn, các quy tắc về doanh nghiệp mới
và mọi ngày kết thúc nới lỏng. Nếu bạn đã nằm trong phạm vi và đang lựa chọn
cách nộp, hướng dẫn tích hợp so sánh các con đường Cổng, API trực tiếp và
middleware theo khối lượng giao dịch.
