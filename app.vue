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

@media only screen and (min-width: 800px) {
  .content-wrapper {
    padding: $sp-big;
    padding-top: $sp-large;
  }
}
</style>
