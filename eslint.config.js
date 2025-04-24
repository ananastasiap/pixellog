import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  // 1) Базовые JS-правила
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
    },
    extends: ["js/recommended"],
    settings: {
      react: { version: "detect" }, // чтобы не было ворнинга про версию React
    },
  },

  // 2) Рекомендации из eslint-plugin-react для Flat Config
  pluginReact.configs.flat.recommended,

  // 3) Рекомендованный flat-конфиг Prettier
  prettierRecommended,

  // 4) Наше финальное переопределение (override)
  {
    rules: {
      // больше не требуем импортировать React в каждом JSX-файле
      "react/react-in-jsx-scope": "off",
      // отключаем правило про rel в ссылках (либо можно сконфигурировать)
      "react/jsx-no-target-blank": "off",
    },
  },
]);
