<template>
    <div class="slugline">{{capitalizedTitle}}</div>
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
            const test = ''
            return this.title.toLocaleUpperCase()
        }
    }
})
</script>

<style lang="scss">
.slugline {
    font-weight: $fw-bold;
    color: $color-font-medium;
    letter-spacing: 2px;
}
</style>