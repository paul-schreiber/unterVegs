<template>
  <div class="search-container">
    <input v-model="searchTerm" placeholder="Search for a product or a shop..." />
    <div class="search-results">
      <ResultBlock :results="filteredProducts" title='Produkte' :v-if="products.length != 0" />
    </div>
  </div>
</template>

<script lang="ts">
import type { Item } from "../types"
import products from "../products";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductSearch",
  data() {
    return {
      products: products as Item[],
      searchTerm: '' as String
    };
  },

  computed: {
    filteredProducts(): Item[] {
      return products.filter((product) => {
        const productName = product.name.toLowerCase()
        return productName.includes(this.searchTerm.toLowerCase())
      })
    }
  }
});
</script>

<style lang="scss" scoped>
.search-container {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 600px;
    height: 50px;
    font-size: 20px;
  }

  .search-results {
    width: 600px;
    height: 400px;
    overflow: scroll;
  }
}
</style>