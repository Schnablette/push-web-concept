import formsPlugin from '@tailwindcss/forms'
import headlessuiPlugin from '@headlessui/tailwindcss'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        lapis: {
          DEFAULT: '#111B44',
          50: '#C0CAEF',
          100: '#B0BCEB',
          200: '#8FA0E3',
          300: '#6F84DB',
          400: '#4E68D3',
          500: '#324FC7',
          600: '#2942A6',
          700: '#213585',
          800: '#192865',
          900: '#111B44',
          950: '#0B122E',
        },
        tigereye: {
          DEFAULT: '#FF6F3A',
          50: '#FFF5F2',
          100: '#FFE6DD',
          200: '#FFC8B4',
          300: '#FFAB8C',
          400: '#FF8D63',
          500: '#FF6F3A',
          600: '#FF4602',
          700: '#C93600',
          800: '#912700',
          900: '#591800',
          950: '#3D1000',
        },
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
