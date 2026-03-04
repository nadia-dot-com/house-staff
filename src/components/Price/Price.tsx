import { memo } from "react";
import { getDiscountPrice } from "../../utils/product";
import classes from "./Price.module.css";

export const Price = memo (
  ({ price, discount }: { price: number; discount: number }) => {
    return (
      <div className={classes.price}>
        {discount <= 0 ? (
          <div>${Number(price).toFixed(2)}</div>
        ) : (
          <div className={classes.discountContainer}>
            <div className={classes.discountPrice}>
              ${getDiscountPrice(price, discount).toFixed(2)}
            </div>
            <div className={classes.oldPrice}>${Number(price).toFixed(2)}</div>
          </div>
        )}
      </div>
    );
  },
);
