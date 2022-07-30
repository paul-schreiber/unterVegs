import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['@fortawesome/fontawesome-svg-core/styles.css'],
    modules: [
        '@kevinmarrec/nuxt-pwa'
    ],
    pwa: {
        icon: {
            source: 'static/favicon/icon.png'
        },
        manifest: {
            name: 'unterVegs',
            lang: 'de',
            short_name: 'unterVegs',
            start_url: '/',
            display: 'standalone',
            background_color: '#ffffff',
            theme_color: '#498830',
            description: "unterVegs ist dein Begleiter für vegane Produkte bei Restaurantketten. Suche einfach nach Produkten oder Shops und checke die vegane Auswah!.",
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/main.scss";',
                },
            },
        }
    },
    target: 'static',
    typescript: {
        typeCheck: true
    },
})
