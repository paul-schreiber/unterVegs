<template>
  <div id="app">
    <NavigationBar :toggleMobileMenu="toggleMobileMenu" :hideMobileMenu="hideMobileMenu" />
    <MobileMenu v-if="showMobileMenu && isMobile" :toggleMobileMenu="toggleMobileMenu" />
    <template v-else>
      <div class="content-wrapper">
        <NuxtPage />
      </div>
      <CookieBanner :onAccept="enableAnalytics" />
      <PageFooter />
    </template>
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: "shortcut icon",
      type: "image/svg+xml",
      href: "static/favicon/favicon.svg",
      hid: 'icon',
    },
    {
      rel: "apple-touch-icon",
      sizes: "512x512",
      href: "static/favicon/icon-background-light.png",
      hid: "apple-touch-icon"
    },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-2048-2732.jpg", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-1668-2388.jpg", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-1536-2048.jpg", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-1668-2224.jpg", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-1620-2160.jpg", media: "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-1284-2778.jpg", media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-1242-2688.jpg", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-1170-2532.jpg", media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-1125-2436.jpg", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-1242-2208.jpg", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-828-1792.jpg", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-750-1334.jpg", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
    { rel: "apple-touch-startup-image", href: "/splash-icons/apple-splash-640-1136.jpg", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" }
  ]
})
</script>

<script lang="ts">
import { useState } from "vue-gtag-next";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      showMobileMenu: false,
    }
  },
  onMounted() {
    //temporary fix for the bug that the page is scrolled to the bottom on load
    window.scrollTo(0, 0)
  },
  computed: {
    isMobile(): boolean {
      return this.$device.isMobile
    }
  },
  methods: {
    enableAnalytics() {
      const { isEnabled } = useState()
      isEnabled.value = true
    },
    hideMobileMenu() {
      this.showMobileMenu = false
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: $fs-normal;
  text-align: center;
  color: $color-font-dark;
  touch-action: manipulation;
}

html * {
  box-sizing: border-box;
}

html,
body {
  min-height: 100vh;
  margin: 0px;
  background-color: $color-background-light;
}

.content-wrapper {
  padding: $sp-medium;
  display: grid;
  width: 100%;
  max-width: $max-page-width;
  margin: auto;
  min-height: calc(100vh - $navbar-height)
}

h1 {
  margin-top: 0px;
  font-size: $fs-huge;
}


h2 {
  font-size: $fs-large;
}

h3 {
  font-size: $fs-medium;
}

@media only screen and (min-width: 800px) {
  .content-wrapper {
    padding: $sp-big;
  }
}
</style>
