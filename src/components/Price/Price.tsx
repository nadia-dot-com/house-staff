import classes from "@/components/Price/Price.module.scss";
import { memo } from "react";
import { getDiscountPrice } from "@/utils/product";
import { cn } from "@/utils/cn";

export const Price = memo(
  ({
    price,
    discount,
    size = "default",
  }: {
    price: number;
    discount: number;
    size?: "default" | "small";
  }) => {
    return (
      <div className={cn(classes.price, size === "small" && classes.small)}>
        {discount <= 0 ? (
          <div>${Number(price).toFixed(2)}</div>
        ) : (
          <div className={cn(size === "small" ? classes.discountContainerSmall : classes.discountContainer)}>
            <div className={classes.discountPrice} aria-label="Discount price">
              ${getDiscountPrice(price, discount).toFixed(2)}
            </div>
            <div className={classes.oldPrice} aria-label="Original price">${Number(price).toFixed(2)}</div>
          </div>
        )}
      </div>
    );
  },
);