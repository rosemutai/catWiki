/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brownish': '#291507',
        'light-grey': '#E3E1DC'
      },
      backgroundImage: {
        'hero': 'url("../public/images/HeroImagelg.png")'
      },
      spacing: {
        '128': '96%',
      }
    },
  },
  plugins: [],
}

