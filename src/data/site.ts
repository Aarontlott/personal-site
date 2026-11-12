/**
 * ─────────────────────────────────────────────────────────────
 *  SITE DATA — most of the wording on the site lives here.
 *  Edit this file to change your intro, stats, skills,
 *  experience and links. Projects live in src/content/projects/.
 *  Positioning and proof points: notes/positioning.md
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Aaron Rierson-Lott',
  role: 'Senior front-end engineer',
  location: 'Fife, Scotland',
  email: 'aarontlott@gmail.com',

  /** Shown in search results and link previews. */
  description:
    'Aaron Rierson-Lott is a senior front-end engineer in Fife, Scotland, working where design and engineering meet: design systems, accessible interfaces, and tools shaped around the people who use them.',

  /** Home page hero. */
  hero: {
    eyebrow: 'Senior front-end engineer · Where design meets code',
    headlineStart: 'I turn complex problems into',
    highlight: 'simple, useful',
    headlineEnd: 'systems.',
    intro:
      "I design and build accessible websites and tools that make other people's work easier, and I do it by sitting with the people who use them. Outside the day job I love making procedural generators, small games, and the occasional written story.",
  },

  /** The little terminal on the home page — a nod to the old site. */
  whoami: [
    { key: 'Name', value: 'Aaron Rierson-Lott' },
    { key: 'Occupation', value: 'Senior front-end engineer' },
    { key: 'Skills', value: 'Turning complex problems into simple, useful systems' },
    { key: 'Interests', value: 'Design engineering, design systems, accessibility' },
    { key: 'Location', value: 'Fife, Scotland' },
    { key: 'Status', value: 'Making creative stuff again :D' },
  ],

  /** "At a glance" numbers. Keep them short and true. */
  stats: [
    { value: '12+', label: 'years building for the web' },
    { value: '5', label: 'Game Jams, I ❤️ PROCJAM' },
    { value: '2', label: 'published novels (+ audiobook)' },
    { value: '1', label: 'Pear tree, partridge n/a' },
  ],

  /** "What I bring" cards. Numbers here come from notes/positioning.md. */
  strengths: [
    {
      title: 'Design through to code',
      body:
        'Talk to the people who use it, prototype (Figma or an LLM), settle the information hierarchy, then ship and iterate. After watching a colleague paste 500 localisation fields by hand, I built an importer that turned 80 minutes into 10 seconds.',
      tags: ['User research', 'Figma', 'Prototyping', 'Information hierarchy', 'React', 'TypeScript'],
    },
    {
      title: 'Design systems & accessibility',
      body:
        'Lead developer on the University of St Andrews’ Digital Pattern Library, and WCAG AA delivery for Fortune 50 healthcare and telecom clients, tested with screen-reader users. Accessibility is part of good design, not a checklist.',
      tags: ['Design systems', 'WCAG 2.1 AA', 'Screen-reader testing', 'React-admin', 'MUI', 'CSS / SASS'],
    },
    {
      title: 'Shipping small and often',
      body:
        'Smaller merge requests, good CI, and AI-assisted engineering (Cursor, now Claude Code) on a large legacy codebase. At Outplay the team’s p90 time to merge halved, from 1.86 to 0.9 days.',
      tags: ['Claude Code', 'Cursor', 'GitLab / GitHub CI/CD', 'Playwright', 'Vite', 'Node.js'],
    },
    {
      title: 'Making things from scratch',
      body:
        'I like turning a vague idea into something people can play with: procedural text, game-jam games, tools for writers, two novels. Shipping side projects keeps the craft sharp.',
      tags: ['Procedural generation', 'Game jams', 'WebSockets', 'Unity', 'Writing'],
    },
  ],

  /** How you work — short principles, shown on the About page. */
  principles: [
    {
      title: 'Sit with the people who use it',
      body: 'Watch where they actually get stuck. The best fixes are usually boring, specific, and a huge relief.',
    },
    {
      title: 'Simple beats clever',
      body: 'The best system is the one the next person can understand on a Monday morning.',
    },
    {
      title: 'Accessibility is good design',
      body: 'WCAG AA is part of “done”, tested with real assistive tech, not a ticket for later.',
    },
    {
      title: 'Ship small and often',
      body: 'Small merge requests, quick feedback, and a working thing in front of people beats a perfect plan in a doc.',
    },
  ],

  /** Experience timeline, most recent first. */
  experience: [
    {
      role: 'Senior front-end engineer',
      org: 'Outplay Entertainment',
      dates: 'Sep 2019 – present',
      summary:
        'Sole front-end engineer on the rebuild of the studio’s LiveOps platform, from Ember.js to React-admin. One tool, six audiences: designers, QA, producers, player support, engineers and artists.',
      link: '/work/outplay-liveops-platform/',
    },
    {
      role: 'Web Systems Director / Managing Director',
      org: 'MOD Worldwide / The Moderati',
      dates: 'Sep 2017 – Jun 2019',
      summary:
        'Led the web department (team of 5) while staying hands-on in React. Delivered WCAG 2.0 AA work for Fortune 50 healthcare and telecom clients, and set up and ran the UK office remotely from Scotland.',
    },
    {
      role: 'Web developer',
      org: 'University of St Andrews',
      dates: 'Sep 2015 – Sep 2017',
      summary:
        'Lead developer on the Digital Pattern Library, the design system behind the university’s public website. Ran a 180+ site WordPress multisite.',
      link: '/work/st-andrews-digital-pattern-library/',
    },
    {
      role: 'Web developer',
      org: 'Agencies & start-ups, Southern California',
      dates: '2014 – 2015',
      summary:
        'Soap Creative, Cinovus (VR and Arduino hardware), and Beacon Leads: responsive sites, prototypes and full-stack tools.',
    },
  ] as { role: string; org: string; dates: string; summary: string; link?: string }[],

  /** Education, shown on the About page. */
  education: 'B.S. Computer Information Systems, California Polytechnic University, Pomona (2015)',

  /** External profiles. Order = order shown. */
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aaron-rierson-lott-594bb776/' },
    { label: 'GitHub', url: 'https://github.com/Aarontlott' },
    { label: 'Itch.io', url: 'https://haldron.itch.io/' },
    { label: 'Novels', url: 'https://mybook.to/TheMachinaSeries' },
  ],

  /** Optional CV download. Drop a PDF in /public and set the path, e.g. '/aaron-rierson-lott-cv.pdf'. */
  cv: 'aaron-rierson-lott-cv.pdf' as string,
};

/** Main navigation. */
export const nav = [
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

/** Friendly labels for project categories and statuses. */
export const categoryLabels = {
  work: 'Case study',
  game: 'Game',
  tool: 'Tool',
  generator: 'Generator',
  writing: 'Writing',
  creative: 'Creative',
} as const;

export const statusLabels = {
  shipped: 'Shipped',
  prototype: 'Prototype',
  'in-progress': 'In progress',
  unfinished: 'Unfinished',
} as const;
