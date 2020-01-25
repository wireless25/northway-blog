/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Nunito Sans', 'sans-serif'],
      'serif': ['PT Serif', 'serif'],
    },
    extend: {
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem',
        '9xl': '96rem',
      }
    }
  },
  variants: {},
  plugins: []
}
