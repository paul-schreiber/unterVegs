<template>
  <div class="footer">
    <div class="inner-footer">
      <div class="logo">
        <img src="~/assets/img/logo-white-unterVegs.svg" alt="unterVegs Logo" />
      </div>
      <div class="sub-footer">
        <div class="insta-link-container">
          <a :href="socialInfo.instagram" aria-label="Link zu Instagram">
            <ClientOnly>
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </ClientOnly>
          </a>
        </div>
        <NuxtLink to="/legal">Impressum </NuxtLink>
        <NuxtLink to="/privacy">Datenschutz</NuxtLink>
        <div>
          Made with <ClientOnly>
            <font-awesome-icon :icon="['fas', 'heart']" />
          </ClientOnly> by Miri & <a class="contact-link" href="https://github.com/paul-schreiber">Paul</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import content from '../data/content'
const socialInfo = content.social
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: $color-background-dark;

  .inner-footer {

    max-width: $max-page-width;
    margin: auto;

    .sub-footer {
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

    .logo {
      padding: $sp-big 0px;

      img {
        height: 100px;
        cursor: pointer;
        user-select: none;
        /* supported by Chrome and Opera */
        -webkit-user-select: none;
        /* Safari */
        -khtml-user-select: none;
        /* Konqueror HTML */
        -moz-user-select: none;
        /* Firefox */
        -ms-user-select: none;
        /* Internet Explorer/Edge */
      }
    }
  }
}
</style>
