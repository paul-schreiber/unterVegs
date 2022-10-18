<template>
  <div class="shop-item">
    <div class="name-container" v-dompurify-html="getEmphasizedText"></div>
    <div class="categories-container">
      <Badge v-for="badgeID in getProductBadges" :key="randomId" :color="getCategory(badgeID).color"
        :name="getCategory(badgeID).name" :id="badgeID"
        :title="`Dieser Shop verkauft Gerichte aus der Kategorie ${getCategory(badgeID).name}`" :is-removable="false" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid';
import type { Shop, CategoryIds } from "../types"
import { Categories } from "../types"
import { emphasizeText } from '../services/util'
import { computed } from 'vue'
const nuxtApp = useNuxtApp()
const props = defineProps({
  shop: {
    type: Object as () => Shop,
    required: true
  },
  searchTerm: {
    type: String,
    required: false
  }
})

const getProductBadges = computed((): CategoryIds[] => {
  return nuxtApp.$DS.getCategoriesByShopId(props.shop.id)
})
const getEmphasizedText = computed((): string => {
  return emphasizeText(props.shop.name, props.searchTerm)
})
const randomId = computed(() => {
  return uuidv4()
})
const getCategory = (categorieId: CategoryIds) => {
  return Categories[categorieId]
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  width: fit-content;
  color: $color-font-dark;
}

.shop-item {
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;

  .categories-container {
    max-width: 75%;
    display: flex;
    margin-right: $sp-small;
    overflow-x: scroll;
    gap: $sp-tiny;
  }

  .name-container {
    min-width: 140px;
    text-align: left;
    white-space: nowrap;
    margin-right: $sp-medium;
  }

  .label-container {
    width: 110px;
  }

}

@media only screen and (min-width: 700px) {

  .shop-item {
    .categories-container {
      overflow-x: hidden;
    }
  }
}
</style>