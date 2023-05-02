module.exports = {
  // mode: 'jit', // Optionally use just in time engine
  content: ["./src/**/*.{js,jsx,ts,tsx,css}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2E516D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};