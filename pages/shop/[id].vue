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
            <CategorySection  v-if="getProductsByPrimaryCategory(category).length != 0" :products="getProductsByPrimaryCategory(category)" :category="category"/>
        </div>
        <CategorySection  v-if="getProductsWithoutCategory.length != 0" :products="getProductsWithoutCategory"/>
    </div>
</template>

<script lang="ts">


import { defineComponent } from "vue";
import { Category, ShopIds, CategoryIds, Shop, Product } from "~~/types";
import { Categories } from "../../types"
export default defineComponent({
    data() {
        return {
            shop: this.$DS.getShopById(this.$route.params.id as ShopIds),
        }
    },
    mounted() {
        const shop = this.$DS.getShopById(this.$route.params.id as ShopIds) as Shop
        const descripton = `Diese veganen Produkte gibt es bei ${shop.name}:`
        useHead({
            title: shop.name,
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
    },
    computed: {
        getProducts() {
            return this.$DS.getProductsByShopId(this.shop.id)
        },
        getProductsWithoutCategory() {
            return this.$DS.getProductsByShopId(this.shop.id).filter((product: Product) => product.categories.length === 0)
        },
        getCategories(): CategoryIds[] {
            return this.$DS.getCategoriesByShopId(this.shop.id)
        }
    },
    methods: {
        getCategoryObject(categorieId: CategoryIds): Category {
            return Categories[categorieId]
        },
        getProductsByPrimaryCategory(categorieId: CategoryIds): Product[] {
            const filteredProducts = this.getProducts.filter((product: Product) => {
                return product.categories[0] === categorieId
            })
            return filteredProducts
        }
    }
})
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