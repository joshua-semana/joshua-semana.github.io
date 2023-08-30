/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Operator Mono", "sans-serif"],
      },
      animation: {
        blob: "blob 8s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            opacity: 0.4,
            transform: "scale(1) translate(0px, 0px)",
          },
          "33%": {
            opacity: 0.3,
            transform: "scale(1.1) translate(30px, -50px)",
          },
          "66%": {
            opacity: 0.2,
            transform: "scale(0.9) translate(-20px, 20px)",
          },
          "100%": {
            opacity: 0.4,
            transform: "scale(1) translate(0px, 0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
