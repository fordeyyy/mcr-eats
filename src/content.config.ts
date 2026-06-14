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
    moods: z.array(z.string()).optional(),
    summary: z.string().optional(),
    dishes: z.array(z.string()).optional(),
    openDays: z.array(z.string()).optional(),
  }),
});

const neighbourhoods = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/neighbourhoods' }),
  schema: z.object({
    slug: z.string(),
    label: z.string(),
    strapline: z.string(),
    pullQuote: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    introTitle: z.string(),
    introText: z.string(),
  }),
});

export const collections = { restaurants, neighbourhoods, pages };
