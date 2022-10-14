<template>
    <div class="badge-container" :title="title">
        <div :class="{ 'badge-name': true, mobile: isMobile }"> {{ name }}</div>
        <button class="close-button" v-if="isRemovable" @click="$emit('close', id)" aria-label="Badge entfernen">
            <ClientOnly>
                <font-awesome-icon :icon="['fas', 'xmark']" />
            </ClientOnly>
        </button>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
defineProps({
    name: {
        type: String,
        required: true
    },
    id: {
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
    isRemovable: {
        type: Boolean,
        required: true
    },
})
const nuxtApp = useNuxtApp()
const isMobile = computed(() => {
    return nuxtApp.$device.isMobile
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
    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: 0.04rem;

    .badge-name {
        display: grid;
        align-items: center;
        font-size: $fs-tiny;
        font-weight: $fw-bold;
        height: 16px;
        line-height: 16px;

        &.mobile {
            height: 20px;
        }
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