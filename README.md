# Vibrant Rebels

Basic Astro website for the band Vibrant Rebels.

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.
It builds the static Astro site and deploys `dist/` to GitHub Pages when changes
land on the `develop` branch.

In the repository settings, set Pages to deploy from GitHub Actions.

The default configuration targets:

```txt
https://jonginty.github.io/band-site-vibrant-rebels/
```

## Custom Domain

The site is ready for a future custom domain, but the real domain is not
committed yet. When you have it:

1. Rename `public/CNAME.example` to `public/CNAME`.
2. Replace `your-domain.example` with the real domain.
3. In `.github/workflows/deploy.yml`, set:

```yaml
SITE_URL: https://your-domain.example
BASE_PATH: /
```

4. In `astro.config.mjs`, you can keep the environment-based defaults as-is or
update the fallback values to match the custom domain.
