<template>
  <div class="hidden-wrapper" ref="search">
    <div class='search-container'>
      <header>
        <div class="search">
          <span class="search-icon">
            <ClientOnly>
              <font-awesome-icon :icon="['fas', 'search']" />
            </ClientOnly>
          </span>
          <div class="applied-categories-container">
            <Badge v-for="category in appliedFilters" :key="category" :color="getCategorieObject(category).color"
              is-removable :name="shortenText(getCategorieObject(category).name)" :id="category" :title="category"
              @close="removeCategoryFromFilter" />
          </div>
          <input :value="searchTerm" @input="e => searchTerm = (e.target as HTMLInputElement).value"
            :placeholder="randomPlaceholder" class="search-field" @keydown.backspace="removeLastCategoryFromFilter"
            @keydown.enter="($event.target as HTMLElement).blur()" />
          <button @click="toggleFilterPanel" class="filter-icon" aria-label="Filtereinstellungen"
            :disabled="availableFilters.size === 0">
            <ClientOnly>
              <font-awesome-icon :icon="['fas', 'sliders']" />
            </ClientOnly>
          </button>
        </div>
        <Transition name="slide-up">
          <div class="filter-container" v-if="availableFilters.size != 0 && showFilterPanel">
            <div class="available-categories-container">
              <div class="badge-wrapper" v-for="category in availableFilters" :key="category"
                @click="addCategoryToFilter(category)">
                <Badge :color="getCategorieObject(category).color" :is-removable="false"
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
                <ItemContainer v-for="product in getMostSimilarProducts.slice(0, MAX_SUGGESTIONS - 1)"
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
                <ItemContainer v-for="shop in getMostSimilarShops.slice(0, MAX_SUGGESTIONS - 1)" :key="`ls-${shop.id}`"
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

<script lang="ts" setup>
import { Product, Shop, CategoryIds, Category } from "../types"
import { Categories } from "../types"
import { ref, computed, reactive } from 'vue'
import useDevice from '@nuxtjs/device/dist/runtime/composables/useDevice'

const nuxtApp = useNuxtApp()
const device = useDevice()
const MAX_FILTERS = 3
const MIN_SEARCH_TERM_LENGTH = 2
const MIN_SEARCH_TERM_LENGTH_FOR_SUGGESTIONS = 3
const MAX_LEVENSHTEIN_DISTANCE = 4
const MAX_SUGGESTIONS = 5

const searchTerm = ref('' as string)
const availableFilters = ref(new Set<CategoryIds>(Object.keys(CategoryIds) as CategoryIds[]))
const appliedFilters = reactive(new Set<CategoryIds>())
const showFilterPanel = ref(false)
const placeholderList = reactive(['Pizza', 'Pasta', 'Brezel', 'Pommes', 'Hummus', 'Vegan TS', 'Burger', 'Dean & David', 'McDonald`s', 'Burger King', 'deinem Lieblingsshop', 'deinem Lieblingsgericht'])
const selectedTab = ref('products')

const filteredProducts = computed((): Product[] => {
  return nuxtApp.$DS.filterProducts(searchTerm.value, [...appliedFilters])
})
const filteredShops = computed((): Shop[] => {
  return nuxtApp.$DS.filterShops(searchTerm.value, [...appliedFilters])
})
const hideResults = computed((): boolean => {
  return searchTerm.value.length < MIN_SEARCH_TERM_LENGTH && appliedFilters.size === 0
})
const isMobile = computed((): boolean => {
  return device.isMobile
})
const randomPlaceholder = computed((): string => {
  const randomIndex = Math.floor(Math.random() * placeholderList.length)
  const phrase = placeholderList[randomIndex]
  return `Suche nach ${phrase}...`
})
const getMostSimilarProducts = computed((): Product[] => {
  return nuxtApp.$DS.getLevenshteinBasedProductSuggestions(searchTerm.value, [...appliedFilters], MAX_LEVENSHTEIN_DISTANCE)
})
const getMostSimilarShops = computed((): Shop[] => {
  return nuxtApp.$DS.getLevenshteinBasedShopSuggestions(searchTerm.value, [...appliedFilters], MAX_LEVENSHTEIN_DISTANCE)
})
const showProductSuggestions = computed(() => {
  return getMostSimilarProducts.value.length != 0 && searchTerm.value.length > MIN_SEARCH_TERM_LENGTH_FOR_SUGGESTIONS
})
const showShopSuggestions = computed(() => {
  return getMostSimilarShops.value.length != 0 && searchTerm.value.length > MIN_SEARCH_TERM_LENGTH_FOR_SUGGESTIONS
})

//methods
const getCategorieObject = (categorieId: CategoryIds): Category => {
  return Categories[categorieId]
}
const addCategoryToFilter = (category: CategoryIds) => {
  if (appliedFilters.size === MAX_FILTERS) {
    alert(`Du kannst nur ${MAX_FILTERS} Filter gleichzeitig nutzen`)
    return
  }
  appliedFilters.add(category)
  availableFilters.value.delete(category)
  toggleFilterPanel()
}
const removeCategoryFromFilter = (category: CategoryIds) => {
  appliedFilters.delete(category)
  availableFilters.value.add(category)
  const availableFiltersArray = [...availableFilters.value]
  nuxtApp.$DS.sortCategories(availableFiltersArray)
  availableFilters.value = new Set<CategoryIds>(availableFiltersArray)
}
const toggleFilterPanel = () => {
  showFilterPanel.value = !showFilterPanel.value
}
const selectTab = (tabName: string) => {
  selectedTab.value = tabName
}
const shortenText = (text: string): string => {
  return isMobile.value ? text.slice(0, 2) : text
}
const removeLastCategoryFromFilter = () => {
  if (searchTerm.value === '' && appliedFilters.size != 0) {
    const filterArray = [...appliedFilters]
    const lastFilter = filterArray[filterArray.length - 1]
    appliedFilters.delete(lastFilter)
    availableFilters.value.add(lastFilter)
  }
}
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