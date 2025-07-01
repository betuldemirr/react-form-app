# Project Setup and Usage

## Requirements

- Node.js (version 16 or above recommended)
- npm or yarn package manager

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd <project-folder>
npm install
# or
yarn
```

## Running the Development Server

To start the development server with hot reloading:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` (default Vite port).

---

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

The output will be in the `dist` folder.

---

## Preview Production Build Locally

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

---

## Deployment on Vercel

This project is configured to be deployed easily on [Vercel](https://vercel.com).

### Steps:

1. Push your project to a Git repository (GitHub, GitLab, Bitbucket).
2. Log in to [Vercel](https://vercel.com) and import your repository.
3. If you want to support client-side routing (e.g. React Router routes like `/docs`), add a `vercel.json` file to the root with the following content:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

4. Deploy and access your live site.
5. For more info, visit the [Vercel Docs](https://vercel.com/docs).

---

## Notes

- This project uses React Router for client-side routing.
- Make sure to commit and push all local changes before deploying.
- If you want to customize ESLint rules, see the ESLint section above.
- For any questions or issues, feel free to open an issue or contact the maintainer.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
