// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        "font-family": ["Roboto", "sans-serif"],
      },
      boxShadow: {
        header:
          "0px 0px 10px rgba(0, 0, 0, 0.2)" /* Update the shadow values as needed */,
        "sidebar-right":
          "-2px 0px 5px rgba(0, 0, 0, 0.2)" /* Update the shadow values as needed */,
      },
      spacing: {
        58: "14.8rem",
      },
    },
  },
  plugins: [],
};
