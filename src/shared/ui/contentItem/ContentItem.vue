<script setup lang="ts">
import {computed} from "vue";
import MyButton from "@/shared/ui/button/MyButton.vue";
import { IpPlus, IpMinus } from 'vue-icons-plus/ip'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  updateCartQuantity: {
    type: Function,
    required: true,
  },
})

const actualProduct = computed(() => {
  if (props.product && props.product.product && typeof props.product.product === 'object') {
    return props.product.product;
  }
  return props.product;
})

const imageUrl = computed(() => {
  if (actualProduct.value && actualProduct.value.images) {
    if (Array.isArray(actualProduct.value.images)) {
      return actualProduct.value.images[0];
    } else {
      return actualProduct.value.images;
    }
  }
  return ''
})
</script>

<template>
  <div>
    <template v-if="actualProduct">
      <img :src="imageUrl" :alt="actualProduct.name || 'Нет сети'">
      <div>
        <h1>{{ actualProduct.name }}</h1>
        <h2>{{ actualProduct.price }} р.</h2>
        <div v-if="product.quantity">
          <h2>{{ product.quantity}}</h2>
          <MyButton @click="updateCartQuantity(actualProduct.id, product.quantity, '+')"><IpPlus /></MyButton>
          <MyButton @click="updateCartQuantity(actualProduct.id, product.quantity, '-')"><IpMinus /></MyButton>
        </div>
        <h2>{{ actualProduct.availability === false ? "В наличии" : "Нету" }}</h2>
      </div>
    </template>
    <template v-else>
      <p>Продукт не найден.</p>
    </template>
  </div>
</template>
