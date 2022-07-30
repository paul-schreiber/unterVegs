<template>
  <div class="search-container">
    <header>
      <div class="search">
        <span class="search-icon">
          <font-awesome-icon :icon="['fas', 'search']" />
        </span>
        <div class="applied-categories-container">
          <Badge v-for="category in appliedFilters" :key="category" :color="getCategorieObject(category).color"
            :removable="true" :name="shortenText(getCategorieObject(category).name)" :id="category" :title="category"
            :onClose="removeCategoryFromFilter" />
        </div>
        <input v-model="searchTerm" placeholder="Suche nach 'Pizza' oder 'Dean & David'..." class="search-field"
          @keydown.backspace="removeLastCategoryFromFilter" @keydown.enter="$event.target.blur()"/>
        <button @click="toggleFilterPanel" class="filter-icon" aria-label="Filtereinstellungen" :disabled="availableFilters.size === 0">
          <font-awesome-icon :icon="['fas', 'sliders']" />
        </button>
      </div>
      <div class="filter-container" v-if="availableFilters.size != 0 && showFilterPanel">
        <div class="available-categories-container">
          <div class="badge-wrapper" v-for="category in availableFilters" :key="category"
            @click="addCategoryToFilter(category)">
            <Badge :color="getCategorieObject(category).color" :removable="false" :name="getCategorieObject(category).name" :id="category"
              :title="`Nach ${category} suchen`" />
          </div>
        </div>
      </div>
    </header>
    <div class="content-container" v-if="!hideResults">
      <div class="tab-bar">
        <TabItem title="Produkte" icon="pizza-slice" @click="selectTab('products')"
          :resultCount="filteredProducts.length" :isActive="selectedTab === 'products'" />
        <TabItem title="Shops" icon="store" @click="selectTab('shops')" :resultCount="filteredShops.length"
          :isActive="selectedTab === 'shops'" />
      </div>
      <div class="search-results">
        <ResultBlock :hasResults="filteredProducts.length != 0" v-if="selectedTab === 'products'">
          <ItemContainer v-for="product in filteredProducts" :key="product.id">
            <ProductItem :product="product" />
          </ItemContainer>
        </ResultBlock>
        <ResultBlock :hasResults="filteredShops.length != 0" v-if="selectedTab === 'shops'">
          <ItemContainer v-for="shop in filteredShops" :key="shop.id">
            <ShopItem :shop="shop" />
          </ItemContainer>
        </ResultBlock>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product, Shop, CategoryIds, Category } from "../types"
import { Categories } from "../types"
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductSearch",
  data() {
    return {
      searchTerm: '' as String,
      availableFilters: new Set<CategoryIds>(Object.keys(CategoryIds) as CategoryIds[]),
      appliedFilters: new Set<CategoryIds>(),
      showFilterPanel: false,
      maxFilters: 3,
      selectedTab: 'products',
    };
  },

  computed: {
    filteredProducts(): Product[] {
      return this.$DS.filterProducts(this.searchTerm, [...this.appliedFilters])
    },
    filteredShops(): Shop[] {
      return this.$DS.filterShops(this.searchTerm, [...this.appliedFilters])
    },
    hideResults(): boolean {
      return this.searchTerm === '' && this.appliedFilters.size === 0
    },
    isMobile(): boolean {
      return window.innerWidth < 700
    }
  },
  methods: {
    getCategorieObject(categorieId: CategoryIds): Category {
      return Categories[categorieId]
    },
    addCategoryToFilter(category: CategoryIds) {
      if (this.appliedFilters.size === this.maxFilters) {
        alert(`Du kannst nur ${this.maxFilters} Filter gleichzeitig nutzen`)
        return
      }
      this.appliedFilters.add(category)
      this.availableFilters.delete(category)
      this.toggleFilterPanel()
    },
    removeCategoryFromFilter(category: CategoryIds) {
      this.appliedFilters.delete(category)
      this.availableFilters.add(category)
    },
    toggleFilterPanel() {
      this.showFilterPanel = !this.showFilterPanel
    },
    selectTab(tabName: string) {
      this.selectedTab = tabName
    },
    shortenText(text: string): string {
      return this.isMobile ? text.slice(0, 2) : text
    },
    removeLastCategoryFromFilter() {
      if (this.searchTerm === '' && this.appliedFilters.size != 0) {
        const filterArray = [...this.appliedFilters]
        const lastFilter = filterArray[filterArray.length - 1]
        this.appliedFilters.delete(lastFilter)
        this.availableFilters.add(lastFilter)
      }
    },
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
  box-shadow: $box-shadow;
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

      .search-icon {
        margin-right: $sp-tiny;
      }

      .filter-icon {
        padding: $sp-tiny;
        all: unset;
        cursor: pointer;
        margin-left: $sp-small;
      }
    }

    .filter-container {
      margin-top: $sp-medium;
    }

    .applied-categories-container,
    .available-categories-container {
      display: flex;
      margin-right: $sp-small;
      gap: $sp-tiny;
    }

    .applied-categories-container {
      max-width: 240px;
    }

    .available-categories-container {
      padding-left: calc(20px + $sp-small);
      flex-wrap: wrap;
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
      padding: $sp-tiny 0px;
    }
  }

  .content-container {
    width: 100%;

    .tab-bar {
      display: flex;
      width: 100%;
      padding: 0px $sp-medium;
      justify-content: flex-start;
      margin-bottom: -2px;
      z-index: 100;
    }

    .search-results {
      width: 100%;
      max-height: 400px;
      padding: $sp-medium;
      overflow: scroll;
      border-top: 2px solid $color-light-grey;
    }
  }
}
</style>