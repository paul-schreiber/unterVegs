<template>
    <div class="shop-item">
      <div class="name-container">{{ shop.name }}</div>
      <div class="categories-container">
        <Badge v-for="badgeID in getProductBadges" :key="badgeID" :color="getCategory(badgeID).color" :name="getCategory(badgeID).name"
          :id="badgeID" :title="`Dieser Shop verkauft Gerichte aus der Kategorie ${getCategory(badgeID).name}`" :removable="false" />
      </div>
    </div>
</template>

<script lang="ts">
import type { Shop, CategoryIds } from "../types"
import { Categories } from "../types"
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    shop: {
      type: Object as () => Shop,
      required: true
    },
  },
  computed: {
    getProductBadges(): CategoryIds[] {
      return this.$DS.getCategoriesByShopId(this.shop.id)
    }
  },
  methods: {
    getCategory(categorieId: CategoryIds) {
      return Categories[categorieId]
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
</style>