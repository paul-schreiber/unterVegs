<template>
  <div class="search-container">
    <header>
      <span>
        <font-awesome-icon :icon="['fas', 'search']" />
      </span>
      <input v-model="searchTerm" placeholder="Search for a product or a shop..." class="search-field" />
    </header>
    <div class="search-results" v-if="!hideResults">
      <ResultBlock title='Produkte' v-if="filteredProducts.length != 0">
        <ItemContainer v-for="product in filteredProducts" :key="product.id">
          <ProductItem :product="product" />
        </ItemContainer>
      </ResultBlock>
      <ResultBlock title='Shops' v-if="filteredShops.length != 0">
        <ItemContainer v-for="shop in filteredShops" :key="shop.id">
          <ShopItem :shop="shop" />
        </ItemContainer>
      </ResultBlock>
    </div>
  </div>
</template>

<script lang="ts">
import type { Product, Shop } from "../types"
import { defineComponent } from "vue";
import { DataService } from '../services/DataService'
const DS = new DataService()
export default defineComponent({
  name: "ProductSearch",
  data() {
    return {
      searchTerm: '' as String,
    };
  },

  computed: {
    filteredProducts(): Product[] {
      return DS.filterProducts(this.searchTerm)
    },
    filteredShops(): Shop[] {
      return DS.filterShops(this.searchTerm)
    },
    hideResults(): boolean { return this.searchTerm === '' || this.filteredProducts.length === 0 && this.filteredShops.length === 0 }
  }
});
</script>

<style lang="scss" scoped>
.search-container {
  justify-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  max-width: 800px;
  height: fit-content;
  width: 90vw;
  border-radius: 15px;
  background-color: white;
  margin-top: $sp-large;

  header {
    span {
      margin-right: $sp-small;
    }

    width: 100%;
    padding: $sp-medium;
    display: flex;
    align-items: center;
    color: $color-font-medium;
    font-size: 20px;

  }

  .search-field {
    width: 100%;
    border-radius: 15px;
    font-size: 20px;
    border: none;
    outline: none;
    color: $color-font-dark;
  }

  .search-results {
    width: 100%;
    max-height: 400px;
    padding: $sp-medium;
    overflow: scroll;
    border-top: 2px solid $color-light-grey;
  }
}
</style>