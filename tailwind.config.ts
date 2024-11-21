import type { Config } from "tailwindcss";

const config: Config = {
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
        navbar: "#061920",
        primary: "#4E0504",
        secondary: "#041B25",
        text_color: "#040F16",
        text_secondary_color: "#FBFBFF",
        card: "#00708F",
        page_background: "#e5e8ea",
        page_background2: "#f0ecec",
      },
    },
  },
  plugins: [],
};
export default config;
