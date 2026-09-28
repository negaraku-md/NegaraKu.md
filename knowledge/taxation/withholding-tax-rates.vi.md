---
topicId: MY-TAX-0025
title: "Các mức thuế khấu trừ ở Malaysia theo loại thanh toán"
seoTitle: "Các mức thuế khấu trừ Malaysia — Mục, mức, mẫu"
slug: "withholding-tax-rates"
category: "taxation"
subcategory: ["withholding-tax"]
summary: "Mọi mức thuế khấu trừ của Malaysia trong một bảng — loại thanh toán, mục ITA, mức, mẫu và thời hạn nộp."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "Các mức thuế khấu trừ của Malaysia được đặt bởi Schedule 1 của Income Tax Act 1967, chứ không phải bởi các mục thu. Lãi cho một người không cư trú là 15 phần trăm, tiền bản quyền 10 phần trăm, các loại thu nhập đặc biệt theo s.4A 10 phần trăm, thu nhập đoạn 4(f) 10 phần trăm, nghệ sĩ biểu diễn công cộng không cư trú 15 phần trăm, và nhà thầu không cư trú 10 phần trăm cộng 3 phần trăm. Gần như tất cả các khoản này phải được nộp trong vòng một tháng kể từ khi trả hoặc ghi có cho bên nhận."
keyTakeaways:
  - "Mức nằm trong Schedule 1, nghĩa vụ nằm trong mục thu — hãy trích dẫn cả hai"
  - "Một tháng sau khi trả hoặc ghi có là quy tắc nộp tiêu chuẩn, và việc ghi có có thể rơi trước việc thanh toán"
  - "Mục 107D là ngoại lệ — thanh toán đến hạn vào cuối tháng dương lịch kế tiếp, chứ không phải một tháng sau"
  - "Mục 107A mang hai mức trên cùng một khoản thanh toán: 10 phần trăm cho nhà thầu, 3 phần trăm cho các nhân viên của nó"
  - "Một mức hiệp định chỉ có sẵn nếu bạn giữ một chứng nhận cư trú từ cơ quan thuế của bên nhận"
  - "Không khấu trừ kích hoạt một mức tăng 10 phần trăm và việc không cho phép chi phí nền tảng"
appliesTo: "Bất kỳ doanh nghiệp, cơ quan chính phủ hoặc người cư trú nào ở Malaysia trả cho một người không cư trú, và bất kỳ công ty nào trả cho các đại lý, người kinh doanh hoặc nhà phân phối cư trú."

faq:
  - q: "Mức thuế khấu trừ tiêu chuẩn ở Malaysia là gì?"
    a: "Không có một mức tiêu chuẩn duy nhất. Mức phụ thuộc vào loại thu nhập theo Schedule 1 của Income Tax Act 1967 — 15 phần trăm cho lãi, 10 phần trăm cho tiền bản quyền, 10 phần trăm cho các loại thu nhập đặc biệt theo s.4A, và 10 phần trăm cộng 3 phần trăm cho các khoản thanh toán hợp đồng không cư trú. Các mức hiệp định có thể giảm một số trong các mức này."
  - q: "Khi nào thuế khấu trừ phải được trả cho LHDN?"
    a: "Trong vòng một tháng sau khi trả hoặc ghi có cho bên nhận đối với các ss.107A, 109, 109A, 109B và 109F. Mục 107D thì khác — nó đến hạn không muộn hơn cuối tháng dương lịch kế tiếp tháng thanh toán. Nếu ngày đến hạn rơi vào cuối tuần hoặc ngày lễ công cộng, ngày làm việc kế tiếp áp dụng."
  - q: "Thuế khấu trừ có phải là một khoản thuế cuối cùng không?"
    a: "Đối với hầu hết thu nhập không cư trú thì có. LHDN coi thuế khấu trừ trên lãi, tiền bản quyền, các loại thu nhập đặc biệt, các khoản phân phối REIT và thu nhập đoạn 4(f) là một khoản thuế cuối cùng, nên người không cư trú không có thêm nghĩa vụ nộp ở Malaysia trên thu nhập đó. Mục 107A không phải là cuối cùng — nó là một khoản thanh toán trước đối với đánh giá cuối cùng của nhà thầu."
  - q: "Tôi có vẫn khấu trừ nếu hợp đồng nói phí là ròng sau thuế không?"
    a: "Có. Nghĩa vụ nằm trên bên trả bất kể hợp đồng nói gì. Khi bên trả theo hợp đồng chịu thuế, LHDN xác nhận trong Public Ruling 10/2019 rằng từ ngày 5 tháng 12 năm 2018 thuế s.109B được tính trên số tiền gộp được trả, không quy đổi ngược (regrossing) — nhưng khoản thuế mà bên trả chịu không được khấu trừ trong sổ sách của chính nó."

verificationNeeded:
  - "Mẫu CP107D và phụ lục CP107D(1) của nó cho khoản khấu trừ 2 phần trăm theo s.107D không thể truy xuất từ bất kỳ đường dẫn hasil.gov.my còn hoạt động nào — mức, ngưỡng và quy tắc nộp bên dưới đến từ chính Act, chứ không phải từ mẫu"
  - "Các mức hiệp định cho các quốc gia cụ thể không được tái hiện ở đây — hãy kiểm tra mỗi thỏa thuận trên trang DTA của LHDN, vì các mức giảm thay đổi theo điều khoản và theo quốc gia"

obligations:
  - what: "Nộp thuế khấu trừ được khấu trừ từ một khoản thanh toán cho một người không cư trú"
    trigger: "event"
    direction: "after"
    event: "payment"
    withinDays: 30
    due: "trong vòng một tháng sau khi trả hoặc ghi có cho bên nhận không cư trú"
    authority: "LHDN"
    statute: "Income Tax Act 1967, ss.107A(1), 109(1), 109B(1), 109F(1)"
    consequence: "Số tiền chưa trả bị tăng thêm 10 phần trăm và chi phí bị không cho phép theo s.39(1)(f), (i) hoặc (j)"

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
  - title: "Withholding Tax"
    url: "https://www.hasil.gov.my/en/perundangan/cukai-pegangan/"
    publisher: "LHDN"
  - title: "Income Tax Act 1967 (Act 53), reprint as at 21 May 2024 — Schedule 1 and ss.107A, 107D, 109, 109A, 109B, 109F"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "LHDN"
    date: "2024-05-21"
  - title: "Public Ruling No. 10/2019 — Withholding Tax on Special Classes of Income"
    url: "https://www.hasil.gov.my/wp-content/uploads/PR_10_2019.pdf"
    publisher: "LHDN"
    date: "2019-12-10"
  - title: "Double Taxation Avoidance Agreement (DTA/DTAA)"
    url: "https://www.hasil.gov.my/en/antarabangsa/perjanjian-pengelakan-pencukaian-dua-kali-pppdk/"
    publisher: "LHDN"

entity: "Malaysian withholding tax rates"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "withholding-tax-special-classes" }
related: ["withholding-tax-special-classes", "withholding-tax-digital-services", "withholding-tax-non-compliance", "cp37-forms"]
keywords: ["withholding tax rate Malaysia", "section 109B rate", "section 107A withholding tax", "CP37D", "withholding tax table Malaysia", "LHDN withholding tax"]
---

Mức bạn cần gần như không bao giờ nằm trong mục bạn đang đọc. Mục 109B bảo bạn khấu
trừ « ở mức áp dụng cho các khoản thanh toán như vậy » và dừng ở đó — 10 phần trăm
nằm trong Part V của Schedule 1. Mục 109 làm điều tương tự. Hãy tập thói quen trích
dẫn cả hai, vì một tranh luận về mức là một tranh luận về Schedule 1.

## Bảng đầy đủ

| Loại thanh toán | Mục ITA | Mức | Mẫu | Nộp trước |
| --- | --- | --- | --- | --- |
| Khoản thanh toán hợp đồng cho một nhà thầu không cư trú | s.107A, Sch 1 | 10% (nhà thầu) + 3% (các nhân viên của nó) | CP37A | 1 tháng sau khi trả hoặc ghi có |
| Khoản thanh toán cho một đại lý, người kinh doanh hoặc nhà phân phối cư trú | s.107D, Sch 1 | 2% | CP107D | Cuối **tháng dương lịch kế tiếp** |
| Lãi cho một người không cư trú | s.109, Sch 1 Pt II item 1 | 15% | CP37 | 1 tháng sau khi trả hoặc ghi có |
| Tiền bản quyền cho một người không cư trú | s.109, Sch 1 Pt II item 2 | 10% | CP37 | 1 tháng sau khi trả hoặc ghi có |
| Lãi hoặc tiền bản quyền, giá trị nhỏ | s.109, Sch 1 Pt II | 15% / 10% | CP37S | Nửa năm một lần, 30 tháng 6 hoặc 31 tháng 12 |
| Nghệ sĩ biểu diễn công cộng không cư trú | s.109A, Sch 1 Pt II item 3 | 15% | CP154 kèm phép tính thuế của LHDN | 1 tháng sau khi trả hoặc ghi có |
| Các loại thu nhập đặc biệt theo s.4A | s.109B, Sch 1 Pt V | 10% | CP37D | 1 tháng sau khi trả hoặc ghi có |
| Các loại thu nhập đặc biệt, giá trị nhỏ | s.109B, Sch 1 Pt V | 10% | CP37DS | Nửa năm một lần, 30 tháng 6 hoặc 31 tháng 12 |
| Lãi cho một cá nhân cư trú, trả bởi một ngân hàng hoặc tổ chức được phê duyệt | s.109C, Sch 1 Pt VI | 5% | — | 1 tháng sau khi trả hoặc ghi có |
| Khoản phân phối REIT hoặc quỹ tín thác bất động sản — công ty không cư trú | s.109D, Sch 1 Pt X | 24% | CP37E | 1 tháng sau khi trả hoặc ghi có |
| Khoản phân phối REIT hoặc quỹ tín thác bất động sản — nhà đầu tư tổ chức nước ngoài | s.109D, Sch 1 Pt X | 10% | CP37E | 1 tháng sau khi trả hoặc ghi có |
| Khoản phân phối REIT hoặc quỹ tín thác bất động sản — những người khác, không phải một công ty cư trú | s.109D, Sch 1 Pt X | 10% | CP37E | 1 tháng sau khi trả hoặc ghi có |
| Khoản phân phối quỹ thị trường tiền tệ bán lẻ cho một chủ đơn vị không phải cá nhân | s.109DA, Sch 1 Pt XIX | 24% | CP37E(NR) / CP37E(R) | 1 tháng sau khi trả hoặc ghi có |
| Khoản phân phối quỹ gia đình hoặc takaful gia đình — công ty không cư trú | s.109E, Sch 1 Pt XI | 25% | CP37E(T) | 1 tháng sau khi trả hoặc ghi có |
| Khoản phân phối quỹ gia đình hoặc takaful gia đình — những người khác, không phải một công ty cư trú | s.109E, Sch 1 Pt XI | 8% | CP37E(T) | 1 tháng sau khi trả hoặc ghi có |
| Thu nhập đoạn 4(f) cho một người không cư trú | s.109F, Sch 1 Pt XIII | 10% | CP37F | 1 tháng sau khi trả hoặc ghi có |
| Rút niên kim hoãn lại hoặc PRS trước tuổi 55 | s.109G, Sch 1 Pt XVI | 8% | CP37G | 1 tháng sau khi trả hoặc ghi có |

## Ba điều mà bảng này giấu

**« Trả hoặc ghi có » không phải là « trả ».** Public Ruling 10/2019 đoạn 13.1 định
nghĩa việc ghi có là hơn một bút toán sổ hoặc một khoản trích trước — số tiền phải
có sẵn cho hoặc vì lợi ích của bên nhận. Nhưng một bút toán bù trừ (contra) khấu trừ
những gì người không cư trú nợ bạn thì tính, và đồng hồ bắt đầu vào ngày bù trừ. Một
công ty không bao giờ nộp tiền mặt vẫn có thể muộn một tháng.

**Mục 107D có một đồng hồ khác.** Mục 107D(1) yêu cầu thanh toán « không muộn hơn
cuối tháng dương lịch kế tiếp », chứ không phải một tháng sau. Nó cũng chỉ áp dụng
khi đại lý, người kinh doanh hoặc nhà phân phối nhận được hơn RM100,000 từ bên trả
trong năm cơ sở ngay liền trước (s.107D(2)), và chỉ khi người đó là một cá nhân cư
trú (s.107D(6)).

**Các mức hiệp định là có điều kiện, chứ không phải tự động.** LHDN yêu cầu xác nhận
bằng văn bản từ cơ quan thuế của bên nhận xác minh cư trú, được giữ lại để rà soát
tuân thủ. Public Ruling 10/2019 Ví dụ 16 áp dụng một mức 5 phần trăm cho một nhà
cung cấp dịch vụ Hồng Kông chỉ một khi cư trú được xác nhận. Không có chứng nhận,
bạn khấu trừ ở mức trong nước.

## Những sai lầm phổ biến

- **Trích dẫn một mức mà không có Schedule.** « Mục 109B là 10 phần trăm » là cách
  nói tắt. 10 phần trăm là Part V của Schedule 1, và Part V là cái mà một hiệp định
  thay thế.
- **Giả định các mẫu giá trị nhỏ là tiện lợi tùy chọn.** CP37S và CP37DS có hai điều
  kiện tích lũy: thuế không được vượt quá RM500 mỗi giao dịch thanh toán, **và** các
  giao dịch giá trị nhỏ phải xảy ra hơn một lần trong cửa sổ sáu tháng liên quan.
  Một khoản thanh toán RM400 đơn lẻ trong một nửa năm không đủ điều kiện hoãn.
- **Coi s.107A là một khoản thuế cuối cùng.** Nó không phải vậy. Đoạn (a) được áp
  vào đánh giá của chính nhà thầu; đoạn (b), 3 phần trăm, được hoàn lại cho nhà thầu
  theo s.107A(3)(b) theo cách Tổng cục trưởng thấy phù hợp.
- **Khấu trừ trên số gộp khi khoản thanh toán một phần nằm ngoài phạm vi.** Đối với
  thu nhập s.4A(i) và (ii), chỉ phần quy cho các dịch vụ được thực hiện tại Malaysia
  chịu thuế, được phân bổ trên một cơ sở công bằng và có thể biện minh.

## Tiếp theo

Mức là phần dễ. Hai câu hỏi quyết định hầu hết các vụ thực tế: liệu khoản thanh
toán có « có nguồn từ Malaysia » chút nào hay không, và liệu nó là tiền bản quyền
theo s.109 hay một loại thu nhập đặc biệt theo s.109B. Hãy đọc
[các loại thu nhập đặc biệt của thuế khấu trừ](/vi/taxation/withholding-tax-special-classes)
cho cái thứ nhất và
[thuế khấu trừ đối với dịch vụ số](/vi/taxation/withholding-tax-digital-services)
cho cái thứ hai.
