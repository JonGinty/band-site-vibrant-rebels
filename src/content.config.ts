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
    summary: z.string(),
    image: z.string().optional(),
    order: z.number(),
  }),
});

const technical = defineCollection({
  loader: glob({ pattern: 'vibrant-rebels-technical-rider.md', base: './src/data' }),
});

export const collections = { band, members, technical };
