export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        navy: "#0d1b2f",
        steel: "#15273f",
        gold: "#55ad42",
        champagne: "#edf7ea",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(7, 17, 31, 0.18)",
      },
    },
  },
  plugins: [],
};
