import classes from "./OrderModal.module.css";
import { EmptyCard } from "../../EmptyCard/EmptyCard";
import { useCartContext } from "@/context/CartContext";
import { useClickOutside } from "@/hooks/useClickOutside";
import { ShowOrder } from "./ShowOrder/ShowOrder";
import { useCartUiContext } from "@/context/CartUIContext";
import { motion } from "motion/react";

export function OrderModal() {
  const { toggleCartOpen } = useCartUiContext();
  const { cartItems } = useCartContext();
  const refCallback = useClickOutside(toggleCartOpen);

  const showContent = cartItems.length > 0;

  return (
    <motion.div
      key="login-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        ref={refCallback}
        className={classes.orderModal}
      >
        {showContent ? <ShowOrder cartItems={cartItems} /> : <EmptyCard />}
      </div>
    </motion.div>
  );
}
