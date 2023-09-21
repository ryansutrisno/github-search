This is a [Vite.js](https://vitejs.dev/) project bootstrapped with [`create vite@latest`](https://github.com/vitejs/vite/tree/main/packages/vite).

And REST API provide from [Github](https://api.github.com)

## Getting Started

First, clone this repo:

```bash
https://github.com/ryansutrisno/github-search.git
#or
git@github.com:ryansutrisno/github-search.git
```

Second, install all dependencies

```bash
npm install
#or
yarn install
#or
pnpm install
```

Third, copy file .env.example to .env and added VITE_BASE_URL="https://api.github.com"

```bash
cp .env.example .env
```

Four, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev

Open [http://127.0.0.1:5173](http://127.0.0.1:5173) with your browser to see the result.

## Learn More

To learn more about Vite.js, take a look at the following resources:
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
