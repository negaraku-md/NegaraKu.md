# Licensing — NegaraKu.md

NegaraKu.md is deliberately **layered**. Different parts of this project carry
different licenses, so that the knowledge and the code stay maximally open while
the brand identity stays protected. This page is the canonical statement; the
individual `LICENSE*` files are the legal text.

| Layer | What it covers | License |
|---|---|---|
| **Content** | Everything in `knowledge/` — the articles, their text, data tables, FAQs and translations | [CC BY-SA 4.0](LICENSE-CONTENT) |
| **Code** | The website source — Astro components, scripts, build tooling, config | [MIT](LICENSE) |
| **Design system** | Reusable design *patterns* — CSS tokens, layout and component structure, spacing/typography scales — **excluding the brand assets below** | [CC BY 4.0](LICENSE-DESIGN) |
| **Brand assets** | The `NegaraKu.md` wordmark; the Bunga Raya / hexagon logo, marks and lockups; bespoke illustrations; and the signature visual identity | **All rights reserved** — see [`public/brand/README.md`](public/brand/README.md) |

## 1. Content — CC BY-SA 4.0

The knowledge base is free to read, share, translate and adapt — including
commercially — provided you **attribute** NegaraKu.md and **share alike** (keep
derivatives under CC BY-SA 4.0). This is the same license family as Wikipedia.
See [`LICENSE-CONTENT`](LICENSE-CONTENT). To cite, see [`CITATION.cff`](CITATION.cff).

## 2. Code — MIT

The code that runs the site is MIT-licensed: use it, fork it, build your own
knowledge base on it. See [`LICENSE`](LICENSE).

## 3. Design system — CC BY 4.0 (brand assets excluded)

The *reusable* design layer — the token set, the component and layout patterns,
the way the pages are structured — is offered under CC BY 4.0 so others can learn
from and reuse the craft with attribution. This **does not** grant any right to
the brand assets in layer 4: using the patterns does not let you reuse the logo,
the wordmark, the illustrations, or present your work as NegaraKu.md.
See [`LICENSE-DESIGN`](LICENSE-DESIGN).

> Note: the site's typefaces (Montserrat, Lato) are third-party fonts under the
> SIL Open Font License, governed by their own OFL terms — not by this project.

## 4. Brand assets — All rights reserved

The `NegaraKu.md` wordmark, the Bunga Raya / hexagon logo, all marks and lockups,
the bespoke illustrations and the overall signature visual identity are
**proprietary and reserved**. The open licenses above do **not** grant rights to
them. You may reproduce an unmodified logo solely to link to or refer to
NegaraKu.md (nominative reference); any other use — modifying a mark, implying
endorsement, or presenting a derivative as NegaraKu.md — needs written permission.
The reserved files live in [`public/brand/`](public/brand/).

## Commercial use, AI citation, and bulk / training access

We want the boundary to be explicit — not a vague "open" label.

**Free, and encouraged** (covered by the content license, CC BY-SA 4.0):

- Reading, and human, academic and educational use.
- **AI citation and RAG grounding** — an AI system reading a page and answering
  with attribution. This is the point of an AI-friendly knowledge base; please do.
- Any reuse of the content, including commercial, that honours attribution and
  share-alike (keeps derivatives under CC BY-SA 4.0).

**Requires a separate licence — please contact us:**

- **Bulk extraction and large-scale commercial AI *training*** — ingesting the
  corpus wholesale as training data for a commercial model. CC BY-SA 4.0's reach
  over training-scale ingestion is unsettled, and its share-alike term sits
  awkwardly with closed commercial models; so for bulk/training use we ask you to
  arrange a licence rather than rely on the open terms.
- **Enterprise access and service** — a bulk structured feed, an SLA, refresh
  guarantees, provenance/attribution tooling and support. This is the
  [Wikimedia Enterprise](https://enterprise.wikimedia.com/) model: the corpus
  stays free, and high-volume commercial consumers pay for a *serviced channel*,
  not for content rights.
- **Commercial reuse of the brand or design layers** above — those are separate
  and genuinely reserved.

In short: **cite us freely; licence with us to train on us at scale or to take a
serviced bulk feed.**

If you want a serviced bulk/enterprise channel, or a brand/design license, open a
Discussion or contact the maintainers.

> **Legal caveat.** This page states the project's intent. The precise,
> enforceable wording of the enterprise-access and brand terms is still to be
> confirmed with legal counsel; nothing here waives or narrows the rights the
> CC BY-SA 4.0, MIT and CC BY 4.0 licenses grant.
