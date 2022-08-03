<template>
  <nav id="nav">
    <div class="navbar-container">
      <NuxtLink to="/" aria-label="Link zur Startseite" @click="hideMobileMenu">
        <img src="~/assets/img/logo-unterVegs.svg" alt="unterVegs Logo" class="logo" />
      </NuxtLink>
      <div class="menu" v-if="!isMobile">
        <div class="menu-item">
          <NuxtLink to="/about">
            Über uns
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
      return window.innerWidth < 700
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
    padding: $sp-medium;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    height: calc($navbar-height * 0.80);
    min-height: 80px;
    max-height: 105px;
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
      padding: $sp-big;
    }
  }
}
</style>
