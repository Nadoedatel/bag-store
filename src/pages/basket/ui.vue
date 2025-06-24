<script setup lang="ts">

import ContentItem from "@/shared/ui/contentItem/ContentItem.vue";
import {useCartStore} from "@/entities/cart/model/store.ts";
import MyButton from "@/shared/ui/button/MyButton.vue";
import {storeToRefs} from "pinia";
import {productRegistration} from "@/entities/cart/lib/productRegistration.ts";

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
      :key="productItem.product.id"
    >
      <ContentItem
        :product="productItem"
        :updateCartQuantity="updateCartQuantity"
      />
      <MyButton text="message.Clear" @click="removeProduct(productItem.product.id)" />
    </div>
    <MyButton text="message.Checkout" @click="productRegistration()" />
  </div>
</template>
