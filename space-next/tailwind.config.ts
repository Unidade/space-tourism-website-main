import type { Config } from "tailwindcss"
const defaultTheme = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      bellefair: ["var(--font-bellefair)", ...defaultTheme.fontFamily.sans],
      barlow: ["var(--font-barlow-condensed)", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "rgb(var(--primary)  / <alpha-value>)",
      white: "rgb(var(--white)  / <alpha-value>)",
      black: "rgb(var(--black)  / <alpha-value>)",
      "gray-light-1": "rgb(var(--gray-light-1)  / <alpha-value>)",
    },
    fontSize: {
      h1: ["var(--font-size-h1)", "normal"],
      h2: ["var(--font-size-h2)", "normal"],
      h3: ["var(--font-size-h3)", "normal"],
      h4: ["var(--font-size-h4)", "normal"],
      h5: [
        "var(--font-size-h5)",
        {
          letterSpacing: "var(--letter-spacing-h5)",
          lineHeight: "normal",
        },
      ],
      "sub-h1": ["var(--font-size-sub-h1)", "normal"],
      "sub-h2": [
        "var(--font-size-sub-h2)",
        {
          letterSpacing: "var(--letter-spacing-sub-h2)",
          lineHeight: "normal",
        },
      ],
      nav: [
        "var(--font-size-nav-text)",
        {
          letterSpacing: "var(--letter-spacing-nav-text)",
          lineHeight: "normal",
        },
      ],
      body: ["var(--font-size-body)", "normal"],
    },
  },
  plugins: [],
}
export default config
