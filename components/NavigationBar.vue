<template>
  <nav id="nav">
    <div class="navbar-container">
      <NuxtLink to="/" aria-label="Link zur Startseite">
        <div class="logo">
          <img src="~/assets/img/logo-unterVegs.svg" alt="unterVegs Logo" />
        </div>
      </NuxtLink>
      <div class="menu" v-if="!isMobile">
        <div class="menu-item">
          <NuxtLink to="/about">
            Die Idee
          </NuxtLink>
        </div>
        <div class="menu-item">
          <NuxtLink to="/donate">
            Unterstütze uns
          </NuxtLink>
        </div>
        <div class="menu-item">
          <NuxtLink to="/contact">
            Kontakt
          </NuxtLink>
        </div>
      </div>

      <button class="burger-menu" v-if="isMobile" @click="toggleMobileMenu" aria-label="Menü-Button">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'NavigationBar',
  props: ['toggleMobileMenu', 'hideMobileMenu'],
  computed: {
    isMobile(): boolean {
      return this.$device.isMobile
    }
  },
  watch: {
    $route() {
      setTimeout(this.hideMobileMenu, 300);
    }
  }
})
</script>

<style lang="scss" scoped>
nav {
  max-width: $max-page-width;
  margin: auto;

  .navbar-container {
    width: 100%;
    max-height: $navbar-height;
    min-height: 100px;
    padding: $sp-small;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo img {
    height: calc($navbar-height * 0.80);
    min-height: 80px;
    max-height: 105px;
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

  .burger-menu {
    all: unset;
    cursor: pointer;
    font-size: $fs-large;
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

  .mobile-menu {
    position: absolute;
    right: 0;
    top: $navbar-height;
    width: 50%;
    height: 100vh;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-left: 40%;
    background-color: $color-background-light;

    a {
      color: $color-font-dark;
      font-weight: bold;
      text-decoration: none;
    }
  }
}

@media only screen and (min-width: 800px) {
  nav {
    .navbar-container {
      padding: $sp-medium;
    }
  }
}
</style>
