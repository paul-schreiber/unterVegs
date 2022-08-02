import { defineNuxtConfig } from 'nuxt'
import config from './config/general'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['@fortawesome/fontawesome-svg-core/styles.css'],
    modules: [
        '@kevinmarrec/nuxt-pwa'
    ],
    pwa: {
        icon: {
            source: 'static/favicon/icon-transparent.png'
        },
        manifest: {
            name: config.name,
            lang: 'de',
            short_name: config.name,
            start_url: '/',
            display: 'standalone',
            background_color: '#ffffff',
            theme_color: '#f8f8f8',
            description: config.description
        },
        meta: {
            name: config.name,
            author: 'Paul Schreiber',
            description: config.description,
            ogDescription: config.description,
            ogSiteName: config.name,
            ogHost: config.url,
            ogTitle: config.name,
            nativeUI: true
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
