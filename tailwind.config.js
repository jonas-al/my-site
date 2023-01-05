/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {
      fontFamily: {
        'heading': ['Baloo\\ 2', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
        'details': ['Roboto\\ Mono', 'sans-serif']
      },
      colors: {
        'black': '#000000',
        'soft-black': '#181818',
        'medium-black': '#1A1919',
        'white': '#FFFFFF',
        'gray': '#757575',
        'light-gray': '#F2F2F2',
        'green': '#35C245',
        'yellow': '#F7B336',
        'red': '#F85251',
        'pink': '#FF00E5',
        'blue': '#4200FF'
      },
      height: {
        'mac-window-h': '32rem',
      },
      width: {
        'mac-window-w': '46rem'
      }
    },
  },
  plugins: [],
}