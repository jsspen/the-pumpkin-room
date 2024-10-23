/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        georgia: ["Georgia", "serif"],
        underdog: ["Underdog", "serif"],
      },
    },
  },
  plugins: [],
};
