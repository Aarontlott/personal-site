---
title: Gamebook Compiler
summary: A tool that unfolds a branching interactive-fiction story into a choose-your-own-adventure style EPUB, so it reads like a classic gamebook on an e-reader.
category: tool
status: shelved
year: "2025"
role: Solo
stack: [JavaScript, TypeScript, EPUB]
order: 20
---

## The idea

Interactive fiction typically lives in engines and browsers, with the likes of Twine, ChoiceScript, and a large variety of offshoots and variants. 

Gamebooks live on paper: “turn to page 47”. 

This tool takes a branching story and compiles it into an EPUB of numbered, linked sections, so it works on an e-reader with no runtime.

## Status

Because I'm a TypeScript dev, I naturally setup a way of parsing a nested JSON object of different sections into a branching epub. 

It works on a small scale to create branches and compile into a functional ebook! Huzzah!


