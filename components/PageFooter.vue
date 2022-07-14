<template>
  <div class="footer">
    <NuxtLink to="/legal">Impressum </NuxtLink>
    <NuxtLink to="/privacy">Datenschutz</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  props: {},
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: $color-primary;
  height: 10vh;
  color: $color-font-light;
  padding: $sp-big;


  a {
    color: $color-font-light;
    ;
  }
}
</style>
