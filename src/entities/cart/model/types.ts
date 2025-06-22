interface Product {
  id: number,
  images: string,
  name: string,
  price: string,
  availability: string,
}


interface CartItem {
  product: Product;
  quantity: number
}

export { type CartItem, type Product }
