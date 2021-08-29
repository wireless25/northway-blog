module.exports = {
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
      serif: ['PT Serif', 'serif'],
    },
    extend: {
      colors: {
        nw: {
          gray: {
            dark: '#373737',
            text: '#2d3748',
          },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.nw.gray.text'),
            fontWeight: '300',
            h1: {
              fontFamily: '"PT Serif", serif',
              color: theme('colors.nw.gray.text'),
              textAlign: 'center',
            },
            h2: {
              fontFamily: '"PT Serif", serif',
              color: theme('colors.nw.gray.text'),
            },
            h3: {
              fontFamily: '"PT Serif", serif',
              color: theme('colors.nw.gray.text'),
            },
            h4: {
              fontFamily: '"PT Serif", serif',
              color: theme('colors.nw.gray.text'),
            },
            h5: {
              fontFamily: '"PT Serif", serif',
              color: theme('colors.nw.gray.text'),
            },
            h6: {
              fontFamily: '"PT Serif", serif',
              color: theme('colors.nw.gray.text'),
            },
            a: {
              color: theme('colors.nw.gray.text'),
              fontWeight: '300',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  variants: {},
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
