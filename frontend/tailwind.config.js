/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Form.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#6055a5",
        red: "#ff7a7a"
      }
    },
  },
  plugins: [],
}

