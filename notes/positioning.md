# Site positioning notes

Captured from the two tailored CVs (Nov 2026):

- **`Aaron_Rierson-Lott_CV.docx`** is the source of truth. It has the truest human-written words, so facts, numbers and phrasing come from here first.
- **`design_engineer.pdf`** shows the **direction**: what I want to do next. The framing and emphasis come from here.

Use this file when writing or rewording anything on the site.

---

## The one-line pitch

> Senior front-end engineer who works where design and engineering meet.

The supporting line, in my own words, appears on both CVs:

> I enjoy creating things for people and, hopefully, making the world a brighter place.

The headline on the home page stays my own: *I turn complex problems into simple, useful systems.*

## What I want next

**Design engineering.** I want roles where I go from talking to users, through prototyping (Figma or an LLM) and deciding the information hierarchy, to shipping and iterating in code. Senior front-end, design-systems and accessibility-heavy roles are close neighbours.

The site should make a hiring manager for a **design engineer** role think "obviously yes". That means leading with:

1. **Design informed by watching people work.** This is the differentiator: I sit with the people who use my tools and fix where they actually get stuck.
2. **Design systems and composable components.** Digital Pattern Library; React-admin and MUI at Outplay.
3. **Accessibility as good design, not a checklist.** WCAG 2.0/2.1 AA, Fortune 50 healthcare and telecom, regular screen-reader testing.
4. **Shipping small and often, with good tooling.** Claude Code, Cursor, CI/CD, Playwright, smaller merge requests.
5. **One product, many audiences.** At Outplay, six user groups with overlapping but different goals share one tool.

The personal projects (generators, games, books) show the *making* instinct and the personality. They support the pitch; they don't lead it.

## Proof points (use these numbers, don't round them up)

| Claim | Number | Source |
| --- | --- | --- |
| Years of experience | 12 | both CVs |
| Localisation entry (CSV import/export, built in about an hour) | ~80 min → ~10 s, ~500 fields | docx |
| Bulk add for event goals and rewards (50 + 50) | 20–30 min → ~30 s | docx |
| Time to merge, p90, 2025 → 2026 | 1.86 → 0.9 days (−52%) | docx |
| Merge request size, p90 | 354 → 208 lines (−41%) | docx |
| Average deployment size | 1,756 → 551 lines (−69%) | docx |
| First React feature shipped in the Ember → React-admin rebuild | ~4 weeks | docx |
| Legacy Ember stack fully retired | after ~3 years | docx |
| LiveOps tool users | 40–90, six user groups, ~80-person studio | both |
| Team size | 4 engineers, 8 at peak | docx |
| DPL build time | ~1.5 min → ~20 s | both |
| WordPress multisite | 180+ sites | both |
| MOD web department | team of 5, 2 direct reports | both |
| Bank(s) app, auto-categorised on import | ~70% | PDF |

The metrics were measured by an in-house service that links GitLab merge requests to Jira tickets. Say so when quoting them.

## Voice

- First person, plain, a bit warm. Short sentences.
- Concrete over grand: "after seeing a colleague paste 500 fields by hand…" beats "passionate about UX".
- Quirky in the margins (terminal, 404, footer, pear tree), professional in the claims.
- British spelling (localisation, organise), except "WCAG", product names, and so on.
- "Front-end" is hyphenated, as on the CVs.

## Keep off the public site

- Phone number.
- Coworkers' names (except where I've already published them, e.g. Ben in the Gwent post).
- Internal Outplay screenshots or tool details beyond what's on the CV.

## Open questions / TODO

- [x] Inkling's live URL: https://daily-inkling.netlify.app/
- [x] Itch.io link for Don't Forget Your Lines: https://j01000001c.itch.io/dont-forget-your-lines
- [x] Add a CV PDF to `/public` and set `cv` in `src/data/site.ts`? (A public copy with the phone number removed.)
- [ ] Do I want a MOD Worldwide case study (Fortune 50 accessibility work), or is the timeline entry enough?
- [x] How openly to signal job-hunting: **gently**. Be confident and explicit about who I am and what I bring (like Stephen's site), but don't say "looking for work". The refreshed site and a CV download do that implicitly.
- [ ] Any shareable visuals for the LiveOps or DPL case studies (sketches, redacted screenshots, before/after flows)?
