/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#32db86",
        secondary: "#0f261e",
      },
    },
  },
  plugins: [],
};
