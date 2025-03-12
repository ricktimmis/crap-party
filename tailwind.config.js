/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'crap-blue': {
          DEFAULT: '#0A2472',
          light: '#2563EB',
          dark: '#041333',
        },
        'crap-red': {
          DEFAULT: '#DC2626',
          light: '#EF4444',
          dark: '#991B1B',
        },
        'crap-white': '#FFFFFF',
        'crap-off-white': '#F8FAFC',
        'crap-gray': {
          100: '#F8FAFC',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
    },
  },
  plugins: [],
} 