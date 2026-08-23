# Xiaoxu Cao — personal website

Personal academic website built with [AstroPaper](https://github.com/satnaing/astro-paper) and Astro.

## Local preview

Requirements: Node.js 22.12 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open <http://localhost:4321/shawncao.github.io/>.

## Production checks

```bash
pnpm run format:check
pnpm run lint
pnpm run build
pnpm preview
```

The production preview uses the same base path as GitHub Pages. Open <http://localhost:4321/shawncao.github.io/> unless the terminal prints a different port.

## Deployment

Merging to `master` triggers `.github/workflows/deploy.yml`. In the repository's GitHub Pages settings, the source must be set to **GitHub Actions**.

The site is configured for <https://shawncao2023.github.io/shawncao.github.io/>.

## Theme license

AstroPaper is used under the MIT License. See [LICENSE](LICENSE).
