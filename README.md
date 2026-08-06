# Yvonne Toros's website

This is Yvonne Toros's personal website. It includes an overview of the topics she has addressed, a brief biography, an introduction to her ideas, some excerpts, and most of her writings that have not been published for the general public.

Deployed in [https://yvonnetoros.com/](https://yvonnetoros.com/)

Created with [Astro](https://astro.build/).

## Project Structure

```text
/
├── public/              # Static files served as-is (favicon, robots.txt, ...)
│   ├── assets/          # Images
│   └── fonts/           # Fonts
├── src/
│   ├── components/      # Reusable Astro/UI components
│   ├── content/         # Markdown files imported into pages
│   ├── layouts/         # Shared page layouts
│   ├── lib/             # Utilities used in frontmatters
│   ├── pages/           # File-based routes
│   │   └── texts/       # Markdown pages available under /texts/*
│   ├── plugins/         # Custom Remark/Rehype plugins
│   ├── scripts/         # Project scripts (listeners)
│   ├── styles/          # Global styles and CSS utilities
│   └── types/           # Shared TypeScript types
├── astro.config.ts      # Astro configuration
├── netlify.toml         # Netlify deployement file
├── package.json         # Project metadata and dependencies
└── tsconfig.json        # TypeScript configuration
```

## Minimal installation

```sh
npm create astro@latest -- --template minimal
```

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
