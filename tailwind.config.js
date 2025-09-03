/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#dde7ff',
          200: '#c3d5ff',
          300: '#9bb8ff',
          400: '#6c91ff',
          500: '#3b67ff',
          600: '#123460',
          700: '#0f2a52',
          800: '#0c2043',
          900: '#081635',
        }
      }
    },
  },
  plugins: [],
};
