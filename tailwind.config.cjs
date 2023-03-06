/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      almostWhite: "hsl(0, 0%, 98%)",
      mediumGray: "hsl(0, 0%, 41%)",
      almostBlack: "hsl(0, 0%, 8%)",
    },
    screens: {
      sm: { max: "480px" },
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
