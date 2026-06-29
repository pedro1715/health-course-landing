/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E4',
        'warm-white': '#FDFAF4',
        olive: {
          DEFAULT: '#2A3528',
          light: '#3A5035',
          dark: '#1E2820',
        },
        lime: '#D4E840',
        coral: '#E8622A',
        beige: '#E8DEC8',
        'warm-gray': '#8A8478',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem',   { lineHeight: '1' }],
        '9xl': ['8rem',   { lineHeight: '1' }],
      },
      boxShadow: {
        card: '0 2px 20px rgba(26,26,26,0.07)',
        hover: '0 8px 40px rgba(26,26,26,0.14)',
        float: '0 16px 48px rgba(26,26,26,0.18)',
      },
    },
  },
  plugins: [],
};
