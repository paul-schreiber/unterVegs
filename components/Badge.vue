<template>
    <div class="badge-container" :title="title">
        <div class="badge-name"> {{ name }}</div>
        <button class="close-button" v-if="removable" @click="onClose(name)">
            <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
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
        },
        removable: {
            type: Boolean,
            required: true
        },
        onClose: {
            type: Function,
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

    .badge-name {
        font-size: $fs-tiny;
        font-weight: $fw-bold;
        height: 16px;
        line-height: 16px;
    }

    .close-button {
        background-color: inherit;
        color: inherit;
        border: none;
        cursor: pointer;
        padding: 0px;
        padding-left: $sp-tiny;
    }
}
</style>