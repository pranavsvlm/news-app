# News App

A small demo news application built with React and Vite. This repository contains a lightweight frontend for browsing news items and a simple login form used for local testing and demonstration purposes.

## Quick start

- Install dependencies:

```
npm install
```

- Run the development server:

```
npm run dev
```

- Build for production:

```
npm run build
```

## What changed (recent)

- Updated `src/components/LogIn.jsx`:
  - The login form now validates inputs and saves the submitted credentials to `localStorage` for demo purposes.
  - On submit the form data is logged to the browser console as a pure JSON string (for easy parsing by dev tools or scripts).
  - A lightweight login history is stored under the `loginHistory` key in `localStorage`.
  - UI includes password show/hide toggle and inline validation feedback.

These changes were made to improve local debugging and to make the submitted data easy to consume by tools that expect JSON.

## Notes and safety

- This app is a frontend demo only. Storing real credentials in `localStorage` is insecure — this is strictly for local testing.
- Do not use this pattern for production authentication.

## Commit & push

Run these commands locally to commit the README and changes, then push to GitHub. Replace `<branch>` with your branch name (for example `dev`):

```
git add .
git commit -m "docs: add README and note Login JSON logging"
git push origin <branch>
```

If you prefer, I can prepare the commit locally. Note that pushing requires your Git credentials or an auth token configured in your environment.

---
If you want the README expanded (screenshots, architecture notes, or contributor instructions), tell me what you'd like and I will add it.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
