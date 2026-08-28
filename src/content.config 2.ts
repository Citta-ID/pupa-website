import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'id', 'ko']),
    slug: z.string(),
    image: z.string().optional(),
    description: z.string().optional(),
    translationKey: z.string().optional(),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'id', 'ko']),
    slug: z.string(),
    image: z.string().optional(),
    description: z.string().optional(),
    translationKey: z.string().optional(),
  }),
});

export const collections = { blog, stories };
