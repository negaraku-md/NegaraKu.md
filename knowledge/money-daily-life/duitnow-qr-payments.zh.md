---
topicId: MY-LIV-0010
title: "DuitNow 与 DuitNow QR：用电话号码付款，而非银行账号"
seoTitle: "DuitNow 与 DuitNow QR：马来西亚即时支付系统运作方式"
slug: "duitnow-qr-payments"
category: "money-daily-life"
subcategory: ["banking-payments"]
summary: "DuitNow 是马来西亚的即时转账系统，以电话号码或 NRIC（身份证号码）取代银行账号；DuitNow QR 则是同一套全国通用的二维码，可跨任何银行或电子钱包扫描使用。两者都由 PayNet 营运，并受国家银行（BNM）的框架规管——该框架现已强制所有专属二维码须在 2028 年前全面停用。"

tier: "3"
mode: "practical"
contentType: "guide"

answer: "DuitNow 让任何人只需输入收款人的电话号码、NRIC、护照号码或商业注册号码，即可即时转账——不必输入冗长的银行账号。DuitNow QR 则是同一套单一的全国二维码，任何银行或电子钱包的顾客都能扫描并向商家付款，无论商家使用哪个平台。两者都由 PayNet（Payments Network Malaysia）营运，并受国家银行（BNM）监督。"
keyTakeaways:
  - "DuitNow 将电话号码、NRIC、护照号码或商业注册号码（BRN）与银行账户或电子钱包配对——若要「接收」款项，须先注册一次；但「发送」款项则无须注册"
  - "DuitNow 转账在每笔交易 RM5,000 以内免费；超过此金额，部分银行会收取 50 仙手续费（许多银行会豁免）"
  - "DuitNow QR 是单一的全国二维码，任何参与银行或电子钱包的顾客都能扫描——商家无须为每个平台各自展示一个二维码"
  - "DuitNow QR 的限额为每笔交易 RM50,000（与 DuitNow 第三方转账限额共用），RM250 以下的交易无须额外验证"
  - "PayNet 由国家银行连同本地主要银行共同持有多数股权，负责营运这两套系统，作为国家支付基础设施"
  - "国家银行于 2026 年 6 月 30 日发布的《可互操作资金转账框架》（Interoperable Fund Transfer Framework，IFTF）强制所有专属／封闭式二维码网络须在 2028 年 6 月 30 日前全面停用"
appliesTo: "任何在马来西亚汇款或收款的人——居民、小商家，以及任何好奇为何摊位上的同一个二维码能接受不同银行应用程式付款的人。"

verificationNeeded:
  - "撰写本文时，bnm.gov.my 官方网站阻挡自动化访问（403 错误）；IFTF 的细节（2026 年 6 月 30 日发布日期、2028 年 6 月 30 日合规截止日期）是透过多篇独立财经新闻报道所引用的国家银行政策文件确认的——待 bnm.gov.my 可访问时请直接查证"
  - "手续费与交易限额数字是撰写本文当下直接取自 PayNet 官方网站；PayNet 表示实际费用可能因个别银行／电子钱包而异"

lang: "zh"
masterLanguage: "ms"
translationStatus: "in-sync"
sourceContentHash: "1b31c1f5d1b3682f"

status: "reviewed"
aiAssisted: true
reviewer: "Ashton Tan"
reviewed: "2026-07-25"
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-07-24
    change: "Draf awal. Mekanisme DuitNow dan DuitNow QR disahkan terus di laman rasmi PayNet (paynet.my); latar belakang rangka kerja BNM (ICTF 2019 dan IFTF 2026) disahkan menerusi dokumen dasar BNM yang dirujuk laporan kewartawanan kewangan bebas kerana bnm.gov.my menyekat capaian automatik."
    reviewer: null
sensitivity: "none"

updated: 2026-07-24
sources:
  - title: "DuitNow QR - Personal Solutions"
    url: "https://www.paynet.my/personal-solutions/duitnow-qr.html"
    publisher: "PayNet (Payments Network Malaysia)"
  - title: "DuitNow Transfer - Personal Solutions"
    url: "https://www.paynet.my/personal-solutions/duitnow-transfer.html"
    publisher: "PayNet (Payments Network Malaysia)"
  - title: "Malaysia's DuitNow and Singapore's PayNow to Link in 2022"
    url: "https://www.bnm.gov.my/-/malaysia-duitnow-and-singapore-paynow-link-in-2022"
    publisher: "Bank Negara Malaysia"
  - title: "Interoperable Credit Transfer Framework (Policy Document)"
    url: "https://www.bnm.gov.my/documents/20124/761679/PD+ICTF.pdf"
    publisher: "Bank Negara Malaysia"
    date: "2019-12-27"
  - title: "Interoperable Fund Transfer Framework (Policy Document)"
    url: "https://www.bnm.gov.my/documents/20124/943361/pd_IFTF_June2026.pdf"
    publisher: "Bank Negara Malaysia"
    date: "2026-06-30"
  - title: "BNM's Interoperable Fund Transfer Framework: What It Means for DuitNow QR"
    url: "https://fintechnews.my/59367/regtech-fintech-regulation-malaysia/bnm-interoperable-fund-transfer-framework-iftf/"
    publisher: "Fintech News Malaysia"
    date: "2026-07-02"

entity: "DuitNow"
relations:
  - { rel: "administered-by", to: "bank-negara-malaysia" }
  - { rel: "related-to", to: "payment-regulation-malaysia" }
related: ["bank-negara-malaysia", "payment-regulation-malaysia"]
keywords: ["DuitNow", "DuitNow QR", "PayNet", "pembayaran segera Malaysia", "kod QR Malaysia", "pindahan wang guna nombor telefon", "Bank Negara Malaysia pembayaran digital"]
---

一位夜市摊贩只展示一个二维码。使用 Maybank 应用程式的顾客扫描了它。下一位顾客使用
Touch 'n Go eWallet，扫描的是**同一个**二维码。两笔款项都在几秒内进账到摊贩的账户。
不需要为每家银行或电子钱包各自准备一个二维码——这就是 DuitNow QR 在幕后默默运作的方式。

## DuitNow：用电话号码转账，而非账号

DuitNow 是马来西亚跨银行与电子钱包的即时转账服务。与一般银行转账不同之处在于：
你不需要输入冗长的银行账号。DuitNow 会将一个**代理身份识别码（proxy ID）**对应到目的地账户。

| 代理身份识别码 | 适用对象 |
| --- | --- |
| 手机号码 | 个人 |
| NRIC（身份证号码） | 个人 |
| 护照号码 | 非公民 |
| BRN（SSM 商业注册号码） | 已注册企业 |

要「发送」款项，你无须注册任何东西——只须登入银行应用程式，选择 DuitNow，输入收款人的
代理身份识别码即可。至于「接收」款项，收款人则须先完成一次性注册，将该代理身份识别码
与银行账户或电子钱包绑定。同一时间，一个代理身份识别码只能绑定一个账户，但一个人可以
将多个不同的代理身份识别码（例如电话号码与 NRIC）注册到同一个账户。

根据 PayNet 官方网站，DuitNow 转账在**每笔交易 RM5,000 以内免费**。超过这个金额，部分
银行会收取 **50 仙**手续费，不过许多银行会豁免这笔费用作为鼓励。这项服务获全国大多数
主要银行与多家参与的电子钱包支持。

## DuitNow QR：一个二维码，通行所有银行

如果说 DuitNow 是转账的轨道，那 DuitNow QR 就是它在柜台上呈现的方式。它是同一套
**全国标准二维码**——当商家展示一个 DuitNow QR 二维码时，任何参与银行或电子钱包的
顾客都能直接扫描付款，商家无须为了接入几十套各自独立的专属二维码系统而逐一申请。

根据 PayNet，其限额与条件如下：

- **交易限额：**每笔交易上限为 **RM50,000**，与 DuitNow 相同的第三方转账限额共用。
- **RM250 以下的交易：**在顾客层面无须额外验证。
- **向用户收取的费用：**PayNet 表示，透过 DuitNow QR 付款、发送或接收款项，不会向
  用户收取额外费用——尽管向商家收取的费用（透过收单银行）可能有所不同。

## DuitNow 背后到底是谁

DuitNow 与 DuitNow QR 由 **PayNet（Payments Network Malaysia）**营运——这是一家
国家支付基础设施公司，由国家银行连同本地主要银行共同持有多数股权。国家银行本身
并不经营日常交易；其角色是制定政策框架，规定银行与电子钱包必须加入同一套基础设施。

最初的框架——**《可互操作信贷转账框架》（Interoperable Credit Transfer Framework，
ICTF）**，于 2019 年 12 月发布——正是这套框架从一开始就要求 DuitNow 存在。
**2026 年 6 月 30 日**，国家银行发布了其继任框架：**《可互操作资金转账框架》
（Interoperable Fund Transfer Framework，IFTF）**，其涵盖范围超越账户对账户转账，
明确纳入二维码支付。根据 IFTF，任何仍由银行或电子钱包营运的专属或封闭式二维码网络，
都必须在 **2028 年 6 月 30 日前全面停用**，且各机构在此过渡期间禁止将新商家注册到
封闭式方案中。

## 常见错误

- **以为 DuitNow QR 是特定银行的功能。**它其实是共用基础设施——同一个二维码无论由
  哪个应用程式扫描都能运作。
- **忘了注册以「接收」款项。**发送款项无须注册，但你的代理身份识别码必须先完成绑定，
  别人才能透过它付款给你。
- **以为所有 DuitNow 转账都免费、没有限额。**免费仅限于每笔交易 RM5,000 以内；
  超过此金额，视银行而定，可能会收取小额手续费。
- **把 PayNet 和国家银行混为一谈。**国家银行制定框架并进行监督；实际建置并每天
  运行这条支付轨道的，是 PayNet。

## 下一步

- 想了解这套系统背后监管机构的完整职权，请参阅
  [国家银行](/zh/economy/bank-negara-malaysia)。
- 若你正在开发一项会接收或保管顾客款项的产品，请查阅究竟何时需要国家银行的批准，
  参见[马来西亚支付法规](/zh/business/payment-regulation-malaysia)。
