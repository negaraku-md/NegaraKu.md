# NegaraKu.md — Brand & Identity

The single reference for the NegaraKu.md name, logo, tagline, vision, and mission.
For the raw logo asset files and how to regenerate them, see
[`public/brand/README.md`](public/brand/README.md).

---

## Name

**NegaraKu.md** — *NegaraKu* (“my country”, from Malaysia’s national anthem) + **.md**
(Markdown, the plain-text format AI reads natively). The name fuses national
identity with an AI-native format.

**Wordmark treatment:** always render **NegaraKu** in bright ink and **.md** in
gold — `NegaraKu` + `.md`. Never one flat colour; never let “NegaraKu” go dim.

---

## Tagline

**AI-friendly Malaysia**

| Language | Tagline |
|---|---|
| English | AI-friendly Malaysia |
| Bahasa Melayu | Malaysia mesra-AI |
| 中文 | AI 友好的马来西亚 |

Used as the short line beneath the wordmark in the header lockup (like a company
strapline). The longer descriptive line — *“An open-source knowledge base about
Malaysia”* — remains the site’s meta/hero description.

---

## Vision

> **A Malaysia whose knowledge is open, trustworthy, and equally readable — by
> people and by the AI they rely on.**

- **BM:** Sebuah Malaysia yang pengetahuannya terbuka, boleh dipercayai, dan mudah dibaca — oleh manusia dan oleh AI yang mereka gunakan.
- **中文:** 一个知识开放、可信、并能被人类及其所依赖的 AI 同样读懂的马来西亚。

---

## Mission

> **To curate Malaysia’s knowledge into an open, cited, trilingual library that
> anyone — and any AI — can read, verify, and build on.**

- **BM:** Menyusun pengetahuan Malaysia menjadi perpustakaan terbuka, bersumber dan tiga bahasa yang boleh dibaca, disahkan dan dikembangkan oleh sesiapa sahaja — dan mana-mana AI.
- **中文:** 将马来西亚的知识整理成一个开放、有据可查、三语的知识库，让任何人——以及任何 AI——都能阅读、查证并在其之上继续建构。

Every word maps to something the site does: **curate** (editorial waves + health
scanner) · **open** (open-source, GitHub, raw `.md`) · **cited** (every claim
sourced) · **trilingual** (BM / EN / 中文 parity) · **read, verify, build on**
(llms.txt, MCP server, permissive licence).

---

## Logo

The mark is a **1company-style black rounded hexagon badge** with a **five-petal
gold blossom** (with stem, buds, and gold pistil) in place of 1company’s “1”. A
thin **uniform white hexagon outline** sits directly on the black edge — matching
1company’s badge exactly (geometry measured from the official brand asset).

- On **dark** backgrounds the full white-outlined badge shows.
- On **white** backgrounds the outline merges into the page and it reads as a
  solid black hexagon (same behaviour as the 1company logo).
- On the site’s dark chrome the header shows the badge; where a black hexagon
  would vanish into a black canvas, use the bare gold blossom (the badge’s
  foreground on a matching background).

**Asset files** live in [`public/brand/`](public/brand/) — `negaraku-icon.*`
(badge), `negaraku-mark.*` (flat blossom), `negaraku-lockup*.*` (badge +
wordmark). `scripts/build-logo.mjs` is the single source of truth and also writes
`public/favicon.svg`; regenerate with `node scripts/build-logo.mjs`. Never
hand-edit `favicon.svg`.

---

## Colours

| Token | Hex | Use |
|---|---|---|
| Gold accent | `#FFC000` | blossom, `.md`, highlights |
| Badge black | `#0A0A0A` | hexagon fill |
| Dark canvas | `#07070A` | site background |
| Ink | `#F4F4F8` | primary text / “NegaraKu” |
| Ink-soft | `#C0C0D0` | tagline, secondary text |

## Typography

- **Montserrat** (700–800) — wordmark, titles, headings.
- **Lato** — body text.

---

*Sponsored by [1company.com](https://www.1company.com). Content: CC BY-SA 4.0 · Code: MIT.*
