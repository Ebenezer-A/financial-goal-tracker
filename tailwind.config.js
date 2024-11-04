/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#040316",
        background: "#fbfbfe",
        primary: "#2f27ce",
        secondary: "#dddbff",
        accent: "#443dff",
      },
      fontFamily: {
        DMSerif: ["DM Serif Display", "serif"],
        DMSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

