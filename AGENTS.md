# ThreadHive Frontend

## Project Commands

Run these from the repository root:

- `npm run dev` starts the Vite development server.
- `npm run build` creates the production bundle.
- `npm run test` runs the Vitest suite once.
- `npm run lint` runs ESLint across the project.
- `npm run preview` serves the production bundle locally.

For a normal change, run the narrowest relevant test first, then `npm run lint` and `npm run build` when the change affects shared or build-time code.

## Codebase Shape

- `src/main.jsx` mounts the React 19 application under `StrictMode`.
- `src/App.jsx` owns the current page selection. Navigation is currently manual state-based switching between `login` and `register`; do not add a routing dependency unless the feature requires it.
- `src/pages/` contains page-level views. Authentication pages live under `src/pages/Auth/`.
- `src/components/` contains reusable UI components. Keep component-specific styles beside the component.
- `src/index.css` and `src/App.css` provide global and application-level styles.
- `tests/` contains Vitest and Testing Library tests; `tests/setup.js` installs jest-dom matchers.

## Implementation Conventions

- Use functional React components and hooks with ES module imports.
- Keep state local with React hooks unless a feature establishes a clear need for shared state.
- Preserve the existing component/CSS pairing: `Component.jsx` next to `Component.css`.
- Match existing form labels and accessible queries so controls can be found by label or role in tests.
- Keep changes focused and preserve existing public component behavior unless the request explicitly changes it.
- Do not assume a backend exists: current auth submit handlers are local demonstrations and log data to the console.

## Testing Guidance

- Use `@testing-library/react` and `user-event` for user-visible behavior.
- Assert rendered controls by accessible label or role rather than implementation details.
- Mock `console.log` when testing submit logging and restore the mock after the assertion.
- Be aware that the app runs in jsdom for tests and browser APIs such as `alert` may need to be mocked when a test submits the login form.

## Agent Workflow

- Read `package.json`, `vite.config.js`, and `eslint.config.js` before changing tooling or test behavior.
- Inspect the owning page/component and its sibling CSS before editing a UI behavior.
- Validate the smallest affected slice first, then run the broader checks required by the change.
- Treat TODO markers in existing components and tests as incomplete project work, not as instructions to rewrite unrelated areas.
