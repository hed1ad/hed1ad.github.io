# hed1ad.github.io

Minimalist vulnerability-research blog. Hugo + Tailwind CSS v4 + Pagefind,
deployed to GitHub Pages via GitHub Actions.

## Stack

- **Hugo** (extended) — site generator, custom theme in-repo (`layouts/`, `assets/`)
- **Tailwind CSS v4** — via Hugo's `css.TailwindCSS` pipe (`assets/css/main.css`)
- **Pagefind** — static search index, built after `hugo`
- **KaTeX** — server-side rendered through `transform.ToMath` (`layouts/_markup/render-passthrough.html`)
- **Chroma** — code highlighting, light/dark via `prefers-color-scheme`

## Write a post

```sh
hugo new content posts/my-writeup.md
```

Front matter:

```toml
+++
title = "My writeup"
date = 2026-10-10
draft = false
tags = ["pwn", "kernel"]
summary = "One-line teaser."
# cve = "CVE-YYYY-NNNNN"
+++
```

Tags generate `/tags/` and `/tags/<tag>/` pages automatically. Math uses `$...$`
and `$$...$$` (passthrough extension). Code fences are highlighted and get a copy
button.

## Local development (Docker)

Hugo runs in a container so nothing is installed on the host.

```sh
make deps      # npm install (generates package-lock.json; run once)
make dev       # hugo server on http://localhost:1313 (no Pagefind index)
make preview   # production build + Pagefind + static server on :1313
make build     # hugo --minify + pagefind -> ./public
```

Search only works in `make preview` / production, because the Pagefind index is
built from the generated `public/` directory.

## Deploy

Push to `main`. The workflow in `.github/workflows/hugo.yml` builds the site,
generates the search index, and deploys to GitHub Pages.

In the repository settings, set **Settings → Pages → Build and deployment →
Source** to **GitHub Actions** (once).
