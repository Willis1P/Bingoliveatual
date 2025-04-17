/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#13111B',
        'gray-800': '#1F1B2E',
        'gray-700': '#2A2640',
        'gray-600': '#363047',
        'gray-500': '#4B4458',
        'gray-400': '#6F6B7B',
        'gray-300': '#958FA3',
        'gray-200': '#B7B5BF',
        'gray-100': '#E6E6E9',
        'purple-900': '#2D1B69',
        'purple-800': '#3B2477',
        'purple-700': '#4A2D85',
        'purple-600': '#5935A3',
        'purple-500': '#6B3FBF',
        'purple-400': '#8257E5',
        'purple-300': '#9466FF',
        'purple-200': '#A883FF',
        'purple-100': '#C4B5FD',
        'pink-900': '#831843',
        'pink-800': '#9D174D',
        'pink-700': '#BE185D',
        'pink-600': '#DB2777',
        'pink-500': '#EC4899',
        'pink-400': '#F472B6',
        'pink-300': '#F9A8D4',
        'pink-200': '#FBCFE8',
        'pink-100': '#FCE7F3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
