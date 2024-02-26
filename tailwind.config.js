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
      lineHeight: {
        normal: "1.25",
      },
      colors: {
        primary: {
          DEFAULT: "#ECCF4D",
          hover: "#ffdd42",
        },
        gray: {
          DEFAULT: "#808080",
        }
      }
    },
  },
  plugins: [],
}

