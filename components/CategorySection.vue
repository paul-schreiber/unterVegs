<template>
    <h3 :id="category">{{category}}:</h3>
    <div class="product-list">
        <ProductDetailItem v-for="product in products" :key="`PDI-${product.id}`" :product="product" />
    </div>
</template>

<script lang="ts" setup>
import { Product, Categories } from "~~/types";
const props = defineProps({
    category: {
        type: String,
        default: 'Sonstige'
    },
    products: {
        type: Array<Product>,
        required: true
    },
})
const getCategoryColor = () => {
    return props.category ? Categories[props.category].color : 'black'
}
</script>

<style lang="scss" scoped>
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
    width: fit-content;
    border-bottom: 4px solid v-bind(getCategoryColor());
}


@media only screen and (min-width: 700px) {
    .product-list {
        justify-content: flex-start;
    }
}
</style>