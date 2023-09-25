/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  printWidth: 90,
  plugins: ["prettier-plugin-tailwindcss"],
}

module.exports = config
