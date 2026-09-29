---
topicId: MY-ACC-0003
title: "Các lỗi gắn thẻ SSMxT: Vì sao các hồ sơ MBRS không vượt qua xác thực"
seoTitle: "Các lỗi gắn thẻ MBRS: Các thất bại xác thực SSMxT"
slug: "mbrs-tagging-errors"
category: "accounting"
subcategory: ["financial-statements"]
summary: "Các sai lầm gắn thẻ ngăn một hồ sơ MBRS được tạo hoặc khiến nó bị truy vấn lại — chọn sai yếu tố, lỗi tỷ lệ và dấu, gắn thẻ khối so với chi tiết, và các thuyết minh không có chỗ trong hệ thống phân loại."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Hầu hết các thất bại xác thực MBRS rơi vào năm họ: một yếu tố bắt buộc bị thiếu, một yếu tố bắt buộc suy ra được kích hoạt bởi một lựa chọn thông tin nộp hồ sơ, một tổng hợp chiều không cộng thành cha, một vi phạm quy tắc dấu, hoặc một sự không nhất quán liên báo cáo. Các lỗi mà xác thực không thể bắt được thì tệ hơn — chọn sai yếu tố và sai tỷ lệ đều tạo ra các tệp hợp lệ về mặt kỹ thuật mang các con số sai."
keyTakeaways:
  - "Lỗi tỷ lệ là lỗi nguy hiểm: một con số được gõ bằng đơn vị nghìn vượt qua mọi quy tắc xác thực và ghi sai các tài khoản một hệ số một nghìn"
  - "Không có yếu tố SSMxT nào phải luôn âm — chi phí thường được lưu dưới dạng số dương"
  - "Xác thực chạy trên các khẳng định trong đó true nghĩa là đã vượt qua, nên thông báo nêu tên quy tắc, không phải cách sửa"
  - "Các mở rộng của công ty bị cấm, nên một thuyết minh không ánh xạ được đi vào một khối văn bản, không bao giờ vào một khái niệm được phát minh"
  - "Thông tin nộp hồ sơ ở đầu mẫu thúc đẩy các quy tắc bắt buộc suy ra xa hơn xuống dưới — một tình trạng công ty sai lan xuống"
  - "Cơ sở trình bày là một lựa chọn bạn thực hiện một lần: thứ tự thanh khoản so với ngắn hạn/dài hạn, chức năng so với bản chất của chi phí"
appliesTo: "Người lập tạo các tài liệu phiên bản XBRL của SSM trong mTool, và người rà soát ký duyệt một hồ sơ trước khi một người nộp nộp nó."

faq:
  - q: "Vì sao mTool nói một yếu tố là bắt buộc khi các tài khoản của tôi không có dòng đó?"
    a: "SSMxT mô hình hóa các yếu tố bắt buộc như các khẳng định về sự tồn tại, với một khẳng định riêng cho mỗi khái niệm để thông báo lỗi có thể nêu tên nó. Một số là bắt buộc vô điều kiện — ví dụ của chính SSM là Assets phải được báo cáo. Số khác là bắt buộc suy ra, chỉ cần vì một điều gì đó bạn đã chọn ở nơi khác. Nếu dòng thực sự không tồn tại trong các tài khoản của bạn, hãy kiểm tra xem một lựa chọn thông tin nộp hồ sơ có kích hoạt yêu cầu hay không trước khi bạn cho rằng công cụ sai."
  - q: "Chi phí có nên được gắn thẻ là số âm không?"
    a: "Thường là không. Tài liệu kiến trúc SSMxT nêu rằng không có yếu tố nào nên luôn được lưu dưới dạng một giá trị âm, vì các yếu tố có trọng số âm như chi phí được lưu dưới dạng số dương trong hầu hết các trường hợp. Điều mà formula linkbase bắt buộc là một danh sách các yếu tố phải luôn dương. Do đó các lỗi dấu trong các hồ sơ SSMxT thường là việc lạm dụng dấu trừ hơn là việc thiếu dấu."
  - q: "Làm sao tôi gắn thẻ một thuyết minh mà hệ thống phân loại không có khái niệm cho?"
    a: "Vào một khối văn bản. Các mở rộng của công ty đối với SSMxT_2022v1.0 không được phép, nên bạn không thể tạo một yếu tố. Cách tiếp cận được nêu của SSM là người lập cung cấp mức độ chi tiết cần thiết bằng cách gắn thẻ khối văn bản thông tin bằng các khái niệm khối văn bản phù hợp. Thông tin vẫn được nộp, nó chỉ không máy đọc được một cách riêng lẻ."
  - q: "Sự khác biệt giữa gắn thẻ khối và gắn thẻ chi tiết là gì?"
    a: "Gắn thẻ chi tiết gán cho mỗi con số khái niệm riêng của nó, nên con số máy đọc được một cách riêng lẻ và chịu các quy tắc xác thực. Gắn thẻ khối nắm bắt cả một thuyết minh như một khối văn bản đối chiếu với một khái niệm. Gắn thẻ chi tiết là bắt buộc bất cứ nơi nào hệ thống phân loại mô hình hóa khái niệm; gắn thẻ khối là phương án dự phòng cho chi tiết mà hệ thống phân loại không mang. Gắn khối một thứ mà hệ thống phân loại mô hình hóa là một thất bại về chất lượng ngay cả khi nó không thất bại xác thực."
  - q: "Một lỗi xác thực có nghĩa là SSM đã từ chối hồ sơ của tôi không?"
    a: "Không. Xác thực mTool xảy ra ngoại tuyến trước khi bất cứ điều gì được nộp, và tệp đơn giản là sẽ không được tạo. Một sự từ chối hoặc truy vấn là một sự kiện riêng xảy ra trong mPortal sau khi tải lên. Không cái nào làm dừng thời hạn phân phát s.258 hoặc thời hạn nộp hồ sơ s.259."

verificationNeeded:
  - "SSM không công bố một danh sách hợp nhất các mã lý do từ chối MBRS — các họ lỗi ở đây được suy ra từ các nhóm formula linkbase của tài liệu kiến trúc SSMxT_2022, không phải từ một sổ đăng ký từ chối được công bố"
  - "Hãy xác nhận hành vi xác thực của điểm nhập cụ thể đối chiếu với hướng dẫn người dùng mTool 2.2 cho điểm nhập đó trước khi dựa vào bất kỳ quy tắc nào được mô tả một cách chung chung"

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
  - title: "Tài liệu kiến trúc Phân loại SSM 2022 của MBRS 2.0 (SSMxT_2022) (MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "Ủy ban Công ty Malaysia (SSM)"
  - title: "Hệ thống Báo cáo Doanh nghiệp Malaysia (MBRS) — Câu hỏi thường gặp, phiên bản 2.4 (Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, version 2.4)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "Ủy ban Công ty Malaysia (SSM)"
    date: "2024-10-01"
  - title: "Nâng cấp MBRS lên MBRS 2.0 — Tổng quan (MBRS Enhancement MBRS 2.0 — Overview)"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "Ủy ban Công ty Malaysia (SSM)"
  - title: "Companies Act 2016 (Act 777), văn bản cập nhật tính đến ngày 1 tháng 8 năm 2022 (Companies Act 2016 (Act 777), updated text as at 1 August 2022)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "Ủy ban Công ty Malaysia (SSM)"
  - title: "MBRS — Hệ thống Báo cáo Doanh nghiệp Malaysia (MBRS — Malaysian Business Reporting System)"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "Ủy ban Công ty Malaysia (SSM)"

entity: "SSMxT tagging errors"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "part-of", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "mbrs-2" }
  - { rel: "related-to", to: "financial-statement-pack" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["mbrs-2-filing-guide", "mbrs-2", "financial-statement-pack", "sdn-bhd-bookkeeping", "mfrs-vs-mpers"]
keywords: ["MBRS tagging error", "SSMxT validation", "XBRL validation failure Malaysia", "mTool error", "MBRS rejected", "block tagging text block SSM", "MBRS decimals scale"]
---

Thất bại tốn tiền không phải là thất bại ngăn tệp được tạo. Đó là thất bại được tạo
sạch sẽ, được nộp sạch sẽ, và mang một con số sai một hệ số một nghìn.

Xác thực SSMxT giỏi về số học và mù về ý nghĩa. Nó sẽ từ chối một báo cáo thay đổi
vốn chủ sở hữu không khớp. Nó sẽ vui vẻ chấp nhận tổng tài sản RM53,928 cho một công
ty có RM53.9 triệu trên bảng cân đối của nó, vì 53,928 là một con số hoàn toàn hợp
lệ.

Sự bất đối xứng đó là cách bạn nên đọc mọi họ lỗi dưới đây: những họ mà công cụ bắt
được thì bất tiện, và những họ nó không bắt được thì là những họ cần rà soát.

## Hai lỗi mà xác thực không thể thấy

### Tỷ lệ

SSMxT xử lý làm tròn thông qua thuộc tính XBRL `decimals`, không phải bằng cách làm
tròn giá trị. Ví dụ có lời giải của chính SSM: một công ty có các tài khoản được nêu
bằng đơn vị nghìn và tài sản đọc là 53,928 gắn thẻ dữ kiện là **53928000 với
`decimals` đặt là -3**.

Một người lập sao chép con số in ra thẳng từ mặt các tài khoản gắn thẻ 53928. Không
quy tắc nào kích hoạt. Phiên bản là XBRL hợp lệ. Các tài khoản được nộp cho thấy một
công ty bằng một phần nghìn kích thước thực của nó — máy đọc được, vĩnh viễn, và hiển
thị cho bất kỳ ai lấy dữ liệu.

Mọi hồ sơ được chuẩn bị từ một bộ tài khoản được trình bày bằng đơn vị nghìn hoặc
triệu cần một sự kiểm tra tỷ lệ như một bước rà soát riêng biệt, tách khỏi xác thực.

### Chọn yếu tố

Hệ thống phân loại mang hàng nghìn khái niệm, một số trong đó sẽ có vẻ phù hợp với bất
kỳ số dư nào. Không có gì trong mTool nói cho bạn biết rằng bạn đã chọn cái có vẻ phù
hợp chứ không phải cái đúng.

Hai hệ quả theo sau. Thứ nhất, các tài khoản được gắn thẻ ngừng khớp với những gì một
người đọc PDF sẽ hiểu. Thứ hai — và đây là hệ quả cắn vào năm thứ hai — quyết định
ánh xạ là một **tiền lệ**. Gắn thẻ cùng số dư khác đi năm sau và các số liệu so sánh
của bạn phân kỳ trong dữ liệu ngay cả khi các tài khoản in ra nhất quán.

Ghi lại việc ánh xạ. Không phải tệp, mà là việc ánh xạ: tài khoản, khái niệm, và lý
do khi sự lựa chọn là một xét đoán.

## Năm họ thất bại xác thực

SSM xây dựng các quy tắc vào formula linkbase của hệ thống phân loại, dùng các khẳng
định về sự tồn tại và các khẳng định về giá trị, được mô hình hóa sao cho **true
nghĩa là quy tắc đã vượt qua**.

**Các yếu tố bắt buộc.** Các khái niệm phải có mặt, một khẳng định mỗi khái niệm để
thông báo lỗi nêu tên yếu tố bị thiếu. Ví dụ được ghi của SSM: «Assets» nên được báo
cáo.

**Các yếu tố bắt buộc suy ra.** Chỉ cần dưới một số điều kiện nhất định, được mô hình
hóa với một điều kiện tiên quyết cộng một khẳng định về giá trị. Ví dụ của SSM chính
xác và đáng ghi nhớ: *khi người nộp chọn tình trạng công ty là «Public company», thì
việc thuyết minh tình trạng kiểm toán báo cáo tài chính nên là «Audited».*

Đây là họ tạo ra nhiều yêu cầu hỗ trợ bối rối nhất, vì lỗi nổi lên trong báo cáo tài
chính trong khi nguyên nhân của nó là một danh sách thả xuống trong khối thông tin
nộp hồ sơ. Trước khi tranh cãi với một lỗi bắt buộc suy ra, hãy đọc lại phần đầu.

**Tổng hợp chiều.** Các thành viên của một trục phải cộng thành cha của chúng khi
người lập cấu trúc chúng trong một hệ thống phân cấp giống tổng. Ví dụ của SSM: tổng
vốn chủ sở hữu bằng lợi ích của cổ đông không kiểm soát cộng các thành phần vốn chủ sở
hữu khác cộng vốn chủ sở hữu thuộc về chủ sở hữu của công ty mẹ.

**Giá trị dương và âm.** Ở đây trực giác mà hầu hết người lập mang đến là sai. Tài
liệu kiến trúc rõ ràng rằng *không có yếu tố nào nên luôn được lưu dưới dạng một giá
trị âm*, vì các khoản mục có trọng số âm như giá vốn hàng bán được lưu dưới dạng số
dương trong hầu hết các trường hợp. Điều mà formula linkbase thực sự mang là một danh
sách các yếu tố phải **luôn dương** — ví dụ của SSM là tổng số tiền nợ tính bằng MYR
nên là một giá trị dương.

Vậy lỗi dấu phổ biến trong một hồ sơ SSMxT không phải là một dấu trừ bị thiếu. Đó là
một người lập nhiệt tình thêm một dấu vào.

**Dữ liệu liên báo cáo và tương quan.** Cùng một dữ kiện xuất hiện trong nhiều hơn
một báo cáo phải khớp, và các dữ kiện liên quan logic được kiểm tra đối chiếu với
nhau. Một con số lợi nhuận trong báo cáo lãi lỗ không khớp với chuyển động từ đầu-đến-cuối
trong báo cáo thay đổi vốn chủ sở hữu từng vô hình trong một PDF. Nay nó chặn tệp.

Bên dưới cả năm họ nằm các kiểm tra về cấu trúc — xác thực XBRL, chiều, công thức,
bảng, liệt kê mở rộng và iXBRL — xác nhận phiên bản được cấu tạo đúng đối chiếu với
chính SSMxT_2022v1.0.

## Gắn thẻ khối so với gắn thẻ chi tiết

Gắn thẻ chi tiết cho một con số khái niệm riêng của nó: máy đọc được riêng lẻ, được
xác thực riêng lẻ, có thể so sánh riêng lẻ qua các năm. Gắn thẻ khối nắm bắt cả một
thuyết minh như văn bản đối chiếu với một khái niệm khối văn bản duy nhất.

Quy tắc quyết định bạn dùng cái nào không phải là một sở thích. **Các mở rộng của
công ty đối với SSMxT_2022v1.0 không được phép.** Khi hệ thống phân loại mang một khái
niệm, bạn gắn thẻ vào nó. Khi các chuẩn mực kế toán đòi hỏi chi tiết mà hệ thống phân
loại không mô hình hóa — phân tách bộ phận là ví dụ của chính SSM về chi tiết đặc thù
của thực thể — chỉ dẫn là cung cấp nó bằng gắn thẻ khối văn bản vào một khái niệm khối
văn bản phù hợp.

Kiểu thất bại là gắn khối quá mức: một người lập dưới áp lực hạn chót gắn khối cả một
thuyết minh mà hệ thống phân loại mô hình hóa khái niệm theo khái niệm. Nó được tạo,
nó được nộp, và nó rỗng hóa hồ sơ. Không gì trong đường ống dữ liệu mà SSM xây dựng
sử dụng được một thuyết minh được lưu dưới dạng một đoạn văn.

Khi một phiên bản được chuẩn bị ở iXBRL, nội dung con-người-đọc-được chưa gắn thẻ có
thể nằm trong tài liệu bên cạnh các dữ kiện đã gắn thẻ. Điều đó giảm áp lực buộc mọi
thứ vào một thẻ, nhưng nó không cấp phép gắn khối những gì nên được chi tiết hóa.

## Các thuyết minh không ánh xạ

Ba tình huống lặp lại.

**Một thuyết minh mà hệ thống phân loại không có khái niệm cho.** Khối văn bản. Đây là
câu trả lời được thiết kế, không phải một cách lách.

**Một thuyết minh mà hệ thống phân loại mô hình hóa dưới một cái tên khác.** Phổ biến
hơn người lập mong đợi, vì SSMxT kế thừa các nhãn IFRS Taxonomy 2022 trong khi các
tài khoản Malaysia thường mang thuật ngữ nội bộ. Dùng trình duyệt SSMxT tích hợp
trong mTool để tìm khái niệm, không phải nhãn bạn quen dùng.

**Một thuyết minh thuộc về một cơ sở trình bày mà bạn không chọn.** Hệ thống phân loại
mang các phương án — ngắn hạn/dài hạn so với thứ tự thanh khoản cho báo cáo tình hình
tài chính, chức năng so với bản chất của chi phí cho lãi lỗ, trực tiếp so với gián
tiếp cho lưu chuyển tiền tệ. Các khái niệm thuộc về cơ sở bạn không chọn thì không có
sẵn. Người lập đọc điều này là một yếu tố bị thiếu. Nó là một lựa chọn trình bày được
thực hiện hai bước trước đó.

## Đồng tiền, và quy tắc luật định đằng sau nó

Các dữ kiện tiền tệ phải mang `iso4217:MYR`. Người lập của các công ty con thuộc sở
hữu nước ngoài báo cáo cho một tập đoàn bằng một đồng tiền khác đôi khi cho rằng đồng
tiền trình bày đi theo các tài khoản. Nó không.

Đây không chỉ là một ràng buộc hệ thống phân loại. Section 259(1)(c) của Companies Act
2016 yêu cầu tất cả các số tiền hiển thị trong báo cáo tài chính và các báo cáo được
nộp cho Cơ quan Đăng ký phải được ghi bằng đồng tiền Malaysia, và các tài liệu bằng
bất kỳ ngôn ngữ nào khác ngoài Tiếng Malay hoặc Tiếng Anh phải kèm theo một bản dịch
có chứng thực.

## Những sai lầm thường gặp

- **Gõ con số in ra từ các tài khoản được nêu bằng đơn vị nghìn** thay vì số tiền đầy
  đủ với `decimals` đặt là -3. Vượt qua xác thực, ghi sai các tài khoản.
- **Thêm dấu trừ vào chi phí.** SSMxT lưu các khoản mục có trọng số âm dưới dạng dương
  trong hầu hết các trường hợp.
- **Tranh cãi với một lỗi bắt buộc suy ra** mà không kiểm tra phần đầu thông tin nộp
  hồ sơ đã kích hoạt nó.
- **Gắn khối một thuyết minh mà hệ thống phân loại mô hình hóa chi tiết** vì hạn chót
  gần hơn sự hiểu biết.
- **Tìm trong hệ thống phân loại tên tài khoản của riêng bạn** thay vì nhãn IFRS, rồi
  kết luận khái niệm không tồn tại.
- **Thay đổi cơ sở trình bày năm này qua năm khác**, điều lặng lẽ phá vỡ các số liệu
  so sánh trong dữ liệu.
- **Cho rằng một thất bại xác thực là một sự từ chối.** Xác thực là ngoại tuyến trong
  mTool; từ chối và truy vấn xảy ra trong mPortal sau khi tải lên. Không cái nào dừng
  đồng hồ luật định.
- **Gắn thẻ đồng tiền trình bày của một tập đoàn** thay vì Ringgit Malaysia.
- **Coi việc ánh xạ là có thể vứt đi.** Tài liệu phiên bản có thể vứt đi. Việc ánh xạ
  là tài sản.

## Tiếp theo

Hãy xây dựng một bước rà soát hai cột vào việc khép sổ của bạn: mỗi dữ kiện đã gắn thẻ
đối chiếu với mặt các tài khoản, được kiểm tra về tỷ lệ, và mỗi việc ánh xạ mang tính
xét đoán được ghi lại cùng lý do của nó. Không cái nào là một quy tắc xác thực, đó
chính xác là lý do không cái nào sẽ được bắt giúp bạn.

Nếu bạn vẫn đang chọn một điểm nhập hoặc tìm hiểu các vai trò người lập và người nộp,
hãy bắt đầu với [hướng dẫn chuẩn bị MBRS 2.0](/vi/accounting/mbrs-2-filing-guide).
