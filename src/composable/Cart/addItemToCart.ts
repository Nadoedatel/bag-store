import type {Product} from "@/constants/product.ts";
import type {Ref} from "vue";
import type {CartItem} from "@/constants/cartItem.ts";

interface CartLogic {
  loadCartFromLocalStorage: () => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeProduct: (productId: number) => void;
  clearCart: () => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
}

export function useCartLogic(itemsRef: Ref<CartItem[]>): CartLogic {

  const loadCartFromLocalStorage = (): void => {
    try {
      const storedCart = localStorage.getItem("cart");

      if (storedCart) {
        itemsRef.value = JSON.parse(storedCart);
      }
    } catch (err) {
      console.error(err);
      itemsRef.value = [];
    }
  }

  const saveCartToLocalStorage = (): void => {
    localStorage.setItem("cart", JSON.stringify(itemsRef.value));
  }

  const addToCart = (product: Product, quantity: number = 1): void => {
    const existingItem = itemsRef.value.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      itemsRef.value.push({product, quantity});
    }
    saveCartToLocalStorage()
  }

  const removeProduct = (productId: number): void => {
    itemsRef.value = itemsRef.value.filter(item => item.product.id !== productId);
    saveCartToLocalStorage()
  }

  const clearCart = () => {
    itemsRef.value = [];
    saveCartToLocalStorage()
  }

  const updateCartQuantity = (productId: number, quantity: number): void => {
    const item = itemsRef.value.find(item => item.product.id === productId);
    if (item) {
      if (quantity > 0) {
        item.quantity = quantity;
      } else {
        removeProduct(productId)
      }
      saveCartToLocalStorage()
    }
  }

  return {
    loadCartFromLocalStorage,
    addToCart,
    removeProduct,
    clearCart,
    updateCartQuantity,
  }
}

