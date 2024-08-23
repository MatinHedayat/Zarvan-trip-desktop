/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        Vazir: ['Vazir'],
      },
      borderRadius: {
        'lg': '10px'
      }
    },
  },
  plugins: [],
};
