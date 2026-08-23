import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://jonginty.github.io';
const base = process.env.BASE_PATH ?? '/band-site-vibrant-rebels';

export default defineConfig({
  site,
  base,
  output: 'static',
});
