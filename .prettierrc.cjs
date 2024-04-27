// @see https://prettier.io/docs/en/options
module.exports = {
  singleQuote: true,
  tabWidth: 2,
  printWidth: 100,
  useTabs: false,
  semi: false,
  trailingComma: 'all',
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '*.json',
      options: {
        trailingComma: 'none',
      },
    },
  ],
}
