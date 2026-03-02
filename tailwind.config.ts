import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1f9a5a",
          dark: "#137043",
          light: "#d5f5e3"
        },
        charcoal: "#111827",
        accent: "#ef4444"
      },
      boxShadow: {
        soft: "0 10px 25px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

