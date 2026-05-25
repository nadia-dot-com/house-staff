import classes from "./OrderModal.module.scss";
import { EmptyCard } from "../../EmptyCard/EmptyCard";
import { useCartContext } from "@/context/CartContext";
import { ShowOrder } from "./ShowOrder/ShowOrder";
import { useCartUiContext } from "@/context/CartUIContext";
import { Modal } from "../Modal/Modal";

export function OrderModal() {
  const { toggleCartOpen } = useCartUiContext();
  const { cartItems } = useCartContext();

  const showContent = cartItems.length > 0;

  return (
    <Modal key="cart-modal" ariaLabel="Shopping Cart modal" className={classes.orderModal} toggle={toggleCartOpen}>
         {showContent ? <ShowOrder cartItems={cartItems} /> : <EmptyCard />}
    </Modal>
  );
}
