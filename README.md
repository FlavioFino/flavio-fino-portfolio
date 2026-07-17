# Flavio Fino — Portfolio

Personal portfolio site built to showcase my projects and background for
Software Engineering / CS co-op applications.

**Live site:** [flavio-fino-portfolio.vercel.app](https://flavio-fino-portfolio.vercel.app/)

## About

I'm a Software Engineering student at the University of Victoria. This site
covers my background, featured projects, technical skills, and how to reach
me.

## Tech Stack

- **HTML / CSS / JavaScript** — no framework, built from scratch
- **Vercel** — hosting and continuous deployment (auto-deploys on push to `main`)

## Features

- Responsive single-page layout (About → Projects → Skills → Contact)
- Custom canvas-based "digital rain" animation in the hero section
- Respects `prefers-reduced-motion` for accessibility

## Structure

```
├── index.html    # page structure and content
├── style.css     # styling and theme
└── script.js     # hero animation
```

## Running locally

No build step required — this is a static site.

```bash
git clone https://github.com/FlavioFino/flavio-fino-portfolio.git
cd flavio-fino-portfolio
# open index.html directly in a browser, or serve it locally:
python3 -m http.server 8000
```

## Status

Actively maintained — content and design get updated as new projects and
experience come in.