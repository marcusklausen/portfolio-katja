import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0 6px",
      },
      colors: {
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-campton)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
