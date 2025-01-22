import { defineCollection, z } from "astro:content";

const product = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        image: z.string(),
        price: z.coerce.number(),
        description: z.string(),
        category: z.string(),
        brand: z.string(),
    }),
});

export const collections_product = { product };

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        author: z.string(),
    }),
});

export const collections_blog = { blog };





