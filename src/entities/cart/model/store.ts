import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {CartItem} from "@/entities/cart/model/types.ts";
import {useCartLogic} from "@/entities/cart/lib/addItemToCart.ts";

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const {
    loadCartFromLocalStorage,
    addToCart,
    clearCart,
    updateCartQuantity,
    removeProduct,
  } = useCartLogic(items);

  loadCartFromLocalStorage()

  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0);
  })
  return {
    items,
    totalItems,
    addToCart,
    clearCart,
    updateCartQuantity,
    removeProduct,
  }
})
