# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Explanation of Each Directory and File

    public/: Contains static files such as index.html, images, and other assets that need to be served by the server as-is. The index.html file is the entry point of the React application.

    src/: Contains all the JavaScript/TypeScript code for your React application.

        assets/: Contains static assets like images, fonts, and global styles (CSS/SCSS). You can further organize it into subdirectories like images/ and styles/.

        components/: Contains reusable UI components. These components are usually small and specific to a part of the UI, such as buttons, form inputs, or custom widgets.

        pages/: Contains components that represent entire pages or views of the application. Each page component might use multiple smaller components from the components/ directory.

        hooks/: Contains custom React hooks. Hooks are reusable logic that can be shared across different components.

        services/: Contains modules for interacting with APIs or other external services. This is where you put your API calls, authentication logic, etc.

        utils/: Contains utility functions that can be used throughout your application. These are usually pure functions that don't rely on React.

        App.js: The root component of your application. It typically contains the main layout and routing logic.

        index.js: The entry point for the React application. It renders the App component into the DOM.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
