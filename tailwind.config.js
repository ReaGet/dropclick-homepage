/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
      fontSize: {
        none: "0px",
        base: "10px",
      },
      colors: {
        yellow: {
          DEFAULT: "#ECCF4D",
        },
        gray: {
          DEFAULT: "#808080",
        }
      }
    },
  },
  plugins: [],
}

