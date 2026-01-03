# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PropertySnagging is a Next.js 16 application built with React 19, TypeScript, and Tailwind CSS. The project is in early stages with the basic Next.js App Router structure initialized.

## Common Commands

**Development:**
```bash
npm run dev
```
Starts the Next.js development server at `http://localhost:3000`. The app auto-refreshes on file changes.

**Build:**
```bash
npm run build
```
Creates an optimized production build. Must succeed before deployment.

**Production Server:**
```bash
npm start
```
Runs the production server (requires a successful build first).

**Linting:**
```bash
npm run lint
```
Runs ESLint to check code quality. Uses Next.js core web vitals and TypeScript configurations.

## Project Structure

- **`src/app/`** - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with metadata and font setup (Geist Sans and Geist Mono)
  - `page.tsx` - Home page (currently a default template)
- **`public/`** - Static assets (images, SVGs, etc.)
- **`tsconfig.json`** - TypeScript configuration with path alias `@/*` pointing to `./src/*`

## Technology Stack

- **Framework:** Next.js 16.1.1 with App Router
- **UI Library:** React 19.2.3
- **Styling:** Tailwind CSS 4 (PostCSS integration)
- **Language:** TypeScript 5
- **Linting:** ESLint 9 with Next.js config

## Key Configuration Notes

- **Import Paths:** Use `@/` prefix for imports from `src/` directory (e.g., `import Component from "@/components/Button"`)
- **Styling:** Tailwind CSS is configured with PostCSS. Utility classes are available globally.
- **Font:** Uses Next.js `next/font/google` to import and optimize Geist fonts from Google Fonts
- **Image Optimization:** Uses Next.js `Image` component for automatic optimization
