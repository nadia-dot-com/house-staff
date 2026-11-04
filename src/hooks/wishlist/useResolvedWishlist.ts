import { useUserContext } from "@/context/UserContext";
import { useWishlistContext } from "@/context/WishlistContext";
import { useItemsByIds } from "@/hooks/products/useItemsByIds";
import { useWishlistQuery } from "@/hooks/wishlist/useWishlistQuery";

export const useResolvedWishlist = () => {
  const { guestWishlist } = useWishlistContext();
  const { user } = useUserContext();

  const { data: userWishlist = [], isLoading, error } = useWishlistQuery();
  const { filteredProducts: guestWishlistItems } = useItemsByIds(guestWishlist);
  const wishlist = user ? userWishlist : guestWishlistItems;

  return {wishlist, isLoading, error};
};
