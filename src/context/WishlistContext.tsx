import { createContext, ReactNode, useCallback, useMemo } from "react";
import { createContextHook } from "../hooks/createContextHook";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GUEST_WISHLIST_KEY } from "../data/locatStorageKey";
import { WishlistValue } from "../types/wishlistTypes";

export const WishlistContext = createContext<WishlistValue | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [guestWishlist, setGuestWishlist] = useLocalStorage<string[]>(
    GUEST_WISHLIST_KEY,
    [],
  );

  const toggleGuestWishlist = useCallback((productId: string) => {
    setGuestWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  }, []);

  const cleanGuestWishlist = useCallback(() => setGuestWishlist([]), []);

  const value = useMemo(
    () => ({
      guestWishlist,
      toggleGuestWishlist,
      cleanGuestWishlist,
    }),
    [guestWishlist, toggleGuestWishlist, cleanGuestWishlist],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlistContext = createContextHook(
  WishlistContext,
  WishlistProvider,
);
