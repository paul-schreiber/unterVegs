<template>
    <div class="badge-container" :title="title">
        <span> {{ name }}</span>
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
        },
        title: {
            type: String,
            required: false
        }
    }
})
</script>

<style lang="scss" scoped>
.badge-container {
    background-color: v-bind(color);
    width: fit-content;
    height: fit-content;
    border-radius: 4px;
    color: $color-font-light;
    padding: 0px $sp-tiny;
    margin-right: $sp-tiny;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: $fs-tiny;
        font-weight: $fw-bold;
        height: 16px;
        line-height: 16px;
    }
}
</style>