/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        customer: "url('./src/assets/customer.jpg')",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "dark-blue": "#B1B2FF",
      "light-blue": "#EEF1FF",
      blue: "#AAC4FF",
      "golden-yellow": "#FED049",
      purple: "#7F669D",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      black: "#222831",
      red: "#ff1111",
      "dark-black": "#000000",
      "light-black": "#393E46",
      "dark-grey": "#273444",
      gray: "#BBBBBB",
      "light-grey": "#d3dce6",
      white: "#ffffff",
    },
    backgroundColor: {
      "dark-blue": "#B1B2FF",
      "light-blue": "#EEF1FF",
      blue: "#AAC4FF",
      black: "#222831",
      "light-black": "#393E46",
      "dark-grey": "#273444",
      "light-grey": "#d3dce6",
      white: "#ffffff",
    },
    /*
    font-family: 'Montserrat', sans-serif;
font-family: 'Playfair Display', serif;
    */
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      playFair: ["Playfair Display", "serif"],
      heebo: ["Heebo", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
