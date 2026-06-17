# Vite React Router Template

A production-ready starter for React single-page applications. Routing,
data-fetching, theming, and a full UI component library are wired up and ready
to go — swap in your own API and start building.

## Stack

- **React 19** + **React Router 7** (`@react-router/dev`, SPA mode)
- **Vite** — build tool and dev server
- **TypeScript** — strict mode, `~/*` path alias
- **Tailwind CSS v4** — utility-first styling with semantic design tokens
- **shadcn / Radix UI** — accessible component primitives (`radix-nova` style)
- **TanStack Query** — server-state caching and devtools
- **Axios** — HTTP client with automatic network-error retry
- **Sonner** — toast notifications
- **next-themes** — light/dark theme switching

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in VITE_API_BASE_URL
npm run dev
```

The dev server runs at **http://localhost:5100**.

## Documentation

- [Setup & Local Development](docs/setup.md) — prerequisites, environment
  variables, dev server, build, and Docker.
- [Architecture](docs/architecture.md) — routing, providers, API layer, and
  data-fetching patterns.
- [Folder Structure](docs/folder-structure.md) — repository layout and what
  lives where.
- [Code Style & Conventions](docs/code-style.md) — TypeScript, formatting, UI,
  and feature conventions.
