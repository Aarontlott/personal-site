---
title: The Bank(s) Can’t Do Documents
summary: A homelab finance app that turns transaction exports from different banks into one database, then categorises them with mapping rules. About 70% of transactions sort themselves on import. In regular use at home.
category: tool
status: shipped
year: 2025 – 2026
role: "Solo: design and full-stack development"
stack: [React-admin, Express, Docker, GitHub Actions, Cursor, ASP.NET Core (experiment)]
order: 5
---

## The problem

Every bank exports transactions differently, and none of them are any help when you want to see where the money actually goes.

## What I built

A full-stack web app on my homelab that:

- **Imports exports from several banks** into one common database.
- **Categorises with mapping rules.** For example, “SQ \*Zest” becomes *Cafe*. About **70%** of transactions are categorised automatically on import.
- **Supports a two-user workflow**, so both of us can upload and categorise.

It’s built with React-admin and Express, runs in Docker, and deploys with GitHub Actions. I also tried an ASP.NET Core back end as an experiment.

## Why it’s here

It’s the same habit as my day job on a smaller scale: find the boring, repetitive part and make it disappear. Unlike my day-job tools, I’m also the user, so the feedback loop is very short.
