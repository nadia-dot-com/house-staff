import classes from "@/components/OrderItemRow/OrderItemRow.module.scss";
import { useCartContext } from "@/context/CartContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { QuantityInput } from "@/components/QuantityInput/QuantityInput";
import { OrderItem } from "@/types/orderTypes";
import { ShopLink } from "@/components/ShopLink/ShopLink";
import { Price } from "@/components/Price/Price";

export function OrderItemRow({
  product,
  stockQuantity,
}: {
  product: OrderItem;
  stockQuantity: number;
}) {
  const { removeFromCart, updateQuantity } = useCartContext();
  const { id, name, categoryName, img, price, quantity, discount } = product;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    updateQuantity(id, newQuantity, stockQuantity);
  };

  const handleRemoveFromCart = () => removeFromCart(id);

  return (
    <div className={classes.orderItem}>
      <div className={classes.itemInfo}>
        <ShopLink name={name} category={categoryName}>
          <div className={classes.title}>{name}</div>
        </ShopLink>

        <ShopLink name={name} category={categoryName}>
          <img
            src={img}
            alt={name}
            className={classes.img}
            width="115"
            height="150"
          />
        </ShopLink>
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
            className={classes.price}
          >
            Total:
            <br />
            <Price price={price} discount={discount} size="small" />
          </div>
        </div>
      </div>
        <button
          onClick={handleRemoveFromCart}
          aria-label={`Remove ${name} from order`}
          className={classes.removeFromCart}
        >
          <RiDeleteBinLine />
        </button>
    </div>
  );
}
