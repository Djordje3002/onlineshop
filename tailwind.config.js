/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryColor' : '#003F62',
        'secondaryColor' : '#EDA415',
        'lighGray' : '#F2F2F2'
      }
    },
  },
  plugins: [],
}

