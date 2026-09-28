---
topicId: MY-TAX-0008
title: "Tích hợp MyInvois: Portal, API hay middleware"
seoTitle: "Tích hợp MyInvois: Portal so với API so với middleware"
slug: "myinvois-integration"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Một cách trung lập với nhà cung cấp để lựa chọn giữa MyInvois Portal miễn phí, tích hợp API trực tiếp và một nhà cung cấp công nghệ, dựa trên khối lượng giao dịch và những gì ERP của bạn đã làm được."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "LHDN cung cấp hai cơ chế truyền: MyInvois Portal miễn phí, được truy cập qua MyTax, hỗ trợ nhập biểu mẫu riêng lẻ và tải lên hàng loạt một bảng tính Excel định trước; và một API, có thể truy cập bằng tích hợp ERP trực tiếp, qua một nhà cung cấp dịch vụ Peppol, hoặc qua một nhà cung cấp công nghệ không phải Peppol. Portal phù hợp với khối lượng thấp; API phù hợp với khối lượng cao và đòi hỏi một chứng thư số cùng công việc hệ thống trả trước."
keyTakeaways:
  - "Chỉ có hai cơ chế chính thức — Portal và API. Mọi thứ khác là một lộ trình đến API"
  - "Portal miễn phí, cần một đăng nhập MyTax, và cung cấp tải lên hàng loạt bằng Excel"
  - "Các lộ trình API là ERP trực tiếp, nhà cung cấp dịch vụ Peppol, hoặc nhà cung cấp công nghệ không phải Peppol"
  - "Việc nộp qua API đòi hỏi một chứng thư số dưới dạng một tệp .cer hoặc .pfx"
  - "Các giới hạn cứng: 100 chứng từ và 5MB mỗi lần nộp, 300KB mỗi chứng từ"
  - "Các bên trung gian phải dùng Client ID và Secret của riêng họ và chỉ có thể thấy những gì họ đã nộp"
  - "Khối lượng tự lập hóa đơn (self-billed), không phải khối lượng bán hàng, là điều thường buộc phải quyết định chọn API"
appliesTo: "Các trưởng bộ phận tài chính và đội ngũ CNTT lựa chọn một lộ trình MyInvois, và bất kỳ ai so sánh các báo giá từ các nhà cung cấp phần mềm e-Invoicing."

faq:
  - q: "MyInvois Portal có thực sự miễn phí không, và nó có đủ không?"
    a: "Có, nó do LHDN cung cấp và được truy cập qua MyTax Portal không mất phí. Nó hỗ trợ cả việc tạo riêng lẻ qua một biểu mẫu lẫn tải lên hàng loạt một bảng tính Excel định trước. Việc nó có đủ hay không tùy thuộc vào số lượng chứng từ và bao nhiêu chứng từ cần chi tiết cụ thể của người mua. Một doanh nghiệp với một số ít hóa đơn B2B và một e-Invoice hợp nhất hằng tháng duy nhất có thể vận hành trên nó vô thời hạn."
  - q: "Tôi có cần một nhà cung cấp dịch vụ Peppol không?"
    a: "Không. Peppol là một trong ba cách mà LHDN liệt kê để tiếp cận API, cùng với tích hợp ERP trực tiếp và các nhà cung cấp công nghệ không phải Peppol. LHDN không bắt buộc một lộ trình hay một nhà cung cấp. Peppol quan trọng nếu bạn cũng cần trao đổi chứng từ xuyên biên giới có khả năng tương tác; nó không phải là một yêu cầu của MyInvois."
  - q: "API cần gì mà Portal không cần?"
    a: "Một chứng thư số — một tệp .cer hoặc .pfx được dùng để ký các lần nộp, với chữ ký đã băm được mang trong nội dung của lần nộp — và các chứng từ được xây dựng theo cấu trúc UBL 2.1 dưới dạng XML hoặc JSON. LHDN công bố hướng dẫn tích hợp và cấu hình API cùng các điểm cuối trong MyInvois SDK."
  - q: "Nếu tôi dùng một nhà cung cấp, ai chịu trách nhiệm cho một e-Invoice bị bỏ lỡ?"
    a: "Bạn. Nghĩa vụ phát hành và truyền nằm trên người nộp thuế theo s.82C của Income Tax Act 1967, và s.120(1)(d) làm cho việc vi phạm trở thành một hành vi phạm tội. Việc thuê ngoài truyền không dịch chuyển nghĩa vụ. LHDN cũng giới hạn các bên trung gian ở các e-Invoice mà chính họ đã nộp, nên một sự thay đổi nhà cung cấp để lại lịch sử phía sau."
  - q: "Tôi định cỡ quyết định như thế nào?"
    a: "Hãy đếm chứng từ, không phải doanh thu. Cộng các e-Invoice giao dịch, các e-Invoice hợp nhất, các e-Invoice tự lập hóa đơn, và tất cả các chứng từ ghi có, ghi nợ và hoàn tiền. Sau đó kiểm tra các loại trừ — các giao dịch trên RM10,000 và các ngành trong Bảng 3.6 không thể được hợp nhất, điều có thể biến một chứng từ hằng tháng duy nhất thành hàng nghìn."
  - q: "Tôi có thể chạy Portal và API cùng lúc không?"
    a: "Có. LHDN trình bày hai cơ chế như một lựa chọn theo từng lần nộp, không phải một lựa chọn cố định, và nhiều doanh nghiệp định tuyến việc bán hàng khối lượng cao qua API trong khi xử lý các chứng từ tự lập hóa đơn thỉnh thoảng trên Portal. Báo cáo và bảng điều khiển trong Portal bao phủ cả hai."

verificationNeeded:
  - "Các giới hạn tốc độ API theo từng điểm cuối bằng con số — FAQ của SDK đề cập đến Integration Practices mà không công bố các con số"
  - "Bất kỳ danh sách công nhận, chứng nhận hay nhà cung cấp được phê duyệt nào của LHDN cho các nhà cung cấp công nghệ — không tìm thấy trên hasil.gov.my hay SDK"
  - "Số hàng tối đa được chấp nhận trong bảng tính tải lên hàng loạt của MyInvois Portal — LHDN mô tả một số nhất định mà không nêu nó"

lang: "vi"
masterLanguage: "en"
translationStatus: "pending"

status: "draft"
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
  - title: "Hướng dẫn Hóa đơn điện tử (Phiên bản 4.7) — mục 2.2 đến 2.5 (e-Invoice Guideline (Version 4.7) — sections 2.2 to 2.5)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Tổng cục Thuế Nội địa Malaysia (LHDN)"
    date: "2026-07-07"
  - title: "MyInvois SDK (MyInvois SDK)"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "Tổng cục Thuế Nội địa Malaysia (LHDN)"
  - title: "MyInvois SDK — câu hỏi thường gặp (MyInvois SDK — frequently asked questions)"
    url: "https://sdk.myinvois.hasil.gov.my/faq/"
    publisher: "Tổng cục Thuế Nội địa Malaysia (LHDN)"
  - title: "MyInvois SDK — phản hồi lỗi tiêu chuẩn (MyInvois SDK — standard error response)"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "Tổng cục Thuế Nội địa Malaysia (LHDN)"
  - title: "Hướng dẫn cụ thể Hóa đơn điện tử (Phiên bản 4.8) (e-Invoice Specific Guideline (Version 4.8))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Tổng cục Thuế Nội địa Malaysia (LHDN)"
    date: "2026-07-07"

entity: "MyInvois transmission mechanisms"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "requires", to: "e-invoice-data-fields" }
  - { rel: "related-to", to: "myinvois-phases" }
related: ["e-invoicing", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice"]
keywords: ["MyInvois integration", "MyInvois API", "MyInvois Portal", "Peppol Malaysia", "e-Invoice middleware", "e-invois integrasi sistem"]
---

Gần như mọi thứ được viết về quyết định này đều được viết bởi một người đang bán
một trong các câu trả lời. Vì vậy hãy bắt đầu từ hai cơ chế duy nhất mà LHDN thực
sự công nhận, trong Bảng 2.1 của e-Invoice Guideline: **MyInvois Portal** và
**API**. Các nhà cung cấp Peppol, các nhà cung cấp công nghệ không phải Peppol và
middleware không phải là một lựa chọn thứ ba — chúng là ba cách để tiếp cận API.

## Hai cơ chế

| | MyInvois Portal | API |
| --- | --- | --- |
| Chi phí | Miễn phí, qua đăng nhập **MyTax** | Xây dựng hoặc cấp phép |
| Đầu vào | Biểu mẫu riêng lẻ, hoặc **tải lên hàng loạt một bảng tính Excel định trước** | XML hoặc JSON theo **UBL 2.1** |
| Chữ ký | Được Portal xử lý | **Chứng thư số** của bạn (.cer hoặc .pfx) |
| Sự phù hợp theo LHDN | Có thể truy cập cho mọi người nộp thuế; các doanh nghiệp mà kết nối API không có sẵn | Khối lượng cao; đòi hỏi đầu tư trả trước và thay đổi hệ thống |
| Lộ trình | Một | ERP trực tiếp, nhà cung cấp **Peppol**, nhà cung cấp **không phải Peppol** |

Cả hai đều tạo ra cùng một thứ: một IRBM Unique Identifier Number, một dấu thời
gian thẩm định, và một mã QR trên phần trình bày trực quan.

## Định cỡ vấn đề trước khi bạn mua sắm

Câu hỏi không phải là doanh thu của bạn. Đó là **bạn phải truyền bao nhiêu chứng từ
trong một tháng**, và số đếm thường lớn hơn người ta kỳ vọng:

1. Các e-Invoice giao dịch cho những người mua đã yêu cầu một e-Invoice
2. Các e-Invoice hợp nhất — một hoặc nhiều mỗi tháng, theo từng chi nhánh nếu bạn
   tách
3. Các **e-Invoice tự lập hóa đơn** — hoa hồng, nhà cung cấp nước ngoài, chủ nhà
   cá nhân, hầu hết tiền lãi, cổ tức, các khoản hoàn vốn
4. Các chứng từ ghi có, ghi nợ và hoàn tiền

Sau đó áp hai loại trừ phá vỡ các ước tính ngây thơ. Bất kỳ **giao dịch riêng lẻ
nào trên RM10,000** phải là giao dịch, trên tất cả các ngành, kể từ ngày 1 tháng 1
năm 2026. Và chín hoạt động trong Bảng 3.6 của e-Invoice Specific Guideline hoàn
toàn không bao giờ có thể hợp nhất — xe cơ giới, vé máy bay, hợp đồng xây dựng, các
khoản trả cho đại lý và nhà phân phối, các khoản chi trả cá cược, điện, viễn thông.

Một xưởng bán ba chiếc xe một tháng có một khối lượng công việc Portal tầm thường.
Một nhà bán lại viễn thông với 4,000 thuê bao trả sau thì không, và không lượng hợp
nhất nào sẽ giúp nó.

**Khối lượng tự lập hóa đơn là bất ngờ thường thấy.** Một công ty với 40 hóa đơn
bán hàng một tháng và 600 khoản trả hoa hồng cho đại lý là một doanh nghiệp
e-Invoicing khối lượng cao, bất kể sổ bán hàng của nó nói gì.

## Nơi Portal thực sự ngừng hoạt động

- **Chi phí nhập liệu.** Mỗi chứng từ giao dịch cần tên người mua, TIN, số đăng ký,
  địa chỉ, số liên lạc và số SST được gõ hoặc tải bằng bảng tính.
- **Đồng hồ 72 giờ.** Các cửa sổ hủy và từ chối chạy từ khi thẩm định. Các quy
  trình thủ công nộp hằng tuần không thể dùng chúng.
- **Sự tập trung cuối tháng.** Các e-Invoice hợp nhất đến hạn trong vòng **bảy
  ngày dương lịch** sau khi kết thúc tháng, trên hết mọi thứ khác.
- **Đối chiếu.** Portal cho bạn XML, JSON, siêu dữ liệu, lưới và trích xuất PDF —
  nhưng việc khớp các chứng từ đã thẩm định trở lại sổ cái của bạn là thủ công.

## Nơi API tốn nhiều hơn giấy phép

- **Một chứng thư số** phải được lấy, cài đặt và luân chuyển.
- **Các giới hạn nộp là cứng:** 100 chứng từ và 5MB mỗi lần nộp, 300KB mỗi chứng
  từ. Việc gộp lô và, khi cần, thu gọn là vấn đề của bạn.
- **Thẩm định hai giai đoạn.** *Đã nộp* không phải là *Hợp lệ*. Cấu trúc, các
  trường cốt lõi và các mã được kiểm tra ngay lập tức; chữ ký, người nộp thuế, các
  chứng từ được tham chiếu và các bản trùng lặp được kiểm tra trong nền. Bất kỳ
  tích hợp nào coi một xác nhận kiểu 202 là thành công sẽ âm thầm tích lũy các
  chứng từ không hợp lệ.
- **Xử lý token.** Các token đăng nhập có hiệu lực trong 60 phút và có ý định được
  tái sử dụng, không phải được tạo cho mỗi yêu cầu. Giới hạn tốc độ trả về 429 với
  một tiêu đề `Retry-After`.
- **Dữ liệu chủ.** TIN của nhà cung cấp và người mua, BRN 12 chữ số mới, các mã
  MSIC và các số SST phải đúng trước khi bất kỳ điều nào trong số này chạy.

## Lựa chọn một lộ trình đến API

| Lộ trình | Phù hợp | Cần chú ý |
| --- | --- | --- |
| **Tích hợp ERP trực tiếp** | ERP đã thiết lập với một bản địa hóa Malaysia được duy trì, hoặc năng lực kỹ thuật nội bộ | Bảo trì liên tục khi các phiên bản hướng dẫn thay đổi — v4.7 và v4.8 đều xuất hiện vào ngày 7 tháng 7 năm 2026 |
| **Nhà cung cấp dịch vụ Peppol** | Các doanh nghiệp cũng muốn trao đổi chứng từ có khả năng tương tác với các đối tác thương mại | Peppol không phải là một yêu cầu của MyInvois; đừng trả tiền cho nó như thể nó là |
| **Nhà cung cấp công nghệ / middleware không phải Peppol** | Nhiều hệ thống nguồn, các cụm POS, hoặc một ERP không có bản địa hóa | Sự lưu giữ dữ liệu, các điều khoản rời bỏ, và liệu họ có nộp dưới thông tin xác thực của chính họ hay không |

LHDN không bảo chứng, công nhận hay phê duyệt bất kỳ nhà cung cấp nào. Nếu một nhà
cung cấp tuyên bố tình trạng được LHDN phê duyệt, hãy yêu cầu được xem bằng chứng.

## Câu hỏi về bên trung gian mà không ai hỏi

SDK nêu rằng các bên trung gian nộp bằng **Client ID và Client Secret của riêng
họ**, và chỉ có thể truy cập các e-Invoice **họ** đã nộp — họ không thể trích xuất
các chứng từ mà một người nộp thuế đã nộp một cách độc lập.

Hai hệ quả đáng được viết vào một hợp đồng:

- **Chuyển đổi nhà cung cấp không mang lịch sử nộp của bạn theo.** Hãy lập kế hoạch
  cho một kỳ chạy song song và cho kho lưu trữ của riêng bạn.
- **Trách nhiệm không chuyển giao.** Section 82C của Income Tax Act 1967 đặt nghĩa
  vụ lên người nộp thuế; s.120(1)(d) làm cho việc vi phạm trở thành một hành vi
  phạm tội. Một sự cố ngừng hoạt động của nhà cung cấp là sự không tuân thủ của
  bạn.

Về các sự cố ngừng hoạt động, LHDN cung cấp một sự giảm nhẹ. Section 2.5.4 của
e-Invoice Guideline nói rằng khi chính MyInvois System ngừng hoạt động để bảo trì
hoặc vì các lý do kỹ thuật và người nộp thuế có thể chứng minh các nỗ lực tuân thủ
của mình, Tổng Cục trưởng sẽ đánh giá từng trường hợp riêng lẻ và có thể không có
hành động nào. Điều đó bao phủ thời gian ngừng hoạt động của LHDN, không phải của
nhà cung cấp của bạn.

## Một lộ trình quyết định

1. **Bạn có được miễn không?** Dưới RM1,000,000 doanh thu hằng năm, dừng lại.
2. **Đếm các chứng từ hằng tháng** trên tất cả bốn nhóm ở trên.
3. **Dưới khoảng một trăm, chủ yếu là hợp nhất?** Portal, với tải lên hàng loạt
   bằng Excel. Xem xét lại hằng năm.
4. **Hàng trăm đến hàng nghìn, một hệ thống nguồn duy nhất?** Hãy hỏi nhà cung cấp
   ERP của bạn bản địa hóa MyInvois của họ bao phủ những gì — cụ thể là các loại tự
   lập hóa đơn 11 đến 14 và các trường phụ lục cho hàng nhập khẩu.
5. **Hàng nghìn, hoặc nhiều hệ thống nguồn, hoặc một cụm POS?** Middleware, được
   chọn dựa trên sự lưu giữ dữ liệu và các điều khoản rời bỏ thay vì các danh sách
   tính năng.
6. **Dù bạn chọn gì, hãy chứng minh nó từ đầu đến cuối trước khi kỳ nới lỏng của
   bạn kết thúc** — 31 tháng 12 năm 2027 cho giai đoạn 4, và đã qua đối với các
   giai đoạn 1 đến 3.

## Những sai lầm phổ biến

- **Mua trước khi đếm.** Số đếm chứng từ, kể cả tự lập hóa đơn, là toàn bộ đầu vào
  cho quyết định này.
- **Giả định rằng Peppol là bắt buộc.** Nó là một trong ba lộ trình API.
- **Tin một tuyên bố công nhận.** LHDN không công bố danh sách nhà cung cấp được
  phê duyệt.
- **Coi việc thẩm định là đồng bộ.** Bốn trong bảy bộ thẩm định chạy trong nền.
- **Bỏ qua việc làm sạch dữ liệu chủ.** Số đăng ký SSM cũ và các TIN lỗi thời sẽ
  không đạt bộ thẩm định người nộp thuế bất kể tích hợp tốt đến đâu.
- **Kiểm thử với dữ liệu sạch.** Hãy kiểm thử với các nhà cung cấp nước ngoài, các
  cá nhân không có TIN, các chứng từ ghi có và khối lượng cuối tháng, vì đó là điều
  gây hỏng.

## Tiếp theo

Hãy kéo các khoản phải trả và phải thu của tháng trước, phân loại mỗi dòng là giao
dịch, hợp nhất hay tự lập hóa đơn, và đếm. Con số đó quyết định cơ chế. Sau đó hãy
kiểm tra danh sách trường so với dữ liệu chủ của bạn, vì việc làm sạch hầu như luôn
mất nhiều thời gian hơn việc tích hợp.
