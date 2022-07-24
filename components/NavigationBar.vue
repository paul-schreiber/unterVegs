<template>
  <nav id="nav">
    <NuxtLink to="/">
      <img src="~/assets/img/logo.png" />
    </NuxtLink>
    <div class="menu">
      <div class="menu-item">
        <NuxtLink to="/about">
          Über uns
        </NuxtLink>
      </div>
      <div class="menu-item">
        <NuxtLink to="/donate">
          Unterstütze uns!
        </NuxtLink>
      </div>
    </div>
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
  justify-content: space-between;

  img {
    height: 50px;
  }

  .menu {
    height: 100%;
    display: flex;
    align-items: center;

    .menu-item {
      margin-left: $sp-big;
      font-size: $fs-medium;

      a {
        color: $color-font-dark;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
}
</style>
