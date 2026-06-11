import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectsCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      worksImage1: z.object({
        url: z.string(),
        alt: z.string()
      }),
      worksImage2: z.object({
        url: z.string(),
        alt: z.string()
      }),
    }).passthrough()
});

export const collections = {
  projects: projectsCollection,
};
