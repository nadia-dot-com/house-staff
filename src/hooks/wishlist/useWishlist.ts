import { useCallback, useMemo } from "react";
import { useUserContext } from "@/context/UserContext";
import { useWishlistContext } from "@/context/WishlistContext";
import { useAddToWishlist } from "@/hooks/wishlist/useAddToWishlist";
import { useRemoveFromWishlist } from "@/hooks/wishlist/useRemoveFromWishlist";
import { useWishlistQuery } from "@/hooks/wishlist/useWishlistQuery";

export function useWishlist(productId: string) {
  const { guestWishlist, toggleGuestWishlist } = useWishlistContext();
  const { user } = useUserContext();

  const { data: wishlist = [] } = useWishlistQuery();
  const add = useAddToWishlist();
  const remove = useRemoveFromWishlist();

  const isAdding = add.isPending && add.variables?.includes(productId);
  const isRemoving = remove.isPending && remove.variables === productId;

  const isMutating = isAdding || isRemoving;

  const liked = user
    ? wishlist.some((item) => item.id === productId)
    : guestWishlist.includes(productId);

  const toggleLike = useCallback(() => {
    if (!user) {
      toggleGuestWishlist(productId);
      return;
    }

    if (isMutating) return;

    if (liked) {
      remove.mutate(productId);
    } else {
      add.mutate([productId]);
    }
  }, [liked, productId, user, isMutating, remove, add, toggleGuestWishlist]);

  return useMemo(
    () => ({
      liked,
      toggleLike,
      isLoading: isMutating,
    }),
    [liked, toggleLike, isMutating],
  );
}
