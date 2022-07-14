<template>
  <div class="result-block">
    <header>
      <h4 class="block-title">{{ title }}</h4>
    </header>
    <div class="result-list">
      <ResultItem v-for="result in results" :key="result.id" :item="result" />
    </div>
  </div>
</template>

<script lang="ts">
import type { Item } from "../types"
import { defineComponent } from "vue";
export default defineComponent({
  name: "ResultBlock",
  props: {
    title: {
      type: String,
      required: true
    },
    results: {
      type: Object as () => Item[],
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