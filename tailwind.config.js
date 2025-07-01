/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      dropShadow: {
        default: '0 1px 2px rgba(0, 0, 0, 0.10)'
      },
      screens: {
        custom: '760px',
      },
    },
  },
  plugins: [],
}

