<template>
  <div class="product-item">
    <div :class="{ 'label-container': true, mobile: isMobile }">
      <Badge :color="getLabel.color" :name="getLabelName" :id="getLabelName" :title="getLabel.tooltip"
        :is-removable="false" />
    </div>
    <div class="name-container" v-html="getEmphasizedItemName"></div>
    <div class="shop-container">{{ getShop.name }}</div>
    <div class="date-container" :title="`zuletzt bearbeitet vor ${timeSince(product.lastEdited)}`" v-if="!isMobile">{{
        timeSince(product.lastEdited)
    }}</div>
  </div>
</template>

<script lang="ts">
import type { Product, Shop, Label } from "../types"
import { Labels } from "../types"
import { defineComponent } from "vue";
import { emphasizeText, timeSince } from '../services/util'
export default defineComponent({
  props: {
    product: {
      type: Object as () => Product,
      required: true
    },
    searchTerm: {
      type: String,
      required: false
    }
  },
  computed: {
    getLabel(): Label {
      return Labels[this.product.label]
    },
    getEmphasizedItemName() {
      return emphasizeText(this.product.name, this.searchTerm)
    },
    getLabelName(): string {
      return this.isMobile ? this.getLabel.shortName : this.getLabel.name
    },
    getShop(): Shop {
      return this.$DS.getShopById(this.product.shop)
    },
    isMobile(): boolean {
      return this.$device.isMobile
    }
  },
  methods: {
    timeSince    
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