import { createContext, ReactNode, useCallback, useMemo } from "react";
import { createContextHook } from "@/hooks/createContextHook";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { GUEST_WISHLIST_KEY } from "@/data/localStorageKey";
import { WishlistValue } from "@/types/wishlistTypes";

// eslint-disable-next-line react-refresh/only-export-components -- context + provider + hook are colocated by design
export const WishlistContext = createContext<WishlistValue | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [guestWishlist, setGuestWishlist] = useLocalStorage<string[]>(
    GUEST_WISHLIST_KEY,
    [],
  );

  const toggleGuestWishlist = useCallback(
    (productId: string) => {
      setGuestWishlist((prev) =>
        prev.includes(productId)
          ? prev.filter((id) => id !== productId)
          : [...prev, productId],
      );
    },
    [setGuestWishlist],
  );

  const cleanGuestWishlist = useCallback(
    () => setGuestWishlist([]),
    [setGuestWishlist],
  );

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

// eslint-disable-next-line react-refresh/only-export-components -- context + provider + hook are colocated by design
export const useWishlistContext = createContextHook(
  WishlistContext,
  WishlistProvider,
);
