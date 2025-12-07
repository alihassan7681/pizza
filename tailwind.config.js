/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pizza-yellow': '#FFD700',
        'pizza-black': '#0A0A0A',
      },
    },
  },
  plugins: [],
}
