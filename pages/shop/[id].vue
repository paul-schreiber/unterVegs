<template>
    <div>
        <header>
            <div class="heading-container">
                <h2 class="heading">{{ shop.name }}</h2>
                <img class="logo" :src="shop.imgURL" v-if="shop.imgURL" :alt="`Logo von ${shop.name}`" />
            </div>
            <div class="badge-container">
                <Badge v-for="badge in getCategories" :key="badge" :color="getCategoryObject(badge).color" :id="badge"
                    :name="getCategoryObject(badge).name" :is-removable="false" :title="badge" />
            </div>
            <div class="is-local-warning" title="Dieses Restaurant gibt es nur an manchen Orten." v-if="shop.isLocal">
                <ClientOnly>
                    <font-awesome-icon :icon="['fas', 'map-pin']" />
                </ClientOnly>
                {{ `${shop.name} gibt es nicht in allen Bundesländern.` }}
            </div>
            <div class="description">
                {{ shop.notes }}
            </div>
        </header>
        <div v-for="category in getCategories" :key="'heading' + category" class="category-section">
            <CategorySection v-if="getProductsByPrimaryCategory(category).length != 0"
                :products="getProductsByPrimaryCategory(category)" :category="category" />
        </div>
        <CategorySection v-if="getProductsWithoutCategory.length != 0" :products="getProductsWithoutCategory" />
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { Category, ShopIds, CategoryIds, Shop, Product } from "~~/types";
import { Categories } from "../../types"

const nuxtApp = useNuxtApp()
const route = useRoute()

const shop = ref(nuxtApp.$DS.getShopById(route.params.id as ShopIds))

onMounted(() => {
    const descripton = `Diese veganen Produkte gibt es bei ${shop.value.name}:`
    useHead({
        title: shop.value.name,
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: descripton
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: descripton
            }
        ]
    })
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
const getProducts = computed(() => {
    return nuxtApp.$DS.getProductsByShopId(shop.value.id)
})
const getProductsWithoutCategory = computed(() => {
    return nuxtApp.$DS.getProductsByShopId(shop.value.id).filter((product: Product) => product.categories.length === 0)
})
const getCategories = computed((): CategoryIds[] => {
    return nuxtApp.$DS.getCategoriesByShopId(shop.value.id)
})

const getCategoryObject = (categorieId: CategoryIds): Category => {
    return Categories[categorieId]
}
const getProductsByPrimaryCategory = (categorieId: CategoryIds): Product[] => {
    const filteredProducts = getProducts.value.filter((product: Product) => {
        return product.categories[0] === categorieId
    })
    return filteredProducts
}
</script>

<style lang="scss" scoped>
header {

    margin-bottom: $sp-big;

    .heading-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        img {
            margin-right: $sp-small;
            height: 60px;
        }

        .heading {
            text-align: left;
            margin: 0px;
            margin-bottom: $sp-small;
        }
    }

    .badge-container {
        margin-bottom: $sp-small;
        display: flex;
        gap: $sp-tiny;
        flex-wrap: wrap;
    }

    .is-local-warning {
        text-align: left;
        margin-bottom: $sp-small;
    }

    .description {
        text-align: left;
    }
}

.category-section {
    margin-bottom: $sp-large;
}
</style>