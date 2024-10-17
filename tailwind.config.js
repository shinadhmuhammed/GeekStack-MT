/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loader: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'loader-1': 'loader 1.5s ease-in-out infinite',
        'loader-2': 'loader 1.5s ease-in-out infinite 0.3s',
        'loader-3': 'loader 1.5s ease-in-out infinite 0.6s',
      },
    },
  },
  plugins: [],
}