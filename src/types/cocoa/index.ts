import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const generalInformation = z.object({
  title: z.string(),
  mainImage: z.object({
    src: z.union([z.string(), z.custom<ImageMetadata>()]),
    alt: z.string(),
  }),
  rating: z.object({
    value: z.string(),
    stars: z.object({
      src: z.union([z.string(), z.custom<ImageMetadata>()]),
      alt: z.string(),
    }),
  }),
  sections: z
    .object({
      items: z
        .object({
          label: z.string(),
          value: z.string(),
        })
        .array(),
    })
    .array(),
});

const characteristics = z
  .object({
    title: z.string(),
    flavors: z
      .object({
        name: z.string(),
        percentage: z.string(),
        progress: z.number(),
        icon: z
          .object({
            src: z.string(),
            alt: z.string(),
          })
          .optional(),
        className: z.string().optional(),
        description: z.string(),
        color: z.string().optional(),
      })
      .array(),
    flavors_images: z
      .object({
        src: z.string(), //z.union([z.string(), z.custom<ImageMetadata>()]),
        alt: z.string(),
      })
      .optional(),
    assessment: z.object({
      title: z.string(),
      classification: z.object({
        image: z.union([z.string(), z.custom<ImageMetadata>()]),
        imageAlt: z.string(),
      }),
      equipment: z.object({
        image: z.union([z.string(), z.custom<ImageMetadata>()]),
        imageAlt: z.string(),
      }),
    }),
    information: z
      .object({
        title: z.string(),
        indicatorColor: z.string(),
        description: z.object({
          boldText: z.string(),
          additionalText: z.string(),
        }),
      })
      .array(),
    analysis: z.object({
      title: z.string(),
      image: z.union([z.string(), z.custom<ImageMetadata>()]),
      imageAlt: z.string(),
      description: z
        .object({
          text: z.string(),
          information_block: z.boolean().optional().default(false),
        })
        .array(),
    }),
  })
  .optional();

const cocoaMap = z
  .object({
    title: z.string(),
    content: z
      .discriminatedUnion('type', [
        z.object({
          type: z.literal('paragraph'),
          text: z.string(),
        }),
        z.object({
          type: z.literal('quote'),
          quote: z.string(),
          author: z.string(),
          border: z.boolean().optional(),
        }),
      ])
      .array(),
    image: z.object({
      src: z.union([z.string(), z.custom<ImageMetadata>()]),
      alt: z.string(),
      align: z.enum(['left', 'right']).default('right'),
    }),
  })
  .array();

const postHarvestBenefit = z.object({
  title: z.string(),
  content: z
    .discriminatedUnion('type', [
      z.object({
        type: z.literal('quote'),
        text: z.string(),
        border: z.boolean().optional(),
      }),
      z.object({
        type: z.literal('paragraph'),
        text: z.string(),
      }),
      z.object({
        type: z.literal('protocols'),
        protocols: z
          .object({
            title: z.string(),
            items: z
              .discriminatedUnion('category', [
                z.object({
                  category: z.literal('imageText'),
                  image: z.union([z.string(), z.custom<ImageMetadata>()]),
                  alt: z.string(),
                  text: z.string(),
                  size: z.number().optional(),
                }),
                z.object({
                  category: z.literal('keyValue'),
                  key: z.string(),
                  value: z.string().optional(),
                }),
                z.object({
                  category: z.literal('list'),
                  items: z.array(z.string()),
                }),
              ])
              .array(),
            mainImage: z
              .object({
                src: z.union([z.string(), z.custom<ImageMetadata>()]),
                alt: z.string(),
              })
              .array()
              .optional(),
            paragraph: z.string().optional(),
            video: z
              .object({
                src: z.string(),
                title: z.string(),
                text: z.string(),
              })
              .optional(),
          })
          .array(),
      }),
    ])
    .array(),
  backgroundColor: z.string().optional(),
});

const traceability = z.object({
  title: z.string(),
  subtitle: z.string(),
  content: z
    .object({
      type: z.enum(['paragraph', 'highlight', 'richText', 'multiImage', 'bold']),
      text: z.string(),
    })
    .array(),
  images: z
    .object({
      src: z.union([z.string(), z.custom<ImageMetadata>()]),
      alt: z.string(),
      useDialog: z.boolean().optional(),
    })
    .array(),
});

const location = z.object({
  title: z.string(),
  subtitle: z.string(),
  locationInfo: z.object({
    map: z.object({
      src: z.union([z.string(), z.custom<ImageMetadata>()]),
      alt: z.string(),
      link: z.string().url(),
    }),
    details: z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .array(),
  }),
  paragraphs: z.string().array(),
  ecology: z.object({
    title: z.string(),
    paragraphs: z.string().array(),
    images: z
      .object({
        src: z.union([z.string(), z.custom<ImageMetadata>()]),
        alt: z.string(),
      })
      .array(),
  }),
});

const history = z.object({
  title: z.string(),
  images: z
    .object({
      src: z.union([z.string(), z.custom<ImageMetadata>()]),
      alt: z.string(),
    })
    .array(),
  content: z
    .object({
      type: z.enum(['paragraph', 'highlight']),
      text: z.string(),
    })
    .array(),
  paragraphs: z.string().array(),
});

const socialResponsibility = z.object({
  title: z.string(),
  paragraphs: z.string(),
  images: z
    .object({
      src: z.union([z.string(), z.custom<ImageMetadata>()]),
      alt: z.string(),
    })
    .array(),
});

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
    generalInformation,
    characteristics,
    cocoaMap,
    postHarvestBenefit,
    traceability,
    location,
    history,
    socialResponsibility,
  }),
});

export const collections = { blog, template };
