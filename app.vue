<template>
  <div id="app">
    <NavigationBar />
    <div class="content-wrapper">
      <NuxtPage />
    </div>
    <CookieBanner :onAccept="enableAnalytics" />
    <PageFooter />
  </div>
</template>

<script>
import { useState } from "vue-gtag-next";
import { defineComponent } from "vue";
export default defineComponent({
  head() {
    return {
      title: 'unterVegs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'unterVegs ist dein Begleiter für vegane Produkte bei Restaurantketten. Suche einfach nach Produkten oder Shops und checke die vegane Auswah!'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'static/favicon/favicon.svg' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'static/favicon/apple-touch-icon.png' },
      ]
    }
  },
  methods: {
    enableAnalytics() {
      const { isEnabled } = useState()
      isEnabled.value = true
    }
  }
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-font-dark;
}

html * {
  box-sizing: border-box;
}

html,
body {
  min-height: 100vh;
  margin: 0px;
  background-color: $color-light-background;
}

.content-wrapper {
  padding: $sp-small;
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  min-height: calc(100vh - $footer-height - $navbar-height)
}

@media only screen and (min-width: 800px) {
  .content-wrapper {
    padding: $sp-big;
  }
}
</style>
