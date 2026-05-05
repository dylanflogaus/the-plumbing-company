import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#1a2e4a",
          light: "#243d5e",
          dark: "#0f1e30",
        },
        brand: {
          DEFAULT: "#1e6ba8",
          light: "#2d8fd4",
          dark: "#155a8a",
        },
        orange: {
          DEFAULT: "#f97316",
          light: "#fb923c",
          dark: "#ea6c0a",
        },
        success: "#22c55e",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 14px rgba(26, 46, 74, 0.08)",
        lift: "0 12px 40px rgba(26, 46, 74, 0.12)",
        glow: "0 0 0 3px rgba(249, 115, 22, 0.2)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
