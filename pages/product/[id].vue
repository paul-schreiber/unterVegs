<template>
  <div>
    <header>
      <h1 class="heading">{{ product.name }}</h1>
      <div class="shop-name">
        {{ getShop }}
      </div>
      <div class="badge-container">
        <Badge :color="getLabel.color" :name="product.label" :title="getLabel.tooltip" :id="product.label"
          :removable="false" />
      </div>
      <div class="badge-container">
        <Badge v-for="badge in getProductBadges" :key="badge" :color="getCategoryObject(badge).color" :id="badge"
          :name="getCategoryObject(badge).name" :removable="false" :title="badge" />
      </div>
    </header>
    <div class="description">
      {{ product.notes }}
    </div>
    <div class="properties">
      <div><span class="label">von:</span>{{ product.author }}</div>
      <div><span class="label">erstellt:</span>{{ makeDateReadable(product.created) }}</div>
      <div><span class="label">zuletzt aktualisiert:</span> {{ makeDateReadable(product.lastEdited) }}</div>
      <div>
        <span class="label">Standort:</span>
        <span v-if="product.isSeasonal">nicht überall</span>
        <span v-else>überall</span>
        erhältlich
      </div>
      <div>
        <span class="label">Verfügbarkeit:</span>
        <span v-if="product.isSeasonal">nicht jederzeit</span>
        <span v-else>immer</span>
        verfügbar
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { DateTime } from "luxon";
import { Labels, Categories, CategoryIds, Category } from "../../types"
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
    getProductBadges(): CategoryIds[] {
      return this.product.categories
    }
  },
  methods: {
    makeDateReadable(date: string): String {
      return DateTime.fromJSDate(new Date(date)).toLocaleString()
    },
    getCategoryObject(categorieId: CategoryIds): Category {
      return Categories[categorieId]
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
    gap: $sp-tiny;
    flex-wrap: wrap;
  }
}

.description {
  text-align: left;
  margin-bottom: $sp-small;
}

.properties {
  text-align: left;

  .label {
    margin-right: $sp-small;
  }
}
</style>