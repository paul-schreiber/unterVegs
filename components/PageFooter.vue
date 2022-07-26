<template>
  <div class="footer">
    <div class="insta-link-container">
      <a href="https://www.instagram.com/untervegs_com/">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </div>
    <NuxtLink to="/legal">Impressum </NuxtLink>
    <NuxtLink to="/privacy">Datenschutz</NuxtLink>
    <div>
      Made with ❤️ by Miri & <a class="contact-link" href="https://github.com/paul-schreiber">Paul</a>
    </div>
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
  height: $footer-height;
  color: $color-font-light;
  padding: $sp-medium $sp-big;
  display: flex;
  justify-content: space-between;
  align-items: center;


  a {
    color: $color-font-light;
  }

  .insta-link-container {
    font-size: $fs-large;
    vertical-align: center;
  }
}
</style>
