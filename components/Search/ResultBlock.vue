<template>
    <div class="result-list">
      <span v-if="!hasResults">Keine Ergebnisse.</span>
      <slot v-if="hasResults"></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ResultBlock",
  props: {
    hasResults: {
      type: Boolean,
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
    font-size: $fs-small;
    color: $color-font-medium;
  }
}
</style>