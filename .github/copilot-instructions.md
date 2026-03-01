# AI Assistant Usage Guide for itemix

This small project is a **React single‑page application** scaffolded with Vite and enhanced with Material‑UI (MUI) and styled‑components. The codebase is intentionally minimal; the instructions below will help an AI coding agent generate useful, idiomatic changes quickly.

## Big picture

1. **Entry point**: `src/main.jsx` bootstraps the app with React's `createRoot` and renders `<App />` under `<StrictMode>`.  There is only one HTML file (`index.html`) provided by Vite.
2. **App component**: `src/App.jsx` holds top‑level state (e.g. `useState` hooks) and passes callbacks/values down via props. Currently it renders `<SetUserName />` from `src/components/setUserName.jsx`.
3. **Components** live under `src/components`.  Use PascalCase filenames with `.jsx` extension.  All components export as `export default` and accept props via object destructuring.
4. **Styling**
   - Global CSS: `src/index.css` and `src/App.css` contain base styles; they are imported at the top of `main.jsx` and `App.jsx` respectively.
   - UI library: MUI components are used throughout (`@mui/material`, `@mui/icons-material`) and can be styled via Emotion or the styled‑components API (`@emotion/react`, `@emotion/styled`, `styled-components`).
   - Avoid adding new global style sheets; prefer component‑scoped styles using MUI `sx` prop or styled wrappers.
5. **Data flow** is purely React‑props and hooks; there is no context or external state library yet.  Side effects should be placed in `useEffect` hooks, not at the top level of a functional component (the current `setName("dsdsdsd")` in `setUserName.jsx` is a leftover example and should be removed).
6. **Dependencies**: aside from React/Vite, the repo includes `js-cookie` for cookie handling and various MUI/emotion packages.  Import them only if needed.
7. **Build**: Vite handles development and production.  See `vite.config.js` for HMR settings; the `dist` directory is generated at build time and is ignored by ESLint/global git settings.

## Developer workflows

- **Install**: `npm install` (or `pnpm`, `yarn` as you prefer).
- **Run dev server**: `npm run dev` – opens Vite with hot‑module replacement. The console output shows the local URL.
- **Preview production build**: `npm run build` then `npm run preview` (or directly `vite preview`).
- **Linting**: `npm run lint` applies rules defined in `eslint.config.js`.  Key rules:
  - `no-unused-vars` is relaxed for identifiers starting with capital letters (allows unused React component imports).
  - Files are limited to `*.js`/`*.jsx` under the project; `dist` is globally ignored.
- **Project conventions**:
  - Always use ES modules (`import`/`export`); the repo uses modern syntax only and avoids `require`.
  - Component filenames are PascalCase with `.jsx` and default export a React function.
  - Put new UI pieces in `src/components` and import them from `App.jsx` or other components.
  - Keep state in the closest common ancestor and pass setters/values as props; there is no context/provider pattern yet.
  - Do not mutate props or state directly; use setters returned from `useState`.

## Style and linting

- The ESLint config lives in `eslint.config.js` and is applied via `npm run lint`.
- Rules already allow unused vars whose name starts with a capital letter (useful for React components) and ignore `dist` directory.
- Follow the existing 2‑space indentation and prefer double quotes for JSX attributes unless otherwise constrained by ESLint.

## Working with MUI

- Import components from `@mui/material` or `@mui/icons-material` as needed.
- Use the `sx` prop or `styled-components` (`@mui/styled-engine-sc`) for styling rather than custom CSS classes.
- Theme overrides can be added later via MUI's `ThemeProvider` if needed.

## Testing and other tasks

- There are currently no unit/integration tests; when adding tests, follow Vite's default setup (Jest/Vitest can be chosen but not enforced yet).
- For quick manual QA, use the dev server and inspect in browser; HMR refreshes automatically on save.

## Common pitfalls

- Avoid side effects directly in render bodies; place them inside `useEffect` with appropriate dependencies.
- Do not commit the `dist` folder or any build artifacts; they should be ignored by `.gitignore`.

## Example component change

Here is a minimal example of how new components should look:

```jsx
// src/components/MyWidget.jsx
import { Button } from "@mui/material";

export default function MyWidget({ onClick }) {
  return <Button onClick={onClick}>Click me</Button>;
}
```

---

Feel free to ask for clarifications if any behavior in this repository seems unclear or incomplete.