<template>
  <div class="result-block">
    <header>
      <h4 class="block-title">{{ title }}</h4>
    </header>
    <div class="result-list">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ResultBlock",
  props: {
    title: {
      type: String,
      required: true
    }
  },
});
</script>

<style lang="scss" scoped>
.result-list {
  width: 100%;
}

header {
  display: flex;
  justify-content: flex-start;

  .block-title {
    margin: 0px;
  }
}
</style>