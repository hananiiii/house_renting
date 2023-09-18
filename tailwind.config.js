/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        title_color :'#FF5733',
         
        text_color:'#2F4F4F', 
        body_color:'#FFFBFB',
      },
      fontFamily: {
        font: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

