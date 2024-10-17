// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@picocss/pico/css/pico.min.css',
  ],
 render: {
    http2: {
      push: true,
    },
    bundleRenderer: {
      shouldPreload: (file) => file.endsWith('.css'),
    },
  },
  server: {
    host: '0.0.0.0', 
    port: 3000,
  },
})
