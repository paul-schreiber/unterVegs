<template>
  <div>
    <header>
      <div class="heading">
        <h1>{{ product.name }}</h1>
        <Badge :color="getLabel.color" :name="product.label" :title="getLabel.tooltip" :id="product.label"
          :removable="false" />
      </div>
      <div class="shop-name">
        {{ getShop }}
      </div>
      <div class="badges-container">
        <Badge v-for="badge in getProductBadges" :key="badge" :color="getCategoryObject(badge).color" :id="badge"
          :name="getCategoryObject(badge).name" :removable="false" :title="badge" />
      </div>
    </header>
    <div class="properties">
      <div>
        <div class="label">zuletzt aktualisiert:</div> {{ makeDateReadable(product.lastEdited) }}
      </div>
      <div>
        <div class="label">Verfügbarkeit:</div>
        <span v-if="product.isSeasonal">nicht jederzeit</span>
        <span v-else>immer</span>
        verfügbar
      </div>
    </div>
    <div class="description">
      {{ product.notes }}
    </div>
    <div class="bottom-info">{{ getAuthorWithDate }}</div>
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
    },
    getAuthorWithDate(): String {
      return `erstellt von ${this.product.author} am ${this.makeDateReadable(this.product.created)}`
    }
  },
  methods: {
    makeDateReadable(date: string): String {
      return DateTime.fromJSDate(new Date(date)).setLocale('de').toLocaleString()
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
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      text-align: left;
      margin-top: $sp-small;
      margin-bottom: 0px;
    }
  }

  .shop-name {
    text-align: left;
    color: $color-font-medium;
    font-size: $fs-medium;
    margin-bottom: $sp-small;
  }

  .badges-container {
    display: flex;
    gap: $sp-tiny;
    flex-wrap: wrap;
    margin-bottom: $sp-small;

  }
}

.description {
  text-align: left;
  margin-bottom: $sp-medium;
}

.properties {
  text-align: left;
  margin-bottom: $sp-medium;

  .label {
    width: 200px;
    display: inline-block;
    font-weight: $fw-bold;
    margin-right: $sp-small;
  }
}

.bottom-info {
  color: $color-font-medium;
}
</style>