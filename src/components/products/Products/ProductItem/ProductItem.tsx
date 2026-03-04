import { cn } from "../../../../utils/cn";
import { useCartContext } from "../../../../context/CartContext";
import { SaleLabel } from "../../../SaleLabel/SaleLabel";
import { useWishlist } from "../../../../hooks/wishlist/useWishlist";
import { checkProductDate } from "../../../../utils/checkProductDate";
import { NewProductLabel } from "../../../NewProductLabel/NewProductLabel";
import { Product } from "../../../../types/api/product";
import { useShoppingNavigation } from "../../../../hooks/useShoppingNavigation";
import { isProductInStock, isProductOnSale } from "../../../../utils/product";
import { memo, useCallback } from "react";
import classes from "./ProductItem.module.css";
import { WishlistButton } from "../../../WishlistButton/WishlistButton";
import { Price } from "../../../Price/Price";

const ProductItemVisual = memo(
  ({
    product,
    addToCart,
    liked,
    toggleLike,
    handleNavigate,
    isLoading,
  }: any) => {
    const {
      name,
      imagesUrls,
      shortDescription,
      price,
      stockQuantity,
      discount,
      releaseDate,
    } = product;

    const isOnSale = isProductOnSale(product);
    const isInStock = isProductInStock(stockQuantity);
    const isNew = checkProductDate(releaseDate);

    return (
      <div
        className={cn(classes.product, !isInStock && classes.disableProduct)}
      >
        <WishlistButton
          isLoading={isLoading}
          toggleLike={toggleLike}
          liked={liked}
          className={classes.heartInCard}
        />
        <div className={classes.labels}>
          {isOnSale && <SaleLabel />}
          {isNew && <NewProductLabel />}
        </div>
        <img
          src={imagesUrls[0]}
          alt={name}
          className={classes.img}
          onClick={handleNavigate}
          width="425"
          height="509"
        />
        <div className={classes.productInformation}>
          <h3 className={classes.title} onClick={handleNavigate}>
            {name}

            <span className={classes.categoryTitle}>
              {product.collectionName && ` | ${product.collectionName}`}
            </span>
          </h3>

          <p>{shortDescription}</p>
          <Price price={price} discount={discount} />

          <button
            className={classes.addToCard}
            onClick={addToCart}
            disabled={!isInStock}
          >
            +
          </button>
        </div>
      </div>
    );
  },
);

export const ProductItem = memo(({ product }: { product: Product }) => {
  const { addToCart } = useCartContext();
  const { liked, toggleLike, isLoading } = useWishlist(product.id);
  const { navigateToCategory } = useShoppingNavigation();

  const handleAddToCart = useCallback(
    () => addToCart(product),
    [addToCart, product],
  );

  const handleNavigate = useCallback(
    () => navigateToCategory(product.categoryName, product.name),
    [product, navigateToCategory],
  );

  const handleToggleLike = useCallback(() => toggleLike(), [toggleLike]);

  return (
    <ProductItemVisual
      product={product}
      addToCart={handleAddToCart}
      liked={liked}
      toggleLike={handleToggleLike}
      handleNavigate={handleNavigate}
      isLoading={isLoading}
    />
  );
});

