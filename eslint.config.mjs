import { fixupPluginRules } from '@eslint/compat'
import validateJsxNesting from 'eslint-plugin-validate-jsx-nesting'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  files: ['src/**/*.{ts,tsx}'],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: { jsx: true }
    },
    globals: {
      ...globals.browser
    }
  },
  plugins: {
    'validate-jsx-nesting': fixupPluginRules(validateJsxNesting)
  },
  rules: {
    'validate-jsx-nesting/no-invalid-jsx-nesting': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: '^[^_]',
        argsIgnorePattern: '^[^_]',
        caughtErrorsIgnorePattern: '^[^_]',
        destructuredArrayIgnorePattern: '^[^_]'
      }
    ]
  }
})
