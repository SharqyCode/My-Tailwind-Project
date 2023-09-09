/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './destination.html', './crew.html'],
  theme: {
    extend: {
      width: {
        destSm: "10.625rem",
        destMd: "18.75rem",
        destLg: "27.75rem",
      },

      colors: {
        blackFont: "#0B0D17",
        greyFont: "#D9D9D9",
        bluishFont: "#D0D6F9",
        greyObj: "#979797",
        greyLine: "#383B4B",
      },

      fontFamily: {
        barlow: ['Barlow', "sans-serif"],
        barlowCond: ['Barlow Condensed', "sans-serif"],
        bf: ['Bellefair', "serif"],
      },

      fontSize: {
        xs: ".6rem",
        h1: "9.375rem",
        h2: "6.25rem",
        h3: "3.5rem",
        h4: "2rem",
        h5: "1.75rem",
        sh1: "1.75rem",
        sh2: ".875rem",
        nav: "1rem",
        body: "1.125rem",
      },

      letterSpacing: {
        h5: ".2969rem",
        sh2: ".1469rem",
        nav: ".1688rem",
      },

      backgroundImage: {
        'home-mobile': "url('../assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('../assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('../assets/home/background-home-desktop.jpg')",

        'crew-mobile': "url('../assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('../assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('../assets/crew/background-crew-desktop.jpg')",

        'tech-mobile': "url('../assets/technology/background-technology-mobile.jpg')",
        'tech-tablet': "url('../assets/technology/background-technology-tablet.jpg')",
        'tech-desktop': "url('../assets/technology/background-technology-desktop.jpg')",

        'dest-mobile': "url('../assets/destination/background-destination-mobile.jpg')",
        'dest-tablet': "url('../assets/destination/background-destination-tablet.jpg')",
        'dest-desktop': "url('../assets/destination/background-destination-desktop.jpg')",
      },
    },
  },
  plugins: [],
}

