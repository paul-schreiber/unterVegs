<template>
    <button :title="tooltip" :class="buttonType">{{ name }}</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    isPrimary: {
        type: Boolean,
        required: true
    },
    tooltip: {
        type: String,
        required: false
    }
})

const buttonType = computed(() => {
    return props.isPrimary ? 'primary' : 'secondary'
})
</script>

<style lang="scss" scoped>
button {
    all: unset;
    cursor: pointer;
    border-radius: 10px;
    padding: $sp-small;
    border: solid 2px $color-primary;
    font-weight: bold;
    white-space: nowrap;

    &.primary {
        background-color: $color-primary;
        color: $color-font-light;
    }

    &.secondary {
        border: solid 2px $color-font-medium;
    }

    &:disabled {
        border: 2px solid #b8b8b8;
        background-color: #e0e0e0;
        color: #9c9c9c;
        cursor: not-allowed;
    }
}
</style>