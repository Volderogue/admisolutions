/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'admin-primary': '#0a5d40',
        'admin-secondary': '#69ddb3',
        'admin-accent': '#5AC828',
        'admin-dark': '#2b2e35',
        'admin-light': '#e7e8e8',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


