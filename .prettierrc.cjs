module.exports = {
  semi: true,
  singleQuote: true,
  endOfLine: "auto",
  trailingComma: 'all',
  tabWidth: 2,
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  quoteProps: 'as-needed',
  importOrder: ["<THIRD_PARTY_MODULES>", "^@mui/(.*)$", "^/src/(.*)$", "^[./].*(?<!\\.(c|le|sc)ss)$", "\\.(c|le|sc)ss$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  singleAttributePerLine: true,
  plugins: ['@trivago/prettier-plugin-sort-imports']
};
