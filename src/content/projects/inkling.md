---
title: Inkling
summary: A daily literary guessing game. Markov chains scramble a passage from a classic novel; you guess the era, genre, author and book.
category: game
status: shipped
year: TODO
role: "Solo: design and development"
stack: [React, TypeScript, MUI, Vite, Markov chains]
links:
  - label: Source on GitHub
    url: https://github.com/Aarontlott/Inkling
  # TODO: add a "Play it" link if it's hosted somewhere
featured: true
order: 3
---

## The idea

Can you recognise a writer from their style alone? Inkling takes a classic work and runs it through a Markov chain. The result is scrambled nonsense that still *sounds* like the author: the vocabulary, the rhythm, the tics.

## How it plays

1. Read the scrambled snippet.
2. Answer four questions in order: **era**, **genre**, **author**, and finally **the work** itself.
3. Stuck? Flip through more snippets from the same book for clues.
4. Get all four right for a perfect score.

There’s a new puzzle every day, you can revisit past puzzles by date, and a built-in tutorial explains the rules and how Markov chains work.

## Under the hood

TODO: How you built the chains, picked the texts, made the daily puzzle deterministic, anything you're proud of.
