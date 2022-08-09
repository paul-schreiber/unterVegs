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
      sizes: "196x196",
      href: "static/favicon/icon-background-light.png",
      hid: "apple-touch-icon"
    },
    {
      rel: "apple-touch-startup-image",
      href: "static/favicon/splash-image.jpg",
      hid: "apple-touch-startup-image-iphone"
    }
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
