
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      'primary': 'hsl(75, 94%, 57%)',
      'white': 'hsl(0, 0%, 100%)',
      'grey': 'hsl(0, 0%, 20%)',
      'dark-grey': 'hsl(0, 0%, 12%)',
      'off-black': 'hsl(0, 0%, 8%)'
    },
    fontFamily: {
      'inter': ['inter', 'sans-serif'],
      'sans': [ ...defaultTheme.fontFamily.sans],
      'serif': [ ...defaultTheme.fontFamily.serif],
      'mono': [ ...defaultTheme.fontFamily.mono],
    }
  },
  },
  plugins: [],
}




