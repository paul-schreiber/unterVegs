<template>
    <h4 class="slugline">{{ capitalizedTitle }}</h4>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
    title: String
})

const capitalizedTitle = computed(() => {
    return props.title.toLocaleUpperCase()
})
</script>

<style lang="scss" scoped>
.slugline {
    margin: 0px;
    font-weight: $fw-bold;
    color: $color-font-medium;
    letter-spacing: 2px;
}
</style>