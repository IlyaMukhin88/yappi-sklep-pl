export interface CartItem {
  id: string;
  productId: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemsCount: number;
}