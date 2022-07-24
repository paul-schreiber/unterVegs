<template>
  <div class="search-container">
    <header>
      <div class="search">
        <span>
          <font-awesome-icon :icon="['fas', 'search']" />
        </span>
        <div class="applied-categories-container">
          <Badge v-for="category in appliedFilters" :key="category" :color="getCategorieColor(category)"
            :removable="true" :name="category" :title="category" :onClose="removeCategoryFromFilter" />
        </div>
        <input v-model="searchTerm" placeholder="Search for a product or a shop..." class="search-field" />
        <button @click="toggleFilterPanel" class="filter-icon-container" :disabled="availableFilters.size === 0">
          <font-awesome-icon :icon="['fas', 'sliders']" />
        </button>
      </div>
      <div class="filter-container" v-if="availableFilters.size != 0 && showFilterPanel">
        <div class="available-categories-container">
          <div class="badge-wrapper" v-for="category in availableFilters" :key="category"
            @click="addCategoryToFilter(category)">
            <Badge :color="getCategorieColor(category)" :removable="false" :name="category"
              :title="`Nach ${category} suchen`" />
          </div>
        </div>
      </div>
    </header>
    <div class="search-results" v-if="!hideResults">
      <ResultBlock title='Shops' v-if="filteredShops.length != 0">
        <ItemContainer v-for="shop in filteredShops" :key="shop.id">
          <ShopItem :shop="shop" />
        </ItemContainer>
      </ResultBlock>
      <ResultBlock title='Produkte' v-if="filteredProducts.length != 0">
        <ItemContainer v-for="product in filteredProducts" :key="product.id">
          <ProductItem :product="product" />
        </ItemContainer>
      </ResultBlock>
    </div>
    <div class="search-results" v-if="!hasResults">
    <span>Keine Ergebnisse.</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Product, Shop, Categories } from "../types"
import { CategorieColor } from "../types"
import { defineComponent } from "vue";
import { DataService } from '../services/DataService'
const DS = new DataService()
export default defineComponent({
  name: "ProductSearch",
  data() {
    return {
      searchTerm: '' as String,
      availableFilters: new Set<Categories>(Object.keys(Categories) as Categories[]),
      appliedFilters: new Set<Categories>(),
      showFilterPanel: false,
      maxFilters: 3
    };
  },

  computed: {
    filteredProducts(): Product[] {
      return DS.filterProducts(this.searchTerm, [...this.appliedFilters])
    },
    filteredShops(): Shop[] {
      return DS.filterShops(this.searchTerm, [...this.appliedFilters])
    },
    hideResults(): boolean { return (this.searchTerm === '' && this.appliedFilters.size === 0) || this.filteredProducts.length === 0 && this.filteredShops.length === 0 },
    hasResults(): boolean {
      return !(this.filteredProducts.length === 0 && this.filteredShops.length === 0)
    }
  },
  methods: {
    getCategorieColor(categorieId: Categories) {
      return CategorieColor[categorieId]
    },
    addCategoryToFilter(category: Categories) {
      if (this.appliedFilters.size === this.maxFilters) {
        alert(`Du kannst nur ${this.maxFilters} Filter gleichzeitig nutzen`)
        return
      }
      this.appliedFilters.add(category)
      this.availableFilters.delete(category)
      this.toggleFilterPanel()
    },
    removeCategoryFromFilter(category: Categories) {
      this.appliedFilters.delete(category)
      this.availableFilters.add(category)
    },
    toggleFilterPanel() {
      this.showFilterPanel = !this.showFilterPanel
    }
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
    width: 100%;
    padding: $sp-medium;


    .search {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: $color-font-medium;
      font-size: 20px;

      span {
        margin-right: $sp-small;
      }

      .filter-icon-container {
        all: unset;
        cursor: pointer;
      }
    }

    .filter-container {
      margin-top: $sp-medium;
    }

    .applied-categories-container,
    .available-categories-container {
      display: flex;
      margin-right: $sp-small;
    }

    .applied-categories-container {
      max-width: 240px;
    }

    .available-categories-container {
      padding-left: calc(20px + $sp-small);
    }

    .badge-wrapper {
      cursor: pointer;
    }

    .search-field {
      width: 100%;
      border-radius: 15px;
      font-size: $fs-medium;
      border: none;
      outline: none;
      color: $color-font-dark;
    }
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