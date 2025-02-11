import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

// Define the "projects" collection
const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    // image: z.string().optional(),
  }),
});


export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};

