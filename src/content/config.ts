import { z, defineCollection } from 'astro:content';

const teamCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        role: z.string(),
        about: z.string(),
        image: z.string(),
    }),
});

export const collections = {
    'team': teamCollection,
};
