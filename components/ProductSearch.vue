<template>
  <div class="hidden-wrapper" ref="search">
    <div class='search-container'>
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
          <input v-model="searchTerm" :placeholder="randomPlaceholder" class="search-field"
            @keydown.backspace="removeLastCategoryFromFilter" @keydown.enter="$event.target.blur()" @focus="onFocus" />
          <button @click="toggleFilterPanel" class="filter-icon" aria-label="Filtereinstellungen"
            :disabled="availableFilters.size === 0">
            <font-awesome-icon :icon="['fas', 'sliders']" />
          </button>
        </div>
        <Transition name="slide-up">
          <div class="filter-container" v-if="availableFilters.size != 0 && showFilterPanel">
            <div class="available-categories-container">
              <div class="badge-wrapper" v-for="category in availableFilters" :key="category"
                @click="addCategoryToFilter(category)">
                <Badge :color="getCategorieObject(category).color" :removable="false"
                  :name="getCategorieObject(category).name" :id="category" :title="`Nach ${category} suchen`" />
              </div>
            </div>
          </div>
        </Transition>
      </header>
      <div class="content-container" v-if="!hideResults">
        <div class="tab-bar">
          <TabItem title="Produkte" icon="pizza-slice" @click="selectTab('products')"
            :resultCount="filteredProducts.length" :isActive="selectedTab === 'products'" />
          <TabItem title="Shops" icon="store" @click="selectTab('shops')" :resultCount="filteredShops.length"
            :isActive="selectedTab === 'shops'" />
        </div>
        <div class="search-results">
          <Transition name="fade">
            <ResultBlock :hasResults="filteredProducts.length != 0" :showSuggestions="showProductSuggestions"
              v-if="selectedTab === 'products'">
              <ItemContainer v-for="product in filteredProducts" :key="product.id" :link="`/product/${product.id}`">
                <ProductItem :product="product" :searchTerm="searchTerm" />
              </ItemContainer>
              <template #suggestions>
                <ItemContainer v-for="product in getMostSimilarProducts.slice(0, maxSuggestions - 1)"
                  :key="`ls-${product.id}`" :link="`/product/${product.id}`">
                  <ProductItem :product="product" />
                </ItemContainer>
              </template>
            </ResultBlock>
          </Transition>
          <Transition name="fade">
            <ResultBlock :hasResults="filteredShops.length != 0" :showSuggestions="showShopSuggestions"
              v-if="selectedTab === 'shops'">
              <ItemContainer v-for="shop in filteredShops" :key="shop.id" :link="`/shop/${shop.id}`">
                <ShopItem :shop="shop" :searchTerm="searchTerm" />
              </ItemContainer>
              <template #suggestions>
                <ItemContainer v-for="shop in getMostSimilarShops.slice(0, maxSuggestions - 1)" :key="`ls-${shop.id}`"
                  :link="`/shop/${shop.id}`">
                  <ShopItem :shop="shop" />
                </ItemContainer>
              </template>
            </ResultBlock>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product, Shop, CategoryIds, Category } from "../types"
import { Categories } from "../types"
export default defineComponent({
  name: "ProductSearch",
  data() {
    return {
      searchTerm: '' as string,
      availableFilters: new Set<CategoryIds>(Object.keys(CategoryIds) as CategoryIds[]),
      appliedFilters: new Set<CategoryIds>(),
      showFilterPanel: false,
      maxFilters: 3,
      minSearchTermLength: 2,
      minSearchTermLengthForSuggestions: 3,
      maxLevenshteinDistance: 4,
      maxSuggestions: 5,
      selectedTab: 'products',
      placeholderList: ['Pizza', 'Pasta', 'Brezel', 'Pommes', 'Hummus', 'Vegan TS', 'Burger', 'Dean & David', 'McDonald`s', 'Burger King', 'deinem Lieblingsshop', 'deinem Lieblingsgericht']
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
      return this.searchTerm.length < this.minSearchTermLength && this.appliedFilters.size === 0
    },
    isMobile(): boolean {
      return this.$device.isMobile
    },
    randomPlaceholder(): string {
      const randomIndex = Math.floor(Math.random() * this.placeholderList.length)
      const phrase = this.placeholderList[randomIndex]
      return `Suche nach ${phrase}...`
    },
    onFocus(e: FocusEvent) {
      //Scrolls input to top on mobile
      //if (this.isMobile) this.$refs['search'].scrollIntoView({ behavior: "smooth" })
    },
    getMostSimilarProducts(): Product[] {
      return this.$DS.getLevenshteinBasedProductSuggestions(this.searchTerm, [...this.appliedFilters], this.maxLevenshteinDistance)
    },
    getMostSimilarShops(): Shop[] {
      return this.$DS.getLevenshteinBasedShopSuggestions(this.searchTerm, [...this.appliedFilters], this.maxLevenshteinDistance)
    },
    showProductSuggestions() {
      return this.getMostSimilarProducts.length != 0 && this.searchTerm.length > this.minSearchTermLengthForSuggestions
    },
    showShopSuggestions() {
      return this.getMostSimilarShops.length != 0 && this.searchTerm.length > this.minSearchTermLengthForSuggestions
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
      const availableFiltersArray = [...this.availableFilters]
      this.$DS.sortCategories(availableFiltersArray)
      this.availableFilters = new Set<CategoryIds>(availableFiltersArray)
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
  position: sticky;
  top: $sp-medium;
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
  margin: $sp-big 0px;

  header {
    width: 100%;

    .search {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: $color-font-medium;
      font-size: 20px;

      .search-icon {
        margin-right: $sp-tiny;
        margin-left: $sp-medium;
      }

      .filter-icon {
        all: unset;
        cursor: pointer;
        margin-left: $sp-small;
        padding: $sp-medium;
        padding-left: $sp-tiny;
      }
    }

    .filter-container {
      padding: $sp-medium;
      padding-top: 0px;
    }

    .applied-categories-container,
    .available-categories-container {
      display: flex;
      margin-right: $sp-small;
      gap: $sp-tiny;
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
      padding: calc($sp-medium + $sp-tiny) 0px;
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
    }

    .search-results {
      width: 100%;
      max-height: 400px;
      overflow-y: scroll;
      border-top: 2px solid $color-light-grey;
    }
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(-15px);
  opacity: 0%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0%;
}

@media only screen and (max-width: 700px) {
  .hidden-wrapper {
    min-height: calc(100vh - 70px);
  }
}
</style>