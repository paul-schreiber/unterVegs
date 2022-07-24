<template>
    <div>
        <header>
            <div class="heading-container">
                <h1 class="heading">{{ shop.name }}</h1>
                <img class="logo" :src="shop.imgURL" v-if="shop.imgURL"/>
            </div>
            <div class="badge-container">
                <Badge v-for="badge in getProductBadges" :key="badge" :color="getCategorieColor(badge)" :name="badge"
                    :removable="false" :title="badge" />
            </div>
            <div class="description">
                {{ shop.notes }}
            </div>
        </header>
        <h3>Alle Produkte:</h3>
        <div class="product-list">
            <ItemContainer v-for="product in getProducts" :key="product.id">
                <ProductItem :product="product" />
            </ItemContainer>
        </div>
    </div>
</template>

<script lang="ts">


import { defineComponent } from "vue";
import { DataService } from '../../services/DataService'
import { ShopIds } from "~~/types";
const DS = new DataService()
import { Categories } from "~~/types";
import { CategorieColor } from "../../types"
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
        getProductBadges(): Categories[] {
            return DS.getCategoriesByShopId(this.shop.id)
        }
    },
    methods: {
        getCategorieColor(categorieId: Categories) {
            return CategorieColor[categorieId]
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
    }

    .description {
        text-align: left;
    }
}

h3 {
    text-align: left;
    margin: 0px;
}
</style>