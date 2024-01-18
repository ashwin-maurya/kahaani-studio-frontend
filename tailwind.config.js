/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  lightMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PlayfairDisplay: ["PlayfairDisplay-VariableFont_wght", "sans-serif"],
        proximanova: ["Fontspring-DEMO-proximanova-light", "sans-serif"],
        Minerva: ["Minerva-Modern-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
