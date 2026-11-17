# Personal Site

Hello there, I'm Aaron :) thanks for coming to the repo, I hope you find whatever it is you're looking for. 

This was built with Claude, and then the AI-gen edges were painstakingly sanded off and shaped into something more bespoke. Something that I think sounds and looks more like me. 

Thanks for visiting though, please have a look around, and feel free to pop any thoughts over to me via email. 

-Aaron

## Color and font

Color palette: https://coolors.co/ffbe0b-222e50-007991-f2f4f3-6f1d1b

Font: Arvo

---

## Projects to highlight

(Proc gen toy) Victorian Nautical Archive
https://haldron.itch.io/victorian-nautical-archive

(Literary guessing game) Inkling
https://github.com/Aarontlott/Inkling

(Proc gen toy) Telepathy 
https://haldron.itch.io/telepathy

(Creative) Custom Gwent-inspired Cards
https://youtu.be/SZihU6g7ZHM

(Novels & Audiobook) The Machina, and The Machina: Arcology
https://mybook.to/TheMachinaSeries
https://www.audible.co.uk/pd/The-Machina-Audiobook/B08QDNMXQZ

## Things to link to

https://www.linkedin.com/in/aaron-rierson-lott-594bb776/

## Work projects

Digital Pattern Library, University of St Andrews
https://www.st-andrews.ac.uk/dpl/1.26.0/index.html


## Unfinished and unpublished work that's still cool

Gamebook Compiler
Tool for unfolding an Interactive Fiction story into an epub

Cargo Handler game
Unfinished wee game in Love2D about moving cargo around, local coop

---

## Working on the site

Astro 6, static output. The only client-side JavaScript is the copy-email speech bubble (`src/components/CopyEmail.astro`); everything works without it. Needs Node 22.12+.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

### Where things live

| To change…                                   | Edit                                      |
| -------------------------------------------- | ----------------------------------------- |
| Intro, skills, experience, links             | `src/data/site.ts`                        |
| A project (or add a new one)                 | `src/content/projects/<slug>.md`          |
| Colours, fonts, spacing                      | `src/styles/global.css` (`:root` tokens)  |
| Breakpoints (screen sizes)                   | `src/styles/breakpoints.css`              |
| Page layout / sections                       | `src/pages/*.astro`                       |
| The whoami terminal                          | `whoami` in `src/data/site.ts`            |

### Adding a project

Copy any file in `src/content/projects/`, rename it (the filename becomes `/work/<filename>/`), and edit the frontmatter:

- `category`: `work` | `game` | `tool` | `generator` | `writing` | `creative`
- `status`: `shipped` | `prototype` | `in-progress` | `unfinished` | `shelved`. Statuses listed in `workbenchStatuses` go in "On the workbench". To add a new category or status, add it to `categoryLabels` / `statusLabels` in `src/data/site.ts`; that's the only place.
- `featured: true` puts it on the home page
- `order`: lower numbers come first
- `draft: true` hides it

