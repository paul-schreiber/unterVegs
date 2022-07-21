<template>
  <div class="footer">
    <NuxtLink to="/legal">Impressum </NuxtLink>
    <NuxtLink to="/privacy">Datenschutz</NuxtLink>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageFooter",
  props: {},
})
</script>

<style lang="scss" scoped>
.footer {
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
