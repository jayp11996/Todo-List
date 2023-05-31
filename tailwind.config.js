const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: false,
  theme: {
    colors: {
      white: colors.white,
      gray:  colors.warmGray,
      blue:  colors.blue,
      purple:colors.purple,
      pink:  colors.pink ,
      orange:colors.orange,
      green: colors.green,
      yellow:colors.yellow,
      'svelte-prime': '#ff5030',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
