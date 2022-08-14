<template>
    <div>
        <header>
            <div class="heading-container">
                <h2 class="heading">{{ shop.name }}</h2>
                <img class="logo" :src="shop.imgURL" v-if="shop.imgURL" :alt="`Logo von ${shop.name}`" />
            </div>
            <div class="badge-container">
                <Badge v-for="badge in getProductBadges" :key="badge" :color="getCategoryObject(badge).color"
                    :id="badge" :name="getCategoryObject(badge).name" :removable="false" :title="badge" />
            </div>
            <div class="is-local-warning" title="Dieses Restaurant gibt es nur an manchen Orten." v-if="shop.isLocal">
                <font-awesome-icon :icon="['fas', 'map-pin']" />
                {{ `${shop.name} gibt es nicht in allen Bundesländern.` }}
            </div>
            <div class="description">
                {{ shop.notes }}
            </div>
        </header>
        <h3>Alle Produkte:</h3>
        <div class="product-list">
            <ProductDetailItem v-for="product in getProducts" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script lang="ts">


import { defineComponent } from "vue";
import { Category, ShopIds, CategoryIds, Shop } from "~~/types";
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
        getProductBadges(): CategoryIds[] {
            return this.$DS.getCategoriesByShopId(this.shop.id)
        }
    },
    methods: {
        getCategoryObject(categorieId: CategoryIds): Category {
            return Categories[categorieId]
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

.product-list {
    margin: $sp-medium 0px;
    display: flex;
    flex-wrap: wrap;
    gap: $sp-medium;
    justify-content: center;

}

h3 {
    text-align: left;
    margin: 0px;
}

@media only screen and (min-width: 700px) {
    .product-list {
        justify-content: flex-start;
    }
}
</style>