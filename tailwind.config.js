/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      mauchudao: "#181C31",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
