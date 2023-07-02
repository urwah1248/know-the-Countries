/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/*.js",
    "./src/*.js",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(255, 255, 255, 0.25)'
      },
      fontFamily: {
        helvetica: ["Roboto", "Helvetica neue", "sans-serif"],
      }
    },
  },
  plugins: [],
}
