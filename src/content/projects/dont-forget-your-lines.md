---
title: Don’t Forget Your Lines
summary: A real-time co-op game-jam game where players work together to perform ritual sequences. I built the web phone controller that every player holds, talking to a Unity host over WebSockets.
category: game
status: shipped
year: "2026"
role: Phone controller (web client), team jam
stack: [TypeScript, WebSockets, Mobile web UI]
links:
  - label: My phone controller
    url: https://haldron.itch.io/dont-forget-your-lines-client
  - label: The game (Unity host)
    url: https://j01000001c.itch.io/dont-forget-your-lines
order: 6
---

Made for the **Outplay Game Jam 2026**.

## The idea

A group game for the living room. Everyone works together to perform ritual sequences, and if someone forgets their lines, things go wrong.

## My part: the phone controller

The game runs on a shared screen (the **Unity host**, built by a teammate). Every player joins from their own phone, and that’s the bit I built: a **TypeScript web controller** that talks to the host over **WebSockets** in real time.

There’s no install and no app store: open the page and you’re in. Designing a controller for a small screen, used mid-game with friends shouting at you, is a fun interface problem in its own right. It has to be glanceable, forgiving of fat thumbs, and never make you look down for long.

## Notes

<!-- TODO: who you made it with, what you'd change, a favourite moment from playtesting. -->
