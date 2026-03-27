import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import vitest from "eslint-plugin-vitest";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly"
      }
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off"
    }
  },
  {
    files: ["tests/**/*.js"],
    plugins: {
      vitest
    },
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly"
      }
    }
  }
];