import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wiki-reader',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Public environment variables
  publicRuntimeConfig: {
    // Wiki settings
    wikiEndpoint: process.env.WIKI_ENDPOINT || 'https://en.wikipedia.org',
    wikiArticlePath: process.env.WIKI_ARTICLE_PATH || '/wiki/',
    wikiActionApi: process.env.WIKI_ACTION_API || '/w/api.php',
    wikiName: process.env.WIKI_NAME || 'English Wikipedia',
    wikiArticleLicense: process.env.WIKI_ARTICLE_LICENSE || 'CC BY-SA 3.0',
    wikiLicenseUrl: process.env.WIKI_LICENSE_URL || 'https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License',

    // App settings
    appName: process.env.APP_NAME || '[PH] Wiki Reader',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  // Private environment variables
  privateRuntimeConfig: {

  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

export default config
