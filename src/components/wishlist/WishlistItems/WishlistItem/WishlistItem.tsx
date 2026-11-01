import classes from "@/components/wishlist/WishlistItems/WishlistItem/WishlistItem.module.scss";
import { useWishlist } from "@/hooks/wishlist/useWishlist";
import { Button } from "@/components/Button/Button";
import { useCartContext } from "@/context/CartContext";
import { Product } from "@/types/api/product";
import { useShoppingNavigation } from "@/hooks/useShoppingNavigation";
import likeLoading from "@/animations/insider-loading.json";
import Lottie from "lottie-react";
import { Price } from "@/components/Price/Price";
import { memo, useCallback } from "react";
import { ShopLink } from "@/components/ShopLink/ShopLink";

export const WishlistItemVisual = memo(
  ({
    item,
    isLoading,
    toggleLike,
    navigate,
    addToCart,
  }: {
    item: Product;
    isLoading: boolean;
    toggleLike: () => void;
    navigate: () => void;
    addToCart: () => void;
  }) => {
    const { name, categoryName, imagesUrls, price, stockQuantity, discount } =
      item;

    return (
      <div className={classes.wishlistItem}>
        <div className={classes.wrapOne}>
          <div className={classes.closeContainer}>
            {isLoading ? (
              <Lottie
                animationData={likeLoading}
                style={{
                  width: 80,
                  height: 80,
                  position: "absolute",
                  pointerEvents: "none",
                  opacity: 0.8,
                }}
              />
            ) : (
              <button
                className={classes.closeBtn}
                onClick={toggleLike}
                aria-label={`Remove ${name} from wishlist`}
              >
                ✕
              </button>
            )}
          </div>

          <ShopLink name={name} category={categoryName}>
            <img
              src={imagesUrls[0]}
              alt={name}
              className={classes.img}
              width="126"
              height="150"
            />
          </ShopLink>
        </div>
        <div className={classes.itemInfo}>
          <ShopLink name={name} category={categoryName}>
            <h4 className={classes.text} onClick={navigate}>
              {name}
            </h4>
          </ShopLink>

          <Price discount={discount} price={price} />
        </div>

        <div className={classes.button}>
          <Button
            bgColor="#ddd"
            textColor="black"
            text="ADD TO CART"
            onClick={addToCart}
            disabled={stockQuantity === 0}
            ariaLabel={`add to cart ${name}`}
          />
        </div>
      </div>
    );
  },
);

export const WishlistItem = memo(({ item }: { item: Product }) => {
  const { id, name, categoryName } = item;
  const { toggleLike, isLoading } = useWishlist(id);
  const { addToCart } = useCartContext();
  const { navigateToCategory } = useShoppingNavigation();

  const handleAddToCart = useCallback(() => addToCart(item), [addToCart, item]);

  const handleNavigate = useCallback(
    () => navigateToCategory(categoryName, name),
    [name, categoryName, navigateToCategory],
  );

  const handleToggleLike = useCallback(() => toggleLike(), [toggleLike]);

  return (
    <WishlistItemVisual
      item={item}
      isLoading={isLoading}
      toggleLike={handleToggleLike}
      navigate={handleNavigate}
      addToCart={handleAddToCart}
    />
  );
});
