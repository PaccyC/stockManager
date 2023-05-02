/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
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
    silver:'rgb(188,188,188)'
   }
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}

