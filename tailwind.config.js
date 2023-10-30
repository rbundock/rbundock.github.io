const tailwindCSSVariables = require('@bly-th/tailwind-css-variables');
const tailwindCustomUtilities = require('@bly-th/tailwind-custom-utilities');

module.exports = {
  content: ["./flat/**/*.html"],
  corePlugins: {
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  theme: {
    extend: {
      lineHeight: {
        'cosy': '0.9'
      }
    },
    colors: {
      pink: '#FF46FA',
      lime: '#DAFF02',
      light: '#fff',
      charcoal: '#262626'
    },
    fontFamily: {
      sans: ['Urbanist', 'sans-serif'],
      block: ['Barlow', 'sans-serif']
    },
    fontSize: {
      /* @link https://utopia.fyi/type/calculator?c=320,18,1.2,1140,21,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      '200': 'clamp(0.7813rem, 0.7583rem + 0.1146vw, 0.84rem)',
      '300': 'clamp(0.9375rem, 0.8936rem + 0.2195vw, 1.05rem)',
      '400': 'clamp(1.125rem, 1.0518rem + 0.3659vw, 1.3125rem)',
      '500': 'clamp(1.35rem, 1.2366rem + 0.5671vw, 1.6406rem)',
      '600': 'clamp(1.62rem, 1.452rem + 0.8402vw, 2.0506rem)',
      '700': 'clamp(1.9438rem, 1.7018rem + 1.2098vw, 2.5638rem)',
      '800': 'clamp(2.3325rem, 1.9923rem + 1.7012vw, 3.2044rem)',
      '900': 'clamp(2.7994rem, 2.3286rem + 2.3537vw, 4.0056rem)'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    spacing: {
      /* @link https://utopia.fyi/space/calculator?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      200: 'clamp(0.31rem, calc(0.14rem + 0.85vw), 0.75rem)',
      300: 'clamp(0.69rem, calc(0.52rem + 0.85vw), 1.13rem)',
      400: 'clamp(1.00rem, calc(0.80rem + 0.98vw), 1.50rem)',
      500: 'clamp(1.31rem, calc(0.95rem + 1.83vw), 2.25rem)',
      600: 'clamp(2.00rem, calc(1.61rem + 1.95vw), 3.00rem)',
      700: 'clamp(2.63rem, calc(1.89rem + 3.66vw), 4.50rem)',
      800: 'clamp(3.94rem, calc(3.13rem + 4.02vw), 6.00rem)',
      900: 'clamp(5.25rem, calc(3.79rem + 7.32vw), 9.00rem)'
    }
  },
  plugins: [
    // Generates custom property values from tailwind config
    tailwindCSSVariables({
      colors: 'color',
      spacing: 'size',
      fontSize: 'text',
      fontFamily: 'font',
      fontWeight: 'font',
      lineHeight: 'leading',
      borderRadius: 'rounded'
    }),
    tailwindCustomUtilities({
      spacing: {
        name: 'flow-space',
        property: '--flow-space',
      },
    })
  ]
};