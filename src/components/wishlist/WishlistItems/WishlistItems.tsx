import classes from "@/components/wishlist/WishlistItems/WishlistItems.module.scss";
import { Product } from "@/types/api/product";
import { DataLoader } from "@/components/DataLoader/DataLoader";
import { EmptyWishList } from "@/components/wishlist/EmptyWishList/EmptyWishList";
import { WishlistItem } from "@/components/wishlist/WishlistItems/WishlistItem/WishlistItem";

export function WishlistItems({
  list,
  isLoading,
  error,
}: {
  list: Product[];
  isLoading: boolean;
  error: Error | null;
}) {
  const isEmpty =
    (list === null && !isLoading) || (list.length === 0 && !isLoading);

  return (
    <div>
      {isEmpty ? (
        <EmptyWishList />
      ) : (
        <DataLoader error={error} loading={isLoading} loaded={!!list}>
          <ul className={classes.wishlist}>
            {list.map((item) => (
              <li key={item.id} className={classes.wishlistItem}>
                <WishlistItem item={item} />
              </li>
            ))}
          </ul>
        </DataLoader>
      )}
    </div>
  );
}
