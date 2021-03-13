module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript/base',
    'prettier/@typescript-eslint',
    'plugin:vue/vue3-recommended', // base Vue 3
    'plugin:prettier/recommended', // enable eslint-plugin-prettier, prettier as error, enables eslint-config-prettier
    'prettier/vue', // add compatibilty with eslint-plugin-prettier (remove vue plugin conflict)
  ],
  plugins: ['@typescript-eslint', 'import', 'vue'],
  parserOptions: {
    project: './tsconfig.json',
  },
}
