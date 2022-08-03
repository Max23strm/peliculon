/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      animation: {
        "fade-in": "fade-in 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
      },
      keyframes: {
        "fade-in": {
        "0%": {
          opacity: 0
        },
        "100%" :{
          opacity: 1
        }
}}

    },
  },
  plugins: [],
}
