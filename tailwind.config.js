/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'dark-yellow': '#E5A13E',
        'light-blue': '#CFE7E5',
        'dark-green': '#213638',
        'bright-blue': '#4CC9F0'
      }
    },
  },
  plugins: [],
};
