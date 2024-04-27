// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // https://nuxt.com/docs/api/nuxt-config#srcdir
  srcDir: 'src/',
  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nuxt/image'],
})
