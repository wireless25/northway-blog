const fantomAnalytics = () => {
  if (!process.env.FANTHOM_ANALYTICS) {
    return {}
  }
  return {
    src: 'https://cloud.umami.is/script.js',
    'data-website-id': 'b693b4b4-2c29-40f4-a020-3bfeafa0affb',
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/fonts.css'],

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
    // https://i18n.nuxtjs.org/setup
    '@nuxtjs/i18n',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
  ],

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
    i18n: {
      locales: ['en', 'de'],
      routesNameSeparator: '___',
    },
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const contents = await $content({ deep: true })
        .only(['lang', 'slug', 'dir', 'de'])
        .fetch()

      return contents
        .map((page) => {
          if (page.lang !== 'en' || !page.de) {
            // eslint-disable-next-line array-callback-return
            return
          }
          if (page.dir === '/posts') {
            return {
              url: `/blog/${page.slug}`,
              links: [
                { lang: 'en', url: `/blog/${page.slug}` },
                { lang: 'de', url: `/de/blog/${page.de}` },
              ],
            }
          }

          return {
            url: `/${page.slug}`,
            links: [
              { lang: 'en', url: `/${page.slug}` },
              { lang: 'de', url: `/de/${page.de}` },
            ],
          }
        })
        .filter(Boolean)
    },
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-CH',
      },
      {
        code: 'de',
        name: 'Deutsch',
        iso: 'de-CH',
      },
    ],
    baseUrl: 'https://northway.blog',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          front: {
            title: 'Northway Blog',
            subline:
              'Welcome to the Northway blog. Here you will find insights about vanlife, camperbuilds and a lot more.',
          },
          navigation: {
            about: 'About',
            blog: 'Blog',
            privacy: {
              label: 'Privacy Policy',
              route: '/privacy-policy',
            },
            siteNote: {
              label: 'Site Note',
              route: '/site-note',
            },
            contact: {
              label: 'Contact',
              route: '/contact',
            },
          },
          overview: 'Overview',
          'home link': 'Go back home',
        },
        de: {
          front: {
            title: 'Northway Blog',
            subline:
              'Willkommen zum Northway Blog. Du findest hier Informationen zu Vanlife, Camperausbau und vieles mehr.',
          },
          navigation: {
            about: 'Über',
            blog: 'Blog',
            privacy: {
              label: 'Datenschutz',
              route: '/datenschutz',
            },
            siteNote: {
              label: 'Impressum',
              route: '/impressum',
            },
            contact: {
              label: 'Kontact',
              route: '/kontakt',
            },
          },
          overview: 'Übersicht',
          'home link': 'Zurück zur Startseite',
          'This page could not be found': 'Diese Seite gibt es leider nicht',
        },
      },
    },
  },
}
