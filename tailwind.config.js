/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontSize: {
            '10xl': '8rem',
        },
        fontFamily: {
          'source-sans-pro': ['Source Sans Pro'],
          'mitr': ['Mitr'],
          'roboto-slab': ['Roboto Slab'],
      },
        letterSpacing: {
            widest: '.25em',
        }
    },
},
  plugins: [],
}