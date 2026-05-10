/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b',
        secondary: '#334155',
        accent: '#6366f1',
        'accent-light': '#818cf8',
      }
    },
  },
  plugins: [],
}
