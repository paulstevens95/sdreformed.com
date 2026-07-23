# San Diego Reformed Church — Website

Source for [sdreformed.com](https://sdreformed.com). A confessional, Reformed Baptist church in La Mesa, California.

## Tech stack

- **React 19** + **React Router v7** (`HashRouter` — no server config or `404.html` needed for GitHub Pages)
- **TypeScript** throughout (`strict` mode, `tsconfig.json`)
- **Vite 8** — `base: "./"` so builds work on any GitHub Pages URL without renaming
- Plain CSS — `src/styles/theme.css` (design tokens, typography) + `src/styles/site.css` (layout, nav, responsive)
- Fully mobile-responsive — dropdown nav collapses to an accordion on small screens
- **Subsplash** for the events calendar and sermons library (script-injected embeds)

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Build and preview a production bundle:

```bash
npm run build
npm run preview
```

## Project structure

```
sdreformed.com/
├── index.html
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.tsx                  # HashRouter entry point
    ├── App.tsx                   # all routes
    ├── vite-env.d.ts             # Vite client types
    ├── data/
    │   └── content.ts            # ← ALL site copy lives here
    ├── styles/
    │   ├── theme.css             # design tokens (colours, fonts, spacing)
    │   └── site.css              # layout / nav / footer / responsive
    ├── components/
    │   ├── Layout.tsx            # shell — Nav + Outlet + Footer
    │   ├── Nav.tsx               # responsive dropdown navigation
    │   ├── Footer.tsx
    │   └── PageHeader.tsx
    └── pages/
        ├── Home.tsx
        ├── OurTeam.tsx
        ├── OurBeliefs.tsx
        ├── Events.tsx
        ├── CoffeeWithPastors.tsx
        ├── Membership.tsx
        ├── MinistryOfMen.tsx
        ├── MinistryOfWomen.tsx
        ├── Sermons.tsx
        ├── TheApp.tsx
        ├── Articles.tsx
        ├── BookList.tsx
        └── Give.tsx
```

## Pages & routes

| Route | Page |
|---|---|
| `/` | Home |
| `/team` | Our Team |
| `/beliefs` | Statement of Faith |
| `/events` | Events (Subsplash calendar embed) |
| `/coffee` | Coffee With The Pastors |
| `/membership` | Membership |
| `/men` | Ministry of Men |
| `/women` | Ministry of Women |
| `/sermons` | Sermons (Subsplash library embed) |
| `/app` | The SDRC App |
| `/articles` | Articles |
| `/books` | Book List |
| `/give` | Give |

## Editing content

All site copy — service time, address, nav links, team bios, beliefs, book list, etc. — lives in **`src/data/content.ts`**. Each page imports only what it needs from that file.

- **Team photos & logo** link to images hosted on the WordPress site. To make the site fully self-contained, download them into `public/img/` and update the URLs in `content.ts`.
- **Subsplash embeds** (Events, Sermons) are injected via the Subsplash external embed script. To update an embed, replace the embed ID and path string in the relevant page component.

## Deploy to GitHub Pages

In **Settings → Pages**, set **Source: GitHub Actions**, then push to `main`. The included workflow builds and publishes automatically.

Because routing uses `HashRouter` and Vite's `base` is relative (`"./"`), the site works at any GitHub Pages sub-path with no further configuration.

### Alternative: manual deploy

```bash
npm run build
npm run deploy     # publishes dist/ to the gh-pages branch via the gh-pages package
```
