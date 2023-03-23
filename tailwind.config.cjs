/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway'],
        montserrat: ['Montserrat']
      },
      colors: {
        'white': '#E7E7EB',
        'gray': '#A09FB1'
      }
    },
  },
  plugins: [],
}
