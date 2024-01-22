/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Authorfont: ["Minerva-Modern-Regular", "sans-serif"],
        CooperHevitt: ["CooperHewitt-Light", "sans-serif"],
        Gamiliademo: ["GamiliademoRegular-mL9Ev", "sans-serif"],
        VulturaRegular: ["Vultura-Regular", "sans-serif"],
        HankenGrotesk: ["HankenGrotesk-VariableFont_wght", "serif"],
      },
    },
  },
  plugins: [],
};
