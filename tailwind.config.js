/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
      serif: ['PT Serif', 'serif']
    },
    extend: {
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem',
        '9xl': '96rem'
      },
      fontSize: {
        body: '1.375rem'
      }
    },
    transitionProperty: {
      // defaults to these values
      none: 'none',
      all: 'all',
      color: 'color',
      bg: 'background-color',
      border: 'border-color',
      colors: ['color', 'background-color', 'border-color'],
      opacity: 'opacity',
      transform: 'transform'
    }
  },
  variants: {},
  plugins: []
}
