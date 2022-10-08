<template>
    <h4 class="slugline">{{ capitalizedTitle }}</h4>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        }
    },
    computed: {
        capitalizedTitle() {
            return this.title.toLocaleUpperCase()
        }
    }
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