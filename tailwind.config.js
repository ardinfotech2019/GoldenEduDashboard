module.exports = {
  content: ["./index.html", "./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      colors: {
        fontFamily: {
          sans: ["Barlow", "sans-serif"],
        },
        gray: {
          100: "#E0E6E9",
          500: "#ABBBC2",
          700: "#393C49",
          900: "#1F1D2B",
          800: "#252836",
        },
      },
    },
  },
  plugins: [],
};
