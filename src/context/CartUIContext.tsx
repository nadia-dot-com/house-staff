import { ReactNode, useCallback, useMemo, createContext } from "react";
import { IS_ORDER_OPEN_KEY } from "@/data/locatStorageKey";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContextHook } from "@/hooks/createContextHook";
import { CartUiContextValue } from "@/types/cartUiTypes";

// eslint-disable-next-line react-refresh/only-export-components -- context + provider + hook are colocated by design
export const CartUIContext = createContext<CartUiContextValue | null>(null);

export function CartUIProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useLocalStorage<boolean>(
    IS_ORDER_OPEN_KEY,
    false,
  );

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

// eslint-disable-next-line react-refresh/only-export-components -- context + provider + hook are colocated by design
export const useCartUiContext = createContextHook(
  CartUIContext,
  CartUIProvider
);