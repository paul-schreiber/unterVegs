<template>
    <div class="item-container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .item-container {
        width: 100%;
        border-radius: 15px;
        padding: $sp-small;
    &:hover {
      background-color: $color-light-grey;
    }
  }
</style>