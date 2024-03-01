/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      borderColor: {
        elevation: "#232323",
      },
      backgroundColor: {
        elevationOne: "#141414",
        elevationTwo: "#1D1D1D",
      },
      fontSize: {
        hone: "28px",
        htwo: "22px",
        hthree: "20px",
        hfour: "18px",
        hfive: "18px",
        hsix: "16px",
        body: "14px",
      },
      textColor: {
        primary: "#FFFFFF",
        secondary: "#B3B3B3",
      },
      borderRadius: {
        primary: "48px",
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections("all"),
    }),
  ],
}