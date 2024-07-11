/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        dark: '#131316',
        paragraph: '#5e5f6e',
        headerBtnDark: '#6e49ff',
        headerBtnLight: '#9c80ff',
        bodyHeadings: '#6c47ff',
        ceoBg: '#615cf6',
        bgNav: '#f4f5f6',
        navFont: '#42434d',
      },
    },
  },
  plugins: [],
};

