/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif']
      },
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue': 'hsl(207, 26%, 17%)',
        'very-dark-blue-text': `hsl(200, 15%, 8%)`,
        'dark-gray': 'hsl(0, 0%, 52%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'white-custom': 'hsl(0, 0%, 100%)'
      },
      screens: {
        'xs': '430px',
        // => @media (min-width: 820px) { ... }
        'md-2': '820px',
        // iPad Air => @media (min-width: 820px) { ... }
      }
    },
  },
  plugins: [],
}

