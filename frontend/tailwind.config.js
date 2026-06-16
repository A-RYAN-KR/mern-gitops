/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#090B11',
          primary: '#F4F4F5',
          secondary: '#A1A1AA',
          tertiary: '#71717A',
          card: '#131520',
          title: '#FFFFFF',
          description: '#D4D4D8',
          info: '#71717A',
        },
        light: {
          DEFAULT: '#090B11',
          primary: '#F4F4F5',
          secondary: '#A1A1AA',
          tertiary: '#71717A',
          card: '#131520',
          title: '#FFFFFF',
          description: '#D4D4D8',
          info: '#71717A',
        },
        brand: {
          violet: '#7C3AED',
          indigo: '#6366F1',
          pink: '#EC4899',
          amber: '#F59E0B',
        },
        'light-theme-background': '#090B11',
        'light-theme-foreground': '#7C3AED',
        'dark-theme-background': '#090B11',
        'dark-theme-foreground': '#6366F1',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
