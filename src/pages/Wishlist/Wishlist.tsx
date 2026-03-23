import { WishlistItems } from "@/components/wishlist/WishlistItems/WishlistItems";
import { useResolvedWishlist } from "@/hooks/wishlist/useResolvedWishlist";
import classes from "./Wishlist.module.css";
import { PageTransition } from "@/components/PageTransition/PageTransition";

export default function Wishlist() {
  const { wishlist, error, isLoading } = useResolvedWishlist();

  return (
    <section className={classes.guestWishlistContainer}>
      <PageTransition>
        <div className={classes.wishlistWrapper}>
          <h1 className={classes.title}>Wishlist</h1>
          <WishlistItems list={wishlist} isLoading={isLoading} error={error} />
        </div>
      </PageTransition>
    </section>
  );
}
