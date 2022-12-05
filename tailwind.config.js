module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#446580",
          200: "#A9BCCC",
          100: "#E4EDF5",
          50: "#6A7680",
          accent: "#E18442",
          "accent-light": "#f4d5bf",
        },
      },
      screens: {
        "3xl": "1600px",
      },
    },
    fontFamily: {
      sans: ["Archivo", "sans-serif"],
      narrow: ["Archivo Narrow", "sans-serif"],
      text: ["Montserrat", "sans-serif"],
      mono: "'Azeret Mono', monospace",
    },
  },
  plugins: [],
}
