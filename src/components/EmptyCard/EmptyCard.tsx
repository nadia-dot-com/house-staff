import classes from "@/components/EmptyCard/EmptyCard.module.scss";
import { FaCartShopping } from "react-icons/fa6";

export function EmptyCard() {
  return (
    <h2 className={classes.emptyCard}>
      No products in the cart
      <FaCartShopping className={classes.shopingIcon} />
    </h2>
  );
}
