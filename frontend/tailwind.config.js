/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      primary: '#f1dbbf',
      secondary: '#f1d3b3',
      light: '#fff3e3',
      dark: '#8b7e74',
      success: '#35683a',
      danger: '#EB455F',
      white: '#fff',
    },
    fontFamily: {
      sans: ['Dosis', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
