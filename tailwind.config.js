/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF', // keeping white in case it's needed
        'mint-green': '#D3F8E2', // replacing the existing colors
        'lavender': '#E4C1F9', // replacing the existing colors
        'soft-pink': '#F694C1', // replacing the existing colors
        'creamy-yellow': '#EDE7B1', // replacing the existing colors
        'sky-blue': '#A9DEF9', // replacing the existing colors
        'muted-purple': '#B884CF',
        'black': '#000000',
        'dark-purple': '#242038',
        'slate-blue': '#725AC1',
        'french-gray': '#CAC4CE',
        'tropical-indigo': '#8D86C9',
        'tekhelet': '#4B3D7D',
        'linen': '#F7ECE1',
        'electric-indigo': '#5500FF',
      }
    },
  },
  plugins: [],
};
