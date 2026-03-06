import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "var(--color-midnight)",
        deepBlack: "var(--color-deepBlack)",
        charcoal: "var(--color-charcoal)",
        borderDark: "var(--color-borderDark)",
        white: "var(--color-white)",
        bodyGray: "var(--color-bodyGray)",
        fieldDrab: "var(--color-fieldDrab)",
        oliveDrab: "var(--color-oliveDrab)",
        jackoBean: "var(--color-jackoBean)",
        darkCharcoal: "var(--color-darkCharcoal)",
        driedRosemary: "var(--color-driedRosemary)",
        pineTree: "var(--color-pineTree)",
        camo: {
          300: "var(--color-camo-300)",
          400: "var(--color-camo-400)",
          500: "var(--color-camo-500)",
          600: "var(--color-camo-600)",
          700: "var(--color-camo-700)",
          800: "var(--color-camo-800)",
          900: "var(--color-camo-900)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        errorBrown: "var(--color-error)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [],
};

export default config;
