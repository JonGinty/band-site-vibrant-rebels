import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const band = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/band' }),
  schema: z.object({
    summary: z.string(),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/members' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { band, members };
