const fantomAnalytics = () => {
  if (!process.env.FANTHOM_ANALYTICS) {
    return {}
  }
  return {
    src: 'https://cdn.usefathom.com/script.js',
    'data-site': 'CJQXCHJL',
    'data-spa': 'auto',
    defer: true,
  }
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Northway',
    htmlAttrs: {
      lang: 'en',
      dir: 'ltr',
    },
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Traveling northway with a VW T4 California from 1993',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Vanlife,VWT4,Solar,Traveling,Campervan',
      },
      { hid: 'robots', name: 'robots', content: 'index' },
    ],
    script: [fantomAnalytics()],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400&family=PT+Serif:wght@400;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment',
    // https://cloudinary.nuxtjs.org
    '@nuxtjs/cloudinary',
    // https://typescript.nuxtjs.org
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
    // https://i18n.nuxtjs.org/setup
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    jit: true,
  },

  cloudinary: {
    cloudName: process.env.CLOUDNAME,
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    useComponent: true,
  },

  sitemap: {
    hostname: 'https://northway.blog',
    gzip: true,
    routes: [
      '/blog/armaflex-af-vs-xg-vs-ace',
      '/blog/how-much-solar-power-do-i-need',
      '/blog/how-to-fix-slow-retracting-seat-belts',
      'privacy-policy',
      'site-note',
    ],
  },

  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
        },
        de: {
          welcome: 'Willkommen',
        },
      },
    },
  },
}
