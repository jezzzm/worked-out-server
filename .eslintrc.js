module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['out.js'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, printWidth: 80 }],
    'max-len': ['error', { code: 80 }],
  },
};
