/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1C1C1C",
        "accent-green": "#3FCF8E",
        "accent-purple": "#7F57EF",
        "dark-green": "#36BB7F",
        "off-white": "#F8F9FA",
        "dark-card": "#232323",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
