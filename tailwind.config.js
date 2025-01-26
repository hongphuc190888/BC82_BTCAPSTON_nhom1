/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      mauchudao: "#181C31",
      trusted1: "#F8F9FF",
      trusted2: "#DEE7FF",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
