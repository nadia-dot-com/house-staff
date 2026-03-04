import { useWishlist } from "../../../../hooks/wishlist/useWishlist";
import { Button } from "../../../../components/Button/Button";
import { useCartContext } from "../../../../context/CartContext";
import { Product } from "../../../../types/api/product";
import { useShoppingNavigation } from "../../../../hooks/useShoppingNavigation";
import likeLoading from "../../../../animations/insider-loading.json";
import classes from "./WishlistItem.module.css";
import Lottie from "lottie-react";
import { Price } from "../../../Price/Price";
import { memo, useCallback } from "react";

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
    const { name, imagesUrls, price, stockQuantity, discount } = item;
    console.log(name);

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
              <div className={classes.closeBth} onClick={toggleLike}>
                ✕
              </div>
            )}
          </div>

          <img
            src={imagesUrls[0]}
            alt={name}
            className={classes.img}
            onClick={navigate}
            width="126"
            height="150"
          />
        </div>
        <div className={classes.itemInfo}>
          <h4 className={classes.text} onClick={navigate}>
            {name}
          </h4>

          <Price discount={discount} price={price} />
        </div>

        <div className={classes.button}>
          <Button
            bgColor="#ddd"
            textColor="black"
            text="ADD TO CART"
            onClick={addToCart}
            disabled={stockQuantity === 0}
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
