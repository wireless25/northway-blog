import pkg from './package'
const axios = require('axios')

export default {
  mode: 'universal',
  head: {
    title: "Northway",
    htmlAttrs: {
      lang: 'en',
      dir: 'ltr'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Traveling northway with a VW T4 California from 1993" },
      { hid: 'keywords', name: 'keywords', content: "Vanlife,VWT4,Solar,Traveling,Campervan" },
      { hid: 'robots', name: 'robots', content: 'index'},
      {
        hid: "google-site-verification",
        name: "google-site-verification",
        content: "tA9P0mUugmVdqJADOKFNVwIu-ZGH4btNQaJEYldLMyY"
      }
    ],
    script: [
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:300,400|PT+Serif:400,700' }
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
  plugins: [
    '~/plugins/vue-moment',
    '~/plugins/filters'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['storyblok-nuxt', {
      accessToken:
        process.env.NODE_ENV == 'production'
          ? 'hVOMD3fXYrzAZGWVbVKVjgtt'
          : 'OFfXWKmTJP9cC2h8BrQT0gtt',
      cacheProvider: 'memory'
      }
    ],
    '@nuxtjs/markdownit',
    ['nuxt-cookie-control', {
      barPosition: 'bottom-full',
      colors: {
        barTextColor: '#2D3748',
        barBackground: '#C6F6D5',
        barButtonColor: '#fff',
        barButtonBackground: '#2F855A',
        barButtonHoverColor: '#fff',
        barButtonHoverBackground: '#38A169',
        modalOverlay: '#000',
        modalOverlayOpacity: 0.8,
        modalUnsavedColor: '#fff',
        modalTextColor: '#2D3748',
        modalBackground: '#fff',
        modalButtonColor: '#fff',
        modalButtonHoverColor: '#fff',
        modalButtonBackground: '#2F855A',
        modalButtonHoverBackground: '#38A169',
        controlButtonBackground: '#fff',
        controlButtonHoverBackground: '#2F855A',
        controlButtonIconColor: '#2F855A',
        controlButtonIconHoverColor: '#fff',
        checkboxActiveCircleBackground: '#2F855A',
        checkboxActiveBackground: '#CBD5E0',
        checkboxInactiveCircleBackground: '#E2E8F0',
        checkboxInactiveBackground: '#CBD5E0',
        checkboxDisabledCircleBackground: '#fff',
        checkboxDisabledBackground: '#E2E8F0',
      },
    }]
  ],
  cookies: {
    necessary: [
      {
        name:  'Default Cookies',
        description:  'Used for cookie control.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name:  'Google Analitycs',
        description:  'Google Analytics helps us to improve the content on our page.',
        src:  'https://www.googletagmanager.com/gtag/js?id=UA-140504196-1',
        async:  true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () =>{
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-140504196-1', { 'anonymize_ip': true });
        },
        declined: () =>{
          document.cookie = '_ga' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          document.cookie = '_gid' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          document.cookie = '_gat_gtag_UA_140504196_1' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
      },
      {
        name:  'Google AdSense',
        description:  'Google Adsense helps us show you relevant content for you.',
        src:  'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        async:  true,
        cookies: ['IDE'],
        accepted: () =>{
          (adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-4579674376395488", enable_page_level_ads: true});
        },
        declined: () =>{
          document.cookie = 'IDE' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
      },
    ]
  },
  buildModules: [
    ['@nuxtjs/tailwindcss']
  ],
  generate: {
    routes: function() {
      return axios.get(
          'https://api.storyblok.com/v1/cdn/stories?version=published&token=hVOMD3fXYrzAZGWVbVKVjgtt&starts_with=blog&cv=' +
            Math.floor(Date.now() / 1e3)
      )
      .then(res => {
        const blogPosts = res.data.stories.map(bp => bp.full_slug)
        return ['/', '/about', 'privacy-policy', 'site-note', ...blogPosts]
      })
    }
  }
}
