---
topicId: MY-TAX-0006
title: "e-Invoice เทียบกับใบกำกับภาษี SST: สองระบบ สองเอกสาร"
seoTitle: "e-Invoice เทียบกับใบกำกับภาษีมาเลเซีย: LHDN เทียบกับ RMCD"
slug: "e-invoice-vs-tax-invoice"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "เหตุใด e-Invoice ที่ LHDN ตรวจสอบแล้วจึงไม่เป็นไปตาม Sales Tax Act 2018 หรือ Service Tax Act 2018 โดยอัตโนมัติ และต้องมีอะไรอยู่บนเอกสารเพื่อให้ทำงานทั้งสองอย่าง"

tier: "3"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "e-Invoice เป็นเอกสารภาษีเงินได้ภายใต้ s.82C ของ Income Tax Act 1967 บริหารโดย LHDN ใบกำกับภาษี SST เป็นเอกสารแยกต่างหากที่กำหนดโดย Sales Tax Act 2018 และ Service Tax Act 2018 บริหารโดย RMCD เอกสารเดียวสามารถทำหน้าที่ทั้งสอง แต่เฉพาะเมื่อมันมีรายละเอียดทุกอย่างที่แต่ละระบบกำหนด — s.82C(4) ระบุว่าเมื่อรายละเอียดขัดแย้งกัน e-Invoice ใช้ได้เพื่อวัตถุประสงค์ภาษีเงินได้เท่านั้น"
keyTakeaways:
  - "สองพระราชบัญญัติ สองหน่วยงานกำกับ — LHDN ภายใต้ ITA 1967, RMCD ภายใต้พระราชบัญญัติภาษีปี 2018"
  - "s.82C(4) ITA 1967 ให้เอกสารเดียวทำงานทั้งสอง แต่เฉพาะเมื่อรายละเอียดตรงกัน"
  - "เมื่อขัดแย้งกัน e-Invoice บังคับใช้ได้เพื่อวัตถุประสงค์ภาษีเงินได้เท่านั้น"
  - "รายละเอียดภาษีบริการอยู่ใน reg. 10 ของ Service Tax Regulations 2018"
  - "รายละเอียดภาษีขายอยู่ใน reg. 7 ของ Sales Tax Regulations 2018"
  - "ข้อมูล MyInvois ถูกแชร์กับ RMCD ภายใต้ s.138(4)(aa) ของ ITA 1967"
appliesTo: "ธุรกิจที่จดทะเบียน SST ที่อยู่ในขอบเขต e-Invoicing ด้วย และใครก็ตามที่ออกแบบแม่แบบใบแจ้งหนี้ที่ต้องเป็นไปตามหน่วยงานกำกับทั้งสอง"

verificationNeeded:
  - "RMCD ได้ออกคู่มือเฉพาะที่ประนอม visual representation ของ e-Invoice กับรายละเอียดใบกำกับภาษี SST หรือไม่ — ไม่พบบน mysst.customs.gov.my"

lang: "th"
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
  - title: "Finance (No. 2) Act 2023 (Act 851) — section 82C"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Government of Malaysia"
    date: "2023-12-29"
  - title: "Service Tax Regulations 2018 — regulation 10"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Regulations-2018.pdf"
    publisher: "RMCD"
  - title: "Sales Tax Regulations 2018 — regulation 7"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Regulations-2018.pdf"
    publisher: "RMCD"
  - title: "e-Invoice Guideline (Version 4.7)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MySST — Issuing Invoices"
    url: "https://mysst.customs.gov.my/issuing-invoices/"
    publisher: "RMCD"

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

การตรวจสอบใบแจ้งหนี้ผ่าน MyInvois ไม่ได้ทำให้มันเป็นใบกำกับภาษี SST ประโยคนั้นสร้างปัญหาให้ธุรกิจที่
จดทะเบียน SST มากกว่าประเด็นอื่นใดในการเริ่มใช้ e-Invoicing เพราะหน่วยงานกำกับสองแห่งต้องการสองสิ่งที่
แตกต่างกันจากกระดาษแผ่นเดียวกัน

## สองระบบโดยสรุป

| | e-Invoice | ใบกำกับภาษี SST |
| --- | --- | --- |
| พระราชบัญญัติ | Income Tax Act 1967, **s.82C** | **Sales Tax Act 2018** / **Service Tax Act 2018**, s.21 |
| หน่วยงานกำกับ | **LHDN** | **RMCD** |
| รายละเอียดกำหนดโดย | e-Invoice Guideline ภายใต้ s.134A ITA 1967 | **reg. 7** Sales Tax Regulations 2018 / **reg. 10** Service Tax Regulations 2018 |
| ใครต้องออก | ผู้เสียภาษีที่อยู่ในขอบเขตตามช่วงมูลค่าการซื้อขาย | ผู้ผลิต **ที่จดทะเบียน** และผู้จดทะเบียน |
| การตรวจสอบ | ส่งไปยังและตรวจสอบโดย LHDN | ไม่มี — ไม่มีการยื่น ไม่มีหมายเลขอ้างอิง |
| วัตถุประสงค์ | หลักฐานเงินได้และค่าใช้จ่ายสำหรับภาษีเงินได้ | หลักฐานภาษีที่เรียกเก็บสำหรับการบัญชี SST |

ไม่มีอันใดแทนอีกอัน บริษัทที่จดทะเบียน SST ที่มีมูลค่าการซื้อขายต่ำกว่า RM1 ล้านได้รับยกเว้นจาก e-Invoicing
และยังคงออกใบกำกับภาษี SST บริษัทใหญ่ที่ไม่ได้จดทะเบียนเป็นตรงกันข้าม

## บทบัญญัติที่กำกับเรื่องนี้จริง ๆ

Section 82C(4) ของ Income Tax Act 1967 ที่เพิ่มโดย Finance (No. 2) Act 2023:

> เมื่อบุคคลต้องออกใบแจ้งหนี้ภายใต้กฎหมายลายลักษณ์อักษรอื่นใด ใบแจ้งหนี้อิเล็กทรอนิกส์รวมถึงรายละเอียด
> อื่นใดตามที่อาจกำหนดจะถูกตีความว่าเป็นใบแจ้งหนี้ที่ออกภายใต้กฎหมายนั้น — **โดยมีเงื่อนไขว่าเมื่อรายละเอียด
> ของใบแจ้งหนี้อิเล็กทรอนิกส์ไม่สอดคล้องกับข้อกำหนดสำหรับการออกใบแจ้งหนี้ภายใต้กฎหมายนั้น ใบแจ้งหนี้
> อิเล็กทรอนิกส์จะใช้ได้และบังคับใช้ได้เพื่อวัตถุประสงค์ของพระราชบัญญัตินี้เท่านั้น**

อ่านข้อยกเว้นนี้สองครั้ง เอกสารเดียวสามารถเป็นไปตามทั้งสองระบบ แต่เฉพาะเมื่อมันมีทุกอย่างที่ทั้งสองขอ
หากขาดในด้าน RMCD คุณไม่ได้ออกเอกสารที่บกพร่องสำหรับทั้งสอง — คุณมีเอกสารภาษีเงินได้ที่สมบูรณ์และ
**ไม่มีใบกำกับภาษี SST เลย**

Section 2.6.3 และ 2.6.4 ของ e-Invoice Guideline ระบุเช่นเดียวกันในถ้อยคำที่ชัดเจนกว่า: ผู้เสียภาษีอาจใช้
รูปแบบ visual representation ใดก็ได้ และได้รับ *คำแนะนำ* ให้ใส่รายละเอียดที่กำหนดภายใต้กฎหมายเช่น Sales
Tax Act 2018 และ Service Tax Act 2018 เมื่อ visual representation มีรายละเอียดตาม Service Tax Regulations
2018 มันสามารถใช้เพื่อวัตถุประสงค์ภาษีบริการได้

## สิ่งที่ RMCD กำหนดซึ่งรายการช่อง e-Invoice ไม่บังคับ

**Regulation 10, Service Tax Regulations 2018** — หมายเลขลำดับใบแจ้งหนี้; วันที่ใบแจ้งหนี้; ชื่อ ที่อยู่ และ
หมายเลขประจำตัวของผู้จดทะเบียน; คำอธิบายที่เพียงพอที่จะระบุบริการที่ต้องเสียภาษี; ส่วนลดใด ๆ; ยอดรวมไม่รวม
ภาษีบริการ อัตรา และภาษีบริการรวม **แสดงเป็นจำนวนแยกต่างหาก**; ยอดรวมรวมภาษีบริการ; และจำนวนเงิน
สกุลต่างประเทศใด ๆ ที่แสดงเป็นริงกิตด้วยในอัตราขายที่ใช้อยู่

**Regulation 7, Sales Tax Regulations 2018** เพิ่ม เหนือสิ่งอื่น **ชื่อและที่อยู่ของบุคคลที่ขายสินค้าที่ต้องเสีย
ภาษีให้** และต่อคำอธิบาย ประเภท จำนวน และยอดไม่รวมภาษีขาย

ช่องว่างสองประการตามมาโดยตรง:

- **ชื่อและที่อยู่ของผู้ซื้อ** 55 ช่องของ LHDN รวมพวกมัน แต่ e-Invoice แบบรวมตั้งผู้ซื้อเป็น *General Public*
  โดยที่อยู่เป็น NA ผู้ผลิตที่จดทะเบียนไม่สามารถบันทึกการขายที่ต้องเสียภาษีด้วยวิธีนั้นและยังเป็นไปตาม reg. 7(d)
- **ภาษีแสดงเป็นจำนวนแยกต่างหาก** e-Invoice มีประเภทภาษี อัตรา และจำนวนเป็นข้อมูล ว่า *visual
  representation* ของคุณพิมพ์ภาษีบริการเป็นบรรทัดแยกต่างหากหรือไม่เป็นการตัดสินใจเรื่องแม่แบบ — และ reg.
  10(f) ทำให้มันเป็นเรื่องทางกฎหมาย

ภาษาก็เป็นกฎของ RMCD ไม่ใช่ของ LHDN: ใบกำกับภาษี SST ต้องเป็นภาษามลายูหรืออังกฤษ

## RMCD เห็นข้อมูล e-Invoice ของฉันหรือไม่?

เห็น Section 138(4)(aa) ของ Income Tax Act 1967 ให้อำนาจ LHDN แชร์ข้อมูล MyInvois กับ RMCD และ section
2.6.1 ของ e-Invoice Guideline ยืนยันว่ารายการช่องถูกออกแบบเทียบกับ Sales Tax Act 2018 และ Service Tax
Act 2018 ควบคู่กับ ITA 1967, Labuan Business Activity Tax Act 1990 และ Petroleum (Income Tax) Act 1967
การยื่นสองอย่างของคุณตอนนี้มองเห็นกันและกันแล้ว

## ข้อผิดพลาดที่พบบ่อย

- **เลิกใช้แม่แบบใบกำกับภาษี SST เมื่อเริ่มใช้งาน** ไม่มีอะไรใน s.82C ยกเลิก s.21 ของพระราชบัญญัติปี 2018 ทั้งสอง
- **สันนิษฐานว่าการตรวจสอบแก้รายละเอียดที่หายไป** MyInvois ตรวจสอบเทียบกับ schema ของ LHDN มันไม่มี
  มุมมองต่อ reg. 7 หรือ reg. 10
- **ใช้ e-Invoice แบบรวมสำหรับการขายที่ต้องเสียภาษีให้ผู้ซื้อที่ระบุชื่อ** มันไม่สามารถมีรายละเอียดผู้ซื้อที่
  reg. 7 เรียกร้อง
- **ทิ้งหมายเลขจดทะเบียน SST จากเอกสารที่พิมพ์** มันเป็นช่อง e-Invoice บังคับแบบมีเงื่อนไขสำหรับผู้จดทะเบียน
  และเป็นรายละเอียดตาม reg. 10
- **ถือว่าแบบ SST-02 และ e-Invoice เป็นเวิร์กโฟลว์เดียว** หน่วยงานกำกับต่างกัน รอบต่างกัน ค่าปรับต่างกัน

## หัวข้อที่เกี่ยวข้อง

วางรายการรายละเอียดสองรายการเคียงข้างกันเทียบกับใบแจ้งหนี้ที่พิมพ์จริงของคุณ ไม่ใช่เทียบกับ XML ของคุณ
XML เป็นไปตาม LHDN; visual representation คือสิ่งที่ต้องเป็นไปตาม RMCD หากคุณรวมใบเสร็จ B2C ด้วย
ให้ตรวจสอบแยกต่างหากว่าธุรกรรมใดในนั้นเป็นการจัดหาที่ต้องเสียภาษีซึ่งต้องการผู้ซื้อที่ระบุชื่อ
