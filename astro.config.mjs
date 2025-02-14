// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [react(), sitemap()],
	i18n: {
		locales: ["en", "es"], // Idiomas que deseas soportar
		defaultLocale: "en", // Idioma predeterminado
		routing: {
			prefixDefaultLocale: true, // Asegura que el idioma predeterminado también tenga prefijo
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
