module.exports = {
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended',
      'plugin:vue/recommended',
      'prettier/vue',
    ],
    plugins: ['vue', 'prettier'],
    rules: {
      'global-require': 0,
      'import/no-unresolved': 0,
      'no-param-reassign': 0,
    }
  };