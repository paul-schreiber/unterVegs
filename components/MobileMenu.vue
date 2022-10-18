<template>
    <nav id="nav">
        <div class="mobile-menu">
            <div class="menu-item" v-for="option in menuOptions">
                <NuxtLink :to="option.path">
                    {{option.name}}
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script setup>
const props = defineProps({
    menuOptions: Array
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
    position: absolute;
    width: 100%;

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
