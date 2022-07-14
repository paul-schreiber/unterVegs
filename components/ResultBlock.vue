<template>
  <div class="result-block">
    <header>
      <h4 class="block-title">{{ title }}</h4>
    </header>
    <div class="result-list">
      <ProductItem v-for="result in results" :key="result.id" :product="result" />
    </div>
  </div>
</template>

<script lang="ts">
import type { Product } from "../types"
import { defineComponent } from "vue";
export default defineComponent({
  name: "ResultBlock",
  props: {
    title: {
      type: String,
      required: true
    },
    results: {
      type: Object as () => Product[],
      required: true
    },
  },
});
</script>

<style lang="scss" scoped>
.result-list {
  width: fit-content;
}

header {
  display: flex;
  justify-content: flex-start;
  .block-title {
    margin: 0px;
  }
}
</style>