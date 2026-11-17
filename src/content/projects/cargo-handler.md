---
title: Cargo Handler
summary: A wee local co-op game about moving cargo around, without dropping too much of it. Unfinished, but fun to play.
category: game
status: unfinished
year: "2025"
role: Solo
stack: [LÖVE (Love2D), Lua]
order: 21
---


## The idea

You and friends drive little forklifts around a warehouse, grabbing cargo and getting it where it needs to go. Local co-op, made in LÖVE over a couple of weekends.

<figure>
  <img src="/images/cargo-handler/first-shift.webp" width="800" height="876" loading="lazy" alt="Top-down pixel-art view of a warehouse in the level 'Warehouse Shift 1: Your first shift at the warehouse'. Rows of racking are stacked with crates, and a single small forklift near the top left leaves a curving trail of tyre tracks behind it." />
  <figcaption>Level 1, just getting started: your first shift at the warehouse, and the first set of little tracks.</figcaption>
</figure>

## What I did love

- **The simple vehicle movement.** It feels good.
- **The physics of grabbing cargo and moving it around.** And the little tracks the forklifts leave behind.
- **Feeling like you’re a smaller part of something bigger.**

## What I don’t love

- The UI system is a nightmare (I miss web...).
- Cargo is a pain to organise and gets borked easily.
- Levels are a nightmare to make, update and edit (tooling would make this better).
- Levels feel very static.
- The player input system was really awkward.
- The menu system is terrible.
- Cargo spawning is clunky to set up.

## If I picked it back up

- **Keep the core idea simple.** Just the small forklifts, and focus on making the multiplayer fun and interesting.
- **Vector forklifts, or something like it.** No jaggy edges.
- **A better UI and menu system** to build on.
- **Use Tiled for level flow,** and come up with some good base levels.
- **Dynamic levels from the start.** An input/output system means fewer levels that are very replayable.
- **Cargo “organisation” zones?** Maybe things slowly snap to a grid in those areas.

<figure>
  <img src="/images/cargo-handler/carrying-cargo.webp" width="800" height="876" loading="lazy" alt="The same warehouse 35 seconds in. A forklift carrying a crate drives diagonally between the racks, its tracks curving behind it." />
  <figcaption>Carrying a crate between the racks. The tracks are a favourite bit.</figcaption>
</figure>

<figure>
  <img src="/images/cargo-handler/with-friends.webp" width="800" height="876" loading="lazy" alt="The warehouse three minutes in, with two forklifts, labelled 1 and 2. Crates have spilled out of a rack into an untidy pile on the floor, and a few more sit askew in a delivery bay." />
  <figcaption>After not so long with a friend, the cargo has been thoroughly borked.</figcaption>
</figure>
