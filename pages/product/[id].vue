<template>
  <div>
    Product - {{ product }}
  </div>
</template>

<script lang="ts">


import { defineComponent } from "vue";
import { DataService } from '../../services/DataService'
const DS = new DataService()
export default defineComponent({
  data() {
    return {
      product: DS.getProductById(this.$route.params.id as String)
    }
  }
})
</script>