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
  background-color: rgb(27, 55, 27);
  height: 10vh;
  color: white;

  a {
    color: white;
  }
}
</style>
