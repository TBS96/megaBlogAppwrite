/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': {
            width: '0%'
          },
          '50%': {
            width: '50%'
          },
          '100%': {
            width: '100%'
          }
        },
        blink: {
          '0%, 100%': {
            borderColor: 'transparent'
          },
          '50%': {
            borderColor: 'currentColor'
          }
        }
      },
      animation: {
        typing: 'typing 6s steps(28, end) infinite alternate, blink 0.5s step-end infinite'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}