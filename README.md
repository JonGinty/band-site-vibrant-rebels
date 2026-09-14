# Vibrant Rebels

Basic Astro website for the band Vibrant Rebels.

## Local Development

```sh
npm install
npm run dev
```

`npm run dev` shows every section, including drafts. To see the same public-only
view that will be deployed, use:

```sh
npm run dev:published
```

Draft status lives in `src/data/site-visibility.ts`. Set a section to `true`
when it is ready to appear in navigation and links on the public site.

## Build

```sh
npm run build
```

This creates the public-only build. Use `npm run build:all` when you need a
production build containing drafts for review.

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.
It builds the static Astro site and deploys `dist/` to GitHub Pages when changes
land on the `develop` branch.

In the repository settings, set Pages to deploy from GitHub Actions.

The deployed custom-domain configuration targets:

```txt
https://vibes.me.uk/
```

## Custom Domain

The current temporary custom domain is `vibes.me.uk`. In the repository's
GitHub Pages settings, add that custom domain, then configure its DNS with your
provider. The deployment workflow already builds the site at the domain root.

When the permanent domain is available:

1. In `.github/workflows/deploy.yml`, set:

```yaml
SITE_URL: https://vibrantrebels.com
BASE_PATH: /
```

2. Change the custom domain in GitHub Pages to `vibrantrebels.com`.
3. Redirect `vibes.me.uk` to the permanent domain at your DNS provider.

This site deploys through GitHub Actions, so GitHub Pages does not require a
committed `CNAME` file. `public/CNAME.example` remains only as a reference for
other hosting workflows.
