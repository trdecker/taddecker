import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist", "scripts/**"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    settings: {
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.app.json", "./tsconfig.node.json"],
        },
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": "error", // Disallow console statements - use logger instead
      "no-unused-vars": "off", // Off in favor of TS-aware version
      "@typescript-eslint/no-unused-vars": "off", // Let TypeScript handle this (noUnusedLocals/noUnusedParameters in tsconfig)
      "@typescript-eslint/no-explicit-any": "warn", // No "any" type allowed
      "@typescript-eslint/consistent-type-imports": "error", // Enforces "import type { Foo }"
      "react-refresh/only-export-components": "off", // Allow exporting non-components from component files
      "@typescript-eslint/no-misused-promises": "off", // Allow Promise-returning functions in event handlers
      "@typescript-eslint/no-floating-promises": "off", // Allow unhandled promises

      // Error handling rules to match CLAUDE.md specifications
      "no-empty": ["error", { allowEmptyCatch: false }], // Disallow empty catch blocks
      "@typescript-eslint/only-throw-error": "error", // Only allow throwing Error instances
      "@typescript-eslint/use-unknown-in-catch-variables": "error", // Enforce catch variables are typed as unknown
      "@typescript-eslint/prefer-promise-reject-errors": "error", // Require Error instances when rejecting promises
    },
  },
  // Backend Lambda functions - enforce no console, use AWS Lambda Powertools instead
  {
    files: ["amplify/functions/**/*.ts"],
    extends: [js.configs.recommended, tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      parserOptions: {
        project: ["./tsconfig.node.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": "error", // Disallow console statements - use AWS Lambda Powertools instead
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": "error",

      // Error handling rules for backend
      "no-empty": ["error", { allowEmptyCatch: false }],
      "@typescript-eslint/only-throw-error": "error",
      "@typescript-eslint/use-unknown-in-catch-variables": "error",
      "@typescript-eslint/prefer-promise-reject-errors": "error",
    },
  },
  // Allow console statements only in the logger utility file
  {
    files: ["src/utils/frontendLogger.ts"],
    rules: {
      "no-console": "off", // Allow console statements in logger file only
    },
  },
]);
