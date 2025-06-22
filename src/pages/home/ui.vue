<script setup lang="ts">
import ContentItem from "@/shared/ui/contentItem/ContentItem.vue";
import {onMounted, ref} from "vue";
import {getProduct} from "@/shared/config/mockAPI.ts";
import type {Product} from "@/entities/product/model/product.ts";
import {useCartStore} from "@/entities/cart/model/store.ts";

const arrProducts = ref< Product[] | null>(null);
const { addToCart, updateCartQuantity } = useCartStore()
async function getProducts() {
  try {
    const data = await fetch(`${getProduct}/product`);
    arrProducts.value = await data.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    arrProducts.value = [];
  }
}

onMounted(() => {
  getProducts()
})
</script>

<template>
  <div>
    Home
    <div>
      <div
        v-if="arrProducts && arrProducts.length > 0"
        class="flex flex-row gap-5"
      >
        <content-item
          v-for="productItem in arrProducts"
          :key="productItem.id"
          :product="productItem"
          :update-cart-quantity="updateCartQuantity"
          @click="addToCart(productItem)"
        />
      </div>
      <div v-else-if="arrProducts === null">
        <p>Идет загрузка</p>
      </div>
      <div v-else>
        <p>Товары не найдены или сервер шалит</p>
      </div>
    </div>
  </div>
</template>

