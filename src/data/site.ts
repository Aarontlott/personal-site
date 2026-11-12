/**
 * ─────────────────────────────────────────────────────────────
 *  SITE DATA — most of the wording on the site lives here.
 *  Edit this file to change your intro, stats, skills,
 *  experience and links. Projects live in src/content/projects/.
 *  Anything marked TODO is a placeholder for you to fill in.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Aaron Rierson-Lott',
  role: 'Senior front end engineer',
  location: 'Fife, Scotland',
  email: 'aarontlott@gmail.com',

  /** Shown in search results and link previews. */
  description:
    'Aaron Rierson-Lott is a senior front end engineer in Fife, Scotland, who turns complex problems into simple, useful systems. Also: procedural generators, games, and two novels.',

  /** Home page hero. Wrap the bit you want highlighted in `highlight`. */
  hero: {
    eyebrow: 'Senior front end engineer · Fife, Scotland',
    headlineStart: 'I turn complex problems into',
    highlight: 'simple, useful',
    headlineEnd: 'systems.',
    intro:
      "I build accessible websites and tools that make other people's work easier. Outside the day job I love make procedural generators, small games, and the occasional written story.",
  },

  /** The little terminal on the home page — a nod to the old site. */
  whoami: [
    { key: 'Name', value: 'Aaron Rierson-Lott' },
    { key: 'Occupation', value: 'Senior front end engineer' },
    { key: 'Skills', value: 'Turning complex problems into simple, useful systems' },
    { key: 'Location', value: 'Fife, Scotland' },
    { key: 'Status', value: 'Making creative stuff again :D' },
  ],

  /** "At a glance" numbers. Keep them short and true. */
  stats: [
    { value: '12+', label: 'years building for the web' },
    { value: '5', label: 'Game Jams, I ❤️ PROCJAM' },
    { value: '2', label: 'published novels (+ audiobook)' },
    { value: '1', label: 'Pear tree, partrige n/a'}
  ],

  /** "What I bring" cards. */
  strengths: [
    {
      title: 'Front end engineering',
      body:
        // TODO
        'Accessible, maintainable interfaces and the systems behind them: component libraries, pattern libraries, and the documentation that makes teams actually use them.',
      tags: ['TypeScript', 'React', 'HTML & CSS', 'Accessibility', 'Design systems', 'Vite', 'Astro'],
    },
    {
      title: 'Making things from scratch',
      body:
        // TODO
        'I like turning a vague idea into something people can play with. Procedural text, small games, tools for writers. Shipping side projects keeps the craft sharp.',
      tags: ['Procedural generation', 'Game prototyping', 'Lua / LÖVE', 'Interactive fiction', 'Writing'],
    },
  ],

  /** How you work — short principles, shown on the About page. */
  principles: [
    // TODO: these are drafts in your voice; rewrite freely.
    {
      title: 'Simple beats clever',
      body: 'The best system is the one the next person can understand on a Monday morning.',
    },
    {
      title: 'Build the tool, then use it',
      body: 'If a job gets done twice, it probably deserves a pattern, a component, or a script.',
    },
    {
      title: 'Accessible by default',
      body: 'Accessibility is part of “done”, not a ticket for later.',
    },
    {
      title: 'Ship, then polish',
      body: 'A working prototype in front of people beats a perfect plan in a doc.',
    },
  ],

  /** Experience timeline, most recent first. */
  experience: [
    {
      role: 'Senior front end engineer',
      org: 'Outplay Entertainment',
      dates: 'TODO – present',
      summary: 'TODO: one or two lines on what you own and the impact you have.',
    },
    {
      role: 'TODO: role',
      org: 'University of St Andrews',
      dates: 'TODO',
      summary: 'Built and maintained the Digital Pattern Library, the university’s shared front end design system.',
    },
  ],

  /** External profiles. Order = order shown. */
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aaron-rierson-lott-594bb776/' },
    { label: 'GitHub', url: 'https://github.com/Aarontlott' },
    { label: 'Itch.io', url: 'https://haldron.itch.io/' },
    { label: 'Novels', url: 'https://mybook.to/TheMachinaSeries' },
  ],

  /** Optional CV download. Drop a PDF in /public and set the path, e.g. '/aaron-rierson-lott-cv.pdf'. */
  cv: '' as string,
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
