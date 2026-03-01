import { useQuery } from "@tanstack/react-query";
import { fetchWishlist } from "../../api/wishlist.api";
import { fetchProducts } from "../../api/products.api";
import { Product } from "../../types/api/product";
import { useUserContext } from "../../context/UserContext";
import { keyBy } from "lodash";

export const useWishlistQuery = () => {
  const { token } = useUserContext();

  return useQuery<Product[], Error>({
    queryKey: ["wishlist"],
    queryFn: async () => {
      if (!token) throw new Error("No token");

      const [wishlist, products] = await Promise.all([
        fetchWishlist(token),
        fetchProducts(),
      ]);

      const productsMap = keyBy(products, "id");

      return wishlist.map((wishlistItem) => productsMap[wishlistItem.id]);
    },
    enabled: !!token,
  });
};
