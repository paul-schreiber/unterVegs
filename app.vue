<template>
  <div id="app">
    <NavigationBar />
    <router-view></router-view>
    <PageFooter />
  </div>
</template>


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

html, body {
  min-height: 100vh;
  margin: 0px;
}

.content-wrapper {
  padding: $sp-big;
}
</style>
