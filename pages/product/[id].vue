<template>
  <div class="product-detail-container">
    <header>
      <div class="heading">
        <h2>{{ product.name }}</h2>
        <Badge :color="getLabel.color" :name="product.label" :title="getLabel.tooltip" :id="product.label"
          :is-removable="false" />
      </div>
      <div class="shop-name">
        <NuxtLink :to="`/shop/${product.shop}`">{{ getShopName }}</NuxtLink>
      </div>
      <div class="badges-container">
        <Badge v-for="badge in getProductBadges" :key="badge" :color="getCategoryObject(badge).color" :id="badge"
          :name="getCategoryObject(badge).name" :is-removable="false" :title="badge" />
      </div>
    </header>
    <div class="product-info">
      <div>
        <div class="description">
          {{ product.notes }}
        </div>
        <div class="properties">
          <div>
            <div class="label">zuletzt aktualisiert:</div> {{ makeDateReadable(product.lastEdited) }}
          </div>
          <div v-if="product.isSeasonal">
            <div class="label">Verfügbarkeit:</div>
            <span>nicht jederzeit verfügbar</span>
          </div>
        </div>
      </div>
      <div class="bottom-info">{{ getAuthorWithDate }}</div>
    </div>
    <WarningButton :product="product" />
  </div>
</template>

<script lang="ts">
import { DateTime } from "luxon";
import { Labels, Categories, CategoryIds, Category, Product, Shop } from "../../types"
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      product: this.$DS.getProductById(this.$route.params.id as string)
    }
  },
  mounted() {
    const route = useRoute()
    const product = this.$DS.getProductById(route.params.id as string) as Product
    const shop = this.$DS.getShopById(product.shop) as Shop
    const description = `${product.name} ist ein veganes oder veganisierbares Gericht bei ${shop.name}.`
    useHead({
      title: product.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
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
    getLabel() {
      return Labels[this.product.label]
    },
    getShopName() {
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
    makeDateReadable(dateString: string): String {
      const [year, month, day] = dateString.split('-')
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
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

.product-detail-container {
  min-height: calc(100vh - $navbar-height - $sp-medium * 3);
  display: flex;
  flex-direction: column;
}

header {
  margin-bottom: $sp-medium;

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      text-align: left;
      margin-top: $sp-small;
      margin-bottom: 0px;
    }
  }

  .shop-name {
    margin-bottom: $sp-small;
    text-align: left;

    a {
      color: $color-font-medium;
      font-size: $fs-medium;
    }
  }

  .badges-container {
    display: flex;
    gap: $sp-tiny;
    flex-wrap: wrap;
    margin-bottom: $sp-small;

  }
}

.product-info {
  flex-grow: 1;
  display: grid;
  margin-bottom: $sp-medium;

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
    align-self: flex-end;
    color: $color-font-medium;
  }
}

@media only screen and (min-width: 700px) {
  .error-click-to-action {
    flex-direction: row;
  }
}
</style>