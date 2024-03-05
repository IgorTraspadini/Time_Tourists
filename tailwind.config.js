/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'mint-green': '#D3F8E2', // replacing the existing colors
        'lavender': '#E4C1F9', // replacing the existing colors
        'soft-pink': '#F694C1', // replacing the existing colors
        'creamy-yellow': '#EDE7B1', // replacing the existing colors
        'sky-blue': '#A9DEF9' // replacing the existing colors
      }
    },
  },
  plugins: [],
};
