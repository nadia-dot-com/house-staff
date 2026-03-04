import { FaCartShopping } from "react-icons/fa6";

import classes from "./ShopingCardIcon.module.css";
import { cn } from "../../../utils/cn";
import { useCartContext } from "../../../context/CartContext";
import { OrderQuantity } from "./OrderQuantity/OrderQuantity";
import { useCartUiContext } from "../../../context/CartUIContext";

export function ShopingCardIcon({ active }: { active: boolean }) {
  const { toggleCartOpen } = useCartUiContext();
  const { cartItems } = useCartContext();

  return (
    <div>
      <FaCartShopping
        className={cn(classes.shopingCardIcon, active && classes.active)}
        onClick={() => toggleCartOpen()}
      />
      {cartItems.length > 0 && <OrderQuantity />}
    </div>
  );
}
