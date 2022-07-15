<template>
  <div class="content-wrapper">
    <div class="search-container">
      <header>
        <span>
          <font-awesome-icon :icon="['fas', 'search']" />
        </span>
        <input v-model="searchTerm" placeholder="Search for a product or a shop..." class="search-field" />
      </header>
      <div class="search-results" v-if="!hideResults">
        <ResultBlock title='Produkte' v-if="filteredProducts.length != 0">
          <ItemContainer v-for="result in filteredProducts" :key="result.id">
            <ProductItem :product="result" />
          </ItemContainer>
        </ResultBlock>
        <ResultBlock title='Shops' v-if="filteredShops.length != 0">
          <ItemContainer v-for="result in filteredShops" :key="result.id">
            <ShopItem :shop="result" />
          </ItemContainer>
        </ResultBlock>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Product, Shop } from "../types"
import products from "../data/products";
import shops from "../data/shops";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductSearch",
  data() {
    return {
      products: products as Product[],
      searchTerm: '' as String,
      shops: shops,
    };
  },

  computed: {
    filteredProducts(): Product[] {
      return products.filter((product) => {
        const productName = product.name.toLowerCase()
        return productName.includes(this.searchTerm.toLowerCase())
      })
    },
    filteredShops(): Shop[] {
      return shops.filter((shop) => {
        const shopName = shop.name.toLowerCase()
        return shopName.includes(this.searchTerm.toLowerCase())
      })
    },
    hideResults(): boolean { return this.searchTerm === '' || this.filteredProducts.length === 0 && this.filteredShops.length === 0 }
  }
});
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  height: calc(100vh - 10vh - 80px)
}

.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 700px;
  height: fit-content;
  max-width: 100%;
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
    height: 50px;
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