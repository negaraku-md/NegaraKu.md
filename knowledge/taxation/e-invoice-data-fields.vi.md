---
topicId: MY-TAX-0014
title: "Tham chiếu các trường dữ liệu hóa đơn điện tử"
seoTitle: "e-Invoice Data Fields Malaysia: 55 Fields Reference"
slug: "e-invoice-data-fields"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Tất cả 55 trường hóa đơn điện tử bắt buộc với trạng thái bắt buộc hoặc tùy chọn, các trường phụ lục, các danh sách mã của LHDN, và bộ thẩm định từ chối mỗi loại lỗi."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "LHDN yêu cầu 55 trường dữ liệu để phát hành một hóa đơn điện tử, được nhóm thành tám loại. Hầu hết là bắt buộc; hai mươi là tùy chọn và tám là bắt buộc có điều kiện — số đăng ký SST và thuế du lịch, số tham chiếu hóa đơn điện tử gốc, tỷ giá hối đoái, mức thuế, và hai trường miễn thuế. Một phụ lục bổ sung các tham chiếu mẫu hải quan bắt buộc cho việc nhập và xuất hàng hóa."
keyTakeaways:
  - "55 trường trong Appendix 1, được nhóm thành tám loại, cộng với một phụ lục trong Appendix 2"
  - "XML hoặc JSON, cả hai tuân theo UBL 2.1"
  - "Tám trường là bắt buộc có điều kiện chứ không phải luôn luôn được yêu cầu"
  - "Ngày và giờ của hóa đơn điện tử phải là ngày và giờ hiện tại"
  - "Bảy bộ thẩm định chạy — ba ngay lập tức, bốn ở nền"
  - "Các danh sách mã cho loại hóa đơn điện tử, loại thuế, tiền tệ, MSIC, bang và đơn vị đo lường được công bố trong SDK"
  - "Một hóa đơn điện tử lỗi có thể được thay thế bằng một hóa đơn thay thế trong vòng ba ngày theo s.82C(8) ITA 1967"
appliesTo: "Các nhà phát triển xây dựng một tích hợp MyInvois, các chuyên gia tư vấn ERP ánh xạ dữ liệu chủ, và các nhóm tài chính gỡ lỗi các lần nộp bị từ chối."

verificationNeeded:
  - "The full published list of granular validation error codes (CF, DS, ST prefixes) — the SDK documents the seven validator categories and standard HTTP error codes but does not publish an exhaustive code-to-condition table"
  - "Per-endpoint API rate limits — the SDK refers to Integration Practices without stating numeric limits on the FAQ page"

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
  - title: "e-Invoice Guideline (Version 4.7) — Appendices 1 and 2"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois SDK — document validation rules"
    url: "https://sdk.myinvois.hasil.gov.my/document-validation-rules/"
    publisher: "LHDN"
  - title: "MyInvois SDK — code lists"
    url: "https://sdk.myinvois.hasil.gov.my/codes/"
    publisher: "LHDN"
  - title: "MyInvois SDK — standard error response"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "LHDN"
  - title: "e-Invoice Specific Guideline (Version 4.8) — Appendix 1, list of general TIN"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"

entity: "e-Invoice data fields"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
related: ["e-invoicing", "myinvois-phases", "myinvois-integration", "self-billed-e-invoice", "consolidated-e-invoice"]
keywords: ["e-Invoice data fields", "55 fields e-Invoice", "MyInvois mandatory fields", "e-Invoice validation error", "UBL 2.1 Malaysia", "medan data e-invois"]
---

Mọi lần nộp bị từ chối đều truy nguyên về một trong hai thứ: một trường mà LHDN coi
là bắt buộc mà ERP của bạn coi là tùy chọn, hoặc một giá trị mã không nằm trong
danh sách của LHDN. Trang này là danh sách các trường, như được công bố trong Appendix 1 và 2 của
e-Invoice Guideline phiên bản 4.7.

Định dạng là **XML hoặc JSON**, cả hai tuân theo **UBL 2.1**. LHDN nhóm 55
trường thành tám loại: Địa chỉ, Chi tiết Doanh nghiệp, Số Liên hệ, Chi tiết
Hóa đơn, Các Bên, Chi tiết Bên, Thông tin Thanh toán, và Sản phẩm / Dịch vụ.

## 55 trường

**M** = bắt buộc · **C** = bắt buộc có điều kiện · **O** = tùy chọn

### Các bên và chi tiết bên

| # | Trường | Trạng thái | Ghi chú |
| --- | --- | --- | --- |
| 1 | Tên của Nhà cung cấp | M | |
| 2 | Tên của Người mua | M | General Public trên một hóa đơn điện tử hợp nhất |
| 3 | TIN của Nhà cung cấp | M | Các mã TIN chung áp dụng khi không có sẵn |
| 4 | Số Đăng ký / Nhận dạng / Hộ chiếu của Nhà cung cấp | M | Người đăng ký SSM chỉ dùng **BRN 12 ký tự mới** |
| 5 | Số Đăng ký SST của Nhà cung cấp | **C** | Bắt buộc đối với người đăng ký SST |
| 6 | Số Đăng ký Thuế Du lịch của Nhà cung cấp | **C** | Bắt buộc đối với người đăng ký thuế du lịch |
| 7 | E-mail của Nhà cung cấp | O | |
| 8 | Mã MSIC của Nhà cung cấp | M | 5 chữ số dạng số; 00000 khi không có sẵn cho một nhà cung cấp nước ngoài |
| 9 | Mô tả Hoạt động Kinh doanh của Nhà cung cấp | M | |
| 10 | TIN của Người mua | M | |
| 11 | Số Đăng ký / Nhận dạng / Hộ chiếu của Người mua | M | |
| 12 | Số Đăng ký SST của Người mua | **C** | Bắt buộc đối với người đăng ký SST |
| 13 | E-mail của Người mua | O | |

### Địa chỉ và liên hệ

| # | Trường | Trạng thái |
| --- | --- | --- |
| 14 | Địa chỉ của Nhà cung cấp | M |
| 15 | Địa chỉ của Người mua | M |
| 16 | Số Liên hệ của Nhà cung cấp | M |
| 17 | Số Liên hệ của Người mua | M |

### Chi tiết hóa đơn

| # | Trường | Trạng thái | Ghi chú |
| --- | --- | --- | --- |
| 18 | Phiên bản Hóa đơn điện tử | M | SVDP 1.2 / 1.3 chỉ cho công bố tự nguyện |
| 19 | Loại Hóa đơn điện tử | M | Xem danh sách mã bên dưới |
| 20 | Mã / Số Hóa đơn điện tử | M | Tham chiếu riêng của nhà cung cấp |
| 21 | Số Tham chiếu Hóa đơn điện tử Gốc | **C** | Bắt buộc trên các phiếu ghi có, ghi nợ và hoàn tiền |
| 22 | Ngày và Giờ Hóa đơn điện tử | M | **Phải là ngày và giờ hiện tại** |
| 23 | Chữ ký số của Người phát hành | M | Giấy chứng nhận của nhà cung cấp dịch vụ khi một cái được dùng |
| 24 | Mã Tiền tệ Hóa đơn | M | |
| 25 | Tỷ giá Hối đoái | **C** | Bắt buộc khi tiền tệ không phải là ringgit |
| 26 | Tần suất Lập hóa đơn | O | |
| 27 | Kỳ Lập hóa đơn | O | |

### Sản phẩm và dịch vụ

| # | Trường | Trạng thái | Ghi chú |
| --- | --- | --- | --- |
| 28 | Phân loại | M | Mã 3 chữ số từ danh mục của LHDN |
| 29 | Mô tả Sản phẩm hoặc Dịch vụ | M | Các số tham chiếu biên lai trên một hóa đơn điện tử hợp nhất |
| 30 | Đơn giá | M | |
| 31 | Loại Thuế | M | Cấp dòng và cấp hóa đơn |
| 32 | Mức Thuế | **C** | |
| 33 | Số tiền Thuế | M | Cấp dòng và cấp hóa đơn |
| 34 | Chi tiết Miễn Thuế | **C** | Bắt buộc nếu một sự miễn áp dụng |
| 35 | Số tiền được Miễn Thuế | **C** | Bắt buộc nếu một sự miễn áp dụng |
| 36 | Tổng phụ | M | Chỉ cấp dòng |
| 37 | Tổng Chưa gồm Thuế | M | Cấp dòng và cấp hóa đơn |
| 38 | Tổng Đã gồm Thuế | M | Chỉ cấp hóa đơn |
| 39 | Tổng Số tiền Ròng | O | Chỉ cấp hóa đơn |
| 40 | Tổng Số tiền Phải trả | M | Chỉ cấp hóa đơn |
| 41 | Số tiền Làm tròn | O | Chỉ cấp hóa đơn |
| 42 | Tổng Số tiền Chịu thuế theo Loại Thuế | O | Chỉ cấp hóa đơn |
| 43 | Số lượng | O | |
| 44 | Đơn vị đo lường | O | |
| 45 | Mức Chiết khấu | O | |
| 46 | Số tiền Chiết khấu | O | |
| 47 | Mức Phí / Khoản thu | O | |
| 48 | Số tiền Phí / Khoản thu | O | |

### Thông tin thanh toán

| # | Trường | Trạng thái |
| --- | --- | --- |
| 49 | Phương thức Thanh toán | O |
| 50 | Số Tài khoản Ngân hàng của Nhà cung cấp | O |
| 51 | Điều khoản Thanh toán | O |
| 52 | Số tiền Trả trước | O |
| 53 | Ngày Trả trước | O |
| 54 | Số Tham chiếu Trả trước | O |
| 55 | Số Tham chiếu Hóa đơn | O |

## Các trường phụ lục

| Trường | Trạng thái | Áp dụng cho |
| --- | --- | --- |
| Số Tham chiếu của Mẫu Hải quan số 1, 9 v.v. | **Bắt buộc** | Nhập khẩu hàng hóa |
| Số Tham chiếu của Mẫu Hải quan số 2 | Tùy chọn | Xuất khẩu hàng hóa |
| Tên / Địa chỉ / TIN / Số Đăng ký hoặc Hộ chiếu của Người nhận hàng | Tùy chọn | Hàng được vận chuyển đến người khác không phải người mua |
| Incoterms | Tùy chọn | Nhập và xuất hàng hóa |
| Mã Biểu thuế Sản phẩm | Tùy chọn | Chỉ hàng hóa |
| Thông tin Hiệp định Thương mại Tự do | Tùy chọn | Chỉ xuất khẩu, nếu áp dụng |
| Số Ủy quyền cho Nhà xuất khẩu được Chứng nhận, ví dụ số ATIGA | Tùy chọn | Chỉ xuất khẩu, nếu áp dụng |
| Quốc gia Xuất xứ | Tùy chọn | Nhập và xuất hàng hóa |
| Chi tiết các khoản thu khác | Tùy chọn | Nhập và xuất hàng hóa |

LHDN lưu ý rằng các yêu cầu về phụ lục có thể được cập nhật theo thời gian.

## Các danh sách mã

**Loại Hóa đơn điện tử**

| Mã | Loại | | Mã | Loại |
| --- | --- | --- | --- | --- |
| 01 | Hóa đơn | | 11 | Hóa đơn Tự lập |
| 02 | Phiếu Ghi có | | 12 | Phiếu Ghi có Tự lập |
| 03 | Phiếu Ghi nợ | | 13 | Phiếu Ghi nợ Tự lập |
| 04 | Phiếu Hoàn tiền | | 14 | Phiếu Hoàn tiền Tự lập |

**Loại Thuế**

| Mã | Loại |
| --- | --- |
| 01 | Thuế Bán hàng |
| 02 | Thuế Dịch vụ |
| 03 | Thuế Du lịch |
| 04 | Thuế Hàng hóa Giá trị Cao |
| 05 | Thuế Bán hàng trên Hàng hóa Giá trị Thấp |
| 06 | Không Áp dụng |
| E | Miễn thuế, khi áp dụng |

**TIN Chung** (e-Invoice Specific Guideline, Appendix 1)

| Mã | Sử dụng |
| --- | --- |
| EI00000000010 | General Public — cá nhân Malaysia chỉ có MyKad; người mua trên một hóa đơn điện tử hợp nhất; nhà cung cấp trên một hóa đơn điện tử tự lập hợp nhất |
| EI00000000020 | Người mua nước ngoài hoặc người nhận hàng nước ngoài |
| EI00000000030 | Nhà cung cấp nước ngoài, tự lập hóa đơn |
| EI00000000040 | Chính phủ, các chính quyền bang và địa phương, các cơ quan theo luật định, các tổ chức được miễn |

SDK cũng công bố các mã phân loại, mã quốc gia, mã tiền tệ, mã MSIC,
các phương thức thanh toán, mã bang và đơn vị đo lường.

## Các bộ thẩm định và cái gì kích hoạt chúng

| Bộ thẩm định | Thời điểm | Nguyên nhân điển hình của thất bại |
| --- | --- | --- |
| **Cấu trúc** | Ngay lập tức | XML hoặc JSON không đúng định dạng, hoặc một tài liệu không khớp cấu trúc yêu cầu cho loại và phiên bản đó theo UBL 2.1 |
| **Trường Cốt lõi** | Ngay lập tức | Một trường bắt buộc bị thiếu |
| **Mã** | Ngay lập tức và ở nền | Một giá trị mã tiền tệ, loại thuế hoặc mã khác không nằm trong danh sách của LHDN |
| **Chữ ký** | Ở nền | Chữ ký số không vượt qua xác minh |
| **Người nộp thuế** | Ở nền | Một TIN được tham chiếu trong tài liệu không hợp lệ tính đến ngày phát hành tài liệu |
| **Tài liệu được Tham chiếu** | Ở nền | Một phiếu ghi có, ghi nợ hoặc hoàn tiền chỉ đến một tài liệu không phải là một hóa đơn điện tử hợp lệ vào thời điểm phát hành |
| **Tài liệu Trùng lặp** | Ở nền | Một tài liệu gần giống hệt đã được nộp — mã lỗi **DS302** |

Trạng thái tài liệu chuyển **Submitted → Valid** hoặc **Invalid**. *Submitted* chỉ có nghĩa là
các kiểm tra cấu trúc và trường cốt lõi đã vượt qua; các bộ thẩm định ở nền
vẫn có thể làm nó thất bại.

Các lỗi ở cấp truyền tải sử dụng các ánh xạ HTTP tiêu chuẩn: `BadRequest` và `BadArgument`
(400), `Unauthorized` (401), `Forbidden` (403), `NotFound` (404),
`TooManyRequests` (429, với một header `Retry-After`), `InternalServerError`
(500), `NotImplemented` (501), `ServiceUnavailable` (503).

## Đính chính một tài liệu lỗi

- **Trong vòng 72 giờ kể từ khi thẩm định** — nhà cung cấp có thể hủy, hoặc người mua có thể
  yêu cầu từ chối và nhà cung cấp sau đó hủy. Sau 72 giờ, không cái nào
  có thể làm được.
- **Trong vòng ba ngày kể từ khi phát hành một hóa đơn điện tử lỗi** — s.82C(8) của
  Luật Thuế thu nhập (Income Tax Act 1967) cho phép một **hóa đơn điện tử thay thế**.
- **Sau đó** — phát hành một hóa đơn điện tử phiếu ghi có, ghi nợ hoặc hoàn tiền tham chiếu
  đến tài liệu gốc trong trường 21.

## Những sai lầm thường gặp

- **Gửi số đăng ký SSM cũ.** Trường 4 yêu cầu BRN 12 chữ số
  mới cho người đăng ký SSM.
- **Ghi lùi ngày trường 22.** LHDN yêu cầu ngày và giờ hiện tại; một
  tài liệu ghi lùi ngày thất bại.
- **Để trống MSIC cho một nhà cung cấp nước ngoài.** Dùng 00000, không phải một giá trị trống.
- **Dùng loại thuế 06 để nghĩa là được miễn.** 06 là *Không Áp dụng*; miễn là E,
  và nó kéo các trường 34 và 35 vào trạng thái bắt buộc.
- **Nộp lại một lần nộp thất bại mà không thay đổi.** Bộ thẩm định trùng lặp sẽ báo
  DS302 thay vì chấp nhận nó.
- **Coi một phản hồi Submitted là thành công.** Chỉ *Valid* mới là thành công.

## Tiếp theo

Ánh xạ các trường 3, 4, 5, 8, 10, 11 và 12 so với dữ liệu chủ về khách hàng và nhà cung cấp
của bạn trước khi viết bất kỳ mã nào — bảy trường đó là nơi thời gian dọn dẹp thực sự
tốn vào. Sau đó quyết định con đường truyền tải, bởi vì Cổng điền các trường này
bằng mẫu và API biến chúng thành vấn đề của bạn.
