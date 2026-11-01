import classes from "@/components/Menu/ShoppingCartIcon/ShoppingCartIcon.module.scss";
import { FaCartShopping } from "react-icons/fa6";
import { cn } from "@/utils/cn";
import { useCartContext } from "@/context/CartContext";
import { OrderQuantity } from "@/components/Menu/ShoppingCartIcon/OrderQuantity/OrderQuantity";
import { useCartUiContext } from "@/context/CartUIContext";

export function ShoppingCartIcon({ active }: { active: boolean }) {
  const { toggleCartOpen } = useCartUiContext();
  const { cartItems } = useCartContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleCartOpen();
  };

  return (
    <button onClick={handleClick} aria-label="Open shopping cart">
      <FaCartShopping
        className={cn(classes.shoppingCartIcon, active && classes.active)}
      />
      {cartItems.length > 0 && <OrderQuantity />}
    </button>
  );
}
