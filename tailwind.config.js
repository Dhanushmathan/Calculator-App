/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monaserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

