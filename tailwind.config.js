/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "ui-sans-serif"],
      },
      colors: {
        // custom color for direct RGBA use
        "awaaz-teal-12": "rgba(16,185,129,0.12)",
        // add any named brand colors you want to use
        "awaaz-primary": "#06b6d4",
        "awaaz-accent": "#facc15"
      }
    }
  },
  plugins: []
}
