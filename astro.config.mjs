import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://vibes.me.uk';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
});
