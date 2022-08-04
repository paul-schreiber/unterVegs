<template>
    <div class="badge-container" :title="title">
        <div :class="{ 'badge-name': true, mobile: isMobile }"> {{ name }}</div>
        <button class="close-button" v-if="removable" @click="onClose(id)" aria-label="Badge entfernen">
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
        removable: {
            type: Boolean,
            required: true
        },
        onClose: {
            type: Function,
            required: false
        }
    },
    computed: {
        isMobile() {
            return this.$device.isMobile
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
    display: flex;
    align-items: center;
    justify-content: center;

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