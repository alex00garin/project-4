const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img-1': "url('/public/img-1.jpg')",
        'img-2': "url('/public/img-2.jpg')",
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'], 
      },
      colors: {
        'mint-green': '#D3D7D7',
        'deep-green': '#7D8C7F',
        'dark-green': '#3C453D',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}