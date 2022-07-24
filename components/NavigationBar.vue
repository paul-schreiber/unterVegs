<template>
  <nav id="nav">
    <NuxtLink to="/">
      <img src="../assets/img/logo.png" />
    </NuxtLink>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavigationBar",
  props: {},
})
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: $navbarHeight;
  padding: $sp-medium;
  display: flex;
  align-items: center;

  img {
      height: 50px;
  }
}
</style>
