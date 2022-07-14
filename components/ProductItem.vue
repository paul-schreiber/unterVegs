<template>
  <router-link to="/product">
    <div class="product-item">
      <div class="badge-container">{{ product.badges }}</div>
      <div class="name-container">{{ product.name }}</div>
      <div class="label-container">{{ product.label }}</div>
      <div class="date-container">{{ timeSince(product.lastEdited) }}</div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { DateTime } from "luxon";
import type { Product } from "../types"
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    product: {
      type: Object as () => Product,
      required: true
    },
  },
  methods: {
    timeSince(date: Date) {
      const dayInPast = DateTime.fromJSDate(date)
      const diff = DateTime.now().diff(dayInPast, ["years", "months", "days", "hours", "minutes"]).toObject()
      return diff.years != 0 ? `${diff.years} years` : diff.months != 0 ? `${diff.months} months` : diff.days != 0 ? `${diff.days} days` : `${diff.hours} hours`
    }
  }
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
  width: fit-content;
}

.product-item {
  display: flex;
  width: 600px;
  height: 40px;
  align-items: center;

  .badge-container {
    width: 300px;
  }

  .name-container {
    width: 30%;
  }

  .label-container {
    width: 150px;
  }

  .date-container {
    width: 120px;
  }
}
</style>