<template>
  <div class="result-list">
    <div class="matched-results">
      <slot v-if="hasResults" />
      <span v-else>Hmm, das sagt uns leider nichts..</span>
    </div>
    <div class="matched-suggestions" v-if="showSuggestions">
      <header>...oder meintest du das hier?</header>
      <div>
        <slot name="suggestions"></slot>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
defineProps(
  {
    hasResults: {
      type: Boolean,
      required: true
    },
    showSuggestions: {
      type: Boolean,
      required: true
    }
  }
)
</script>

<style lang="scss" scoped>
.result-list {
  width: 100%;

  .matched-results {
    padding: $sp-medium;
  }

  .matched-suggestions {
    border-top: 2px solid #efefef;
    padding: $sp-medium;

    header {
      width: 100%;
      text-align: center;
      margin: 0px $sp-small;
    }
  }
}
</style>