import classes from "@/components/wishlist/WishlistItems/WishlistItem/WishlistItem.module.scss";
import { useWishlist } from "@/hooks/wishlist/useWishlist";
import { Button } from "@/components/Button/Button";
import { useCartContext } from "@/context/CartContext";
import { Product } from "@/types/api/product";
import likeLoading from "@/animations/insider-loading.json";
import Lottie from "lottie-react";
import { Price } from "@/components/Price/Price";
import { ShopLink } from "@/components/ShopLink/ShopLink";
import { RxCross2 } from "react-icons/rx";

export function WishlistItem({ item }: { item: Product }) {
  const { name, categoryName, imagesUrls, price, stockQuantity, discount, id } =
    item;
  const { toggleLike, isLoading } = useWishlist(id);
  const { addToCart } = useCartContext();

  const handleAddToCart = () => addToCart(item);

  return (
    <div className={classes.wishlistItem}>
      <div className={classes.media}>
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
             <RxCross2 />
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
          <div className={classes.title}>{name}</div>
        </ShopLink>

        <Price discount={discount} price={price} size="small"/>
      </div>

      <div className={classes.button}>
        <Button
          bgColor="#ddd"
          textColor="black"
          text="Add to cart"
          onClick={handleAddToCart}
          disabled={stockQuantity === 0}
          ariaLabel={`add to cart ${name}`}
        />
      </div>
    </div>
  );
}
