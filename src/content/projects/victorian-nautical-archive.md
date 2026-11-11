---
title: Victorian Nautical Archive
summary: Consult a fussy archival docent and get back the record of a fictional coal-fired steamship from 1880–1917. Every ship is procedurally generated from the name you give it.
category: generator
status: prototype
year: "2024"
role: "Solo: design, writing, code"
stack: [HTML5, JavaScript, Procedural generation, Tracery-style grammars]
links:
  - label: Play on Itch.io
    url: https://haldron.itch.io/victorian-nautical-archive
featured: true
order: 2
---

Made for **PROCJAM 2024**.

## The idea

You give the archive a ship’s name. The docent goes rummaging through records from the 1880s to the 1910s and comes back with an index card: a coal-fired steamship from Britain, Europe, or the Americas, with a history to match. Cards can be saved as images.

## How it works

The same name always produces the same ship. Generation is deterministic, built from:

- **Seeded randomness**, so a name works as a seed
- **Dice rolls** for the ship’s stats and fortunes
- **Tracery-inspired text generation** for the prose

No generative AI. Just a lot of lists and a lot of rules.

## What I’d do next

TODO: What you learned, what you'd add, favourite generated ship.
