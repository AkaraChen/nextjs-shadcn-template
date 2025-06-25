# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Tasks

- **Install Dependencies**: `pnpm install` (using pnpm as per pnpm-lock.yaml)
- **Run Development Server**: `pnpm run dev`
- **Build Project**: `pnpm run build`
- **Start Production Server**: `pnpm run start`
- **Lint Project**: `pnpm run lint`

## High-Level Code Architecture

This project is a Next.js application utilizing the App Router.

- **`src/app/`**: Contains the main application routes and components. `layout.tsx` defines the shared UI for a route segment and its children, and `page.tsx` renders the UI for a route segment.
- **`public/`**: Stores static assets like images.
- **Styling**: The project uses Tailwind CSS for styling, configured via `postcss.config.mjs` and `tailwind.config.ts` (implied by `tailwindcss` in `devDependencies`).
