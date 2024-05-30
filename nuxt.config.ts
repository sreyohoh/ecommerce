// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["usebootstrap", "@nuxtjs/i18n"],
  alias:{
    assets: "/<rootDir>/assets",
  },
  usebootstrap: {
    bootstrap: {
      prefix: ``
    },
    html: {
      prefix: `B`
    },
  },
  // build:{},
  css: [
    "bootstrap/scss/bootstrap.scss",
    '~/assets/sass/main.sass'
  ],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'kh',
        name: 'Khmer'
      }
    ], // used in URL path prefix
    strategy: 'prefix_except_default',

    defaultLocale: 'en', // default locale of your project for Nuxt pages and routings
  },
    vite: {
      css: {
        preprocessorOptions: {
          sass: {
            additionalData: '@use "~/assets/sass/_variables.sass" as *\n'
          }
        }
      }
    }
})