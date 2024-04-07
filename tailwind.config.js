/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html","./**/*.{js,ts,jsx,tsx}"],
  fill: theme => ({
          'yellow': theme('colors.yellow.400'),
        }),
  theme: {
    extend: {},
    
  },
  plugins: [],
}

