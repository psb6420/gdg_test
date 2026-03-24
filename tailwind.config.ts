import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1020",
        foreground: "#E2E8F0",
        muted: "#94A3B8",
        card: "#111A2E",
        accent: "#38BDF8"
      },
      boxShadow: {
        card: "0 10px 30px rgba(2, 8, 23, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
