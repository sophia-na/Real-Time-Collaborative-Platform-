import tsPlugin from "@typescript-eslint/eslint-plugin"; // TypeScript plugin
import tsParser from "@typescript-eslint/parser"; // TypeScript parser
import prettier from "eslint-plugin-prettier"; // Prettier plugin

export default [
  {
    files: ["src/**/*.{ts,js}"],  // Apply linting to all .ts and .js files in src folder

    // Language options (replacing "env")
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        process: "readonly",
        module: "readonly",
        __dirname: "readonly",
        require: "readonly"
      }
    },

    // Plugins for TypeScript and Prettier
    plugins: {
      "@typescript-eslint": tsPlugin,
      "prettier": prettier
    },

    // ESLint and Prettier rules applied directly
    rules: {
      "prettier/prettier": "error",  // Run Prettier as an ESLint rule
      "@typescript-eslint/explicit-module-boundary-types": "off",  // Disable explicit return types for functions
      "@typescript-eslint/no-explicit-any": "warn",  // Warn on the use of the "any" type
      "no-unused-vars": "warn", // Warn on unused variables
      "no-console": "off"  // Allow console.log (optional)
    }
  }
];
