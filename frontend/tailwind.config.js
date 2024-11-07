/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E23E57',
      },
    },
  },
  plugins: [],
};
