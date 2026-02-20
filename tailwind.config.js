/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          indigo: '#2D1B69',
          lavender: '#F6F4FF',
        },
        accent: {
          green: '#0E9F6E',
        },
        dark: {
          bg: '#0F0F1A',
          card: '#17172A',
          text: '#F4F4F8',
        }
      },
      screens: {
        'tablet': '768px',
        'desktop': '1024px',
        'large': '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          tablet: '40px',
          desktop: '80px',
        },
      },
    },
  },
  plugins: [],
};
