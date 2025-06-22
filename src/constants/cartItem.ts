import type {Product} from "@/constants/product.ts";

export interface CartItem {
  product: Product;
  quantity: number;
}
