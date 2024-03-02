/** @type {import("prettier").Config} */
const config: import("prettier").Config = {
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    plugins: [require.resolve('prettier-plugin-tailwindcss')],
  };
  
  module.exports = config;