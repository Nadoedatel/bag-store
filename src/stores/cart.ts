import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {CartItem} from "@/constants/cartItem.ts";
import {useCartLogic} from "@/composable/Cart/addItemToCart.ts";

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const {
    loadCartFromLocalStorage,
    addToCart
  } = useCartLogic();

  loadCartFromLocalStorage();

  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0);
  })
  return {
    items,
    totalItems,
    addToCart,
  }
})
