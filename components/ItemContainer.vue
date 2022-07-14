<template>
    <div class="item-container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .item-container {
    &:hover {
      background-color: $color-font-medium;
    }
  }
</style>