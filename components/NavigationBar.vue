<template>
  <nav id="nav">
    <div class="navbar-container">
      <NuxtLink to="/" aria-label="Link zur Startseite">
        <div class="logo">
          <img src="~/assets/img/logo-unterVegs.svg" alt="unterVegs Logo" />
        </div>
      </NuxtLink>
      <div class="menu" v-if="!isMobile">
        <template v-for="option in menuOptions">
          <div class="menu-item" v-if="option.name != 'Home'">
            <NuxtLink :to="option.path">
              {{option.name}}
            </NuxtLink>
          </div>
        </template>
      </div>

      <button class="burger-menu" v-if="isMobile" @click="$emit('toggleMobileMenu')" aria-label="Menü-Button">
        <ClientOnly>
          <font-awesome-icon :icon="['fas', 'bars']" />
        </ClientOnly>
      </button>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
type MenuOption = {
  path: string,
  name: string
}

const route = useRoute()
const nuxtApp = useNuxtApp()
const emit = defineEmits(['hideMobileMenu', 'toggleMobileMenu'])
defineProps({
  menuOptions: {
    type: Array<MenuOption>,
    required: true
  }
})

const isMobile = computed((): boolean => {
  return process.client ? nuxtApp.$device.isMobile: false
})

watch(() => route.fullPath, () => {
  setTimeout(() => emit('hideMobileMenu'), 300)
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
