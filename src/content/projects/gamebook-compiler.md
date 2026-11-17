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

> Gamebooks live on paper: “turn to page 47”. 

This tool takes a branching story and compiles it into an EPUB of linked sections, so it works on an e-reader with no runtime. 

The moonshot idea was being able to go through a story and end up at the end with a "finish code" that records what happened in a simple string, what choices were made, etc, and then being able to get a follow up story after that. Maybe tied to being able to do some combination of Proc. Gen and LLM text generation. That feels like a better, more controllable, approach than the open ended LLM-guided roleplaying stories-- they always felt too easy to nudge off topic, and plus, required a computer and/or internet connection.

## Status

Because I'm a TypeScript dev, I naturally setup a way of parsing a nested JSON object of different sections into a branching epub. 

It works on a small scale to create branches and compile into a functional ebook! Huzzah!

The idea is really neat and might have some more legs, but I shelved it somewhere lost between:

- You dive ever deeper into figuring out how to cull branches, and make this not a 10,000 page ebook...
- You get lost in developing better branching-narrative tooling...
- Figure out how to get an LLM to generate new texts and choices, based on your choices through the story...
- A new shiny project glimmers in the tall grass of your mind...

<figure class="figure--stack" style="--figure-max: 500px">
  <img src="/images/gamebook-compiler/kindle-start.webp" width="1000" height="1333" loading="lazy" alt="A hand holding a Kindle e-reader showing a section titled 'start': 'You are part of Survey Team Alpha, sent to catalog the flora and fauna of Kepler-442c. Your shuttle has just landed in a vast crystalline forest where the trees seem to hum with an otherworldly energy.'" />
  <figcaption>The story start: the opening section, as it reads on the Kindle.</figcaption>
</figure>

<figure class="figure--stack" style="--figure-max: 500px">
  <img src="/images/gamebook-compiler/kindle-choices.webp" width="1000" height="1333" loading="lazy" alt="The same Kindle further into the section, which ends with three underlined links: 'I examine the crystal trees more closely.', 'I check my equipment readings.' and 'I look around for signs of animal life.'" />
  <figcaption>The end of a section. Each choice is a plain link to another section, so there’s nothing to run.</figcaption>
</figure>

<figure class="figure--stack" style="--figure-max: 500px">
  <img src="/images/gamebook-compiler/kindle-contents.webp" width="1000" height="1333" loading="lazy" alt="The Kindle's Go To menu listing the compiled sections as chapters: Survey Team Alpha, start, 'exploration I look around for s…', 'exploration I check my equip…', 'exploration I examine the crys…', investigate markings, and delayed report, each with a location number." />
  <figcaption>The resulting table of contents, with every branch compiled into its own section.</figcaption>
</figure>


