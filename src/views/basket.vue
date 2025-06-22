<script setup lang="ts">

import ContentItem from "@/components/main/ContentItem.vue";
import {useCartStore} from "@/stores/cart.ts";
import MyButton from "@/components/ui/button/MyButton.vue";
import {storeToRefs} from "pinia";

const cartStore = useCartStore()
const { removeProduct, updateCartQuantity } = cartStore
const { items } = storeToRefs(cartStore);
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
        :updateCartQuantity="updateCartQuantity"
      />
      <MyButton text="Удалить" @click="removeProduct(productItem.product.id)" />
    </div>
  </div>
</template>
