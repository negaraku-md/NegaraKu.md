# NegaraKu.md — Eight article frameworks

**Status:** Sprint 1b specification. `framework` is an **optional, non-rendering**
field in v1 — it drives editorial guidance and warn-level health-scan checks only.
Keep `framework` (structure/opening emphasis), `mode` (voice), and `foodType`
(food subject) separate. An article's `alsoIn` placements do not change its framework.

Choose the framework by what the reader needs to **do** after opening the page. The
framework decides what appears first, which sections the article needs, and what
evidence supports the answer. A hawker stall can be a Profile in a practical voice;
the history of a dish can be History & Culture in a narrative voice.

Enum slugs: `explainer · history-culture · profile · how-to · decision · rules ·
data-reference · journey-hub`.

---

## 1. Explainer — `explainer`
**Reader's question:** What is this, and how does it work?
**Opening:** Define the concept in plain language, then why the distinction matters.

1. What it is — define; expand local terms/acronyms on first use.
2. How it works — roles, components or sequence in a useful order.
3. An example — the concept in an ordinary Malaysian situation.
4. Common confusion — the distinction readers most often miss.
5. Where to go next — link a procedure, rule or decision guide if needed.

Use a diagram/comparison table where it clarifies the relationship. Add geographic
scope if the concept works differently across Malaysia. Cite the authority for
institutional/technical definitions; label hypothetical examples.
**Reader test:** Can someone explain the concept in their own words and distinguish
it from the thing it is commonly confused with?
**Examples:** How local government works · What a strata sinking fund is · What belacan is.

## 2. History & Culture — `history-culture`
**Reader's question:** How did this develop, and why does it matter?
**Opening:** Identify the subject, place it in time and geography, state its
significance; flag disputed origins where the claim first appears.

1. Origins and context.
2. How it developed — timeline for dated events, thematic for traditions.
3. Regional and community perspectives — whose experience, where practices differ.
4. The subject today.
5. Sources and interpretations — attribute accounts, oral histories, contested readings.

Distinguish what records establish from what a community/historian recounts. Caption
archival images with subject, place, date where known. Bring in Sabah and Sarawak
perspectives where they change the account.
**Reader test:** Can someone explain what changed over time, identify the perspective
behind the account, and recognise where evidence is uncertain?
**Examples:** Formation of Malaysia · Development of kopitiam culture · Regional cendol traditions.

## 3. Profile — `profile`
**Reader's question:** What should I know about this specific place, person or organisation?
**Opening:** Identify the subject and why it matters; surface the details most likely
to drive the reader's next action (visiting info for a venue; remit + services for an agency).

| Subject | Sections that fit |
|---|---|
| Venue / place | Known for → location & access → hours & price where verified → specialties → history |
| Public agency | Role & remit → whom it serves → services & official links → jurisdiction → background |
| Company | What it does → where it operates → significance → dated operating facts → history |
| Person | Identity & significance → relevant roles/work → milestones → sourced context |

For food venues, distinguish venue-provided facts, attributed reviews and firsthand
observations; a taste judgment needs a named source or clearly identified firsthand
reporting; caption a representative dish image as such. Date-check hours, prices, roles.
**Reader test:** Can someone identify the subject, decide if it's relevant, and tell
which details need a fresh check?
**Examples:** A hawker stall · A museum · A local authority · A Malaysian company.

## 4. How-to Guide — `how-to`
**Reader's question:** How do I get this done?
**Opening:** The first action, the official destination, and any condition that
re-routes the reader. Put a verified urgent action above the rest when delay matters.

1. Check that this is your route — jurisdiction, status, circumstances.
2. Prepare what you need — documents, prerequisites, fees, deadlines.
3. Follow the steps — in order; link the official form/service at the relevant step.
4. Know what happens next — confirmation, outcome, follow-up.
5. If the usual route fails — common errors, exceptions, alternate channels (verified).

Separate official requirements from practical tips. Cite consequential instructions,
deadlines and fees. Show state/authority splits before the reader begins.
**Reader test:** Can someone identify the correct first action, prepare what they need,
and reach the right official channel?
**Examples:** Make a police report · Replace a lost document · Close a registered business.

## 5. Decision Guide — `decision`
**Reader's question:** Which option fits my circumstances?
**Opening:** The questions that change the answer (e.g. qualification + goal; ownership,
liability, operating needs, future plans).

1. Work out which options are open to you — eligibility/prerequisites before preferences.
2. Compare the options — consistent dimensions (cost, time, flexibility, obligations, recognition).
3. Understand the trade-offs.
4. Apply the comparison — contrasting scenarios, including a fallback.
5. Take the next step — link each route to its application/procedure/requirements.

Separate eligibility rules from editorial judgment. Date-check fees, entry requirements,
recognition claims. State institution/programme/intake/regulator dependencies at the
point of comparison.
**Reader test:** Can someone choose an applicable option, explain the main trade-off, and identify a fallback?
**Examples:** Pathways after SPM or UEC · Choose a business structure · Compare home financing routes.

## 6. Rules & Requirements — `rules`
**Reader's question:** What applies to me, where, and from when?
**Opening:** The rule with its scope, affected party, and effective date; exceptions/thresholds next to the main answer.

1. Who and where it applies — jurisdiction, regulator, person/entity.
2. What is required — in plain language.
3. Thresholds, exemptions, transitions.
4. Authority and dates — cite the exact provision/guidance/notice; distinguish announcement from effective dates.
5. What to do next — link the procedure/service where action is required.

Cite the source beside consequential claims and record when checked. If official
sources conflict, explain the unresolved point. A related How-to can carry the steps.
**Reader test:** Can someone determine whether the rule applies, from what date, and which provision supports it?
**Examples:** Halal certification requirements · Audit exemption eligibility · Local business licensing.

## 7. Data & Reference — `data-reference`
**Reader's question:** What is the figure, definition or reference value I need?
**Opening:** The answer/table/definition first, with reference period, geography, unit, source beside it.

1. The reference itself — readable form.
2. Coverage and basis — what's counted, who's included, the denominator.
3. How to interpret it — exclusions, comparability limits, series breaks.
4. Source and revision — exact release/table/dataset; reference period vs publication date.
5. Related context — link an explainer where readers need help with the measure.

Keep estimates, reported values and editorial calculations visibly distinct. Label each
period when combining annual and quarterly figures.
**Reader test:** Can someone cite the value or definition with the correct source, period and scope?
**Examples:** Population by state · Cost-of-living indicators · A glossary of Malaysian terms.

## 8. Journey Hub — `journey-hub`
**Reader's question:** I have a broader goal. Where should I start, and in what order?
**Opening:** Name the goal and give a few starting paths (ask only for distinctions that change the path).

1. Choose your starting point.
2. See the route — what comes first, what runs in parallel.
3. Complete each step — link the article that owns each detail.
4. Handle branches and exceptions.
5. Know when you are done — outcome and continuing obligations.

Keep the hub navigable; detailed fees/deadlines live in the owned articles. A journey
can cross pillars and reuse existing articles. Its sequence differs from `alsoIn`
(which shows where an article is listed by subject).
**Reader test:** Can someone choose where to start, see what comes next, and recover if circumstances change?
**Examples:** Plan education after secondary school · Start a small business · Buy a home.

---

## Choosing when two frameworks fit

| If the reader mainly wants to… | Use | Example distinction |
|---|---|---|
| Understand how something works vs trace how it developed | Explainer **or** History & Culture | What a kopitiam is vs how kopitiam culture developed |
| Know a rule vs complete a procedure | Rules **or** How-to | Whether a requirement applies vs how to submit an application |
| Choose one option vs navigate several decisions | Decision **or** Journey Hub | Choose a business structure vs start and operate a business |
| Look up a value vs understand its meaning | Data & Reference **or** Explainer | Find the population figure vs understand how the estimate is produced |
| Know **what an organisation does** vs **how to use its service** | Profile **or** How-to | "What does this agency do?" is a **Profile**; "How do I use this agency's service?" is a **How-to** |
| Understand a tax/levy vs know your obligation under it | Explainer **or** Rules | "What is SST and how does it work?" is an **Explainer**; "When must my business charge SST?" is **Rules** |

Choose one primary framework. Add a short secondary **section** when it helps answer
the same question. Create a **separate article** when the second question is a distinct
reader goal with enough substance to maintain on its own.

## Language consistency

Each article carries the **same** framework across its language versions; headings,
terminology and examples may be adapted per language. A family passes consistency if
all files omit `framework` or all declare the same valid value (enforced by
`validate-frontmatter.mjs`).

## v1 usage

Use `framework` to guide the opening, section expectations, and editorial checks.
The health scan flags **missing signals** for review (warn-level, never blocking); the
reader test above is the acceptance check, run as a structured editorial self-check over
a Malaysian and an international scenario. Reserve usability claims for observed testing.
