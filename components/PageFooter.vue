<template>
  <div class="footer">
    <div class="inner-footer">
      <div class="insta-link-container">
        <a :href="socialInfo.instagram" aria-label="Link zu Instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </div>
      <NuxtLink to="/legal">Impressum </NuxtLink>
      <NuxtLink to="/privacy">Datenschutz</NuxtLink>
      <div>
        Made with ❤️ by Miri & <a class="contact-link" href="https://github.com/paul-schreiber">Paul</a>
      </div>
    </div>
  </div>
</template>

<script>
import content from '../data/content'
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageFooter",
  props: {},
  data() {
    return {
      socialInfo: content.social
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: $color-background-dark;

  .inner-footer {
    max-width: $max-page-width;
    margin: auto;
    min-height: $footer-height;
    color: $color-font-light;
    padding: $sp-small $sp-big;
    display: flex;
    gap: $sp-small;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    a {
      color: $color-font-light;
    }

    .insta-link-container {
      font-size: $fs-large;
      vertical-align: center;
    }
  }
}
</style>
