import { ReactNode, useCallback, useMemo, createContext, useEffect } from "react";
import { IS_ORDER_OPEN_KEY } from "@/data/locatStorageKey";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContextHook } from "@/hooks/createContextHook";
import { CartUiContextValue } from "@/types/cartUiTypes";

export const CartUIContext = createContext<CartUiContextValue | null>(null);

export function CartUIProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useLocalStorage<boolean>(
    IS_ORDER_OPEN_KEY,
    false,
  );

  useEffect(() => {
      document.body.style.overflow = isCartOpen ? "hidden" : "";
    }, [isCartOpen]);

  const toggleCartOpen = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, [setIsCartOpen]);

  const value = useMemo(() => ({
    isCartOpen,
    toggleCartOpen,
  }), [isCartOpen, toggleCartOpen]);

  return (
    <CartUIContext.Provider value={value}>
      {children}
    </CartUIContext.Provider>
  );
}

export const useCartUiContext = createContextHook(
  CartUIContext,
  CartUIProvider
);