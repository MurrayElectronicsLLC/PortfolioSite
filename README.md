# Murray Electronics LLC — Portfolio Site

Fully responsive, production-ready personal/business portfolio for **Murray Electronics LLC** (solo web development operation based in **Morgantown, WV**).

## Tech

- Vite + React (JSX)
- CSS Modules
- Formspree contact form (no backend)
- Vercel deploy with security headers (`vercel.json`)

## Local development

```bash
npm install
npm run dev
```

## Contact form (Formspree)

1. Create a Formspree form and copy the endpoint URL.
2. Create `.env.local` (not committed) using the example:

```bash
cp .env.example .env.local
```

3. Set:

```bash
VITE_FORMSPREE_ENDPOINT="https://formspree.io/f/yourFormId"
```

Restart the dev server after changing env vars.

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

- Import this repo into Vercel
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Add env var `VITE_FORMSPREE_ENDPOINT`

Security headers are configured in `vercel.json` (CSP, HSTS, etc.).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
