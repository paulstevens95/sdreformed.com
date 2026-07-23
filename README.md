# San Diego Reformed Church — Website

A simplified, confessional redesign of [sdreformed.com](https://sdreformed.com): no video slider, no
Spotify embed, no animations. The **1689 Baptist Confession** is brought forward as the statement of
faith. Built with **React + Vite + React Router**, styled with the *Classical* editorial design system,
and configured to deploy to **GitHub Pages**.

## Tech stack

- **React 18** with **React Router v6** (`HashRouter` — no server config or `404.html` needed)
- **Vite 5** build (`base: "./"` so it works on any GitHub Pages URL without renaming)
- Plain CSS: `src/styles/theme.css` (the design-system tokens) + `src/styles/site.css` (site layout, nav, responsive)
- Fully mobile-responsive (dropdown nav collapses to an accordion menu)

## Run locally

```bash
cd sdrc-website
npm install
npm run dev        # http://localhost:5173
```

Build & preview a production bundle:

```bash
npm run build
npm run preview
```

## Project structure

```
sdrc-website/
├── index.html
├── vite.config.js
├── .github/workflows/deploy.yml     # GitHub Pages CI
└── src/
    ├── main.jsx                     # HashRouter entry
    ├── App.jsx                      # routes
    ├── data/content.js              # ← ALL site copy lives here (edit this)
    ├── styles/
    │   ├── theme.css                # Classical design-system tokens
    │   └── site.css                 # layout / nav / footer / responsive
    ├── components/  Nav, Footer, Layout, PageHeader
    └── pages/       Home, OurTeam, OurBeliefs, Events
```

## Editing content

Almost everything you'll want to change — service time, address, nav links, bios, beliefs, events — lives
in **`src/data/content.js`**. No need to touch the components.

- **Sermons video:** replace `home.sermons.featuredEmbed` with your latest YouTube/Vimeo *embed* URL.
- **Events:** the `events.upcoming` list is placeholder — swap in your real calendar entries.
- **Team photos & logo** currently link to images hosted on the existing WordPress site. To make the site
  fully self-contained, download those images into `public/` and change the URLs in `content.js` to
  `/img/....`.

## Pages included

`Home` · `Our Team` · `Our Beliefs (Statement of Faith)` · `Events`.
The other nav items (Coffee With The Pastors, Membership, Ministries, Sermons, App, Articles, Book List,
Give) currently link out to the existing site — add them as new files in `src/pages/` and routes in
`App.jsx` following the same pattern when you're ready.

## Deploy to GitHub Pages

1. Push this repo to GitHub (the app can live in a subfolder — the workflow points at `sdrc-website/`).
2. In **Settings → Pages**, set **Source: GitHub Actions**.
3. Push to `main`. The included workflow builds and publishes automatically; your site appears at
   `https://<user>.github.io/<repo>/`.

Because routing uses `HashRouter` and Vite's `base` is relative, it works at that sub-path with no
further configuration. (Prefer clean URLs without the `#`? Switch to `BrowserRouter` in `src/main.jsx`
and add a `public/404.html` SPA redirect.)

### Alternative: manual deploy

```bash
npm run build
npm run deploy     # publishes dist/ to the gh-pages branch (uses the gh-pages package)
```

## Notes

- Home, Team, and Beliefs copy is drawn from the current sdreformed.com pages. Events copy is placeholder
  structure — replace it with your real calendar.
- Icons are inline SVG; fonts (Cormorant Garamond + Lora) load from Google Fonts via `theme.css`.
