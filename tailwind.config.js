import withMT from "@material-tailwind/react/utils/withMT";
import forms from "@tailwindcss/forms";
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Geist", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        background: "rgb(255, 250, 250)",
        primary: "rgb(7, 134, 105)",
        secondary: "rgb(253, 188, 180)",
        accent: "rgb(174, 139, 153)",
      },
    },
  },
  plugins: [forms],
});
