<template>
  <div class="content-wrapper">
    <div class="search-container">
      <header>
        <input v-model="searchTerm" placeholder="Search for a product or a shop..." class="search-field" />
      </header>
      <div class="search-results">
        <ResultBlock :results="filteredProducts" title='Produkte' v-if="filteredProducts.length != 0" />
        <ResultBlock :results="shops" title='Shops' v-if="shops.length != 0" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Product } from "../types"
import products from "../products";
import shops from "../shops";
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
    }
  }
});
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  width: 600px;
  border-radius: 15px;
  padding: $sp-medium;

  .search-field {
    width: 100%;
    height: 50px;
    border-radius: 15px;
    font-size: 20px;
  }

  .search-results {
    width: 600px;
    height: 400px;
    overflow: scroll;
  }
}
</style>