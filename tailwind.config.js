/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans',  'sans-serif'],
      },
      colors: {
        white: ' #FFFFFF',
        black: ' #3C4959',
        darkblue: ' #011632',
        midblue: ' #1376F8',
        skyblue: ' #25B4F8',
        lightblue: ' #E6F6FE',
        success: ' #17BF28',
        warning: ' #EC942C',
        error: ' #E52323',
   
      },
    },
  },
  plugins: [],
}