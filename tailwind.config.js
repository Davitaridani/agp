/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#124d6f",
        navy: "#0b1429",
        red: "#ed1d24",
        gray: "#9da1a9",
      },
    },
  },
  plugins: [],
};
