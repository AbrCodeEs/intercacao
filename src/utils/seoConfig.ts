// Type imports
import type { ManifestOptions } from 'vite-plugin-pwa';

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  baseURL: 'https://intercacao.com/', // Production URL.
  description:
    'Web Oficial de Intercacao, empresa de cacao y chocolate, especializada en la producción de cacao de calidad.',
  type: 'website',
  image: {
    url: 'https://cdn.lavelada.dev/og.jpg',
    alt: 'Intercacao',
    width: 705,
    height: 606,
  },
  siteName: 'Intercacao',
  twitter: {
    card: 'summary_large_image',
    site: 'Intercacao',
  },
};

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: 'Intercacao',
  short_name: 'Intercacao',
  description:
    'Web Oficial de Intercacao, empresa de cacao y chocolate, especializada en la producción de cacao de calidad.',
  theme_color: '#d5ff00',
  background_color: '#d5ff00',
  display: 'fullscreen',
  icons: [
    {
      src: '/img/icons/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/img/icons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: '/img/icons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    },
  ],
};
