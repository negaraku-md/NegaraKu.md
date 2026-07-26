# Classification (sensitivity) standard

Every article carries a `sensitivity` value in frontmatter. It marks content that
touches Malaysia's sensitive domains ("3R" — Race, Religion, Royalty — plus a few
adjacent ones) so it can be reviewed with extra care and shown with a 🔒 badge.

**Pick the SINGLE most salient dimension the article is substantially about.**
If the article merely *mentions* a sensitive body in passing (e.g. a tax guide that
names JAKIM once), it stays `none`. The flag is for content whose *subject* is the
sensitive dimension, not any incidental mention.

## Values

| Value | Use when the article is substantially about… |
|---|---|
| `royalty` | The Malay monarchy — the Agong, Rulers/Sultans, Raja, Yang di-Pertuan Besar, the Conference of Rulers, royal powers/prerogatives, royal succession/regalia/ceremony, or a **state profile of one of the 9 Ruler states**. *Not* Governor states or Federal Territories. |
| `religion` | Islam as the religion of the Federation, syariah/Islamic law & courts, fatwa, apostasy/conversion, halal certification as doctrine, religious freedom (Art. 11), the legal status of non-Muslim faiths, or religious authorities (JAKIM, state religious departments). |
| `race` | The Malay/Bumiputera special position (Art. 153), the NEP/affirmative action, ethnic quotas, the "social contract", ethnic-community profiles, or vernacular education framed as an ethnic issue. |
| `constitution` | MA63 and the Sabah/Sarawak safeguards & special rights, the federal–state division of powers, fundamental liberties, citizenship provisions, emergency powers, or constitutional amendments on sensitive matters. |
| `elections` | The Election Commission (SPR), GE mechanics, delimitation/gerrymandering, the electoral roll, or voting. |
| `security` | ISA/SOSMA/POCA, detention without trial, the Sedition Act, the OSA, or police/military/national-security powers. |
| `health` | Sensitive personal health — mental health, reproductive/sexual health, HIV/AIDS, substance use, end-of-life. |
| `legal-proceedings` | Matters that are *sub judice* / ongoing court cases where commentary risks contempt. |
| `none` | Everything else — procedural, logistical, economic and how-to content (transport, tax filing, company-secretary duties, cost of living, most business), even where a sensitive body is named in passing. |

## The 9 Ruler (sultanate) states → `royalty`

Johor, Kedah, **Kelantan**, Negeri Sembilan, Pahang, Perak, Perlis, Selangor, Terengganu.

**Not royalty** (Yang di-Pertua Negeri / Governor states): Penang, Melaka, Sabah, Sarawak.
Sabah & Sarawak profiles are `constitution` (MA63). Federal Territories (Kuala Lumpur,
Labuan, Putrajaya) are `none` unless the article's subject is itself sensitive.

## Overlap rule

Many articles touch several dimensions. Choose the one **most central to the subject**.
A sultanate state profile that also discusses religion → `royalty` (the profile's spine
is the state and its Ruler). A dedicated article about syariah courts → `religion`, even
though the courts are a state matter. Kelantan's profile → `royalty` (it has a Sultan),
by the ruler-based rule, though its religious character is notable.
