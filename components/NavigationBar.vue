<template>
  <nav id="nav">
    <NuxtLink to="/legal">
      <img alt="Vue logo" src="../assets/img/logo.png" />
    </NuxtLink>
    unterVegs
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
  height: 60px;
  background-color: rgb(243, 243, 243);
  padding: $sp-small;
  display: flex;
  align-items: center;

  img {
      width: 50px;
      height: 50px;
  }
}
</style>
