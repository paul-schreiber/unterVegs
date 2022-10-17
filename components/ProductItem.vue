<template>
  <div class="product-item">
    <div :class="{ 'label-container': true, mobile: isMobile }">
      <Badge :color="getLabel.color" :name="getLabelName" :id="getLabelName" :title="getLabel.tooltip"
        :is-removable="false" />
    </div>
    <div class="name-container" v-dompurify-html="getEmphasizedItemName"></div>
    <div class="shop-container">{{ getShop.name }}</div>
    <div class="date-container" :title="`zuletzt bearbeitet vor ${timeSince(product.lastEdited)}`" v-if="!isMobile">{{
    timeSince(product.lastEdited)
    }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { Product, Shop, Label } from "../types"
import { Labels } from "../types"
import { emphasizeText, timeSince } from '../services/util'
import { computed } from 'vue'

const device = useDevice()
const nuxtApp = useNuxtApp()
const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true
  },
  searchTerm: {
    type: String,
    required: false
  }
})

const getLabel = computed((): Label => {
  return Labels[props.product.label]
})
const getEmphasizedItemName = computed(() => {
  return emphasizeText(props.product.name, props.searchTerm)
})
const getLabelName = computed((): string => {
  return isMobile.value ? getLabel.value.shortName : getLabel.value.name
})
const getShop = computed((): Shop => {
  return nuxtApp.$DS.getShopById(props.product.shop)
})
const isMobile = computed((): boolean => {
  return device.isMobile
})
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