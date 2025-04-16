/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003547',
        secondary: '#005E54',
        accent: '#C2BB00',
        danger: '#E1523D',
        warning: '#ED8B16',
      },
    },
  },
  plugins: [require("daisyui")],
}
