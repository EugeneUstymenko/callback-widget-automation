import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  // Basic recommended JavaScript rules
  js.configs.recommended,

  // Ignore directories that don't need to be checked
  {
    ignores: ['**/node_modules/**', 'dist/**', 'build/**', 'coverage/**'],
  },

  // Common rules for all TypeScript and JavaScript files
  {
    files: ['**/*.ts', '**/*.js'],
    plugins: {
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      // Add all necessary global variables
      globals: {
        ...globals.node,
        ...globals.browser,
        // Playwright test runner globals
        test: 'readonly',
        expect: 'readonly',
        // If you use describe/it (Playwright supports them)
        describe: 'readonly',
        it: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      // Disable JavaScript rules that are replaced by TypeScript versions
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-redeclare': 'off',

      // General coding rules
      'no-console': 'warn',
      'no-debugger': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      curly: ['error', 'all'],

      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    },
  },

  // Additional rules for Playwright test files (optional)
  {
    files: ['tests/**/*.spec.ts'],
    rules: {
      // Allow using 'any' in test files, as sometimes it's necessary
      '@typescript-eslint/no-explicit-any': 'off',
      // Allow long functions in tests
      'max-lines-per-function': 'off',
    },
  },
];
