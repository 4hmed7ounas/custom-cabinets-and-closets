import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "50": "#f9f6f3",
          "100": "#f0ece4",
          "200": "#e0d7c8",
          "300": "#cdbca4",
          "400": "#c1aa90",
          "500": "#a98666",
          "600": "#9c765a",
          "700": "#82604c",
          "800": "#6a4f42",
          "900": "#574237",
          "950": "#2e211c",
        },
        secondary: {
          "50": "#f5f5f1",
          "100": "#e6e6db",
          "200": "#cfcdb9",
          "300": "#b3b091",
          "400": "#9d9872",
          "500": "#8f8763",
          "600": "#7a7154",
          "700": "#635945",
          "800": "#554c3e",
          "900": "#4b4238",
          "950": "#1d1915",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
