import type {Product} from "@/entities/product/model/product.ts";
import type {Ref} from "vue";
import type { CartItem } from "@/entities/cart/model/types.ts";

interface CartLogic {
  loadCartFromLocalStorage: () => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeProduct: (productId: number) => void;
  clearCart: () => void;
  updateCartQuantity: (productId: number, quantity: number, addOrSubtract: string) => void;
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
    console.log(itemsRef.value);
    console.log(productId)
    itemsRef.value = itemsRef.value.filter(item => item.product.id !== productId);
    saveCartToLocalStorage()
  }

  const clearCart = () => {
    itemsRef.value = [];
    saveCartToLocalStorage()
  }

  const updateCartQuantity = (productId: number, quantity: number, addOrSubtract: string): void => {
    const item = itemsRef.value.find(item => item.product.id === productId);
    if (item) {
      if (quantity > 0) {
        if (addOrSubtract === "+") {
          item.quantity += 1;
        } else if (addOrSubtract === "-") {
          item.quantity -= 1;
        }
      }
      if (item.quantity <= 0) {
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

