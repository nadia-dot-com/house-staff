import { useUserContext } from "../../context/UserContext";
import { useWishlistContext } from "../../context/WishlistContext";
import { useItemsByIds } from "../products/useItemByIds";
import { useWishlistQuery } from "./useWishlistQuery";

export const useResolvedWishlist = () => {
  const { guestWishlist } = useWishlistContext();
  const { user } = useUserContext();

  const { data: userWishlist = [] } = useWishlistQuery();
  const { filteredProducts: guestWishlistItems } = useItemsByIds(guestWishlist);

  return user ? userWishlist : guestWishlistItems;
};
