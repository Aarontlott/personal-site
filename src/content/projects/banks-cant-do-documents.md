---
title: The Bank(s) Can’t Do Documents
summary: A homelab finance app that maps transaction exports from different banks into a common database, and categorises them with mapping rules. About 70% of transactions sort themselves on import. In regular use at home.
category: tool
status: shipped
year: 2025 – 2026
role: "Solo: design and full-stack development"
stack: [React-admin, Express, Docker, GitHub Actions, Cursor, ASP.NET Core (experiment)]
order: 5
---

## The problem

Every bank exports transactions differently, and it's a pain to categorise all the transactions-- we have a custom Coda workbook for tracking finances, an evolution from a very *very* complex Excel file.

## What I built

A full-stack web app on my homelab that:

- **Imports exports from several banks** into one common database. There's a setup wizard to help make it easier to map a new bank!
- **Categorises with mapping rules.** For example, “SQ \*Zest” becomes *Cafe*. On a good month roughly **70%** of transactions are categorised automatically on import.
- **Supports a multi-user workflow**, so either the wife or I can upload and categorise the transactions.

> Look, I won't say that budgeting is *fun*, but it is a lot easier.

It’s built with React-admin and Express, runs in Docker, and builds with GitHub Actions. I also set it up with an ASP.NET Core back end as an experiment.

## Why it’s here

It’s the same habit as my day job on a smaller scale: find the boring, repetitive part and make it disappear. Unlike my day-job tools, I’m also the user, so the feedback loop is very short. 

Getting to add a new favourite cafe to the "Dining" subcategory and *never having to worry about it again* is delightful. Well, delightful in the boring, doing your finances sort of way. Save your brain power for squinting at those indecipherable merchant names that don't really match what the business is named. 
