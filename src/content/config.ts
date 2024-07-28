import { z, defineCollection } from 'astro:content';

const team = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        role: z.string(),
        about: z.string(),
        image: z.string(),
    }),
});


const values = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        body: z.string(),
    }),
});

export const collections = {
    'team': team,
    'values': values,
};
