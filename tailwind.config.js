/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '29_': '30%',
      },
      margin: {
        '3.5_': '3.5rem',
        '4.5_': "4.5rem",
      }
    },
  },
  plugins: [],
}
