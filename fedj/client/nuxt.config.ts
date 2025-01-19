// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },

  pinia: {
    autoImports: ['defineStore', 'mapeStores', 'acceptHMRUpdate'],
  },
})