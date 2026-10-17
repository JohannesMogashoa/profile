import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
	loader: glob({ base: "./src/content/articles", pattern: "**/*.md" }),
	schema: z.object({
		description: z.string(),
		draft: z.boolean().default(false),
		image: z.url().optional(),
		publishedAt: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		title: z.string(),
		url: z.url(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
	schema: z.object({
		description: z.string(),
		draft: z.boolean().default(true),
		featured: z.boolean().default(false),
		links: z
			.object({
				code: z.url().optional(),
				website: z.url().optional(),
			})
			.default({}),
		status: z.enum(["in-progress", "live", "archived"]),
		stack: z.array(z.string()),
		title: z.string(),
	}),
});

export const collections = { articles, projects };
