<script setup lang="ts">

import ContentItem from "@/components/main/ContentItem.vue";
import {useCartStore} from "@/stores/cart.ts";
import MyButton from "@/components/ui/button/MyButton.vue";

const { items, removeProduct } = useCartStore()
</script>

<template>
  <div class="flex flex-col">
    <h1>Payment Basket</h1>
    <h2>Товары:</h2>
    <div
      v-for="productItem in items"
    >
      <ContentItem
        :key="productItem.product.id"
        :product="productItem"
      />
      <MyButton @click="removeProduct(productItem.product.id)" />
    </div>
  </div>
</template>
