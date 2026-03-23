/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ayur: {
          bg: "white",
          deepGreen: "#2E7D32",
          softGreen: "#BAD6B0",
          herbalGreen: "#8BC34A",
          earthBrown: "#5D4037",
          accentOrange: "#D79250",
          textDark: "#263238",
          mutedGrey: "#9E9E9E",
          navBg: "oklch(28.2% 0.091 267.935)"
        }
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl2: "1.25rem", // ~20px
      },
    },
  },
  plugins: [],
};
