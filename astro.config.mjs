import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://codefolio-santiago-barbosa1919.vercel.app/',
  base: '/',
  trailingSlash: 'never',
  build: {
    assets: '_astro'
  }
});