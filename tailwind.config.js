/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        navDropAnimation: {
          "0%": { transform: "translateY(-35%)" },
          "100%": { transform: "translateY(0%)" },
        },
        popOut: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        popIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        navdrop: "navDropAnimation 1s ease-in-out",
        popeffect: "popOut 1s ease-in-out",
        popInffect: "popIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
