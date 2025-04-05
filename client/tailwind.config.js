export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6a0dad",
          50: "#f5f0ff",
          100: "#e9dfff",
          200: "#d5bfff",
          300: "#c19cff",
          400: "#a87aff",
          500: "#6a0dad",
          600: "#7c3fd7",
          700: "#5a0d9c",
          800: "#4a0a82",
          900: "#3a0768",
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
