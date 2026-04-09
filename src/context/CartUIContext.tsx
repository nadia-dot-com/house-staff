import { ReactNode, useCallback, useMemo, createContext, useEffect, useState } from "react";
import { IS_ORDER_OPEN_KEY } from "@/data/locatStorageKey";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContextHook } from "@/hooks/createContextHook";
import { CartUiContextValue } from "@/types/cartUiTypes";
import { useToggle } from "@/hooks/useToggle";

export const CartUIContext = createContext<CartUiContextValue | null>(null);

export function CartUIProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useLocalStorage<boolean>(
    IS_ORDER_OPEN_KEY,
    false,
  );

  const [isMenuOpen, setIsMenuOpen] = useToggle(false);

  useEffect(() => {
      document.body.style.overflow = isCartOpen ? "hidden" : "";
    }, [isCartOpen]);

  const toggleCartOpen = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, [setIsCartOpen]);

  const value = useMemo(() => ({
    isCartOpen,
    toggleCartOpen,
    isMenuOpen,
    toggleMenuOpen: setIsMenuOpen,
  }), [isCartOpen, toggleCartOpen, isMenuOpen]);

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