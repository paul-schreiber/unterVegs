<template>
  <nav id="nav">
    <NuxtLink to="/">
      <img src="../assets/img/logo.png" />
    </NuxtLink>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {},
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 80px;
  padding: $sp-medium;
  display: flex;
  align-items: center;

  img {
      height: 50px;
  }
}
</style>
