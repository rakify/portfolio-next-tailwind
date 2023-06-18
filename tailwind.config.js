/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      jose: ["Josefin Sans", "sans-serif"],
    },
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
    },

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          thin: "#FFF5B1",
          light: "#FFE875",
          DEFAULT: "#FFDD00",
        },
        secondary: {
          thin: "#F2FDD9",
          light: "#ABDB42",
          DEFAULT: "#89C700",
        },
        danger: {
          DEFAULT: "#EA4335",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
        gray: {
          DEFAULT: "#27374D",
          100: "#474E68",
          300: "#474E68",
          // 400: '#31394D',
        },
      },
      fontSize: {
        sm: ["0.875rem"],
        base: ["1rem"],
        lg: ["1.25rem"],
        xl: ["1.5rem"],
        "2xl": ["1.75rem"],
        "3xl": ["2rem"],
        "4xl": ["2.5rem"],
        "5xl": ["3rem"],
        "6xl": ["4rem"],
        "7xl": ["5rem"],
        "8xl": ["6.75rem"],
      },
      borderRadius: {
        5: ".3125rem",
        10: ".625rem",
        20: "1.25rem",
        30: "1.875rem",
        40: "2.5rem",
      },
    },
  },
  plugins: [],
}
