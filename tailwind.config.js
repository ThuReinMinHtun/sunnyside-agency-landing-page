/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ["Barlow", "sans-serif"],
        'fraunces': ["Fraunces", "serif"],
      },

      colors: {
        'softRed': "hsl(7, 99%, 70%)",
        'yellow': "hsl(51, 100%, 49%)",
        'darkCyan': "hsl(167, 40%, 24%)",
        'darkblue': "hsl(198, 62%, 26%)",
        'darkmoderatecyan': "hsl(168, 34%, 41%)",
        'darksaturatedblue': "hsl(212, 27%, 19%)",
        'verydarkgrayishblue': "hsl(213, 9%, 39%)",
        'darkgrayishblue': "hsl(232, 10%, 55%)",
        'verylightgrayishblue': "hsl(210, 4%, 67%)",
      },
      backgroundImage: {
        'hero-mobile': "url(./images/mobile/image-header.jpg)",
        'hero-desktop': "url('./images/desktop/image-header.jpg')",
      },
    },
  },
  plugins: [],
};
