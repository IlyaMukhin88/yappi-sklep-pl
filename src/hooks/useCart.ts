import { useState, useCallback, useMemo, useEffect } from "react";
import { CartItem, Cart } from "@/types/cart";
import { toast } from "@/hooks/use-toast";

const CART_STORAGE_KEY = "yappi-cart";

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const cart: Cart = useMemo(() => ({
    items,
    total: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    itemsCount: items.reduce((sum, item) => sum + item.quantity, 0)
  }), [items]);

  const addToCart = useCallback((
    productId: string,
    name: string,
    color: string,
    size: string,
    quantity: number,
    price: number,
    image: string
  ) => {
    const existingItemIndex = items.findIndex(
      item => item.productId === productId && item.color === color && item.size === size
    );

    if (existingItemIndex > -1) {
      setItems(prev => prev.map((item, index) => 
        index === existingItemIndex 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      const newItem: CartItem = {
        id: `${productId}-${color}-${size}-${Date.now()}`,
        productId,
        name,
        color,
        size,
        quantity,
        price,
        image
      };
      setItems(prev => [...prev, newItem]);
    }

    toast({
      title: "Dodano do koszyka",
      description: `${name} (${color}, rozmiar ${size}) został dodany do koszyka.`,
    });
  }, [items]);

  const updateQuantity = useCallback((itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
    
    toast({
      title: "Usunięto z koszyka",
      description: "Produkt został usunięty z koszyka.",
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    localStorage.removeItem(CART_STORAGE_KEY);
  }, []);

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart
  };
};