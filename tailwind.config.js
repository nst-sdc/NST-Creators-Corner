/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Adjust based on your file structure
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#111827", // Dark navy blue for dark mode
          light: "#1e293b", // Slightly lighter navy blue
        },
      },
    },
  },
  plugins: [],
};
