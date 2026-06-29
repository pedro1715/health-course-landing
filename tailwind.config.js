/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sky:    '#E8EEF8',
        navy:   '#0D0E1C',
        'navy-soft': '#1A1B2E',
        yellow: '#F5C430',
        'yellow-light': '#FFFBEA',
        'card-bg': '#F0F3FA',
        muted:  '#8B90A0',
        'muted-dark': '#5A5F72',
        green:  '#4CAF7D',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans:    ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:  '0 2px 16px rgba(13,14,28,0.06)',
        float: '0 8px 32px rgba(13,14,28,0.12)',
        deep:  '0 20px 60px rgba(13,14,28,0.18)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
