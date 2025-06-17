<script setup lang="ts">
import type {PropType} from "vue";
import type {Product} from "@/constants/product.ts";

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  }
})
</script>

<template>
  <div>
    <template v-if="product">
      <img :src="product.images" alt="Нет сети">
      <div>
        <h1>{{ product.name }}</h1>
        <h2>{{ product.price }}</h2>
        <h2>{{ product.availability }}</h2>
      </div>
    </template>
    <template v-else>
      <p>Продукт не найден.</p>
    </template>
  </div>
</template>
