import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        author: z.string().default("Luciano Montilla"),
        pfp: z.object({
            src: z.string(),
        }),
        publishDate: z.date(),
        tags: z.array(z.string()),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
    }),
});

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        image: z.object({
            src: z.string(),
        }),
    }),
});

export const collections = {
    posts: postsCollection,
    projects: projectsCollection,
};
