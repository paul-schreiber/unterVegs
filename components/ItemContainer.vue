<template>
  <NuxtLink :to="link">
    <div class="item-container">
      <slot />
    </div>
  </NuxtLink>

</template>

<script lang="ts" setup>
defineProps({
  link: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: $color-font-dark;
  width: fit-content;
}

.item-container {
  width: 100%;
  border-radius: 15px;
  padding: $sp-small;

  &:hover {
    background-color: $color-light-grey;
  }
}
</style>