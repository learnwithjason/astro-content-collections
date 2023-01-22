import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    slug: ({ defaultSlug, data }) => {
      return data.slug || defaultSlug;
    },
    schema: z.object({
      draft: z.boolean().default(false),
      date: z.date().transform((str) => new Date(str)),
      title: z.string(),
      slug: z.string().optional(),
      category: z.enum(['food', 'wisdom']),
      tags: z.array(z.string().optional()),
      share: z
        .object({
          image: z.string().optional(),
          title: z.string(),
          description: z.string(),
        })
        .strict(),
    }),
  }),
};
