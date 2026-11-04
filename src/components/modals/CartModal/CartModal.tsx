import classes from "@/components/modals/CartModal/CartModal.module.scss";
import { EmptyCard } from "@/components/EmptyCard/EmptyCard";
import { useCartContext } from "@/context/CartContext";
import { useCartUiContext } from "@/context/CartUIContext";
import { Modal } from "@/components/modals/Modal/Modal";
import { CartModalView } from "@/components/modals/CartModal/CartModalView/CartModalView";

export function CartModal() {
  const { toggleCartOpen, isCartOpen } = useCartUiContext();
  const { cartItems } = useCartContext();

  const showContent = cartItems.length > 0;

  return (
    <Modal key="cart-modal" ariaLabel="Shopping Cart modal" className={classes.orderModal} toggle={toggleCartOpen} isOpen={isCartOpen}>
         {showContent ? <CartModalView cartItems={cartItems} /> : <EmptyCard />}
    </Modal>
  );
}
