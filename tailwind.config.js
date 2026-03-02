/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glass: "0 12px 40px rgba(0, 0, 0, 0.25)"
      },
      letterSpacing: {
        brutal: "0.12em"
      }
    }
  },
  plugins: []
};
