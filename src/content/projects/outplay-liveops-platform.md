---
title: LiveOps platform rebuild
summary: Sole front-end engineer rebuilding the internal tool that runs Outplay’s live games, from Ember.js to React-admin, without ever switching it off. One product, six audiences.
category: work
status: shipped
year: 2019 – present
role: Front-end engineer, Outplay Entertainment
stack: [React, React-admin, MUI, TypeScript, RRule, WebSockets, Playwright, Claude Code]
featured: true
order: 1
---

Outplay is a leading UK independent game studio. Its **LiveOps platform** is how the studio runs its live games: events, goals, rewards, schedules, localisation. Every producer, designer and QA tester relies on it every day, and the studio’s revenue depends on it working.

## The problem

The platform was built in Ember.js and had become slow to change, and the LiveOps team was seen as difficult to contact and work with.

## One product, six audiences

Designers, QA, producers, player support, engineers and artists, all together up to 90 people, share the same tool with overlapping but different goals. I led the product design conversations with each group and shaped role-specific workflows:

- **Designers** can create confidently.
- **Producers** can sign off safely.
- **Engineers** get raw data views without overwhelming everyone else.

## Rebuilding without switching it off

As the sole front-end engineer (with occasional full-stack help), I rebuilt the platform in React-admin while Ember and React ran **side by side in production**. The first React feature shipped in about **four weeks**. The legacy Ember stack was fully retired in **three years**.

## Design informed by watching people work

The best improvements came from sitting with people and seeing where they got stuck:

- **Localisation.** I noticed a colleague spending ages on one event, pasting page after page of localisation texts (500 in total). A CSV importer/exporter, built in about an hour, cut roughly **80 minutes of entry to about 10 seconds**.
- **Bulk add.** They were setting up 50 event goals and 50 rewards. It took 2–3 clicks each, 20–30 minutes all up. Bulk add brought that down to **about 30 seconds**.
- **Debugging.** I built a real-time, WebSocket-based client debugging tool. QA not having to go to yet another external tool to emit signals from test builds massively reduces context switching. 

## Scheduling designers trust

Event recurrence used simple offsets, so someone had to reschedule events by hand every week (or batch it every month) and check every quarter that nothing had drifted. I championed and drove the architecture to replace it with **RRule** (iCalendar recurrence rules), plus a **priority system** for overriding scheduled events.

Designers now set an event around the holidays once. The weekly scheduling tasks and the quarterly check are both gone.

> "Repeat in 7 days" becomes "Every Monday in June, July and August"

## Shipping smaller and faster

I brought DSDM / agile habits to the team, and CI/CD to the Git workflow, encouraging everyone toward smaller merge requests. I also championed AI-assisted engineering (Cursor, now Claude Code) for implementation and review on a large, hand-written legacy codebase (the aforementioned Live Ops tooling).

At p90, 2025 to 2026, measured by our in-house service that links GitLab merge requests to Jira tickets:

| | 2025 | 2026 | Improvement |
| --- | --- | --- | --- |
| Time to merge | 1.86 days | 0.9 days | 52% |
| Merge request size | 354 lines | 208 lines | 41% |
| Average deployment size | 1,756 lines | 551 lines | 69% |

## Opening the team up

Alongside the code, I set out to change how the rest of the studio saw the LiveOps team. The team went from hard to contact and work with, to open and eager to collaborate. I also mentored junior developers and set best practices for performance and maintainability.
