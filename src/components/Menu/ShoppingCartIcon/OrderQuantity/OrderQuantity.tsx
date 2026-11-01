import classes from "@/components/Menu/ShoppingCartIcon/OrderQuantity/OrderQuantity.module.scss";
import { useCartContext } from "@/context/CartContext";
import { sumBy } from "lodash";

export function OrderQuantity() {
  const { cartItems } = useCartContext();

  const quantity = sumBy(cartItems, "quantity");

  return <div role="status" className={classes.orderQuantity} aria-label={`${quantity} items in the shopping cart now`}>{quantity}</div>;
}
