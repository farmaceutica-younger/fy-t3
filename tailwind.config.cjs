/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EC4899",
          secondary: "#bb3ed1",
          accent: "#f9aa6d",
          neutral: "#221E25",
          "base-100": "#F5F5F5",
          info: "#A7CCE2",
          success: "#27A053",
          warning: "#F5C366",
          error: "#E85E7C",
        },
      },
    ],
  },
};

module.exports = config;
