import type {Product} from "@/constants/product.ts";
import {useCartStore} from "@/stores/cart.ts";

interface CartLogic {
  cartStore: ReturnType<typeof useCartStore>;
  loadCartFromLocalStorage: () => void;
  saveCartToLocalStorage: () => void;
  addToCart: (product: Product, quantity?: number) => void;
}

export function useCartLogic(): CartLogic {
  const cartStore = useCartStore();

  const loadCartFromLocalStorage = (): void => {
    try {
      const storedCart = localStorage.getItem("cart");

      if (storedCart) {
        cartStore.items = JSON.parse(storedCart);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const saveCartToLocalStorage = (): void => {
    localStorage.setItem("cart", JSON.stringify(cartStore.items));
  }

  const addToCart = (product: Product, quantity: number = 1): void => {
    const existingItem = cartStore.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartStore.items.push({product, quantity});
    }
    saveCartToLocalStorage()
  }

  return {
    cartStore,
    loadCartFromLocalStorage,
    saveCartToLocalStorage,
    addToCart,
  }
}

