# McGuire Technology - Branding

Public brand showcase, reference material, and design direction for McGuire Technology, LLC.

This VitePress site is the central place to understand how McGuire Technology should look, sound, and be referenced across projects.

## Site Focus

The public branding site is meant to emphasize:

- brand positioning
- messaging and voice
- visual identity direction
- project reference language
- product and documentation consistency

Legal and trademark details should stay secondary. The site should primarily showcase the brand and provide practical reference material for other McGuire Technology projects.

## Licensing Model

This repository uses a split licensing approach:

- The main repository license in LICENSE is MIT for non-brand tooling,
  templates, scripts, design tokens, and other reusable code.
- Official brand assets, including any files under brand-assets/ when present,
  are proprietary and are not open-licensed unless explicitly stated otherwise.

This structure keeps technical assets reusable while protecting the McGuire
Technology name, logos, and official visual identity.

## Brand Reference

Use McGuire Technology™ as the first prominent public brand reference.
Use McGuire Technology in repeated body copy when the symbol would make
the writing feel cluttered.

## Branding Site

The public site in [docs/index.md](docs/index.md) is the branding source of truth.

## Local Development

Start the VitePress dev server with:

```sh
npm run docs:dev
```

VitePress will print the local URL after the server starts.

## Deployment

This site deploys to GitHub Pages from the `main` branch using the workflow in
[.github/workflows/deploy.yml](.github/workflows/deploy.yml).

The custom domain is configured with [docs/public/CNAME](docs/public/CNAME):

```txt
branding.mcguire.technology
```
