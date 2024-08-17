/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },

      colors: {
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkCyan: "hsl(167, 40%, 24%)",
        darkblue: "hsl(198, 62%, 26%)",
        darkmoderatecyan: "hsl(168, 34%, 41%)",
        darksaturatedblue: "hsl(212, 27%, 19%)",
        verydarkgrayishblue: "hsl(213, 9%, 39%)",
        darkgrayishblue: "hsl(232, 10%, 55%)",
        verylightgrayishblue: "hsl(210, 4%, 67%)",
      },
      backgroundImage: {
        "hero-mobile": "url(./images/mobile/image-header.jpg)",
        "hero-desktop": "url('./images/desktop/image-header.jpg')",
      },
      gradientColorStops: {
        "gray-start": "#E1DADA",
        "gray-end": "#BDCAD9",
      },
      keyframes: {
        moveFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        'moveFromRight-1': "moveFromRight 0.3s ease-in-out forwards",
        'moveFromRight-2': "moveFromRight 0.5s ease-in-out forwards",
        'moveFromRight-3': "moveFromRight 0.7s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
