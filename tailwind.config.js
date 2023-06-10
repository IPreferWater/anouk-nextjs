module.exports = {
  //mode: 'jit',
  content: [
    // Example content paths...    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    fontFamily: {
      sans: ['domine','arial']
    },
    extend: {
      colors: {
        'cel-marker': '#5D5555',
      },
      fontFamily: {
        marker: ['domine']
      },
    },
  },
  plugins: [],
}
