import classes from "@/components/modals/OrderModal/OrderModal.module.scss";
import { EmptyCard } from "@/components/EmptyCard/EmptyCard";
import { useCartContext } from "@/context/CartContext";
import { ShowOrder } from "@/components/modals/OrderModal/ShowOrder/ShowOrder";
import { useCartUiContext } from "@/context/CartUIContext";
import { Modal } from "@/components/modals/Modal/Modal";

export function OrderModal() {
  const { toggleCartOpen, isCartOpen } = useCartUiContext();
  const { cartItems } = useCartContext();

  const showContent = cartItems.length > 0;

  return (
    <Modal key="cart-modal" ariaLabel="Shopping Cart modal" className={classes.orderModal} toggle={toggleCartOpen} isOpen={isCartOpen}>
         {showContent ? <ShowOrder cartItems={cartItems} /> : <EmptyCard />}
    </Modal>
  );
}
