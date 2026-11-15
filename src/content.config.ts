import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryLabels, statusLabels } from './data/site';

/** Turn a labels object's keys into a Zod enum, so site.ts is the single source of truth. */
const keysOf = <T extends Record<string, string>>(obj: T) =>
  Object.keys(obj) as [keyof T & string, ...(keyof T & string)[]];

/**
 * Projects: one Markdown file per project in src/content/projects/.
 * The filename becomes the URL: inkling.md → /work/inkling/
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** One or two sentences. Shown on cards and at the top of the project page. */
    summary: z.string(),
    /** Allowed values: the keys of categoryLabels in src/data/site.ts */
    category: z.enum(keysOf(categoryLabels)),
    /** Allowed values: the keys of statusLabels in src/data/site.ts */
    status: z.enum(keysOf(statusLabels)).default('shipped'),
    /** Free text so ranges work: "2024", "2020–2022" */
    year: z.string().optional(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    /** Show on the home page "Selected work" grid. */
    featured: z.boolean().default(false),
    /** Lower numbers come first. */
    order: z.number().default(100),
    /** Drafts are hidden everywhere. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
