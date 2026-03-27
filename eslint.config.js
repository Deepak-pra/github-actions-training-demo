export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off"
    }
  },
  {
    files: ["tests/**/*.js"],
    plugins: {
      vitest: require("eslint-plugin-vitest")
    },
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly"
      }
    }
  }
];