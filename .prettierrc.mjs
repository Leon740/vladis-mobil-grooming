export default {
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  printWidth: 100,
  semi: true,
  arrowParens: 'always',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
