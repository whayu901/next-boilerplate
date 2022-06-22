module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      colors: {
        primary: "#17C0B1",
        tile: "#20323a",
        instagram: "#DB4088",
        grey: "#6A717F",
        white: "#fff",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
