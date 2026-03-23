import { useCartContext } from "@/context/CartContext";
import { sumBy } from "lodash";
import classes from "./OrderQuantity.module.css";

export function OrderQuantity() {
  const { cartItems } = useCartContext();

  const quantity = sumBy(cartItems, "quantity");

  return <div className={classes.orderQuantity}>{quantity}</div>;
}
