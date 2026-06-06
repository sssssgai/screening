/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a1628',
        'secondary': '#ffc107',
        'accent': '#1e3a5f',
        'dark-blue': '#0d2137',
        'light-blue': '#1a365d',
      },
      fontFamily: {
        'sans': ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
