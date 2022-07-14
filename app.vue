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
  color: #2c3e50;
}

html, body {
  min-height: 100vh;
  margin: 0px;
}

.content-wrapper {
  padding: 5vw;
}
</style>
