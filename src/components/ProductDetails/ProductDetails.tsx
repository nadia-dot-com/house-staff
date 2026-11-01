import classes from "@/components/ProductDetails/ProductDetails.module.scss";
import { useCartContext } from "@/context/CartContext";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button/Button";
import { QuantityInput } from "@/components/QuantityInput/QuantityInput";
import { useShoppingNavigation } from "@/hooks/useShoppingNavigation";
import { SaleLabel } from "@/components/SaleLabel/SaleLabel";
import { cn } from "@/utils/cn";
import { checkProductDate } from "@/utils/checkProductDate";
import { NewProductLabel } from "@/components/NewProductLabel/NewProductLabel";
import { useWishlist } from "@/hooks/wishlist/useWishlist";
import { Product } from "@/types/api/product";
import { isProductInStock, isProductOnSale } from "@/utils/product";
import { WishlistButton } from "@/components/wishlist/WishlistButton/WishlistButton";
import { Price } from "@/components/Price/Price";
import { PageTransition } from "@/components/PageTransition/PageTransition";

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
  const [mainImg, setMainImg] = useState<string>(imagesUrls[0]);
  const [quantityValue, setQuantity] = useState(1);
  
  const { addToCart } = useCartContext();
  const { navigateToCategory } = useShoppingNavigation();

  const { liked, toggleLike, isLoading } = useWishlist(id);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isOnSale = isProductOnSale(product);
  const isInStock = isProductInStock(stockQuantity);
  const isNew = checkProductDate(releaseDate);

  useEffect(() => {
    setMainImg(imagesUrls[0]);
  }, [imagesUrls]);

  useEffect(() => {
    if (!isInStock) setQuantity(0);
    else setQuantity((prev) => Math.min(prev || 1, stockQuantity));
  }, [isInStock, stockQuantity]);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const width = el.clientWidth;
    const scrollLeft = el.scrollLeft;

    const index = Math.round(scrollLeft / width);
    setActiveIndex((prev) => (prev !== index ? index : prev));
  };

  return (
    <PageTransition>
      <div
        className={cn(
          classes.productDetails,
          !isInStock && classes.productDisabled,
        )}
      >
        <div className={classes.desktopContainer}>
          <div className={classes.labels}>
            {isOnSale && <SaleLabel />}
            {isNew && <NewProductLabel />}
          </div>
          <img src={mainImg} alt={name} className={classes.mainImg} />
          <div className={classes.imgContainer}>
            {imagesUrls.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${name} ${i}`}
                className={classes.img}
                onClick={() => setMainImg(src)}
              />
            ))}
          </div>
        </div>
        <div className={classes.mobileContainer}>
          <div className={classes.labels}>
            {isOnSale && <SaleLabel />}
            {isNew && <NewProductLabel />}
          </div>
          <div
            className={classes.mobileImgs}
            ref={containerRef}
            onScroll={handleScroll}
          >
            {imagesUrls.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${name} ${i}`}
                className={classes.mobileImg}
              />
            ))}
          </div>

          {imagesUrls.length > 1 && (
            <div className={classes.dots}>
              {imagesUrls.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    classes.dot,
                    activeIndex === i && classes.active,
                  )}
                />
              ))}
            </div>
          )}
        </div>
        <div className={classes.container}>
          <h2 className={classes.title}>
            {name}
            <WishlistButton
              isLoading={isLoading}
              toggleLike={toggleLike}
              liked={liked}
            />
          </h2>
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
        <div
          className={classes.closeBtn}
          onClick={() => navigateToCategory(categoryName)}
        >
          ✕
        </div>
      </div>
    </PageTransition>
  );
}
