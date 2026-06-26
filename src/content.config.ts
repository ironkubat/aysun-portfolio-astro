import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string().optional(),
    location: z.string().optional(),
    architect: z.string().optional(),
    cover: z.string(),
    description: z.string(),
    gallery: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };