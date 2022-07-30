<template>
    <NuxtLink :to="`/product/${product.id}`">
        <div class="product-item">
            <header>
                <Badge :color="getLabel.color" :name="product.label" :title="getLabel.tooltip" :id="product.label"
                        :removable="false" />
                <div class="labels">
                    <font-awesome-icon :icon="['fas', 'calendar-day']" title="nicht immer verfügbar"
                        v-if="product.isSeasonal" />
                        <font-awesome-icon :icon="['fas', 'circle-info']" title="Klicke für mehr Infos!"/>
                </div>
            </header>
            <div class="body">
                <div class="product-name">{{ product.name }}</div>
                <div class="date-container" :title="`zuletzt bearbeitet vor ${timeSince(product.lastEdited)}`">
                    bearbeitet vor {{
                            timeSince(product.lastEdited)
                    }}
                </div>
            </div>
        </div>
    </NuxtLink>
</template>


<script lang="ts">
import { DateTime } from "luxon";
import type { Product, Shop, Label } from "../types"
import { Labels } from "../types"
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
            return this.$DS.getShopById(this.product.shop)
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
    width: 300px;
    padding: $sp-medium;
    box-shadow: $box-shadow;
    border-radius: 15px;
    background-color: white;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: $sp-small;

        .labels {
            display: flex;
            align-items: center;
            gap: $sp-small;
            color: $color-font-medium;
        }
    }

    .body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        .product-name {
            width: 100%;
            text-align: left;
            font-size: 1.1rem;
            font-weight: bold;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .date-container {
            color: $color-font-medium;
        }
    }
}
</style>