/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto', 'system-ui'],
        heading:['poppins','system-ui'],
      }
    },
  },
  plugins: [],
}

