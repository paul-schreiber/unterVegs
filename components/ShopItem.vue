<template>
  <NuxtLink :to="`/shop/${shop.id}`">
    <div class="shop-item">
      <div class="name-container">{{ shop.name }}</div>
      <div class="categories-container">
        <Badge v-for="badge in getProductBadges" :key="badge" :color="getCategorieColor(badge)" :name="badge"
          :title="badge" :removable="false" />
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { DataService } from '../services/DataService'
const DS = new DataService()
import type { Shop, Categories } from "../types"
import { CategorieColor } from "../types"
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    shop: {
      type: Object as () => Shop,
      required: true
    },
  },
  computed: {
    getProductBadges(): Categories[] {
      return DS.getCategoriesByShopId(this.shop.id)
    }
  },
  methods: {
    getCategorieColor(categorieId: Categories) {
      return CategorieColor[categorieId]
    }
  }
});
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
    max-width: 60%;
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
</style>