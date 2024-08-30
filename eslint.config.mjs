import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "semi": ["error", "always"],
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  pluginJs.configs.recommended,
];
