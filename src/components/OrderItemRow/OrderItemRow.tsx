import { useCartContext } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa6";
import { QuantityInput } from "../QuantityInput/QuantityInput";
import { OrderItem } from "../../types/orderTypes";
import { getDiscountPrice } from "../../utils/product";
import { cn } from "../../utils/cn";
import classes from "./OrderItemRow.module.css";
import { useShoppingNavigation } from "../../hooks/useShoppingNavigation";
import { memo, useCallback, useMemo } from "react";

export const OrderItemRowVisual = memo(
  ({
    product,
    stockQuantity,
    navigate,
    removeFromCart,
    updateQuantity,
  }: {
    product: OrderItem;
    stockQuantity: number;
    navigate: () => void;
    removeFromCart: () => void;
    updateQuantity: (id: string, quantity: number, stock: number) => void;
  }) => {
    const { id, name, img, price, quantity, discount } = product;

    const handleQuantityChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Number(e.target.value);
        updateQuantity(id, newQuantity, stockQuantity);
      },
      [id, stockQuantity, updateQuantity],
    );

    const discountedPrice = useMemo(() => {
      return discount > 0 ? getDiscountPrice(price, discount) : Number(price);
    }, [price, discount]);

    const subtotal = useMemo(() => {
      return (discountedPrice * quantity).toFixed(2);
    }, [discountedPrice, quantity]);

    const formattedPrice = useMemo(() => {
      return discountedPrice.toFixed(2);
    }, [discountedPrice]);
    return (
      <div className={classes.orderItem}>
        <div className={classes.itemInfo}>
          <div className={classes.text} onClick={navigate}>
            {name}
          </div>

          <img
            src={img}
            alt={name}
            className={classes.img}
            onClick={navigate}
            width="126"
            height="150"
          />
        </div>

        <QuantityInput
          quantity={quantity}
          stock={stockQuantity}
          onChange={handleQuantityChange}
        />

        <div
          className={cn(classes.price, discount > 0 && classes.discountPrice)}
        >
          Price:
          <br />
          <p>${formattedPrice}</p>
        </div>

        <div
          className={cn(classes.price, discount > 0 && classes.discountPrice)}
        >
          Subtotal:
          <br />
          <p>${subtotal}</p>
        </div>

        <FaTrash className={classes.removeFromCard} onClick={removeFromCart} />
      </div>
    );
  },
);
export const OrderItemRow = memo(
  ({
    product,
    stockQuantity,
  }: {
    product: OrderItem;
    stockQuantity: number;
  }) => {
    const { removeFromCart, updateQuantity } = useCartContext();
    const { navigateToCategory } = useShoppingNavigation();

    const { id, name, categoryName } = product;

    const handleNavigate = useCallback(
      () => navigateToCategory(categoryName, name),
      [name, categoryName, navigateToCategory],
    );

    const handleRemoveFromCart = useCallback(
      () => removeFromCart(id),
      [removeFromCart, id],
    );

    return (
      <OrderItemRowVisual
        product={product}
        stockQuantity={stockQuantity}
        navigate={handleNavigate}
        removeFromCart={handleRemoveFromCart}
        updateQuantity={updateQuantity}
      />
    );
  },
);
