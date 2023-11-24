module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    fontFamily: {
      courier: ['courier-prime'],
      skeina: ['skeina'],
    },
    fontSize: {
      menu: ['13.5px','20px']
    },
    screens: {
      'ad': '1216px',
    },
    extend: {
      colors: {
        'cel-marker': '#5D5555',
      }
    },
  },
  plugins: [],
}
