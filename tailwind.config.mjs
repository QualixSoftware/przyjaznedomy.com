import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Base Colors
        cream: '#FAF9F6',
        'warm-gray': {
          50: '#FAF9F7',
          100: '#F3F2F0',
          200: '#E8E6E1',
          300: '#D3CFC6',
          400: '#B3ADA0',
          500: '#8B8680',
          600: '#6B655C',
          700: '#4F4B43',
          800: '#3A372F',
          900: '#2C2C2C',
        },
        
        // Nature Accents - Brzozowe (Birch) Theme
        birch: {
          50: '#F3F7F4',
          100: '#E1EBE5',
          200: '#C3D7CB',
          300: '#9EBBA7',
          400: '#72957F',
          500: '#4A7C59',
          600: '#3A6246',
          700: '#2F4E38',
          800: '#2D5016',
          900: '#1A3A21',
        },
        
        forest: '#2D5016',
        sage: '#87A96B',
        moss: '#8A9A5B',
        
        // Warm Wood Tones
        wood: {
          light: '#DEB887',
          DEFAULT: '#C19A6B',
          dark: '#A0826D',
          honey: '#F0E5D8',
        },
        
        // Property Status Colors
        status: {
          available: '#4A7C59',
          reserved: '#F4A460',
          sold: '#CD5C5C',
        },
      },
      
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
      },
      
      fontSize: {
        // Mobile-first typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        'bounce-soft': 'bounce-soft 1s infinite',
      },
      
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'bounce-soft': {
          '0%, 100%': { 
            transform: 'translateY(0)' 
          },
          '50%': { 
            transform: 'translateY(-10px)' 
          },
        },
      },
      
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'warm': '0 10px 40px -15px rgba(193, 154, 107, 0.25)',
      },
      
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      
      borderRadius: {
        'soft': '0.625rem',
      },
    },
  },
  plugins: [
    function({ addBase, addComponents, addUtilities }) {
      addBase({
        'html': {
          scrollBehavior: 'smooth',
        },
        'body': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
      });
      
      addComponents({
        '.btn': {
          '@apply inline-flex items-center justify-center px-6 py-3 font-medium rounded-soft transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2': {},
        },
        '.btn-primary': {
          '@apply btn bg-birch-500 text-white hover:bg-birch-600 focus:ring-birch-500': {},
        },
        '.btn-secondary': {
          '@apply btn bg-warm-gray-100 text-warm-gray-700 hover:bg-warm-gray-200 focus:ring-warm-gray-400': {},
        },
        '.btn-whatsapp': {
          '@apply btn bg-green-500 text-white hover:bg-green-600 focus:ring-green-500': {},
        },
        '.container-custom': {
          '@apply container mx-auto px-4 sm:px-6 lg:px-8': {},
        },
        '.section-padding': {
          '@apply py-12 md:py-16 lg:py-20': {},
        },
      });
      
      addUtilities({
        '.tap-highlight-transparent': {
          '-webkit-tap-highlight-color': 'transparent',
        },
        '.scrollbar-hide': {
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }
  ],
};
