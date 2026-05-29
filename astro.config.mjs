import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/',
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
