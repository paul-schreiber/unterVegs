<template>
  <router-link to="/product">
    <div class="product-item">
      <div class="badges-container">
        <Badge v-for="badge in product.badges" :key="badge" :color="getBadgeColor(badge)" :name="badge"/>
      </div>
      <div class="name-container">{{ product.name }}</div>
      <div class="label-container">{{ product.label }}</div>
      <div class="date-container">{{ timeSince(product.lastEdited) }}</div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { DateTime } from "luxon";
import type { Badges, Product, ShopIds } from "../types"
import { BadgeColors } from "../types"
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
    },
    getBadgeColor(badgeId: Badges) {
      return BadgeColors[badgeId]
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
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-between;

  .badges-container {
    display: flex;
    width: 150px;
  }

  .name-container {
    text-align: left;
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