---
title: Victorian Nautical Archive
summary: Consult an archival docent and get a record of a fictional coal-fired steamship from 1880–1910s. Every ship is procedurally generated from the name you give it.
category: generator
status: prototype
year: "2024"
role: "Solo: design, writing, code"
stack: [TypeScript, Vite, Seeded procedural generation, Tracery-style grammars]
links:
  - label: Enquire about a ship (Itch.io)
    url: https://haldron.itch.io/victorian-nautical-archive
featured: true
order: 3
---

<figure class="figure--output">
  <p class="figure__label">Example output</p>
  <img src="/images/vna/steamship-aberdeen-export.webp" width="1280" height="720" alt="A generated archive record for the steamship Aberdeen, styled like a 1900s engineering magazine. Name: Aberdeen. Nationality: British. Type: Freight. Launched 1889 by John Brown and Company. A dotted-leader specification table lists length 540 feet, beam 68, draft 38, gross tonnage 10,465 tons, net tonnage 7,325, crew 110, two engines, designed speed 14 knots, four single and four double-ended boilers, and 1,280 tons of coal bunkers. Below, a two-column write-up describes the twin-screw freight ship built in Clydebank for service between Glasgow and Buenos Aires." />
  <figcaption>A ship record exported from the archive: the steamship <em>Aberdeen</em>, 1889. Entirely fictional, generated from its name.</figcaption>
</figure>

Made for **PROCJAM 2024**.

## The idea

You give the archive a ship’s name. The docent goes rummaging through records from the 1880s to the 1910s and comes back with an index card: a coal-fired steamship with a history to match. Cards can be saved as images.

I wanted to make a generator focusing on coal-fired steamships of roughly this era. I’ve always thought they were cool, hence 1880–1910s. Limiting the timeframe also simplified the guesswork, because there were fewer year-on-year technological improvements to account for. I ran out of time for proper global ports and shipping, so it covers Europe, the UK, and North and South America.

## How it works

All ships are generated deterministically and are entirely fictional. Where realistic measurements and estimations exist, I’ve applied them. For the rest, I’ve guessed wildly in the general direction.

> There’s no generative AI here. 

It is essentially:

- **Seeded RNG**, so the same name always gives the same ship
- **Dice rolling** for the ship’s stats and fortunes
- **Tracery-inspired text mashing** for the prose

## Inspiration

The look and the numbers came from engineering magazines of the period, like this May 1902 issue of *Marine Engineering* on the Atlantic Transport Company’s *Minnetonka*. A very special shout-out to the [r/OceanLinerArchitect](https://www.reddit.com/r/OceanLinerArchitect/) subreddit, too.

<figure>
  <img src="/images/vna/minnetonka-illustration.webp" width="1080" height="722" loading="lazy" alt="A period illustration of a large steamship with a single funnel and four masts, ploughing through rough seas past a small sailing boat." />
  <figcaption>Steamship <em>Minnetonka</em>, built by Harland and Wolff for the Atlantic Transport Line. <em>Marine Engineering</em>, May 1902.</figcaption>
</figure>

<figure>
  <img src="/images/vna/minnetonka-sectional-elevation.webp" width="1200" height="803" loading="lazy" alt="A sectional drawing of the Minnetonka showing the capacity of each hold in cubic feet, above a table of specifications including length, tonnage, engines and boilers." />
  <figcaption>Sectional elevation and specifications. Tables like this are where the generator’s numbers come from.</figcaption>
</figure>

<figure>
  <img src="/images/vna/twin-screw-steamer-profile.webp" width="1400" height="346" loading="lazy" alt="A labelled cutaway profile of a twin-screw passenger steamer, showing cargo holds, boilers, engine rooms, coal bunkers, and first and second class accommodation." />
  <figcaption>Profile of a twin-screw passenger steamer for ocean navigation.</figcaption>
</figure>

<figure class="figure--narrow">
  <img src="/images/vna/minnetonka-article.webp" width="800" height="1196" loading="lazy" alt="A page of dense two-column magazine text describing the Minnetonka’s engines, pumps, refrigeration and steering gear." />
  <figcaption>The write-up itself. Stalls for 804 head of cattle, and a reassurance that the cattle are “in nowise objectionable to the passengers”.</figcaption>
</figure>

I hope you enjoy it ❤️

