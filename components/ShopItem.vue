<template>
  <router-link to="/shop">
    <div class="shop-item">
      <div class="name-container">{{ shop.name }}</div>
      <div class="label-container">{{ shop.id }}</div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { DateTime } from "luxon";
import type { Shop } from "../types"
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    shop: {
      type: Object as () => Shop,
      required: true
    },
  }
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
  width: fit-content;
}

.shop-item {
  display: flex;
  width: 600px;
  height: 40px;
  align-items: center;

  .badge-container {
    width: 300px;
  }

  .name-container {
    width: 30%;
  }

  .label-container {
    width: 150px;
  }

  .date-container {
    width: 120px;
  }
}
</style>