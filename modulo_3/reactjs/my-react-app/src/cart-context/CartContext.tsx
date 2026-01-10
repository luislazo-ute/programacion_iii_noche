import { createContext } from 'react';

/* Define el tipo de un item del carrito */
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

/* Define la forma del contexto */
interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

/* Crea el contexto tipado */
export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});
