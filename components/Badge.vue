<template>
    <div class="badge-container">
        <span>{{ name }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    }
})
</script>

<style lang="scss" scoped>
.badge-container {
    background-color: v-bind(color);
    width: fit-content;
    height: fit-content;
    border-radius: 7px;
    color: $color-font-light;
    padding: 0px $sp-tiny;
    margin-right: $sp-tiny;

    span {
        font-size: $fs-tiny;
        font-weight: $fw-bold;
    }
}
</style>