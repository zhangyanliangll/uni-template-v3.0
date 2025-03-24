module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/prettier',
    '@vue/typescript/recommended',
  ],
  overrides: [
    {
      files: ['./scripts/*.ts'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['*.vue'],
      rules: {
        'no-undef': 'off', // use tsc to check the ts code of the vue
      },
    },
  ],
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-this-alias': ['off'],
  },
  globals: {
    uni: true,
    UniApp: true,
    wx: true,
    getCurrentPages: true,
    WechatMiniprogram: true,
    UniHelper: true,
    Page: true,
    App: true,
    ObjectType: true,
  },
}
