---
title: Telepathy
summary: Wander the city, pick a place and a time, and read the thoughts of passers-by. Sentences, fragments, feelings and images, all procedurally generated.
category: generator
status: prototype
year: "2025"
role: "Solo: design, writing, code"
stack: [HTML5, JavaScript, Procedural generation, Tracery-style grammars]
links:
  - label: Play on Itch.io
    url: https://haldron.itch.io/telepathy
order: 7
---

Made for **PROCJAM 2025**.

## The idea

Everyone you pass on the street is thinking *something*, struggling with something, and we all think in very different ways. Telepathy ask the question of, "What would it *actually* be like in someone else's head?". Wander the city, or choose a location and a time of day, then click on the people you meet. Their thoughts come back as full sentences, half-formed fragments, emotions, or images. Often a mix of all or some of those.

## How it works

The same toolkit as the [Victorian Nautical Archive](/work/victorian-nautical-archive/): seeded RNG, dice rolls, and Tracery-inspired text mashing, fed by large hand-written lists of interactions and thoughts. No generative AI.

First I generate a scene; choose from a list of places, get a "vibe", based on that vibe-- is it busy?-- choose how many people to see.

Each person gets a bunch of info; name, who they work with, family, some ideas, things, places and "work things/places". And then we get to see what kind of interactions they have with those things. 

Well, rather I randomly roll through options for different kinds of interactions; Good, neutral and bad. We get an "interpersonal conflict, misunderstanding", at work and the idea of "betrayal".

A "person" has a small number of things to think about, and their particular style of thinking chooses how we "see" what their thoughts about those conflicts are. 

## Notes

This was a bit much to bite off for a Proc Jam... but I'm reasonably happy with how it turned out. I'm not convinced it's super effective, and it certainly isn't an insight into how people actually think, but it's interesting. Basis for some other game, tool, or something where I have great seeds for complex thoughts? Perhaps.
