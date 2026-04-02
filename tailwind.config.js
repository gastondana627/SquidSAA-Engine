/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#020617', // Deep Space Noir
          900: '#0f172a',
          800: '#1e293b',
        },
        kaggle: {
          DEFAULT: '#20BEFF', // Kaggle Blue
          dim: 'rgba(32, 190, 255, 0.2)',
        },
        cosmic: {
          DEFAULT: '#E2E8F0', // Cosmic Silver
          dim: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
