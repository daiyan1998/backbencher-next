/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: "var(--text-style-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
      },
      colors: {
        primary: "#6B40E3",
        silver: "#5A5E63",
        darkBlue: "#140b2d",
        lightSky: "#639EF8",
        lightPink: "#F863AA",
      },
      margin: {
        15: "60px",
        30: "120px",
      },
      animation: {
        "right-left": "right-left 1.5s infinite ease alternate",
        "arrow-anim": "arrow-indicate 1s infinite",
      },
      keyframes: {
        "right-left": {
          from: { transform: "translateX(-5px)" },
          to: { transform: "translateY(5px) scale(1.02)" },
        },
        "arrow-indicate": {
          "0%, 100%": {
            transform: "translateX(-20%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
    fontFamily: {
      roboto: ["Outfit"],
    },
  },
  plugins: [],
});
