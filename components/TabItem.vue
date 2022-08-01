<template>
    <div class="tab-item" :class="{ active: isActive }">
        <div>
            <font-awesome-icon :icon="['fas', icon]" />
        </div>
        <div class="tab-name">
            {{ title }}
        </div>
        <div class="result-count">{{ resultCount }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "TabItem",
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        resultCount: {
            type: Number,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        },
    },
});
</script>

<style lang="scss" scoped>
.tab-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: $color-font-dark;
    margin: 0px $sp-small;
    padding: $sp-small;
    border-bottom: solid 2px transparent;
    z-index: 100;

    &.active {
        border-bottom: solid 2px $color-primary;
    }

    .tab-name {
        margin-left: $sp-tiny;
    }

    .result-count {
        width: 30px;
        margin-left: $sp-tiny;
        background-color: $color-light-grey;
        padding: 0px $sp-tiny;
        border-radius: 10px;
    }
}
</style>