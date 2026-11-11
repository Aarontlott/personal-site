import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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
    category: z.enum(['work', 'game', 'tool', 'generator', 'writing', 'creative']),
    status: z.enum(['shipped', 'prototype', 'in-progress', 'unfinished']).default('shipped'),
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
