---
title: Inkling
summary: An open-source daily literary quiz. Markov chains scramble a passage from a classic novel; you guess the era, genre, author and book.
category: game
status: shipped
year: "2025"
role: "Solo: design and development"
stack: [React, TypeScript, MUI, Vite, Python, Markovify]
links:
  - label: Play a puzzle
    url: https://daily-inkling.netlify.app/
  - label: Source on GitHub
    url: https://github.com/Aarontlott/Inkling
featured: true
order: 3
---

## The idea

Can you recognise a writer from their words alone? Inkling takes a classic work and breaks it down into a Markov chain. The result is scrambled nonsense that still, *kinda sorta sounds* like the author: the vocabulary, the rhythm, the tics.

## How it plays

1. Read the scrambled snippet.
2. Answer four questions in order: **era**, **genre**, **author**, and finally **the work** itself.
3. Stuck? Flip through more snippets from the same book for clues.
4. Get all four right for a perfect score.

There’s a new puzzle every day, you can revisit past puzzles by date, and a built-in tutorial explains the rules and how Markov chains work.

## Under the hood

I built a rudimentary Markov text generator myself first, to understand how it worked, then switched to **Markovify**, a Python library, to generate the snippets the game actually uses.

The books were picked for two reasons: they’re by authors I’d read or who are famous enough to be guessable (Charles Dickens, Franz Kafka’s *The Metamorphosis*), and they’re freely available.

## How it turned out

I really enjoyed making it. If you already know the author or the book, spotting the style through the scramble is fairly straightforward. Other players, understandably, found it quite obtuse. XD

As an experiment, I love how it turned out: a whole, complete experience that feels (to me) like a good New York Times game. Clean, mobile-optimised, and very different.
