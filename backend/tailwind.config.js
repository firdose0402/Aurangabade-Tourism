/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          darkGreen: '#062619',
          gold: '#C5A880',
          goldLight: '#E5D5B8',
          beige: '#F9F6F0',
          white: '#FFFFFF',
          glass: 'rgba(6, 38, 25, 0.65)'
        }
      },
      fontFamily: {
        sans: ['Playfair Display', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}