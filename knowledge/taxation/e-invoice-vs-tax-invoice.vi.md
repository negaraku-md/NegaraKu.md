---
topicId: MY-TAX-0006
title: "Hóa đơn điện tử và hóa đơn thuế SST: Hai chế độ, hai tài liệu"
seoTitle: "e-Invoice vs Tax Invoice Malaysia: LHDN vs RMCD"
slug: "e-invoice-vs-tax-invoice"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Vì sao một hóa đơn điện tử đã được LHDN thẩm định không tự động thỏa mãn Sales Tax Act 2018 hoặc Service Tax Act 2018, và cái gì phải có trên tài liệu để nó làm được cả hai việc."

tier: "3"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "Hóa đơn điện tử là một tài liệu thuế thu nhập theo s.82C của Luật Thuế thu nhập (Income Tax Act 1967), do LHDN quản lý. Hóa đơn SST là một tài liệu riêng biệt được yêu cầu bởi Sales Tax Act 2018 và Service Tax Act 2018, do RMCD quản lý. Một tài liệu có thể phục vụ cả hai, nhưng chỉ khi nó mang mọi chi tiết mà mỗi chế độ yêu cầu — s.82C(4) nói rằng khi các chi tiết xung đột, hóa đơn điện tử chỉ hợp lệ cho các mục đích thuế thu nhập."
keyTakeaways:
  - "Hai đạo luật, hai cơ quan quản lý — LHDN theo ITA 1967, RMCD theo các Đạo luật Thuế 2018"
  - "s.82C(4) ITA 1967 cho phép một tài liệu làm cả hai việc, nhưng chỉ khi các chi tiết khớp nhau"
  - "Khi chúng xung đột, hóa đơn điện tử chỉ có hiệu lực thi hành cho các mục đích thuế thu nhập"
  - "Các chi tiết thuế dịch vụ nằm trong reg. 10 của Service Tax Regulations 2018"
  - "Các chi tiết thuế bán hàng nằm trong reg. 7 của Sales Tax Regulations 2018"
  - "Dữ liệu MyInvois được chia sẻ với RMCD theo s.138(4)(aa) của ITA 1967"
appliesTo: "Các doanh nghiệp đã đăng ký SST mà cũng nằm trong phạm vi của hóa đơn điện tử, và bất kỳ ai thiết kế một mẫu hóa đơn phải thỏa mãn cả hai cơ quan quản lý."

verificationNeeded:
  - "Whether RMCD has issued a dedicated guide reconciling the e-Invoice visual representation with the SST invoice particulars — none was located on mysst.customs.gov.my"

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
  - title: "Finance (No. 2) Act 2023 (Act 851) — điều 82C (Finance (No. 2) Act 2023 (Act 851) — section 82C)"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Chính phủ Malaysia"
    date: "2023-12-29"
  - title: "Service Tax Regulations 2018 — quy định 10 (Service Tax Regulations 2018 — regulation 10)"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Regulations-2018.pdf"
    publisher: "Cục Hải quan Hoàng gia Malaysia (RMCD)"
  - title: "Sales Tax Regulations 2018 — quy định 7 (Sales Tax Regulations 2018 — regulation 7)"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Regulations-2018.pdf"
    publisher: "Cục Hải quan Hoàng gia Malaysia (RMCD)"
  - title: "Hướng dẫn Hóa đơn Điện tử (Phiên bản 4.7) (e-Invoice Guideline (Version 4.7))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Cục Thuế Nội địa (LHDN)"
    date: "2026-07-07"
  - title: "MySST — Phát hành Hóa đơn (MySST — Issuing Invoices)"
    url: "https://mysst.customs.gov.my/issuing-invoices/"
    publisher: "Cục Hải quan Hoàng gia Malaysia (RMCD)"

entity: "e-Invoice compared with the SST tax invoice"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "compares-with", to: "sst-explained" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "service-tax-act-2018" }
  - { rel: "governs", to: "sales-tax-act-2018" }
related: ["e-invoicing", "sst-explained", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice"]
keywords: ["e-Invoice vs tax invoice", "SST invoice requirements", "Service Tax Regulations 2018 regulation 10", "sales tax invoice particulars", "LHDN RMCD invoice", "invois cukai SST"]
---

Việc thẩm định một hóa đơn qua MyInvois không làm cho nó trở thành một hóa đơn SST. Câu đó
gây rắc rối cho các doanh nghiệp đã đăng ký SST nhiều hơn bất kỳ điểm nào khác trong
quá trình triển khai hóa đơn điện tử, bởi vì hai cơ quan quản lý muốn hai thứ khác nhau từ
cùng một tờ giấy.

## Hai chế độ trong nháy mắt

| | Hóa đơn điện tử | Hóa đơn SST |
| --- | --- | --- |
| Đạo luật | Luật Thuế thu nhập (Income Tax Act 1967), **s.82C** | **Sales Tax Act 2018** / **Service Tax Act 2018**, s.21 |
| Cơ quan quản lý | **LHDN** | **RMCD** |
| Chi tiết được đặt bởi | e-Invoice Guideline, theo s.134A ITA 1967 | **reg. 7** Sales Tax Regulations 2018 / **reg. 10** Service Tax Regulations 2018 |
| Ai phải phát hành | Người nộp thuế trong phạm vi theo giai đoạn doanh thu | Nhà sản xuất **đã đăng ký** và người đã đăng ký |
| Thẩm định | Được truyền đến và thẩm định bởi LHDN | Không có — không nộp, không có số tham chiếu |
| Mục đích | Bằng chứng thu nhập và chi phí cho thuế thu nhập | Bằng chứng về thuế đã đánh cho việc hạch toán SST |

Không cái nào thay thế cái kia. Một công ty đã đăng ký SST dưới RM1 triệu doanh thu
được miễn hóa đơn điện tử và vẫn phát hành hóa đơn SST. Một công ty lớn
chưa đăng ký thì ngược lại.

## Điều khoản thực sự chi phối điều này

Điều 82C(4) của Luật Thuế thu nhập (Income Tax Act 1967), được chèn vào bởi Finance (No. 2) Act
2023:

> Khi một người được yêu cầu phát hành một hóa đơn theo bất kỳ luật thành văn nào khác,
> hóa đơn điện tử bao gồm bất kỳ chi tiết nào khác có thể được yêu cầu
> sẽ được hiểu là một hóa đơn được phát hành theo luật đó — **với điều kiện là khi
> các chi tiết của hóa đơn điện tử không nhất quán với các
> yêu cầu về việc phát hành hóa đơn theo luật đó, thì hóa đơn
> điện tử chỉ hợp lệ và có hiệu lực thi hành cho các mục đích của Đạo luật này.**

Hãy đọc điều khoản bổ sung hai lần. Một tài liệu có thể thỏa mãn cả hai chế độ, nhưng chỉ khi nó
mang mọi thứ mà cả hai yêu cầu. Thiếu về phía RMCD và bạn không phải đã
phát hành một tài liệu lỗi cho cả hai — bạn có một tài liệu thuế thu nhập hoàn toàn tốt
và **hoàn toàn không có hóa đơn SST nào**.

Các mục 2.6.3 và 2.6.4 của e-Invoice Guideline nói điều tương tự bằng những từ
đơn giản hơn: người nộp thuế có thể áp dụng bất kỳ định dạng thể hiện trực quan nào, và được *khuyên*
nên bao gồm các chi tiết được yêu cầu theo các luật như Sales Tax Act 2018
và Service Tax Act 2018. Khi bản thể hiện trực quan mang các chi tiết theo Service
Tax Regulations 2018, nó có thể được dùng cho các mục đích thuế dịch vụ.

## RMCD yêu cầu gì mà danh sách trường của hóa đơn điện tử không bắt buộc

**Regulation 10, Service Tax Regulations 2018** — số sê-ri hóa đơn; ngày
hóa đơn; tên, địa chỉ và số nhận dạng của người đã đăng ký; một
mô tả đủ để xác định các dịch vụ chịu thuế; bất kỳ chiết khấu nào; tổng
chưa gồm thuế dịch vụ, mức thuế, và tổng thuế dịch vụ **được thể hiện như một số tiền
riêng biệt**; tổng đã gồm thuế dịch vụ; và bất kỳ số tiền ngoại tệ nào cũng
được biểu thị bằng ringgit theo tỷ giá bán hiện hành.

**Regulation 7, Sales Tax Regulations 2018** bổ sung, trong số những cái khác, **tên và
địa chỉ của người mà hàng hóa chịu thuế được bán cho**, và theo mỗi mô tả
loại, số lượng và số tiền chưa gồm thuế bán hàng.

Hai khoảng trống nối tiếp trực tiếp:

- **Tên và địa chỉ của người mua.** 55 trường của LHDN bao gồm chúng, nhưng một
  hóa đơn điện tử hợp nhất đặt người mua thành *General Public* với địa chỉ là
  NA. Một nhà sản xuất đã đăng ký không thể ghi nhận một giao dịch bán chịu thuế theo cách đó và
  vẫn đáp ứng reg. 7(d).
- **Thuế được thể hiện như một số tiền riêng biệt.** Hóa đơn điện tử mang loại thuế, mức thuế và
  số tiền như dữ liệu. Liệu *bản thể hiện trực quan* của bạn có in thuế dịch vụ như một
  dòng riêng biệt hay không là một quyết định về mẫu — và reg. 10(f) biến nó thành một quyết định pháp lý.

Ngôn ngữ cũng là quy tắc của RMCD, không phải của LHDN: hóa đơn SST phải bằng tiếng Mã Lai
hoặc tiếng Anh.

## RMCD có thấy dữ liệu hóa đơn điện tử của tôi không?

Có. Điều 138(4)(aa) của Luật Thuế thu nhập (Income Tax Act 1967) cho phép LHDN chia sẻ
dữ liệu MyInvois với RMCD, và mục 2.6.1 của e-Invoice Guideline xác nhận
danh sách trường được thiết kế dựa trên Sales Tax Act 2018 và Service Tax Act
2018 cùng với ITA 1967, Labuan Business Activity Tax Act 1990 và
Petroleum (Income Tax) Act 1967. Hai hồ sơ nộp của bạn nay hiển thị cho nhau.

## Những sai lầm thường gặp

- **Ngừng mẫu hóa đơn SST khi vận hành.** Không có gì trong s.82C bãi bỏ
  s.21 của một trong hai Đạo luật 2018.
- **Giả định rằng việc thẩm định chữa được một chi tiết bị thiếu.** MyInvois thẩm định dựa trên
  lược đồ của LHDN. Nó không có quan điểm về reg. 7 hoặc reg. 10.
- **Dùng một hóa đơn điện tử hợp nhất cho một giao dịch bán chịu thuế cho một người mua có tên.** Nó
  không thể mang các chi tiết người mua mà reg. 7 đòi hỏi.
- **Bỏ số đăng ký SST khỏi tài liệu được in.** Nó là một trường hóa đơn điện tử
  bắt buộc có điều kiện đối với người đăng ký và là một chi tiết theo reg. 10.
- **Coi tờ khai SST-02 và hóa đơn điện tử là một quy trình.** Cơ quan quản lý khác nhau,
  kỳ khác nhau, hình phạt khác nhau.

## Tiếp theo

Đặt hai danh sách chi tiết cạnh nhau so với hóa đơn được in thực tế của bạn,
không phải so với XML của bạn. XML thỏa mãn LHDN; bản thể hiện trực quan là cái
phải thỏa mãn RMCD. Nếu bạn cũng hợp nhất các biên lai B2C, hãy kiểm tra riêng
xem có bất kỳ giao dịch nào trong số đó là các nguồn cung chịu thuế cần một người mua có tên hay không.
