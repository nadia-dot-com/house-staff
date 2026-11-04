import classes from "@/components/wishlist/WishlistItems/WishlistItem/WishlistItem.module.scss";
import { useWishlist } from "@/hooks/wishlist/useWishlist";
import { Button } from "@/components/Button/Button";
import { useCartContext } from "@/context/CartContext";
import { Product } from "@/types/api/product";
import likeLoading from "@/animations/insider-loading.json";
import Lottie from "lottie-react";
import { Price } from "@/components/Price/Price";
import { ShopLink } from "@/components/ShopLink/ShopLink";

export function WishlistItemVisual({
  item,
  isLoading,
  toggleLike,
  addToCart,
}: {
  item: Product;
  isLoading: boolean;
  toggleLike: () => void;
  addToCart: () => void;
}) {
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
          <h4 className={classes.text}>{name}</h4>
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
}

export function WishlistItem({ item }: { item: Product }) {
  const { id } = item;
  const { toggleLike, isLoading } = useWishlist(id);
  const { addToCart } = useCartContext();

  const handleAddToCart = () => addToCart(item);

  const handleToggleLike = () => toggleLike();

  return (
    <WishlistItemVisual
      item={item}
      isLoading={isLoading}
      toggleLike={handleToggleLike}
      addToCart={handleAddToCart}
    />
  );
}
