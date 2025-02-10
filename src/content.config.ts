import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		keywords: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const template = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		characteristics: z.object({
			flavors: z.object({
				name: z.string(),
				percentage: z.string(),
				progress: z.number(),
				icon: z.object({
					src: z.string(),
					alt: z.string(),
				}).optional(),
				className: z.string().optional(),
				description: z.string(),
				color: z.string().optional(),
			}).array(),

			flavors_image: z.any().optional(),

			assessment: z.object({
				classification: z.object({
					image: z.any(),
					imageAlt: z.string(),
				}),
				equipment: z.object({
					image: z.any(),
					imageAlt: z.string(),
				}),
			}),

			information: z.object({
				title: z.string(),
				indicatorColor: z.string(),
				description: z.object({
					boldText: z.string(),
					additionalText: z.string()
				})
			}).array(),

			analysis: z.object({
				image: z.any(),
				imageAlt: z.string(),
				description: z.object({
					text: z.string(),
					information_block: z.boolean().optional().default(false),
				}).array(),
			})
		}).optional(),
	}),
});

export const collections = { blog, template };
