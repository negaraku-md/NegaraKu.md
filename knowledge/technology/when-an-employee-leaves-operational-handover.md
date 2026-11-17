---
topicId: MY-TEC-0017
title: "An Employee Leaves: How to Hand Over Email, Files, Systems and Client WhatsApp Groups"
seoTitle: "Employee Offboarding Handover: Email, Files, WhatsApp"
slug: "when-an-employee-leaves-operational-handover"
category: "technology"
subcategory: ["operations"]
summary: "The statutory side of a departure keeps you compliant; the operational side keeps the business running and client data under control after the person has gone. This playbook covers the handover the paperwork doesn't: email and files, system and SaaS access, shared passwords, devices, and the hardest one — client WhatsApp groups that live on a personal phone. The two risks to close are lingering access and orphaned assets, and the client WhatsApp problem is best solved before anyone leaves."
tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "When an employee leaves a Malaysian small business, there are two separate jobs. The statutory one — EPF, SOCSO and EIS cessation, LHDN notifications, final pay, Employment Pass cancellation — is covered in our offboarding statutory checklist. This guide is the operational twin: the handover of email, files, system and SaaS access, credentials, devices and client communication channels, plus knowledge transfer. Two durable risks drive it: lingering access (a former insider who can still get in) and orphaned assets (records, files and client relationships that walk out the door). The core moves: plan before the last day and revoke access promptly across every place the person could get in, not just their main login; for email, keep the mailbox but remove the person's access, delegate it to a manager, and set an auto-reply before you ever delete; for files, reassign ownership to the business before the account is removed, because deleting first can orphan them; take an inventory of every system and SaaS account, deprovision each, and crucially rotate any shared password the person knew; recover company devices and remove company and client data from personal ones. The hardest part is client communication: business chats often live in WhatsApp on an employee's personal number, so the channel — and the clients' personal data — can leave with them. The only reliable fix is set up in advance: company-owned numbers, a business-grade WhatsApp account with more than one admin, and client contact routed through company channels. Throughout, remember the business stays responsible under the PDPA for client personal data even when it sits in a leaver's mailbox, phone or WhatsApp group, so handle its transfer and deletion rather than leaving it behind. This is general guidance, not legal advice — confirm specifics with pdp.gov.my and your own adviser."
keyTakeaways:
  - "This is the OPERATIONAL side of a departure (email, files, access, devices, client channels, knowledge) — the statutory side (EPF/SOCSO/EIS, LHDN, final pay, Employment Pass) is a separate checklist to cross-link, not re-cover"
  - "Two risks to close: lingering access (someone who can still get in) and orphaned assets (records, files and client relationships that leave with the person) — plan before the last day and revoke access across EVERY place they could reach, not just the main login"
  - "Email: keep the mailbox, remove the person's access, delegate it to a manager and set an auto-reply/forward, and preserve or export it before any deletion — mailboxes usually can't be reassigned like files, so delegate rather than 'change owner'"
  - "Files: reassign ownership to the business or successor BEFORE the account is removed (deleting first can orphan the files); keep company work in company-owned storage, not personal accounts, and pull local-only files off the device before wiping it"
  - "Systems: work from an inventory of every account and SaaS tool, deprovision each, remove the person from SSO and collect MFA/building/VPN access — and ROTATE any shared password the person knew, since revoking their own login does nothing if the secret is reused and still in their head"
  - "Client WhatsApp groups are the sharpest risk because the channel is tied to a personal number and leaves with the employee — the reliable fix is set up in advance (company-owned numbers, business-grade WhatsApp with more than one admin, client contact through company channels); under the PDPA the business stays responsible for client personal data wherever it sits"
appliesTo: "Malaysian small-business owners and managers handling the IT and operational side of an employee's departure — the handover of email, files, systems, devices and client communication channels. It is a general operational playbook, not the statutory exit process, and not legal or IT-security-incident advice."

faq:
  - q: "Isn't this the same as the EPF/SOCSO/tax offboarding steps?"
    a: "No — it's the complementary half. The statutory offboarding (EPF, SOCSO and EIS cessation, LHDN notifications such as CP21/CP22A, final wages, and Employment Pass cancellation for a foreign worker) keeps you compliant with regulators, and we cover it separately. This guide is the operational handover that the statutory process doesn't touch: email, files, system and SaaS access, shared credentials, devices and client communication channels, plus knowledge transfer. A departure can be perfectly clean on the statutory paperwork and still leave the business locked out of a mailbox, unable to find files held in someone's personal cloud, exposed by passwords the leaver still knows, or cut off from clients who only ever dealt with one person on that person's own phone. Do both tracks, triggered by the same confirmed leave date."
  - q: "What should I do about the leaver's email and files?"
    a: "Treat email and files as two different problems. For email, the rule is keep the account, remove the person: cut their sign-in, delegate or convert the mailbox so a manager can keep answering clients, set an auto-reply and forward so inbound mail is caught, and preserve or export the mailbox for your records before you suspend or delete it. Deleting a mailbox outright destroys business records and breaks client threads, and mailboxes generally can't be 'reassigned' the way files can — so delegate rather than transfer. For files, do the opposite order: reassign ownership of the person's files and drives to the business or a successor before the account is removed, because files owned by a deleted account can be lost or orphaned. And make sure company work actually lives in company-owned storage, not a personal drive or local-only folders — sweep for stray copies, and pull anything local off the laptop before you wipe it. Use your provider's admin console for all of this; the exact menus change."
  - q: "How do I handle passwords and system access?"
    a: "Start from an inventory, because you can only revoke what you can see — list every account, app and system the person could reach, including 'shadow' SaaS tools signed up for without anyone's knowledge. Then deprovision each login (disable or remove the user, don't just stop using the tool), remove the person from single sign-on and verify it actually reached each connected app, revoke any API keys, tokens or integrations tied to them, collect or de-register their MFA devices, and remove building-access cards, door codes and VPN or remote access. The step most often missed is to ROTATE shared passwords — any Wi-Fi admin, shared tool login, company social-media password or the like that the person knew — because revoking their personal login does nothing if the real secret is reused elsewhere and still in their memory. Where you can, confirm each revocation in the admin view rather than assuming the click worked. For a dismissal, a hostile exit or anyone with admin access, do this immediately; for an amicable resignation you can time it with a planned handover."
  - q: "Our clients are in WhatsApp groups on the employee's personal phone — how do we keep them?"
    a: "This is the hardest problem, and the honest answer is that it is far easier to prevent than to fix. A WhatsApp account follows the SIM and number it is registered to, so if your client chats live on an employee's personal number, the channel, the chat history and often the client relationship leave with them — and those chats also hold clients' personal data on a device you don't control, which under the PDPA remains the business's responsibility. The reliable fix is set up in advance: use client-facing numbers that belong to the company (a company SIM or line), run a business-grade setup (WhatsApp Business or the WhatsApp Business Platform) with the account registered to a company email and more than one trusted admin, route conversations through a shared inbox so history isn't trapped on one handset, and make it policy that client contact goes through company channels. At the point of departure, hand over group admin to a remaining staff member, remove the leaver as group admin and from the group, introduce the successor to clients in-thread and move them onto the company channel, and arrange documented deletion of client data from the leaver's personal device once records are preserved. Retrofitting all this after a hostile exit is mostly damage control — which is why the prevention matters."
  - q: "What are my data-protection responsibilities when someone leaves?"
    a: "The orienting principle is that your business is the data controller and stays responsible for your clients' personal data even when that data sits in a departing employee's mailbox, on their phone, or in a WhatsApp group — which is exactly why the email, files, device and WhatsApp steps above matter. So the transfer, retention and secure deletion of that data at offboarding is your duty, not something you can leave with the person. Separately, the employee usually owes confidentiality obligations — often spelled out in their employment contract or an NDA — over client lists, pricing and other confidential information, plus a duty to return company information and property; check your own contract for the specifics. This guide gives the shape only: it does not state PDPA penalties, and it does not pin down the specifics of the 2024 PDPA amendments (such as data protection officer requirements, breach notification or cross-border rules), which have been phased in and should be confirmed against pdp.gov.my. For anything turning on the law, confirm with pdp.gov.my (the Department of Personal Data Protection) and a qualified adviser."

lang: "en"
masterLanguage: "en"
translationStatus: "master"

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
  - "Legal content is general and hedged to the PDPA (Act 709) and pdp.gov.my / the Department of Personal Data Protection: no penalties are stated, and the 2024 PDPA amendment specifics (data protection officer appointment, breach-notification obligation and deadline, data portability, the revised cross-border-transfer test, and any registration duty) are described as moving and to be confirmed on pdp.gov.my, not asserted as in force with fixed numbers or dates."
  - "Confidentiality and return-of-property obligations are framed as contract-dependent ('check your contract or NDA'), not as a universal legal rule."
  - "Product capabilities (delegate/convert a mailbox, reassign file ownership, deprovision SaaS, SSO cascade) are described as durable capabilities with a pointer to the provider's admin console; no product menu paths are given, since those change."
  - "The WhatsApp mechanics (an account following the SIM/number, business-account ownership and admin control, limits on deleting a number) are described in shape from vendor/CRM sources and should be confirmed against WhatsApp/Meta's official Business documentation; no specific migration guarantee is asserted."
  - "The statutory side is explicitly out of scope and cross-linked to offboarding-statutory-checklist (MY-EMP-0012); this article does not restate EPF/SOCSO/EIS, LHDN or final-pay steps."

updated: 2026-11-17
sources:
  - title: "Protection of Personal Data (PDPA, Act 709) — official gateway"
    url: "https://www.malaysia.gov.my/en/quick-links/protection-of-personal-data"
    publisher: "Government of Malaysia"
  - title: "Department of Personal Data Protection (JPDP) — confirm all PDPA specifics here"
    url: "https://www.pdp.gov.my"
    publisher: "Department of Personal Data Protection (JPDP)"
  - title: "WhatsApp Business — what a company-owned business account enables"
    url: "https://www.whatsapp.com/business"
    publisher: "WhatsApp"
  - title: "IT offboarding and access revocation — best practice (capability shape)"
    url: "https://www.lumos.com/identity-matters/offboarding/employee-offboarding-best-practices"
    publisher: "Lumos"

entity: "Operational employee offboarding"
relations:
  - { rel: "related-to", to: "offboarding-statutory-checklist" }
  - { rel: "related-to", to: "before-putting-client-data-into-ai" }
---

When someone leaves, most small businesses focus on the statutory exit — EPF and SOCSO cessation, the LHDN notifications, final pay — and rightly so. But a departure that is clean on paper can still leave the business **locked out of a mailbox, unable to find files held in a personal cloud account, exposed by passwords the leaver still knows, or cut off from clients who only ever dealt with one person on that person's own phone.** This guide is the **operational** half of offboarding: the handover of email, files, systems, devices and client channels. (For the statutory steps, see our [offboarding statutory checklist](/en/employment/offboarding-statutory-checklist).)

Two durable risks drive everything below: **lingering access** — a former insider who can still get in — and **orphaned assets** — records, files and client relationships that walk out the door. Close those two and you've done the job.

## Start before the last day

Good offboarding is prepared, not improvised. You don't need expensive tooling — a simple checklist and a named owner close most of the gap — but you do need two principles:

- **Revoke access promptly, everywhere.** When the person leaves, their access should be removed across *every* place they could get in — app logins, cached sessions, device trust, API tokens, single sign-on, building access — not just their main email. If you only cut the obvious account, the rest keeps working.
- **Time it with the HR/statutory process.** One trigger — HR confirming the leave date — should drive both the statutory track and this operational one, so you neither cut access the person still needs for a legitimate handover nor leave it open after they've gone.

One judgement call for the owner: **an amicable resignation** with notice allows a planned overlap and handover, while **a dismissal, a hostile exit, or anyone with admin/privileged access** calls for immediate revocation, often at the moment of notification, to limit the window for anything going wrong.

## Email: keep the account, remove the person

The instinct to delete a leaver's mailbox is wrong — it destroys business records and breaks client threads. The durable sequence is:

1. **Revoke the person's access** (block sign-in / reset the password).
2. **Delegate or convert the mailbox** to a manager or successor, so someone can keep answering clients. Note a key asymmetry: mailboxes generally **don't** have a true "change owner" like files do, so the realistic options are to **delegate, forward or export** — not reassign.
3. **Set an auto-reply and forward** so inbound client mail is caught and routed, and senders learn who to contact now.
4. **Preserve or export** the mailbox for your records before anything is removed — retention and legal duties can outlive the account.
5. **Suspend, then delete only when** retention and continuity allow.

Do this through your provider's admin console; the exact menus change, so the capability matters, not the clicks.

## Files: reassign ownership *before* deleting

Files are the opposite of email: they **do** have a real "change owner" capability, and the single most important action is to **reassign ownership of the person's files and drives to the business or successor *before* the account is removed.** Delete the account first and the files it owned can be lost or orphaned, and shared links break.

Two companions to that:

- **Company work belongs in company-owned storage** — not a personal cloud drive, personal email or local-only folders the business can't control. Make that the norm, and sweep for stray copies at exit.
- **Recover local files from the device** — pull anything that exists only on the laptop's local disk into company storage *before* you wipe or re-image it.

## Systems, SaaS and credentials

You can only revoke what you can see, so **start from an inventory** of every account, app and system the person could reach. "Shadow SaaS" — tools signed up for without anyone's knowledge — is the classic gap. Then:

- **Deprovision each SaaS login** — disable or remove the user in each tool (CRM, accounting, design, project, cloud consoles, social schedulers), don't just stop using it.
- **Rotate shared passwords the person knew.** This is the most-missed step and a different action from deprovisioning: any shared secret — Wi-Fi admin, a shared tool login, the company social-media password — must be *changed*, because revoking someone's personal login does nothing if the real secret is reused and still in their head.
- **Revoke API keys, tokens and integrations** the person created or that are tied to them — these can outlive the human and keep running.
- **Remove them from single sign-on** / the identity directory, which should cascade across connected apps — but verify it reached each one rather than assuming.
- **Collect or de-register MFA devices**, and remove building-access cards, door PINs, alarm codes and VPN/remote access.
- **Confirm and keep evidence** — check in the admin or audit view that sign-in is actually blocked, and tick it off.

## Devices and company property

Recover the **laptop, phone, company SIM, access cards, external drives and keys** (tie this to the statutory return-of-property step), and **wipe or re-image** returned devices after pulling off any local-only data, so no cached credentials remain.

The trickier case is **personal devices (BYOD)**: where someone used their own phone or laptop for work, company and client data may sit on a device you can't collect. Know in advance what's there, remove or retrieve company and client personal data at exit, and revoke that device's access to company systems. Because client *personal* data is involved, treat this as a data-protection matter, not just housekeeping.

## The client WhatsApp problem

This is the sharpest pain point for Malaysian small businesses, and the honest message is that it is **far easier to prevent than to fix.**

The root cause: a WhatsApp account **follows the SIM and number it's registered to.** If your client chats — one-to-one and in client groups — live on an employee's **personal number**, then the channel, the chat history and often the client relationship **leave with the employee.** Those chats also hold clients' personal data (names, numbers, addresses, order details) on a device you don't control, which under the PDPA remains **your** responsibility.

The reliable fix is to set things up **before** anyone leaves:

- **Own the number.** Use client-facing numbers that belong to the company (a company SIM or line), not an employee's personal number — though note that owning the *line* keeps control of the number but doesn't by itself move the WhatsApp account or past threads; it has to be planned.
- **Use a business-grade, company-owned account** — WhatsApp Business or the WhatsApp Business Platform — registered to a **company email**, with **more than one trusted admin** so you're not locked out if the only admin leaves, and conversations routed through a **shared inbox** so history isn't trapped on one handset.
- **Make it policy** that client contact goes through company channels.

At the point of departure: **hand over group admin** to a remaining staff member, **remove the leaver as group admin** and from the group, **introduce the successor** to clients in-thread and migrate them to the company channel, and arrange **documented deletion** of client data from the leaver's personal device once records are preserved. Retrofitting this after a hostile exit is mostly damage control.

## Knowledge transfer and continuity

Access is only half of it — the business also needs to keep *working*:

- **A handover document** — what the person did, recurring tasks and their timing, where things live, key clients and vendors, and any work in progress.
- **Reassign ownership** of every client, supplier and recurring task to a named successor, and tell clients who to contact now.
- **Credentials into a company password manager**, not a personal one and not someone's memory; rotate shared ones after exit.
- **An overlap period** where the exit is planned and amicable — a window where leaver and successor overlap transfers the tacit knowledge no document captures. (Not available for abrupt exits — which is itself a reason to keep the other steps tight.)

## The data-protection thread

Running through all of this is one principle worth stating plainly: under the **Personal Data Protection Act 2010 (Act 709)**, enforced by the **Department of Personal Data Protection (JPDP)**, your business is the data controller and **stays responsible for your clients' personal data even when it sits in a departing employee's mailbox, on their phone, or in a WhatsApp group.** That is precisely why the email, files, device and WhatsApp steps above are not optional housekeeping — handling the transfer, retention and secure deletion of that data *is* the obligation.

A few deliberate limits on what this guide claims: it does not state PDPA penalties, and it does not pin down the specifics of the 2024 PDPA amendments — such as data protection officer requirements, breach notification, or cross-border transfer rules — which have been phased in and should be confirmed against **pdp.gov.my**. Confidentiality and return-of-information duties depend on the employment contract or NDA, so check yours.

---

**Scope and limits.** This is the operational handover, **not** the statutory exit (EPF/SOCSO/EIS, LHDN, final pay, Employment Pass — see the [statutory checklist](/en/employment/offboarding-statutory-checklist)). It is not a product tutorial — capabilities change, so use your provider's admin console and official docs rather than any menu path quoted here. It is general information, **not legal advice**: confirm PDPA and confidentiality specifics with **pdp.gov.my** and a qualified adviser. And it covers routine handovers, not security-incident response — if a departure involves suspected data theft or sabotage, treat that as an incident to escalate.
