/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <- escanea todos los archivos dentro de src
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
