/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "c1" : "#021526",
        "c2" : "#03346E",
        "c3" : "#6EACDA",
        "c4" : "#E2E2B6",
      },
      boxShadow: {
        'custom-shadow': '2px 2px 6px rgba(6, 83, 128, 0.5), 2px 2px 6px rgba(110, 172, 218, 0.5), 2px 2px 6px rgba(226, 226, 182, 0.5)',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        'pulse-1': 'pulse 1.5s ease-in-out infinite',
        'pulse-2': 'pulse 1.5s ease-in-out 0.3s infinite',
        'pulse-3': 'pulse 1.5s ease-in-out 0.6s infinite',
      },
    },
  },
  plugins: [],
}