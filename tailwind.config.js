/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ZUL ENERGY Primary Colors
        'zul-green': '#00954D',
        'zul-yellow': '#FFD600', 
        'zul-black': '#001400',
        
        // ZUL ENERGY Secondary Colors
        'zul-green-light': '#41AD49',
        'zul-grey-dark': '#58585B',
        'zul-grey-light': '#BCBEC0',
        
        // Primary color variations (based on main green)
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00954D', // Main ZUL Green
          600: '#008a45',
          700: '#007a3d',
          800: '#006935',
          900: '#00582d',
        },
        
        // Secondary color system
        secondary: {
          50: '#fefdf8',
          100: '#fef7ed',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FFD600', // ZUL Yellow
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        
        // Neutral greys (based on ZUL greys)
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#BCBEC0', // ZUL Light Grey
          500: '#737373',
          600: '#58585B', // ZUL Dark Grey
          700: '#404040',
          800: '#262626',
          900: '#001400', // ZUL Black
        },
      },
      fontFamily: {
        'primary': ['Helvetica', 'Arial', 'sans-serif'],
        'secondary': ['Arial', 'Helvetica', 'sans-serif'],
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'arial': ['Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        // Helvetica sizes
        'headline': ['35pt', { lineHeight: '1.2', fontWeight: '700' }], // 35pt Helvetica Bold
        'subhead': ['25pt', { lineHeight: '1.3', fontWeight: '700' }],   // 25pt Helvetica Bold
        'body': ['12pt', { lineHeight: '1.5', fontWeight: '400' }],      // 12pt Helvetica Regular
        'callout': ['8pt', { lineHeight: '1.4', fontWeight: '700', fontStyle: 'italic' }], // 8pt Bold Oblique
        
        // Convert pt to rem for web (1pt ≈ 1.33px, 16px = 1rem)
        'headline-web': ['2.92rem', { lineHeight: '1.2', fontWeight: '700' }], // ~35pt
        'subhead-web': ['2.08rem', { lineHeight: '1.3', fontWeight: '700' }],   // ~25pt
        'body-web': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],         // ~12pt
        'callout-web': ['0.67rem', { lineHeight: '1.4', fontWeight: '700', fontStyle: 'italic' }], // ~8pt
      },
    },
  },
  plugins: [],
}
