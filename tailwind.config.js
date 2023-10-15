/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          primary: "#101010",
          secondary: "#1E1E1E"
        },
        gray: {
          primary: "#4D4D4D",
          secondary: "#6B6B6B"
        },
        white: "#F3F5F7"
      },
    },
  },
  plugins: [],
}
