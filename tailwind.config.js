/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: "#1695C9",
        primaryBg: "#EEF5FF",
        listCategory: "#AF4A6D",
        bgRightBar: "#7FC5D1",
        linkBlue: "#04A9F5",
        lightBlue: "#E6F7FE",
        newOrange: "#FF9900",
        lightOrange: "#FEF6E5",
      },
    },
  },
  plugins: [],
};
