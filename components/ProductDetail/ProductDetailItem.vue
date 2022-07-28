<template>
    <NuxtLink :to="`/product/${product.id}`">
        <div class="product-item">
            <header>
                <div class="product-name">{{ product.name }}</div>
                <Badge :color="getLabel.color" :name="product.label" :title="getLabel.tooltip" :id="product.label"
                    :removable="false" />
            </header>
            <div class="body">
                <font-awesome-icon :icon="['fas', 'calendar-day']" v-if="product.isSeasonal" />
                <div class="date-container" :title="`zuletzt bearbeitet vor ${timeSince(product.lastEdited)}`">
                    aktualisiert vor {{
                            timeSince(product.lastEdited)
                    }}</div>
            </div>
        </div>
    </NuxtLink>
</template>


<script lang="ts">
import { DataService } from '../../services/DataService'
const DS = new DataService()
import { DateTime } from "luxon";
import type { Product, Shop, Label } from "../../types"
import { Labels } from "../../types"
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        product: {
            type: Object as () => Product,
            required: true
        }
    },
    computed: {
        getLabel(): Label {
            return Labels[this.product.label]
        },
        getLabelName(): string {
            return this.isMobile ? this.getLabel.shortName : this.getLabel.name
        },
        getShop(): Shop {
            return DS.getShopById(this.product.shop)
        },
        isMobile(): boolean {
            return window.innerWidth < 700
        }
    },
    methods: {
        timeSince(date: string) {
            const dayInPast = DateTime.fromJSDate(new Date(date))
            const diff = DateTime.now().diff(dayInPast, ["years", "months", "days", "hours", "minutes"]).toObject()
            return diff.years != 0 ? `${diff.years} Jahr` : diff.months != 0 ? `${diff.months} Monaten` : diff.days != 0 ? `${diff.days} Tagen` : `${diff.hours} Stunden`
        }
    }
});
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: $color-font-dark;
    width: fit-content;
}

.product-item {
    display: flex;
    flex-direction: column;
    min-width: 340px;
    height: 100px;
    padding: $sp-small;
    box-shadow: $box-shadow;
    border-radius: 15px;
    background-color: white;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: $sp-small;

        .product-name {
            text-align: left;
            width: 220px;
            font-weight: bold;
            font-size: $fs-medium;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>