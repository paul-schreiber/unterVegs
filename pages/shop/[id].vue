<template>
    <div>
        <header>
            <div class="heading-container">
                <h1 class="heading">{{ shop.name }}</h1>
                <img class="logo" :src="shop.imgURL" v-if="shop.imgURL" />
            </div>
            <div class="badge-container">
                <Badge v-for="badge in getProductBadges" :key="badge" :color="getCategoryObject(badge).color"
                    :id="badge" :name="getCategoryObject(badge).name" :removable="false" :title="badge" />
            </div>
            <div class="description">
                {{ shop.notes }}
            </div>
            <font-awesome-icon :icon="['fas', 'map-pin']" v-if="shop.isLocal" />
        </header>
        <h3>Alle Produkte:</h3>
        <div class="product-list">
            <ProductDetailItem v-for="product in getProducts" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script lang="ts">


import { defineComponent } from "vue";
import { DataService } from '../../services/DataService'
import { Category, ShopIds, CategoryIds } from "~~/types";
const DS = new DataService()
import { Categories } from "../../types"
export default defineComponent({
    data() {
        return {
            shop: DS.getShopById(this.$route.params.id as ShopIds),
        }
    },
    computed: {
        getProducts() {
            return DS.getProductsByShopId(this.shop.id)
        },
        getProductBadges(): CategoryIds[] {
            return DS.getCategoriesByShopId(this.shop.id)
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
</style>