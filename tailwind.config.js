/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],

darkMode:"class",
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
   colors:{
    brightRed: 'hsl(12, 88%, 59%)',
    aliceBlue:'rgb(241,248,255)',
    blue:'rgb(0,44,255)',
    nobel:'rgb(160,160,160)',
    sub_nobel:'hsl(83.53%,87.06%,99%)',
    silver:'rgb(188,188,188)',
    gray:'rgb(187,187,187)',
    lightRed:'rgba(255,11,11,0.76)'
   }
    },
  }
}

