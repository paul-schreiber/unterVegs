<template>
    <div class="product-item">
      <div :class="{ 'label-container': true, mobile: isMobile }">
        <Badge :color="getLabel.color" :name="getLabelName" :id="getLabelName" :title="getLabel.tooltip"
          :removable="false" />
      </div>
      <div class="name-container">{{ product.name }}</div>
      <div class="shop-container">{{ getShop.name }}</div>
      <div class="date-container" :title="`zuletzt bearbeitet vor ${timeSince(product.lastEdited)}`" v-if="!isMobile">{{
          timeSince(product.lastEdited)
      }}</div>
    </div>
</template>

<script lang="ts">
import { DateTime } from "luxon";
import type { Product, Shop, Label } from "../types"
import { Labels } from "../types"
import { defineComponent } from "vue";
export default defineComponent({
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
      return this.$DS.getShopById(this.product.shop)
    },
    isMobile(): boolean {
      return window.innerWidth < 700
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

.product-item {
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: space-between;

  .label-container {
    display: flex;
    margin-right: $sp-medium;

    &.mobile {
      width: 20px;
    }
  }

  .name-container {
    text-align: left;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .shop-container {
    text-align: right;
    white-space: nowrap;
    margin-left: $sp-medium;
  }

  .date-container {
    width: 120px;
  }
}

@media only screen and (min-width: 700px) {
  .label-container {
    width: 110px;
  }
}
</style>