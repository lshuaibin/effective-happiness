import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['tech', 'reading-notes', 'essay']),
    excerpt: z.string().optional(),
  }),
});

export const collections = { posts };
