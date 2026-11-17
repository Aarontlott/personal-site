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
order: 4
---

## The idea

Can you recognise a writer from their words alone? Inkling takes a classic work and breaks it down into a Markov chain. The result is scrambled nonsense that still, *kinda sorta sounds* like the author: the vocabulary, the rhythm, the tics.

<figure>
  <img src="/images/inkling/inkling-start.webp" width="1089" height="650" loading="lazy" alt="Inkling's start screen: the title 'Inkling' in a bold serif, the line 'Guess which literary work these nonsensical Markov-chain sentences are from', and two buttons, Play and How to play." />
  <figcaption>The start screen.</figcaption>
</figure>

## How it plays

1. Read the scrambled snippet.
2. Answer four questions in order: **era**, **genre**, **author**, and finally **the work** itself.
3. Stuck? Flip through more snippets from the same book for clues.
4. Get all four right for a perfect score.

There’s a new puzzle every day, you can revisit past puzzles by date, and a built-in tutorial explains the rules and how Markov chains work.

<figure>
  <img src="/images/inkling/inkling-finish.webp" width="1085" height="1223" loading="lazy" alt="A finished Inkling puzzle. The scrambled snippet reads 'Disposing these articles about him fast, and decree followed decree with that last expression looking as if it and a crash, and stood upright.' Below are the four questions with the player's answers: era, 18th Century, marked wrong; style, Realist / Social Novel, correct; author, Charles Dickens, correct; work, A Tale of Two Cities, correct. A 'Great job!' message shows a row of one red cross and three green ticks, and the reveal card reads A Tale of Two Cities by Charles Dickens, 19th Century Romantic and Victorian (1800–1900)." />
  <figcaption>A finished puzzle: three out of four. The era is always the one that gets me.</figcaption>
</figure>

## Under the hood

I built a rudimentary Markov text generator myself first, to understand how it worked, then switched to **Markovify**, a Python library, to generate the snippets the game actually uses.

The books were picked for two reasons: they’re by authors I’d read or who are famous enough to be guessable (Charles Dickens, Franz Kafka’s *The Metamorphosis*), and they’re freely available.

## How it turned out

I really enjoyed making it. If you already know the author or the book, spotting the style through the scramble is fairly straightforward. Other players, understandably, found it quite obtuse. XD

As an experiment, I love how it turned out: a whole, complete experience that feels (to me) like a good New York Times game. Clean, mobile-optimised, and very different.
