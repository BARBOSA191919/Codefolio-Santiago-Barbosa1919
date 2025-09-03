import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel(),
  site: 'https://mi-portafolio-beta-seven.vercel.app/',
  base: '/',
  trailingSlash: 'never',
  build: {
    assets: '_astro'
  }
});
