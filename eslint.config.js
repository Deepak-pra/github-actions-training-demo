import vitest from "eslint-plugin-vitest";

export default [
  {
    files: ["**/*.js"],
    ignores: ["dist"],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly"
      }
    },
    plugins: {
      vitest
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