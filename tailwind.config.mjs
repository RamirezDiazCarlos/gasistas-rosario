/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        flame: {
          DEFAULT: '#e07418',
          light: '#f59e0b',
          dark: '#b85c12',
          50: '#fff8ed',
          100: '#ffeed4',
          200: '#fdd9a8',
          300: '#fbbf70',
          400: '#f89736',
          500: '#f67714',
          600: '#e07418',
          700: '#b85c12',
          800: '#934916',
          900: '#773d16',
        },
        dark: {
          DEFAULT: '#171412',
          2: '#211d1a',
          3: '#2d2825',
        },
        warm: {
          50: '#f8f5f1',
          100: '#f0ebe4',
          200: '#e5ddd5',
          300: '#d4c9be',
          800: '#6b5e54',
          900: '#3d322b',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
};
