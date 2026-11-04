import { WishlistItems } from "@/components/wishlist/WishlistItems/WishlistItems";
import { useWishlistQuery } from "@/hooks/wishlist/useWishlistQuery";

export default function Wishlist() {
  const { data: wishlist = [], error, isLoading } = useWishlistQuery();

  return (
    <div>
      <WishlistItems list={wishlist} isLoading={isLoading} error={error} />
    </div>
  );
}
