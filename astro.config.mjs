import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ertpolicyholdersadvocates.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  prefetch: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
