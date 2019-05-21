import pkg from './package'
const axios = require('axios')

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: "Northway",
    htmlAttrs: {
      lang: 'en',
      dir: 'ltr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Traveling northway with a VW T4 California from 1993" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:100,400|PT+Serif:700' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-moment'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    [
      'storyblok-nuxt',
      {
        accessToken:
          process.env.NODE_ENV == 'production'
            ? 'hVOMD3fXYrzAZGWVbVKVjgtt'
            : 'OFfXWKmTJP9cC2h8BrQT0gtt',
        cacheProvider: 'memory'
      }
    ],
    '@nuxtjs/markdownit',
    ['@nuxtjs/google-analytics', {
      id: 'UA-140504196-1'
    }]
  ],

generate: {
  routes: function() {
    return axios.get(
      'https://api.storyblok.com/v1/cdn/stories?version=published&token=hVOMD3fXYrzAZGWVbVKVjgtt&starts_with=blog&cv=' + Math.floor(Date.now() / 1e3)
  ).then(res => {
    const blogPosts = res.data.stories.map(bp => bp.full_slug)
    return [
      '/',
      '/blog',
      '/about',
      ...blogPosts
    ]
  })
  }
},

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
