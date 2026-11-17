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

<figure>
  <img src="/images/telepathy/welcome.webp" width="704" height="767" loading="lazy" alt="Telepathy's welcome screen. A bar at the top asks 'When are you going out?' with a date and time picker, a location menu set to 'wander', and a 'wander somewhere' button. Below, an intro card titled 'Telepathy: an experience of reading minds' explains that you can read the thoughts of people around you, but not everyone thinks the same way: some in full sentences, some in fragments, emotions or images." />
  <figcaption>The welcome screen. Pick a time, then wander, or choose somewhere to go.</figcaption>
</figure>

Everyone you pass on the street is thinking *something*, struggling with something, and we all think in very different ways. Telepathy ask the question of, "What would it *actually* be like in someone else's head?". Wander the city, or choose a location and a time of day, then click on the people you meet. Their thoughts come back as full sentences, half-formed fragments, emotions, or images. Often a mix of all or some of those.

<figure>
  <img src="/images/telepathy/cafe-counter-trip.webp" width="732" height="1048" loading="lazy" alt="A visit to the cafe counter, described as 'an adequately sized place, but chaotic', with three people: Jesselyn, Christal and Bobbye. Christal is selected. Her thoughts are a row of tags (neutral, positive, conflict), and an open conflict shows a stream of thoughts: 'I don't trust what they're saying about friendship. Neither do they.', 'Everyone pulling friendship their own way. Something's gonna break.', 'I watch everyone fight over friendship. It's getting ugly.' Then a visual: 'Both sides circling friendship, ready to grab.'" />
  <figcaption>A trip to the cafe counter. Christal is having a complicated day about “friendship”.</figcaption>
</figure>

## How it works

The same toolkit as the [Victorian Nautical Archive](/work/victorian-nautical-archive/): seeded RNG, dice rolls, and Tracery-inspired text mashing, fed by large hand-written lists of interactions and thoughts. No generative AI.

First I generate a scene; choose from a list of places, get a "vibe", based on that vibe-- is it busy?-- choose how many people to see.

<figure class="figure--stack">
  <img src="/images/telepathy/place-cafe-packed.webp" width="699" height="377" loading="lazy" alt="Cafe counter: 'it's a decently sized place, but surprisingly packed', with six people: Kathryne, Katinka, Coralie, Danielle, Ted and Francoise." />
  <img src="/images/telepathy/place-bus-stop-calm.webp" width="685" height="299" loading="lazy" alt="Bus stop: 'it's a decently sized place, and nicely calm', with one person: Eloise." />
  <img src="/images/telepathy/place-bus-stop-crowded.webp" width="691" height="361" loading="lazy" alt="Bus stop: 'it's a comfortably sized place, but crowded', with six people: Faustina, Bertha, Susette, Ashien, Joya and Leesa." />
  <figcaption>Each visit rolls a vibe, and the vibe decides the crowd: a packed cafe, a calm bus stop with just Eloise, and the same bus stop later on.</figcaption>
</figure>

Each person gets a bunch of info; name, who they work with, family, some ideas, things, places and "work things/places". And then we get to see what kind of interactions they have with those things. 

Well, rather I randomly roll through options for different kinds of interactions; Good, neutral and bad. We get an "interpersonal conflict, misunderstanding", at work and the idea of "betrayal".

<figure>
  <img src="/images/telepathy/thought-tags.webp" width="730" height="280" loading="lazy" alt="Christal's Thoughts: six tags in two rows, labelled neutral, positive, conflict, conflict, neutral and conflict." />
  <figcaption>A handful of things on someone’s mind, each rolled as positive, neutral or conflict.</figcaption>
</figure>

A "person" has a small number of things to think about, and their particular style of thinking chooses how we "see" what their thoughts about those conflicts are. 

<figure>
  <img src="/images/telepathy/thoughts-cherida.webp" width="730" height="641" loading="lazy" alt="Cherida's Thoughts, with a positive thought open. It shows a full thought, 'I watch everyone get the lake done. Maybe this works.', a wave of feelings, 'relieved and hopeful sinking in, real.' and 'Unexpected hopeful, welcome.', and another thought, 'I feel something shift about the lake. Less us and them.'" />
  <figcaption>Cherida thinks differently: full thoughts and a wave of feelings. Something about the lake is finally going well.</figcaption>
</figure>

## Notes

This was a bit much to bite off for a Proc Jam... but I'm reasonably happy with how it turned out. I'm not convinced it's super effective, and it certainly isn't an insight into how people actually think, but it's interesting. Basis for some other game, tool, or something where I have great seeds for complex thoughts? Perhaps.
