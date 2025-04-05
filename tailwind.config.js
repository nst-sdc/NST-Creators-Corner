/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Scan these files for class usage
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#111827',
          light: '#1e293b',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
