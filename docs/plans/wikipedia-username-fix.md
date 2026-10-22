# Wikipedia username-block fix — shortlist + rename request

**Situation (2026-10-22):** the account `Ai.negaraku.md` was **soft-blocked on English Wikipedia**
(admin Acroterion) under the username policy — the name reads as a website/organization, and must
represent one individual. No behavioural issue; the COI disclosure on the user page was correct.
Wikidata work (Q141449495 etc.) is unaffected (separate project). Fix = rename to a personal
username + continue the COI-safe workflow.

**Account owner / recovery email:** use Ashton's **personal mailbox**, not a company (`@1company.com`)
or shared org mailbox (`ai.negaraku.md@…`) — the account must be an individual's, not a company
asset. Switch the account email via Special:ChangeEmail after unblock.

---

## 1. Username shortlist (all policy-compliant — individual, no brand/org/AI terms)

| Option | Notes |
|---|---|
| **Ashton Tan** ✅ *recommended* | Real name. Real names are explicitly allowed and carry the **most trust** for a COI editor — reviewers see an accountable individual. |
| **Ashton T** | Real name, a little less surname exposure. |
| **AshtonTan** | No-space variant (use if the spaced form is taken or you prefer one token). |
| **Ash Tan** | Shorter personal handle, still clearly an individual. |

**Rules that keep it compliant — do NOT:**
- include the project/company/site: no `NegaraKu`, `negaraku`, `.md`, `1company`, `1co`;
- include `AI`, `bot`, `official`, `team`, `admin`, `HQ`, or anything role/shared-sounding;
- append `(NegaraKu)` or similar to your name — that reintroduces the brand and risks a re-block.
  (Affiliation goes in the **user-page disclosure**, never in the username.)

**Before filing:** check the chosen name isn't already registered — load
`https://en.wikipedia.org/wiki/Special:CentralAuth/Ashton_Tan` (swap the name). "There is no global
account" = free. If taken, use the next option.

---

## 2. Rename request

Because the account is **blocked**, the reliable route is the `{{unblock-un}}` template on the
account's **own User talk page** (blocked users can still edit their own talk page). This both
requests the unblock and proposes the new name for an admin to action.

### A. Primary — paste on `User talk:Ai.negaraku.md`

```
{{unblock-un|1=Ashton Tan|2=I acknowledge that my current username, Ai.negaraku.md, does not comply with the username policy because it gives the impression of representing a website or organization. I am a single individual and would like to edit under my own name. Please rename my account to "Ashton Tan". I will keep a conflict-of-interest disclosure on my user page and will propose any changes to articles I am affiliated with on their Talk pages using {{tl|request edit}}, per WP:COI. Thank you.}}
```

> Replace `Ashton Tan` (both the `1=` field and inside the text) with your final pick. The
> `{{tl|request edit}}` wrapper is intentional so the template name shows as text, not a transclusion.

### B. Alternative — Special:GlobalRenameRequest (if you regain editing, or prefer the global form)

Go to `https://meta.wikimedia.org/wiki/Special:GlobalRenameRequest` and fill:

- **Current username:** `Ai.negaraku.md`
- **New username:** `Ashton Tan`
- **Reason:**
  > My current username implies a website/organization and does not meet the username policy. I am an
  > individual editor and would like to use my own name. I will continue to disclose my conflict of
  > interest on my user page and propose affiliated-topic edits via {{request edit}} on article Talk
  > pages, per WP:COI.

---

## 3. After the rename
1. Switch the account's recovery email to `ashton.tan@gmail.com` (Special:ChangeEmail).
2. Keep the existing COI disclosure on the (now renamed) user page.
3. Resume the Phase-2b workflow: propose citations via `{{request edit}}` on article Talk pages —
   never direct edits to affiliated topics. See `docs/plans/wikipedia-phase2b-playbook.md`.

**Reality check:** even with a clean username + perfect COI process, self-citations on Wikipedia are
often reverted as non-independent sources. Wikidata (done) + the other Tier-1 channels are
lower-friction; weigh effort before investing more here.
