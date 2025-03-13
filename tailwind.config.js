/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF642D',
          dark: '#E55A29',
          light: '#FF8F6A',
        },
        secondary: {
          DEFAULT: '#1E293B',
          dark: '#0F172A',
          light: '#334155',
        },
        toast: {
          blue: '#0078C1',
          darkBlue: '#005F9B',
          gray: '#F7F8FA',
          darkGray: '#4A4A4A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 