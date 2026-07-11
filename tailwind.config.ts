import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./dictionaries/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Belgian navy (primary)
        navy: {
          DEFAULT: "#102A43",
          900: "#0B1E31",
          800: "#102A43",
          700: "#1B3A5B",
          600: "#274b6b",
        },
        // Belgian red accent (secondary)
        accent: {
          DEFAULT: "#C8102E",
          700: "#A50D26",
        },
        // Body text
        charcoal: {
          DEFAULT: "#243B53",
          light: "#486581",
        },
        // Light section background
        mist: "#F5F7FA",
        line: "#D9E2EC",
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "system-ui", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        gov: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
