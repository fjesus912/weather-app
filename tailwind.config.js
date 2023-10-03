/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient_radial": "radial-gradient(50% 50% at 50% 50%, #D5F3FF 0%, #51B4E8 100%)"
      }
    },
  },
  plugins: [],
}

