import { FaCartShopping } from "react-icons/fa6";
import { cn } from "@/utils/cn";
import { useCartContext } from "@/context/CartContext";
import { OrderQuantity } from "./OrderQuantity/OrderQuantity";
import { useCartUiContext } from "@/context/CartUIContext";
import classes from "./ShopingCartIcon.module.css";

export function ShopingCartIcon({ active }: { active: boolean }) {
  const { toggleCartOpen } = useCartUiContext();
  const { cartItems } = useCartContext();

  const handleClick = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    toggleCartOpen();
  };

  return (
    <div
    
    >
      <FaCartShopping
        className={cn(classes.shopingCardIcon, active && classes.active)}
        onClick={handleClick}
      />
      {cartItems.length > 0 && <OrderQuantity />}
    </div>
  );
}
