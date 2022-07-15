<template>
  <router-link to="/product">
    <div class="product-item">
      <div class="badges-container">
        <Badge v-for="badge in product.badges" :key="badge" :color="getBadgeColor(badge)" :name="badge"/>
      </div>
      <div class="name-container">{{ product.name }}</div>
      <div class="label-container" :title="getLabel(product.label).tooltip">{{ getLabel(product.label).content }}</div>
      <div class="date-container" :title="`zuletzt bearbeitet vor ${timeSince(product.lastEdited)}`">{{ timeSince(product.lastEdited) }}</div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { DateTime } from "luxon";
import type { Badges, Product, Labels } from "../types"
import { BadgeColors, LabelText } from "../types"
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
      return diff.years != 0 ? `${diff.years} Jahr` : diff.months != 0 ? `${diff.months} Monaten` : diff.days != 0 ? `${diff.days} Tagen` : `${diff.hours} Stunden`
    },
    getBadgeColor(badgeId: Badges) {
      return BadgeColors[badgeId]
    },
    getLabel(label: Labels) {
      return LabelText[label]
    }
  }
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: $color-font-dark;
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
    margin-right: $sp-small;
  }

  .name-container {
    text-align: left;
    flex-grow: 1;
  }

  .label-container {
    width: 30px;
  }

  .date-container {
    width: 120px;
  }
}
</style>