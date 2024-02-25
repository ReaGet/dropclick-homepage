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
        base: "10px",
      },
      colors: {
        yellow: {
          DEFAULT: "#ECCF4D",
        },
        gray: {
          DEFAULT: "#EFECEC",
        }
      }
    },
  },
  plugins: [],
}

