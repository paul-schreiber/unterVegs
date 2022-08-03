<template>
    <nav id="nav">
        <div class="mobile-menu">
            <div class="menu-item">
                <NuxtLink to="/about" @click.native="toggleMobileMenu">
                    Über uns
                </NuxtLink>
            </div>
            <div class="menu-item">
                <NuxtLink to="/donate" @click.native="toggleMobileMenu">
                    Unterstütze uns!
                </NuxtLink>
            </div>
            <div class="menu-item">
                <NuxtLink to="/contact" @click.native="toggleMobileMenu">
                    Kontakt
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: ['toggleMobileMenu']
})
</script>

<style lang="scss" scoped>
.mobile-menu {
    max-height: calc(90vh - $navbar-height);
    text-align: left;
    display: flex;
    flex-direction: column;
    background-color: $color-background-light;
    gap: $sp-medium;
    align-items: center;
    margin-top: $sp-huge;

    .menu-item {
        font-size: $fs-large;
    }

    a {
        color: $color-font-dark;
        font-weight: bold;
        text-decoration: none;
    }
}
</style>
