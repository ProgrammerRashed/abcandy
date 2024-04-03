import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'dm': ['"DM Sans"', 'sans-serif'],
      'lora': ['Lora', 'sans-serif'],

    },
    extend: {
      colors: {
        "color-primary": "var(--color-primary)",
        "text-primary": "var(--text-primary)",
        "text-muted": "var(--text-muted)",
        "text-button": "var(--text-button)"
      },
    },
  },
  plugins: [],
};
export default config;
