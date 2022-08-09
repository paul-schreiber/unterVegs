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
        icon: false,
        manifest: {
            name: config.name,
            lang: 'de',
            short_name: config.name,
            start_url: '/',
            display: 'standalone',
            background_color: '#faf4f4',
            theme_color: '#faf4f4',
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
            mobileAppIOS: true
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
    ssr: true,
    target: 'static',
    typescript: {
        typeCheck: true
    },
})
