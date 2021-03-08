export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lukas Niestrat - Webdesign & Frontend Entwicklung',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: 'Moin! 👋 Ich bin Lukas, leidenschaftlicher Webdesigner und Frontend Entwickler aus dem schönen Ostfriesland. Ich gestalte und programmiere Websites, Anwendungen und andere digitale Produkte.' },
      { name: 'author', content: 'Lukas Niestrat' },
      { name: 'keywords', content: 'Design, Webdesign, Entwicklung, Webentwicklung, Programmierung, JavaScript, HTML' },
      { name: 'robots', content: 'index, follow' },
    ],
    link: [{ rel: 'icon', type: 'image/icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/styles/main.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
