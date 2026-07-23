# sdreformed.com

Simple React site for San Diego Reformed Church, built with Vite and ready to
deploy on GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

The repository includes an Actions workflow at `.github/workflows/deploy.yml`
that builds the site and deploys the `dist` output to GitHub Pages whenever
changes land on `main`.
