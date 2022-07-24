<template>
  <NuxtLink :to="`/product/${product.id}`">
    <div class="product-item">
      <div class="label-container">
        <Badge :color="getLabel.color" :name="getLabelName" :title="getLabel.tooltip" :removable="false"/>
      </div>
      <div class="name-container">{{ product.name }}</div>
      <div class="shop-container">{{ getShop.name }}</div>
      <div class="date-container" :title="`zuletzt bearbeitet vor ${timeSince(product.lastEdited)}`">{{
          timeSince(product.lastEdited)
      }}</div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { DataService } from '../services/DataService'
const DS = new DataService()
import { DateTime } from "luxon";
import type { Product, Shop, Label } from "../types"
import { Labels } from "../types"
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      isMobile: window.innerWidth < 700
    }
  },
  props: {
    product: {
      type: Object as () => Product,
      required: true
    }
  },
  computed: {
    getLabel(): Label {
      return Labels[this.product.label]
    },
    getLabelName(): string {
      return this.isMobile ? this.getLabel.shortName : this.getLabel.name
    },
    getShop(): Shop {
      return DS.getShopById(this.product.shop)
    }
  },
  methods: {
    timeSince(date: string) {
      const dayInPast = DateTime.fromJSDate(new Date(date))
      const diff = DateTime.now().diff(dayInPast, ["years", "months", "days", "hours", "minutes"]).toObject()
      return diff.years != 0 ? `${diff.years} Jahr` : diff.months != 0 ? `${diff.months} Monaten` : diff.days != 0 ? `${diff.days} Tagen` : `${diff.hours} Stunden`
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
  height: 30px;
  align-items: center;
  justify-content: space-between;

  .label-container {
    display: flex;
    width: 150px;
    margin-right: $sp-small;
  }

  .name-container {
    text-align: left;
    flex-grow: 1;
  }

  .date-container {
    width: 120px;
  }
}
</style>