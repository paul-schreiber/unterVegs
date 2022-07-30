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
      <div v-if="product.isSeasonal">
        <div class="label">Verfügbarkeit:</div>
        <span>nicht jederzeit verfügbar</span>
      </div>
    </div>
    <div class="description">
      {{ product.notes }}
    </div>
    <div class="bottom-info">{{ getAuthorWithDate }}</div>
    <div class="error-click-to-action">
      <font-awesome-icon class="warning-icon" :icon="['fas', 'circle-exclamation']" />
      <div>
        <span>Du hast einen Fehler entdeckt oder eine Angabe stimmt nicht? Her damit!</span>
        <NuxtLink :to="{
          name: 'contact',
          params: {
            topic: `Fehler - ${product.name}/${getShop}`
          }
        }">
          <button title="Melde ein Problem oder einen Fehler!" aria-label="Fehler melden">Fehler melden 👷🏽‍♀️</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { DateTime } from "luxon";
import { Labels, Categories, CategoryIds, Category } from "../../types"
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      product: this.$DS.getProductById(this.$route.params.id as String)
    }
  },
  computed: {
    getLabel() {
      return Labels[this.product.label]
    },
    getShop() {
      return this.$DS.getShopById(this.product.shop).name
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
a {
  color: $color-font-dark;
  text-decoration: none;
}

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
  margin-bottom: $sp-large;
  color: $color-font-medium;
}

.error-click-to-action {
  display: flex;
  align-items: center;
  width: fit-content;
  gap: $sp-medium;
  margin: auto;
  text-align: left;
  padding: $sp-medium;
  border-radius: 15px;
  background-color: $color-warning-bg;
  font-weight: bold;

  .warning-icon {
    color: $color-warning;
    font-size: 1.6rem;
  }

  button {
    width: 145px;
    all: unset;
    cursor: pointer;
    border-radius: 10px;
    padding: $sp-small;
    margin: $sp-small;
    font-weight: bold;
    background-color: $color-warning;
    color: $color-font-light;
  }
}
</style>