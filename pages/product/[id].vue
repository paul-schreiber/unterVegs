<template>
  <div>
    <header>
      <h1 class="heading">{{ product.name }}</h1>
      <div class="shop-name">
        {{ getShop }}
      </div>
      <div class="badge-container">
        <Badge :color="getLabel.color" :name="product.label" :title="getLabel.tooltip" :removable="false"/>
      </div>
      <div class="badge-container">
        <Badge v-for="badge in getProductBadges" :key="badge" :color="getCategorieColor(badge)" :name="badge" :removable="false"
          :title="badge" />
      </div>
    </header>
    <div class="description">
      {{ product.notes }}
    </div>
    <div class="properties">
      <div><span>von:</span>{{ product.author }}</div>
      <div><span>erstellt:</span>{{ makeDateReadable(product.created) }}</div>
      <div><span>zuletzt aktualisiert:</span> {{ makeDateReadable(product.lastEdited) }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { DateTime } from "luxon";
import { Labels, CategorieColor, Categories } from "../../types"
import { defineComponent } from "vue";
import { DataService } from '../../services/DataService'
const DS = new DataService()
export default defineComponent({
  data() {
    return {
      product: DS.getProductById(this.$route.params.id as String)
    }
  },
  computed: {
    getLabel() {
      return Labels[this.product.label]
    },
    getShop() {
      return DS.getShopById(this.product.shop).name
    },
    getProductBadges(): Categories[] {
      return this.product.categories
    }
  },
  methods: {
    makeDateReadable(date: Date): String {
      return DateTime.fromJSDate(date).toLocaleString()
    },
    getCategorieColor(categorieId: Categories) {
      return CategorieColor[categorieId]
    }
  }
})
</script>


<style lang="scss" scoped>
header {

  margin-bottom: $sp-medium;

  .heading {
    text-align: left;
    margin-top: $sp-small;
    margin-bottom: 0px;
  }

  .shop-name {
    text-align: left;
    color: $color-font-medium;
    font-size: $fs-medium;
    margin-bottom: $sp-small;
  }

  .badge-container {
    display: flex;
    margin-bottom: $sp-small;
  }
}

.description {
  text-align: left;
  margin-bottom: $sp-small;
}

.properties {
  text-align: left;

  span {
    margin-right: $sp-small;
  }
}
</style>