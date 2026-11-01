import classes from "@/pages/UserAccount/NavAccount/ShoppingCart/CheckoutReview/CheckoutReview.module.scss";
import { OrderList } from "@/pages/UserAccount/NavAccount/ShoppingCart/CheckoutReview/CheckoutSections/OrderList/OrderList";
import { Payment } from "@/pages/UserAccount/NavAccount/ShoppingCart/CheckoutReview/CheckoutSections/Payment/Payment";
import { Subtotal } from "@/components/Subtotal/Subtotal";
import { Shipping } from "@/pages/UserAccount/NavAccount/ShoppingCart/CheckoutReview/CheckoutSections/Shipping/Shipping";
import { Vat } from "@/pages/UserAccount/NavAccount/ShoppingCart/CheckoutReview/CheckoutSections/VatSection/VatSection";
import { TotalPrice } from "@/pages/UserAccount/NavAccount/ShoppingCart/CheckoutReview/CheckoutSections/TotalSection/TotalSection";
import { OrderItem } from "@/types/orderTypes";
import { DeliveryMethod, PaymentMethod } from "@/types/api/options";

export function CheckoutReview({
  order,
  delivery,
  payment,
  total,
  vat,
  updateDelivery,
  updatePayment,
}: {
  order: OrderItem[];
  delivery: DeliveryMethod | null;
  payment: PaymentMethod | null;
  total: number;
  vat: number;
  updateDelivery: (data: DeliveryMethod) => void;
  updatePayment: (data: PaymentMethod) => void;
}) {
  const discount = order.some((el) => el.discount >= 0);

  return (
    <section className={classes.wrapper} aria-labelledby="checkout-section">
      <h2 id="checkout-section" className={classes.title}>
        Order Summary
      </h2>

      <OrderList orderItems={order} />

      <Subtotal arr={order} />

      <Shipping delivery={delivery} updateDelivery={updateDelivery} />

      <Payment payment={payment} updatePayment={updatePayment} />

      <Vat vat={vat} />

      <TotalPrice total={total} discount={discount} />
    </section>
  );
}
