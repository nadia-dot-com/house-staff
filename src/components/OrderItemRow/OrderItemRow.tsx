import classes from "@/components/OrderItemRow/OrderItemRow.module.scss";
import { useCartContext } from "@/context/CartContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { QuantityInput } from "@/components/QuantityInput/QuantityInput";
import { OrderItem } from "@/types/orderTypes";
import { getDiscountPrice } from "@/utils/product";
import { cn } from "@/utils/cn";
import { ShopLink } from "@/components/ShopLink/ShopLink";

export function OrderItemRowVisual({
  product,
  stockQuantity,
  removeFromCart,
  updateQuantity,
}: {
  product: OrderItem;
  stockQuantity: number;
  removeFromCart: () => void;
  updateQuantity: (id: string, quantity: number, stock: number) => void;
}) {
  const { id, name, categoryName, img, price, quantity, discount } = product;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    updateQuantity(id, newQuantity, stockQuantity);
  };

  const discountedPrice =
    discount > 0 ? getDiscountPrice(price, discount) : Number(price);

  const subtotal = (discountedPrice * quantity).toFixed(2);

  return (
    <div className={classes.orderItem}>
      <div className={classes.itemInfo}>
        <div className={classes.content}>
          <ShopLink
            className={classes.itemInfo}
            name={name}
            category={categoryName}
          >
            <div className={classes.title}>{name}</div>
          </ShopLink>

          <ShopLink
            className={classes.itemInfo}
            name={name}
            category={categoryName}
          >
            <img
              src={img}
              alt={name}
              className={classes.img}
              width="115"
              height="150"
            />
          </ShopLink>
        </div>
      </div>

      <div className={classes.actions}>
        <div className={classes.quantityGroup}>
          <QuantityInput
            quantity={quantity}
            stock={stockQuantity}
            onChange={handleQuantityChange}
            size="small"
          />

          <div
            className={cn(classes.price, discount > 0 && classes.discountPrice)}
          >
            Total:
            <br />
            ${subtotal}
          </div>
        </div>
      </div>
        <button
          onClick={removeFromCart}
          aria-label={`Remove ${name} from order`}
          className={classes.removeFromCart}
        >
          <RiDeleteBinLine />
        </button>
    </div>
  );
}

export function OrderItemRow({
  product,
  stockQuantity,
}: {
  product: OrderItem;
  stockQuantity: number;
}) {
  const { removeFromCart, updateQuantity } = useCartContext();

  const { id } = product;

  const handleRemoveFromCart = () => removeFromCart(id);

  return (
    <OrderItemRowVisual
      product={product}
      stockQuantity={stockQuantity}
      removeFromCart={handleRemoveFromCart}
      updateQuantity={updateQuantity}
    />
  );
}
