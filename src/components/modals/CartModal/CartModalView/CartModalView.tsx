import classes from "@/components/modals/CartModal/CartModalView/CartModalView.module.scss";
import { Button } from "@/components/Button/Button";
import { OrderItemRow } from "@/components/OrderItemRow/OrderItemRow";
import { useCartContext } from "@/context/CartContext";
import { useUserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes/Routes";
import { Subtotal } from "@/components/Subtotal/Subtotal";
import { OrderItem } from "@/types/orderTypes";
import { LoginButton } from "@/components/LoginButton/LoginButton";
import { useItemsByIds } from "@/hooks/products/useItemsByIds";
import { useCartUiContext } from "@/context/CartUIContext";

export function CartModalView({ cartItems }: { cartItems: OrderItem[] }) {
  const { toggleCartOpen } = useCartUiContext();
  const { clearCart } = useCartContext();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { productsMap, filteredProducts: cartProducts } = useItemsByIds(
    cartItems.map((i) => i.id),
  );

  const handleOrder = () => {
    const path = `${ROUTES.userAccount}/${ROUTES.shoppingCart}`;
    navigate(path);
    toggleCartOpen();
  };

  return (
    <div className={classes.showOrderWrapper}>
      <div className={classes.header}>
        <h2>Cart ({cartItems.length})</h2>

        <button className={classes.clearButton} onClick={clearCart}>
          CLEAR
        </button>
      </div>

      {cartProducts && (
        <div className={classes.orderList}>
          {cartItems.map((cartItem) => {
            const stockQuantity = productsMap[cartItem.id]?.stockQuantity ?? 0;
            return (
              <OrderItemRow
                key={cartItem.id}
                product={cartItem}
                stockQuantity={stockQuantity}
              />
            );
          })}
        </div>
      )}

      <div className={classes.total}>
        <Subtotal arr={cartItems} />
      </div>

      {user ? (
        <Button
          bgColor="black"
          textColor="white"
          text="COMPLETE ORDER"
          onClick={handleOrder}
          ariaLabel="complete order"
        />
      ) : (
        <LoginButton text="Login with Google" />
      )}
    </div>
  );
}
