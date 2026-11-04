import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { createContextHook } from "@/hooks/createContextHook";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ORDER_KEY } from "@/data/localStorageKey";
import { toast } from "react-toastify";
import { Product } from "@/types/api/product";
import { OrderItem } from "@/types/orderTypes";
import { CartContextValue } from "@/types/cartTypes";
import { cartReducer } from "@/store/reducers/cart";
import {
  addToCartAction,
  clearCartAction,
  removeFromCartAction,
  updateQuantityAction,
} from "@/store/actions/cart";

// eslint-disable-next-line react-refresh/only-export-components -- context + provider + hook are colocated by design
export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [storedCart, setStoredCart] = useLocalStorage<OrderItem[]>(
    ORDER_KEY,
    [],
  );

  const [cartItems, dispatch] = useReducer(cartReducer, storedCart);

  useEffect(() => {
    setStoredCart(cartItems);
  }, [cartItems, setStoredCart]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    dispatch(addToCartAction(product, quantity));
    toast.success(`${product.name} added to Shopping Cart!`);
  }, []);

  const removeFromCart = useCallback(
    (id: string) => dispatch(removeFromCartAction(id)),
    [],
  );

  const updateQuantity = useCallback(
    (id: string, quantity: number, stock?: number) =>
      dispatch(updateQuantityAction(id, quantity, stock)),
    [],
  );

  const clearCart = useCallback(() => dispatch(clearCartAction()), []);

  const value = useMemo(
    () => ({
      cartItems,
      updateQuantity,
      addToCart,
      removeFromCart,
      clearCart,
    }),
    [cartItems, updateQuantity, addToCart, removeFromCart, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components -- context + provider + hook are colocated by design
export const useCartContext = createContextHook(CartContext, CartProvider);
