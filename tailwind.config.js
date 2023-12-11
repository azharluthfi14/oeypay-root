/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white2: '#F3F5F7',
        yellow: '#FFBE00',
        green: '#1DAB87',
        gray2: '#596780',
        lightGray: '#A3AED0',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), 'prettier-plugin-tailwindcss'],
};
