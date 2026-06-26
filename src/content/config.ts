import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['jam', 'personal', 'academic', 'professional']),
    status: z.enum(['released', 'wip']).default('released'),
    cover: z.string().optional(),
    videoUrl: z.string().optional(),
    year: z.number(),
    engine: z.string().optional(),
    role: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    itchUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    steamUrl: z.string().url().optional(),
    team: z.string().optional(),
    featured: z.boolean().default(false),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
    order: z.number().optional(),
    about: z.array(z.string()).optional(),
    contributions: z.array(z.object({
      title: z.string(),
      description: z.string(),
      items: z.array(z.string()),
    })).optional(),
  }),
});

export const collections = { projects };
