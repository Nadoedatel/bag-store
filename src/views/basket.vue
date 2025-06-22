<script setup lang="ts">

import ContentItem from "@/components/main/ContentItem.vue";
import {useCartStore} from "@/stores/cart.ts";

const { items } = useCartStore()
</script>

<template>
  <div class="flex flex-col">
    <h1>Payment Basket</h1>
    <h2>Товары:</h2>
    <ContentItem
      v-for="productItem in items"
      :key="productItem.product.id"
      :product="productItem"
    />
  </div>
</template>
