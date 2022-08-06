import { defineNuxtConfig } from 'nuxt'
import config from './config/general'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['@fortawesome/fontawesome-svg-core/styles.css'],
    modules: [
        '@kevinmarrec/nuxt-pwa'
    ],
    buildModules: [
        '@nuxtjs/device',
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
        }
    },
    publicRuntimeConfig: {
        FRIENDLY_CAPTCHA_SITE_KEY: process.env.FRIENDLY_CAPTCHA_SITE_KEY,
        EMAIL_JS_PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,
        EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
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
    generate: {
        fallback: true
    },
    ssr: false,
    target: 'static',
    typescript: {
        typeCheck: true
    },
})
