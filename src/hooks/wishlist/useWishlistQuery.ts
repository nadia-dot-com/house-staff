import { useQuery } from "@tanstack/react-query";
import { fetchWishlist } from "@/api/wishlist.api";
import { fetchProducts } from "@/api/products.api";
import { Product } from "@/types/api/product";
import { useUserContext } from "@/context/UserContext";
import { keyBy } from "lodash";
import { queryClient } from "@/query/queryClient";
import { QUERY_KEYS } from "@/api/queryKeys";

export const useWishlistQuery = () => {
  const { token } = useUserContext();

  return useQuery<Product[], Error>({
    queryKey: QUERY_KEYS.wishlist(token),
    queryFn: async () => {
      if (!token) throw new Error("No token");

      const wishlist = await fetchWishlist(token);
      const products = await queryClient.ensureQueryData({
        queryKey: QUERY_KEYS.products,
        queryFn: fetchProducts,
      });

      const productsMap = keyBy(products, "id");

      return wishlist
        .map((wishlistItem) => productsMap[wishlistItem.id])
        .filter(Boolean);
    },
    enabled: !!token,
  });
};
