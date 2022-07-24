<template>
    <button @click="onClick()" :title="tooltip" :class="buttonType">{{name}}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: {
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
        },
        onClick: {
            type: Function,
            required: true
        }
    },
    computed: {
        buttonType() {
            return this.isPrimary ? 'primary' : 'secondary'
        }
    }
})
</script>

<style lang="scss" scoped>
button {
    all: unset;
    cursor: pointer;
    border-radius: 10px;
    padding: $sp-tiny;
    border: solid 2px $color-primary;
    margin: $sp-small;
    font-weight: bold;

    &.primary {
        background-color: $color-primary;
         color: $color-font-light;
    }
     &.secondary {
        border: solid 2px $color-font-medium;
    }
}
</style>