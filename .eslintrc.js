module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended', // base Vue 3
    'plugin:prettier/recommended', // enable eslint-plugin-prettier, prettier as error, enables eslint-config-prettier
  ],
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
}
