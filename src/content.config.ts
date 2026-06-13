import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const restaurants = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/restaurants' }),
  schema: z.object({
    name: z.string(),
    neighbourhood: z.string(),
    cuisine: z.string(),
    price: z.string(),
    address: z.string(),
    website: z.string().optional(),
    mapsUrl: z.string().optional(),
    image: z.string().optional(),
    pick: z.boolean().optional(),
  }),
});

export const collections = { restaurants };
