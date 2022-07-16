<template>
  <router-link to="/shop">
    <div class="shop-item">
      <div class="name-container">{{ shop.name }}</div>
      <div class="label-container">{{ shop.id }}</div>
      <div class="categories-container">
        <Badge v-for="badge in getProductBadges" :key="badge" :color="getCategorieColor(badge)" :name="badge" />
      </div>
    </div>
  </router-link>
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
  color: black;
  width: fit-content;
}

.shop-item {
  display: flex;
  width: 600px;
  height: 40px;
  align-items: center;

  .categories-container {
    display: flex;
    width: 150px;
    margin-right: $sp-small;
  }

  .name-container {
    width: 30%;
  }

  .label-container {
    width: 150px;
  }

}
</style>