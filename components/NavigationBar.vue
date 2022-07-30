<template>
  <nav id="nav">
    <div class="nav-bar-container">
      <NuxtLink to="/" aria-label="Link zur Startseite">
        <img src="~/assets/img/logo-unterVegs.svg" alt="unterVegs Logo"/>
      </NuxtLink>
      <div class="menu" v-if="!isMobile">
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

      <button class="burger-menu" v-if="isMobile" @click="toggleMenu" aria-label="Menü-Button">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>
    <div class="mobile-menu" v-if="showMobileMenu && isMobile">
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

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavigationBar",
  data() {
    return {
      showMobileMenu: false,
    }
  },
  computed: {
    isMobile(): boolean {
      return window.innerWidth < 700
    }
  },
  methods: {
    toggleMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
})
</script>

<style lang="scss" scoped>
nav {
  .nav-bar-container {
    width: 100%;
    height: $navbar-height;
    padding: $sp-medium;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    height: $navbar-height;
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
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-left: 40%;

    a {
      color: $color-font-dark;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>
