<template>
  <div id="app">
    <NavigationBar />
    <div class="content-wrapper">
      <NuxtPage />
    </div>
    <PageFooter />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  head() {
    return {
      title: 'unterVegs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'unterVegs ist dein Reisebegleiter für vegane Produkte in Restaurantketten. Suche einfach nach Produkten oder Shops und checke die vegane Auswah!'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'static/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'static/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', href: 'static/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', href: 'static/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: 'static/favicon/site.webmanifest' },
      ]
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
  min-height: calc(100vh - 10vh - 80px)
}

@media only screen and (min-width: 800px) {
  .content-wrapper {
    padding: $sp-big;
  }
}
</style>
