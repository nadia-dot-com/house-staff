import classes from "@/components/ProductDetails/ProductDetails.module.scss";
import { useCartContext } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button/Button";
import { QuantityInput } from "@/components/QuantityInput/QuantityInput";
import { useShoppingNavigation } from "@/hooks/useShoppingNavigation";
import { cn } from "@/utils/cn";
import { checkProductDate } from "@/utils/checkProductDate";
import { useWishlist } from "@/hooks/wishlist/useWishlist";
import { Product } from "@/types/api/product";
import { isProductInStock, isProductOnSale } from "@/utils/product";
import { WishlistButton } from "@/components/wishlist/WishlistButton/WishlistButton";
import { Price } from "@/components/Price/Price";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import { ProductGalleryDesktop } from "@/components/ProductDetails/ProductGalleryDesktop/ProductGalleryDesktop";
import { ProductGalleryMobile } from "@/components/ProductDetails/ProductGalleryMobile/ProductGalleryMobile";

export function ProductDetails({ product }: { product: Product }) {
  const {
    name,
    imagesUrls,
    fullDescription,
    price,
    stockQuantity,
    id,
    categoryName,
    releaseDate,
    discount,
  } = product;
  const [quantityValue, setQuantity] = useState(1);

  const { addToCart } = useCartContext();
  const { navigateToCategory } = useShoppingNavigation();

  const { liked, toggleLike, isLoading } = useWishlist(id);

  const isOnSale = isProductOnSale(product);
  const isInStock = isProductInStock(stockQuantity);
  const isNew = checkProductDate(releaseDate);

  useEffect(() => {
    if (!isInStock) setQuantity(0);
    else setQuantity((prev) => Math.min(prev || 1, stockQuantity));
  }, [isInStock, stockQuantity]);

  return (
    <PageTransition>
      <div
        className={cn(
          classes.productDetails,
          !isInStock && classes.productDisabled,
        )}
      >
        <ProductGalleryDesktop
          imagesUrls={imagesUrls}
          name={name}
          isOnSale={isOnSale}
          isNew={isNew}
        />
        <ProductGalleryMobile
          imagesUrls={imagesUrls}
          name={name}
          isOnSale={isOnSale}
          isNew={isNew}
        />
        <div className={classes.infoColumn}>
          <h1 className={classes.title}>
            {name}
            <WishlistButton
              isLoading={isLoading}
              toggleLike={toggleLike}
              liked={liked}
            />
          </h1>
          <Price price={price} discount={discount} />
          <div className={classes.quantityContainer}>
            <QuantityInput
              quantity={quantityValue}
              stock={stockQuantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <Button
              disabled={!isInStock}
              bgColor="black"
              textColor="white"
              text="ADD TO ORDER"
              onClick={() => {
                addToCart(product, quantityValue);
              }}
              ariaLabel={`add to cart ${name}`}
            />
          </div>
          <p className={classes.desc}>{fullDescription}</p>
        </div>
        <button
          className={classes.closeBtn}
          onClick={() => navigateToCategory(categoryName)}
          type="button"
        >
          ✕
        </button>
      </div>
    </PageTransition>
  );
}
