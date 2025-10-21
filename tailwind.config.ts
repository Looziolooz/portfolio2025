import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D97757",
          light: "#E89578",
          dark: "#C86543",
        },
        secondary: {
          DEFAULT: "#6B9FAE",
          light: "#8AB8C5",
          dark: "#578798",
        },
        accent: {
          DEFAULT: "#E8DCC4",
          light: "#F2EBD9",
          dark: "#D4C5A6",
        },
        background: {
          light: "#FFFFFF",
          DEFAULT: "#F5F5F5",
          dark: "#1A1A1A",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#6B6B6B",
          light: "#FFFFFF",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        hind: ["var(--font-hind)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;